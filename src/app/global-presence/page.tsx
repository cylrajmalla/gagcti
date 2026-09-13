import type { Metadata } from "next";
import { Globe2 } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { globalMarkets } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Global Presence",
  description: "Global technology delivery and collaboration across the Americas, Europe, Australia, the Middle East, and Asia-Pacific.",
};

export default function GlobalPresencePage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <PageHeader
        eyebrow="Global Presence"
        title="GLOBAL THINKING. LOCAL EXECUTION."
        description="The company works with organizations and partners across the Americas, Europe, Australia, the Middle East, and Asia-Pacific."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="panel-surface relative overflow-hidden rounded-[28px] border border-white/10 p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(215,181,122,0.16),transparent_30%)]" aria-hidden="true" />
          <div className="relative h-[420px] overflow-hidden rounded-[22px] border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(17,27,36,0.9),rgba(10,11,15,0.98))]">
            <div className="absolute inset-0 opacity-70" style={{backgroundImage:'radial-gradient(circle at center, rgba(255,255,255,0.12) 0 1px, transparent 1px)', backgroundSize:'20px 20px'}} aria-hidden="true" />
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7b57a]/30" />
            <div className="absolute left-[18%] top-[30%] h-2.5 w-2.5 rounded-full bg-[#f4d79b] shadow-[0_0_22px_rgba(215,181,122,0.9)]" />
            <div className="absolute left-[68%] top-[22%] h-2.5 w-2.5 rounded-full bg-[#f4d79b] shadow-[0_0_22px_rgba(215,181,122,0.9)]" />
            <div className="absolute left-[52%] top-[62%] h-2.5 w-2.5 rounded-full bg-[#f4d79b] shadow-[0_0_22px_rgba(215,181,122,0.9)]" />
            <div className="absolute left-[20%] top-[54%] h-px w-[48%] rotate-12 bg-gradient-to-r from-transparent via-[#d7b57a] to-transparent" />
            <div className="absolute left-[38%] top-[20%] h-[42%] w-px bg-gradient-to-b from-transparent via-[#d7b57a] to-transparent" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {globalMarkets.map((market, index) => (
            <div key={market} className="rounded-[24px] border border-white/10 bg-[#0d1218] p-5">
              <div className="mb-3 flex items-center gap-2 text-[#f4d79b]">
                <Globe2 size={16} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">{index + 1}</span>
              </div>
              <h2 className="text-xl font-semibold text-white">{market}</h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
