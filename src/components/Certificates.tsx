import { ShieldCheck, Award, Leaf } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const certificates = [
  {
    icon: ShieldCheck,
    name: "HACCP",
    description:
      "Sertifikovan sistem upravljanja bezbednošću hrane u svim fazama proizvodnje.",
  },
  {
    icon: Award,
    name: "ISO 9001",
    description:
      "Međunarodni standard za sisteme upravljanja kvalitetom.",
  },
  {
    icon: Leaf,
    name: "Halal",
    description:
      "Sertifikovana halal proizvodnja prema najvišim standardima.",
  },
];

export default function Certificates() {
  return (
    <section id="sertifikati" className="relative py-28 lg:py-36">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-white/40 text-sm uppercase tracking-[0.2em] mb-4">
              Sertifikati
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
              Garancija kvaliteta
            </h2>
          </div>
        </ScrollReveal>

        {/* Certificates grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <ScrollReveal key={cert.name} delay={i * 120}>
                <div className="border border-white/8 rounded-[var(--radius-lg)] p-8 lg:p-10 hover:border-white/15 transition-all duration-300 hover:translate-y-[-2px]">
                  <Icon className="w-8 h-8 text-white/80 mb-6" strokeWidth={1.5} />
                  <h3 className="text-white text-xl font-semibold uppercase tracking-wide mb-3">
                    {cert.name}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
