import Image from "next/image";
import DotPattern from "./DotPattern";
import ThemedImage from "./ThemedImage";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ backgroundColor: "var(--theme-bg)" }} />

      {/* Subtle dot pattern — top right */}
      <div className="absolute top-32 right-12 lg:right-24">
        <DotPattern rows={6} cols={8} size={10} gap={14} opacity={0.08} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text side */}
          <div>
            {/* Logo + accent dots */}
            <div className="flex items-center gap-5 mb-8 hero-logo">
              <Image
                src={`${BASE_PATH}/logo.png`}
                alt="FAMIS Co."
                width={120}
                height={120}
                className="theme-logo"
              />
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-accent-red" />
                <div className="w-3 h-3 rounded-full bg-accent-orange" />
                <div className="w-3 h-3 rounded-full bg-accent-yellow" />
                <div className="w-3 h-3 rounded-full bg-accent-blue" />
              </div>
            </div>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[0.9] hero-title"
              style={{ color: "var(--theme-fg)" }}
            >
              Ukus
              <br />
              <span style={{ color: "var(--theme-fg-subtle)" }}>kvaliteta</span>
            </h1>

            <p
              className="mt-8 text-lg md:text-xl max-w-lg leading-relaxed hero-subtitle"
              style={{ color: "var(--theme-fg-muted)" }}
            >
              Posvećeni proizvodnji vrhunskih mesnih proizvoda od 2001. godine.
              Tradicija, kvalitet, strast.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 hero-buttons">
              <a
                href="#proizvodi"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] rounded-[var(--radius-md)] transition-colors cursor-pointer"
                style={{
                  backgroundColor: "var(--theme-btn-bg)",
                  color: "var(--theme-btn-fg)",
                }}
              >
                Naši proizvodi
              </a>
              <a
                href="#o-nama"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] rounded-[var(--radius-md)] transition-colors cursor-pointer"
                style={{
                  border: "1px solid var(--theme-btn-outline-border)",
                  color: "var(--theme-fg)",
                }}
              >
                O nama
              </a>
            </div>
          </div>

          {/* Image side — hero product shot */}
          <div className="relative flex justify-center lg:justify-end hero-image">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <ThemedImage
                darkSrc="/products/hero-real.png"
                lightSrc="/products/hero-real-light.png"
                alt="FAMIS proizvodi — kompletna linija pakovanja"
                width={800}
                height={1000}
                className="w-full h-auto object-contain"
                priority
              />
              {/* Fade bottom into background */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24"
                style={{
                  background: "linear-gradient(to top, var(--theme-bg), transparent)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div
          className="w-px h-12 hero-scroll"
          style={{ backgroundColor: "var(--theme-fg-faint)" }}
        />
      </div>
    </section>
  );
}
