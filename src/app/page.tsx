"use client";

import { FormEvent, useState } from "react";

const services = [
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
];

const steps = [
  {
    title: "Rozmowa",
    text: "Poznaję Twoją firmę, potrzeby i styl, który najlepiej pasuje do branży.",
  },
  {
    title: "Projekt strony",
    text: "Przygotowuję nowoczesny projekt dopasowany do Twojej firmy i klientów.",
  },
  {
    title: "Umowa wstępna",
    text: "Ustalamy zakres współpracy, termin realizacji oraz podstawowe warunki.",
  },
  {
    title: "Uruchomienie",
    text: "Publikuję stronę, konfiguruję domenę i sprawdzam poprawność działania.",
  },
  {
    title: "Finalizacja",
    text: "Wprowadzamy ostatnie poprawki i przekazuję gotową stronę do działania.",
  },
];

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

const faqs = [
  {
    question: "Czy muszę znać się na domenach i hostingu?",
    answer:
      "Nie. Zajmuję się konfiguracją techniczną, domeną i uruchomieniem strony.",
  },
  {
    question: "Czy mogę dodać Booksy, Uber Eats albo WhatsApp?",
    answer:
      "Tak. Strona może prowadzić klientów dokładnie tam, gdzie chcesz.",
  },
  {
    question: "Czy mogę później zmienić zdjęcia lub cennik?",
    answer:
      "Tak. W ramach opieki mogę aktualizować treści i zdjęcia.",
  },
  {
    question: "Ile trwa przygotowanie strony?",
    answer:
      "Przy prostym zakresie zwykle od kilku dni roboczych.",
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
  const [sent, setSent] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent("Zapytanie o stronę internetową");
    const body = encodeURIComponent(
      `Imię: ${name}\nE-mail: ${email}\n\n${message}`,
    );

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    alert("Wiadomość została wysłana");
    setSent(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-zinc-50 text-zinc-950 dark:bg-[#05070d] dark:text-white">
      {selectedImage && (
        <button
          type="button"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-6"
          onClick={() => setSelectedImage(null)}
          aria-label="Zamknij podgląd"
        >
          <img
            src={selectedImage}
            alt="Powiększony podgląd realizacji"
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
            Nowoczesne strony dla lokalnych firm
          </h1>

          <p className="mt-7 max-w-xl text-xl leading-9 text-zinc-700 dark:text-zinc-300">
            Projekt, domena, uruchomienie i opieka w jednym miejscu.
          </p>

          <div className="mt-9 flex gap-4">
            <a
              href="#realizacje"
              className="rounded-xl bg-violet-600 px-7 py-4 text-center text-sm font-bold text-white shadow-lg shadow-violet-600/25 transition hover:bg-violet-500"
            >
              Zobacz realizacje
            </a>

            <a
              href="#kontakt"
              className="rounded-xl border border-zinc-300 px-7 py-4 text-center text-sm font-bold transition hover:bg-zinc-100 dark:border-white/20 dark:hover:bg-white/10"
            >
              Kontakt
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
          eyebrow="Oferta"
          title="Co obejmuje współpraca?"
          description="Prosta, nowoczesna strona oraz obsługa techniczna od domeny po uruchomienie."
        />

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.025] md:p-9">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
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
          eyebrow="Realizacje"
          title="Przykładowe strony dla lokalnych firm"
          description="Różne branże, różny klimat i jeden cel: profesjonalny wygląd oraz łatwy kontakt z klientem."
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
          eyebrow="Proces"
          title="Jak wygląda współpraca?"
          description="Krótko, konkretnie i bez zbędnego technicznego zamieszania."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => (
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
          title="Pytania i odpowiedzi"
          description="Najczęstsze pytania przed startem współpracy."
        />

        <div className="grid gap-4">
          {faqs.map((item) => (
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
          eyebrow="Kontakt"
          title="Porozmawiajmy o Twojej stronie"
          description="Napisz kilka słów o swojej firmie i stronie, której potrzebujesz."
        />

        <div className="rounded-3xl border border-zinc-200 bg-white p-8 dark:border-white/10 dark:bg-white/[0.035] md:p-10">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                required
                name="name"
                placeholder="Imię i nazwisko"
                className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-500 focus:border-violet-500 dark:border-white/10 dark:bg-black/20 dark:text-white"
              />

              <input
                required
                type="email"
                name="email"
                placeholder="E-mail"
                className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-500 focus:border-violet-500 dark:border-white/10 dark:bg-black/20 dark:text-white"
              />
            </div>

            <textarea
              required
              name="message"
              placeholder="Napisz kilka słów o swoim projekcie..."
              rows={5}
              className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-500 focus:border-violet-500 dark:border-white/10 dark:bg-black/20 dark:text-white"
            />

            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-violet-600/25 transition hover:bg-violet-500"
            >
              Wyślij wiadomość
            </button>

            {sent && (
              <p className="text-sm text-violet-500 dark:text-violet-300">
                Otwieram program pocztowy z gotową wiadomością.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
