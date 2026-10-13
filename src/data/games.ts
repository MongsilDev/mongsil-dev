export type Game = {
  name: string;
  hours: string; // 누적 플레이 시간 실측값, 천 단위 콤마
  cover: string;
  site: string; // 공식 사이트
};

// Steam 프로필 실측값, 소수점 버림
// 게임명은 영문 공식 표기
export const games: Game[] = [
  { name: "Eternal Return", hours: "7,488", cover: "eternalreturn", site: "https://playeternalreturn.com/" },
  { name: "Rainbow Six Siege", hours: "1,277", cover: "r6siege", site: "https://www.ubisoft.com/en-us/game/rainbow-six/siege" },
  { name: "Apex Legends", hours: "815", cover: "apex", site: "https://www.ea.com/games/apex-legends" },
  { name: "PUBG: BATTLEGROUNDS", hours: "185", cover: "pubg", site: "https://pubg.com/" },
  { name: "Palworld", hours: "172", cover: "palworld", site: "https://www.pocketpair.jp/palworld/" },
  { name: "Counter-Strike 2", hours: "170", cover: "cs2", site: "https://www.counter-strike.net/cs2" },
];

export const steamProfile = "https://steamcommunity.com/id/MongsilDev";

// Discord 프로필 보드 위젯 기준, 공개 API가 없어 수동 동기화
// cover는 public/games 파일명, 원본은 Steam 라이브러리 세로 표지, tarkov만 배너를 잘라낸 hero capsule
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
