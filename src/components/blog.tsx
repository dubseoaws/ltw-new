import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";
import { Eyebrow } from "@/components/ui";
import {
  categories,
  popularPosts,
  type BlogPostMeta,
} from "@/lib/blog";
import { bookUrl } from "@/lib/site";

const FALLBACK_IMAGE = "/images/blog/placeholder.svg";

export function PostImage({
  post,
  sizes,
  priority,
  className = "object-cover",
}: {
  post: Pick<BlogPostMeta, "image" | "imageAlt">;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={post.image ?? FALLBACK_IMAGE}
      alt={post.imageAlt}
      fill
      sizes={sizes}
      priority={priority}
      unoptimized={!post.image || post.image.startsWith("/")}
      className={className}
    />
  );
}

export function BlogHeroBanner({ caption }: { caption?: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
      <div className="relative aspect-16/9 sm:aspect-[16/7]">
        <Image
          src="/images/TWL-inner-banner.jpg"
          alt="Dental Blog — Expert Advice from Teeth Whitening London"
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
      </div>
      {caption ? (
        <p className="absolute inset-x-0 bottom-0 p-5 text-sm font-semibold text-white">
          {caption}
        </p>
      ) : null}
    </div>
  );
}

export function PostMeta({ post }: { post: BlogPostMeta }) {  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-slate-500">
      <Link
        href={`/blog/category/${post.categorySlug}`}
        className="uppercase tracking-wider text-teal-700 hover:text-teal-800"
      >
        {post.category}
      </Link>
      {post.date ? <span>{post.date}</span> : null}
      {post.readTime ? <span>{post.readTime}</span> : null}
    </div>
  );
}

export function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs transition hover:shadow-md">
      <Link href={`/blog/${post.slug}`} className="relative block aspect-16/9 overflow-hidden bg-slate-100">
        <PostImage
          post={post}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <PostMeta post={post} />
        <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-slate-900">
          <Link href={`/blog/${post.slug}`} className="hover:text-teal-800">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-auto inline-flex min-h-11 items-center pt-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}

export function FeaturedCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="grid">
        <Link href={`/blog/${post.slug}`} className="relative block aspect-[2/1] bg-slate-100">
          <PostImage post={post} sizes="(min-width: 1024px) 50vw, 100vw" priority />
        </Link>
        <div className="flex flex-col gap-3 p-6 lg:p-8">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-emerald-600 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white">
              Featured
            </span>
          </div>
          <PostMeta post={post} />
          <h2 className="font-display text-xl font-bold leading-snug tracking-normal text-slate-900 sm:text-2xl">
            <Link href={`/blog/${post.slug}`} className="hover:text-teal-800">
              {post.title}
            </Link>
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{post.excerpt}</p>
          <p className="text-xs font-semibold text-slate-500">By {post.author}</p>
          <div className="mt-2">
            <Button href={`/blog/${post.slug}`} tone="emerald" size="md">
              Read Article
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

export function BlogSidebar({ activeCategory }: { activeCategory?: string }) {
  return (
    <aside className="min-w-0 flex flex-col gap-8 self-start lg:border-l lg:border-slate-200 lg:pl-6">
      <div className="border-b border-slate-200 pb-6">
        <h3 className="font-display text-base font-bold text-slate-900">Categories</h3>
        <ul className="mt-3 flex flex-col gap-1">
          <li>
            <Link
              href="/blog"
              aria-current={!activeCategory ? "page" : undefined}
              className={`flex min-h-11 items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                activeCategory ? "text-slate-700 hover:bg-slate-50" : "bg-teal-50 text-teal-800"
              }`}
            >
              <span>All Posts</span>
              <span className="text-xs text-slate-500">
                {categories.reduce((n, c) => n + c.count, 0)}
              </span>
            </Link>
          </li>
          {categories.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/blog/category/${c.slug}`}
                aria-current={activeCategory === c.slug ? "page" : undefined}
                className={`flex min-h-11 items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  activeCategory === c.slug ? "bg-teal-50 text-teal-800" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span>{c.name}</span>
                <span className="text-xs text-slate-500">{c.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-900 p-6 text-center shadow-sm">
        <Eyebrow tone="light">Ready for a Brighter Smile?</Eyebrow>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Book your appointment today and discover the right treatment for your smile goals.
        </p>
        <div className="mt-4 flex justify-center">
          <Button href={bookUrl} tone="emerald" size="md">
            Book an Appointment
          </Button>
        </div>
      </div>

      <div className="border-t border-slate-200 pt-6">
        <h3 className="font-display text-base font-bold text-slate-900">Popular Articles</h3>
        <ol className="mt-3 flex flex-col gap-3">
          {popularPosts.map((p, i) => (
            <li key={p.slug} className="flex gap-3">
              <span className="font-display text-lg font-bold text-slate-300">{i + 1}</span>
              <Link
                href={`/blog/${p.slug}`}
                className="text-sm font-semibold leading-snug text-slate-700 hover:text-teal-800"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
}

export function Pagination({
  page,
  totalPages,
  basePath = "/blog",
}: {
  page: number;
  totalPages: number;
  basePath?: string;
}) {
  if (totalPages <= 1) return null;

  const href = (n: number) => (n === 1 ? basePath : `${basePath}/page/${n}`);
  const window = new Set([1, totalPages, page - 1, page, page + 1]);
  const numbers = [...window].filter((n) => n >= 1 && n <= totalPages).sort((a, b) => a - b);

  return (
    <nav className="mt-10 flex flex-wrap items-center justify-center gap-2" aria-label="Blog pagination">
      {page > 1 ? (
        <Link
          href={href(page - 1)}
          rel="prev"
          className="inline-flex min-h-11 items-center rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          ← Previous
        </Link>
      ) : null}

      {numbers.map((n, i) => (
        <span key={n} className="flex items-center gap-2">
          {i > 0 && n - numbers[i - 1] > 1 ? <span className="px-1 text-slate-400">…</span> : null}
          <Link
            href={href(n)}
            aria-current={n === page ? "page" : undefined}
            className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg px-3.5 py-2 text-sm font-semibold transition ${
              n === page
                ? "bg-slate-900 text-white"
                : "border border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            {n}
          </Link>
        </span>
      ))}

      {page < totalPages ? (
        <Link
          href={href(page + 1)}
          rel="next"
          className="inline-flex min-h-11 items-center rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Next →
        </Link>
      ) : null}
    </nav>
  );
}
