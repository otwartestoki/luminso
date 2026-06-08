"use client";

import Link from "next/link";

import { useLocale } from "@/lib/use-locale";

const copy = {
  pl: {
    eyebrow: "Kontakt",
    title: "Opowiedz krótko, jakiej strony potrzebujesz.",
    lead: "Odpiszę z propozycją kierunku, zakresem i orientacyjną wyceną. Możesz też wysłać link do obecnej strony lub profilu firmy.",
    cards: [["Email", "kontakt@luminso.pl"], ["Facebook", "Luminso"], ["Instagram", "lumi.nso"]],
    cta: "Napisz wiadomość",
    note: "Najlepiej napisz: branża, miasto, obecna strona/profil, liczba podstron i czego oczekujesz od nowej strony.",
  },
  en: {
    eyebrow: "Contact",
    title: "Tell us briefly what kind of website you need.",
    lead: "You will receive a suggested direction, scope and approximate quote. You can also send a link to your current website or business profile.",
    cards: [["Email", "kontakt@luminso.pl"], ["Facebook", "Luminso"], ["Instagram", "lumi.nso"]],
    cta: "Send a message",
    note: "The best message includes: industry, city, current website/profile, expected number of pages and what you want the new website to achieve.",
  },
};

export default function ContactPage() {
  const locale = useLocale();
  const t = copy[locale];
  return (
    <main className="min-h-screen bg-zinc-50 px-6 pb-20 pt-44 text-zinc-950 dark:bg-[#05070d] dark:text-white md:pt-48">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">{t.eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-7xl">{t.title}</h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-700 dark:text-zinc-300">{t.lead}</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.cards.map(([title, value]) => <div key={title} className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.035]"><h2 className="text-xl font-black">{title}</h2><p className="mt-4 text-zinc-600 dark:text-zinc-400">{value}</p></div>)}
        </div>
        <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.035]"><p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">{t.note}</p><Link href="mailto:kontakt@luminso.pl" className="mt-8 inline-flex rounded-xl bg-violet-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-violet-500">{t.cta}</Link></div>
      </section>
    </main>
  );
}
