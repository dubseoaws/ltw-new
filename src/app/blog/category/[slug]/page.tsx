import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogCard, BlogHeroBanner, BlogSidebar } from "@/components/blog";
import { FaqSection, GoogleReviews, PageHero, SmileGalleryStrip } from "@/components/blocks";
import { Section, SectionHeading } from "@/components/ui";
import { categories, getCategory, getPostsByCategory } from "@/lib/blog";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.name} Articles`,
    description: `${category.name} articles, guides and expert advice from Teeth Whitening London.`,
    alternates: { canonical: `/blog/category/${category.slug}` },
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const posts = getPostsByCategory(slug);

  return (
    <>
      <PageHero
        eyebrow="Category"
        titleTop="Dental Blog"
        titleBottom={category.name}
        lead={`${category.count} article${category.count === 1 ? "" : "s"} in ${category.name}.`}
      >
        <BlogHeroBanner caption={category.name} />
      </PageHero>

      <Section className="bg-white">
        <SectionHeading eyebrow="Articles" title={category.name} align="left" />

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <BlogSidebar activeCategory={category.slug} />
        </div>
      </Section>

      <SmileGalleryStrip />

      <GoogleReviews className="bg-white" />

      <FaqSection className="bg-slate-50 border-y border-slate-200" />
    </>
  );
}
