import Image from "next/image";

// 표지 파일을 같은 이름으로 교체하면 올릴 것, CDN과 브라우저 12시간 캐시
export const COVER_VERSION = 2;

export function Cover({ game }: { game: { name: string; cover: string } }) {
  return (
    <Image
      src={`/games/${game.cover}.jpg?v=${COVER_VERSION}`}
      alt={game.name}
      title={game.name}
      width={400}
      height={600}
      loading="lazy"
      className="aspect-[2/3] w-full rounded-[10px] object-cover"
    />
  );
}
