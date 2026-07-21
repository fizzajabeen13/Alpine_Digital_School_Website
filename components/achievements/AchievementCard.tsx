import Image from "next/image";
import { Award, GraduationCap, Sparkles } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

type AchievementCardProps = {
  studentName: string;
  className: string;
  title: string;
  description: string;
  image?: string;
  category?: string;
};

export default function AchievementCard({
  studentName,
  className,
  title,
  description,
  image = "/images/gallery/placeholder.jpg",
  category = "Achievement",
}: AchievementCardProps) {
  return (
    <Card className="group premium-hover overflow-hidden rounded-[2rem] p-0">
      {/* Image */}

      <div className="relative h-64 overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        <div className="absolute left-5 top-5">
          <Badge variant="secondary">{category}</Badge>
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="text-2xl font-black leading-tight text-white">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}

      <div className="p-7">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
            <GraduationCap size={22} />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Student
            </p>

            <h4 className="font-black text-slate-900">
              {studentName}
            </h4>

            <p className="text-sm font-semibold text-blue-950">
              {className}
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm leading-7 text-slate-600">
          {description}
        </p>

        {/* Recognition */}

        <div className="mt-8 rounded-2xl border border-yellow-200 bg-gradient-to-r from-yellow-50 to-white p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500 text-white">
              <Award size={20} />
            </div>

            <div>
              <h5 className="font-black text-slate-900">
                Official Recognition
              </h5>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Recognized by Alpine Digital School for outstanding academic
                performance, dedication, and excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5">
          <div className="flex items-center gap-2 text-yellow-600">
            <Sparkles size={18} />

            <span className="text-sm font-bold">
              Excellence Award
            </span>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Alpine School
          </span>
        </div>
      </div>
    </Card>
  );
}