import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import { privacyPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: privacyPolicy.lead,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPage doc={privacyPolicy} />;
}
