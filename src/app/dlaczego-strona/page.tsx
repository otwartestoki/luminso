const benefits = [
  "pełna kontrola nad wyglądem i treścią",
  "większy profesjonalizm i zaufanie klientów",
  "łatwiejsze pozycjonowanie w Google",
  "jedno miejsce dla kontaktu, oferty i opinii",
  "możliwość rozbudowy strony w przyszłości",
  "niezależność od zmian algorytmów social mediów",
  "miejsce, do którego możesz kierować reklamy",
  "własna domena, która buduje markę",
];

const comparisons = [
  {
    title: "Booksy",
    text:
      "Booksy świetnie sprawdza się do rezerwacji, ale nie buduje w pełni marki. Klient widzi ograniczony układ, porównuje Cię z innymi i zostaje w świecie platformy.",
  },
  {
    title: "Google Maps",
    text:
      "Google Maps pomaga znaleźć firmę, ale nie zastępuje pełnej prezentacji oferty. Nie masz tam pełnej kontroli nad układem, narracją, treścią i wyglądem marki.",
  },
  {
    title: "Facebook i social media",
    text:
      "Fanpage daje kontakt i interakcje, ale zasięgi zależą od algorytmów. Posty szybko znikają, a klient często widzi obok reklamy, komentarze i rozpraszacze.",
  },
  {
    title: "Własna strona",
    text:
      "Strona jest Twoim centrum online. Możesz pokazać ofertę, zdjęcia, opinie, historię firmy, kontakt, linki do rezerwacji i zamówień — dokładnie tak, jak chcesz.",
  },
];

export default function WhyWebsitePage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 pb-20 pt-44 text-zinc-950 dark:bg-[#05070d] dark:text-white md:pt-48">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">
          Dlaczego własna strona?
        </p>

        <h1 className="mt-5 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
          Booksy, Google Maps i Facebook pomagają. Ale nie zastępują własnej strony.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-700 dark:text-zinc-300">
          Platformy są ważne, ale każda z nich ma swoje ograniczenia. Własna strona
          daje kontrolę nad wizerunkiem, treścią i ścieżką klienta — od pierwszego
          wejścia aż do kontaktu, rezerwacji lub zamówienia.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.035]">
            <h2 className="text-3xl font-black">
              Co daje własna strona internetowa?
            </h2>

            <div className="mt-8 grid gap-5">
              {benefits.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-violet-600 dark:text-violet-400">✓</span>
                  <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.035]">
            <h2 className="text-3xl font-black">
              Największa różnica to kontrola
            </h2>

            <div className="mt-6 space-y-5 text-zinc-600 dark:text-zinc-400">
              <p>
                Na platformach korzystasz z gotowego układu i cudzych zasad. Na własnej
                stronie decydujesz, co klient zobaczy jako pierwsze, jak zaprezentujesz
                ofertę i gdzie poprowadzisz użytkownika.
              </p>

              <p>
                Strona może łączyć wszystkie kanały: Booksy, Uber Eats, Pyszne, WhatsApp,
                Google Maps, Instagram, Facebook i formularz kontaktowy. Dzięki temu nie
                zastępuje platform, tylko porządkuje je w jednym miejscu.
              </p>

              <p>
                Dobrze przygotowana strona wzmacnia zaufanie. Klient widzi, że firma
                inwestuje w wizerunek, ma przejrzystą ofertę i można się z nią łatwo
                skontaktować.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {comparisons.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.035]"
            >
              <h3 className="text-xl font-black">{item.title}</h3>

              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
