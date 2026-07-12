import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-sm text-ember">404</p>
      <h1 className="font-display text-4xl font-semibold text-bone sm:text-5xl">
        여기엔 아무것도 안 굴러가는데.
      </h1>
      <Link
        href="/"
        className="font-mono text-sm text-muted transition-colors hover:text-ember"
      >
        ← 돌아가기
      </Link>
    </main>
  );
}
