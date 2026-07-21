"use client";

import Image from "next/image";
import { useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Users,
} from "lucide-react";

import FacultyCard from "@/components/faculty/FacultyCard";
import Lightbox from "@/components/shared/Lightbox";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

type Department = {
  title: string;
  shortName: string;
  overview: string;
  focusAreas: string[];
  teachers: {
    name: string;
    designation: string;
    qualification: string;
    experience?: string;
    subjects: string[];
    image: string;
    email?: string;
    description?: string;
  }[];
  gallery: string[];
  activities: string[];
};

type DepartmentDetailProps = {
  department: Department;
};

export default function DepartmentDetail({
  department,
}: DepartmentDetailProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const lightboxImages = department.gallery.map((image, index) => ({
    src: image,
    alt: `${department.title} Gallery ${index + 1}`,
  }));

  return (
    <>
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-28 text-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,.18),transparent_35%)]" />
        <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />

        <Container className="relative z-10">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <Badge variant="secondary">
                {department.shortName}
              </Badge>

              <h1 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
                {department.title}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                {department.overview}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">

                {department.focusAreas.slice(0, 6).map((area) => (

                  <span
                    key={area}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur"
                  >
                    {area}
                  </span>

                ))}

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <div className="absolute -left-5 -top-5 h-full w-full rounded-[34px] border border-white/10 bg-white/10" />

              <Image
                src={department.gallery[0]}
                alt={department.title}
                width={900}
                height={700}
                className="relative h-[520px] w-full rounded-[34px] object-cover shadow-2xl"
              />

            </div>

          </div>

          {/* STATS */}

          <div className="mt-20 grid gap-8 md:grid-cols-3">

            <Card className="rounded-[28px] border border-white/10 bg-white/5 text-center text-white backdrop-blur-xl">

              <Users className="mx-auto h-10 w-10 text-blue-400" />

              <h3 className="mt-5 text-5xl font-black">
                {department.teachers.length}
              </h3>

              <p className="mt-2 text-slate-300">
                Faculty Members
              </p>

            </Card>

            <Card className="rounded-[28px] border border-white/10 bg-white/5 text-center text-white backdrop-blur-xl">

              <BookOpen className="mx-auto h-10 w-10 text-emerald-400" />

              <h3 className="mt-5 text-5xl font-black">
                {department.focusAreas.length}
              </h3>

              <p className="mt-2 text-slate-300">
                Focus Areas
              </p>

            </Card>

            <Card className="rounded-[28px] border border-white/10 bg-white/5 text-center text-white backdrop-blur-xl">

              <GraduationCap className="mx-auto h-10 w-10 text-amber-400" />

              <h3 className="mt-5 text-5xl font-black">
                {department.activities.length}
              </h3>

              <p className="mt-2 text-slate-300">
                Activities
              </p>

            </Card>

          </div>

        </Container>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="bg-white py-28">

        <Container>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">

            <Card className="rounded-[32px] p-10">

              <Badge>
                About
              </Badge>

              <h2 className="mt-5 text-4xl font-black text-slate-900">
                Inspiring Future Achievers
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                {department.overview}
              </p>

              <div className="mt-10 space-y-5">

                {[
                  "Modern learning environment",
                  "Experienced and supportive faculty",
                  "Practical & activity-based education",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />

                    <span className="text-slate-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </Card>

            <Card className="rounded-[32px] p-10">

              <Badge>
                Focus Areas
              </Badge>

              <div className="mt-6 flex flex-wrap gap-3">

                {department.focusAreas.map((area) => (

                  <span
                    key={area}
                    className="rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-600 hover:text-white"
                  >
                    {area}
                  </span>

                ))}

              </div>

              <div className="mt-10 rounded-2xl bg-blue-50 p-6">

                <h3 className="font-bold text-slate-900">
                  Our Vision
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Empowering students with knowledge, creativity,
                  confidence, and lifelong learning through quality education.
                </p>

              </div>

            </Card>

          </div>

        </Container>

      </section>

      {/* ================= FACULTY ================= */}
      <section className="bg-slate-50 py-28">
  <Container>
    <SectionTitle
      eyebrow="Our Faculty"
      title="Meet Our Expert Educators"
      description="Passionate teachers dedicated to academic excellence and student success."
      center
    />

    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {department.teachers.map((teacher) => (
        <FacultyCard
          key={teacher.name}
          name={teacher.name}
          designation={teacher.designation}
          qualification={teacher.qualification}
          experience={teacher.experience}
          subjects={teacher.subjects}
          image={teacher.image}
          department={department.shortName}
          email={teacher.email}
          description={teacher.description}
        />
      ))}
    </div>
  </Container>
</section>

{/* ================= GALLERY ================= */}

<section className="bg-white py-28">
  <Container>

    <SectionTitle
      eyebrow="Gallery"
      title="Learning in Action"
      description="A glimpse into classrooms, practical work, student projects, and department activities."
      center
    />

    <div className="mt-16 grid gap-8">

      {/* Featured Image */}

      <button
        onClick={() => {
          setActiveImage(0);
          setIsLightboxOpen(true);
        }}
        className="group relative h-[520px] overflow-hidden rounded-[36px]"
      >
        <Image
          src={department.gallery[0]}
          alt={department.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent opacity-70" />
      </button>

      {/* Grid */}
<div className="grid gap-8 md:grid-cols-2">
  {department.gallery.slice(1, 3).map((image, index) => (
    <button
      key={image}
      onClick={() => {
        setActiveImage(index + 1);
        setIsLightboxOpen(true);
      }}
      className="group relative h-72 overflow-hidden rounded-[28px]"
    >
      <Image
        src={image}
        alt={`${department.title} ${index + 2}`}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />
    </button>
  ))}
</div>
       

    </div>

  </Container>
</section>

{/* ================= ACTIVITIES ================= */}

<section className="bg-gradient-to-b from-slate-50 via-white to-slate-100 py-28">

  <Container>

    <SectionTitle
      eyebrow="Student Activities"
      title="Learning Beyond the Classroom"
      description="Every activity encourages creativity, teamwork, innovation, and practical learning."
      center
    />

    <div className="mt-16 grid gap-8 md:grid-cols-2">

      {department.activities.map((activity, index) => (

        <Card
          key={activity}
          className="group rounded-[30px] border border-slate-200 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
        >

          <div className="flex items-start justify-between">

            <div>

              <span className="text-6xl font-black text-slate-200 transition group-hover:text-blue-100">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                {activity}
              </p>

            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg">

              <CheckCircle2 className="h-6 w-6" />

            </div>

          </div>

        </Card>

      ))}

    </div>

  </Container>

</section>

<Lightbox
  images={lightboxImages}
  currentIndex={activeImage}
  isOpen={isLightboxOpen}
  onClose={() => setIsLightboxOpen(false)}
  onNext={() =>
    setActiveImage((prev) =>
      prev === lightboxImages.length - 1 ? 0 : prev + 1
    )
  }
  onPrev={() =>
    setActiveImage((prev) =>
      prev === 0 ? lightboxImages.length - 1 : prev - 1
    )
  }
/>

    </>
  );
}
