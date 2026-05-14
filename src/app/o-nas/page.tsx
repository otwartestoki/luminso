import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 pb-20 pt-44 text-zinc-950 dark:bg-[#05070d] dark:text-white md:pt-48">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">
          O nas
        </p>

        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Luminso pomaga lokalnym firmom wyglądać profesjonalnie w internecie.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-700 dark:text-zinc-300">
          Tworzymy nowoczesne strony internetowe dla firm, które chcą mieć
          dobrze wyglądającą wizytówkę online bez technicznego chaosu. Zajmujemy
          się projektem, domeną, uruchomieniem i późniejszą opieką.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["Prosto", "Bez skomplikowanych procesów i niezrozumiałej technologii."],
            ["Nowocześnie", "Strony wyglądające dobrze na telefonie i komputerze."],
            ["Kompleksowo", "Domena, uruchomienie, utrzymanie i drobne zmiany w jednym miejscu."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.035]"
            >
              <h2 className="text-xl font-black">{title}</h2>
              <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
                {text}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/#kontakt"
          className="mt-12 inline-flex rounded-xl bg-violet-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-violet-500"
        >
          Porozmawiajmy o Twojej stronie
        </Link>
      </section>
    </main>
  );
}
