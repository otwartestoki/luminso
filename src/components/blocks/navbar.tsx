"use client";

import Link from "next/link";
import { useState } from "react";

import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const LANDING_LINKS = [
  { label: "Oferta", href: "/#oferta" },
  { label: "Realizacje", href: "/#realizacje" },
  { label: "Proces", href: "/#proces" },
  { label: "FAQ", href: "/#faq" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLandingOpen, setIsLandingOpen] = useState(false);

  return (
    <section
      className={cn(
        "absolute left-1/2 top-6 z-50 w-[min(94%,980px)] -translate-x-1/2 rounded-4xl border border-zinc-200 bg-white/85 text-zinc-950 shadow-2xl shadow-black/10 backdrop-blur-md transition-all duration-300 dark:border-white/10 dark:bg-[#05070d]/80 dark:text-white lg:top-8",
      )}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="text-2xl font-black tracking-tight">
            lumin<span className="text-violet-500">so.</span>
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setIsLandingOpen(true)}
            onMouseLeave={() => setIsLandingOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsLandingOpen((value) => !value)}
              className="flex items-center gap-1 text-sm font-semibold text-zinc-700 transition hover:text-violet-600 dark:text-white/80 dark:hover:text-violet-300"
            >
              Strona główna
              <ChevronDown
                className={cn(
                  "size-4 transition-transform",
                  isLandingOpen && "rotate-180",
                )}
              />
            </button>

            <div
              className={cn(
                "absolute left-1/2 top-full w-60 -translate-x-1/2 pt-4 transition-all duration-150",
                isLandingOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0",
              )}
            >
              <div className="rounded-2xl border border-zinc-200 bg-white p-2 shadow-xl shadow-black/10 dark:border-white/10 dark:bg-[#05070d]">
                {LANDING_LINKS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 hover:text-violet-600 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-violet-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/o-nas" className="text-sm font-semibold text-zinc-700 transition hover:text-violet-600 dark:text-white/80 dark:hover:text-violet-300">
            O nas
          </Link>
          <Link href="/cennik" className="text-sm font-semibold text-zinc-700 transition hover:text-violet-600 dark:text-white/80 dark:hover:text-violet-300">
            Cennik
          </Link>
          <Link href="/news" className="text-sm font-semibold text-zinc-700 transition hover:text-violet-600 dark:text-white/80 dark:hover:text-violet-300">
            News
          </Link>
          <Link href="/dlaczego-strona" className="text-sm font-semibold text-zinc-700 transition hover:text-violet-600 dark:text-white/80 dark:hover:text-violet-300">
            Dlaczego strona?
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <ThemeToggle />
          <Link href="/#kontakt" className="hidden rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-violet-500 lg:inline-flex">
            Kontakt
          </Link>
          <button
            className="flex size-9 items-center justify-center rounded-xl border border-zinc-200 text-zinc-950 dark:border-white/10 dark:text-white lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Otwórz menu"
          >
            {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-950 shadow-xl transition-all duration-300 ease-in-out dark:border-white/10 dark:bg-[#05070d] dark:text-white lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0",
        )}
      >
        <nav className="flex flex-col divide-y divide-zinc-200 dark:divide-white/10">
          <div className="py-3">
            <div className="mb-2 px-1 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Strona główna
            </div>
            {LANDING_LINKS.map((item) => (
              <Link key={item.label} href={item.href} className="flex items-center justify-between rounded-xl px-1 py-3 text-base font-semibold" onClick={() => setIsMenuOpen(false)}>
                {item.label}
                <ChevronRight className="size-4 text-violet-500" />
              </Link>
            ))}
          </div>

          {[
            { label: "O nas", href: "/o-nas" },
            { label: "Cennik", href: "/cennik" },
            { label: "News", href: "/news" },
            { label: "Dlaczego strona?", href: "/dlaczego-strona" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center justify-between py-4 text-base font-semibold" onClick={() => setIsMenuOpen(false)}>
              {item.label}
              <ChevronRight className="size-4 text-violet-500" />
            </Link>
          ))}

          <Link href="/#kontakt" className="mt-4 rounded-xl bg-violet-600 px-5 py-3 text-center text-sm font-bold text-white" onClick={() => setIsMenuOpen(false)}>
            Kontakt
          </Link>
        </nav>
      </div>
    </section>
  );
};
