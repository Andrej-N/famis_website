"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

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
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          aria-label="FAMIS - Početna"
        >
          <Image
            src="/logo.png"
            alt="FAMIS Co. logo"
            width={40}
            height={40}
            className="invert brightness-200"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/60 text-sm uppercase tracking-[0.15em] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white cursor-pointer p-2"
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0a0a0a] border-t border-white/5 px-6 py-8">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white/60 text-lg uppercase tracking-[0.15em] hover:text-white transition-colors"
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
