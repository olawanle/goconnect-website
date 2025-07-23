"use client";
import { useEffect, useState, ReactNode } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem("theme") : null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(stored);
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Inject the toggle button into the nav's .items-center div
  // We'll do this by cloning children and looking for the nav
  // For simplicity, assume nav is always present and has .items-center div
  // We'll use a regex replace on the rendered HTML string
  // But in a real app, you'd use context or a more robust approach

  // Instead, let's wrap children and provide a ThemeToggle context if needed
  // For now, just render children and a fixed-position toggle button for reliability

  return (
    <>
      {children}
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gray-800 text-white hover:bg-green-400 hover:text-black shadow-lg transition"
        type="button"
      >
        {theme === "dark" ? (
          // Sun icon
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0 4a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1zm0-18a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1zm10 8a1 1 0 0 1-1-1h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zm-18 0a1 1 0 0 1-1-1H2a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zm15.07 7.07a1 1 0 0 1-1.41 0l-.71-.71a1 1 0 1 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41zm-12.14 0a1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1-1.41 0zm12.14-12.14a1 1 0 0 1 0 1.41l-.71.71a1 1 0 1 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 0zm-12.14 0a1 1 0 0 1 1.41 0l.71.71a1 1 0 1 1-1.41 1.41l-.71-.71a1 1 0 0 1 0-1.41z"/></svg>
        ) : (
          // Moon icon
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 0 1 12.21 3a1 1 0 0 0-1.13 1.32A7 7 0 1 1 3.34 14.92a1 1 0 0 0-1.32 1.13A9 9 0 1 0 21 12.79z"/></svg>
        )}
      </button>
    </>
  );
} 