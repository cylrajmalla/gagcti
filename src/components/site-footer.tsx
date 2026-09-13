import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#05070a]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="mb-4 text-[0.8rem] font-semibold tracking-[0.34em] text-[#f3efe7]">
              GOOD AS GOLD
            </div>
            <div className="text-[0.6rem] font-medium uppercase tracking-[0.32em] text-[#d7b57a]">
              CYBER TECHNOLOGIES INC.
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-stone-300">
              Pioneering the Future.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
              Company
            </p>
            <ul className="space-y-3 text-sm text-stone-300">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/global-presence" className="hover:text-white">Global Presence</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
              Services
            </p>
            <ul className="space-y-3 text-sm text-stone-300">
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/ai-solutions" className="hover:text-white">AI Solutions</Link></li>
              <li><Link href="/cybersecurity" className="hover:text-white">Cybersecurity</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
              Industries
            </p>
            <ul className="space-y-3 text-sm text-stone-300">
              <li><Link href="/industries" className="hover:text-white">Industries</Link></li>
              <li><Link href="/data-analytics" className="hover:text-white">Data & Analytics</Link></li>
              <li><Link href="/software-engineering" className="hover:text-white">Software Engineering</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
              Connect
            </p>
            <ul className="space-y-3 text-sm text-stone-300">
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Good As Gold Cyber Technologies Inc.</p>
          <p>Built for global technology transformation.</p>
        </div>
      </div>
    </footer>
  );
}
