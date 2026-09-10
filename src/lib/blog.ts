import categoriesJson from "@/content/blog/categories.json";
import indexJson from "@/content/blog/index.json";

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  date: string | null;
  datePublished: string | null;
  readTime: string | null;
  author: string;
  image: string | null;
  imageAlt: string;
  featured: boolean;
};

export type BlogPost = Omit<BlogPostMeta, "featured"> & { body: string };

export type BlogCategory = { slug: string; name: string; count: number };

/** Matches the live site: 9 articles per listing page, featured post shown separately. */
export const POSTS_PER_PAGE = 9;

export const allPosts = indexJson as BlogPostMeta[];
export const categories = categoriesJson as BlogCategory[];

export const featuredPost = allPosts.find((p) => p.featured) ?? allPosts[0];

const listedPosts = allPosts.filter((p) => p.slug !== featuredPost.slug);

export const totalPages = Math.max(1, Math.ceil(listedPosts.length / POSTS_PER_PAGE));

export function getPage(page: number) {
  const start = (page - 1) * POSTS_PER_PAGE;
  return listedPosts.slice(start, start + POSTS_PER_PAGE);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug) ?? null;
}

export function getPostsByCategory(slug: string) {
  return allPosts.filter((p) => p.categorySlug === slug);
}

export function getPostMeta(slug: string) {
  return allPosts.find((p) => p.slug === slug) ?? null;
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  if (!getPostMeta(slug)) return null;
  const mod = await import(`@/content/blog/posts/${slug}.json`);
  return (mod.default ?? mod) as BlogPost;
}

export function getRelatedPosts(post: BlogPostMeta, limit = 3) {
  return allPosts
    .filter((p) => p.slug !== post.slug && p.categorySlug === post.categorySlug)
    .slice(0, limit);
}

export const popularPosts = allPosts.filter((p) => !p.featured).slice(0, 3);

export const blogHero = {
  eyebrow: "Expert Insights",
  titleTop: "Dental Blog",
  titleBottom: "Tips, Guides & Expert Advice",
  lead:
    "Stay informed with the latest in cosmetic dentistry, oral health tips, and treatment guides from our experienced team at Teeth Whitening London.",
} as const;

/** Wording transcribed from the live post template. */
export const postDisclaimer =
  "This article is for general educational purposes only and is not personalised dental advice. Suitability, risks, and outcomes vary by patient. Teeth whitening is not suitable for under-18s, and no specific result is guaranteed. Always consult a GDC-registered dental professional after a clinical examination. Care Quality Commission (CQC) registration details for our clinics are available on this website.";

export const postCta = {
  title: "Ready to Transform Your Smile?",
  text: "Book your appointment today to discuss treatment options suitable for your smile goals.",
  button: "Book Now",
} as const;

/** Live posts show a review date one year after publication. */
export function nextReviewDue(datePublished: string | null) {
  if (!datePublished) return null;
  const d = new Date(datePublished);
  if (Number.isNaN(d.getTime())) return null;
  d.setFullYear(d.getFullYear() + 1);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
