import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

import { seedAdmin } from "./seed/admin";
import { seedDepartments } from "./seed/departments";
import { seedAchievementCategories } from "./seed/achievement-categories";
import { seedNewsCategories } from "./seed/news-categories";
import { seedSettings } from "./seed/settings";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding started...");

  await seedAdmin(prisma);
  console.log("✅ Admin seeded");

  await seedDepartments(prisma);
  console.log("✅ Departments seeded");

  await seedAchievementCategories(prisma);
  console.log("✅ Achievement categories seeded");

  await seedNewsCategories(prisma);
  console.log("✅ News categories seeded");

  await seedSettings(prisma);
  console.log("✅ Settings seeded");

  console.log("🎉 Seeding completed successfully");
}

main()
  .catch((error) => {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });