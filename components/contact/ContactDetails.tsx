import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
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
import SectionTitle from "@/components/ui/SectionTitle";

import {
  contactDetails,
  officeHours,
  socialLinks,
} from "@/lib/constants/contact";

const contactIcons = {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
};

const socialIcons = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  Youtube: FaYoutube,
  Linkedin: FaLinkedinIn,
};

export default function ContactDetails() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#faf9f6]
        py-32
      "
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-yellow-400/10 blur-[170px]" />

      <div className="absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-blue-900/10 blur-[170px]" />

      <Container>
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Contact Information"
            title="We&apos;re Here to Help You"
            description="Reach out to Alpine Digital School through phone, WhatsApp, email, campus visit, or our official social media channels."
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
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-500/20 blur-[120px]" />

            <div className="relative">
              <div className="flex items-center gap-3 text-yellow-400">
                <Sparkles size={18} />

                <span className="text-xs font-black uppercase tracking-[0.35em]">
                  Let&apos;s Connect
                </span>
              </div>

              <h2 className="mt-6 text-4xl font-black md:text-5xl">
                We&apos;d Love to
                <br />
                Hear From You
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Whether you&apos;re a parent, student, or visitor, our team is
                always ready to answer your questions and guide you through
                admissions, academics, and campus life.
              </p>
            </div>
          </div>
        </RevealOnScroll>
                {/* ====================================================== */}
        {/* Contact Cards */}
        {/* ====================================================== */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {/* Contact Information */}

          <div className="space-y-8">
            {contactDetails.map((item, index) => {
              const Icon =
                contactIcons[
                  item.icon as keyof typeof contactIcons
                ];

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
                      hover:-translate-y-3
                      hover:border-blue-200
                      hover:shadow-2xl
                    "
                  >
                    {/* Glow */}

                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                    <div className="relative flex items-start gap-5">
                      <div
                        className="
                          flex
                          h-16
                          w-16
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
                        <Icon size={30} />
                      </div>

                      <div className="flex-1">
                        <Badge variant="secondary">
                          {item.title}
                        </Badge>

                        <h3 className="mt-5 text-2xl font-black text-[#071A33]">
                          {item.title}
                        </h3>

                        <Link
                          href={item.href}
                          target="_blank"
                          className="
                            mt-4
                            block
                            break-all
                            text-base
                            leading-8
                            text-slate-600
                            transition
                            hover:text-blue-700
                          "
                        >
                          {item.value}
                        </Link>
                      </div>
                    </div>
                  </article>
                </RevealOnScroll>
              );
            })}
          </div>

          {/* ====================================================== */}
          {/* Office Hours */}
          {/* ====================================================== */}

          <RevealOnScroll delay={0.2}>
            <article
              className="
                h-full
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
              "
            >
              <div
                className="
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
                <Clock size={34} />
              </div>

              <h3 className="mt-8 text-3xl font-black text-[#071A33]">
                Office Hours
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Visit our campus during the following office hours for
                admissions, counseling, fee inquiries, and general support.
              </p>

              <div className="mt-10 space-y-4">
                {officeHours.map((item) => (
                  <div
                    key={item.day}
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      bg-slate-50
                      px-5
                      py-4
                    "
                  >
                    <span className="font-bold text-slate-800">
                      {item.day}
                    </span>

                    <span
                      className={
                        item.time === "Closed"
                          ? "font-bold text-red-600"
                          : "font-semibold text-slate-600"
                      }
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </RevealOnScroll>
                    {/* ====================================================== */}
          {/* Social Media */}
          {/* ====================================================== */}

          <RevealOnScroll delay={0.3}>
            <article
              className="
                h-full
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
              "
            >
              <Badge variant="secondary">
                Stay Connected
              </Badge>

              <h3 className="mt-6 text-3xl font-black text-[#071A33]">
                Follow Alpine School
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Stay updated with school news, academic achievements,
                student activities, campus events, announcements,
                and important notices by following our official
                social media platforms.
              </p>

              <div className="mt-10 grid gap-5">
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
                          hover:border-blue-200
                          hover:bg-blue-50
                          hover:shadow-lg
                        "
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="
                              flex
                              h-12
                              w-12
                              items-center
                              justify-center
                              rounded-2xl
                              bg-gradient-to-br
                              from-[#071A33]
                              to-blue-700
                              text-white
                            "
                          >
                            <Icon size={20} />
                          </div>

                          <span className="font-bold text-slate-800">
                            {item.name}
                          </span>
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
                })}
              </div>

              <div className="mt-10">
                <Button
                  href="/contact"
                  variant="secondary"
                  className="w-full rounded-2xl py-4 text-base font-bold"
                >
                  Contact Our Team

                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </article>
          </RevealOnScroll>
        </div>

        {/* ====================================================== */}
        {/* Contact Highlights */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.15}>
          <div
            className="
              mt-24
              grid
              gap-8
              rounded-[2.5rem]
              border
              border-blue-100
              bg-gradient-to-r
              from-blue-50
              via-white
              to-yellow-50
              p-10
              lg:grid-cols-3
            "
          >
            <div>
              <h3 className="text-2xl font-black text-[#071A33]">
                Fast Response
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                We respond quickly to admission inquiries,
                parent questions, and student support requests.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-[#071A33]">
                Friendly Support
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Our experienced admission counselors are always
                available to guide families through every step.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-[#071A33]">
                Multiple Channels
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Reach us by phone, WhatsApp, email, social media,
                or by visiting our campus personally.
              </p>
            </div>
          </div>
        </RevealOnScroll>
                {/* ====================================================== */}
        {/* Premium Contact CTA */}
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

            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-yellow-500/20 blur-[130px]" />

            <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-[130px]" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
              {/* Left Content */}

              <div>
                <Badge variant="secondary">
                  We&apos;re Always Available
                </Badge>

                <h2 className="mt-6 text-4xl font-black leading-tight">
                  Have Questions?
                  <br />
                  Let&apos;s Start a Conversation.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Whether you&apos;re planning your child&apos;s admission, seeking
                  academic information, scheduling a campus visit, or simply
                  want to know more about Alpine Digital School, our team is
                  ready to assist you with prompt and friendly support.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button
                    href="/contact"
                    variant="secondary"
                    className="rounded-2xl px-8 py-4 text-base font-bold shadow-lg"
                  >
                    Contact Us
                  </Button>

                  <Button
                    href="https://wa.me/+923336302249"
                    variant="secondary"
                    className="rounded-2xl border-white/30 px-8 py-4 text-base font-bold text-white hover:bg-white/10"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </div>
              </div>

              {/* Right Stats */}

              <div className="grid gap-5">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-400">
                    Support
                  </p>

                  <h3 className="mt-3 text-3xl font-black">
                    6 Days
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Admission office available throughout the week for
                    parent assistance.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-400">
                    Response Time
                  </p>

                  <h3 className="mt-3 text-3xl font-black">
                    Fast Replies
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    We strive to answer calls, emails, and WhatsApp
                    messages as quickly as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
                {/* ====================================================== */}
        {/* Bottom Information */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.25}>
          <div className="mx-auto mt-16 max-w-5xl text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-6 py-3 shadow-sm">
              <Sparkles className="h-5 w-5 text-yellow-500" />

              <span className="text-sm font-semibold text-slate-700">
                Your questions matter to us. Every inquiry is handled with
                professionalism, care, and timely support.
              </span>
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-600">
              Alpine Digital School is committed to maintaining open
              communication with parents, students, and visitors. Whether you
              need admission guidance, academic information, fee details,
              transport assistance, or general support, our dedicated team is
              always ready to help. We look forward to welcoming you to our
              campus and assisting you at every step of your educational
              journey.
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
                href="/"
                variant="outline"
                className="rounded-2xl px-8 py-4 font-bold"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}