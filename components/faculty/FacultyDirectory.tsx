"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Award,
  GraduationCap,
  Search,
  User,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import RevealOnScroll from "@/components/animations/RevealOnScroll";

import {
  departmentFilters,
  facultyDirectory,
} from "@/lib/constants/faculty";

import { cn } from "@/lib/utils/cn";

export default function FacultyDirectory() {
  const [activeDepartment, setActiveDepartment] =
    useState("All");

  const [search, setSearch] = useState("");

  const filteredTeachers = facultyDirectory.filter(
    (teacher) => {
      const departmentMatch =
        activeDepartment === "All" ||
        teacher.department === activeDepartment;

      const query = search.toLowerCase().trim();

      const searchMatch =
        teacher.name.toLowerCase().includes(query) ||
        teacher.department.toLowerCase().includes(query) ||
        teacher.designation
          .toLowerCase()
          .includes(query) ||
        teacher.qualification
          .toLowerCase()
          .includes(query) ||
        teacher.subjects.some((subject) =>
          subject.toLowerCase().includes(query)
        );

      return departmentMatch && searchMatch;
    }
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-28">

      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute right-0 top-40 h-[30rem] w-[30rem] rounded-full bg-sky-100/30 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-100/30 blur-3xl" />

      </div>

      <Container>

        <RevealOnScroll>

          <SectionTitle
            eyebrow="Our Academic Team"
            title="Meet Our Distinguished Faculty"
            description="Our educators are passionate professionals committed to academic excellence, innovation, and character development. Discover their expertise, qualifications, achievements, and teaching specializations."
            center
          />

        </RevealOnScroll>

        {/* Department Filters */}
        <RevealOnScroll delay={0.1}>

          <div className="mt-14 flex flex-wrap justify-center gap-3">
                        {departmentFilters.map((department) => (
              <button
                key={department}
                onClick={() => setActiveDepartment(department)}
                className={cn(
                  "group relative overflow-hidden rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300",
                  activeDepartment === department
                    ? "border-blue-900 bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg shadow-blue-900/25"
                    : "border-slate-200 bg-white/90 text-slate-700 backdrop-blur-md hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-900 hover:shadow-lg"
                )}
              >
                <span className="relative z-10">
                  {department}
                </span>

                {activeDepartment !== department && (
                  <span className="absolute inset-0 scale-x-0 bg-gradient-to-r from-blue-50 to-cyan-50 transition-transform duration-300 group-hover:scale-x-100" />
                )}
              </button>
            ))}

          </div>

        </RevealOnScroll>

        {/* Search */}
        <RevealOnScroll delay={0.15}>

          <div className="mx-auto mt-12 max-w-2xl">

            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">

              <Search
                size={20}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search teachers, departments, subjects or qualifications..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-16 w-full bg-transparent pl-14 pr-5 text-[15px] text-slate-700 outline-none placeholder:text-slate-400"
              />

            </div>

          </div>

        </RevealOnScroll>

        {/* Faculty Grid / Empty State */}
        {filteredTeachers.length > 0 ? (

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

            {filteredTeachers.map((teacher, index) => (

              <RevealOnScroll
                key={teacher.name}
                delay={index * 0.05}
              >
            <Card
  className={cn(
    `
    group
    relative
    flex
    h-full
    flex-col
    overflow-hidden
    rounded-[30px]
    border
    border-slate-200/80
    bg-white
    shadow-[0_15px_45px_rgba(15,23,42,0.08)]
    transition-all
    duration-500
    hover:-translate-y-3
    hover:border-blue-200
    hover:shadow-[0_30px_80px_rgba(30,64,175,0.18)]
    `,
    teacher.featured &&
      "ring-2 ring-yellow-300/40 border-yellow-400"
  )}
>

  {/* Premium Top Accent */}
  <div className="absolute inset-x-0 top-0 z-30 h-1 bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400" />

  {/* Image */}
  <div className="relative h-[390px] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">

    <Image
      src={teacher.image}
      alt={teacher.name}
      fill
      priority={index < 3}
      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.08]"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />

    {/* Hover Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-transparent to-cyan-400/0 transition-all duration-700 group-hover:from-blue-600/10 group-hover:to-cyan-400/10" />

    {/* Department */}
    <div className="absolute left-5 top-5 z-20">
      <Badge variant="secondary">
        {teacher.department}
      </Badge>
    </div>

    {/* Featured */}
    {teacher.featured && (
      <div className="absolute right-5 top-5 z-20">
        <Badge variant="warning">
          Featured
        </Badge>
      </div>
    )}

  </div>

  {/* Content */}
  <div className="flex flex-1 flex-col p-7">

    {/* Name */}
    <h3 className="text-[1.65rem] font-bold leading-tight tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-900">
      {teacher.name}
    </h3>

    {/* Designation */}
    <p className="mt-2 text-lg font-semibold text-blue-700">
      {teacher.designation}
    </p>

    {/* Decorative Line */}
    <div className="mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400 transition-all duration-500 group-hover:w-24" />

    {/* Qualification & Experience */}
    <div className="mt-6 space-y-5">

      <div className="flex items-start gap-3">

        <div className="mt-0.5 rounded-full bg-blue-50 p-2">
          <GraduationCap className="h-5 w-5 text-blue-700" />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Qualification
          </p>

          <p className="mt-1 text-[15px] leading-6 text-slate-700">
            {teacher.qualification}
          </p>
        </div>

      </div>

      <div className="flex items-start gap-3">

        <div className="mt-0.5 rounded-full bg-emerald-50 p-2">
          <User className="h-5 w-5 text-emerald-700" />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Experience
          </p>

          <p className="mt-1 text-[15px] leading-6 text-slate-700">
            {teacher.experience}
          </p>
        </div>

      </div>

    </div>
        {/* Email */}
    {teacher.email && (
      <a
        href={`mailto:${teacher.email}`}
        className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-100 hover:text-blue-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7l9 6 9-6m-18 10h18V7H3v10z"
          />
        </svg>

        <span className="break-all">
          {teacher.email}
        </span>
      </a>
    )}

    {/* About */}
    {teacher.description && (
      <div className="mt-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5">

        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          About
        </h4>

        <p className="mt-3 text-[15px] leading-7 text-slate-600">
          {teacher.description}
        </p>

      </div>
    )}

    {/* Subjects */}
    <div className="mt-8">

      <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
        Subjects
      </h4>

      <div className="flex flex-wrap gap-2.5">

        {teacher.subjects.map((subject) => (
          <span
            key={subject}
            className="
              rounded-full
              border
              border-blue-100
              bg-gradient-to-r
              from-blue-50
              to-sky-50
              px-4
              py-2
              text-xs
              font-semibold
              tracking-wide
              text-blue-800
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-blue-300
              hover:from-blue-600
              hover:to-sky-500
              hover:text-white
              hover:shadow-lg
            "
          >
            {subject}
          </span>
        ))}

      </div>

    </div>

    {/* Achievements */}
    <div className="mt-8 flex-1">

      <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
        Achievements
      </h4>

      <div className="space-y-3">
              {teacher.achievements.map((achievement) => (
          <div
            key={achievement}
            className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:border-yellow-200 hover:bg-yellow-50"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-100">
              <Award className="h-4 w-4 text-yellow-600" />
            </div>

            <span className="text-sm leading-6 text-slate-700">
              {achievement}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom Divider */}
    <div className="mt-auto pt-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </div>

  </div>
</Card>

              </RevealOnScroll>
            ))}
          </div>

        ) : (

          <RevealOnScroll>

            <div className="mx-auto mt-20 max-w-2xl rounded-[32px] border border-slate-200 bg-white p-14 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)]">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-sky-100">
                <Search className="h-9 w-9 text-blue-700" />
              </div>

              <h3 className="mt-8 text-3xl font-bold text-slate-900">
                No Faculty Member Found
              </h3>

              <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-slate-600">
                We couldn&apos;t find any faculty member matching your search.
                Try another teacher name, department, subject, or qualification.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveDepartment("All");
                }}
                className="mt-10 rounded-full bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Reset Search
              </button>

            </div>

          </RevealOnScroll>

        )}

      </Container>
    </section>
  );
}