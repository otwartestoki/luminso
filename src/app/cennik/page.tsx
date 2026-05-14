import Link from "next/link";

const included = [
  "nowoczesna strona internetowa",
  "wersja mobilna",
  "podpięcie lub pomoc w zakupie domeny",
  "formularz kontaktowy albo link do rezerwacji",
  "sekcje z ofertą, zdjęciami i kontaktem",
  "uruchomienie strony",
];

const maintenancePackages = [
  {
    name: "Opieka podstawowa",
    price: "od 79 zł / mies.",
    description:
      "Dla firm, które chcą mieć spokojną głowę i pewność, że strona działa poprawnie.",
    items: [
      "utrzymanie strony",
      "drobne aktualizacje tekstów",
      "podmiana zdjęć lub cennika",
      "wsparcie techniczne",
      "kontrola działania strony",
    ],
  },
  {
    name: "Opieka + treści",
    price: "od 199 zł / mies.",
    description:
      "Dla firm, które chcą regularnie pokazywać aktualności, promocje, realizacje lub krótkie wpisy poradnikowe.",
    items: [
      "wszystko z pakietu podstawowego",
      "dodawanie postów / aktualności",
      "publikacja promocji i sezonowych ofert",
      "proste wpisy pod SEO lokalne",
      "pomoc w ułożeniu treści posta",
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
          Prosty start i jasne zasady opieki.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-700 dark:text-zinc-300">
          Najpierw tworzymy nowoczesną stronę dla lokalnej firmy. Później możesz
          wybrać poziom opieki zależnie od tego, jak często chcesz coś zmieniać
          lub publikować.
        </p>

        <div className="mt-12 rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.035] md:p-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
            <div>
              <h2 className="text-3xl font-black">Strona lokalnej firmy</h2>
              <p className="mt-4 max-w-2xl leading-8 text-zinc-600 dark:text-zinc-400">
                Dla fryzjera, barbera, restauracji, beauty, usług lokalnych,
                kancelarii albo małej firmy.
              </p>
            </div>

            <div className="rounded-2xl bg-violet-600 p-6 text-white">
              <div className="text-sm font-bold uppercase tracking-[0.18em] opacity-80">
                od
              </div>
              <div className="mt-1 text-5xl font-black">1200 zł</div>
              <div className="mt-2 text-sm opacity-80">jednorazowo</div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {included.map((item) => (
              <div key={item} className="flex gap-3 text-zinc-700 dark:text-zinc-300">
                <span className="text-violet-600 dark:text-violet-400">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">
            Opieka miesięczna
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            Wybierz poziom wsparcia po uruchomieniu strony.
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {maintenancePackages.map((pack) => (
              <div
                key={pack.name}
                className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.035]"
              >
                <h3 className="text-2xl font-black">{pack.name}</h3>

                <div className="mt-4 text-4xl font-black text-violet-600 dark:text-violet-400">
                  {pack.price}
                </div>

                <p className="mt-5 leading-8 text-zinc-600 dark:text-zinc-400">
                  {pack.description}
                </p>

                <div className="mt-8 grid gap-3">
                  {pack.items.map((item) => (
                    <div key={item} className="flex gap-3 text-zinc-700 dark:text-zinc-300">
                      <span className="text-violet-600 dark:text-violet-400">✓</span>
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
