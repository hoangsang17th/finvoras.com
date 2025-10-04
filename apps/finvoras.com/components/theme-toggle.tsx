"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@repo/ui";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="secondary"
        size="icon"
        disabled
        className="opacity-50"
      >
        <SunIcon size={20} />
      </Button>
    );
  }

  if (resolvedTheme === "system") {
    return <Button variant="secondary" size="icon" />;
  }

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
    </Button>
  );
};

export default ThemeToggle;
