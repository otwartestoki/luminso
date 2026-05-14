const posts = [
  {
    title: "Dlaczego własna strona pomaga zdobywać klientów z Google?",
    date: "maj 2026",
    category: "SEO lokalne",
    image: "/blog-seo.png",
    text: "Wiele lokalnych firm opiera się wyłącznie na Facebooku albo Booksy. Problem polega na tym, że klienci bardzo często zaczynają od wyszukiwarki Google. Gdy ktoś wpisuje „barber Łódź”, „kebab Retkinia” albo „adwokat rozwód Łódź”, dobrze przygotowana strona może regularnie sprowadzać nowych klientów bez ciągłego płacenia za reklamy. Własna strona pozwala budować widoczność lokalną przez treści, realizacje i aktualności związane z konkretną usługą oraz miastem.",
  },
  {
    title: "Dlaczego sama strona na Facebooku nie wystarczy?",
    date: "kwiecień 2026",
    category: "Większe zaufanie",
    image: "/blog-trust.png",
    text: "Fanpage pomaga pokazać aktualności, ale nie daje pełnej kontroli nad marką. Klient widzi reklamy, konkurencję i ograniczony układ informacji. Własna strona wygląda bardziej profesjonalnie, pozwala uporządkować ofertę i zwiększa zaufanie do firmy. Dla wielu klientów brak strony internetowej oznacza, że firma jest mała, tymczasowa albo mniej profesjonalna. Dobrze zaprojektowana strona działa jak cyfrowa wizytówka premium.",
  },
  {
    title: "Booksy i Instagram pomagają. Ale własna strona daje kontrolę.",
    date: "marzec 2026",
    category: "Niezależność",
    image: "/blog-independent.png",
    text: "Platformy rezerwacyjne i social media są bardzo przydatne, ale ich zasady mogą się zmieniać. Zasięgi spadają, algorytmy się zmieniają, a profile mogą zostać ograniczone lub zablokowane. Własna strona internetowa jest miejscem, które należy do Twojej firmy. Możesz tam kierować klientów z reklam, Instagrama, TikToka albo Google Maps i decydować, jak wygląda cały proces kontaktu lub zamówienia.",
  },
  {
    title: "Jak nowoczesna strona zwiększa liczbę zapytań od klientów?",
    date: "marzec 2026",
    category: "Więcej klientów",
    image: "/blog-conversion.png",
    text: "Nowoczesna strona pomaga klientowi szybciej podjąć decyzję. Przejrzysta oferta, zdjęcia realizacji, opinie i prosty kontakt sprawiają, że użytkownik nie musi szukać informacji w kilku miejscach. Dodatkowo strona może prowadzić klienta bezpośrednio do Booksy, WhatsApp, Uber Eats albo formularza kontaktowego. To często przekłada się na większą liczbę wiadomości, rezerwacji i zamówień.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 pb-20 pt-44 text-zinc-950 dark:bg-[#05070d] dark:text-white md:pt-48">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">
          Blog
        </p>

        <h1 className="mt-5 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
          Dlaczego lokalne firmy nadal potrzebują własnej strony internetowej?
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-700 dark:text-zinc-300">
          Krótkie wpisy pokazujące, jak własna strona pomaga budować markę,
          zwiększać zaufanie klientów i zdobywać ruch z Google niezależnie od social mediów.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.035]"
            >
              <img
                src={post.image}
                alt={post.title}
                className="aspect-[16/9] w-full object-cover"
              />

              <div className="p-8">
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-violet-600 dark:text-violet-400">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.category}</span>
                </div>

                <h2 className="mt-5 text-3xl font-black leading-tight">
                  {post.title}
                </h2>

                <p className="mt-6 leading-8 text-zinc-600 dark:text-zinc-400">
                  {post.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
