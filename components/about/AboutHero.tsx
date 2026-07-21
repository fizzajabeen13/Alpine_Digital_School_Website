import Image from "next/image";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import { aboutHero } from "@/lib/constants/about";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28 text-white">
      <Image
        src={aboutHero.image}
        alt={aboutHero.title}
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
                label: "About School",
              },
            ]}
          />
        </div>

        <div className="max-w-4xl">
          <Badge variant="secondary">{aboutHero.badge}</Badge>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
            {aboutHero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            {aboutHero.description}
          </p>
        </div>
      </Container>
    </section>
  );
}