import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#05070d] px-6 py-32 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-5xl font-black">
          lumin<span className="text-violet-500">so.</span>
        </div>

        <h1 className="mt-10 text-4xl font-black">
          Ta podstrona jest obecnie przebudowywana.
        </h1>

        <p className="mt-6 leading-8 text-zinc-300">
          Wróć na stronę główną Luminso. Wszystkie najważniejsze informacje są teraz na landing page.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-xl bg-violet-600 px-7 py-4 text-sm font-bold text-white"
        >
          Wróć na stronę główną
        </Link>
      </div>
    </main>
  );
}
