"use client";

import Link from "next/link";

import { useLocale } from "@/lib/use-locale";

const copy = {
  pl: {
    eyebrow: "Cennik",
    title: "Strony internetowe dla lokalnych firm.",
    lead: "Wybierz pakiet dopasowany do wielkości firmy i potrzeb. Bez abonamentu jako obowiązku — opieka jest opcjonalna.",
    popular: "Najczęściej wybierany",
    websiteTitle: "Projekt strony",
    maintenanceTitle: "Opieka po publikacji",
    cta: "Zapytaj o wycenę",
    note: "Ceny są orientacyjne. Finalna wycena zależy od liczby sekcji, treści, zdjęć, integracji i terminu realizacji.",
    websitePackages: [
      { name: "Mini", price: "699 zł", items: ["gotowy układ strony", "1 podstrona lub landing page", "statyczne opinie klientów", "galeria podstawowa", "zdjęcia od klienta", "podstawowe SEO"] },
      { name: "Standard", price: "1290 zł", featured: true, items: ["bardziej dopasowany wygląd", "do 3 podstron", "opinie klientów z wizytówki Google", "rozbudowana galeria", "poprawa dostarczonych grafik", "SEO lokalne"] },
      { name: "Premium", price: "od 2490 zł", items: ["indywidualny projekt", "do 6 podstron", "dynamiczne opinie Google", "rozbudowane sekcje i animacje", "grafiki i zdjęcia od podstaw", "rozszerzone SEO"] },
    ],
    maintenancePackages: [
      { name: "Bez abonamentu", price: "0 zł / mies.", items: ["strona działa po publikacji", "brak stałych opłat", "zmiany na zlecenie"] },
      { name: "Opieka", price: "79 zł / mies.", items: ["wsparcie techniczne", "drobne aktualizacje", "pomoc z domeną"] },
      { name: "Opieka + widoczność", price: "199 zł / mies.", items: ["aktualności i promocje", "treści SEO", "raport popularności strony"] },
    ],
  },
  en: {
    eyebrow: "Pricing",
    title: "Modern websites for local businesses.",
    lead: "Choose a package that fits your business. No mandatory subscription — ongoing support is optional.",
    popular: "Most popular",
    websiteTitle: "Website project",
    maintenanceTitle: "After-launch support",
    cta: "Ask for a quote",
    note: "Prices are indicative. The final quote depends on the number of sections, content, images, integrations and delivery time.",
    websitePackages: [
      { name: "Starter", price: "490€", items: ["modern one-page website", "mobile-first layout", "customer reviews section", "basic gallery", "client-provided images", "basic SEO setup"] },
      { name: "Business", price: "890€", featured: true, items: ["customized visual style", "up to 3 pages", "Google reviews section", "service/gallery sections", "improved supplied visuals", "local SEO structure"] },
      { name: "Premium", price: "from 1490€", items: ["custom website design", "up to 6 pages", "advanced reviews section", "custom sections and animations", "graphics created from scratch", "extended SEO structure"] },
    ],
    maintenancePackages: [
      { name: "No subscription", price: "0€ / mo.", items: ["website stays live after launch", "no fixed monthly fee", "changes ordered when needed"] },
      { name: "Care", price: "49€ / mo.", items: ["technical support", "small content updates", "domain support"] },
      { name: "Care + visibility", price: "99€ / mo.", items: ["news and promotions", "SEO content updates", "basic website performance report"] },
    ],
  },
};

export default function PricingPage() {
  const locale = useLocale();
  const t = copy[locale];

  return (
    <main className="min-h-screen bg-zinc-50 px-6 pb-20 pt-44 text-zinc-950 dark:bg-[#05070d] dark:text-white md:pt-48">
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">{t.eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-7xl">{t.title}</h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-700 dark:text-zinc-300">{t.lead}</p>

        <div className="mt-12 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-black">{t.websiteTitle}</h2>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {t.websitePackages.map((pack) => (
            <div key={pack.name} className={`rounded-3xl border p-8 shadow-xl shadow-black/5 ${pack.featured ? "border-violet-500 bg-white dark:border-violet-400 dark:bg-white/[0.05]" : "border-zinc-200 bg-white dark:border-white/10 dark:bg-white/[0.035]"}`}>
              {pack.featured && <div className="mb-5 inline-flex rounded-full bg-violet-600 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">{t.popular}</div>}
              <h3 className="text-3xl font-black">{pack.name}</h3>
              <div className="mt-5 text-5xl font-black text-violet-600 dark:text-violet-400">{pack.price}</div>
              <div className="mt-8 grid gap-3">{pack.items.map((item) => <div key={item} className="flex gap-3 text-zinc-700 dark:text-zinc-300"><span className="text-violet-600 dark:text-violet-400">✓</span><span>{item}</span></div>)}</div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-black">{t.maintenanceTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {t.maintenancePackages.map((pack) => <div key={pack.name} className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.035]"><h3 className="text-2xl font-black">{pack.name}</h3><div className="mt-4 text-4xl font-black text-violet-600 dark:text-violet-400">{pack.price}</div><div className="mt-8 grid gap-3">{pack.items.map((item) => <div key={item} className="flex gap-3 text-zinc-700 dark:text-zinc-300"><span className="text-violet-600 dark:text-violet-400">✓</span><span>{item}</span></div>)}</div></div>)}
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-7 text-zinc-500 dark:text-zinc-400">{t.note}</p>
        <Link href="/#kontakt" className="mt-8 inline-flex rounded-xl bg-violet-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-violet-500">{t.cta}</Link>
      </section>
    </main>
  );
}
