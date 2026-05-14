"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ITEMS = [
  { label: "Oferta", href: "/#oferta" },
  { label: "Realizacje", href: "/#realizacje" },
  { label: "Proces", href: "/#proces" },
  { label: "Kontakt", href: "/#kontakt" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="absolute left-1/2 top-5 z-50 w-[min(92%,760px)] -translate-x-1/2 rounded-4xl border border-border/70 bg-background/80 shadow-xl shadow-black/5 backdrop-blur-xl transition-all duration-300 lg:top-8 dark:bg-[#080a12]/80 dark:shadow-black/30">
      <div className="flex items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex shrink-0 items-center text-2xl font-black tracking-tight">
          lumin<span className="text-violet-500">so.</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/#kontakt" className="hidden sm:block">
            <Button className="rounded-xl bg-violet-600 text-white hover:bg-violet-500">
              Wycena
            </Button>
          </Link>

          <button
            className="inline-flex size-9 items-center justify-center rounded-xl border border-border text-muted-foreground md:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-label="Otwórz menu"
          >
            {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-[calc(100%+0.75rem)] rounded-3xl border border-border bg-background p-5 shadow-xl transition-all duration-300 md:hidden dark:bg-[#080a12]",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0",
        )}
      >
        <nav className="grid gap-2">
          {ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-3 text-base font-semibold transition hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#kontakt"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 rounded-xl bg-violet-600 px-4 py-3 text-center font-bold text-white"
          >
            Zapytaj o wycenę
          </Link>
        </nav>
      </div>
    </section>
  );
};
