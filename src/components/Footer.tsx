"use client";

import Image from "next/image";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Footer() {
  return (
    <footer
      className="py-12"
      style={{ borderTop: "1px solid var(--theme-nav-border)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3" aria-label="FAMIS - Početna">
            <Image
              src={`${BASE_PATH}/logo.png`}
              alt="FAMIS Co. logo"
              width={36}
              height={36}
              className="theme-logo opacity-60"
            />
          </a>

          {/* Links */}
          <div className="flex items-center gap-8">
            {[
              { href: "#o-nama", label: "O nama" },
              { href: "#proizvodi", label: "Proizvodi" },
              { href: "#kontakt", label: "Kontakt" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors"
                style={{ color: "var(--theme-fg-subtle)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--theme-fg-muted)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--theme-fg-faint)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm" style={{ color: "var(--theme-fg-subtle)" }}>
            &copy; {new Date().getFullYear()} FAMIS Co.
          </p>
        </div>
      </div>
    </footer>
  );
}
