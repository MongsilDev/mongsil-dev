import Image from "next/image";

// 표지 파일을 같은 이름으로 교체하면 올릴 것, CDN과 브라우저 12시간 캐시
export const COVER_VERSION = 2;

type CoverGame = { name: string; cover: string; site: string };

export function GameLink({ game, children }: { game: CoverGame; children: React.ReactNode }) {
  return (
    <a
      href={game.site}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${game.name} official site`}
      className="block rounded-[10px] transition-[opacity,transform] duration-200 hover:-translate-y-0.5 hover:opacity-85"
    >
      {children}
    </a>
  );
}

export function Cover({ game }: { game: CoverGame }) {
  return (
    <GameLink game={game}>
      <Image
        src={`/games/${game.cover}.jpg?v=${COVER_VERSION}`}
        alt={game.name}
        title={game.name}
        width={400}
        height={600}
        loading="lazy"
        className="aspect-[2/3] w-full rounded-[10px] object-cover"
      />
    </GameLink>
  );
}
