import {
  ArrowRight,
  Download,
  FileText,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { admissionDownloads } from "@/lib/constants/admissions";

export default function DownloadsSection() {
  return (
    <section id="downloads"
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
            eyebrow="Downloads"
            title="Admission Forms & School Prospectus"
            description="Access official admission forms, prospectus, fee guidelines, and important documents for the admission process."
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
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-500/20 blur-[120px]" />

            <div className="relative flex flex-1 flex-col">
              <div className="flex items-center gap-3 text-yellow-400">
                <Sparkles size={18} />

                <span className="text-xs font-black uppercase tracking-[0.35em]">
                  Official Documents
                </span>
              </div>

              <h2 className="mt-6 text-4xl font-black md:text-5xl">
                Download Everything
                <br />
                You Need Before Applying
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Easily access official admission forms, prospectus, policies,
                fee information, and other essential resources for parents and
                students.
              </p>
            </div>
          </div>
        </RevealOnScroll>
                {/* ====================================================== */}
        {/* Download Cards */}
        {/* ====================================================== */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {admissionDownloads.map((download, index) => (
            <RevealOnScroll
              key={download.title}
              delay={index * 0.08}
            >
              <article
                className="
                  group
                  relative
                  flex
                  h-[560px]
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
                  hover:border-blue-200
                  hover:shadow-2xl
                "
              >
                {/* Glow */}

                <div
                  className="
                    absolute
                    -right-12
                    -top-12
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
                  <Badge variant="secondary">
                    PDF Document
                  </Badge>

                  <div
                    className="
                      mt-6
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-3xl
                      bg-gradient-to-br
                      from-[#071A33]
                      to-blue-700
                      text-white
                      shadow-xl
                    "
                  >
                    <FileText size={36} />
                  </div>

                  <h3 className="mt-8 text-3xl font-black text-[#071A33]">
                    {download.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {download.description}
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <ShieldCheck
                        size={18}
                        className="text-green-600"
                      />

                      <span>Official School Document</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Lock
                        size={18}
                        className="text-blue-700"
                      />

                      <span>Safe & Secure Download</span>
                    </div>
                  </div>
                    <div className="mt-auto pt-10">
                    <Button
                      href={download.file}
                      variant="secondary"
                      className="
                        group/button
                        w-full
                        justify-center
                        rounded-2xl
                        px-6
                        py-4
                        text-base
                        font-bold
                        shadow-lg
                        transition-all
                        duration-300
                        hover:shadow-xl
                      "
                    >
                      <Download className="mr-2 h-5 w-5 transition-transform duration-300 group-hover/button:-translate-y-1" />

                      Download PDF

                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        {/* ====================================================== */}
        {/* Information Panel */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.15}>
          <div
            className="
              mt-24
              rounded-[2.5rem]
              border
              border-blue-100
              bg-gradient-to-r
              from-blue-50
              via-white
              to-yellow-50
              p-10
              shadow-lg
            "
          >
            <div className="grid gap-10 lg:grid-cols-3">
              <div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-950 text-white shadow-lg">
                  <ShieldCheck size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-black text-[#071A33]">
                  Official Documents
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  All downloadable files are issued by Alpine Digital School
                  and are updated for the current admission session.
                </p>
              </div>

              <div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 text-white shadow-lg">
                  <Download size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-black text-[#071A33]">
                  Easy Downloads
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Download forms instantly and complete them before visiting
                  the admission office to save valuable time.
                </p>
              </div>

              <div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600 text-white shadow-lg">
                  <FileText size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-black text-[#071A33]">
                  Printable PDFs
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  All resources are provided in high-quality PDF format,
                  suitable for both digital use and printing.
                </p>
              </div>
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
              mt-24
              overflow-hidden
              rounded-[2.75rem]
              bg-gradient-to-br
              from-[#071A33]
              via-[#0B2545]
              to-[#123A6B]
              px-10
              py-16
              text-white
              shadow-2xl
            "
          >
            {/* Decorative Glow */}

            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-yellow-500/20 blur-[120px]" />

            <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-blue-400/20 blur-[120px]" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <Badge variant="secondary">
                  Need Assistance?
                </Badge>

                <h2 className="mt-6 text-4xl font-black leading-tight">
                  Can&apos;t Find the
                  <br />
                  Document You&apos;re Looking For?
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Our admission office is always ready to help parents with
                  admission forms, fee structures, school policies,
                  scholarship information, and any additional documentation.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button
                    href="/contact"
                    variant="secondary"
                    className="rounded-2xl px-8 py-4 text-base font-bold shadow-lg"
                  >
                    Contact Admission Office
                  </Button>

                  <Button
                    href="/admissions"
                    variant="secondary"
                    className="rounded-2xl border-white/30 px-8 py-4 text-base font-bold text-white hover:bg-white/10"
                  >
                    Admission Guide

                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-400">
                    Available
                  </p>

                  <h3 className="mt-3 text-3xl font-black">
                    24/7 Downloads
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Download school documents anytime from anywhere.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-400">
                    Support
                  </p>

                  <h3 className="mt-3 text-3xl font-black">
                    Quick Assistance
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Our admission counselors are available to answer your
                    questions promptly.
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
          <div className="mx-auto mt-16 max-w-5xl text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-6 py-3">
              <ShieldCheck className="h-5 w-5 text-blue-700" />

              <span className="text-sm font-semibold text-slate-700">
                All downloadable documents are verified and officially issued
                by Alpine Digital School.
              </span>
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-600">
              We regularly update our admission forms, prospectus, fee
              structure, and other downloadable resources to ensure parents
              always have access to the latest information. If you require any
              additional documents or assistance, our admission office is happy
              to help.
            </p>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}