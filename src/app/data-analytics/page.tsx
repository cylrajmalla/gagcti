import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Database, LineChart, SearchCheck, Sparkles } from "lucide-react";

import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Data & Analytics",
  description: "Data engineering, analytics, dashboards, and AI-powered intelligence services from Good As Gold Cyber Technologies Inc.",
};

const capabilities = [
  { title: "Data strategy", description: "Align data architecture with decision-making, product goals, and operational needs.", icon: BarChart3 },
  { title: "Analytics & dashboards", description: "Turn fragmented data into consistent, useful insights and reporting systems.", icon: LineChart },
  { title: "Data engineering", description: "Create reliable pipelines and scalable models for modern business operations.", icon: Database },
  { title: "AI-powered insights", description: "Combine historical data, model intelligence, and automation to improve decisions.", icon: Sparkles },
];

export default function DataAnalyticsPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <PageHeader
        eyebrow="Data & Analytics"
        title="Actionable intelligence for faster decisions."
        description="We turn complex data into clear, strategic advantage through engineering, analytics, dashboards, and AI-enabled insight delivery."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {capabilities.map(({ title, description, icon: Icon }) => (
          <div key={title} className="panel-surface rounded-[24px] border border-white/10 p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d7b57a]/35 bg-[#d7b57a]/10 text-[#f4d79b]">
              <Icon size={20} />
            </div>
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="rounded-[28px] border border-white/10 bg-[#090d12] p-8">
          <h2 className="font-['Space_Grotesk',sans-serif] text-3xl font-semibold text-white">From raw information to strategic output.</h2>
          <ul className="mt-8 space-y-4 text-stone-200">
            {[
              "Data platform modernization and integration",
              "Dashboards and performance monitoring",
              "AI-enhanced analytics and recommendations",
              "Operational intelligence for leadership and teams",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <SearchCheck className="mt-1 text-[#f4d79b]" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="panel-surface rounded-[28px] border border-white/10 p-6">
          <div className="rounded-[22px] border border-white/10 bg-[#0d1217] p-5">
            <div className="mb-4 flex items-center justify-between text-stone-300">
              <span>Operational signal</span>
              <span className="text-[#f4d79b]">Live</span>
            </div>
            <div className="space-y-4">
              {[70, 85, 62, 92, 78].map((value, index) => (
                <div key={value}>
                  <div className="mb-2 flex justify-between text-xs uppercase tracking-[0.14em] text-stone-400">
                    <span>Layer {index + 1}</span>
                    <span>{value}%</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/5">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#d7b57a] to-[#f4d79b]" style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#d7b57a] px-6 py-3 text-sm font-semibold text-[#0a0b0d]">
          Unlock Data Potential <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}
