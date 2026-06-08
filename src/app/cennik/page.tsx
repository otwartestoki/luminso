import Link from "next/link";

const websitePackages = [
  {
    name: "Mini",
    price: "699 zł",
    items: [
      "gotowy układ strony",
      "1 podstrona",
      "statyczne opinie klientów",
      "galeria podstawowa",
      "zdjęcia od klienta",
      "podstawowe SEO",
    ],
  },
  {
    name: "Standard",
    price: "1290 zł",
    featured: true,
    items: [
      "bardziej dopasowany wygląd",
      "do 3 podstron",
      "opinie klientów z wizytówki google",
      "rozbudowana galeria w różnych stylach animacji",
      "poprawa dostarczonych grafik",
      "SEO lokalne",
    ],
  },
  {
    name: "Premium",
    price: "od 2490 zł",
    items: [
      "indywidualny projekt",
      "do 6 podstron",
      "dynamiczne opinie klientów z wizytówki google",
      "rozbudowana galeria w różnych stylach",
      "grafiki i zdjęcia od podstaw",
      "rozszerzone SEO",
    ],
  },
];

const maintenancePackages = [
  {
    name: "Bez abonamentu",
    price: "0 zł / mies.",
    items: [
      "strona działa po publikacji",
      "brak stałych opłat",
      "zmiany na zlecenie",
    ],
  },
  {
    name: "Opieka",
    price: "79 zł / mies.",
    items: [
      "wsparcie techniczne",
      "drobne aktualizacje na stronie",
      "zakup oraz podpięcie domeny",
    ],
  },
  {
    name: "Opieka + widoczność",
    price: "199 zł / mies.",
    items: [
      "aktualności i promocje",
      "tworzenie i publikowanie treści SEO",
      "zakup oraz podpięcie domeny",
      "tworzenie raportów popularności strony",    
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 pb-20 pt-44 text-zinc-950 dark:bg-[#05070d] dark:text-white md:pt-48">
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">
          Cennik
        </p>

        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Strony internetowe dla lokalnych firm.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-700 dark:text-zinc-300">
          Wybierz pakiet dopasowany do wielkości firmy i potrzeb.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {websitePackages.map((pack) => (
            <div
              key={pack.name}
              className={`rounded-3xl border p-8 shadow-xl shadow-black/5 ${
                pack.featured
                  ? "border-violet-500 bg-white dark:border-violet-400 dark:bg-white/[0.05]"
                  : "border-zinc-200 bg-white dark:border-white/10 dark:bg-white/[0.035]"
              }`}
            >
              {pack.featured && (
                <div className="mb-5 inline-flex rounded-full bg-violet-600 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
                  Najczęściej wybierany
                </div>
              )}

              <h2 className="text-3xl font-black">{pack.name}</h2>

              <div className="mt-5 text-5xl font-black text-violet-600 dark:text-violet-400">
                {pack.price}
              </div>

              <div className="mt-8 grid gap-3">
                {pack.items.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="text-violet-600 dark:text-violet-400">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">
            Opieka po publikacji
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {maintenancePackages.map((pack) => (
              <div
                key={pack.name}
                className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.035]"
              >
                <h3 className="text-2xl font-black">{pack.name}</h3>

                <div className="mt-4 text-4xl font-black text-violet-600 dark:text-violet-400">
                  {pack.price}
                </div>

                <div className="mt-8 grid gap-3">
                  {pack.items.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="text-violet-600 dark:text-violet-400">
                        ✓
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/#kontakt"
          className="mt-12 inline-flex rounded-xl bg-violet-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-violet-500"
        >
          Zapytaj o wycenę
        </Link>
      </section>
    </main>
  );
}
