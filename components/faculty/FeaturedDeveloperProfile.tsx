import Image from "next/image";
import {
  Mail,
  Sparkles,
  Code2,
  Bot,
  GraduationCap,
  CircleCheck,
  ArrowRight,
  Cpu,
  Globe,
  Layers3,
} from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import { featuredDeveloper } from "@/lib/constants/faculty";

export default function FeaturedDeveloperProfile() {
  return (
    <section className="relative overflow-hidden py-28 text-white">

      {/* ====================================================== */}
      {/* Premium Background */}
      {/* ====================================================== */}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0b1736] to-slate-950" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.28),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(250,204,21,0.18),transparent_28%),radial-gradient(circle_at_80%_85%,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.16),transparent_30%)]" />

      <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="absolute right-[-120px] top-40 h-[380px] w-[380px] rounded-full bg-cyan-400/15 blur-[120px]" />

      <div className="absolute bottom-[-120px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[140px]" />

      {/* Floating Shapes */}

      <div className="absolute left-12 top-28 hidden h-24 w-24 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl lg:block animate-pulse" />

      <div className="absolute right-16 top-32 hidden h-20 w-20 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-xl lg:block" />

      <div className="absolute bottom-28 left-1/3 hidden h-28 w-28 rounded-full border border-yellow-400/20 bg-yellow-400/10 backdrop-blur-xl lg:block" />

      <Container className="relative z-10">

        {/* ====================================================== */}
        {/* Section Heading */}
        {/* ====================================================== */}

        <RevealOnScroll>

          <div className="mx-auto mb-20 max-w-4xl text-center">

            <Badge variant="secondary">
              Featured Technology Profile
            </Badge>

            <h2 className="mt-7 text-5xl font-black leading-tight tracking-tight md:text-7xl">

              Website Developer

              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-yellow-300 bg-clip-text text-transparent">
                & Digital Education Leader
              </span>

            </h2>

            <div className="mx-auto mt-8 h-[2px] w-36 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300 md:text-xl">
              Empowering students through modern web technologies,
              artificial intelligence, and future-ready digital education.
              Combining technical excellence with innovative teaching to
              build the next generation of creators and problem solvers.
            </p>

          </div>

        </RevealOnScroll>

        {/* ====================================================== */}
        {/* Main Glass Container */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.15}>

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">

            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-blue-500/10" />

            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.18),transparent_55%)]" />

            <div className="relative grid items-center gap-20 p-8 lg:grid-cols-[520px_1fr] lg:p-14">

              {/* ====================================================== */}
              {/* Premium Image */}
              {/* ====================================================== */}

              <div className="relative mx-auto w-full max-w-[460px]">
                <div className="relative">

                {/* Glow */}

                <div className="absolute -inset-10 rounded-[60px] bg-gradient-to-br from-blue-500/40 via-cyan-400/20 to-yellow-400/30 blur-[70px]" />

                {/* Gradient Border */}

                <div className="rounded-[42px] bg-gradient-to-br from-blue-500 via-cyan-400 to-yellow-300 p-[2px]">

                  {/* Glass Border */}

                  <div className="rounded-[40px] border border-white/20 bg-slate-900/80 p-4 backdrop-blur-xl">

                    <div className="relative overflow-hidden rounded-[32px]">

                      <div className="relative h-[620px]">

                        <Image
                          src={featuredDeveloper.image}
                          alt={featuredDeveloper.name}
                          fill
                          priority
                          className="object-cover transition duration-700 hover:scale-105"
                        />

                        {/* Image Overlay */}

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                        {/* Reflection */}

                        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent" />

                      </div>

                    </div>

                  </div>

                </div>

                {/* Floating Tech Cards */}

                <div className="absolute -right-6 top-10 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl transition duration-500 hover:-translate-y-2">

                  <Code2 className="h-8 w-8 text-yellow-300" />

                </div>

                <div className="absolute -left-6 bottom-28 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl transition duration-500 hover:-translate-y-2">

                  <Bot className="h-8 w-8 text-cyan-300" />

                </div>

                <div className="absolute bottom-0 right-10 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl transition duration-500 hover:-translate-y-2">

                  <GraduationCap className="h-8 w-8 text-green-300" />

                </div>

                <div className="absolute left-12 top-24 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">

                  <Cpu className="h-6 w-6 text-blue-300" />

                </div>

                <div className="absolute right-16 bottom-40 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">

                  <Globe className="h-6 w-6 text-cyan-300" />

                </div>

                <div className="absolute left-20 bottom-10 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">

                  <Layers3 className="h-6 w-6 text-yellow-300" />

                </div>
                </div>

                {/* Quote */}

                <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

                  <Sparkles
                    className="mb-5 text-yellow-400"
                    size={26}
                  />

                  <p className="text-lg italic leading-9 text-slate-300">

                    &quot;Technology is most powerful when it empowers people.
                    Every website built, every lesson taught, and every AI
                    solution created is another step toward preparing students
                    for tomorrow.&quot;

                  </p>

                </div>

              </div>
              
              {/* ====================================================== */}
              {/* RIGHT CONTENT */}
              {/* ====================================================== */}

              <div className="relative">

                {/* Decorative Blur */}
                <div className="absolute -right-10 top-10 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />

                {/* Premium Badges */}
                <div className="flex flex-wrap gap-3">

                  <Badge variant="secondary">
                    Website Developer
                  </Badge>

                  <Badge variant="info">
                    AI Integration Specialist
                  </Badge>

                  <Badge variant="success">
                    Technology Instructor
                  </Badge>

                </div>

                {/* Name */}

                <h1 className="mt-8 text-5xl font-black leading-none tracking-tight md:text-7xl">

                  {featuredDeveloper.name}

                </h1>

                {/* Subtitle */}

                <p className="mt-5 bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-300 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">

                  Building the Future of Digital Education

                </p>

                {/* Divider */}

                <div className="mt-8 h-[2px] w-40 rounded-full bg-gradient-to-r from-blue-500 via-cyan-300 to-transparent" />

                {/* Introduction */}

                <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300">

                  {featuredDeveloper.introduction}

                </p>

                {/* Availability */}

                <div className="mt-8 flex flex-wrap gap-4">

                  <div className="inline-flex items-center gap-3 rounded-full border border-green-400/30 bg-green-500/10 px-5 py-3 text-sm font-semibold text-green-300 backdrop-blur-xl">

                    <CircleCheck
                      size={18}
                      className="text-green-400"
                    />

                    Available for Student Mentoring

                  </div>

                  <div className="inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-300 backdrop-blur-xl">

                    <Sparkles
                      size={18}
                    />

                    AI • Web • Education

                  </div>

                </div>

                {/* CTA Buttons */}

                <div className="mt-10 flex flex-wrap gap-5">

                  <Button
                    href="/faculty/fizza-jabeen"
                    size="lg"
                    className="group"
                  >

                    View Complete Profile

                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

                  </Button>

                  <Button
                    href="https://wa.me/923120182784?text=Hi%20Fizza,%20I%20visited%20your%20portfolio."
                    variant="secondary"
                    size="lg"
                    className="group border border-white/20 bg-white/10 backdrop-blur-xl hover:bg-white/20"
                  >

                    <Mail className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />

                    Contact

                  </Button>

                </div>

                {/* ====================================================== */}
                {/* Achievement Statistics */}
                {/* ====================================================== */}

                <div className="mt-12 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">

                  {[
                    {
                      value: "20+",
                      label: "Projects Built",
                      color: "text-cyan-300",
                    },
                    {
                      value: "300+",
                      label: "Students Trained",
                      color: "text-yellow-300",
                    },
                    {
                      value: "8+",
                      label: "Technologies Developed",
                      color: "text-green-300",
                    },
                    {
                      value: "100%",
                      label: "Passion & Dedication",
                      color: "text-pink-300",
                    },
                  ].map((stat) => (

                    <div
                      key={stat.label}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/10"
                    >

                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                      <div className="relative">

                        <h3 className={`text-4xl font-black ${stat.color}`}>
                          {stat.value}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {stat.label}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>
            
          </div>
        
        </RevealOnScroll>
      
      </Container>
    
    </section>
  
  );

}
