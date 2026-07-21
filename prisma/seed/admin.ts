import bcrypt from "bcryptjs";
import type { PrismaClient } from "../../generated/prisma/client";

export async function seedAdmin(prisma: PrismaClient) {
  const hashedPassword = await bcrypt.hash("admin12345", 10);

  await prisma.admin.upsert({
    where: { email: "admin@alpineschool.com" },
    update: {},
    create: {
      name: "Super Admin",
      email: "admin@alpineschool.com",
      password: hashedPassword,
      role: "SUPER_ADMIN",
    },
  });
}