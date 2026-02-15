"use client";

import { useEffect } from "react";

export default function LocaleHtml({ lang }: { lang: "en" | "vi" }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
