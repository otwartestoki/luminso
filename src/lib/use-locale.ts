"use client";

import { useEffect, useState } from "react";

export type Locale = "pl" | "en";

export function useLocale(defaultLocale: Locale = "pl") {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const readLocale = () => {
      const stored = window.localStorage.getItem("locale");
      setLocale(stored === "en" ? "en" : "pl");
    };

    readLocale();
    window.addEventListener("localechange", readLocale);
    window.addEventListener("storage", readLocale);

    return () => {
      window.removeEventListener("localechange", readLocale);
      window.removeEventListener("storage", readLocale);
    };
  }, []);

  return locale;
}
