import {
  CalendarDays,
  Clock,
  MessageCircle,
  School,
  Sparkles,
} from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { admissionDetails } from "@/lib/constants/admissions";

const icons = [
  Sparkles,
  CalendarDays,
  School,
  Clock,
];

export default function AdmissionDetails() {
  return (
    <section id="admission-details"
      className="
        relative
        overflow-hidden
        bg-[#faf9f6]
        py-32
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-0
          top-0
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-yellow-400/10
          blur-[150px]
        "
      />

      <div
        className="
          absolute
          right-0
          bottom-0
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-blue-950/10
          blur-[150px]
        "
      />

      <Container>
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Admissions"
            title="Join the Alpine Digital School Family"
            description="Admissions are now open from Playgroup to Class 10. Discover our admission process, academic session, campus environment, and student support."
            center
          />
        </RevealOnScroll>

        {/* Premium Hero */}

        <RevealOnScroll delay={0.1}>
          <div
            className="
              relative
              mt-20
              overflow-hidden
              rounded-[2.75rem]
              bg-gradient-to-br
              from-[#071A33]
              via-[#0B2545]
              to-[#123A6B]
              px-8
              py-16
              text-white
              md:px-16
            "
          >
            <div
              className="
                absolute
                -right-32
                -top-32
                h-[26rem]
                w-[26rem]
                rounded-full
                bg-yellow-500/20
                blur-[130px]
              "
            />

            <div className="relative flex flex-1 flex-col">
              <div className="flex items-center gap-3 text-yellow-400">
                <Sparkles size={20} />

                <span className="text-xs font-black uppercase tracking-[0.4em]">
                  Admissions 2026–2027
                </span>
              </div>

              <h2 className="mt-6 text-4xl font-black md:text-5xl">
                Start Your Journey
                <br />
                Toward Excellence
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                We welcome students into a modern learning environment focused
                on academic excellence, technology, creativity, leadership, and
                character development.
              </p>
            </div>
          </div>
        </RevealOnScroll>
                {/* ====================================================== */}
        {/* Admission Highlights */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.15}>
          <div
            className="
              mt-16
              grid
              gap-6
              md:grid-cols-3
            "
          >
            <div
              className="
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                p-8
                text-center
                shadow-sm
              "
            >
              <h3 className="text-5xl font-black text-[#071A33]">
                Playgroup
              </h3>

              <p className="mt-3 font-bold text-slate-700">
                Starting Grade
              </p>
            </div>

            <div
              className="
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                p-8
                text-center
                shadow-sm
              "
            >
              <h3 className="text-5xl font-black text-[#071A33]">
                10th
              </h3>

              <p className="mt-3 font-bold text-slate-700">
                Highest Grade
              </p>
            </div>

            <div
              className="
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                p-8
                text-center
                shadow-sm
                "
              >
                <h3 className="text-5xl font-black text-[#071A33]">
                  Open
                </h3>

                <p className="mt-3 font-bold text-slate-700">
                  Admissions Status
                </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* ====================================================== */}
        {/* Admission Information Cards */}
        {/* ====================================================== */}

        <div
          className="
            mt-20
            grid
            gap-8
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {admissionDetails.map((detail, index) => {
            const Icon = icons[index] ?? Sparkles;

            return (
              <RevealOnScroll
                key={detail.title}
                delay={index * 0.08}
              >
                <article
                  className="
                    group
                    relative
                    flex
                    h-[460px]
                    flex-col
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-slate-200
                    bg-white
                    p-8
                    shadow-sm
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:shadow-2xl
                  "
                >
                  {/* Glow */}

                  <div
                    className="
                      absolute
                      -right-16
                      -top-16
                      h-36
                      w-36
                      rounded-full
                      bg-yellow-400/10
                      blur-3xl
                      opacity-0
                      transition
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative">
                    <div
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-[#071A33]
                        to-blue-800
                        text-white
                        shadow-lg
                      "
                    >
                      <Icon size={28} />
                    </div>

                    <h3
                      className="
                        mt-7
                        min-h-[64px]
                        text-2xl
                        font-black
                        text-[#071A33]
                      "
                    >
                      {detail.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        flex-1
                        text-sm
                        leading-7
                        text-slate-600
                        line-clamp-8
                      "
                    >
                      {detail.description}
                    </p>
                      <div
                      className="
                        mt-auto
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        bg-slate-50
                        p-4
                      "
                    >
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-yellow-100
                          text-yellow-600
                        "
                      >
                        <Sparkles size={18} />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Admission Support
                        </p>

                        <p className="text-sm font-semibold text-slate-800">
                          Guidance Available
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* ====================================================== */}
        {/* Premium Admission CTA */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.2}>
          <div
            className="
              relative
              mt-24
              overflow-hidden
              rounded-[2.75rem]
              bg-gradient-to-br
              from-[#071A33]
              via-[#0B2545]
              to-[#123A6B]
              px-8
              py-16
              text-white
              md:px-14
            "
          >
            {/* Decorative Glow */}

            <div
              className="
                absolute
                -left-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-yellow-500/20
                blur-[120px]
              "
            />

            <div
              className="
                absolute
                -right-24
                -bottom-24
                h-72
                w-72
                rounded-full
                bg-blue-400/20
                blur-[120px]
              "
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.35em] text-yellow-400">
                  Need Assistance?
                </span>

                <h2 className="mt-5 text-4xl font-black leading-tight">
                  Our Admission Team
                  <br />
                  Is Ready to Help
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Whether you have questions about eligibility, admission
                  requirements, fee structure, scholarships, campus visits,
                  or the enrollment process, we&apos;re here to guide you every
                  step of the way.
                </p>
              </div>

              <div className="grid gap-5">
                <Button
                  href="/contact"
                  variant="secondary"
                  className="justify-center rounded-2xl py-4 text-base font-bold shadow-xl"
                >
                  Contact Admission Office
                </Button>

                <Button
                  href="https://wa.me/+923336302249?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20admissions."
                  variant="secondary"
                  className="justify-center rounded-2xl border-white/30 py-4 text-base font-bold text-white hover:bg-white/10"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
                    Office Hours
                  </p>

                  <p className="mt-3 text-lg font-bold">
                    Monday – Saturday
                  </p>

                  <p className="mt-1 text-slate-300">
                    8:00 AM – 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* ====================================================== */}
        {/* Bottom Note */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.25}>
          <div className="mx-auto mt-14 max-w-4xl text-center">
            <p className="text-sm leading-8 text-slate-600">
              We believe every child deserves an inspiring educational journey.
              Our admissions process is designed to be simple, transparent, and
              supportive, helping families become part of the Alpine Digital
              School community with confidence.
            </p>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}