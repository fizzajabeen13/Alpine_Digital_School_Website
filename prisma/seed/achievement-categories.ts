import type { PrismaClient } from "../../generated/prisma/client";

export async function seedAchievementCategories(prisma: PrismaClient) {
  const categories = [
    "Academic",
    "Science",
    "STEM",
    "IT",
    "Robotics",
    "Artificial Intelligence",
    "Sports",
  ];

  for (const name of categories) {
    await prisma.achievementCategory.upsert({
      where: { slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-") },
      update: {},
      create: {
        name,
        slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      },
    });
  }
}