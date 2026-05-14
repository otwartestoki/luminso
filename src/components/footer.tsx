import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-10 dark:bg-[#05070d]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-2xl font-black tracking-tight text-foreground">
          lumin<span className="text-violet-500">so.</span>
        </Link>

        <div>© 2026 Luminso. Nowoczesne strony dla lokalnych firm.</div>

        <div className="flex gap-5">
          <Link href="/#oferta" className="hover:text-foreground">
            Oferta
          </Link>
          <Link href="/#realizacje" className="hover:text-foreground">
            Realizacje
          </Link>
          <Link href="/#kontakt" className="hover:text-foreground">
            Kontakt
          </Link>
        </div>
      </div>
    </footer>
  );
}
