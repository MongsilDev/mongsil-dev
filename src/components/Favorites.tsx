import { currentGames, favoriteGame, likedGames } from "@/data/games";
import { Cover, CoverImage, GameLink } from "./GameCover";
import { Section } from "./Section";
import { ScrollCue } from "./ScrollCue";

export function Favorites() {
  return (
    <Section id="favorites" tone="light" className="pt-20 pb-20">
      <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
        Favorites
      </h2>

      <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:gap-10">
        <div className="w-52 shrink-0 lg:w-[275px]">
          <Label>Favorite</Label>
          <GameLink game={favoriteGame}>
            <CoverImage
              game={favoriteGame}
              width={748}
              height={828}
              sizes="(min-width: 1024px) 275px, 208px"
              className="aspect-[748/828] w-full rounded-[10px] object-cover"
            />
          </GameLink>
        </div>

        <div className="lg:w-24">
          <Label>Now playing</Label>
          <ul className="grid grid-cols-4 gap-4 lg:grid-cols-1">
            {currentGames.map((g) => (
              <li key={g.cover}>
                <Cover game={g} />
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 lg:w-[432px]">
          <Label>Liked</Label>
          <ul className="grid grid-cols-4 gap-4">
            {likedGames.map((g) => (
              <li key={g.cover}>
                <Cover game={g} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ScrollCue href="#setup" label="Setup" />
    </Section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 whitespace-nowrap border-b border-hairline pb-3 text-[14px] text-fg-muted">
      {children}
    </h3>
  );
}
