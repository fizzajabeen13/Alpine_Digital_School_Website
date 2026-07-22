/* ==========================================================
   NOTICE HERO
========================================================== */

export const noticesHero = {
  badge: "School Notice Board",

  title: "Latest Notices & Announcements",

  description:
    "Stay informed with the latest school notices, holiday announcements, examination schedules, fee updates, and important announcements.",

  image: "/images/hero/notice_board_hero.webp",

  primaryButton: {
    label: "View Notices",
    href: "#notice-board",
  },

  secondaryButton: {
    label: "Urgent Notices",
    href: "#urgent",
  },
};

/* ==========================================================
   NOTICE CATEGORIES
========================================================== */

export const noticeCategories = [
  "All",
  "Event",
  "Holiday",
  "Examination",
  "Fee",
  "Urgent",
];

/* ==========================================================
   Event NOTICES
========================================================== */

export const eventNotices = [
  {
    id: 1,
    category: "Event",
    title: "AI Exhibition",
    description:
      "Alpine Digital School is organizing an AI Exhibition to showcase innovative student projects, interactive technology demonstrations, and emerging artificial intelligence concepts. Students, parents, and visitors are invited to explore creative exhibits that highlight problem-solving, digital innovation, and future-ready learning.",
    date: "Coming Soon",
    priority: "High",
  },

  {
    id: 2,
    category: "Event",
    title: "Sports Gala",
    description:
      "The Annual Sports Gala will feature exciting athletic competitions, team events, and recreational activities designed to promote teamwork, discipline, leadership, and physical fitness. Students are encouraged to participate enthusiastically while demonstrating fair play, determination, and true sportsmanship throughout the event.",
    date: "October, 2026",
    priority: "Low",
  },

    {
    id: 3,
    category: "Event",
    title: "Educational Tour",
    description:
      "Students will participate in an educational tour designed to provide practical learning experiences beyond the classroom. The visit will encourage exploration, critical thinking, and a deeper understanding of academic concepts through real-world exposure, guided activities, and interactive sessions.",
    date: "December, 2026",
    priority: "Low",
  },
];


/* ==========================================================
   HOLIDAY NOTICES
========================================================== */

export const holidayNotices = [
  {
    id: 4,
    category: "Holiday",
    title: "Summer Vacation",
    description:
      "The school will remain closed for the annual summer vacation from July 1 to August 15. During this period, students are encouraged to complete their holiday assignments, continue reading, and engage in productive learning activities. Classes will resume according to the academic calendar.",
    date: "July 1, 2026",
    priority: "Medium",
  },

  {
    id: 5,
    category: "Holiday",
    title: "Independence Day Holiday",
    description:
      "The school will remain closed on 14th August in observance of Pakistan's Independence Day. Students and families are encouraged to celebrate this important national occasion with pride while reflecting on the values of unity, freedom, and patriotism.",
    date: "August 14, 2026",
    priority: "Low",
  },
];

/* ==========================================================
   EXAM SCHEDULE NOTICES
========================================================== */

export const examNotices = [
  {
    id: 6,
    category: "Examination",
    title: "Mid-Term Examination Schedule",
    description:
      "The Mid-Term Examination schedule has been officially released. Students are advised to review the timetable carefully, complete their syllabus on time, and attend all examinations as scheduled. Parents are requested to support students in maintaining consistent preparation and regular attendance.",
    date: "September, 2026",
    priority: "High",
  },
];

/* ==========================================================
   FEE NOTICES
========================================================== */

export const feeNotices = [
  {
    id: 7,
    category: "Fee",
    title: "Monthly Fee Submission",
    description:
      "Parents and guardians are requested to submit the monthly tuition fee before the due date to ensure uninterrupted academic services. Timely fee payment helps maintain smooth administrative operations and avoids the application of late payment charges.",
    date: "Every Month",
    priority: "Medium",
  },

  {
    id: 8,
    category: "Fee",
    title: "Admission Fee Reminder",
    description:
      "Students seeking admission are reminded to complete the admission fee payment within the specified deadline. Enrollment will be confirmed only after all required documents have been verified and the admission fee has been successfully received by the school administration.",
    date: "Ongoing",
    priority: "High",
  },
];

/* ==========================================================
   URGENT ANNOUNCEMENTS
========================================================== */

export const urgentAnnouncements = [
  {
    id: 9,
    category: "Urgent",
    title: "Parent-Teacher Meeting",
    description:
      "A Parent-Teacher Meeting will be held shortly after the First Term Examinations to discuss students' academic progress, classroom performance, attendance, behavior, and future learning goals. Parents are strongly encouraged to attend and collaborate with teachers to support their child's continued success.",
    date: "Coming Soon",
    priority: "High",
    attachment: null,
  },
];

/* ==========================================================
   ALL NOTICES
========================================================== */

export const notices = [
  ...eventNotices,
  ...holidayNotices,
  ...examNotices,
  ...feeNotices,
  ...urgentAnnouncements,
];