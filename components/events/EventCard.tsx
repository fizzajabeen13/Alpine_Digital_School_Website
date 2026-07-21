import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

type EventCardProps = {
  title: string;
  description?: string;
  image?: string;
  date: string;
  location?: string;
  href?: string;
  isFeatured?: boolean;
  type?: string;
};

export default function EventCard({
  title,
  description,
  image = "/images/events/placeholder.jpg",
  date,
  location,
  href = "#",
  isFeatured = false,
  type,
}: EventCardProps) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="relative h-56 bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        {(isFeatured || type) && (
          <div className="absolute left-4 top-4 flex gap-2">
            {isFeatured && (
              <Badge variant="secondary">
                Featured
              </Badge>
            )}

            {type && (
              <Badge variant="primary">
                {type}
              </Badge>
            )}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-extrabold text-slate-950">
          <Link
            href={href}
            className="transition-colors hover:text-blue-950"
          >
            {title}
          </Link>
        </h3>

        <div className="mt-3 space-y-2">
          <p className="flex items-center gap-2 text-sm text-slate-500">
            <CalendarDays size={16} />
            <span>{date}</span>
          </p>

          {location && (
            <p className="flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={16} />
              <span>{location}</span>
            </p>
          )}
        </div>

        {description && (
          <p className="mt-4 text-sm leading-6 text-slate-600">
            {description}
          </p>
        )}
      </div>
    </Card>
  );
}