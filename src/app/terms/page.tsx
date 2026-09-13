import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms and conditions placeholder for Good As Gold Cyber Technologies Inc.",
};

export default function TermsPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <PageHeader
        eyebrow="Terms"
        title="Terms placeholder."
        description="This page is included as a routing placeholder and should be updated with the company’s legal terms before publication."
      />
    </main>
  );
}
