import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lock, ShieldCheck, Shield, Radar, DatabaseZap } from "lucide-react";

import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Cybersecurity",
  description: "Security assessment, app security, cloud security, vulnerability management, compliance support, and monitoring from Good As Gold Cyber Technologies Inc.",
};

const securityServices = [
  "Security assessment",
  "Application security",
  "Cloud security",
  "Infrastructure security",
  "Endpoint security",
  "Vulnerability management",
  "Security architecture",
  "Compliance support",
  "Security monitoring",
];

const focusAreas = [
  { title: "Risk reduction", description: "Identify gaps and prioritize actions based on business impact and threat exposure.", icon: Shield },
  { title: "Secure architecture", description: "Design systems with security embedded from the foundation upward.", icon: Lock },
  { title: "Continuous coverage", description: "Monitor, respond, and adapt to changing operational and threat landscapes.", icon: Radar },
  { title: "Data protection", description: "Protect sensitive information across applications, cloud environments, and endpoints.", icon: DatabaseZap },
];

export default function CybersecurityPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <PageHeader
        eyebrow="Cybersecurity"
        title="SECURITY BY DESIGN."
        description="Position cybersecurity as a core engineering principle rather than an afterthought."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="panel-surface rounded-[28px] border border-white/10 p-6">
          <div className="mb-6 flex items-center gap-3 text-[#f4d79b]">
            <ShieldCheck size={24} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">Security-first delivery</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {securityServices.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1.5 text-[11px] uppercase tracking-[0.14em] text-stone-200">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-6 text-stone-300">
            Security needs to be present from the first architecture decision through deployment, monitoring, and operational improvement. We build resilient programs that align technology risk, business priorities, and compliance needs.
          </p>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-[#0d1217]/90 p-6">
          <div className="mb-5 flex items-center gap-3 text-[#f4d79b]">
            <ShieldCheck size={22} />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em]">Security architecture</span>
          </div>
          <div className="space-y-4">
            {securityServices.slice(0, 6).map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-3">
                <span className="text-sm text-stone-200">{item}</span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#d7b57a] shadow-[0_0_18px_rgba(215,181,122,0.8)]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {focusAreas.map(({ title, description, icon: Icon }) => (
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
          Strengthen Your Security <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}
