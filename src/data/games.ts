export type Game = {
  name: string;
  hours: string; // 누적 플레이 시간 실측값, 천 단위 콤마
  cover: string;
};

// Steam 프로필 실측값, 소수점 버림
// 게임명은 영문 공식 표기
export const games: Game[] = [
  { name: "Eternal Return", hours: "7,488", cover: "eternalreturn" },
  { name: "Rainbow Six Siege", hours: "1,277", cover: "r6siege" },
  { name: "Apex Legends", hours: "815", cover: "apex" },
  { name: "PUBG: BATTLEGROUNDS", hours: "185", cover: "pubg" },
  { name: "Palworld", hours: "172", cover: "palworld" },
  { name: "Counter-Strike 2", hours: "170", cover: "cs2" },
];

export const steamProfile = "https://steamcommunity.com/id/MongsilDev";

// Discord 프로필 보드 위젯 기준, 공개 API가 없어 수동 동기화
// cover는 public/games 파일명, 원본은 Steam 라이브러리 세로 표지, tarkov만 배너를 잘라낸 hero capsule
export type FavoriteGame = {
  name: string;
  cover: string;
};

export const favoriteGame: FavoriteGame = { name: "Escape from Tarkov", cover: "tarkov" };

export const likedGames: FavoriteGame[] = [
  { name: "WARDOGS", cover: "wardogs" },
  { name: "Call of Duty: Modern Warfare III", cover: "mw3" },
  { name: "Ready or Not", cover: "readyornot" },
  { name: "Squad", cover: "squad" },
  { name: "Eternal Return", cover: "eternalreturn" },
  { name: "Apex Legends", cover: "apex" },
  { name: "Monster Hunter: World", cover: "mhworld" },
  { name: "Death Stranding", cover: "deathstranding" },
];

export const currentGames: FavoriteGame[] = [
  { name: "Arknights: Endfield", cover: "endfield" },
  { name: "Neverness to Everness", cover: "nte" },
];
