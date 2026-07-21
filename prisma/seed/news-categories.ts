import type { PrismaClient } from "../../generated/prisma/client";

export async function seedNewsCategories(prisma: PrismaClient) {
  const categories = [
    "School News",
    "Admissions",
    "Events",
    "Achievements",
    "Announcements",
  ];

  for (const name of categories) {
    await prisma.newsCategory.upsert({
      where: { slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-") },
      update: {},
      create: {
        name,
        slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      },
    });
  }
}