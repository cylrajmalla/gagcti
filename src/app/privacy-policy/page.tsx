import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy information for Good As Gold Cyber Technologies Inc.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <PageHeader
        eyebrow="Privacy Policy"
        title="Privacy policy placeholder."
        description="This page is included as a routing placeholder and should be updated with the company’s formal privacy policy before publication."
      />
    </main>
  );
}
