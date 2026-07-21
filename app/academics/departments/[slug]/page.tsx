import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DepartmentDetail from "@/components/academics/DepartmentDetail";
import { departmentsData } from "@/lib/constants/academics";

type DepartmentPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return departmentsData.map((department) => ({
    slug: department.slug,
  }));
}

export async function generateMetadata({
  params,
}: DepartmentPageProps): Promise<Metadata> {
  const { slug } = await params;

  const department = departmentsData.find((item) => item.slug === slug);

  if (!department) {
    return {
      title: "Department Not Found",
    };
  }

  return {
    title: department.title,
    description: department.overview,
  };
}

export default async function DepartmentPage({ params }: DepartmentPageProps) {
  const { slug } = await params;

  const department = departmentsData.find((item) => item.slug === slug);

  if (!department) {
    notFound();
  }

  const safeDepartment = {
    ...department,
    icon: undefined,
  };

  return (
    <main>
      <DepartmentDetail department={safeDepartment} />
    </main>
  );
}