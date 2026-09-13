import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BrainCircuit, Cloud, Database, ShieldCheck, Workflow } from "lucide-react";

import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Services",
  description: "AI, cybersecurity, software engineering, data, and digital transformation services from Good As Gold Cyber Technologies Inc.",
};

const serviceCards = [
  {
    title: "AI Solution Building & Implementation",
    description: "Build practical AI systems, LLM applications, AI agents, automation platforms, and intelligent business solutions.",
    icon: BrainCircuit,
  },
  {
    title: "Cybersecurity",
    description: "Protect applications, infrastructure, endpoints, data, and digital operations with modern cybersecurity strategies.",
    icon: ShieldCheck,
  },
  {
    title: "Software Engineering",
    description: "Design and build scalable web, mobile, SaaS, enterprise, and custom software platforms.",
    icon: Workflow,
  },
  {
    title: "Data & Analytics",
    description: "Turn complex data into actionable intelligence through data engineering, analytics, dashboards, and AI-powered insights.",
    icon: Database,
  },
  {
    title: "IT Staff Augmentation",
    description: "Provide highly skilled engineering and technology professionals to extend internal teams.",
    icon: Cloud,
  },
  {
    title: "Digital Transformation",
    description: "Modernize legacy systems, optimize workflows, adopt cloud technologies, and integrate intelligent automation.",
    icon: ArrowUpRight,
  },
];

export default function ServicesPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <PageHeader
        eyebrow="Services"
        title="Technology services built for complex goals."
        description="From AI strategy and software delivery to cybersecurity and digital transformation, we help organizations move from ambition to operational reality."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {serviceCards.map(({ title, description, icon: Icon }) => (
          <div key={title} className="panel-surface rounded-[24px] border border-white/10 p-6">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d7b57a]/35 bg-[#d7b57a]/10 text-[#f4d79b]">
              <Icon size={22} />
            </div>
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">{description}</p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#f4d79b]">
              Explore Service <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
