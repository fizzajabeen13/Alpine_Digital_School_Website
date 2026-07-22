import type { Metadata } from "next";
import AchievementsHero from "@/components/achievements/AchievementsHero";
import AchievementStats from "@/components/achievements/AchievementStats";
import PositionHolders from "@/components/achievements/PositionHolders";
import AchievementCategories from "@/components/achievements/AchievementCategories";
import MedalsCertificates from "@/components/achievements/MedalsCertificates";
import AchievementGallery from "@/components/achievements/AchievementGallery";

export const metadata: Metadata = {
   alternates: {
    canonical: "/student achievements",
  },
  title: "Student Achievements",
  description:
    "Explore Alpine Digital School student achievements, position holders, medals, certificates, competitions, science, robotics, AI, IT, and STEM success stories.",
};

export default function AchievementsPage() {
  return (
    <main>
      <AchievementsHero />
      <AchievementStats />
      <PositionHolders />
      <AchievementCategories />
      <MedalsCertificates />
      <AchievementGallery />
    </main>
  );
}