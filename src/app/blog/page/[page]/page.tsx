import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogListing from "../../blog-listing";
import { totalPages } from "@/lib/blog";

export function generateStaticParams() {
  return Array.from({ length: totalPages - 1 }, (_, i) => ({ page: String(i + 2) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `Dental Blog — Page ${page}`,
    description:
      "Tips, guides and expert advice on teeth whitening and cosmetic dentistry from Teeth Whitening London.",
    alternates: { canonical: `/blog/page/${page}` },
  };
}

export default async function BlogPagedPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const n = Number(page);
  if (!Number.isInteger(n) || n < 2 || n > totalPages) notFound();

  return <BlogListing page={n} />;
}
