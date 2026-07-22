/* ==========================================================
   CONTACT HERO
========================================================== */

export const contactHero = {
  badge: "Get In Touch",

  title: "We're Here to Help You",

  description:
    "Have questions about admissions, academics, school life, or anything else? Our team is ready to assist you. Reach out through phone, WhatsApp, email, or visit our campus.",

  image: "/images/hero/contact_hero.webp",

  primaryButton: {
    label: "Send Inquiry",
    href: "#contact-form",
  },

  secondaryButton: {
    label: "WhatsApp Us",
    href: "#whatsapp",
  },
};

/* ==========================================================
   CONTACT DETAILS
========================================================== */

export const contactDetails = [
  {
    title: "Phone",
    value: "0333 6302249",
    href: "tel:+923336302249",
    icon: "Phone",
  },

  {
    title: "WhatsApp",
    value: "0333 6302249",
    href: "https://wa.me/+923336302249",
    icon: "MessageCircle",
  },

  {
    title: "Email",
    value: "alpineschoolhnd@gmail.com",
    href: "mailto:alpineschoolhnd@gmail.com",
    icon: "Mail",
  },

  {
    title: "Address",
    value: "Al-Fateh Town, 72/4R Road Near The Punjab College, Haroonabad, District Bahawalnagar",
    href: "https://maps.google.com",
    icon: "MapPin",
  },
];

/* ==========================================================
   OFFICE HOURS
========================================================== */

export const officeHours = [
  {
    day: "Monday",
    time: "8:00 AM – 2:00 PM",
  },
  {
    day: "Tuesday",
    time: "8:00 AM – 2:00 PM",
  },
  {
    day: "Wednesday",
    time: "8:00 AM – 2:00 PM",
  },
  {
    day: "Thursday",
    time: "8:00 AM – 2:00 PM",
  },
  {
    day: "Friday",
    time: "8:00 AM – 12:30 PM",
  },
  {
    day: "Saturday",
    time: "8:00 AM – 2:00 PM",
  },
  {
    day: "Sunday",
    time: "Closed",
  },
];

/* ==========================================================
   SOCIAL MEDIA
========================================================== */

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/alpineschoolofficial",
    icon: "Facebook",
  },

  {
    name: "Instagram",
    href: "https://www.instagram.com/school.alpine?utm_source=qr&igsh=MWZhYnpxNDV2MjYzdA%3D%3D",
    icon: "Instagram",
  },

  {
    name: "YouTube",
    href: "https://www.youtube.com/@thealpineschoolharoonabad1931",
    icon: "Youtube",
  },

  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alpine-school-hnd-486b4b422/",
    icon: "Linkedin",
  },
];

/* ==========================================================
   WHATSAPP SETTINGS
========================================================== */

const phone = "+923336302249";

const message =
  "Hello! I would like to inquire about admissions at Alpine Digital School.";

export const whatsappConfig = {
  phone,
  message,
  link: `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
};