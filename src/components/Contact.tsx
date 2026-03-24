import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "./ContactForm";
import ScrollReveal from "./ScrollReveal";

const info = [
  {
    icon: MapPin,
    label: "Adresa",
    value: "Beograd, Srbija",
    detail: "Industriska zona",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "011 314 93 88",
    href: "tel:+381113149388",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@famis.rs",
    href: "mailto:info@famis.rs",
  },
  {
    icon: Clock,
    label: "Radno vreme",
    value: "Pon - Pet: 08:00 - 16:00",
  },
];

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="relative py-28 lg:py-36"
      style={{ backgroundColor: "var(--theme-bg-alt)" }}
    >
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info side */}
          <div>
            <ScrollReveal>
              <p
                className="text-sm uppercase tracking-[0.2em] mb-4"
                style={{ color: "var(--theme-fg-subtle)" }}
              >
                Kontakt
              </p>
              <h2
                className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-[1.1]"
                style={{ color: "var(--theme-fg)" }}
              >
                Stupite u
                <br />
                kontakt
              </h2>
              <p
                className="mt-6 text-lg max-w-md"
                style={{ color: "var(--theme-fg-muted)" }}
              >
                Za sva pitanja u vezi naših proizvoda, saradnje ili distribucije,
                stojimo vam na raspolaganju.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="mt-12 space-y-8">
                {info.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <Icon
                        className="w-5 h-5 mt-0.5 shrink-0"
                        strokeWidth={1.5}
                        style={{ color: "var(--theme-fg-subtle)" }}
                      />
                      <div>
                        <p
                          className="text-xs uppercase tracking-wider mb-1"
                          style={{ color: "var(--theme-fg-subtle)" }}
                        >
                          {item.label}
                        </p>
                        <p
                          className="font-medium"
                          style={{ color: "var(--theme-fg)" }}
                        >
                          {item.value}
                        </p>
                        {"detail" in item && item.detail && (
                          <p
                            className="text-sm mt-0.5"
                            style={{ color: "var(--theme-fg-subtle)" }}
                          >
                            {item.detail}
                          </p>
                        )}
                      </div>
                    </div>
                  );

                  if ("href" in item && item.href) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block hover:opacity-80 transition-opacity"
                      >
                        {content}
                      </a>
                    );
                  }
                  return <div key={item.label}>{content}</div>;
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Contact form */}
          <ScrollReveal delay={150}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
