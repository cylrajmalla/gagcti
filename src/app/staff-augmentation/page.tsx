import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Users, Zap } from "lucide-react";

import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Staff Augmentation",
  description: "Highly skilled engineering and technology professionals to extend internal teams through IT staff augmentation from Good As Gold Cyber Technologies Inc.",
};

const offerings = [
  { title: "Engineering talent", description: "Access skilled developers, engineers, and technical specialists when you need them.", icon: Users },
  { title: "Flexible scaling", description: "Expand or adjust delivery capacity without changing your core organizational structure.", icon: Zap },
  { title: "Project support", description: "Plug into active initiatives across AI, security, software, and data workstreams.", icon: BriefcaseBusiness },
];

export default function StaffAugmentationPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <PageHeader
        eyebrow="Staff Augmentation"
        title="Technology talent that fits your pace."
        description="We provide highly skilled engineering and technology professionals to extend internal teams and accelerate delivery with minimal friction."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {offerings.map(({ title, description, icon: Icon }) => (
          <div key={title} className="panel-surface rounded-[24px] border border-white/10 p-6">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d7b57a]/35 bg-[#d7b57a]/10 text-[#f4d79b]">
              <Icon size={20} />
            </div>
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-[28px] border border-white/10 bg-[#090d12] p-8">
        <h2 className="font-['Space_Grotesk',sans-serif] text-3xl font-semibold text-white">Designed for high-velocity environments.</h2>
        <p className="mt-5 max-w-3xl text-stone-300">
          Whether you need to augment a team for a digital transformation initiative, support a software roadmap, or bring specialized expertise into a cybersecurity or AI program, we provide professionals who can integrate quickly and contribute with confidence.
        </p>
      </div>

      <div className="mt-16 flex justify-center">
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#d7b57a] px-6 py-3 text-sm font-semibold text-[#0a0b0d]">
          Talk to Our Team <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}
