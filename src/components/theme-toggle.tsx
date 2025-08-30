import { Moon, Sun } from "lucide-react";
import * as React from "react";

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    // On mount, read theme from localStorage or system
    const stored = window.localStorage.getItem("theme");
    if (
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  React.useEffect(() => {
    if (!theme) return;
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [theme]);

  if (!theme) return null; // Avoid hydration mismatch

  return (
    <button
      aria-label="Toggle theme"
      className="p-2 rounded focus:outline-none focus:ring"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
