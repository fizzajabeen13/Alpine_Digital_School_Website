import type { Metadata } from "next";
import ExploreHero from "@/components/explore/ExploreHero";
import CampusTour from "@/components/explore/CampusTour";
import FacilitiesSection from "@/components/explore/FacilitiesSection";
import ActivitiesSection from "@/components/explore/ActivitiesSection";
import AlbumsGallery from "@/components/explore/AlbumsGallery";
import VideosSection from "@/components/explore/VideosSection";

export const metadata: Metadata = {
  title: "Explore School",
  description:
    "Explore Alpine Digital School campus, facilities, labs, sports, activities, gallery, albums, and videos.",
};

export default function GalleryPage() {
  return (
    <main>
      <ExploreHero />
      <CampusTour />
      <FacilitiesSection />
      <ActivitiesSection />
      <AlbumsGallery />
      <VideosSection />
    </main>
  );
}