import type { Metadata } from "next";
import { Mail, MapPin, Send } from "lucide-react";

import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Good As Gold Cyber Technologies Inc. about AI, cybersecurity, software, data, and digital transformation needs.",
};

const contactOptions = [
  { label: "Global partnership inquiry", value: "partnership@goodasgoldtech.com" },
  { label: "Client inquiry", value: "clients@goodasgoldtech.com" },
  { label: "Careers inquiry", value: "careers@goodasgoldtech.com" },
];

export default function ContactPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <PageHeader
        eyebrow="Contact"
        title="LET'S BUILD SOMETHING SIGNIFICANT."
        description="Tell us about your business goals, team priorities, and the challenges you want to solve."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="space-y-4">
          {contactOptions.map(({ label, value }) => (
            <div key={label} className="panel-surface rounded-[24px] border border-white/10 p-5">
              <div className="mb-2 flex items-center gap-2 text-[#f4d79b]">
                <Mail size={16} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">{label}</span>
              </div>
              <p className="text-sm text-stone-200">{value}</p>
            </div>
          ))}

          <div className="panel-surface rounded-[24px] border border-white/10 p-5">
            <div className="mb-2 flex items-center gap-2 text-[#f4d79b]">
              <MapPin size={16} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">Global engagement</span>
            </div>
            <p className="text-sm text-stone-200">Serving organizations across the Americas, Europe, Australia, the Middle East, and Asia-Pacific.</p>
          </div>
        </div>

        <form className="panel-surface rounded-[28px] border border-white/10 p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm text-stone-200">
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">Full Name</span>
              <input className="w-full rounded-2xl border border-white/10 bg-[#090d12] px-4 py-3 text-white outline-none transition focus:border-[#d7b57a]/70" placeholder="Your full name" />
            </label>
            <label className="block text-sm text-stone-200">
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">Work Email</span>
              <input type="email" className="w-full rounded-2xl border border-white/10 bg-[#090d12] px-4 py-3 text-white outline-none transition focus:border-[#d7b57a]/70" placeholder="name@company.com" />
            </label>
            <label className="block text-sm text-stone-200">
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">Company</span>
              <input className="w-full rounded-2xl border border-white/10 bg-[#090d12] px-4 py-3 text-white outline-none transition focus:border-[#d7b57a]/70" placeholder="Company name" />
            </label>
            <label className="block text-sm text-stone-200">
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">Country</span>
              <input className="w-full rounded-2xl border border-white/10 bg-[#090d12] px-4 py-3 text-white outline-none transition focus:border-[#d7b57a]/70" placeholder="Country" />
            </label>
            <label className="block text-sm text-stone-200 sm:col-span-2">
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">Service Interested In</span>
              <input className="w-full rounded-2xl border border-white/10 bg-[#090d12] px-4 py-3 text-white outline-none transition focus:border-[#d7b57a]/70" placeholder="AI Solutions / Cybersecurity / Software Engineering / Data & Analytics" />
            </label>
            <label className="block text-sm text-stone-200 sm:col-span-2">
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">Project Details</span>
              <textarea rows={6} className="w-full rounded-2xl border border-white/10 bg-[#090d12] px-4 py-3 text-white outline-none transition focus:border-[#d7b57a]/70" placeholder="Tell us about your project, goals, timeline, and technical requirements." />
            </label>
          </div>

          <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#d7b57a] px-6 py-3 text-sm font-semibold text-[#0a0b0d]">
            Start the Conversation <Send size={16} />
          </button>
        </form>
      </div>
    </main>
  );
}
