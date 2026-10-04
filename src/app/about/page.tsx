import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2, MapPin, Network, Shield, Sparkles } from "lucide-react";

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

      <div className="mt-14 max-w-3xl space-y-5">
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

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <section className="overflow-hidden rounded-[24px] border border-white/10 bg-[#090d12]">
          <div className="p-6">
            <div className="mb-3 flex items-center gap-2 text-[#f4d79b]">
              <MapPin size={16} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">Nepal Office</span>
            </div>
            <h2 className="text-xl font-semibold text-white">Gyaneshwor, Kathmandu</h2>
          </div>
          <iframe
            title="Good As Gold Cyber Tech Inc. Nepal office in Gyaneshwor, Kathmandu"
            src={`https://gallimap.com/static/map.html?lat=27.709299804378418&lng=85.32909097152516&markerColor=%23d7b57a&markerLabel=${encodeURIComponent("Good As Gold Cyber Tech Inc. - Nepal Office")}&accessToken=${encodeURIComponent(process.env.NEXT_PUBLIC_GALLI_MAP_KEY ?? "")}`}
            className="h-[320px] w-full border-0 sm:h-[360px]"
            loading="lazy"
            allowFullScreen
          />
        </section>

        <section className="overflow-hidden rounded-[24px] border border-white/10 bg-[#090d12]">
          <div className="p-6">
            <div className="mb-3 flex items-center gap-2 text-[#f4d79b]">
              <MapPin size={16} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">United States Headquarters</span>
            </div>
            <h2 className="text-xl font-semibold text-white">425 East 53rd Street, New York, NY 10022</h2>
          </div>
          <iframe
            title="Good As Gold Cyber Tech Inc. United States headquarters at 425 East 53rd Street, New York"
            src={`https://gallimap.com/static/map.html?lat=40.7554162&lng=-73.9634544&markerColor=%23d7b57a&markerLabel=${encodeURIComponent("Good As Gold Cyber Tech Inc. - United States Headquarters")}&accessToken=${encodeURIComponent(process.env.NEXT_PUBLIC_GALLI_MAP_KEY ?? "")}`}
            className="h-[320px] w-full border-0 sm:h-[360px]"
            loading="lazy"
            allowFullScreen
          />
        </section>
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
