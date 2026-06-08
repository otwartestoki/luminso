"use client";

import Link from "next/link";

import { useLocale } from "@/lib/use-locale";

const copy = {
  pl: {
    eyebrow: "FAQ",
    title: "Najczęstsze pytania",
    lead: "Krótko i konkretnie o stronach, płatnościach, abonamencie i uruchomieniu.",
    cta: "Masz inne pytanie? Napisz do mnie",
    items: [
      ["Czy muszę płacić abonament?", "Nie. Strona może zostać wykonana w modelu jednorazowej płatności. Opieka miesięczna jest opcjonalna."],
      ["Czy pomagasz z domeną?", "Tak. Mogę pomóc w zakupie domeny, konfiguracji DNS i podpięciu strony."],
      ["Czy mogę dostarczyć własne zdjęcia?", "Tak. W tańszych pakietach zdjęcia dostarcza klient. W wyższych pakietach mogę pomóc je poprawić lub przygotować grafiki od podstaw."],
      ["Czy strona będzie działać na telefonie?", "Tak. Projekt jest responsywny i przygotowany pod telefon, tablet oraz komputer."],
      ["Czy mogę później zmieniać treści?", "Tak. Zmiany można zlecać pojedynczo albo skorzystać z opieki miesięcznej."],
    ],
  },
  en: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    lead: "Simple answers about websites, payment, subscriptions and launch.",
    cta: "Have another question? Contact me",
    items: [
      ["Do I need to pay a subscription?", "No. Your website can be built as a one-time project. Monthly care is optional."],
      ["Do you help with the domain?", "Yes. I can help with domain purchase, DNS setup and connecting the website."],
      ["Can I provide my own photos?", "Yes. In lower packages the client provides photos. In higher packages I can improve supplied visuals or create graphics from scratch."],
      ["Will the website work on mobile?", "Yes. The design is responsive and prepared for mobile, tablet and desktop."],
      ["Can I change content later?", "Yes. Updates can be ordered individually or handled through a monthly care package."],
    ],
  },
};

export default function FaqPage() {
  const locale = useLocale();
  const t = copy[locale];
  return (
    <main className="min-h-screen bg-zinc-50 px-6 pb-20 pt-44 text-zinc-950 dark:bg-[#05070d] dark:text-white md:pt-48">
      <section className="mx-auto max-w-4xl"><p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">{t.eyebrow}</p><h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">{t.title}</h1><p className="mt-8 text-xl leading-9 text-zinc-700 dark:text-zinc-300">{t.lead}</p><div className="mt-12 divide-y divide-zinc-200 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl shadow-black/5 dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.035]">{t.items.map(([q,a]) => <div key={q} className="p-7"><h2 className="text-xl font-black">{q}</h2><p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">{a}</p></div>)}</div><Link href="/#kontakt" className="mt-10 inline-flex rounded-xl bg-violet-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-violet-500">{t.cta}</Link></section>
    </main>
  );
}
