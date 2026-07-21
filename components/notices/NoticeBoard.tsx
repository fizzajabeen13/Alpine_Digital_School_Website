import {
  ArrowRight,
  BellRing,
  CalendarDays,
  CheckCircle2,
  Info,
  Megaphone,
  ShieldAlert,
  Sparkles,
  Check,
} from "lucide-react";

import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { notices } from "@/lib/constants/notices";

const priorityVariants = {
  Low: "success",
  Medium: "info",
  High: "warning",
  Urgent: "danger",
} as const;

const priorityTheme = {
  Low: {
    gradient:
      "from-emerald-50 via-white to-green-50",
    border: "border-emerald-200",
    accent: "bg-emerald-500",
    icon: "from-emerald-500 to-green-700",
    glow: "bg-emerald-400/20",
    ring: "ring-emerald-100",
    text: "text-emerald-700",
    watermark: "text-emerald-500/5",
    shadow:
      "hover:shadow-[0_35px_80px_rgba(16,185,129,0.18)]",
  },

  Medium: {
    gradient:
      "from-blue-50 via-white to-sky-50",
    border: "border-blue-200",
    accent: "bg-blue-600",
    icon: "from-blue-600 to-indigo-700",
    glow: "bg-blue-400/20",
    ring: "ring-blue-100",
    text: "text-blue-700",
    watermark: "text-blue-500/5",
    shadow:
      "hover:shadow-[0_35px_80px_rgba(37,99,235,0.18)]",
  },

  High: {
    gradient:
      "from-yellow-50 via-white to-amber-50",
    border: "border-yellow-200",
    accent: "bg-yellow-500",
    icon: "from-yellow-500 to-orange-600",
    glow: "bg-yellow-400/20",
    ring: "ring-yellow-100",
    text: "text-yellow-700",
    watermark: "text-yellow-500/5",
    shadow:
      "hover:shadow-[0_35px_80px_rgba(245,158,11,0.20)]",
  },

  Urgent: {
    gradient:
      "from-red-50 via-white to-rose-50",
    border: "border-red-200",
    accent: "bg-red-500",
    icon: "from-red-500 to-rose-700",
    glow: "bg-red-400/20",
    ring: "ring-red-100",
    text: "text-red-700",
    watermark: "text-red-500/5",
    shadow:
      "hover:shadow-[0_35px_80px_rgba(239,68,68,0.20)]",
  },
} as const;

export default function NoticeBoard() {
  const getPriorityIcon = (
    priority: keyof typeof priorityTheme,
  ) => {
    switch (priority) {
      case "Urgent":
        return ShieldAlert;

      case "High":
        return BellRing;

      case "Medium":
        return Info;

      default:
        return CheckCircle2;
    }
  };

  return (
    <section
      id="notice-board"
      className="relative overflow-hidden bg-[#faf9f6] py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-blue-500/10 blur-[170px]" />

      <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-yellow-400/10 blur-[160px]" />

      <Container>
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Digital Notice Board"
            title="Latest School Announcements"
            description="Stay informed with important notices, examination schedules, holidays, fee reminders, admissions, and official announcements."
            center
          />

          <div className="mt-10 flex justify-center">
            <Badge
              variant="secondary"
              className="px-5 py-2 text-sm"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Updated Regularly
            </Badge>
          </div>
        </RevealOnScroll>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {notices.map((notice, index) => {
            const theme =
              priorityTheme[
                notice.priority as keyof typeof priorityTheme
              ];

            const PriorityIcon = getPriorityIcon(
              notice.priority as keyof typeof priorityTheme,
            );

            return (
                            <RevealOnScroll
                key={notice.id}
                delay={index * 0.08}
              >
                <article
                  className={`
                    group
                    relative
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-[2rem]
                    border
                    ${theme.border}
                    bg-gradient-to-br
                    ${theme.gradient}
                    p-8
                    shadow-[0_15px_45px_rgba(15,23,42,0.06)]
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:scale-[1.02]
                    ${theme.shadow}
                  `}
                >
                  {/* Top Accent */}

                  <div
                    className={`absolute inset-x-0 top-0 h-1.5 ${theme.accent}`}
                  />

                  {/* Decorative Glow */}

                  <div
                    className={`absolute -right-10 -top-10 h-44 w-44 rounded-full blur-3xl ${theme.glow}`}
                  />

                  <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/60 blur-3xl" />

                  {/* Watermark */}

                  <Megaphone
                    className={`
                      absolute
                      -right-8
                      bottom-4
                      h-44
                      w-44
                      rotate-[-20deg]
                      ${theme.watermark}
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    `}
                  />

                  {/* Header */}

                  <div className="relative z-10 flex items-start justify-between">
                    <div className="relative">
                      <div
                        className={`
                          absolute
                          inset-0
                          rounded-3xl
                          blur-xl
                          ${theme.glow}
                        `}
                      />

                      <div
                        className={`
                          relative
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-3xl
                          bg-gradient-to-br
                          ${theme.icon}
                          text-white
                          ring-8
                          ${theme.ring}
                          shadow-xl
                        `}
                      >
                        <PriorityIcon size={28} />
                      </div>
                    </div>

                    <Badge
                      variant={
                        priorityVariants[
                          notice.priority as keyof typeof priorityVariants
                        ]
                      }
                      className="rounded-full px-4 py-1.5 shadow-md backdrop-blur"
                    >
                      {notice.priority}
                    </Badge>
                  </div>
                                    {/* Category */}

                  <div className="relative z-10 mt-8">
                    <Badge
                      variant="secondary"
                      className="rounded-full px-4 py-2"
                    >
                      {notice.category}
                    </Badge>
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      relative
                      z-10
                      mt-6
                      text-2xl
                      font-black
                      leading-tight
                      tracking-tight
                      text-[#071A33]
                      transition-colors
                      duration-300
                      group-hover:text-blue-900
                    "
                  >
                    {notice.title}
                  </h3>

                  {/* Meta Information */}

                  <div className="relative z-10 mt-6 flex items-center gap-3">
                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-white
                        shadow-sm
                        ${theme.text}
                      `}
                    >
                      <CalendarDays size={18} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                        Published On
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-700">
                        {notice.date}
                      </p>
                    </div>
                  </div>

                  {/* Description */}

                  <p
                    className="
                      relative
                      z-10
                      mt-7
                      flex-1
                      text-[15px]
                      leading-8
                      text-slate-600
                    "
                  >
                    {notice.description}
                  </p>

                  {/* Information Box */}

                  <div
                    className="
                      relative
                      z-10
                      mt-8
                      rounded-2xl
                      border
                      border-white/70
                      bg-white/70
                      p-5
                      backdrop-blur-xl
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`
                          mt-1
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          shrink-0
                          rounded-xl
                          bg-gradient-to-br
                          ${theme.icon}
                          text-white
                          shadow-md
                        `}
                      >
                        <Megaphone size={18} />
                      </div>

                      <div>
                        <p className="font-bold text-slate-900">
                          Official School Notice
                        </p>

                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          This announcement has been issued by the school
                          administration for students, parents, and staff.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Footer */}

                  <div className="relative z-10 mt-8">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                    <div className="mt-6 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                          Status
                        </p>

                        <div className="mt-2 flex items-center gap-2">
                          <span
                            className={`h-2.5 w-2.5 rounded-full ${theme.accent}`}
                          />

                          <span
                            className={`text-sm font-bold ${theme.text}`}
                          >
                            Active Notice
                          </span>
                        </div>
                      </div>
                      <div
  className="
    inline-flex
    items-center
    gap-3
    rounded-2xl
    bg-white
    px-5
    py-3
    font-bold
    text-slate-800
    shadow-md
  "
>
  <div
    className={`
      flex
      h-9
      w-9
      items-center
      justify-center
      rounded-full
      bg-gradient-to-br
      ${theme.icon}
      text-white
      shrink-0
    `}
  >
    <Check size={18} />
  </div>

  <span>Verified</span>
</div>

                    </div>
                  </div>

                  {/* Floating Shine */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-700
                      group-hover:opacity-100
                    "
                  >
                    <div
                      className="
                        absolute
                        -left-32
                        top-0
                        h-full
                        w-20
                        rotate-12
                        bg-white/40
                        blur-xl
                        transition-transform
                        duration-1000
                        group-hover:translate-x-[520px]
                      "
                    />
                  </div>
                </article>
              </RevealOnScroll>
                          );
          })}
        </div>

        {/* ====================================================== */}
        {/* Premium Information Features */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.35}>
          <div className="mt-24 grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Daily Updates",
                description:
                  "Important announcements are published regularly to keep students, parents, and staff informed.",
                color: "from-blue-600 to-indigo-700",
                glow: "bg-blue-400/20",
                icon: CalendarDays,
              },
              {
                title: "Official Circulars",
                description:
                  "Access examination schedules, holiday notifications, admissions, fee reminders, and administrative notices.",
                color: "from-yellow-500 to-orange-600",
                glow: "bg-yellow-400/20",
                icon: Megaphone,
              },
              {
                title: "Stay Connected",
                description:
                  "Visit the notice board regularly so you never miss important school announcements or events.",
                color: "from-emerald-500 to-green-700",
                glow: "bg-emerald-400/20",
                icon: BellRing,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
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
                    className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl ${item.glow}`}
                  />

                  <div
                    className={`
                      relative
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-3xl
                      bg-gradient-to-br
                      ${item.color}
                      text-white
                      shadow-xl
                    `}
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-7 text-2xl font-black text-[#071A33]">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-8 flex items-center gap-3 font-bold text-blue-800">
                    Learn More

                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
                {/* ====================================================== */}
        {/* Premium Call To Action */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.45}>
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
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-400/20 blur-[150px]" />
            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-yellow-400/20 blur-[160px]" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <Badge variant="secondary">
                  Official School Communication
                </Badge>

                <h2 className="mt-6 text-4xl font-black leading-tight">
                  Stay Connected with
                  <br />
                  Every Important Update
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  From examinations and holidays to admissions, competitions,
                  fee reminders, and school events, our Digital Notice Board
                  ensures that students and parents always have access to the
                  latest official announcements.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button
                    href="/contact"
                    variant="secondary"
                    size="lg"
                    className="rounded-2xl px-8"
                  >
                    Contact Office
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <Button
                    href="/events"
                    variant="secondary"
                    size="lg"
                    className="rounded-2xl border-white/30 px-8 text-white hover:bg-white/10"
                  >
                    View Events
                  </Button>
                </div>
              </div>

              <div className="grid gap-5">
                {[
                  {
                    title: "Always Updated",
                    label: "Notice Board",
                    text: "New notices are published as soon as official information becomes available.",
                  },
                  {
                    title: "Download Documents",
                    label: "PDF Resources",
                    text: "Access circulars, schedules, forms, and official documents with ease.",
                  },
                  {
                    title: "School Community",
                    label: "Parents & Students",
                    text: "Stay informed about everything happening across Alpine Digital School.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-400">
                      {item.label}
                    </p>

                    <h3 className="mt-3 text-2xl font-black">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* ====================================================== */}
        {/* Closing Section */}
        {/* ====================================================== */}

        <RevealOnScroll delay={0.55}>
          <div className="mx-auto mt-24 max-w-5xl text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-6 py-3 shadow-sm">
              <Sparkles className="h-5 w-5 text-yellow-500" />

              <span className="text-sm font-semibold text-slate-700">
                Official notices are updated regularly for the entire school
                community.
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-black text-[#071A33]">
              One Place for Every School Announcement
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              The Digital Notice Board serves as the central communication hub
              for parents, students, teachers, and staff. Check back regularly
              for examination schedules, admission updates, fee reminders,
              competitions, holiday notices, school events, and other important
              announcements.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="outline"
                className="rounded-2xl px-8 py-4 font-bold"
              >
                Contact Administration
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}