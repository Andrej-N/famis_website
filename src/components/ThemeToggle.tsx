"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center w-14 h-7 rounded-full transition-colors duration-300 cursor-pointer border border-current/10"
      style={{
        backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
      }}
      aria-label={isDark ? "Prebaci na svetlu temu" : "Prebaci na tamnu temu"}
    >
      {/* Track icons */}
      <Sun
        size={12}
        className="absolute left-1.5 transition-opacity duration-300"
        style={{ opacity: isDark ? 0.3 : 0 }}
      />
      <Moon
        size={12}
        className="absolute right-1.5 transition-opacity duration-300"
        style={{ opacity: isDark ? 0 : 0.3 }}
      />

      {/* Thumb */}
      <span
        className="absolute w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm"
        style={{
          left: isDark ? "3px" : "calc(100% - 23px)",
          backgroundColor: isDark ? "#fff" : "#0a0a0a",
        }}
      >
        {isDark ? (
          <Moon size={11} className="text-black" />
        ) : (
          <Sun size={11} className="text-white" />
        )}
      </span>
    </button>
  );
}
