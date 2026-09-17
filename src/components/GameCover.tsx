import Image from "next/image";

export function Cover({ game }: { game: { name: string; cover: string } }) {
  return (
    <Image
      src={`/games/${game.cover}.jpg`}
      alt={game.name}
      title={game.name}
      width={400}
      height={600}
      loading="lazy"
      className="aspect-[2/3] w-full rounded-[10px] object-cover"
    />
  );
}
