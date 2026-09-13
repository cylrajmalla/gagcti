import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-shell py-24">
      <div className="panel-surface rounded-[28px] border border-white/10 p-10 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#d7b57a]">404</p>
        <h1 className="mt-4 font-['Space_Grotesk',sans-serif] text-4xl font-semibold text-white sm:text-5xl">
          This page cannot be found.
        </h1>
        <p className="mt-4 text-stone-300">
          The information you’re looking for may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#d7b57a] px-6 py-3 text-sm font-semibold text-[#0a0b0d]"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
