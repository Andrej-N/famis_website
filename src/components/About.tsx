import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import AnimatedStat from "./AnimatedStat";
import ThemedImage from "./ThemedImage";

export default function About() {
  return (
    <section id="o-nama" className="relative py-28 lg:py-36">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Full-width panoramic product image — hidden on mobile */}
        <ScrollReveal className="hidden lg:block">
          <div className="relative w-full mb-20 rounded-[var(--radius-lg)] overflow-hidden">
            <ThemedImage
              darkSrc="/products/hero.png"
              lightSrc="/products/hero-light.png"
              alt="FAMIS kompletna linija proizvoda"
              width={1920}
              height={800}
              className="w-full h-auto object-contain"
              sizes="100vw"
            />
            <div
              className="absolute inset-y-0 left-0 w-20"
              style={{ background: "linear-gradient(to right, var(--theme-bg), transparent)" }}
            />
            <div
              className="absolute inset-y-0 right-0 w-20"
              style={{ background: "linear-gradient(to left, var(--theme-bg), transparent)" }}
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* About image (portrait) — desktop only */}
          <ScrollReveal className="hidden lg:block">
            <div className="relative aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden">
              <ThemedImage
                darkSrc="/products/about-second.png"
                lightSrc="/products/about-second-light.png"
                alt="FAMIS asortiman proizvoda"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </ScrollReveal>

          {/* Text */}
          <div>
            <ScrollReveal>
              <p
                className="text-sm uppercase tracking-[0.2em] mb-4"
                style={{ color: "var(--theme-fg-subtle)" }}
              >
                O nama
              </p>
              <h2
                className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-[1.1]"
                style={{ color: "var(--theme-fg)" }}
              >
                Tradicija koja
                <br />
                se oseti
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="mt-8 space-y-6">
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--theme-fg-muted)" }}
                >
                  FAMIS mesna industrija od svog osnivanja neguje posvećenost
                  kvalitetu koja se oseti u svakom zalogaju. Naši proizvodi nastaju
                  spajanjem tradicionalnih recepata i savremene tehnologije.
                </p>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--theme-fg-muted)" }}
                >
                  Svaki proizvod prolazi stroge kontrole kvaliteta. Ne pravimo
                  kompromise — jer verujemo da potrošači zaslužuju samo najbolje.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={300}>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <AnimatedStat value="20+" label="Godina iskustva" />
                <AnimatedStat value="25+" label="Proizvoda" />
                <AnimatedStat value="100%" label="Kvalitet" />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Landscape image — mobile only, below text */}
        <ScrollReveal className="lg:hidden mt-12">
          <div className="relative w-full rounded-[var(--radius-lg)] overflow-hidden">
            <ThemedImage
              darkSrc="/products/hero.png"
              lightSrc="/products/hero-light.png"
              alt="FAMIS kompletna linija proizvoda"
              width={1920}
              height={800}
              className="w-full h-auto object-contain"
              sizes="100vw"
            />
            <div
              className="absolute inset-y-0 left-0 w-12"
              style={{ background: "linear-gradient(to right, var(--theme-bg), transparent)" }}
            />
            <div
              className="absolute inset-y-0 right-0 w-12"
              style={{ background: "linear-gradient(to left, var(--theme-bg), transparent)" }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
