"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { supabase } from "@/lib/supabase-browser";
import { useLocale } from "@/lib/use-locale";

type Post = {
  id: string;
  title: string | null;
  excerpt: string | null;
  content: string | null;
  image_url: string | null;
  published: boolean | null;
  created_at: string | null;
  site_slug: string | null;
  slug: string | null;
  language: string | null;
};

const copy = {
  pl: {
    eyebrow: "Blog",
    title: "Dlaczego lokalne firmy nadal potrzebują własnej strony internetowej?",
    lead: "Krótkie wpisy pokazujące, jak własna strona pomaga budować markę, zwiększać zaufanie klientów i zdobywać ruch z Google niezależnie od social mediów.",
    empty: "Brak wpisów do wyświetlenia w polskiej wersji językowej.",
    loading: "Ładowanie wpisów...",
  },
  en: {
    eyebrow: "Blog",
    title: "Why local businesses still need their own website",
    lead: "Short articles showing how a website helps build trust, improve visibility and generate enquiries without relying only on social media.",
    empty: "No posts to display in the English version.",
    loading: "Loading posts...",
  },
};

function normalizeLanguage(language: string | null | undefined) {
  return String(language || "")
    .trim()
    .toLowerCase();
}

function formatDate(date: string | null, locale: "pl" | "en") {
  if (!date) return "";
  return new Intl.DateTimeFormat(locale === "pl" ? "pl-PL" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export default function BlogPage() {
  const locale = useLocale();
  const t = copy[locale];

  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function loadPosts() {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("posts")
        .select("id,title,excerpt,image_url,published,created_at,site_slug,slug,language")
        .eq("published", true)
        .or("site_slug.eq.luminso,site_slug.is.null")
        .order("created_at", { ascending: false });

      if (ignore) return;

      if (error) {
        setError(error.message);
        setPosts([]);
      } else {
        const visiblePosts = ((data || []) as Post[]).filter((post) => {
          return normalizeLanguage(post.language) === locale;
        });

        setPosts(visiblePosts);
      }

      setLoading(false);
    }

    loadPosts();

    return () => {
      ignore = true;
    };
  }, [locale]);

  return (
    <main className="min-h-screen bg-zinc-50 px-6 pb-20 pt-44 text-zinc-950 dark:bg-[#05070d] dark:text-white md:pt-48">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">
          {t.eyebrow}
        </p>

        <h1 className="mt-5 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
          {t.title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-700 dark:text-zinc-300">
          {t.lead}
        </p>

        {loading && (
          <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6 text-zinc-700 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.035] dark:text-zinc-300">
            {t.loading}
          </div>
        )}

        {error && (
          <div className="mt-10 rounded-3xl border border-red-500/40 bg-red-500/10 p-6 text-red-700 dark:text-red-300">
            Supabase error: {error}
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6 text-zinc-700 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.035] dark:text-zinc-300">
            {t.empty}
          </div>
        )}

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={post.slug ? `/blog/${encodeURIComponent(post.slug)}?lang=${locale}` : "#"}
              className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.035]"
            >
              {post.image_url && (
                <img
                  src={post.image_url}
                  alt={post.title || "Blog"}
                  className="aspect-[16/9] w-full object-cover"
                />
              )}

              <div className="p-8">
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-violet-600 dark:text-violet-400">
                  <span>{formatDate(post.created_at, locale)}</span>
                  {post.site_slug && (
                    <>
                      <span>•</span>
                      <span>{post.site_slug}</span>
                    </>
                  )}
                  {post.language && (
                    <>
                      <span>•</span>
                      <span>{post.language.toUpperCase()}</span>
                    </>
                  )}
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight">
                  {post.title || "Bez tytułu"}
                </h2>

                <p className="mt-6 leading-8 text-zinc-600 dark:text-zinc-400">
                  {post.excerpt || ""}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
