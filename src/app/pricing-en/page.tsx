"use client";

import { useEffect } from "react";

import PricingPage from "../cennik/page";

export default function PricingEnPage() {
  useEffect(() => {
    window.localStorage.setItem("locale", "en");
    window.dispatchEvent(new Event("localechange"));
  }, []);

  return <PricingPage />;
}
