import steam from "./steam.json";

export type Game = {
  name: string;
  hours: string; // 누적 플레이 시간, 천 단위 콤마
  cover: string;
  site: string; // 공식 사이트
};

type Known = Omit<Game, "hours"> & { appid: number; hours: number };

// 순서와 시간은 빌드 때 scripts/steam-sync.mjs가 받은 steam.json을 따르고, 못 받으면 아래 값을 씀
// 게임명은 영문 공식 표기
const known: Known[] = [
  { appid: 1049590, name: "Eternal Return", hours: 7493, cover: "eternalreturn", site: "https://playeternalreturn.com/" },
  { appid: 359550, name: "Rainbow Six Siege", hours: 1277, cover: "r6siege", site: "https://www.ubisoft.com/en-us/game/rainbow-six/siege" },
  { appid: 1172470, name: "Apex Legends", hours: 815, cover: "apex", site: "https://www.ea.com/games/apex-legends" },
  { appid: 578080, name: "PUBG: BATTLEGROUNDS", hours: 185, cover: "pubg", site: "https://pubg.com/" },
  { appid: 1623730, name: "Palworld", hours: 172, cover: "palworld", site: "https://www.pocketpair.jp/palworld/" },
  { appid: 730, name: "Counter-Strike 2", hours: 170, cover: "cs2", site: "https://www.counter-strike.net/cs2" },
];

const played: { appid: number; name: string; hours: number }[] = steam.length ? steam : known;

export const games: Game[] = played.map((g) => {
  const k = known.find((x) => x.appid === g.appid);
  return {
    name: k?.name ?? g.name,
    hours: g.hours.toLocaleString("en-US"),
    cover: k?.cover ?? `steam-${g.appid}`,
    site: k?.site ?? `https://store.steampowered.com/app/${g.appid}/`,
  };
});

export const steamProfile = "https://steamcommunity.com/id/MongsilDev";

// Discord 프로필 보드 위젯 기준, 공개 API가 없어 수동 동기화
// cover는 public/games 파일명에서 -폭.webp 앞부분, 원본은 Steam 라이브러리 세로 표지, tarkov만 배너를 잘라낸 hero capsule
export type FavoriteGame = {
  name: string;
  cover: string;
  site: string;
};

export const favoriteGame: FavoriteGame = { name: "Escape from Tarkov", cover: "tarkov", site: "https://www.escapefromtarkov.com/" };

export const likedGames: FavoriteGame[] = [
  { name: "WARDOGS", cover: "wardogs", site: "https://www.wardogs.com/" },
  { name: "Call of Duty: Modern Warfare III", cover: "mw3", site: "https://www.callofduty.com/modernwarfare3" },
  { name: "Ready or Not", cover: "readyornot", site: "https://voidinteractive.net/" },
  { name: "Squad", cover: "squad", site: "https://joinsquad.com/" },
  { name: "Eternal Return", cover: "eternalreturn", site: "https://playeternalreturn.com/" },
  { name: "Apex Legends", cover: "apex", site: "https://www.ea.com/games/apex-legends" },
  { name: "Monster Hunter: World", cover: "mhworld", site: "https://www.monsterhunter.com/world/" },
  { name: "Death Stranding", cover: "deathstranding", site: "https://www.kojimaproductions.jp/en/death-stranding-dc" },
];

export const currentGames: FavoriteGame[] = [
  { name: "Arknights: Endfield", cover: "endfield", site: "https://endfield.gryphline.com/" },
  { name: "Neverness to Everness", cover: "nte", site: "https://nte.perfectworld.com/" },
];
