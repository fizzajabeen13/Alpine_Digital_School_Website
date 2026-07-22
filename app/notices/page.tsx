import type { Metadata } from "next";

import NoticesHero from "@/components/notices/NoticesHero";
import NoticeBoard from "@/components/notices/NoticeBoard";

export const metadata: Metadata = {
   alternates: {
    canonical: "/notices",
  },
  title: "Notices",
  description:
    "View school notices, holiday announcements, exam schedules, fee notices, and urgent updates.",
};

export default function NoticesPage() {
  return (
    <main>
      <NoticesHero />
      <NoticeBoard />
    </main>
  );
}