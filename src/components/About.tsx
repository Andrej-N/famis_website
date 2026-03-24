import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import AnimatedStat from "./AnimatedStat";

export default function About() {
  return (
    <section id="o-nama" className="relative py-28 lg:py-36">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Full-width panoramic product image — hidden on mobile */}
        <ScrollReveal className="hidden lg:block">
          <div className="relative w-full mb-20 rounded-[var(--radius-lg)] overflow-hidden">
            <Image
              src="/products/hero.png"
              alt="FAMIS kompletna linija proizvoda"
              width={1920}
              height={800}
              className="w-full h-auto object-contain"
              sizes="100vw"
            />
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* About image (portrait) — desktop only */}
          <ScrollReveal className="hidden lg:block">
            <div className="relative aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden">
              <Image
                src="/products/about-second.png"
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
              <p className="text-white/40 text-sm uppercase tracking-[0.2em] mb-4">
                O nama
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight leading-[1.1]">
                Tradicija koja
                <br />
                se oseti
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="mt-8 space-y-6">
                <p className="text-white/60 text-lg leading-relaxed">
                  FAMIS mesna industrija od svog osnivanja neguje posvećenost
                  kvalitetu koja se oseti u svakom zalogaju. Naši proizvodi nastaju
                  spajanjem tradicionalnih recepata i savremene tehnologije.
                </p>
                <p className="text-white/60 text-lg leading-relaxed">
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
            <Image
              src="/products/hero.png"
              alt="FAMIS kompletna linija proizvoda"
              width={1920}
              height={800}
              className="w-full h-auto object-contain"
              sizes="100vw"
            />
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
