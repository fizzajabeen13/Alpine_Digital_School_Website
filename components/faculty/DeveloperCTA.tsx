"use client";

import {
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Link,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import { developerCTA } from "@/lib/constants/faculty";

const stats = [
  { value: "20+", label: "Projects" },
  { value: "15+", label: "Technologies" },
  { value: "100+", label: "Students" },
  { value: "AI", label: "Focused" },
];

export default function DeveloperCTA() {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-32 text-white">
      {/* Aurora Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb33,transparent_35%),radial-gradient(circle_at_bottom_right,#7c3aed33,transparent_35%),radial-gradient(circle_at_center,#06b6d422,transparent_40%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(to_right,white_1px,transparent_1px)] [background-size:44px_44px]" />

      {/* Floating Glow */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

      <Container className="relative">
        <RevealOnScroll>
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-12 shadow-[0_25px_80px_rgba(37,99,235,0.25)] backdrop-blur-2xl md:p-16">

            {/* Decorative Glow */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative text-center">
              <Badge variant="secondary">
                <Sparkles className="mr-2 h-4 w-4" />
                {developerCTA.badge}
              </Badge>

              <h2 className="mx-auto mt-8 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
                {developerCTA.title}
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
                {developerCTA.description}
              </p>

              {/* Statistics */}
              <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                  >
                    <h3 className="text-4xl font-black text-white">
                      {item.value}
                    </h3>

                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Primary CTA */}

              {/* Secondary Buttons */}
              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">

                <Button
                  href="https://fizzaos.vercel.app/"
                  variant="outline"
                  size="lg"
                >
                  <BriefcaseBusiness className="mr-2 h-5 w-5" />
                  Portfolio
                </Button>

                <Button
                  href="https://wa.me/923120182784?text=Hi%20Fizza,%20I%20visited%20your%20portfolio."
                  variant="outline"
                  size="lg"
                >
                  <FaWhatsapp className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>

                <Button
                  href="https://linkedin.com/in/fizza-jabeen-13ch"
                  variant="outline"
                  size="lg"
                >
                  <Link className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>

                <Button
                  href="https://github.com/fizzajabeen13"
                  variant="outline"
                  size="lg"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  GitHub
                </Button>

                <Button
                  href="/downloads/Fizza_Jabeen_Resume.pdf"
                  variant="secondary"
                  size="lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </Button>

              </div>

              {/* Bottom Text */}
              <div className="mt-14 border-t border-white/10 pt-8 text-sm text-slate-400">
                Building modern web experiences, AI-powered solutions, and
                empowering students through practical technology education.
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}