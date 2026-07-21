import Image from "next/image";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { facultyHero } from "@/lib/constants/faculty";

export default function FacultyHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28 text-white">
      <Image
        src={facultyHero.image}
        alt={facultyHero.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-slate-950/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent" />

      <Container className="relative">
        <div className="mb-10">
          <Breadcrumb items={[{ label: "Faculty" }]} />
        </div>

        <div className="max-w-4xl">
          <Badge variant="secondary">{facultyHero.badge}</Badge>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
            {facultyHero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            {facultyHero.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/academics" size="lg">
              Explore Academics
            </Button>

            <Button href="/contact" variant="outline" size="lg">
              Contact School
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}