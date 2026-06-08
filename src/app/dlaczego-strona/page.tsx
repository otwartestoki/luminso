"use client";

import Link from "next/link";

import { useLocale } from "@/lib/use-locale";

const copy = {
  pl: {
    eyebrow: "Dlaczego własna strona?",
    title: "Booksy, Google Maps i Facebook pomagają. Ale nie zastępują własnej strony.",
    lead: "Platformy są ważne, ale każda z nich ma ograniczenia. Własna strona daje kontrolę nad wizerunkiem, treścią i ścieżką klienta — od pierwszego wejścia aż do kontaktu, rezerwacji lub zamówienia.",
    benefitsTitle: "Co daje własna strona internetowa?",
    controlTitle: "Największa różnica to kontrola",
    controlText: [
      "Na platformach korzystasz z gotowego układu i cudzych zasad. Na własnej stronie decydujesz, co klient zobaczy jako pierwsze i jak zaprezentujesz ofertę.",
      "Strona może łączyć wszystkie kanały: Booksy, WhatsApp, Google Maps, Instagram, Facebook, formularz kontaktowy albo system zamówień.",
      "Dobrze przygotowana strona wzmacnia zaufanie i porządkuje informacje, których klient szuka przed kontaktem.",
    ],
    benefits: ["pełna kontrola nad wyglądem i treścią", "większy profesjonalizm i zaufanie klientów", "łatwiejsze pozycjonowanie w Google", "jedno miejsce dla kontaktu, oferty i opinii", "możliwość rozbudowy strony w przyszłości", "niezależność od zmian algorytmów social mediów", "miejsce, do którego możesz kierować reklamy", "własna domena, która buduje markę"],
    comparisons: [
      ["Booksy", "Świetne do rezerwacji, ale klient zostaje w układzie platformy i łatwo porównuje Cię z innymi firmami."],
      ["Google Maps", "Pomaga znaleźć firmę, ale nie daje pełnej kontroli nad narracją, ofertą, zdjęciami i układem treści."],
      ["Social media", "Dają kontakt i zasięg, ale posty szybko znikają, a algorytmy mogą ograniczyć widoczność."],
      ["Własna strona", "To centrum online Twojej firmy — oferta, opinie, zdjęcia, kontakt i linki w jednym miejscu."],
    ],
    cta: "Chcę własną stronę",
  },
  en: {
    eyebrow: "Why have your own website?",
    title: "Booking platforms, Google Maps and social media help. But they do not replace your own website.",
    lead: "Platforms are useful, but each one has limits. Your own website gives you control over your image, content and customer journey — from the first visit to contact, booking or order.",
    benefitsTitle: "What does your own website give you?",
    controlTitle: "The biggest difference is control",
    controlText: [
      "On platforms, you use someone else’s layout and rules. On your own website, you decide what customers see first and how your offer is presented.",
      "Your website can connect all channels: booking tools, WhatsApp, Google Maps, Instagram, Facebook, contact forms or ordering systems.",
      "A well-built website increases trust and organizes the information customers need before they contact you.",
    ],
    benefits: ["full control over design and content", "more professional image and customer trust", "better foundation for Google visibility", "one place for contact, offer and reviews", "easy to expand later", "independence from social media algorithms", "a destination for ads and campaigns", "your own domain that builds your brand"],
    comparisons: [
      ["Booking platforms", "Great for reservations, but customers stay inside the platform layout and can easily compare you with others."],
      ["Google Maps", "Helps people find you, but does not give full control over your story, offer, photos and content layout."],
      ["Social media", "Useful for reach and interaction, but posts disappear quickly and algorithms can limit visibility."],
      ["Your website", "The online hub of your business — offer, reviews, photos, contact and links in one controlled place."],
    ],
    cta: "I want a website",
  },
};

export default function WhyWebsitePage() {
  const locale = useLocale();
  const t = copy[locale];
  return (
    <main className="min-h-screen bg-zinc-50 px-6 pb-20 pt-44 text-zinc-950 dark:bg-[#05070d] dark:text-white md:pt-48">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">{t.eyebrow}</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-black leading-tight md:text-7xl">{t.title}</h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-700 dark:text-zinc-300">{t.lead}</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.035]">
            <h2 className="text-3xl font-black">{t.benefitsTitle}</h2>
            <div className="mt-8 grid gap-5">
              {t.benefits.map((item) => <div key={item} className="flex gap-3"><span className="text-violet-600 dark:text-violet-400">✓</span><span className="text-zinc-700 dark:text-zinc-300">{item}</span></div>)}
            </div>
          </div>
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.035]">
            <h2 className="text-3xl font-black">{t.controlTitle}</h2>
            <div className="mt-6 space-y-5 text-zinc-600 dark:text-zinc-400">
              {t.controlText.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {t.comparisons.map(([title, text]) => <article key={title} className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.035]"><h3 className="text-xl font-black">{title}</h3><p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{text}</p></article>)}
        </div>

        <Link href="/#kontakt" className="mt-12 inline-flex rounded-xl bg-violet-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-violet-500">{t.cta}</Link>
      </section>
    </main>
  );
}
