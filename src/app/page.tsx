"use client";

import { FormEvent, useEffect, useState } from "react";

type Locale = "pl" | "en";

const content = {
  pl: {
    heroTitle: "Nowoczesne strony dla lokalnych firm",
    heroText: "Projekt, domena, uruchomienie i opieka w jednym miejscu.",
    viewProjects: "Zobacz realizacje",
    contact: "Kontakt",
    offerEyebrow: "Oferta",
    offerTitle: "Co obejmuje współpraca?",
    offerDescription:
      "Prosta, nowoczesna strona oraz obsługa techniczna od domeny po uruchomienie.",
    projectsEyebrow: "Realizacje",
    projectsTitle: "Przykładowe strony dla lokalnych firm",
    projectsDescription:
      "Różne branże, różny klimat i jeden cel: profesjonalny wygląd oraz łatwy kontakt z klientem.",
    processEyebrow: "Proces",
    processTitle: "Jak wygląda współpraca?",
    processDescription: "Krótko, konkretnie i bez zbędnego technicznego zamieszania.",
    faqTitle: "Pytania i odpowiedzi",
    faqDescription: "Najczęstsze pytania przed startem współpracy.",
    contactTitle: "Porozmawiajmy o Twojej stronie",
    contactDescription:
      "Napisz kilka słów o swojej firmie i stronie, której potrzebujesz.",
    closePreview: "Zamknij podgląd",
    previewAlt: "Powiększony podgląd realizacji",
    sentAlert: "Wiadomość została wysłana",
    subject: "Zapytanie o stronę internetową",
    formName: "Imię",
    formCompany: "Firma",
    formEmail: "E-mail",
    formMessage: "Wiadomość",
    formButton: "Wyślij wiadomość",
    services: [
      {
        title: "Strona internetowa",
        text: "Nowoczesna i dopasowana do Twojej firmy.",
        icon: "◎",
      },
      {
        title: "Domena",
        text: "Pomoc w zakupie i konfiguracji domeny.",
        icon: "▣",
      },
      {
        title: "Uruchomienie",
        text: "Publikacja strony i konfiguracja techniczna.",
        icon: "✦",
      },
      {
        title: "Opieka",
        text: "Aktualizacje i wsparcie po uruchomieniu.",
        icon: "◇",
      },
    ],
    steps: [
      {
        title: "Rozmowa",
        text: "Poznaję Twoją firmę, potrzeby i styl, który najlepiej pasuje do branży.",
      },
      {
        title: "Umowa wstępna",
        text: "Ustalamy zakres współpracy, termin realizacji oraz podstawowe warunki.",
      },
      {
        title: "Projekt strony",
        text: "Przygotowuję nowoczesny projekt dopasowany do Twojej firmy i klientów.",
      },
      {
        title: "Uruchomienie",
        text: "Publikuję stronę, konfiguruję domenę i sprawdzam poprawność działania.",
      },
      {
        title: "Finalizacja",
        text: "Wprowadzamy ostatnie poprawki i przekazuję gotową stronę do działania.",
      },
    ],
    faqs: [
      {
        question: "Czy muszę znać się na domenach i hostingu?",
        answer:
          "Nie. Zajmuję się konfiguracją techniczną, domeną i uruchomieniem strony.",
      },
      {
        question: "Czy mogę dodać Booksy, Uber Eats albo WhatsApp?",
        answer: "Tak. Strona może prowadzić klientów dokładnie tam, gdzie chcesz.",
      },
      {
        question: "Czy mogę później zmienić zdjęcia lub cennik?",
        answer: "Tak. W ramach opieki mogę aktualizować treści i zdjęcia.",
      },
      {
        question: "Ile trwa przygotowanie strony?",
        answer: "Przy prostym zakresie zwykle od kilku dni roboczych.",
      },
    ],
  },
  en: {
    heroTitle: "Modern websites for local businesses",
    heroText: "Design, domain, launch and support in one place.",
    viewProjects: "View projects",
    contact: "Contact",
    offerEyebrow: "Services",
    offerTitle: "What is included?",
    offerDescription:
      "A clean, modern website and technical setup from domain to launch.",
    projectsEyebrow: "Projects",
    projectsTitle: "Example websites for local businesses",
    projectsDescription:
      "Different industries, different styles and one goal: a professional look with easy customer contact.",
    processEyebrow: "Process",
    processTitle: "How does it work?",
    processDescription: "Simple, clear and without unnecessary technical confusion.",
    faqTitle: "Questions and answers",
    faqDescription: "Common questions before starting a project.",
    contactTitle: "Let’s talk about your website",
    contactDescription:
      "Send a few words about your business and the website you need.",
    closePreview: "Close preview",
    previewAlt: "Enlarged project preview",
    sentAlert: "Your message has been sent",
    subject: "Website project inquiry",
    formName: "Name",
    formCompany: "Company",
    formEmail: "Email",
    formMessage: "Message",
    formButton: "Send message",
    services: [
      {
        title: "Website",
        text: "Modern and tailored to your business.",
        icon: "◎",
      },
      {
        title: "Domain",
        text: "Help with domain purchase and setup.",
        icon: "▣",
      },
      {
        title: "Launch",
        text: "Website deployment and technical configuration.",
        icon: "✦",
      },
      {
        title: "Support",
        text: "Updates and support after launch.",
        icon: "◇",
      },
    ],
    steps: [
      {
        title: "Discovery",
        text: "I learn about your business, needs and the style that fits your industry.",
      },
      {
        title: "Initial agreement",
        text: "We define the scope, delivery time and basic cooperation terms.",
      },
      {
        title: "Website design",
        text: "I prepare a modern design tailored to your company and customers.",
      },
      {
        title: "Launch",
        text: "I publish the website, configure the domain and check that everything works correctly.",
      },
      {
        title: "Finalization",
        text: "We make final adjustments and hand over a ready-to-use website.",
      },
    ],
    faqs: [
      {
        question: "Do I need to understand domains and hosting?",
        answer:
          "No. I handle the technical setup, domain configuration and launch.",
      },
      {
        question: "Can I add Booksy, Uber Eats or WhatsApp?",
        answer: "Yes. The website can lead customers exactly where you want.",
      },
      {
        question: "Can I change photos or prices later?",
        answer: "Yes. I can update content and photos as part of ongoing support.",
      },
      {
        question: "How long does a website take?",
        answer: "For a simple scope, usually a few business days.",
      },
    ],
  },
} satisfies Record<Locale, Record<string, unknown>>;

const heroProject = {
  name: "LEX & Partnerzy",
  image: "/realizacja-lawyer.png",
};

const projects = [
  {
    name: "Kebab King",
    image: "/realizacja-gastro.png",
  },
  {
    name: "Gentlemen Barber Shop",
    image: "/realizacja-barber.png",
  },
  {
    name: "Belleza Beauty",
    image: "/realizacja-beauty.png",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("pl");
  const [sent, setSent] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    function syncLocale() {
      const stored = localStorage.getItem("locale");
      if (stored === "en" || stored === "pl") {
        setLocale(stored);
      }
    }

    syncLocale();
    window.addEventListener("localechange", syncLocale);
    window.addEventListener("storage", syncLocale);

    return () => {
      window.removeEventListener("localechange", syncLocale);
      window.removeEventListener("storage", syncLocale);
    };
  }, []);

  const t = content[locale];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const company = String(data.get("company") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        company,
        email,
        message,
      }),
    });

    alert(t.sentAlert as string);
    setSent(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-zinc-50 text-zinc-950 dark:bg-[#05070d] dark:text-white">
      {selectedImage && (
        <button
          type="button"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-6"
          onClick={() => setSelectedImage(null)}
          aria-label={t.closePreview as string}
        >
          <img
            src={selectedImage}
            alt={t.previewAlt as string}
            className="max-h-[92vh] max-w-[92vw] rounded-3xl shadow-2xl"
          />
        </button>
      )}

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_5%,rgba(124,58,237,0.12),transparent_28%),radial-gradient(circle_at_85%_35%,rgba(37,99,235,0.08),transparent_30%),linear-gradient(180deg,#fafafa,#f4f4f5)] dark:bg-[radial-gradient(circle_at_20%_5%,rgba(124,58,237,0.2),transparent_28%),radial-gradient(circle_at_85%_35%,rgba(37,99,235,0.12),transparent_30%),linear-gradient(180deg,#05070d,#03040a)]" />

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-44 md:grid-cols-[0.92fr_1.08fr] md:pt-48">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">
            Luminso
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            {t.heroTitle as string}
          </h1>

          <p className="mt-7 max-w-xl text-xl leading-9 text-zinc-700 dark:text-zinc-300">
            {t.heroText as string}
          </p>

          <div className="mt-9 flex gap-4">
            <a
              href="#realizacje"
              className="rounded-xl bg-violet-600 px-7 py-4 text-center text-sm font-bold text-white shadow-lg shadow-violet-600/25 transition hover:bg-violet-500"
            >
              {t.viewProjects as string}
            </a>

            <a
              href="#kontakt"
              className="rounded-xl border border-zinc-300 px-7 py-4 text-center text-sm font-bold transition hover:bg-zinc-100 dark:border-white/20 dark:hover:bg-white/10"
            >
              {t.contact as string}
            </a>
          </div>
        </div>

        <button
          type="button"
          className="relative text-left"
          onClick={() => setSelectedImage(heroProject.image)}
        >
          <img
            src={heroProject.image}
            alt={heroProject.name}
            className="relative w-full rounded-[2rem] border border-zinc-200 shadow-2xl shadow-black/10 transition hover:scale-[1.01] dark:border-white/10 dark:shadow-black/60"
          />
        </button>
      </section>

      <section id="oferta" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <SectionHeader
          eyebrow={t.offerEyebrow as string}
          title={t.offerTitle as string}
          description={t.offerDescription as string}
        />

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.025] md:p-9">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {(t.services as typeof content.pl.services).map((service) => (
              <div key={service.title} className="p-3">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-4xl text-violet-600 dark:bg-violet-600/20 dark:text-violet-400">
                  {service.icon}
                </div>
                <h3 className="font-bold">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="realizacje" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <SectionHeader
          eyebrow={t.projectsEyebrow as string}
          title={t.projectsTitle as string}
          description={t.projectsDescription as string}
        />

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <button
              type="button"
              key={project.name}
              onClick={() => setSelectedImage(project.image)}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white text-left transition hover:scale-[1.01] dark:border-white/10 dark:bg-white/[0.035]"
            >
              <img
                src={project.image}
                alt={project.name}
                className="aspect-[16/10] w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold">{project.name}</h3>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="proces" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <SectionHeader
          eyebrow={t.processEyebrow as string}
          title={t.processTitle as string}
          description={t.processDescription as string}
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {(t.steps as typeof content.pl.steps).map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-zinc-200 bg-white p-8 text-center dark:border-white/10 dark:bg-white/[0.035]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-xl font-black text-white">
                {index + 1}
              </div>

              <h3 className="mt-5 font-bold">{step.title}</h3>

              <p className="mx-auto mt-3 max-w-52 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="relative z-10 mx-auto max-w-4xl px-6 py-16">
        <SectionHeader
          eyebrow="FAQ"
          title={t.faqTitle as string}
          description={t.faqDescription as string}
        />

        <div className="grid gap-4">
          {(t.faqs as typeof content.pl.faqs).map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition open:bg-zinc-50 dark:border-white/10 dark:bg-white/[0.035] dark:open:bg-white/[0.06]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-bold">
                <span>{item.question}</span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600 transition group-open:rotate-45 dark:bg-violet-600/20 dark:text-violet-400">
                  +
                </span>
              </summary>

              <p className="mt-5 leading-8 text-zinc-600 dark:text-zinc-400">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section id="kontakt" className="relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-16">
        <SectionHeader
          eyebrow={t.contact as string}
          title={t.contactTitle as string}
          description={t.contactDescription as string}
        />

        <div className="rounded-3xl border border-zinc-200 bg-white p-8 dark:border-white/10 dark:bg-white/[0.035] md:p-10">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="name"
                required
                placeholder={t.formName as string}
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-4 outline-none transition focus:border-violet-500 dark:border-white/10 dark:bg-white/[0.04]"
              />
              <input
                name="company"
                placeholder={t.formCompany as string}
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-4 outline-none transition focus:border-violet-500 dark:border-white/10 dark:bg-white/[0.04]"
              />
            </div>

            <input
              type="email"
              name="email"
              required
              placeholder={t.formEmail as string}
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-4 outline-none transition focus:border-violet-500 dark:border-white/10 dark:bg-white/[0.04]"
            />

            <textarea
              name="message"
              required
              rows={5}
              placeholder={t.formMessage as string}
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-4 outline-none transition focus:border-violet-500 dark:border-white/10 dark:bg-white/[0.04]"
            />

            <button
              type="submit"
              disabled={sent}
              className="rounded-xl bg-violet-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-violet-600/25 transition hover:bg-violet-500 disabled:opacity-60"
            >
              {t.formButton as string}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
