import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Cloud, Database, GitBranch, Rocket } from "lucide-react";

import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Software Engineering",
  description: "Custom software engineering, architecture, QA, deployment, and product delivery services from Good As Gold Cyber Technologies Inc.",
};

const lifecycle = ["Discovery", "Architecture", "Design", "Development", "Testing", "Deployment", "Optimization"];

const categories = [
  "Web applications",
  "Mobile applications",
  "SaaS platforms",
  "Enterprise software",
  "APIs",
  "Cloud-native systems",
  "DevOps",
  "QA & automation",
];

const badges = [
  { title: "Product engineering", icon: Code2 },
  { title: "Cloud delivery", icon: Cloud },
  { title: "Data integration", icon: Database },
  { title: "Release operations", icon: Rocket },
];

export default function SoftwareEngineeringPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <PageHeader
        eyebrow="Software Engineering"
        title="FROM CONCEPT TO PRODUCTION."
        description="We support the complete software lifecycle, from discovery and architecture through deployment, optimization, and long-term feature evolution."
      />

      <div className="mt-14 rounded-[30px] border border-white/10 bg-[#090d12] p-6 sm:p-8">
        <div className="flex flex-wrap gap-3">
          {lifecycle.map((step, index) => (
            <div key={step} className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center rounded-full border border-[#d7b57a]/40 bg-[#d7b57a]/10 px-4 py-2 text-sm font-medium text-[#f4d79b]">
                {step}
              </span>
              {index < lifecycle.length - 1 ? <ArrowRight size={16} className="text-stone-500" /> : null}
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {badges.map(({ title, icon: Icon }) => (
            <div key={title} className="rounded-[22px] border border-white/10 bg-[#0d1217] p-5">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d7b57a]/35 bg-[#d7b57a]/10 text-[#f4d79b]">
                <Icon size={18} />
              </div>
              <h2 className="text-lg font-semibold text-white">{title}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-[28px] border border-white/10 bg-[#0d1217]/80 p-8">
        <div className="mb-6 flex items-center gap-3 text-[#f4d79b]">
          <GitBranch size={20} />
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">Technology categories</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div key={category} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm text-stone-200">
              {category}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#d7b57a] px-6 py-3 text-sm font-semibold text-[#0a0b0d]">
          Start a Project <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}
