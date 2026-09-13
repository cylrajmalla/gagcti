import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, BrainCircuit, Database, Search, Workflow } from "lucide-react";

import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "AI Solutions",
  description: "AI strategy, LLM integrations, automation, and custom intelligent systems from Good As Gold Cyber Technologies Inc.",
};

const aiUseCases = [
  "Generative AI",
  "Large Language Models",
  "AI Agents",
  "Retrieval-Augmented Generation",
  "AI Automation",
  "Intelligent Search",
  "AI-Powered Applications",
  "Custom AI Integrations",
  "AI Strategy & Implementation",
];

const workflow = [
  { title: "Discovery", description: "Clarify the business opportunity and success criteria.", icon: Search },
  { title: "Architecture", description: "Design the right data and model stack for scale.", icon: Database },
  { title: "Implementation", description: "Build, integrate, and test AI across critical workflows.", icon: Bot },
  { title: "Optimization", description: "Measure performance, refine reliability, and improve outcomes.", icon: Workflow },
];

export default function AiSolutionsPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <PageHeader
        eyebrow="AI Solutions"
        title="INTELLIGENCE, ENGINEERED."
        description="We build AI solutions that move beyond experimentation and into real business operations."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="panel-surface rounded-[28px] border border-white/10 p-6">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d7b57a]/35 bg-[#d7b57a]/10 text-[#f4d79b]">
            <BrainCircuit size={22} />
          </div>
          <h2 className="text-3xl font-semibold text-white">Practical AI for mission-critical work.</h2>
          <p className="mt-5 text-stone-300">
            We help organizations identify where intelligence can create measurable impact, then design and implement secure, reliable, production-grade AI capabilities.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {aiUseCases.map((item) => (
              <span key={item} className="rounded-full border border-[#d7b57a]/30 bg-[#d7b57a]/10 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#f4d79b]">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="panel-surface rounded-[28px] border border-white/10 p-6">
          <div className="relative h-[340px] overflow-hidden rounded-[22px] border border-white/10 bg-[#0b0e12] p-4">
            <div className="absolute inset-0 opacity-80" style={{backgroundImage:'radial-gradient(circle at center, rgba(255,255,255,0.14) 0 1px, transparent 1px)', backgroundSize:'18px 18px'}} aria-hidden="true" />
            <div className="absolute left-[8%] top-[20%] h-2.5 w-2.5 rounded-full bg-[#f4d79b]" />
            <div className="absolute left-[33%] top-[46%] h-2.5 w-2.5 rounded-full bg-[#f4d79b]" />
            <div className="absolute left-[58%] top-[28%] h-2.5 w-2.5 rounded-full bg-[#f4d79b]" />
            <div className="absolute right-[12%] top-[54%] h-2.5 w-2.5 rounded-full bg-[#f4d79b]" />
            <div className="absolute left-[16%] top-[48%] h-px w-[52%] bg-gradient-to-r from-transparent via-[#d7b57a] to-transparent" />
            <div className="absolute left-[42%] top-[20%] h-[42%] w-px bg-gradient-to-b from-transparent via-[#d7b57a] to-transparent" />
            <div className="absolute left-[64%] top-[34%] h-[40%] w-px bg-gradient-to-b from-transparent via-[#d7b57a] to-transparent" />
          </div>
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {workflow.map(({ title, description, icon: Icon }) => (
          <div key={title} className="panel-surface rounded-[24px] border border-white/10 p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d7b57a]/35 bg-[#d7b57a]/10 text-[#f4d79b]">
              <Icon size={20} />
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-stone-300">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#d7b57a] px-6 py-3 text-sm font-semibold text-[#0a0b0d]">
          Build With AI <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}
