import Link from "next/link";

export default function NotFound() {
  return (
    <main
      data-page="404"
      className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <p className="text-[clamp(7rem,28vw,16rem)] font-semibold leading-none tracking-[-0.04em] text-fg">
        404
      </p>
      <p className="mt-3 text-[17px] text-fg-muted">Not Found</p>
      <Link href="/" className="mt-12 text-[17px] text-link hover:underline">
        Back to home <span aria-hidden="true">›</span>
      </Link>
    </main>
  );
}
