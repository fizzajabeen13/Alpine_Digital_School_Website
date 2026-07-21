"use client";

import { useEffect, useState } from "react";
import {
  Award,
  BookOpen,
  GraduationCap,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils/cn";

type IconName = string;

type StatsCardProps = {
  iconName: IconName;
  value: number;
  suffix?: string;
  label: string;
  description?: string;
  className?: string;
};

const icons = {
  users: Users,
  graduation: GraduationCap,
  book: BookOpen,
  award: Award,
};

export default function StatsCard({
  iconName,
  value,
  suffix = "",
  label,
  description,
  className,
}: StatsCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1400;
    const stepTime = 16;
    const increment = value / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  const Icon =
    icons[iconName as keyof typeof icons] || Users;

  return (
    <div
      className={cn(
        `
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/70
        bg-white/80
        p-8
        text-center
        backdrop-blur-xl
        shadow-[0_20px_70px_rgba(15,23,42,0.08)]
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-blue-200
        hover:shadow-[0_35px_90px_rgba(37,99,235,0.18)]
        `,
        className,
      )}
    >
          {/* ====================================================== */}
      {/* Background Glow */}
      {/* ====================================================== */}

      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

      <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

      {/* ====================================================== */}
      {/* Premium Border Glow */}
      {/* ====================================================== */}

      <div className="absolute inset-0 rounded-[32px] border border-blue-200/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* ====================================================== */}
      {/* Icon */}
      {/* ====================================================== */}

      <div
        className="
          relative
          mx-auto
          mb-7
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-3xl
          bg-gradient-to-br
          from-blue-700
          via-blue-800
          to-slate-950
          text-white
          shadow-xl
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-6
        "
      >
        <Icon size={34} />

        {/* Icon Glow */}

        <div className="absolute inset-0 rounded-3xl bg-blue-500/30 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* ====================================================== */}
      {/* Counter */}
      {/* ====================================================== */}

      <h3
        className="
          relative
          text-5xl
          font-black
          tracking-tight
          text-slate-950
        "
      >
        {count}
        {suffix}
      </h3>

      {/* ====================================================== */}
      {/* Label */}
      {/* ====================================================== */}

      <p className="mt-3 text-lg font-extrabold text-blue-950">
        {label}
      </p>
            {/* ====================================================== */}
      {/* Description */}
      {/* ====================================================== */}

      {description && (
        <p className="relative mt-4 text-sm leading-7 text-slate-600">
          {description}
        </p>
      )}

      {/* ====================================================== */}
      {/* Accent Line */}
      {/* ====================================================== */}

      <div className="relative mx-auto mt-8 h-1 w-14 rounded-full bg-gradient-to-r from-blue-700 via-cyan-500 to-yellow-400 transition-all duration-500 group-hover:w-28" />

      {/* ====================================================== */}
      {/* Hover Shine */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/30
          to-transparent
          transition-transform
          duration-1000
          group-hover:translate-x-full
        "
      />
    </div>
  );
}