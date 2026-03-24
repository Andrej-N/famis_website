import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3" aria-label="FAMIS - Početna">
            <Image
              src="/logo.png"
              alt="FAMIS Co. logo"
              width={36}
              height={36}
              className="invert brightness-200 opacity-40"
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
                className="text-white/30 text-sm hover:text-white/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-white/20 text-sm">
            &copy; {new Date().getFullYear()} FAMIS Co.
          </p>
        </div>
      </div>
    </footer>
  );
}
