import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

type FacultyCardProps = {
  name: string;
  designation: string;
  qualification: string;
  experience?: string;
  subjects?: string[];
  image?: string;
  department?: string;
  isLeadership?: boolean;
  email?: string;
  description?: string;
};

export default function FacultyCard({
  name,
  designation,
  qualification,
  experience,
  subjects = [],
  image = "/images/faculty/placeholder.jpg",
  department,
  isLeadership = false,
  email,
  description,
}: FacultyCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-[360px] w-full overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />

        {isLeadership && (
          <div className="absolute left-4 top-4 z-10">
            <Badge variant="secondary">Leadership</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">

        {department && (
          <div className="mb-4">
            <Badge variant="info">{department}</Badge>
          </div>
        )}

        <h3 className="text-2xl font-bold text-slate-900">
          {name}
        </h3>

        <p className="mt-2 text-lg font-semibold text-blue-900">
          {designation}
        </p>

        <p className="mt-4 text-slate-600">
          {qualification}
        </p>

        {experience && (
          <p className="mt-2 text-slate-700">
            <span className="font-semibold">Experience:</span> {experience}
          </p>
        )}

        {email && (
  <p className="mt-3 text-sm text-blue-700 break-all">
    <span className="font-semibold">Email:</span>{" "}
    <a
      href={`mailto:${email}`}
      className="hover:underline"
    >
      {email}
    </a>
  </p>
)}

{description && (
  <p className="mt-4 text-sm leading-7 text-slate-600">
    {description}
  </p>
)}

        {/* Fixed space for subjects */}
        <div className="mt-5 min-h-[56px]">
          {subjects.length > 0 && (
            <>
              <p className="mb-2 font-semibold text-slate-800">
                Subjects
              </p>

              <div className="flex flex-wrap gap-2">
                {subjects.map((subject) => (
                  <span
                    key={subject}
                    className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
        
        <div className="mt-auto"></div>

      </div>
    </Card>
  );
}