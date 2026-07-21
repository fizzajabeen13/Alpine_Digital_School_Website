import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

type NewsCardProps = {
  title: string;
  excerpt?: string;
  image?: string;
  date?: string;
  category?: string;
  href?: string;
};

export default function NewsCard({
  title,
  excerpt,
  image = "/images/news/placeholder.jpg",
  date,
  category = "News",
  href = "#",
}: NewsCardProps) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="relative h-56 bg-slate-100">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <Badge variant="info">{category}</Badge>

        <h3 className="mt-4 text-xl font-extrabold text-slate-950">
          <Link href={href} className="hover:text-blue-950">
            {title}
          </Link>
        </h3>

        {date && (
          <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
            <Calendar size={16} />
            {date}
          </p>
        )}

        {excerpt && (
          <p className="mt-3 text-sm leading-6 text-slate-600">{excerpt}</p>
        )}
      </div>
    </Card>
  );
}