"use client";

import {
  Brain,
  Code2,
  Database,
  Globe,
  Layers3,
  Sparkles,
} from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { developerSkills } from "@/lib/constants/faculty";

const categoryIcons = [
  Globe,
  Code2,
  Database,
  Brain,
  Layers3,
];

const accentColors: Record<
  string,
  {
    bg: string;
    border: string;
    icon: string;
    badge: string;
  }
> = {
  blue: {
    bg: "from-blue-600 to-cyan-500",
    border: "hover:border-blue-300",
    icon: "bg-blue-950",
    badge:
      "border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100",
  },
  emerald: {
    bg: "from-emerald-600 to-teal-500",
    border: "hover:border-emerald-300",
    icon: "bg-emerald-900",
    badge:
      "border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100",
  },
  amber: {
    bg: "from-amber-500 to-orange-500",
    border: "hover:border-amber-300",
    icon: "bg-amber-700",
    badge:
      "border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100",
  },
  purple: {
    bg: "from-purple-600 to-fuchsia-500",
    border: "hover:border-purple-300",
    icon: "bg-purple-900",
    badge:
      "border-purple-200 bg-purple-50 text-purple-800 hover:bg-purple-100",
  },
  rose: {
    bg: "from-rose-600 to-pink-500",
    border: "hover:border-rose-300",
    icon: "bg-rose-900",
    badge:
      "border-rose-200 bg-rose-50 text-rose-800 hover:bg-rose-100",
  },
};

export default function DeveloperSkills() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-24">
      {/* Background Decorations */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-100/40 blur-3xl" />

      <Container>
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Technical Expertise"
            title="Technology Stack"
            description="A curated collection of technologies, frameworks, and tools that power my work in software engineering, artificial intelligence, and modern web development."
            center
          />
        </RevealOnScroll>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {developerSkills.map((group, index) => {
            const Icon = categoryIcons[index];
            const color = accentColors[group.color];

            return (
              <RevealOnScroll
                key={group.category}
                delay={index * 0.08}
              >
                <Card
                  className={`group relative flex h-full min-h-[250px] flex-col overflow-hidden border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${color.border}`}
                >
                  {/* Decorative Gradient */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${color.bg}`}
                  />

                  {/* Glow */}
                  <div
                    className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${color.bg} opacity-10 blur-3xl transition-all duration-500 group-hover:opacity-20`}
                  />

                  <div className="relative flex h-full flex-col">
                    {/* Header */}
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-16 w-16 items-center justify-center rounded-2xl ${color.icon} text-white shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                        >
                          <Icon size={30} />
                        </div>

                        <div>
                          <h3 className="text-2xl font-extrabold text-slate-900">
                            {group.category}
                          </h3>

                          <p className="mt-1 text-sm text-slate-500">
                            {group.skills.length} Technologies
                          </p>
                        </div>
                      </div>

                      <Sparkles className="text-slate-300 transition-all duration-500 group-hover:rotate-12 group-hover:text-yellow-500" />
                    </div>

                    {/* Skills */}
                    <div className="flex flex-1 flex-wrap content-start gap-3">
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`cursor-default rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${color.badge}`}
                        >
                          {skill.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}