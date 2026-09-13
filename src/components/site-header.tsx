'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navItems } from "@/data/site-content";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#07090d]/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-6 border-b border-white/10">
          <Link href="/" className="flex items-center gap-3 text-left" aria-label="Good As Gold Cyber Technologies Inc. home">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7b57a]/40 bg-[#d7b57a]/10 text-xs font-semibold text-[#f2d9a0] shadow-[0_0_18px_rgba(215,181,122,0.25)]">
              G
            </div>
            <div>
              <div className="text-[0.7rem] font-semibold tracking-[0.32em] text-[#f3efe7]">
                GOOD AS GOLD
              </div>
              <div className="text-[0.52rem] font-medium uppercase tracking-[0.28em] text-[#d7b57a]">
                CYBER TECHNOLOGIES INC.
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? "text-[#f2d9a0]" : "text-stone-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-[#d7b57a]/60 bg-[#d7b57a] px-5 py-2.5 text-sm font-semibold text-[#0a0b0d] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(215,181,122,0.28)]"
            >
              Start a Conversation
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-[#07090d]/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`border-b border-white/5 py-3 text-sm font-medium ${
                  pathname === item.href ? "text-[#f2d9a0]" : "text-stone-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full border border-[#d7b57a]/60 bg-[#d7b57a] px-5 py-2.5 text-sm font-semibold text-[#0a0b0d]"
            >
              Start a Conversation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
