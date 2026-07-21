import type { PrismaClient } from "../../generated/prisma/client";

export async function seedSettings(prisma: PrismaClient) {
  const settings = [
    ["school_name", "Alpine School"],
    ["school_tagline", "Excellence in Education"],
    ["school_email", "info@alpineschool.com"],
    ["school_phone", "+923336302249"],
    ["school_whatsapp", "+923336302249"],
    ["school_address", "School Address, City, Pakistan"],
    ["facebook_url", ""],
    ["instagram_url", ""],
    ["youtube_url", ""],
    ["linkedin_url", ""],
    ["admission_status", "open"],
  ];

  for (const [key, value] of settings) {
    await prisma.setting.upsert({
      where: { key },
      update: { value },
      create: {
        key,
        value,
      },
    });
  }
}