import Image from "next/image";
import Card from "@/components/ui/Card";

type GalleryCardProps = {
  title: string;
  image: string;
  count?: number;
  description?: string;
};

export default function GalleryCard({
  title,
  image,
  count,
  description,
}: GalleryCardProps) {
  return (
    <Card className="group overflow-hidden p-0">
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {typeof count === "number" && (
          <div className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow">
            {count} Photos
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-extrabold text-slate-950">{title}</h3>

        {description && (
          <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
        )}
      </div>
    </Card>
  );
}