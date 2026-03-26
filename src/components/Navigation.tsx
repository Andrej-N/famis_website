"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const links = [
  { href: "#o-nama", label: "O nama" },
  { href: "#proizvodi", label: "Proizvodi" },
  { href: "#sertifikati", label: "Sertifikati" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md"
          : "bg-transparent border-b border-transparent"
      }`}
      style={
        scrolled
          ? {
              backgroundColor: "var(--theme-nav-bg)",
              borderBottom: "1px solid var(--theme-nav-border)",
            }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          aria-label="FAMIS - Početna"
        >
          <Image
            src={`${BASE_PATH}/logo.png`}
            alt="FAMIS Co. logo"
            width={40}
            height={40}
            className="theme-logo"
          />
        </a>

        {/* Desktop links + toggle */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.15em] transition-colors"
              style={{ color: "var(--theme-fg-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--theme-fg)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--theme-fg-muted)")
              }
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 cursor-pointer"
            style={{ color: "var(--theme-fg)" }}
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="px-6 py-8"
          style={{
            backgroundColor: "var(--theme-bg)",
            borderTop: "1px solid var(--theme-nav-border)",
          }}
        >
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg uppercase tracking-[0.15em] transition-colors"
                style={{ color: "var(--theme-fg-muted)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
