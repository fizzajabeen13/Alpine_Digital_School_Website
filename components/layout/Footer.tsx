import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Image from "next/image";

import { navLinks } from "@/lib/constants/navigation";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#061426] text-white">
      {/* Background Effects */}

      <div className="absolute left-0 top-0 h-[36rem] w-[36rem] rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-yellow-500/10 blur-[180px]" />

      {/* ====================================================== */}
      {/* Newsletter */}
      {/* ====================================================== */}

      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Badge variant="secondary">
                <Sparkles className="mr-2 h-4 w-4" />
                Newsletter
              </Badge>

              <h2 className="mt-6 text-5xl font-black leading-tight">
                Stay Connected With
                <br />
                Alpine Digital School
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Subscribe to receive admission updates, examination notices,
                school events, student achievements, newsletters, and important
                announcements directly in your inbox.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <form className="space-y-5">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-14 w-full rounded-2xl border border-white/10 bg-white/10 px-6 text-white outline-none placeholder:text-slate-400 focus:border-yellow-500"
                />

                <Button
                  type="submit"
                  variant="secondary"
                  className="w-full rounded-2xl py-4"
                >
                  Subscribe Now

                  <Send className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-center text-sm text-slate-400">
                  No spam. Only important school updates.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* ====================================================== */}
          {/* School Information */}
          {/* ====================================================== */}

<div>
  <Link
    href="/"
    aria-label="Go to Homepage"
    className="
      inline-flex
      h-20
      w-20
      items-center
      justify-center
      rounded-2xl
      border
      border-white/50
      bg-white/50
      backdrop-blur-md
      shadow-lg
      transition-all
      duration-300
      hover:scale-105
      hover:border-white/20
      hover:bg-white/60
      hover:shadow-xl
    "
  >
    <Image
      src="/images/logos/Alpine_Digital_School_Logo.png"
      alt="Alpine Digital School Logo"
      width={56}
      height={56}
      priority
      className="object-contain"
    />
  </Link>
            <h2 className="mt-6 text-3xl font-black">
              Alpine Digital School
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Empowering future leaders through academic excellence,
              innovation, technology, STEM education, robotics,
              artificial intelligence, and character development in a
              modern learning environment.
            </p>

            {/* Social Links */}

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="https://www.facebook.com/alpineschoolofficial"
                aria-label="Facebook"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-600
                  hover:text-white
                "
              >
                <FaFacebook size={18} />
              </Link>

              <Link
                href="https://www.instagram.com/school.alpine?utm_source=qr&igsh=MWZhYnpxNDV2MjYzdA%3D%3D"
                aria-label="Instagram"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-pink-600
                  hover:text-white
                "
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="https://www.youtube.com/@thealpineschoolharoonabad1931"
                aria-label="YouTube"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-red-600
                  hover:text-white
                "
              >
                <FaYoutube size={18} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/alpine-school-hnd-486b4b422/"
                aria-label="LinkedIn"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-sky-600
                  hover:text-white
                "
              >
                <FaLinkedin size={18} />
              </Link>
            </div>
          </div>

          {/* ====================================================== */}
          {/* Quick Links */}
          {/* ====================================================== */}

          <div>
            <h3 className="text-2xl font-black">
              Quick Links
            </h3>

            <div className="mt-8 space-y-4">
              {navLinks.slice(0, 7).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    text-slate-300
                    transition
                    hover:text-white
                  "
                >
                  <ArrowRight
                    className="
                      h-4
                      w-4
                      text-yellow-500
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />

                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {/* ====================================================== */}
          {/* Admissions */}
          {/* ====================================================== */}

          <div>
            <h3 className="text-2xl font-black">
              Admissions
            </h3>

            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Admission Process",
                  href: "/admissions#admission-details",
                },
                {
                  title: "Eligibility Criteria",
                  href: "/admissions#eligibility-process-documents",
                },
                {
                  title: "Required Documents",
                  href: "/admissions#eligibility-process-documents",
                },
                {
                  title: "Download Admission Form",
                  href: "/admissions#downloads",
                },
                {
                  title: "Fee Inquiry",
                  href: "/contact",
                },
                {
                  title: "Scholarships",
                  href: "/admissions",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    text-slate-300
                    transition
                    hover:text-white
                  "
                >
                  <ArrowRight
                    className="
                      h-4
                      w-4
                      text-yellow-500
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />

                  {item.title}
                </Link>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6">
              <Badge variant="secondary">
                Admissions Open
              </Badge>

              <p className="mt-4 leading-7 text-slate-300">
                Applications are now being accepted from Playgroup to
                Grade 10 for the upcoming academic session.
              </p>

              <Button
                href="/admissions"
                variant="secondary"
                className="mt-6 rounded-2xl"
              >
                Apply Now

                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* ====================================================== */}
          {/* Contact Information */}
          {/* ====================================================== */}

          <div>
            <h3 className="text-2xl font-black">
              Contact Information
            </h3>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500 text-slate-950 shrink-0">
                  <MapPin size={20} />
                </div>

                <div>
                  <h4 className="font-bold text-white">
                    Campus Address
                  </h4>

                  <p className="mt-2 leading-7 text-slate-300">
                    Al-Fateh Town, 72/4R Road Near The Punjab College, 
                    <br />
                    Haroonabad, District Bahawalnagar
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500 text-slate-950">
                  <Phone size={20} />
                </div>

                <div>
                  <h4 className="font-bold text-white">
                    Phone
                  </h4>

                  <Link
                    href="tel:+923336302249"
                    className="mt-2 block text-slate-300 hover:text-white"
                  >
                    0333 6302249
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500 text-slate-950">
                  <Mail size={20} />
                </div>

                <div>
                  <h4 className="font-bold text-white">
                    Email
                  </h4>

                  <Link
                    href="mailto:alpineschoolhnd@gmail.com"
                    className="mt-2 block break-all text-slate-300 hover:text-white"
                  >
                    alpineschoolhnd@gmail.com
                  </Link>
                </div>
              </div>
            </div>
            {/* ====================================================== */}
            {/* Office Hours Card */}
            {/* ====================================================== */}

            <div
              className="
                mt-10
                rounded-[2rem]
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
              "
            >
              <Badge variant="secondary">
                Office Hours
              </Badge>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">
                    Monday – Saturday
                  </span>

                  <span className="font-bold text-white">
                    8:00 AM – 2:00 PM
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-300">
                    Sunday
                  </span>

                  <span className="font-bold text-red-400">
                    Closed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================== */}
        {/* Premium CTA Strip */}
        {/* ====================================================== */}

        <div
          className="
            mt-20
            rounded-[2.5rem]
            border
            border-white/10
            bg-gradient-to-r
            from-blue-900
            via-[#0B2545]
            to-slate-900
            p-8
          "
        >
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <Badge variant="secondary">
                Admissions Open
              </Badge>

              <h3 className="mt-4 text-3xl font-black">
                Ready to Begin Your Child&apos;s Journey?
              </h3>

              <p className="mt-3 max-w-2xl text-slate-300">
                Join Alpine Digital School and become part of a learning
                community committed to excellence, innovation, and future-ready
                education.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                href="/admissions"
                variant="secondary"
                className="rounded-2xl"
              >
                Apply Now

                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                href="/contact"
                variant="secondary"
                className="rounded-2xl border-white/20 text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        {/* ====================================================== */}
        {/* Bottom Footer */}
        {/* ====================================================== */}

        <div className="mt-20 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <p className="text-sm text-slate-400">
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold text-white">
                  Alpine Digital School
                </span>
                . All rights reserved.
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Inspiring Excellence • Empowering Innovation • Building Future
                Leaders
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">
                Our Core Values
              </p>
              
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                {[
                  "Excellence",
                  "Integrity",
                  "Innovation",
                  "Leadership",
                  ].map((value) => (
                  <span
                    key={value}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Credit */}

          <div className="mt-10 border-t border-white/5 pt-6 text-center">
            <p className="text-sm text-slate-500">
              Designed & Developed with ❤️ for{" "}
              <span className="font-semibold text-white">
                Alpine Digital School
              </span>
            </p>

            <p className="mt-2 text-xs tracking-[0.2em] uppercase text-slate-600">
              Modern Education • Premium Experience • Future Ready
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}