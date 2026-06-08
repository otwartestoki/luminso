import { notFound } from "next/navigation";

import { supabase } from "@/lib/supabase";

type Locale = "pl" | "en";

type BlogPostParams = {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

function normalizeLanguage(language: string | null | undefined): string {
  return String(language || "")
    .trim()
    .toLowerCase();
}

function getLocale(language: string | null | undefined): Locale {
  return normalizeLanguage(language) === "en" ? "en" : "pl";
}

function formatDate(date: string | null, locale: Locale) {
  if (!date) return "";

  return new Intl.DateTimeFormat(locale === "pl" ? "pl-PL" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export default async function BlogPostPage({ params, searchParams }: BlogPostParams) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const locale = getLocale(resolvedSearchParams?.lang);

  const decodedSlug = decodeURIComponent(slug);

  const { data, error } = await supabase
    .from("posts")
    .select("id,title,excerpt,content,image_url,published,created_at,site_slug,slug,language")
    .eq("slug", decodedSlug)
    .eq("published", true)
    .or("site_slug.eq.luminso,site_slug.is.null")
    .order("created_at", { ascending: false });

  if (error || !data || data.length === 0) {
    notFound();
  }

  const posts = data.filter((post) => normalizeLanguage(post.language) === locale);
  const post = posts[0] || data[0];
  const postLocale = getLocale(post.language || locale);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 px-6 pb-20 pt-44 text-zinc-950 dark:bg-[#05070d] dark:text-white md:pt-48">
      <article className="mx-auto max-w-4xl">
        {post.image_url && (
          <img
            src={post.image_url}
            alt={post.title || "Blog post"}
            className="mb-10 aspect-[16/9] w-full rounded-3xl object-cover shadow-xl shadow-black/10 dark:shadow-black/40"
          />
        )}

        <div className="text-sm font-semibold text-violet-600 dark:text-violet-400">
          {formatDate(post.created_at, postLocale)}
          {post.language ? ` • ${String(post.language).toUpperCase()}` : ""}
        </div>

        <h1 className="mt-5 text-5xl font-black leading-tight tracking-tight md:text-7xl">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="mt-8 text-xl leading-9 text-zinc-700 dark:text-zinc-300">
            {post.excerpt}
          </p>
        )}

        <div
          className="prose prose-zinc mt-12 max-w-none dark:prose-invert prose-headings:font-black prose-p:leading-8 prose-a:text-violet-600 dark:prose-a:text-violet-300"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />
      </article>
    </main>
  );
}
