import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-[clamp(7rem,28vw,16rem)] font-extrabold leading-none tracking-[-0.05em] text-bone">
        404
      </p>
      <p className="mt-2 font-mono text-sm uppercase tracking-[0.3em] text-ember sm:text-base">
        Not Found
      </p>
      <Link
        href="/"
        className="mt-12 font-mono text-sm text-muted transition-colors hover:text-ember"
      >
        ← 돌아가기
      </Link>
    </main>
  );
}
