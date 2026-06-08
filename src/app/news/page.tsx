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
    eyebrow: "News",
    title: "Wiedza, która przekłada się na wyniki",
    lead: "Praktyczne wskazówki, strategie i porady, które pomagają zrozumieć, dlaczego własna strona to dobra inwestycja dla lokalnego biznesu.",
    ctaTitle: "Gotowy na stronę, która przyciąga klientów?",
    ctaText: "Zamów profesjonalną stronę internetową i zacznij budować lepszy wizerunek online.",
    cta: "Zamów stronę",
    empty: "Brak wpisów do wyświetlenia w polskiej wersji językowej.",
    loading: "Ładowanie wpisów...",
  },
  en: {
    eyebrow: "News",
    title: "Practical insights that support business results",
    lead: "Short, useful articles about websites, local visibility, trust and customer acquisition for small businesses.",
    ctaTitle: "Ready for a website that helps customers choose you?",
    ctaText: "Order a professional website and start building a stronger online presence.",
    cta: "Order a website",
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

export default function NewsPage() {
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
    <main className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-[#05070d] dark:text-white">
      <section className="border-b border-zinc-200 px-6 pb-16 pt-44 dark:border-white/10 md:pt-48">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">
              {t.eyebrow}
            </p>

            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight md:text-7xl">
              {t.title}
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-700 dark:text-white/65">
              {t.lead}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src="/news-hero.jpg"
              alt="Luminso news"
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-zinc-50/10 dark:to-[#07090d]/10" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        {loading && (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-700 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.035] dark:text-white/70">
            {t.loading}
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-500/40 bg-red-500/10 p-6 text-red-700 dark:text-red-200">
            Supabase error: {error}
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-700 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.035] dark:text-white/70">
            {t.empty}
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={post.slug ? `/blog/${encodeURIComponent(post.slug)}?lang=${locale}` : "#"}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl shadow-black/5 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/10 dark:border-white/10 dark:bg-white/[0.035] dark:shadow-black/30 dark:hover:shadow-black/40"
            >
              {post.image_url && (
                <img
                  src={post.image_url}
                  alt={post.title || "News"}
                  className="aspect-[16/9] w-full object-cover"
                />
              )}

              <div className="p-7 md:p-8">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-white/45">
                  {formatDate(post.created_at, locale)}
                  {post.language ? ` • ${post.language.toUpperCase()}` : ""}
                </p>

                <h2 className="mt-5 text-2xl font-black leading-snug md:text-3xl">
                  {post.title || "Bez tytułu"}
                </h2>

                <p className="mt-5 leading-8 text-zinc-600 dark:text-white/60">
                  {post.excerpt || ""}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.035] md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-black md:text-3xl">
              {t.ctaTitle}
            </h3>
            <p className="mt-3 text-zinc-600 dark:text-white/60">
              {t.ctaText}
            </p>
          </div>

          <Link
            href="/#kontakt"
            className="rounded-xl bg-violet-600 px-8 py-4 text-sm font-black text-white transition hover:bg-violet-500 dark:bg-violet-300 dark:text-black dark:hover:bg-violet-200"
          >
            {t.cta}
          </Link>
        </div>
      </section>
    </main>
  );
}
