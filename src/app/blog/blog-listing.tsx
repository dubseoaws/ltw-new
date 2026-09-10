import {
  FeaturedCard,
  BlogCard,
  BlogHeroBanner,
  BlogSidebar,
  Pagination,
} from "@/components/blog";
import { FaqSection, GoogleReviews, PageHero, SmileGalleryStrip } from "@/components/blocks";
import { Section, SectionHeading } from "@/components/ui";
import { blogHero, featuredPost, getPage, totalPages, allPosts } from "@/lib/blog";

export default function BlogListing({ page }: { page: number }) {
  const posts = getPage(page);

  return (
    <>
      <PageHero
        eyebrow={blogHero.eyebrow}
        titleTop={blogHero.titleTop}
        titleBottom={blogHero.titleBottom}
        lead={blogHero.lead}
      >
        {page === 1 ? (
          <FeaturedCard post={featuredPost} />
        ) : (
          <BlogHeroBanner caption={`Page ${page} of ${totalPages}`} />
        )}
      </PageHero>

      <Section className="bg-white">
        <SectionHeading
          eyebrow="Blog"
          title="Latest Articles"
          sub={`Page ${page} of ${totalPages} · ${allPosts.length} articles`}
          align="left"
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            <Pagination page={page} totalPages={totalPages} />
          </div>

          <BlogSidebar />
        </div>
      </Section>

      <SmileGalleryStrip />

      <GoogleReviews className="bg-white" />

      <FaqSection className="bg-slate-50 border-y border-slate-200" />
    </>
  );
}
