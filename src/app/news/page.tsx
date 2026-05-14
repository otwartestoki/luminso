const posts = [
  {
    title: "SEO lokalne – jak własna strona przyciąga klientów z Twojej okolicy",
    date: "1 maja 2026",
    image: "/news-seo.jpg",
    text:
      "Dobrze zoptymalizowana strona pomaga dotrzeć do osób, które szukają Twoich usług w Google. SEO lokalne (pozycjonowanie) działa wtedy, gdy treści, oferta i lokalizacja są uporządkowane w jednym miejscu.",
  },
  {
    title: "Niezależność od platform – miej pełną kontrolę nad swoim biznesem",
    date: "15 kwietnia 2026",
    image: "/news-independent.jpg",
    text:
      "Booksy, Facebook czy Instagram są świetnymi dodatkami, ale nie powinny być jedynym kanałem pozyskiwania klientów. Własna strona daje kontrolę nad marką, komunikacją i ścieżką kontaktu.",
  },
  {
    title: "Więcej klientów, więcej zysków – jak strona pracuje na Twój sukces",
    date: "28 marca 2026",
    image: "/news-clients.jpg",
    text:
      "Nowoczesna strona może działać 24/7, przyciągać nowych klientów i budować zaufanie jeszcze zanim ktoś napisze lub zadzwoni. Przemyślany układ prowadzi użytkownika do decyzji.",
  },
  {
    title: "Profesjonalny wizerunek, który buduje zaufanie od pierwszego kliknięcia",
    date: "10 marca 2026",
    image: "/news-trust.jpg",
    text:
      "Pierwsze wrażenie ma znaczenie. Strona internetowa pokazuje, że firma dba o jakość, jest wiarygodna i ułatwia klientowi znalezienie najważniejszych informacji.",
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <section className="border-b border-white/10 px-6 pb-16 pt-44 md:pt-48">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-violet-400">
              News
            </p>

            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight md:text-7xl">
              Wiedza, która przekłada się na wyniki
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/65">
              Praktyczne wskazówki, strategie i porady, które pomagają zrozumieć,
              dlaczego własna strona to najlepsza inwestycja dla Twojego biznesu.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src="/news-hero.jpg"
              alt="News Luminso"
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#07090d]/10" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/30"
            >
              <img
                src={post.image}
                alt={post.title}
                className="aspect-[16/9] w-full object-cover"
              />

              <div className="p-7 md:p-8">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/45">
                  {post.date}
                </p>

                <h2 className="mt-5 text-2xl font-black leading-snug md:text-3xl">
                  {post.title}
                </h2>

                <p className="mt-5 leading-8 text-white/60">
                  {post.text}
                </p>

              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.035] p-8 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-black md:text-3xl">
              Gotowy na stronę, która przyciąga klientów?
            </h3>
            <p className="mt-3 text-white/60">
              Zamów profesjonalną stronę internetową i zacznij rozwijać swój biznes już dziś.
            </p>
          </div>

          <a
            href="/#kontakt"
            className="rounded-xl bg-violet-300 px-8 py-4 text-sm font-black text-black transition hover:bg-violet-200"
          >
            Zamów stronę
          </a>
        </div>
      </section>
    </main>
  );
}
