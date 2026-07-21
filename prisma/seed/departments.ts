import type { PrismaClient } from "../../generated/prisma/client";

export async function seedDepartments(prisma: PrismaClient) {
  const departments = [
    "Science",
    "Mathematics",
    "English",
    "Urdu",
    "Computer Science",
    "AI & ML",
    "STEM",
    "Robotics",
    "Spoken English",
  ];

  for (const name of departments) {
    await prisma.department.upsert({
      where: { slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-") },
      update: {},
      create: {
        name,
        slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      },
    });
  }
}