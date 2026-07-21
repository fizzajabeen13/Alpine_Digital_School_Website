"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Calculator,
  CheckCircle2,
  Cpu,
  FlaskConical,
  Languages,
  Mic,
  NotebookText,
  Wrench,
} from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { departmentsData } from "@/lib/constants/academics";

const departmentIcons = {
  science: FlaskConical,
  mathematics: Calculator,
  english: NotebookText,
  urdu: Languages,
  "spoken-english": Mic,
  ai: Bot,
  stem: Cpu,
  robotics: Wrench,
};

export default function DepartmentsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50 py-28">

      {/* Background */}

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-indigo-200/20 blur-3xl" />

      <Container className="relative z-10">

        <RevealOnScroll>
          <SectionTitle
            eyebrow="Departments"
            title="Academic Departments for Modern Learning"
            description="Each department nurtures curiosity, strengthens academic excellence, develops practical skills, and prepares students for future success."
            center
          />
        </RevealOnScroll>

        <div className="mt-20 space-y-10">
  {Array.from({
    length: Math.ceil(departmentsData.length / 2),
  }).map((_, rowIndex) => {
    const row = departmentsData.slice(rowIndex * 2, rowIndex * 2 + 2);

    return (
      <div
        key={rowIndex}
        className={`grid gap-8 lg:grid-cols-2 ${
          rowIndex % 2 !== 0 ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        {row.map((department, index) => {
          const Icon =
            departmentIcons[
              department.slug as keyof typeof departmentIcons
            ] || NotebookText;

          const reversed = index % 2 !== 0;

          return (
            <RevealOnScroll
              key={department.slug}
              delay={(rowIndex * 2 + index) * 0.08}
            >
              <Card className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                {/* Header */}

                <div
                  className={`flex items-center justify-between ${
                    reversed ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg">
                    <Icon size={30} />
                  </div>

                  <Badge variant="secondary">
                    {department.shortName}
                  </Badge>
                </div>

                {/* Title */}

                <div className={reversed ? "text-right" : ""}>
                  <h3 className="mt-7 text-3xl font-black text-slate-900">
                    {department.title}
                  </h3>

                  <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
                    {department.overview}
                  </p>
                </div>

                {/* Divider */}

                <div className="my-8 h-px bg-gradient-to-r from-blue-200 via-slate-200 to-transparent" />

                {/* Focus Areas */}

                <div className={reversed ? "text-right" : ""}>
                  <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
                    Focus Areas
                  </h4>

                  <div
                    className={`mt-4 flex flex-wrap gap-2 ${
                      reversed ? "justify-end" : ""
                    }`}
                  >
                    {department.focusAreas.slice(0, 4).map((area) => (
                      <span
                        key={area}
                        className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* This spacer ensures equal-height cards */}
                <div className="h-6" />

                {/* Activities */}

                <div className={reversed ? "text-right" : ""}>
                  <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
                    Activities
                  </h4>

                  <div className="mt-5 space-y-3">
                    {department.activities
                      .slice(0, 3)
                      .map((activity) => (
                        <div
                          key={activity}
                          className={`flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 ${
                            reversed
                              ? "flex-row-reverse text-right"
                              : ""
                          }`}
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          </div>

                          <p className="text-sm leading-6 text-slate-600">
                            {activity}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Bottom */}

                <div
                  className={`mt-8 flex items-center justify-between border-t border-slate-100 pt-6 ${
                    reversed ? "flex-row-reverse" : ""
                  }`}
                >
                  <Link
                    href={`/academics/departments/${department.slug}`}
                    className="group inline-flex items-center gap-2 font-semibold text-blue-700 transition-all duration-300 hover:gap-4"
                  >
                    {reversed && (
                      <ArrowRight
                        size={18}
                        className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1"
                      />
                    )}

                    View Department

                    {!reversed && (
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    )}
                  </Link>

                  <div className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700">
                    {department.focusAreas.length} Modules
                  </div>
                </div>

                {/* Hover Glow */}

                <div className="pointer-events-none absolute inset-0 rounded-[30px] opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-[30px] ring-1 ring-blue-200" />
                </div>

              </Card>
            </RevealOnScroll>
          );
        })}
      </div>
    );
  })}
      </div>
      </Container>
    </section>
  );
}              