import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/button";
import { BlogSidebar, PostImage } from "@/components/blog";
import { FaqSection, GoogleReviews, SmileGalleryStrip } from "@/components/blocks";
import { Section } from "@/components/ui";
import {
  allPosts,
  getPost,
  getPostMeta,
  getRelatedPosts,
  nextReviewDue,
  postCta,
  postDisclaimer,
} from "@/lib/blog";
import { bookUrl, site } from "@/lib/site";

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostMeta(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.datePublished ?? undefined,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  const post = await getPost(slug);
  if (!meta || !post) notFound();

  const related = getRelatedPosts(meta);
  const reviewDue = nextReviewDue(post.datePublished);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `${site.url}${post.image}` : undefined,
    datePublished: post.datePublished ?? undefined,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="relative isolate overflow-hidden bg-slate-900 py-16 lg:py-24">
        <div className="absolute inset-0 -z-10 opacity-35">
          <PostImage post={meta} sizes="100vw" priority />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/80 via-slate-900/85 to-slate-900" />

        <div className="container-x">
          <Link href="/blog" className="text-sm font-semibold text-slate-300 hover:text-white">
            ← Back to Blog
          </Link>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-slate-300">
            <Link
              href={`/blog/category/${post.categorySlug}`}
              className="uppercase tracking-wider text-emerald-400 hover:text-emerald-300"
            >
              {post.category}
            </Link>
            {post.date ? <span>{post.date}</span> : null}
            {post.readTime ? <span>{post.readTime}</span> : null}
          </div>

          <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            {post.title}
          </h1>

          <p className="mt-5 text-sm font-semibold text-slate-300">By {post.author}</p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="min-w-0">
            <div
              className="post-body max-w-[70ch]"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />

            <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-600">
              <strong className="font-semibold text-slate-900">Disclaimer:</strong>{" "}
              {postDisclaimer}
            </div>

            <div className="mt-6 flex flex-wrap gap-6 border-y border-slate-200 px-1 py-4 text-sm text-slate-600">
              {post.date ? (
                <p>
                  <span className="font-semibold text-slate-900">Published:</span> {post.date}
                </p>
              ) : null}
              {reviewDue ? (
                <p>
                  <span className="font-semibold text-slate-900">Next Review Due:</span> {reviewDue}
                </p>
              ) : null}
            </div>

            <div className="mt-10 border-y border-slate-200 bg-slate-900 px-5 py-8 text-center sm:px-8">
              <h2 className="font-display text-2xl font-bold tracking-tight text-white">
                {postCta.title}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
                {postCta.text}
              </p>
              <div className="mt-5 flex justify-center">
                <Button href={bookUrl} tone="emerald" size="md">
                  {postCta.button}
                </Button>
              </div>
            </div>

            {related.length ? (
              <div className="mt-12">
                <h2 className="font-display text-xl font-bold tracking-tight text-slate-900">
                  Related Articles
                </h2>
                <div className="mt-5 grid gap-5 sm:grid-cols-3">
                  {related.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs transition hover:shadow-md"
                    >
                      <span className="relative block aspect-16/9 overflow-hidden bg-slate-100">
                        <PostImage
                          post={p}
                          sizes="(min-width: 640px) 25vw, 100vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </span>
                      <span className="flex flex-col gap-1.5 p-4">
                        <span className="text-[0.65rem] font-bold uppercase tracking-wider text-teal-700">
                          {p.category}
                        </span>
                        <span className="text-sm font-semibold leading-snug text-slate-900 group-hover:text-teal-800">
                          {p.title}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </article>

          <BlogSidebar activeCategory={post.categorySlug} />
        </div>
      </Section>

      <SmileGalleryStrip />

      <GoogleReviews className="bg-white" />

      <FaqSection className="bg-slate-50 border-y border-slate-200" />
    </>
  );
}
