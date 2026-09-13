import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Sparkles } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { careers } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore career opportunities in AI, cybersecurity, software engineering, data, and cloud at Good As Gold Cyber Technologies Inc.",
};

export default function CareersPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <PageHeader
        eyebrow="Careers"
        title="BUILD WHAT'S NEXT."
        description="We are building a technology organization focused on AI, cybersecurity, software engineering, data, and cloud transformation."
      />

      <div className="mt-14 rounded-[28px] border border-white/10 bg-[#090d12] p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#d7b57a]">Join us</p>
            <h2 className="mt-3 font-['Space_Grotesk',sans-serif] text-3xl font-semibold text-white">Shape what comes next.</h2>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#d7b57a] px-5 py-3 text-sm font-semibold text-[#0a0b0d]">
            View Opportunities <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className="mt-12 grid gap-6">
        {careers.map(({ title, type, location }) => (
          <div key={title} className="panel-surface flex flex-col gap-4 rounded-[24px] border border-white/10 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d7b57a]/35 bg-[#d7b57a]/10 text-[#f4d79b]">
                <BriefcaseBusiness size={20} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <div className="mt-2 flex flex-wrap gap-3 text-sm text-stone-300">
                  <span>{type}</span>
                  <span className="text-[#d7b57a]">•</span>
                  <span>{location}</span>
                </div>
              </div>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#f4d79b]">
              Apply <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-[28px] border border-white/10 bg-[#0d1217] p-8">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d7b57a]/35 bg-[#d7b57a]/10 text-[#f4d79b]">
          <Sparkles size={20} />
        </div>
        <h2 className="text-2xl font-semibold text-white">We are building for the next era of digital business.</h2>
        <p className="mt-4 max-w-3xl text-stone-300">
          Our teams work across AI, cybersecurity, software engineering, data, and cloud to solve real business challenges with technical depth and strategic thinking.
        </p>
      </div>
    </main>
  );
}
