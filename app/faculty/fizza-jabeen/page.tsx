import type { Metadata } from "next";

import FeaturedDeveloperProfile from "@/components/faculty/FeaturedDeveloperProfile";
import DeveloperStats from "@/components/faculty/DeveloperStats";
import DeveloperSkills from "@/components/faculty/DeveloperSkills";
import TeachingExpertise from "@/components/faculty/TeachingExpertise";
import DeveloperGallery from "@/components/faculty/DeveloperGallery";
import DeveloperCTA from "@/components/faculty/DeveloperCTA";

export const metadata: Metadata = {
   alternates: {
    canonical: "/fizza-jabeen",
  },
  title: "Fizza Jabeen",
  description:
    "IT Teacher, AI Instructor and Full Stack Web Developer at Alpine Digital School.",
};

export default function DeveloperProfilePage() {
  return (
    <main>
      <FeaturedDeveloperProfile />
      <DeveloperSkills />
      <DeveloperStats />
      <TeachingExpertise />
      <DeveloperGallery />
      <DeveloperCTA />
    </main>
  );
}