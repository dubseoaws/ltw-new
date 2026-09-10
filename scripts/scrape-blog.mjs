/**
 * Mirrors the live teethwhitening.london blog (posts, categories, images) into
 * this repo. Re-runnable: existing post JSON and downloaded images are skipped.
 *
 *   node scripts/scrape-blog.mjs            # incremental
 *   node scripts/scrape-blog.mjs --force    # re-fetch everything
 */
import { mkdir, writeFile, readFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ORIGIN = "https://www.teethwhitening.london";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const POSTS_DIR = path.join(ROOT, "src/content/blog/posts");
const DATA_DIR = path.join(ROOT, "src/content/blog");
const IMAGES_DIR = path.join(ROOT, "public/images/blog");
const CONCURRENCY = 6;
const FORCE = process.argv.includes("--force");

const exists = (p) => access(p).then(() => true, () => false);

async function get(url, tries = 4) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(url, { headers: { "user-agent": "ltw-content-migration" } });
      if (!res.ok) throw new Error(`${res.status} ${url}`);
      return res;
    } catch (err) {
      if (attempt >= tries) throw err;
      await new Promise((r) => setTimeout(r, 500 * attempt));
    }
  }
}

const getText = (url) => get(url).then((r) => r.text());

async function mapLimit(items, limit, fn) {
  const results = new Array(items.length);
  let cursor = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (cursor < items.length) {
        const i = cursor++;
        results[i] = await fn(items[i], i);
      }
    })
  );
  return results;
}

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(+d))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&rsquo;/g, "\u2019")
    .replace(/&lsquo;/g, "\u2018")
    .replace(/&ldquo;/g, "\u201c")
    .replace(/&rdquo;/g, "\u201d")
    .replace(/&mdash;/g, "\u2014")
    .replace(/&ndash;/g, "\u2013")
    .replace(/&pound;/g, "\u00a3");

const stripTags = (html) => decode(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/** Pulls the inner HTML of the element whose opening tag carries `class="cls"`. */
function extractByClass(html, cls, tag) {
  const open = new RegExp(`<${tag}[^>]*class="${cls}"[^>]*>`);
  const match = open.exec(html);
  if (!match) return null;
  let i = match.index + match[0].length;
  let depth = 1;
  const scan = new RegExp(`<${tag}\\b[^>]*>|</${tag}>`, "g");
  scan.lastIndex = i;
  let m;
  while ((m = scan.exec(html))) {
    depth += m[0].startsWith("</") ? -1 : 1;
    if (depth === 0) return html.slice(i, m.index);
  }
  return null;
}

/** Undoes the `/_next/image?url=...` wrapper the live site renders. */
function realImageUrl(src) {
  if (!src) return null;
  const decoded = decode(src);
  const wrapped = /\/_next\/image\?url=([^&]+)/.exec(decoded);
  const raw = wrapped ? decodeURIComponent(wrapped[1]) : decoded;
  return raw.startsWith("http") ? raw : new URL(raw, ORIGIN).href;
}

async function downloadImage(url, slug) {
  if (!url) return null;
  const base = path.basename(new URL(url).pathname).split("?")[0];
  const ext = (path.extname(base) || ".jpg").toLowerCase();
  const name = `${slug}${ext}`;
  const dest = path.join(IMAGES_DIR, name);
  const publicPath = `/images/blog/${name}`;
  if (!FORCE && (await exists(dest))) return publicPath;
  try {
    const res = await get(url);
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    return publicPath;
  } catch (err) {
    console.warn(`  ! image failed ${url}: ${err.message}`);
    return null;
  }
}

/* ------------------------------------------------------------------ listing */

async function collectSlugsInOrder() {
  const first = await getText(`${ORIGIN}/blog`);
  const totalPages = Math.max(
    1,
    ...[...first.matchAll(/\/blog\/page\/(\d+)/g)].map((m) => +m[1]),
    ...[...first.matchAll(/Page 1 of (\d+)/g)].map((m) => +m[1])
  );
  console.log(`Listing pages: ${totalPages}`);

  const pages = [first];
  const rest = await mapLimit(
    Array.from({ length: totalPages - 1 }, (_, i) => i + 2),
    CONCURRENCY,
    (n) => getText(`${ORIGIN}/blog/page/${n}`)
  );
  pages.push(...rest);

  const ordered = [];
  const seen = new Set();
  for (const html of pages) {
    for (const m of html.matchAll(/href="\/blog\/([a-z0-9][a-z0-9-]*)"/g)) {
      const slug = m[1];
      if (slug === "page" || slug === "category" || seen.has(slug)) continue;
      seen.add(slug);
      ordered.push(slug);
    }
  }
  const featured = /class="[^"]*featured[^"]*"[\s\S]{0,4000}?href="\/blog\/([a-z0-9-]+)"/.exec(first);
  return { slugs: ordered, featuredSlug: featured?.[1] ?? null };
}

async function collectCategories() {
  const html = await getText(`${ORIGIN}/blog`);
  const cats = [];
  for (const m of html.matchAll(
    /href="\/blog\/category\/([a-z0-9-]+)"[^>]*>([\s\S]{0,300}?)<\/a>/g
  )) {
    const slug = m[1];
    if (cats.some((c) => c.slug === slug)) continue;
    const text = stripTags(m[2]);
    const count = /(\d+)\s*$/.exec(text);
    cats.push({
      slug,
      name: text.replace(/\s*\d+\s*$/, "").trim(),
      count: count ? +count[1] : 0,
    });
  }
  return cats;
}

/* --------------------------------------------------------------------- post */

async function scrapePost(slug) {
  const file = path.join(POSTS_DIR, `${slug}.json`);
  if (!FORCE && (await exists(file))) return JSON.parse(await readFile(file, "utf8"));

  const html = await getText(`${ORIGIN}/blog/${slug}`);

  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((m) => {
      try {
        return JSON.parse(m[1]);
      } catch {
        return null;
      }
    })
    .find((d) => d && d["@type"] === "Article");

  const title =
    (/<h1[^>]*>([\s\S]*?)<\/h1>/.exec(html)?.[1] && stripTags(/<h1[^>]*>([\s\S]*?)<\/h1>/.exec(html)[1])) ||
    ld?.headline ||
    slug;

  const meta = extractByClass(html, "post-meta", "div") ?? "";
  const pick = (cls) => {
    const m = new RegExp(`<span class="${cls}">([\\s\\S]*?)</span>`).exec(meta);
    return m ? stripTags(m[1]) : null;
  };

  const description =
    ld?.description ??
    decode(/<meta name="description" content="([^"]*)"/.exec(html)?.[1] ?? "");

  let body = extractByClass(html, "post-body", "div");
  if (!body) throw new Error(`no post body for ${slug}`);

  // Pull inline images local too, rewriting their src to the public path.
  const inline = [...body.matchAll(/<img[^>]*\ssrc="([^"]+)"[^>]*>/g)];
  for (const [, src] of inline) {
    const real = realImageUrl(src);
    const local = await downloadImage(real, `${slug}-${slugify(path.basename(new URL(real).pathname))}`);
    if (local) body = body.split(src).join(local);
  }

  const heroSrc =
    ld?.image ??
    realImageUrl(/<img[^>]*data-nimg="fill"[^>]*\ssrc="([^"]+)"/.exec(html)?.[1] ?? "");
  const image = await downloadImage(realImageUrl(heroSrc), slug);

  const categoryName = pick("post-category") ?? "Teeth Whitening";
  const post = {
    slug,
    title,
    excerpt: description,
    category: categoryName,
    categorySlug: slugify(categoryName),
    date: pick("post-date"),
    datePublished: ld?.datePublished ?? null,
    readTime: pick("post-read-time"),
    author:
      stripTags(/<span class="author-name">([\s\S]*?)<\/span>/.exec(html)?.[1] ?? "") ||
      (typeof ld?.author === "object" ? ld.author.name : ld?.author) ||
      "Teeth Whitening Team",
    image,
    imageAlt: title,
    body: body.trim(),
  };

  await writeFile(file, JSON.stringify(post, null, 2) + "\n");
  return post;
}

/* --------------------------------------------------------------------- main */

async function main() {
  await mkdir(POSTS_DIR, { recursive: true });
  await mkdir(IMAGES_DIR, { recursive: true });

  const [{ slugs, featuredSlug }, categories] = await Promise.all([
    collectSlugsInOrder(),
    collectCategories(),
  ]);
  console.log(`Posts: ${slugs.length} | Categories: ${categories.length}`);

  let done = 0;
  const posts = await mapLimit(slugs, CONCURRENCY, async (slug) => {
    try {
      const post = await scrapePost(slug);
      if (++done % 25 === 0) console.log(`  ${done}/${slugs.length}`);
      return post;
    } catch (err) {
      console.warn(`  ! ${slug}: ${err.message}`);
      return null;
    }
  });

  const ok = posts.filter(Boolean);
  const index = ok.map(({ body, ...rest }) => ({
    ...rest,
    featured: rest.slug === featuredSlug,
  }));

  // Category order/labels come from the live sidebar; counts recomputed locally.
  const cats = categories.map((c) => ({
    ...c,
    count: index.filter((p) => p.categorySlug === c.slug).length || c.count,
  }));

  await writeFile(path.join(DATA_DIR, "index.json"), JSON.stringify(index, null, 2) + "\n");
  await writeFile(path.join(DATA_DIR, "categories.json"), JSON.stringify(cats, null, 2) + "\n");

  console.log(`\nSaved ${ok.length} posts (${slugs.length - ok.length} failed).`);
  for (const c of cats) console.log(`  ${c.name} (${c.slug}): ${c.count}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
