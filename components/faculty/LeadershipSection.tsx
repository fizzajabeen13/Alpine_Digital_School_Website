"use client";

import Image from "next/image";
import {
  Award,
  Mail,
  GraduationCap,
  BriefcaseBusiness,
  Quote,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  principalData,
  coordinators,
  administration,
} from "@/lib/constants/faculty";

export default function LeadershipSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50 py-28">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-56 top-10 h-[520px] w-[520px] rounded-full bg-blue-300/20 blur-[120px]" />

        <div className="absolute right-[-220px] top-40 h-[600px] w-[600px] rounded-full bg-sky-300/20 blur-[140px]" />

        <div className="absolute bottom-[-180px] left-1/2 h-[420px] w-[780px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-[140px]" />

      </div>

      {/* ================= DECORATIVE GRID ================= */}

      <div className="absolute inset-0 opacity-[0.03]">

        <div className="h-full w-full bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:48px_48px]" />

      </div>

      {/* ================= TOP GLOW ================= */}

      <div className="absolute left-1/2 top-0 h-40 w-[900px] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-200/30 to-transparent blur-3xl" />

      {/* ================= FLOATING ELEMENTS ================= */}

      <div className="absolute left-16 top-40 hidden h-3 w-3 rounded-full bg-blue-500/30 lg:block" />

      <div className="absolute right-28 top-72 hidden h-4 w-4 rounded-full bg-sky-500/30 lg:block" />

      <div className="absolute bottom-40 left-24 hidden h-2 w-2 rounded-full bg-indigo-500/40 lg:block" />

      <Container className="relative z-10">

        {/* ================= HEADER ================= */}

        <RevealOnScroll>

          <div className="mx-auto max-w-5xl text-center">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-5 py-2 shadow-lg backdrop-blur-xl">

              <Sparkles
                size={16}
                className="text-blue-600"
              />

              <span className="text-sm font-semibold tracking-wide text-blue-700">
                Academic Leadership
              </span>

            </div>

            <SectionTitle
              eyebrow="Leadership Team"
              title="Inspiring Excellence Through Vision, Leadership & Care"
              description="Our leadership team is dedicated to creating an inspiring educational environment where students develop academically, morally, and personally. Together, we foster innovation, discipline, confidence, and lifelong learning."
              center
            />

          </div>

        </RevealOnScroll>

        {/* ================= PRINCIPAL SECTION ================= */}

        <RevealOnScroll delay={0.15}>

          <div className="relative mt-20">

            {/* Background Accent */}

            <div className="absolute -left-20 -top-16 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />

            <Card className="relative overflow-hidden rounded-[40px] border border-blue-100 bg-white/80 p-0 shadow-[0_40px_100px_rgba(30,64,175,0.15)] backdrop-blur-xl">

              <div className="grid lg:grid-cols-[420px_1fr]">

                {/* ================= LEFT PROFILE ================= */}

                <div className="relative border-r border-blue-100 bg-gradient-to-b from-white via-blue-50/30 to-white">

                  <div className="relative h-[560px] overflow-hidden">

                    <Image
                      src={principalData.image}
                      alt={principalData.name}
                      fill
                      priority
                      className="object-cover object-top transition-all duration-700 hover:scale-105"
                    />

                    {/* Image Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {/* Principal Badge */}

                    <div className="absolute left-6 top-6">

                      <Badge variant="secondary">
                        {principalData.badge}
                      </Badge>

                    </div>

                    {/* Name Card */}

                    <div className="absolute bottom-6 left-6 right-6 rounded-[30px] border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-xl">

                      <h2 className="text-3xl font-black tracking-tight text-white">
                        {principalData.name}
                      </h2>

                      <p className="mt-2 text-base font-medium text-blue-100">
                        {principalData.designation}
                      </p>

                    </div>

                  </div>

                  {/* ================= PROFILE DETAILS ================= */}

                  <div className="space-y-6 p-8">

                    <div className="flex flex-col gap-4">

                      {/* Qualification */}

                      <div className="min-h-[120px] rounded-[24px] border border-blue-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                        <div className="flex items-start gap-4">

                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">

                            <GraduationCap size={20} />

                          </div>

                          <div className="min-w-0 flex-1">

                            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
                              Qualification
                            </p>

                            <p className="mt-2 break-words text-base font-bold leading-8 text-slate-900">
                              {principalData.qualification}
                            </p>

                          </div>

                        </div>

                      </div>

                      {/* Experience */}

                      <div className="min-h-[120px] rounded-[24px] border border-blue-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                        <div className="flex items-start gap-4">

                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">

                            <BriefcaseBusiness size={20} />

                          </div>

                          <div className="min-w-0 flex-1">

                            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-slate-400">
                              Experience
                            </p>

                            <p className="mt-2 break-words text-base font-bold leading-8 text-slate-900">
                              {principalData.experience}
                            </p>

                          </div>

                        </div>

                      </div>

                    </div>

                    {/* ================= QUOTE CARD ================= */}

                    <div className="relative overflow-hidden rounded-[28px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-7 shadow-sm">

                      <Quote
                        size={58}
                        strokeWidth={1.5}
                        className="absolute right-8 top-8 text-blue-200"
                      />

                      <div>

                        <div className="border-l-4 border-blue-600 pl-6 pt-16">

                          <p className="text-[15px] italic leading-8 text-slate-600">
                            &quot;{principalData.quote}&quot;
                          </p>

                        </div>

                        <div className="mt-6 border-t border-blue-100 pt-5">

                          <p className="text-lg font-bold text-slate-900">
                            {principalData.name}
                          </p>

                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                            {principalData.designation}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                {/* ================= RIGHT CONTENT ================= */}

                <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-slate-50 p-8 lg:p-14">

                  <div className="absolute right-10 top-10 opacity-10">

                    <Quote
                      size={150}
                      strokeWidth={1}
                    />

                  </div>

                  <div className="relative">

                    <Badge variant="info">
                      Principal&apos;s Message
                    </Badge>

                    <h2 className="mt-7 text-4xl font-black leading-tight text-slate-950 lg:text-5xl">

                      Leading with Vision,
                      <br />

                      Excellence &

                      <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">
                        {" "}Purpose
                      </span>

                    </h2>

                    <div className="mt-10 space-y-7 text-[17px] leading-9 text-slate-600">

                      {Array.isArray(principalData.message) ? (

                        principalData.message.map((paragraph, index) => (

                          <p key={index}>
                            {paragraph}
                          </p>

                        ))

                      ) : (

                        <p>{principalData.message}</p>

                      )}

                    </div>

                  </div>

                  {/* ================= DIVIDER ================= */}

                  <div className="my-12 h-px bg-gradient-to-r from-blue-300 via-slate-200 to-transparent" />

                  {/* ================= LEADERSHIP HIGHLIGHTS ================= */}

                  <div>

                    <div className="mb-8 flex items-center justify-between">

                      <div>

                        <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-600">
                          Leadership Highlights
                        </p>

                        <h3 className="mt-2 text-2xl font-black text-slate-900">
                          Achievements & Recognition
                        </h3>

                      </div>

                      <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600 sm:flex">

                        <Award size={24} />

                      </div>

                    </div>

                    {/* Achievement Cards */}

                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

                      {principalData.achievements.map((achievement, index) => (

                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-[28px] border border-blue-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
                        >

                          {/* Background Number */}

                          <div
                            className="
                              pointer-events-none
                              absolute
                              right-4
                              top-3
                              select-none
                              text-5xl
                              font-black
                              leading-none
                              text-blue-100
                              opacity-70
                              transition-all
                              duration-300
                              group-hover:scale-105
                              group-hover:opacity-100
                            "
                          >
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          {/* Content */}

                          <div className="mt-6 flex items-start gap-4">

                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 transition duration-300 group-hover:rotate-6 group-hover:scale-110">

                              <Award
                                size={24}
                                className="text-yellow-600"
                              />

                            </div>

                            <div className="flex-1">

                              <p className="text-base font-semibold leading-7 text-slate-800">
                                {achievement}
                              </p>

                              <p className="mt-2 text-xs font-bold uppercase tracking-[0.28em] text-blue-500">
                                Leadership Excellence
                              </p>

                            </div>

                          </div>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </Card>

          </div>

        </RevealOnScroll>

        {/* ================================================= */}
        {/* COORDINATORS */}
        {/* ================================================= */}

        <div className="mt-32">

          <RevealOnScroll>

            <SectionTitle
              eyebrow="Academic Leadership"
              title="Meet Our Coordinators"
              description="Dedicated academic leaders who guide departments, mentor students, support teachers, and ensure the highest standards of learning across every stage."
              center
            />

          </RevealOnScroll>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {coordinators.map((coordinator, index) => (

              <RevealOnScroll
                key={coordinator.name}
                delay={index * 0.1}
              >

                <Card className="group overflow-hidden rounded-[36px] border border-slate-200 bg-white p-0 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_35px_80px_rgba(15,23,42,0.16)]">

                  {/* ================= IMAGE ================= */}

                  <div className="relative h-[420px] overflow-hidden">

                    <Image
                      src={coordinator.image}
                      alt={coordinator.name}
                      fill
                      className="object-cover object-top transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    <div className="absolute left-6 top-6">

                      <Badge variant="info">
                        {coordinator.designation}
                      </Badge>

                    </div>

                    <div className="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

                      <h3 className="text-2xl font-black text-white">
                        {coordinator.name}
                      </h3>

                      <p className="mt-2 text-sm text-blue-100">
                        Academic Leadership
                      </p>

                    </div>

                  </div>
                  {/* ================= CONTENT ================= */}

                  <div className="space-y-5 bg-gradient-to-b from-white to-blue-50/40 p-7">

                    {/* ================= ABOUT ================= */}

                    <div className="rounded-[24px] border border-blue-100 bg-white p-5 shadow-sm">

                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                        About
                      </p>

                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {coordinator.description}
                      </p>

                    </div>

                    {/* ================= QUALIFICATION ================= */}

                    <div className="flex items-start gap-4 rounded-[24px] border border-blue-100 bg-white p-5 shadow-sm">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">

                        <GraduationCap size={20} />

                      </div>

                      <div className="min-w-0 flex-1">

                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                          Qualification
                        </p>

                        <p className="mt-2 text-sm font-semibold leading-7 text-slate-900">
                          {coordinator.qualification}
                        </p>

                      </div>

                    </div>

                    {/* ================= EXPERIENCE ================= */}

                    <div className="flex items-start gap-4 rounded-[24px] border border-blue-100 bg-white p-5 shadow-sm">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">

                        <BriefcaseBusiness size={20} />

                      </div>

                      <div className="min-w-0 flex-1">

                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                          Experience
                        </p>

                        <p className="mt-2 text-sm font-semibold leading-7 text-slate-900">
                          {coordinator.experience}
                        </p>

                      </div>

                    </div>

                    {/* ================= CONTACT ================= */}

                    {coordinator.email && (

                      <a
                        href={`mailto:${coordinator.email}`}
                        className="group/contact flex items-center gap-4 rounded-[24px] border border-blue-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                      >

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-sky-100 text-blue-700 transition duration-300 group-hover/contact:scale-110">

                          <Mail size={20} />

                        </div>

                        <div className="min-w-0 flex-1">

                          <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                            Contact
                          </p>

                          <p className="mt-2 truncate text-sm font-medium text-slate-700 transition-colors group-hover/contact:text-blue-700">
                            {coordinator.email}
                          </p>

                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition-all duration-300 group-hover/contact:bg-blue-600 group-hover/contact:text-white">

                          <ArrowRight size={18} />

                        </div>

                      </a>

                    )}

                  </div>

                </Card>

              </RevealOnScroll>

            ))}

          </div>

        </div>
{/* ================================================= */}
{/* ADMINISTRATION */}
{/* ================================================= */}

<div className="mt-32">

  <RevealOnScroll>
    <SectionTitle
      eyebrow="Administration"
      title="Meet Our Administration Team"
      description="Our administration team ensures the smooth day-to-day operation of the school, supporting students, parents, teachers, and academic leadership with dedication and professionalism."
      center
    />
  </RevealOnScroll>

  <div className="mt-16 grid gap-8 md:grid-cols-2">

    {administration.map((member, index) => (

      <RevealOnScroll
        key={member.name}
        delay={index * 0.1}
      >

        <Card className="group overflow-hidden rounded-[36px] border border-slate-200 bg-white p-0 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_35px_80px_rgba(15,23,42,0.16)]">

          {/* IMAGE */}

            <div className="relative aspect-[3/3] overflow-hidden">
  <Image
    src={member.image}
    alt={member.name}
    fill
    className="object-cover object-top transition duration-700 group-hover:scale-105"
  />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

            <div className="absolute left-6 top-6">
              <Badge variant="secondary">
                {member.designation}
              </Badge>
            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

              <h3 className="text-2xl font-black text-white">
                {member.name}
              </h3>

              <p className="mt-2 text-sm text-blue-100">
                Administration Team
              </p>

            </div>

          </div>

          {/* CONTENT */}

          <div className="space-y-5 bg-gradient-to-b from-white to-blue-50/40 p-7">

            <div className="rounded-[24px] border border-blue-100 bg-white p-5 shadow-sm">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                About
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {member.description}
              </p>

            </div>

            <div className="flex items-start gap-4 rounded-[24px] border border-blue-100 bg-white p-5 shadow-sm">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <GraduationCap size={20} />
              </div>

              <div className="flex-1">

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                  Qualification
                </p>

                <p className="mt-2 text-sm font-semibold leading-7 text-slate-900">
                  {member.qualification}
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4 rounded-[24px] border border-blue-100 bg-white p-5 shadow-sm">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                <BriefcaseBusiness size={20} />
              </div>

              <div className="flex-1">

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                  Experience
                </p>

                <p className="mt-2 text-sm font-semibold leading-7 text-slate-900">
                  {member.experience}
                </p>

              </div>

            </div>

            {member.email && (

              <a
                href={`mailto:${member.email}`}
                className="group/contact flex items-center gap-4 rounded-[24px] border border-blue-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-sky-100 text-blue-700">

                  <Mail size={20} />

                </div>

                <div className="flex-1">

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                    Contact
                  </p>

                  <p className="mt-2 truncate text-sm font-medium text-slate-700">
                    {member.email}
                  </p>

                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-700">

                  <ArrowRight size={18} />

                </div>

              </a>

            )}

          </div>

        </Card>

      </RevealOnScroll>

    ))}

  </div>

</div>

        {/* ================================================= */}
        {/* LEADERSHIP CLOSING BANNER */}
        {/* ================================================= */}

        <RevealOnScroll delay={0.15}>

          <div className="relative mt-32 overflow-hidden rounded-[40px] border border-blue-200 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 px-8 py-14 shadow-[0_35px_100px_rgba(30,64,175,0.28)] lg:px-16">

            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative mx-auto max-w-4xl text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl">

                <Sparkles
                  size={30}
                  className="text-yellow-300"
                />

              </div>

              <h2 className="mt-8 text-4xl font-black leading-tight text-white lg:text-5xl">
                Together We Build Futures,
                <br />
                Inspire Excellence &
                <span className="text-sky-300">
                  {" "}Shape Leaders
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-blue-100">
                Every member of our leadership team is committed to creating an
                inclusive, innovative, and inspiring learning environment where
                students are encouraged to dream boldly, think critically, act
                responsibly, and grow into confident leaders of tomorrow.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

                                <div className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl">
                  Excellence
                </div>

                <div className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl">
                  Integrity
                </div>

                <div className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl">
                  Innovation
                </div>

                <div className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl">
                  Compassion
                </div>

                <div className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl">
                  Leadership
                </div>

              </div>

            </div>

          </div>

        </RevealOnScroll>

      </Container>

    </section>

  );

}