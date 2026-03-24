"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

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
};

const categories: ProductCategory[] = [
  { id: "all", name: "Sve", color: "#ffffff" },
  { id: "kobasice", name: "Kobasice", color: "#e53935" },
  { id: "dimljeni", name: "Dimljeni", color: "#f57c00" },
  { id: "suvomesnati", name: "Suvomesnati", color: "#1e88e5" },
  { id: "pastete", name: "Paštete", color: "#8d6e63" },
];

const products: Product[] = [
  { name: "Gril Kobasica", category: "kobasice", weight: "400g", dots: "#e53935", description: "Savršena za roštilj, sočna i začinjena" },
  { name: "Gril Kobasica Ljuta", category: "kobasice", weight: "400g", dots: "#e53935", description: "Ljuta varijanta za ljubitelje pikantnog" },
  { name: "Pikant Kobasica", category: "kobasice", weight: "400g", dots: "#e53935", description: "Izražen ukus paprike i začina" },
  { name: "Krajiška Kobasica", category: "kobasice", weight: "350g", dots: "#fdd835", description: "Tradicionalni recept iz Krajine" },
  { name: "Roštiljska Kobasica", category: "kobasice", weight: "400g", dots: "#1e88e5", description: "Klasika svakog dobrog roštilja" },
  { name: "Rustiko Kobasica", category: "kobasice", weight: "350g", dots: "#1e88e5", description: "Rustičan ukus, gruba mlevena struktura" },
  { name: "Viršla", category: "kobasice", weight: "300g", dots: "#f57c00", description: "Nežna, dimljena, za svaki dan" },
  { name: "Hrenovka", category: "kobasice", weight: "300g", dots: "#9e9e9e", description: "Klasična hrenovka, omiljena kod dece" },
  { name: "Barfalada Kobasica", category: "kobasice", weight: "350g", dots: "#e53935", description: "Bogat ukus sa blagom aromom dima" },
  { name: "Francuska Suva Kobasica", category: "suvomesnati", weight: "250g", dots: "#1e88e5", description: "Premium suva kobasica, dugo zrenje" },
  { name: "Francuska Suva sa Paprikom", category: "suvomesnati", weight: "250g", dots: "#1e88e5", description: "Sa dodatkom crvene paprike" },
  { name: "Dimljena Šunka", category: "dimljeni", weight: "Per kg", dots: "#f57c00", description: "Tradicionalno dimljena na bukovom drvetu" },
  { name: "Dimljena Slanina", category: "dimljeni", weight: "Per kg", dots: "#f57c00", description: "Hrskava, aromatična, svestrana" },
  { name: "Cotto Šunka", category: "dimljeni", weight: "Per kg", dots: "#f57c00", description: "Kuvana šunka vrhunskog kvaliteta" },
  { name: "Jetrena Pašteta", category: "pastete", weight: "100g", dots: "#8d6e63", description: "Kremasta, od svežih jetrica" },
  { name: "Pašteta sa Začinima", category: "pastete", weight: "100g", dots: "#8d6e63", description: "Obogaćena mešavinom začina" },
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
      <div className="group product-card bg-surface rounded-[var(--radius-lg)] overflow-hidden hover:bg-surface-hover">
        {/* Dot pattern visual */}
        <div className="relative aspect-[4/3] bg-[#0d0d0d] flex items-center justify-center overflow-hidden">
          {/* Accent glow on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at center, ${product.dots}08 0%, transparent 70%)`,
            }}
          />
          <div className="grid grid-cols-5 gap-3 opacity-20 group-hover:opacity-35 transition-opacity duration-300">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: i < 8 ? product.dots : "white",
                  opacity: i < 8 ? 0.8 : 0.15,
                }}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <ProductDots color={product.dots} />
            <span className="text-white/30 text-xs uppercase tracking-wider">
              {product.weight}
            </span>
          </div>
          <h3 className="text-white font-semibold text-base uppercase tracking-wide">
            {product.name}
          </h3>
          <p className="text-white/40 text-sm mt-1">{product.description}</p>
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
    <section id="proizvodi" className="py-28 lg:py-36 bg-[#070707]">
      {/* Section divider */}
      <div className="absolute left-0 right-0 section-divider" style={{ marginTop: "-112px" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-white/40 text-sm uppercase tracking-[0.2em] mb-4">
              Proizvodi
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
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
                    active === cat.id ? "rgba(255,255,255,0.1)" : "transparent",
                  color: active === cat.id ? "#ffffff" : "rgba(255,255,255,0.4)",
                  border:
                    active === cat.id
                      ? "1px solid rgba(255,255,255,0.2)"
                      : "1px solid rgba(255,255,255,0.08)",
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
