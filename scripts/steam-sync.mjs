// Steam 플레이 시간 상위 게임을 src/data/steam.json에 씀. 빌드 전에 돌고, 키나 응답이 없으면 기존 파일을 둠
// --check면 값이 바뀌었을 때 종료 코드 10, 정기 갱신 작업이 배포 여부를 정하는 데 씀
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import sharp from "sharp";

const STEAM_ID = "76561198828582418";
const TOP = 6;
const OUT = new URL("../src/data/steam.json", import.meta.url);
const GAMES_TS = new URL("../src/data/games.ts", import.meta.url);
const COVERS = new URL("../public/games/", import.meta.url);
const KEY_FILE = `${homedir()}/docker/mongsil-bot/.env`;

function apiKey() {
  if (process.env.STEAM_API_KEY) return process.env.STEAM_API_KEY;
  if (!existsSync(KEY_FILE)) return "";
  const m = readFileSync(KEY_FILE, "utf8").match(/^STEAM_API_KEY=['"]?([^'"\s]*)/m);
  return m ? m[1] : "";
}

const previous = existsSync(OUT) ? readFileSync(OUT, "utf8") : "";
const keep = (why) => {
  console.log(`steam: ${why}, 기존 값 유지`);
  if (!previous) writeFileSync(OUT, "[]\n");
  process.exit(0);
};

const key = apiKey();
if (!key) keep("키 없음");

let games;
try {
  const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${key}&steamid=${STEAM_ID}&include_appinfo=1&include_played_free_games=1`;
  const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
  if (!res.ok) keep(`HTTP ${res.status}`);
  games = (await res.json()).response?.games;
} catch (e) {
  keep(e.name);
}
if (!games?.length) keep("목록 비공개이거나 비어 있음");

const top = games
  .sort((a, b) => b.playtime_forever - a.playtime_forever)
  .slice(0, TOP)
  .map((g) => ({ appid: g.appid, name: g.name, hours: Math.floor(g.playtime_forever / 60) }));

// games.ts에 표지가 정해지지 않은 게임은 Steam 세로 표지로 steam-<appid> 세 폭을 만듦
const known = readFileSync(GAMES_TS, "utf8");
for (const { appid } of top) {
  if (known.includes(`appid: ${appid},`) || existsSync(new URL(`steam-${appid}-400.webp`, COVERS))) continue;
  const res = await fetch(`https://shared.steamstatic.com/store_item_assets/steam/apps/${appid}/library_600x900.jpg`);
  if (!res.ok) {
    console.log(`steam: ${appid} 표지 없음 HTTP ${res.status}`);
    continue;
  }
  const img = Buffer.from(await res.arrayBuffer());
  for (const w of [100, 200, 400]) {
    await sharp(img).resize(w, w * 1.5, { fit: "cover" }).webp({ quality: 82 }).toFile(new URL(`steam-${appid}-${w}.webp`, COVERS).pathname);
  }
  console.log(`steam: ${appid} 표지 만듦`);
}

const next = JSON.stringify(top, null, 2) + "\n";
if (next === previous) {
  console.log("steam: 그대로");
  process.exit(0);
}
writeFileSync(OUT, next);
console.log("steam: 바뀜", top.map((g) => `${g.appid}:${g.hours}`).join(" "));
process.exit(process.argv.includes("--check") ? 10 : 0);
