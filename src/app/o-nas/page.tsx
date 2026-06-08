"use client";

import Link from "next/link";

import { useLocale } from "@/lib/use-locale";

const copy = {
  pl: {
    eyebrow: "O Luminso",
    title: "Pomagamy małym firmom wyglądać profesjonalnie w internecie.",
    lead: "Luminso tworzy nowoczesne strony internetowe dla lokalnych firm, które chcą mieć lepszy wizerunek, więcej zapytań i uporządkowaną obecność online — bez technicznego chaosu.",
    cards: [
      ["Prosto", "Bez żargonu, długich procesów i przeciągania projektu. Dostajesz konkretną stronę, którą można uruchomić i pokazać klientom."],
      ["Nowocześnie", "Projektujemy strony szybkie, responsywne i dopasowane do branży — od telefonu po komputer."],
      ["Kompleksowo", "Pomagamy z treścią, domeną, formularzem, publikacją, SEO lokalnym i późniejszymi zmianami."],
    ],
    sectionTitle: "Nie sprzedajemy tylko kodu. Sprzedajemy spokój.",
    paragraphs: [
      "Wielu właścicieli firm wie, że strona jest potrzebna, ale odkłada temat, bo nie chce zajmować się domeną, hostingiem, formularzem, tekstami, zdjęciami i poprawkami technicznymi.",
      "Dlatego Luminso działa jak praktyczny partner: przygotowujemy projekt, układ, treści, strukturę SEO i techniczne uruchomienie. Klient ma skupić się na biznesie, a nie na konfiguracji narzędzi.",
    ],
    cta: "Porozmawiajmy o Twojej stronie",
  },
  en: {
    eyebrow: "About Luminso",
    title: "We help small businesses look professional online.",
    lead: "Luminso builds modern websites for local businesses that want a stronger image, more enquiries and a clean online presence — without technical stress.",
    cards: [
      ["Simple", "No jargon, no endless process and no unnecessary complexity. You get a website that can be launched and shown to customers."],
      ["Modern", "We design fast, responsive websites tailored to your industry — from mobile to desktop."],
      ["Complete", "We help with content, domain setup, contact forms, launch, local SEO and later updates."],
    ],
    sectionTitle: "We do not just sell code. We sell peace of mind.",
    paragraphs: [
      "Many business owners know they need a website, but postpone it because they do not want to deal with domains, hosting, forms, copywriting, images and technical fixes.",
      "That is why Luminso works as a practical partner: we prepare the design, structure, content, local SEO foundations and technical launch. You can focus on running your business instead of configuring tools.",
    ],
    cta: "Let’s talk about your website",
  },
};

export default function AboutPage() {
  const locale = useLocale();
  const t = copy[locale];

  return (
    <main className="min-h-screen bg-zinc-50 px-6 pb-20 pt-44 text-zinc-950 dark:bg-[#05070d] dark:text-white md:pt-48">
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">{t.eyebrow}</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-black leading-tight md:text-7xl">{t.title}</h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-700 dark:text-zinc-300">{t.lead}</p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.cards.map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.035]">
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.035] md:p-10">
          <h2 className="text-3xl font-black md:text-4xl">{t.sectionTitle}</h2>
          <div className="mt-6 grid gap-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 md:grid-cols-2">
            {t.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>

        <Link href="/#kontakt" className="mt-12 inline-flex rounded-xl bg-violet-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-violet-500">{t.cta}</Link>
      </section>
    </main>
  );
}
