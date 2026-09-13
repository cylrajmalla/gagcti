import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { industries } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Industries",
  description: "Industry expertise across FinTech, healthcare, SaaS, cybersecurity, logistics, manufacturing, and more.",
};

export default function IndustriesPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <PageHeader
        eyebrow="Industries"
        title="Industry alignment for high-stakes digital work."
        description="We help organizations in complex sectors modernize securely, reduce operational friction, and deliver strategic technology outcomes."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
        {industries.map(({ title, description, icon: Icon }) => (
          <div key={title} className="group rounded-[24px] border border-white/10 bg-[#0d1218] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d7b57a]/60">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#d7b57a]/35 bg-[#d7b57a]/10 text-[#f4d79b]">
              <Icon size={18} />
            </div>
            <h2 className="text-lg font-semibold text-white">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-stone-300">{description}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#f4d79b]">
              Learn more <ArrowRight size={14} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
