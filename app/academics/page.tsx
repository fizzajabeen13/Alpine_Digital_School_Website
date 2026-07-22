import type { Metadata } from "next";
import AcademicsHero from "@/components/academics/AcademicsHero";
import DepartmentsSection from "@/components/academics/DepartmentsSection";
import ProgramsSection from "@/components/academics/ProgramsSection";

export const metadata: Metadata = {
   alternates: {
    canonical: "/academics",
  },
  title: "Academics",
  description:
    "Explore Alpine Digital School academic programs, departments, STEM, robotics, AI, and learning approach.",
};

export default function AcademicsPage() {
  return (
    <main>
      <AcademicsHero />
      <ProgramsSection />
      <DepartmentsSection />
    </main>
  );
}