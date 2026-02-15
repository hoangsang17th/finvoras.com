"use client";

import { useEffect } from "react";

type ScrollToSectionProps = {
  id: string;
};

export default function ScrollToSection({ id }: ScrollToSectionProps) {
  useEffect(() => {
    const target = document.getElementById(id);
    if (!target) return;

    // Smooth scroll after paint to ensure layout is ready.
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [id]);

  return null;
}
