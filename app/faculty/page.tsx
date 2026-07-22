import type { Metadata } from "next";
import FacultyHero from "@/components/faculty/FacultyHero";
import LeadershipSection from "@/components/faculty/LeadershipSection";
import FeaturedDeveloperProfile from "@/components/faculty/FeaturedDeveloperProfile";
import FacultyDirectory from "@/components/faculty/FacultyDirectory";

export const metadata: Metadata = {
   alternates: {
    canonical: "/faculty",
  },
  title: "Faculty",
  description:
    "Meet Alpine Digital School faculty, principal, coordinators, teachers, and technology educators.",
};

export default function FacultyPage() {
  return (
    <main>
      <FacultyHero />
      <LeadershipSection />
      <FeaturedDeveloperProfile />
      <FacultyDirectory />
    </main>
  );
}