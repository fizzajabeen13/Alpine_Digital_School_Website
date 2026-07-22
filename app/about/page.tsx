import type { Metadata } from "next";
import AboutAchievements from "@/components/about/AboutAchievements";
import AboutHero from "@/components/about/AboutHero";
import SchoolTimeline from "@/components/about/SchoolTimeline";
import VisionMission from "@/components/about/VisionMission";
import Infrastructure from "@/components/about/Infrastructure";
import SchoolLife from "@/components/about/SchoolLife";

export const metadata: Metadata = {
   alternates: {
    canonical: "/about",
  },
  title: "About Us",
  description:
    "Learn about Alpine Digital School, its vision, mission, values, achievements, infrastructure, and school life.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <VisionMission />
      <SchoolTimeline />
      <AboutAchievements />
      <Infrastructure />
      <SchoolLife />
    </main>
  );
}