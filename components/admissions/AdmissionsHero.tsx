import Image from "next/image";

import Breadcrumb from "@/components/shared/Breadcrumb";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import { admissionsHero } from "@/lib/constants/admissions";

export default function AdmissionsHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28 text-white">
      <Image
        src={admissionsHero.image}
        alt={admissionsHero.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-slate-950/50" />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent" />

      <Container className="relative">
        <div className="mb-10">
          <Breadcrumb
            items={[
              {
                label: "Admissions",
              },
            ]}
          />
        </div>

        <div className="max-w-4xl">
          <Badge variant="secondary">
            {admissionsHero.badge}
          </Badge>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
            {admissionsHero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            {admissionsHero.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              href={admissionsHero.primaryButton.href}
              size="lg"
            >
              {admissionsHero.primaryButton.label}
            </Button>

            <Button
              href={admissionsHero.secondaryButton.href}
              variant="outline"
              size="lg"
            >
              {admissionsHero.secondaryButton.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}