import type { Metadata } from "next";
import Image from "next/image";

import { leadership } from "@/data/site-content";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the leadership team behind Good As Gold Cyber Technologies Inc.",
};

export default function LeadershipPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <PageHeader
        eyebrow="Leadership"
        title="People building what is next."
        description="Good As Gold is guided by people who bring together technical ambition, thoughtful strategy, and a long-term commitment to secure digital progress."
      />

      <section className="mt-14" aria-labelledby="leadership-team">
        <div className="mb-7 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b57a]">Leadership team</p>
            <h2 id="leadership-team" className="mt-3 font-['Space_Grotesk',sans-serif] text-3xl font-semibold text-white">
              The people behind the mission.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {leadership.map((person) => (
            <article key={person.name} className="panel-surface overflow-hidden rounded-[28px] border border-white/10">
              <div className="flex min-h-[260px] items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(215,181,122,0.2),transparent_42%),linear-gradient(145deg,#151c23,#090d12)] p-8">
                {person.photo ? (
                  <Image src={person.photo} alt={person.name} width={192} height={192} className="h-48 w-48 rounded-full object-cover ring-1 ring-[#d7b57a]/50" />
                ) : (
                  <div className="flex h-48 w-48 items-center justify-center rounded-full border border-[#d7b57a]/45 bg-[#d7b57a]/10 text-4xl font-semibold tracking-[0.14em] text-[#f4d79b]">
                    {person.initials}
                  </div>
                )}
              </div>
              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b57a]">{person.role}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{person.name}</h3>
                <p className="mt-4 leading-7 text-stone-300">{person.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-[28px] border border-white/10 bg-[#090d12] p-8 sm:p-10" aria-labelledby="board">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7b57a]">Board of Directors</p>
        <h2 id="board" className="mt-3 font-['Space_Grotesk',sans-serif] text-3xl font-semibold text-white">
          Governance with a clear point of view.
        </h2>
        <p className="mt-5 max-w-2xl leading-7 text-stone-300">
          Board member profiles and verified portraits will be added here as the company publishes its board information.
        </p>
      </section>
    </main>
  );
}