"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const hashToRoute: Record<string, string> = {
  about: "/about",
  projects: "/projects",
  experience: "/experience",
  skills: "/skills",
  contact: "/contact",
};

export default function HashRedirect({ locale }: { locale: "en" | "vi" }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const basePath = `/${locale}`;

  useEffect(() => {
    if (pathname !== basePath) return;
    const hash = window.location.hash.replace("#", "");
    const target = hashToRoute[hash];
    if (!target) return;

    const query = searchParams?.toString();
    const url = query ? `${basePath}${target}?${query}` : `${basePath}${target}`;
    router.replace(url, { scroll: false });
  }, [basePath, pathname, router, searchParams]);

  return null;
}
