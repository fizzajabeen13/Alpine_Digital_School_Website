import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import {
  contactDetails,
  socialLinks,
  whatsappConfig,
} from "@/lib/constants/contact";

const socialIcons = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  Youtube: FaYoutube,
  Linkedin: FaLinkedinIn,
};

export default function SocialContactSection() {
  const whatsapp = contactDetails.find(
    (item) => item.title === "WhatsApp"
  );

  return (
    <section
      id="whatsapp"
      className="
        relative
        overflow-hidden
        bg-[#faf9f6]
        py-32
      "
    >
      {/* Background Effects */}

      <div className="absolute left-0 top-0 h-[32rem] w-[32rem] rounded-full bg-yellow-400/10 blur-[160px]" />

      <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-blue-700/10 blur-[160px]" />

      <Container>
        <RevealOnScroll>
          <div className="text-center">
            <Badge variant="secondary">
              Stay Connected
            </Badge>

            <h2 className="mt-6 text-5xl font-black text-[#071A33]">
              Connect With Alpine Digital School
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Reach us instantly through WhatsApp or stay updated by
              following our official social media channels for school
              news, achievements, admissions, and events.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-20 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                    {/* ====================================================== */}
          {/* WhatsApp Card */}
          {/* ====================================================== */}

          <RevealOnScroll delay={0.1}>
            <article
              className="
                group
                relative
                overflow-hidden
                rounded-[2.75rem]
                bg-gradient-to-br
                from-[#071A33]
                via-[#0B2545]
                to-[#123A6B]
                p-10
                text-white
                shadow-2xl
              "
            >
              {/* Decorative Glow */}

              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-400/20 blur-[120px]" />

              <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-yellow-400/20 blur-[110px]" />

              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-green-500 to-green-700 shadow-xl">
                  <MessageCircle size={40} />
                </div>

                <Badge
                  variant="secondary"
                  className="mt-8"
                >
                  Instant Support
                </Badge>

                <h2 className="mt-6 text-4xl font-black leading-tight">
                  Need Immediate
                  <br />
                  Assistance?
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Our admission team is available on WhatsApp to answer
                  your questions about admissions, fee structure,
                  scholarships, documents, transportation, campus
                  visits, and academic programs.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button
                    href={whatsappConfig.link}
                    variant="secondary"
                    size="lg"
                    className="rounded-2xl px-8"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />

                    Chat on WhatsApp
                  </Button>

                  {whatsapp && (
                    <Button
                      href={whatsapp.href}
                      variant="secondary"
                      size="lg"
                      className="rounded-2xl border-white/30 px-8 text-white hover:bg-white/10"
                    >
                      View Number

                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  )}
                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-400">
                      Admissions
                    </p>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Admission guidance and enrollment support.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-400">
                      Fee Help
                    </p>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Fee details, payment options, and scholarships.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-400">
                      Quick Reply
                    </p>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Fast responses during official office hours.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </RevealOnScroll>
                    {/* ====================================================== */}
          {/* Social Media Card */}
          {/* ====================================================== */}

          <RevealOnScroll delay={0.2}>
            <article
              className="
                rounded-[2.75rem]
                border
                border-slate-200
                bg-white
                p-10
                shadow-sm
              "
            >
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-yellow-500" />

                <span className="text-xs font-black uppercase tracking-[0.35em] text-blue-900">
                  Social Presence
                </span>
              </div>

              <h2 className="mt-6 text-4xl font-black text-[#071A33]">
                Follow Our Journey
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Stay informed about school events, student achievements,
                admissions, competitions, campus life, announcements,
                and educational activities through our official social
                media platforms.
              </p>

              <div className="mt-10 space-y-5">
                {socialLinks.map((item) => {
                  const Icon =
                    socialIcons[
                      item.icon as keyof typeof socialIcons
                    ];

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      target="_blank"
                    >
                      <div
                        className="
                          group/social
                          flex
                          items-center
                          justify-between
                          rounded-2xl
                          border
                          border-slate-200
                          bg-white
                          px-6
                          py-5
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-blue-200
                          hover:bg-blue-50
                          hover:shadow-lg
                          "
                        >
                          <div className="flex items-center gap-5">
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
                              "
                            >
                              <Icon size={22} />
                            </div>

                            <div>
                              <h3 className="font-black text-slate-900">
                                {item.name}
                              </h3>

                              <p className="mt-1 text-sm text-slate-500">
                                Official {item.name} Page
                              </p>
                            </div>
                          </div>

                          <ArrowRight
                            className="
                              h-5
                              w-5
                              text-slate-400
                              transition-transform
                              duration-300
                              group-hover/social:translate-x-1
                            "
                          />
                        </div>
                      </Link>
                    );
                  })
                }
              </div>
            </article>
          </RevealOnScroll>
        </div>

        {/* ====================================================== */}
        {/* Information Banner */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.3}>
          <div
            className="
              mt-20
              rounded-[2.5rem]
              border
              border-blue-100
              bg-gradient-to-r
              from-blue-50
              via-white
              to-yellow-50
              p-10
            "
          >
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <h3 className="text-2xl font-black text-[#071A33]">
                  Admissions
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Receive guidance regarding admissions, eligibility,
                  and enrollment procedures.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#071A33]">
                  Student Support
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Contact our office for academic information, fee
                  details, transportation, and school services.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#071A33]">
                  Stay Updated
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Never miss important announcements, achievements,
                  competitions, or upcoming events.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
                {/* ====================================================== */}
        {/* Premium Call To Action */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.4}>
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
              shadow-[0_35px_80px_rgba(7,26,51,0.35)]
            "
          >
            {/* Decorative Glow */}

            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-[140px]" />

            <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-yellow-400/20 blur-[150px]" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
              {/* Left */}

              <div>
                <Badge variant="secondary">
                  Alpine Digital School
                </Badge>

                <h2 className="mt-6 text-4xl font-black leading-tight">
                  Let&apos;s Build Your Child&apos;s
                  <br />
                  Bright Future Together
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Our dedicated admission counselors are always ready to
                  answer your questions and guide you throughout the
                  admission journey. Whether you prefer WhatsApp,
                  social media, or visiting our campus, we&apos;re here to
                  help every step of the way.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button
                    href={whatsappConfig.link}
                    variant="secondary"
                    size="lg"
                    className="rounded-2xl px-8"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />

                    Start WhatsApp Chat
                  </Button>

                  <Button
                    href="/contact"
                    variant="secondary"
                    size="lg"
                    className="rounded-2xl border-white/30 px-8 text-white hover:bg-white/10"
                  >
                    Contact Office

                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Right */}

              <div className="grid gap-5">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-400">
                    Availability
                  </p>

                  <h3 className="mt-3 text-3xl font-black">
                    6 Days / Week
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Friendly admission support throughout the working
                    week.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-400">
                    Communication
                  </p>

                  <h3 className="mt-3 text-3xl font-black">
                    Multiple Channels
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    WhatsApp, Phone, Email, Social Media, and Campus
                    Visits.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-400">
                    Response
                  </p>

                  <h3 className="mt-3 text-3xl font-black">
                    Quick Assistance
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    We strive to respond promptly to every inquiry and
                    support request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
                {/* ====================================================== */}
        {/* Bottom Note */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.5}>
          <div className="mx-auto mt-20 max-w-5xl text-center">
            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-blue-100
                bg-blue-50
                px-6
                py-3
                shadow-sm
              "
            >
              <Sparkles className="h-5 w-5 text-yellow-500" />

              <span className="text-sm font-semibold text-slate-700">
                Every question matters — we&apos;re committed to providing timely,
                friendly, and professional support.
              </span>
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Alpine Digital School believes strong communication builds strong
              relationships. Whether you&apos;re exploring admissions, seeking
              academic information, planning a campus visit, or following our
              latest achievements, our team is always happy to assist. Connect
              with us through WhatsApp or follow our official social platforms
              to stay informed about everything happening at our school.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/admissions"
                variant="secondary"
                className="rounded-2xl px-8 py-4 font-bold"
              >
                Explore Admissions

                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                href="/contact"
                variant="outline"
                className="rounded-2xl px-8 py-4 font-bold"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}