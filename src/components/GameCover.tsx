// 표지 파일을 같은 이름으로 교체하면 올릴 것, CDN과 브라우저 12시간 캐시
export const COVER_VERSION = 3;

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

// public/games에 원본 폭, 절반, 4분의 1 세 가지 webp가 있음
export function CoverImage({
  game,
  width,
  height,
  sizes,
  className,
}: {
  game: CoverGame;
  width: number;
  height: number;
  sizes: string;
  className: string;
}) {
  const src = (w: number) => `/games/${game.cover}-${w}.webp?v=${COVER_VERSION}`;
  const widths = [Math.floor(width / 4), width / 2, width];
  return (
    // eslint-disable-next-line @next/next/no-img-element -- 정적 export라 next/image 최적화가 없어 srcSet을 직접 씀
    <img
      src={src(width)}
      srcSet={widths.map((w) => `${src(w)} ${w}w`).join(", ")}
      sizes={sizes}
      alt={game.name}
      title={game.name}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}

export function Cover({ game, sizes = "96px" }: { game: CoverGame; sizes?: string }) {
  return (
    <GameLink game={game}>
      <CoverImage
        game={game}
        width={400}
        height={600}
        sizes={sizes}
        className="aspect-[2/3] w-full rounded-[10px] object-cover"
      />
    </GameLink>
  );
}
