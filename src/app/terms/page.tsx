import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import { termsAndConditions } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: termsAndConditions.lead,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPage doc={termsAndConditions} />;
}
