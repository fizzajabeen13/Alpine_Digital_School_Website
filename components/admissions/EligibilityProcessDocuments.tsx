import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  FileCheck,
  FileText,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  admissionProcess,
  eligibilityCriteria,
  requiredDocuments,
} from "@/lib/constants/admissions";

const eligibilityIcons = [
  GraduationCap,
  BookOpen,
  BadgeCheck,
  ShieldCheck,
];

const processIcons = [
  UserRound,
  FileText,
  ClipboardCheck,
  FileCheck,
  CheckCircle2,
];

export default function EligibilityProcessDocuments() {
  return (
    <section id="eligibility-process-documents"
      className="
        relative
        overflow-hidden
        bg-[#faf9f6]
        py-32
      "
    >
      {/* Decorative Background */}

      <div className="absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-yellow-400/10 blur-[170px]" />

      <div className="absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-blue-900/10 blur-[170px]" />

      <Container>
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Admission Guide"
            title="Eligibility, Admission Process & Required Documents"
            description="Everything parents need to know before applying for admission at Alpine Digital School."
            center
          />
        </RevealOnScroll>

        {/* ====================================================== */}
        {/* Premium Hero */}
        {/* ====================================================== */}

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
              px-10
              py-16
              text-white
              md:px-16
            "
          >
            <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-yellow-500/20 blur-[120px]" />

            <div className="relative">
              <div className="flex items-center gap-3 text-yellow-400">
                <Sparkles size={18} />

                <span className="text-xs font-black uppercase tracking-[0.35em]">
                  Admission Journey
                </span>
              </div>

              <h2 className="mt-6 text-4xl font-black md:text-5xl">
                A Simple & Transparent
                <br />
                Admission Process
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                From checking eligibility to submitting documents and
                completing enrollment, every step is designed to make the
                admission experience smooth, transparent, and convenient
                for parents.
              </p>
            </div>
          </div>
        </RevealOnScroll>
                {/* ====================================================== */}
        {/* Eligibility Criteria */}
        {/* ====================================================== */}

        <div className="mt-24">
          <RevealOnScroll>
            <div className="text-center">
              <Badge variant="secondary">
                Eligibility Criteria
              </Badge>

              <h2 className="mt-5 text-4xl font-black text-[#071A33]">
                Who Can Apply?
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                We welcome students from Playgroup to Grade 10 who meet
                the age requirements and fulfill the academic criteria for
                their desired class.
              </p>
            </div>
          </RevealOnScroll>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {eligibilityCriteria.map((item, index) => {
              const Icon = eligibilityIcons[index] ?? GraduationCap;

              return (
                <RevealOnScroll
                  key={item.title}
                  delay={index * 0.08}
                >
                  <article
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[2rem]
                      border
                      border-slate-200
                      bg-white
                      p-8
                      shadow-sm
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:shadow-2xl
                    "
                  >
                    <div
                      className="
                        absolute
                        -right-14
                        -top-14
                        h-36
                        w-36
                        rounded-full
                        bg-blue-100
                        opacity-0
                        blur-3xl
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
                          to-blue-700
                          text-white
                          shadow-lg
                        "
                      >
                        <Icon size={30} />
                      </div>

                      <h3 className="mt-7 text-2xl font-black text-[#071A33]">
                        {item.title}
                      </h3>

                      <Badge
                        variant="secondary"
                        className="mt-4"
                      >
                        Age: {item.age}
                      </Badge>

                      <ul className="mt-8 space-y-4">
                        {item.requirements.map((requirement) => (
                          <li
                            key={requirement}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2
                              size={20}
                              className="mt-1 shrink-0 text-green-600"
                            />

                            <span className="leading-7 text-slate-600">
                              {requirement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
        {/* ====================================================== */}
        {/* Admission Process */}
        {/* ====================================================== */}

        <div className="mt-32">
          <RevealOnScroll>
            <div className="text-center">
              <Badge variant="secondary">
                Admission Process
              </Badge>

              <h2 className="mt-5 text-4xl font-black text-[#071A33]">
                Your Journey to Alpine Begins Here
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Our streamlined admission process ensures a smooth experience
                for parents and students—from inquiry to successful enrollment.
              </p>
            </div>
          </RevealOnScroll>

          <div className="relative mt-16 grid gap-8 lg:grid-cols-5">
            {admissionProcess.slice(0, 5).map((step, index) => {
              const Icon = processIcons[index] ?? UserRound;

              return (
                <RevealOnScroll
                  key={step.step}
                  delay={index * 0.08}
                >
                  <article
                    className="
                      group
                      relative
                      flex
                      h-[430px]
                      flex-col
                      overflow-hidden
                      rounded-[2rem]
                      border
                      border-slate-200
                      bg-white
                      p-8
                      text-center
                      shadow-sm
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:shadow-2xl
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-x-0
                        top-0
                        h-1
                        bg-gradient-to-r
                        from-yellow-400
                        via-blue-600
                        to-yellow-400
                      "
                    />

                    <div
                      className="
                        mx-auto
                        flex
                        h-18
                        w-18
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-[#071A33]
                        to-blue-700
                        text-white
                        shadow-xl
                      "
                    >
                      <Icon size={30} />
                    </div>

                    <div className="mt-6 flex flex-1 flex-col">
                      <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-xs font-black tracking-[0.2em] text-blue-800">
                        STEP {step.step}
                      </span>

                      <h3 className="mt-5 text-2xl font-black text-[#071A33]">
                        {step.title}
                      </h3>

                      <p className="mt-5 text-sm leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>

                    {index < 4 && (
                      <div className="mt-auto flex justify-center">
                        <ArrowRight className="text-slate-400 transition group-hover:translate-x-1" />
                      </div>
                    )}
                  </article>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
        {/* ====================================================== */}
        {/* Required Documents */}
        {/* ====================================================== */}

        <div className="mt-32">
          <RevealOnScroll>
            <div className="text-center">
              <Badge variant="secondary">
                Required Documents
              </Badge>

              <h2 className="mt-5 text-4xl font-black text-[#071A33]">
                Documents Needed for Admission
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Please keep the following documents ready before submitting
                your admission application. This helps us process your request
                quickly and efficiently.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div
              className="
                mt-16
                overflow-hidden
                rounded-[2.5rem]
                border
                border-slate-200
                bg-white
                p-8
                shadow-xl
              "
            >
              <div className="grid gap-6 md:grid-cols-2">
                {requiredDocuments.map((document, index) => (
                  <div
                    key={document}
                    className="
                      group
                      flex
                      items-center
                      gap-5
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50
                      p-5
                      transition-all
                      duration-300
                      hover:border-blue-200
                      hover:bg-white
                      hover:shadow-lg
                    "
                  >
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-[#071A33]
                        to-blue-700
                        text-white
                        shadow-md
                      "
                    >
                      <FileText size={24} />
                    </div>

                    <div className="flex-1">
                      <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">
                        Document {index + 1}
                      </p>

                      <h3 className="mt-2 text-lg font-bold text-[#071A33]">
                        {document}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* ====================================================== */}
          {/* Premium CTA */}
          {/* ====================================================== */}

          <RevealOnScroll delay={0.2}>
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
                px-10
                py-16
                text-white
              "
            >
              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-yellow-500/20 blur-[120px]" />
              <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-blue-400/20 blur-[120px]" />

              <div className="relative">
                <Badge variant="primary">
                  Ready to Apply?
                </Badge>

                <h2 className="mt-6 text-4xl font-black">
                  Begin Your Admission Journey Today
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                  Our admission counselors are here to guide you through every
                  step of the application process and answer all your questions.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button
                    href="/contact"
                    variant="secondary"
                    className="rounded-2xl px-8 py-4 text-base font-bold shadow-xl"
                  >
                    Contact Admission Office
                  </Button>

                  <Button
                    href="/admissions/apply"
                    variant="secondary"
                    className="rounded-2xl border-white/30 px-8 py-4 text-base font-bold text-white hover:bg-white/10"
                  >
                    Apply for Admission
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
                      Response Time
                    </p>

                    <h3 className="mt-3 text-2xl font-black">
                      Within 24 Hours
                    </h3>

                    <p className="mt-2 text-sm text-slate-300">
                      Our admissions team responds promptly to inquiries and
                      application requests.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
                      Office Hours
                    </p>

                    <h3 className="mt-3 text-2xl font-black">
                      Mon – Sat
                    </h3>

                    <p className="mt-2 text-sm text-slate-300">
                      8:00 AM – 2:00 PM
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">
                      Admission Status
                    </p>

                    <h3 className="mt-3 text-2xl font-black">
                      Open Now
                    </h3>

                    <p className="mt-2 text-sm text-slate-300">
                      Admissions are currently open for the upcoming academic
                      session.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Bottom Note */}

          <RevealOnScroll delay={0.25}>
            <div className="mx-auto mt-14 max-w-4xl text-center">
              <p className="text-sm leading-8 text-slate-600">
                We are committed to providing every family with a transparent,
                welcoming, and supportive admission experience. If you need any
                assistance, our admission counselors are always ready to help.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}