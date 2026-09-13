import Link from "next/link";
import { ArrowRight, ArrowUpRight, BrainCircuit, ChevronRight, Cpu, Globe2, ShieldCheck, Sparkles } from "lucide-react";

import { SectionIntro } from "@/components/section-intro";
import {
  aiCapabilities,
  capabilityStrip,
  globalMarkets,
  industries,
  projectCategories,
  securityCapabilities,
  services,
  softwareLifecycle,
  stats,
  strengths,
  technologyCategories,
  whyGoodAsGold,
} from "@/data/site-content";

export default function Home() {
  return (
    <main>
      <section className="section-shell relative pb-20 pt-16 sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="hero-glow gold-ring overflow-hidden rounded-[32px] border border-white/10 px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
          <div className="mesh-bg absolute inset-0 opacity-80" aria-hidden="true" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d7b57a]/30 bg-[#d7b57a]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f4d79b]">
                <Sparkles size={12} /> Global technology capability
              </div>
              <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                BUILDING THE INTELLIGENCE BEHIND TOMORROW.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-stone-200">
                AI. Cybersecurity. Software. Data. Built for the next generation of global business.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-stone-300">
                Good As Gold Cyber Technologies Inc. helps organizations transform ambitious ideas into secure, intelligent, scalable technology solutions.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b57a] px-6 py-3.5 text-sm font-semibold text-[#0a0b0d] transition-transform hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(215,181,122,0.25)]"
                >
                  Explore Our Capabilities
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/4 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#d7b57a]/60 hover:text-[#f4d79b]"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="panel-surface relative overflow-hidden rounded-[28px] border border-white/10 p-5">
                <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-[#d7b57a]/10 blur-3xl" aria-hidden="true" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-[#0d1217]/90 p-4">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#d7b57a]/40 bg-[#d7b57a]/10 text-[#f4d79b]">
                      <BrainCircuit size={20} />
                    </div>
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-400">AI Systems</p>
                    <p className="mt-2 text-2xl font-semibold text-white">LLM + Agent</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[#0d1217]/90 p-4">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#d7b57a]/40 bg-[#d7b57a]/10 text-[#f4d79b]">
                      <ShieldCheck size={20} />
                    </div>
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Security</p>
                    <p className="mt-2 text-2xl font-semibold text-white">By Design</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[#0d1217]/90 p-4 sm:col-span-2">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Global network</p>
                      <span className="text-[#f4d79b]">Live</span>
                    </div>
                    <div className="relative h-44 overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(215,181,122,0.16),transparent_35%),linear-gradient(180deg,#111820,#090c10)] p-4">
                      <div className="absolute inset-0 opacity-70" style={{backgroundImage:'radial-gradient(circle at center, rgba(255,255,255,0.15) 0 1px, transparent 1px)', backgroundSize:'18px 18px'}} aria-hidden="true" />
                      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7b57a]/30" aria-hidden="true" />
                      <div className="absolute left-[20%] top-[26%] h-2.5 w-2.5 rounded-full bg-[#f4d79b] shadow-[0_0_22px_rgba(215,181,122,0.8)]" />
                      <div className="absolute right-[18%] top-[38%] h-2.5 w-2.5 rounded-full bg-[#f4d79b] shadow-[0_0_22px_rgba(215,181,122,0.8)]" />
                      <div className="absolute left-[43%] top-[58%] h-2.5 w-2.5 rounded-full bg-[#f4d79b] shadow-[0_0_22px_rgba(215,181,122,0.8)]" />
                      <div className="absolute left-[35%] top-[32%] h-px w-[32%] rotate-12 bg-gradient-to-r from-transparent via-[#d7b57a] to-transparent" />
                      <div className="absolute left-[22%] top-[54%] h-px w-[38%] -rotate-12 bg-gradient-to-r from-transparent via-[#d7b57a] to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-white/10 bg-[#090c12]/80">
        <div className="section-shell py-4">
          <div className="flex flex-col items-center justify-center gap-3 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-300 sm:flex-row sm:gap-6 lg:gap-8">
            {capabilityStrip.map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <span>{item}</span>
                {index < capabilityStrip.length - 1 ? <span className="text-[#d7b57a]">|</span> : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section-shell py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div className="relative">
            <div className="panel-surface relative overflow-hidden rounded-[28px] border border-white/10 p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(215,181,122,0.18),transparent_30%)]" aria-hidden="true" />
              <div className="relative flex h-[420px] items-center justify-center rounded-[22px] border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(17,27,36,0.9),rgba(10,11,15,0.98))]">
                <div className="absolute h-56 w-56 rounded-full border border-[#d7b57a]/30" aria-hidden="true" />
                <div className="absolute h-72 w-72 rounded-full border border-white/10" aria-hidden="true" />
                <div className="absolute h-40 w-40 rounded-full bg-[#d7b57a]/14 blur-2xl" aria-hidden="true" />
                <div className="absolute h-[2px] w-[65%] bg-gradient-to-r from-transparent via-[#d7b57a] to-transparent" aria-hidden="true" />
                <div className="absolute h-[65%] w-[2px] bg-gradient-to-b from-transparent via-[#d7b57a] to-transparent" aria-hidden="true" />
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-[#0a0d12] shadow-[0_0_50px_rgba(215,181,122,0.15)]" />
                <div className="absolute left-[22%] top-[30%] h-2.5 w-2.5 rounded-full bg-[#f4d79b] shadow-[0_0_24px_rgba(215,181,122,0.9)]" />
                <div className="absolute right-[19%] top-[26%] h-2.5 w-2.5 rounded-full bg-[#f4d79b] shadow-[0_0_24px_rgba(215,181,122,0.9)]" />
                <div className="absolute left-[48%] top-[64%] h-2.5 w-2.5 rounded-full bg-[#f4d79b] shadow-[0_0_24px_rgba(215,181,122,0.9)]" />
              </div>
            </div>
          </div>

          <div>
            <SectionIntro
              eyebrow="About"
              title="Technology Without Boundaries."
              description="Good As Gold Cyber Technologies Inc. combines technology expertise, strategic thinking, and global talent to help organizations build, modernize, secure, and scale their technology infrastructure."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {strengths.map((strength) => (
                <li key={strength} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 p-3 text-sm text-stone-200">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#d7b57a]/12 text-[#f4d79b]">
                    <ChevronRight size={13} />
                  </span>
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell pb-24">
        <SectionIntro
          eyebrow="Services"
          title="Focused technology capability for complex business needs."
          description="We design and deliver solutions that connect strategic vision to secure, scalable execution."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, description, href, icon: Icon }) => (
            <div key={title} className="group panel-surface rounded-[26px] border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#d7b57a]/60 hover:shadow-[0_25px_80px_rgba(215,181,122,0.1)]">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d7b57a]/40 bg-[#d7b57a]/12 text-[#f4d79b]">
                <Icon size={22} />
              </div>
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone-300">{description}</p>
              <Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#f4d79b]">
                Explore Service <ArrowUpRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#090c11] py-24">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <SectionIntro
                eyebrow="AI"
                title="INTELLIGENCE, ENGINEERED."
                description="We build AI solutions that move beyond experimentation and into real business operations."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                {aiCapabilities.map((capability) => (
                  <span key={capability} className="rounded-full border border-[#d7b57a]/30 bg-[#d7b57a]/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[#f4d79b]">
                    {capability}
                  </span>
                ))}
              </div>
              <Link href="/ai-solutions" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#d7b57a]/60 bg-[#d7b57a] px-5 py-3 text-sm font-semibold text-[#0a0b0d]">
                Build With AI <ArrowRight size={16} />
              </Link>
            </div>
            <div className="panel-surface relative overflow-hidden rounded-[28px] border border-white/10 p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(215,181,122,0.1),transparent_30%)]" aria-hidden="true" />
              <div className="relative h-[340px] overflow-hidden rounded-[22px] border border-white/10 bg-[#0a0d12] p-4">
                <div className="absolute inset-0 opacity-80" style={{backgroundImage:'radial-gradient(circle at center, rgba(255,255,255,0.14) 0 1px, transparent 1px)', backgroundSize:'16px 16px'}} aria-hidden="true" />
                <div className="absolute left-[10%] top-[18%] h-2.5 w-2.5 rounded-full bg-[#f4d79b] shadow-[0_0_22px_rgba(215,181,122,0.9)]" />
                <div className="absolute left-[38%] top-[46%] h-2.5 w-2.5 rounded-full bg-[#f4d79b] shadow-[0_0_22px_rgba(215,181,122,0.9)]" />
                <div className="absolute right-[14%] top-[32%] h-2.5 w-2.5 rounded-full bg-[#f4d79b] shadow-[0_0_22px_rgba(215,181,122,0.9)]" />
                <div className="absolute left-[60%] top-[68%] h-2.5 w-2.5 rounded-full bg-[#f4d79b] shadow-[0_0_22px_rgba(215,181,122,0.9)]" />
                <div className="absolute left-[22%] top-[44%] h-px w-[58%] bg-gradient-to-r from-transparent via-[#d7b57a] to-transparent" />
                <div className="absolute left-[38%] top-[18%] h-[42%] w-px bg-gradient-to-b from-transparent via-[#d7b57a] to-transparent" />
                <div className="absolute left-[60%] top-[26%] h-[48%] w-px bg-gradient-to-b from-transparent via-[#d7b57a] to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="panel-surface mesh-bg rounded-[28px] border border-white/10 p-6">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#f4d79b]">
                <ShieldCheck size={24} />
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em]">Cybersecurity</p>
              </div>
              <h2 className="font-['Space_Grotesk',sans-serif] text-4xl font-semibold tracking-tight text-white">
                SECURITY BY DESIGN.
              </h2>
              <p className="text-stone-300">
                Position cybersecurity as a core engineering principle rather than an afterthought.
              </p>
              <div className="flex flex-wrap gap-2">
                {securityCapabilities.map((capability) => (
                  <span key={capability} className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1.5 text-[11px] uppercase tracking-[0.14em] text-stone-200">
                    {capability}
                  </span>
                ))}
              </div>
              <Link href="/cybersecurity" className="inline-flex items-center gap-2 rounded-full border border-[#d7b57a]/60 bg-[#d7b57a] px-5 py-3 text-sm font-semibold text-[#0a0b0d]">
                Strengthen Your Security <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#0d1217]/90 p-6">
            <div className="mb-5 flex items-center gap-3 text-[#f4d79b]">
              <Cpu size={22} />
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em]">Security architecture</p>
            </div>
            <div className="space-y-4">
              {[
                "Security assessment",
                "Application security",
                "Cloud security",
                "Infrastructure security",
                "Endpoint security",
                "Vulnerability management",
              ].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-3">
                  <span className="text-sm text-stone-200">{item}</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d7b57a] shadow-[0_0_18px_rgba(215,181,122,0.8)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#05080b] py-24">
        <div className="section-shell">
          <SectionIntro
            eyebrow="Software Engineering"
            title="FROM CONCEPT TO PRODUCTION."
            description="We support the complete software lifecycle, from discovery and architecture through deployment, optimization, and long-term feature evolution."
          />
          <div className="mt-12 rounded-[30px] border border-white/10 bg-[#0d1217]/80 p-6 sm:p-8">
            <div className="flex flex-wrap gap-3">
              {softwareLifecycle.map((cycle, index) => (
                <div key={cycle} className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center rounded-full border border-[#d7b57a]/40 bg-[#d7b57a]/10 px-4 py-2 text-sm font-medium text-[#f4d79b]">
                    {cycle}
                  </span>
                  {index < softwareLifecycle.length - 1 ? <ArrowRight size={16} className="text-stone-500" /> : null}
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {technologyCategories.map((category) => (
                <div key={category} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm text-stone-200">
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <SectionIntro eyebrow="Why Good As Gold" title="WHY GOOD AS GOLD?" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyGoodAsGold.map(({ id, title, description }) => (
            <div key={id} className="panel-surface rounded-[24px] border border-white/10 p-6">
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d7b57a]">{id}</div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone-300">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#090d12] py-24">
        <div className="section-shell">
          <SectionIntro eyebrow="Industries" title="Built for complex, high-stakes environments." align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {industries.map(({ title, description, icon: Icon }) => (
              <div key={title} className="group rounded-[24px] border border-white/10 bg-[#0d1218] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d7b57a]/60">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#d7b57a]/35 bg-[#d7b57a]/10 text-[#f4d79b]">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="Global Presence"
              title="GLOBAL THINKING. LOCAL EXECUTION."
              description="We work with organizations and partners across the Americas, Europe, Australia, the Middle East, and Asia-Pacific."
            />
          </div>
          <div className="panel-surface relative overflow-hidden rounded-[28px] border border-white/10 p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(215,181,122,0.18),transparent_30%)]" aria-hidden="true" />
            <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {globalMarkets.map((market, index) => (
                <div key={market} className="rounded-2xl border border-white/10 bg-[#0b0d12] p-4 text-sm font-medium text-stone-200">
                  <div className="mb-2 flex items-center gap-2 text-[#f4d79b]">
                    <Globe2 size={16} />
                    <span>{index + 1}</span>
                  </div>
                  {market}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#090d12] py-24">
        <div className="section-shell">
          <SectionIntro eyebrow="What We Build" title="WHAT WE BUILD" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectCategories.map((category) => (
              <div key={category} className="rounded-[22px] border border-white/10 bg-[#0d1217] p-5 text-base font-medium text-stone-200 transition-colors hover:border-[#d7b57a]/50 hover:text-white">
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="panel-surface rounded-[24px] border border-white/10 p-6 text-center">
              <div className="text-2xl font-semibold text-[#f4d79b]">{stat.value}</div>
              <div className="mt-3 text-sm uppercase tracking-[0.22em] text-stone-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#090d12] py-24">
        <div className="section-shell">
          <div className="panel-surface rounded-[28px] border border-white/10 p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#d7b57a]">Careers</p>
                <h2 className="mt-4 font-['Space_Grotesk',sans-serif] text-4xl font-semibold tracking-tight text-white">
                  BUILD WHAT&apos;S NEXT.
                </h2>
                <p className="mt-4 text-stone-300">
                  Join a technology organization working across AI, cybersecurity, software engineering, data, and cloud.
                </p>
              </div>
              <Link href="/careers" className="inline-flex items-center gap-2 rounded-full bg-[#d7b57a] px-5 py-3 text-sm font-semibold text-[#0a0b0d]">
                View Opportunities <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
