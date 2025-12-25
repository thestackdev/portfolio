"use client";

import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-bg-secondary text-text-muted transition-colors hover:border-border-hover hover:text-text-primary"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? <BsSun size={16} /> : <BsMoon size={16} />}
    </button>
  );
}
