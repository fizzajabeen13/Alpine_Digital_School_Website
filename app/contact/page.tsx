import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";
import SocialContactSection from "@/components/contact/SocialContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Alpine Digital School through phone, WhatsApp, email, contact form, office hours, and campus location.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactDetails />
      <SocialContactSection />
    </main>
  );
}