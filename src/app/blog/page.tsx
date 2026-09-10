import type { Metadata } from "next";
import BlogListing from "./blog-listing";
import { blogHero } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Dental Blog — Tips, Guides & Expert Advice",
  description: blogHero.lead,
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogListing page={1} />;
}
