import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2, Network, Shield, Sparkles } from "lucide-react";

import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how Good As Gold Cyber Technologies Inc. combines AI, cybersecurity, engineering, and global delivery for transformative digital solutions.",
};

const pillars = [
  {
    title: "Global technology capability",
    description: "We operate with a global mindset and delivery model designed for international business environments.",
    icon: Globe2,
  },
  {
    title: "Engineering excellence",
    description: "We apply disciplined engineering practices to build resilient, performant, and scalable systems.",
    icon: Network,
  },
  {
    title: "AI-first thinking",
    description: "Intelligence is embedded into strategy, product design, and operational workflows across engagements.",
    icon: Sparkles,
  },
  {
    title: "Security by design",
    description: "Cybersecurity is treated as a foundation to every architecture, platform, and operational decision.",
    icon: Shield,
  },
];

export default function AboutPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <PageHeader
        eyebrow="About"
        title="Technology Without Boundaries."
        description="Good As Gold Cyber Technologies Inc. combines technology expertise, strategic thinking, and global talent to help organizations build, modernize, secure, and scale their technology infrastructure."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="panel-surface rounded-[28px] border border-white/10 p-6">
          <div className="flex h-[360px] items-center justify-center rounded-[22px] border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(215,181,122,0.18),transparent_30%),linear-gradient(180deg,#111820,#0b0d12)]">
            <div className="relative h-60 w-60 rounded-full border border-[#d7b57a]/40">
              <div className="absolute inset-7 rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7b57a]/30" />
              <div className="absolute left-[20%] top-[28%] h-2.5 w-2.5 rounded-full bg-[#f4d79b]" />
              <div className="absolute right-[16%] top-[34%] h-2.5 w-2.5 rounded-full bg-[#f4d79b]" />
              <div className="absolute left-[48%] top-[74%] h-2.5 w-2.5 rounded-full bg-[#f4d79b]" />
              <div className="absolute left-[35%] top-[45%] h-px w-[32%] rotate-12 bg-gradient-to-r from-transparent via-[#d7b57a] to-transparent" />
              <div className="absolute left-[18%] top-[58%] h-px w-[38%] -rotate-12 bg-gradient-to-r from-transparent via-[#d7b57a] to-transparent" />
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-lg text-stone-200">
            We help organizations turn ambitious digital strategies into practical results through secure architecture, modern software delivery, and meaningful business transformation.
          </p>
          <p className="text-stone-300">
            From AI strategy and platform modernization to cybersecurity and custom engineering, we work as a strategic technology partner focused on sustainable growth and operational resilience.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#d7b57a] px-5 py-3 text-sm font-semibold text-[#0a0b0d]">
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {pillars.map(({ title, description, icon: Icon }) => (
          <div key={title} className="panel-surface rounded-[24px] border border-white/10 p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d7b57a]/35 bg-[#d7b57a]/10 text-[#f4d79b]">
              <Icon size={20} />
            </div>
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-[28px] border border-white/10 bg-[#090d12] p-8">
        <h2 className="font-['Space_Grotesk',sans-serif] text-3xl font-semibold text-white">Built for long-term collaboration.</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            "Scalable architecture and modernization roadmaps",
            "Security-first engineering and governance alignment",
            "AI-enabled operations and process optimization",
            "Transparent partnerships with measurable business focus",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-stone-200">
              <CheckCircle2 className="mt-0.5 text-[#f4d79b]" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
