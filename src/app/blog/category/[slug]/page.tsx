import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogCard, BlogHeroBanner, BlogSidebar, Pagination } from "@/components/blog";
import { FaqSection, GoogleReviews, PageHero, SmileGalleryStrip } from "@/components/blocks";
import { Section, SectionHeading } from "@/components/ui";
import { categories, getCategory, getPostsByCategory, POSTS_PER_PAGE } from "@/lib/blog";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; page?: string }>;
}): Promise<Metadata> {
  const { slug, page } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.name} Articles`,
    description: `${category.name} articles, guides and expert advice from Teeth Whitening London.`,
    alternates: { canonical: `/blog/category/${category.slug}${page && page !== "1" ? `/page/${page}` : ""}` },
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ slug: string; page?: string }>;
}) {
  const { slug, page: pageParam } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const posts = getPostsByCategory(slug);
  const page = Number(pageParam ?? "1");
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  if (!Number.isInteger(page) || page < 1 || page > totalPages) notFound();
  const visiblePosts = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

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
          <div className="min-w-0">
            <div className="grid content-start gap-6 sm:grid-cols-2">
              {visiblePosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            <Pagination page={page} totalPages={totalPages} basePath={`/blog/category/${slug}`} />
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
