import type { Metadata } from "next";

import AdmissionsHero from "@/components/admissions/AdmissionsHero";
import AdmissionDetails from "@/components/admissions/AdmissionDetails";
import EligibilityProcessDocuments from "@/components/admissions/EligibilityProcessDocuments";
import DownloadsSection from "@/components/admissions/DownloadsSection";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admissions at Alpine Digital School. View eligibility, admission process, required documents, fee information, inquiry form, application form, and downloadable prospectus.",
};

export default function AdmissionsPage() {
  return (
    <main>
      <AdmissionsHero />
      <AdmissionDetails />
      <EligibilityProcessDocuments />
      <DownloadsSection />
    </main>
  );
}