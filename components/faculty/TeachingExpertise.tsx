"use client";

import {
  Bot,
  Brain,
  BriefcaseBusiness,
  Code2,
  FileText,
  GraduationCap,
  Lightbulb,
  Monitor,
  Network,
  Users,
  Sparkles,
} from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { teachingExpertise } from "@/lib/constants/faculty";

const icons = [
  Code2,
  Monitor,
  Network,
  Brain,
  Bot,
  Lightbulb,
  FileText,
  GraduationCap,
  Users,
  BriefcaseBusiness,
];

const gradients = [
  "from-blue-600 to-cyan-500",
  "from-indigo-600 to-blue-500",
  "from-emerald-600 to-teal-500",
  "from-purple-600 to-fuchsia-500",
  "from-pink-600 to-rose-500",
  "from-orange-500 to-amber-500",
  "from-sky-600 to-cyan-500",
  "from-violet-600 to-purple-500",
  "from-rose-600 to-pink-500",
  "from-blue-700 to-indigo-600",
];

export default function TeachingExpertise() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-28">
      {/* Background Glow */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-purple-100/40 blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(to_right,#0f172a_1px,transparent_1px)] [background-size:42px_42px]" />

      <Container className="relative">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Teaching Expertise"
            title="Empowering Students Through Technology"
            description="Combining software engineering, artificial intelligence, and project-based learning to equip students with practical skills for the modern digital world."
            center
          />
        </RevealOnScroll>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 xl:grid-cols-5">
          {teachingExpertise.map((item, index) => {
            const Icon = icons[index % icons.length];
            const gradient = gradients[index % gradients.length];

            return (
              <RevealOnScroll
                key={item.title}
                delay={index * 0.06}
              >
                <Card className="group relative h-full overflow-hidden border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl">
                  {/* Top Gradient */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${gradient}`}
                  />

                  {/* Glow */}
                  <div
                    className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${gradient} opacity-10 blur-3xl transition-all duration-500 group-hover:opacity-25`}
                  />

                  <div className="relative p-1">
                    {/* Header */}
                    <div className="mb-6 flex items-center justify-between">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}
                      >
                        <Icon size={30} />
                      </div>

                      <Sparkles className="text-slate-300 transition-all duration-500 group-hover:rotate-12 group-hover:text-yellow-500" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold leading-tight text-slate-900">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>

                    {/* Bottom Divider */}
                    <div className="mt-6 flex items-center gap-2">
                      <div
                        className={`h-2 w-2 rounded-full bg-gradient-to-r ${gradient}`}
                      />
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Learning Module
                      </span>
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