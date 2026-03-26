"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import ThemedImage from "./ThemedImage";

type ProductCategory = {
  id: string;
  name: string;
  color: string;
};

type Product = {
  name: string;
  category: string;
  weight: string;
  dots: string;
  description: string;
  darkImg: string;
  lightImg: string;
};

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const productImages = [
  { dark: "/products/francuska_suva_kobasica_black.png", light: "/products/francuska_suva_kobasica_white.png" },
  { dark: "/products/dimljena_slanina_black.png", light: "/products/dimljena_slanina_white.png" },
  { dark: "/products/cotto_sunka_black.png", light: "/products/cotto_sunka_white.png" },
];

const categories: ProductCategory[] = [
  { id: "all", name: "Sve", color: "#ffffff" },
  { id: "kobasice", name: "Kobasice", color: "#e53935" },
  { id: "dimljeni", name: "Dimljeni", color: "#f57c00" },
  { id: "suvomesnati", name: "Suvomesnati", color: "#1e88e5" },
  { id: "pastete", name: "Paštete", color: "#8d6e63" },
];

function assignImage(index: number) {
  const img = productImages[index % productImages.length];
  return { darkImg: img.dark, lightImg: img.light };
}

const products: Product[] = [
  { name: "Gril Kobasica", category: "kobasice", weight: "400g", dots: "#e53935", description: "Savršena za roštilj, sočna i začinjena", ...assignImage(0) },
  { name: "Gril Kobasica Ljuta", category: "kobasice", weight: "400g", dots: "#e53935", description: "Ljuta varijanta za ljubitelje pikantnog", ...assignImage(1) },
  { name: "Pikant Kobasica", category: "kobasice", weight: "400g", dots: "#e53935", description: "Izražen ukus paprike i začina", ...assignImage(2) },
  { name: "Krajiška Kobasica", category: "kobasice", weight: "350g", dots: "#fdd835", description: "Tradicionalni recept iz Krajine", ...assignImage(0) },
  { name: "Roštiljska Kobasica", category: "kobasice", weight: "400g", dots: "#1e88e5", description: "Klasika svakog dobrog roštilja", ...assignImage(1) },
  { name: "Rustiko Kobasica", category: "kobasice", weight: "350g", dots: "#1e88e5", description: "Rustičan ukus, gruba mlevena struktura", ...assignImage(2) },
  { name: "Viršla", category: "kobasice", weight: "300g", dots: "#f57c00", description: "Nežna, dimljena, za svaki dan", ...assignImage(0) },
  { name: "Hrenovka", category: "kobasice", weight: "300g", dots: "#9e9e9e", description: "Klasična hrenovka, omiljena kod dece", ...assignImage(1) },
  { name: "Barfalada Kobasica", category: "kobasice", weight: "350g", dots: "#e53935", description: "Bogat ukus sa blagom aromom dima", ...assignImage(2) },
  { name: "Francuska Suva Kobasica", category: "suvomesnati", weight: "250g", dots: "#1e88e5", description: "Premium suva kobasica, dugo zrenje", ...assignImage(0) },
  { name: "Francuska Suva sa Paprikom", category: "suvomesnati", weight: "250g", dots: "#1e88e5", description: "Sa dodatkom crvene paprike", ...assignImage(0) },
  { name: "Dimljena Šunka", category: "dimljeni", weight: "Per kg", dots: "#f57c00", description: "Tradicionalno dimljena na bukovom drvetu", ...assignImage(1) },
  { name: "Dimljena Slanina", category: "dimljeni", weight: "Per kg", dots: "#f57c00", description: "Hrskava, aromatična, svestrana", ...assignImage(1) },
  { name: "Cotto Šunka", category: "dimljeni", weight: "Per kg", dots: "#f57c00", description: "Kuvana šunka vrhunskog kvaliteta", ...assignImage(2) },
  { name: "Jetrena Pašteta", category: "pastete", weight: "100g", dots: "#8d6e63", description: "Kremasta, od svežih jetrica", ...assignImage(2) },
  { name: "Pašteta sa Začinima", category: "pastete", weight: "100g", dots: "#8d6e63", description: "Obogaćena mešavinom začina", ...assignImage(0) },
];

function ProductDots({ color, count = 4 }: { color: string; count?: number }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <ScrollReveal delay={index * 80}>
      <div
        className="group product-card rounded-[var(--radius-lg)] overflow-hidden"
        style={{ backgroundColor: "var(--theme-surface)" }}
      >
        {/* Product image */}
        <div
          className="relative aspect-[3/4] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "var(--theme-surface-card)" }}
        >
          {/* Accent glow on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at center, ${product.dots}15 0%, transparent 70%)`,
            }}
          />
          <ThemedImage
            darkSrc={product.darkImg}
            lightSrc={product.lightImg}
            alt={product.name}
            width={400}
            height={533}
            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <ProductDots color={product.dots} />
            <span
              className="text-xs uppercase tracking-wider"
              style={{ color: "var(--theme-fg-faint)" }}
            >
              {product.weight}
            </span>
          </div>
          <h3
            className="font-semibold text-base uppercase tracking-wide"
            style={{ color: "var(--theme-fg)" }}
          >
            {product.name}
          </h3>
          <p
            className="text-sm mt-1"
            style={{ color: "var(--theme-fg-subtle)" }}
          >
            {product.description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Products() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <section
      id="proizvodi"
      className="py-28 lg:py-36"
      style={{ backgroundColor: "var(--theme-bg-alt)" }}
    >
      {/* Section divider */}
      <div className="absolute left-0 right-0 section-divider" style={{ marginTop: "-112px" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16">
            <p
              className="text-sm uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--theme-fg-subtle)" }}
            >
              Proizvodi
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold uppercase tracking-tight"
              style={{ color: "var(--theme-fg)" }}
            >
              Naš asortiman
            </h2>
          </div>
        </ScrollReveal>

        {/* Category filter */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className="cursor-pointer px-5 py-2.5 text-sm uppercase tracking-[0.1em] rounded-[var(--radius-md)] transition-all duration-200"
                style={{
                  backgroundColor:
                    active === cat.id
                      ? "var(--theme-filter-active-bg)"
                      : "transparent",
                  color:
                    active === cat.id
                      ? "var(--theme-filter-active-fg)"
                      : "var(--theme-filter-inactive-fg)",
                  border:
                    active === cat.id
                      ? "1px solid var(--theme-filter-active-border)"
                      : "1px solid var(--theme-filter-inactive-border)",
                }}
              >
                <span className="flex items-center gap-2">
                  {cat.id !== "all" && (
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: cat.color }}
                    />
                  )}
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
