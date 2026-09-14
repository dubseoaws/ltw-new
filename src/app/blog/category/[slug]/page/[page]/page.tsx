import { categories, getPostsByCategory, POSTS_PER_PAGE } from "@/lib/blog";

export { default, generateMetadata } from "../../page";

export function generateStaticParams() {
  return categories.flatMap((category) => {
    const totalPages = Math.ceil(getPostsByCategory(category.slug).length / POSTS_PER_PAGE);
    return Array.from({ length: Math.max(0, totalPages - 1) }, (_, index) => ({
      slug: category.slug,
      page: String(index + 2),
    }));
  });
}