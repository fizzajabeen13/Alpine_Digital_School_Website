"use client";

import { useEffect, useState } from "react";
import {
  Award,
  Brain,
  Code2,
  Globe,
  GraduationCap,
  Layers,
  Rocket,
  Users,
} from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { developerStats } from "@/lib/constants/faculty";
import { cn } from "@/lib/utils/cn";

const icons = [
  GraduationCap,
  Code2,
  Globe,
  Brain,
  Users,
  Layers,
  Rocket,
  Award,
];

const gradients = [
  "from-blue-500 to-cyan-500",
  "from-indigo-500 to-blue-500",
  "from-emerald-500 to-teal-500",
  "from-purple-500 to-fuchsia-500",
  "from-rose-500 to-pink-500",
  "from-orange-500 to-amber-500",
  "from-sky-500 to-indigo-500",
  "from-yellow-500 to-orange-500",
];

function AnimatedStat({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const [count, setCount] = useState(0);

  const Icon = icons[index % icons.length];
  const gradient = gradients[index % gradients.length];

  useEffect(() => {
    let current = 0;

    const duration = 1500;
    const step = value / (duration / 16);

    const timer = setInterval(() => {
      current += step;

      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl",
        "border border-white/10 bg-white/5 backdrop-blur-xl",
        "transition-all duration-500",
        "hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/[0.08] hover:shadow-[0_25px_60px_rgba(37,99,235,0.25)]"
      )}
    >
      {/* Gradient Border */}
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-1 bg-gradient-to-r",
          gradient
        )}
      />

      {/* Glow */}
      <div
        className={cn(
          "absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br",
          gradient,
          "opacity-10 blur-3xl transition-all duration-500 group-hover:opacity-25"
        )}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(to_right,white_1px,transparent_1px)] [background-size:26px_26px]" />

      <div className="relative p-7">
        {/* Icon */}
        <div
          className={cn(
            "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg",
            gradient
          )}
        >
          <Icon size={30} />
        </div>

        {/* Number */}
        <h3 className="text-5xl font-black tracking-tight text-white">
          {count}
          <span className="text-blue-400">{suffix}</span>
        </h3>

        {/* Label */}
        <p className="mt-3 text-sm font-medium tracking-wide text-slate-300">
          {label}
        </p>

        {/* Bottom Accent */}
        <div className="mt-6 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Active
          </span>
        </div>
      </div>
    </div>
  );
}

export default function DeveloperStats() {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-28 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb22,transparent_35%),radial-gradient(circle_at_bottom_right,#7c3aed22,transparent_35%)]" />

      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(to_right,white_1px,transparent_1px)] [background-size:48px_48px]" />

      <Container className="relative">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="System Metrics"
            title="Technology Journey in Numbers"
            description="A snapshot of my experience in software engineering, artificial intelligence, education, and modern digital solutions."
            center
          />
        </RevealOnScroll>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {developerStats.map((stat, index) => (
            <RevealOnScroll
              key={stat.label}
              delay={index * 0.08}
            >
              <AnimatedStat
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
              />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}