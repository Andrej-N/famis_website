"use client";

import { useState, useEffect } from "react";
import { X, BarChart3 } from "lucide-react";

export default function MarketingPlan() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Sticky bottom button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium uppercase tracking-[0.15em] cursor-pointer transition-all duration-300 hover:scale-105"
        style={{
          backgroundColor: "var(--theme-btn-bg)",
          color: "var(--theme-btn-fg)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        }}
      >
        <BarChart3 size={18} />
        Marketing Plan / Mesec 1 &amp; 2
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          style={{ backgroundColor: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          {/* Modal container */}
          <div
            className="relative w-full max-w-4xl rounded-[var(--radius-lg)] overflow-hidden flex flex-col"
            style={{
              backgroundColor: "var(--theme-bg)",
              border: "1px solid var(--theme-border)",
              height: "min(90vh, 860px)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
            }}
          >
            {/* Top bar */}
            <div
              className="flex items-center justify-between px-6 py-3 shrink-0"
              style={{ borderBottom: "1px solid var(--theme-border)" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-red" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-orange" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-yellow" />
                </div>
                <span className="text-xs uppercase tracking-[0.15em]" style={{ color: "var(--theme-fg-subtle)" }}>
                  FAMIS Marketing Plan
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-[var(--radius-sm)] transition-colors cursor-pointer"
                style={{ color: "var(--theme-fg-muted)" }}
                aria-label="Zatvori"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-6 md:px-12 py-8 md:py-12 marketing-plan-content">

              {/* TITLE */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[0.95] mb-2" style={{ color: "var(--theme-fg)" }}>
                FAMIS / Marketing Plan: Mesec 1 &amp; 2
              </h1>
              <h2 className="text-lg md:text-xl uppercase tracking-[0.15em] font-light mb-8" style={{ color: "var(--theme-fg-subtle)" }}>
                &ldquo;Upoznaj Famis&rdquo; / Faza pokretanja
              </h2>

              <div className="h-px w-full mb-10" style={{ backgroundColor: "var(--theme-divider)" }} />

              {/* ZAŠTO MARKETING */}
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-6" style={{ color: "var(--theme-fg)" }}>
                Zašto marketing, zašto sad?
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--theme-fg-muted)" }}>
                Famis ima nešto što 90% konkurencije nema: <strong style={{ color: "var(--theme-fg)" }}>proizvod koji zaista može da podnese transparentnost</strong>. Bez MSM mesa, austrijska licenca (Anton Riepl, 120+ godina iskustva), HACCP i ISO 22000 sertifikati, mali batch proizvodnja koja garantuje kvalitet.
              </p>
              <p className="text-lg font-semibold mb-6" style={{ color: "var(--theme-fg)" }}>
                Problem? Skoro niko to ne zna.
              </p>
              <p className="text-base mb-4" style={{ color: "var(--theme-fg-muted)" }}>Istraživanja jasno pokazuju:</p>
              <ul className="space-y-2 mb-4 text-base" style={{ color: "var(--theme-fg-muted)" }}>
                <li>• <strong style={{ color: "var(--theme-fg)" }}>93% potrošača</strong> želi da zna šta je u hrani koju jede <em style={{ color: "var(--theme-fg-subtle)" }}>(Omnivore Agency, 2024)</em></li>
                <li>• <strong style={{ color: "var(--theme-fg)" }}>75% potrošača</strong> je spremno da <strong style={{ color: "var(--theme-fg)" }}>plati VIŠE</strong> za proizvode sa čistom deklaracijom <em style={{ color: "var(--theme-fg-subtle)" }}>(SupplySide FBJ)</em></li>
                <li>• <strong style={{ color: "var(--theme-fg)" }}>65% potrošača</strong> čita nutritivne etikete pre kupovine <em style={{ color: "var(--theme-fg-subtle)" }}>(TraceOne)</em></li>
              </ul>
              <p className="text-base mb-8" style={{ color: "var(--theme-fg-muted)" }}>
                Famis već ima čistu deklaraciju, samo treba da je pokaže svetu. Ova dva meseca su temelj za sve što dolazi posle.
              </p>

              <div className="h-px w-full mb-10" style={{ backgroundColor: "var(--theme-divider)" }} />

              {/* MESEC 1 */}
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-8" style={{ color: "var(--theme-fg)" }}>
                Mesec 1: Postavljanje temelja
              </h2>

              {/* 1. Rebrand */}
              <h3 className="text-xl font-bold mb-4" style={{ color: "var(--theme-fg)" }}>1. Rebrand digitalne prisutnosti</h3>

              <p className="text-base font-semibold mb-3" style={{ color: "var(--theme-fg)" }}>Instagram (@famis)</p>
              <ul className="space-y-2 mb-6 text-base" style={{ color: "var(--theme-fg-muted)" }}>
                <li>• Profesionalna bio sa jasnim USP-om (&ldquo;Bez kompromisa od 2001. Austrijski kvalitet, srpska duša.&rdquo;)</li>
                <li>• Story Highlights: O Nama | Proizvodi | Recepti | Fabrika</li>
                <li>• Vizuelni identitet: konzistentan template sistem za sve postove, srebrno-belo-crni ton brenda</li>
                <li>• Početak redovnog postinga: <strong style={{ color: "var(--theme-fg)" }}>4-5 objava nedeljno + daily Stories</strong></li>
              </ul>

              <p className="text-base font-semibold mb-3" style={{ color: "var(--theme-fg)" }}>Šta objavljujemo:</p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--theme-border)" }}>
                      <th className="text-left py-3 pr-4 font-semibold uppercase tracking-wider text-xs" style={{ color: "var(--theme-fg-subtle)" }}>Dan</th>
                      <th className="text-left py-3 px-4 font-semibold uppercase tracking-wider text-xs" style={{ color: "var(--theme-fg-subtle)" }}>Format</th>
                      <th className="text-left py-3 pl-4 font-semibold uppercase tracking-wider text-xs" style={{ color: "var(--theme-fg-subtle)" }}>Primer</th>
                    </tr>
                  </thead>
                  <tbody style={{ color: "var(--theme-fg-muted)" }}>
                    <tr style={{ borderBottom: "1px solid var(--theme-border)" }}>
                      <td className="py-3 pr-4 font-semibold" style={{ color: "var(--theme-fg)" }}>Ponedeljak</td>
                      <td className="py-3 px-4">Proizvod u fokusu, profesionalna food fotografija</td>
                      <td className="py-3 pl-4">Dimljena šunka na dasci sa začinima, close-up deklaracije</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--theme-border)" }}>
                      <td className="py-3 pr-4 font-semibold" style={{ color: "var(--theme-fg)" }}>Sreda</td>
                      <td className="py-3 px-4">Kratak recept (Reels, 30-60 sec)</td>
                      <td className="py-3 pl-4">&ldquo;3 sastojka, 5 minuta, sendvič za školu sa Famis šunkom&rdquo;</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--theme-border)" }}>
                      <td className="py-3 pr-4 font-semibold" style={{ color: "var(--theme-fg)" }}>Petak</td>
                      <td className="py-3 px-4">Edukativni carousel, &ldquo;Bez Kompromisa&rdquo; serija</td>
                      <td className="py-3 pl-4">&ldquo;Šta zapravo piše na deklaraciji vašeg omiljenog mesnog proizvoda?&rdquo;</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--theme-border)" }}>
                      <td className="py-3 pr-4 font-semibold" style={{ color: "var(--theme-fg)" }}>Vikend</td>
                      <td className="py-3 px-4">Interaktivan sadržaj: ankete, kvizovi, behind-the-scenes</td>
                      <td className="py-3 pl-4">&ldquo;Pogodite koliko sati se dimi naša dimljena vešalica&rdquo;</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-base font-semibold mb-3" style={{ color: "var(--theme-fg)" }}>Facebook (facebook.com/famis.co.doo)</p>
              <ul className="space-y-2 mb-4 text-base" style={{ color: "var(--theme-fg-muted)" }}>
                <li>• Osvežavanje vizuala (cover, profilna, about sekcija)</li>
                <li>• 3-4 objave nedeljno, fokus na porodičnu publiku 35-65+</li>
                <li>• Pokretanje Famis zajednice za ljubitelje dobre hrane</li>
                <li>• Priče iz fabrike, storytelling format koji gradi poverenje</li>
              </ul>

              {/* Blockquote */}
              <div className="rounded-[var(--radius-md)] p-5 mb-8" style={{ backgroundColor: "rgba(229, 57, 53, 0.06)", borderLeft: "3px solid var(--color-accent-red)" }}>
                <p className="text-sm" style={{ color: "var(--theme-fg-muted)" }}>
                  <strong style={{ color: "var(--color-accent-red)" }}>Zašto ovo radi:</strong> Chipster (snack brend) je identičnom strategijom (10 postova + 16 stories mesečno) postigao <strong style={{ color: "var(--theme-fg)" }}>82% rast engagement-a</strong> i <strong style={{ color: "var(--theme-fg)" }}>302% rast organskog reach-a</strong> na Facebooku. <em>(Mix Digital Agency, Case Study)</em>
                </p>
              </div>

              {/* 2. TikTok */}
              <h3 className="text-xl font-bold mb-4" style={{ color: "var(--theme-fg)" }}>2. Kreiranje TikTok naloga (@famis)</h3>
              <p className="text-base mb-4" style={{ color: "var(--theme-fg-muted)" }}>
                Ovo je <strong style={{ color: "var(--theme-fg)" }}>ključna platforma za publiku 7-30 godina</strong>.
              </p>

              <p className="text-base font-semibold mb-3" style={{ color: "var(--theme-fg)" }}>Prvih 5 videa, serijal &ldquo;Znaš li šta jedeš?&rdquo;</p>
              <ul className="space-y-2 mb-4 text-base" style={{ color: "var(--theme-fg-muted)" }}>
                <li>• Kratki edukativni/shock-value klipovi (15-30 sec)</li>
                <li>• Format: uporedimo generičku deklaraciju sa Famis deklaracijom, bez imenovanja konkurencije</li>
                <li>• Ton: direktan, iskren, malo provokativan</li>
              </ul>

              <p className="text-base font-semibold mb-3" style={{ color: "var(--theme-fg)" }}>Dodatni sadržaj:</p>
              <ul className="space-y-2 mb-4 text-base" style={{ color: "var(--theme-fg-muted)" }}>
                <li>• Speed recepti sa Famis proizvodima</li>
                <li>• &ldquo;Dan u fabrici&rdquo;, employee-generated content</li>
                <li>• Behind-the-scenes: kako se dimi meso, austrijska oprema, proces pakovanja</li>
              </ul>

              <div className="rounded-[var(--radius-md)] p-5 mb-8" style={{ backgroundColor: "rgba(245, 124, 0, 0.06)", borderLeft: "3px solid var(--color-accent-orange)" }}>
                <p className="text-sm mb-2" style={{ color: "var(--theme-fg-muted)" }}><strong style={{ color: "var(--color-accent-orange)" }}>Zašto ovo radi:</strong></p>
                <ul className="space-y-2 text-sm" style={{ color: "var(--theme-fg-muted)" }}>
                  <li>• <strong style={{ color: "var(--theme-fg)" }}>Nerdy Nuts</strong>, mali porodični brend kikiriki putera uložio $2,500 u TikTok influensere i dostigao <strong style={{ color: "var(--theme-fg)" }}>$500,000 mesečne prodaje</strong>. <em>(Popular Pays)</em></li>
                  <li>• <strong style={{ color: "var(--theme-fg)" }}>Idahoan Foods</strong>: kampanja planirana za 2M pregleda ostvarila <strong style={{ color: "var(--theme-fg)" }}>14 miliona pregleda</strong>, sa engagement rate-om od <strong style={{ color: "var(--theme-fg)" }}>20.13%</strong>. <em>(Influencer Marketing Hub)</em></li>
                  <li>• <strong style={{ color: "var(--theme-fg)" }}>CM Foods</strong>: ostvario <strong style={{ color: "var(--theme-fg)" }}>4.2x ROAS</strong> i dosegao <strong style={{ color: "var(--theme-fg)" }}>preko 4 miliona korisnika</strong> na TikToku. <em>(TikTok for Business)</em></li>
                </ul>
              </div>

              {/* 3. LinkedIn */}
              <h3 className="text-xl font-bold mb-4" style={{ color: "var(--theme-fg)" }}>3. Kreiranje LinkedIn Company Page</h3>
              <ul className="space-y-2 mb-4 text-base" style={{ color: "var(--theme-fg-muted)" }}>
                <li>• Kompletan profil sa fokusom na B2B vrednost</li>
                <li>• Sadržaj: priče o austrijskoj saradnji, ISO/HACCP sertifikati, industry insights</li>
                <li>• 2-3 objave nedeljno, organski rast, bez plaćenog budžeta prvih meseci</li>
                <li>• Ciljni čitaoci: retail menadžeri, HoReCa sektor, purchase officeri</li>
              </ul>

              <div className="rounded-[var(--radius-md)] p-5 mb-8" style={{ backgroundColor: "rgba(30, 136, 229, 0.06)", borderLeft: "3px solid var(--color-accent-blue)" }}>
                <p className="text-sm" style={{ color: "var(--theme-fg-muted)" }}>
                  <strong style={{ color: "var(--color-accent-blue)" }}>Zašto ovo radi:</strong> B2B firme na LinkedIn-u beleže <strong style={{ color: "var(--theme-fg)" }}>20% rast sales lead-ova</strong> kroz ambassador i stručni content. Jedna kompanija sa proprietary tehnologijom ostvarila <strong style={{ color: "var(--theme-fg)" }}>50% rast tržišnog udela</strong> za 2 godine kroz LinkedIn marketing. <em>(LinkedIn Pulse; Circle Social)</em>
                </p>
              </div>

              {/* 4. Content Calendar */}
              <h3 className="text-xl font-bold mb-4" style={{ color: "var(--theme-fg)" }}>4. Content calendar za naredna 3 meseca</h3>
              <ul className="space-y-2 mb-8 text-base" style={{ color: "var(--theme-fg-muted)" }}>
                <li>• Detaljan plan objava po platformi, po danu</li>
                <li>• Koordinacija vizuala, copywriting-a i video sadržaja</li>
                <li>• Unapred pripremljen sadržaj za 2-3 nedelje ahead</li>
              </ul>

              <div className="h-px w-full mb-10" style={{ backgroundColor: "var(--theme-divider)" }} />

              {/* MESEC 2 */}
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-8" style={{ color: "var(--theme-fg)" }}>
                Mesec 2: Pokretanje mašine
              </h2>

              {/* 1. Influenseri */}
              <h3 className="text-xl font-bold mb-4" style={{ color: "var(--theme-fg)" }}>1. Influenser seed kampanja: 10 mikro-influensera</h3>
              <p className="text-base font-semibold mb-3" style={{ color: "var(--theme-fg)" }}>Šta radimo:</p>
              <ul className="space-y-2 mb-4 text-base" style={{ color: "var(--theme-fg-muted)" }}>
                <li>• Identifikacija i kontaktiranje 10 food blogera/influensera u Srbiji (5K-50K pratilaca)</li>
                <li>• Slanje Famis paketa, oni prave recept ili review, taguju @famis</li>
                <li>• Tri kategorije: kuvanje sa decom (roditelji), fitness kuhinja (mladi), tradicionalna srpska kuhinja (stariji)</li>
              </ul>
              <p className="text-base mb-4" style={{ color: "var(--theme-fg-muted)" }}>
                <strong style={{ color: "var(--theme-fg)" }}>Cena:</strong> Praktično samo cena proizvoda + poštarina.
              </p>

              <div className="rounded-[var(--radius-md)] p-5 mb-8" style={{ backgroundColor: "rgba(229, 57, 53, 0.06)", borderLeft: "3px solid var(--color-accent-red)" }}>
                <p className="text-sm mb-2" style={{ color: "var(--theme-fg-muted)" }}><strong style={{ color: "var(--color-accent-red)" }}>Zašto ovo radi:</strong></p>
                <ul className="space-y-2 text-sm" style={{ color: "var(--theme-fg-muted)" }}>
                  <li>• Mikro-influenser kampanje daju <strong style={{ color: "var(--theme-fg)" }}>20:1 ROI</strong>, za svaki €1 uložen, €20 povrat. <em>(IQfluence, 20 Case Studies + ROI Data)</em></li>
                  <li>• <strong style={{ color: "var(--theme-fg)" }}>77% marketara</strong> kaže da su mikro-influenseri njihovi top ROI generatori. <em>(Influencer Marketing Hub)</em></li>
                  <li>• <strong style={{ color: "var(--theme-fg)" }}>Iceland Groceries</strong> je sa 50 mikro-influensera podigao customer approval sa <strong style={{ color: "var(--theme-fg)" }}>10% na 70%</strong>. <em>(Trend.io)</em></li>
                  <li>• <strong style={{ color: "var(--theme-fg)" }}>La Croix</strong> je slao besplatne pakete influenserima sa manje od 1,000 pratilaca i ostvario visok engagement po minimalnoj ceni. <em>(The Missing Ingredient)</em></li>
                </ul>
              </div>

              {/* 2. Bez Kompromisa */}
              <h3 className="text-xl font-bold mb-4" style={{ color: "var(--theme-fg)" }}>2. Pokretanje &ldquo;Bez Kompromisa&rdquo; content serije</h3>

              <p className="text-base font-semibold mb-3" style={{ color: "var(--theme-fg)" }}>&ldquo;Čitamo deklaracije zajedno&rdquo;, video/carousel sadržaj:</p>
              <ul className="space-y-2 mb-4 text-base" style={{ color: "var(--theme-fg-muted)" }}>
                <li>• Famis tehnolog ili brand persona uzima generički mesni proizvod i Famis proizvod</li>
                <li>• Uporedno čitanje deklaracija: šta su ti nepoznati sastojci? Zašto ih Famis nema?</li>
                <li>• Edukativno, ne napadački, cilj je da potrošač SAM zaključi</li>
              </ul>

              <p className="text-base font-semibold mb-3" style={{ color: "var(--theme-fg)" }}>&ldquo;Kako se pravi...&rdquo;, behind-the-scenes iz fabrike:</p>
              <ul className="space-y-2 mb-4 text-base" style={{ color: "var(--theme-fg-muted)" }}>
                <li>• Dimljenje, sušenje, začinjavanje, svaki korak</li>
                <li>• Austrijska oprema, kompjuterizovana termalna obrada</li>
                <li>• Ljudi koji stoje iza proizvoda</li>
              </ul>

              <div className="rounded-[var(--radius-md)] p-5 mb-8" style={{ backgroundColor: "rgba(245, 124, 0, 0.06)", borderLeft: "3px solid var(--color-accent-orange)" }}>
                <p className="text-sm mb-2" style={{ color: "var(--theme-fg-muted)" }}><strong style={{ color: "var(--color-accent-orange)" }}>Zašto ovo radi:</strong></p>
                <ul className="space-y-2 text-sm" style={{ color: "var(--theme-fg-muted)" }}>
                  <li>• <strong style={{ color: "var(--theme-fg)" }}>50% potrošača</strong> je verovatnije da će se angažovati sa brendom koji deli behind-the-scenes sadržaj. <em>(Big Deal Marketing)</em></li>
                  <li>• <strong style={{ color: "var(--theme-fg)" }}>63.7% potrošača</strong> traži informacije o poreklu proizvoda i sirovina. <em>(DNV GL Viewpoint Survey)</em></li>
                </ul>
              </div>

              {/* 3. Nagradna igra */}
              <h3 className="text-xl font-bold mb-4" style={{ color: "var(--theme-fg)" }}>3. Prva nagradna igra na Instagramu i Facebooku</h3>
              <ul className="space-y-2 mb-4 text-base" style={{ color: "var(--theme-fg-muted)" }}>
                <li>• &ldquo;Osvoji Famis paket&rdquo;, format: zaprati, lajkuj, taguji prijatelja</li>
                <li>• Nagrada: premium Famis paket (košta Famis ~2,000-3,000 RSD, a efekt je višestruk)</li>
                <li>• Cilj: brz rast pratilaca i organski reach u prvim nedeljama</li>
              </ul>

              <div className="rounded-[var(--radius-md)] p-5 mb-8" style={{ backgroundColor: "rgba(229, 57, 53, 0.06)", borderLeft: "3px solid var(--color-accent-red)" }}>
                <p className="text-sm" style={{ color: "var(--theme-fg-muted)" }}>
                  <strong style={{ color: "var(--color-accent-red)" }}>Zašto ovo radi:</strong> Stittsworth Meats, mesara u gradu od <strong style={{ color: "var(--theme-fg)" }}>13,000 stanovnika</strong>, dostigla <strong style={{ color: "var(--theme-fg)" }}>20,322 Facebook lajkova</strong> koristeći nagradne igre i product fotografije. Facebook ih je predstavio kao zvanični success story. Famis je u Beogradu sa 1.7M stanovnika, potencijal je ogroman. <em>(Maria Peagler Digital)</em>
                </p>
              </div>

              {/* 4. Paid */}
              <h3 className="text-xl font-bold mb-4" style={{ color: "var(--theme-fg)" }}>4. Početak paid kampanja</h3>
              <ul className="space-y-2 mb-8 text-base" style={{ color: "var(--theme-fg-muted)" }}>
                <li>• Instagram ads: reach + engagement kampanje (budget: 500-800 EUR/mes)</li>
                <li>• Facebook ads: reach + traffic ka sajtu (budget: 400-600 EUR/mes)</li>
                <li>• TikTok ads: awareness kampanje za mlađi segment (budget: 300-500 EUR/mes)</li>
              </ul>

              <div className="h-px w-full mb-10" style={{ backgroundColor: "var(--theme-divider)" }} />

              {/* KPI */}
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-6" style={{ color: "var(--theme-fg)" }}>
                Šta očekujemo posle 2 meseca
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--theme-border)" }}>
                      <th className="text-left py-3 pr-4 font-semibold uppercase tracking-wider text-xs" style={{ color: "var(--theme-fg-subtle)" }}>Metrika</th>
                      <th className="text-right py-3 px-4 font-semibold uppercase tracking-wider text-xs" style={{ color: "var(--theme-fg-subtle)" }}>Trenutno (procena)</th>
                      <th className="text-right py-3 pl-4 font-semibold uppercase tracking-wider text-xs" style={{ color: "var(--color-accent-red)" }}>Cilj posle 2 meseca</th>
                    </tr>
                  </thead>
                  <tbody style={{ color: "var(--theme-fg-muted)" }}>
                    {[
                      ["Instagram pratilaca", "~2,000-5,000", "7,000-10,000"],
                      ["TikTok pratilaca", "0", "3,000-5,000"],
                      ["Facebook pratilaca", "~3,000-5,000", "6,000-8,000"],
                      ["LinkedIn pratilaca", "0", "500-1,000"],
                      ["Website mesečne posete", "~1,000-2,000", "4,000-5,000"],
                      ["Engagement rate (IG)", "<1%", "2-3%"],
                    ].map(([metric, current, goal]) => (
                      <tr key={metric} style={{ borderBottom: "1px solid var(--theme-border)" }}>
                        <td className="py-3 pr-4">{metric}</td>
                        <td className="text-right py-3 px-4">{current}</td>
                        <td className="text-right py-3 pl-4 font-bold" style={{ color: "var(--theme-fg)" }}>{goal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="h-px w-full mb-10" style={{ backgroundColor: "var(--theme-divider)" }} />

              {/* KONTEKST TRŽIŠTA */}
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-6" style={{ color: "var(--theme-fg)" }}>
                Kontekst tržišta
              </h2>
              <p className="text-base mb-4" style={{ color: "var(--theme-fg-muted)" }}>
                Ovo nije eksperiment, ovo je odgovor na jasne tržišne signale:
              </p>
              <ul className="space-y-2 mb-4 text-base" style={{ color: "var(--theme-fg-muted)" }}>
                <li>• Industrija prerade mesa u Srbiji vredi <strong style={{ color: "var(--theme-fg)" }}>€4.9 milijardi</strong> sa godišnjim rastom od <strong style={{ color: "var(--theme-fg)" }}>17%</strong>. <em style={{ color: "var(--theme-fg-subtle)" }}>(IBISWorld, Statista)</em></li>
                <li>• Globalni trendovi: <strong style={{ color: "var(--theme-fg)" }}>57% potrošača</strong> preferira &ldquo;all natural&rdquo;, <strong style={{ color: "var(--theme-fg)" }}>49%</strong> traži &ldquo;bez antibiotika&rdquo;, <strong style={{ color: "var(--theme-fg)" }}>43%</strong> bira organic. <em style={{ color: "var(--theme-fg-subtle)" }}>(Midan Marketing)</em></li>
                <li>• Konkurencija (Neoplanta, Atlantic Grupa/Agreta) dominira volumenom, ali Famis može da dominira <strong style={{ color: "var(--theme-fg)" }}>pričom i kvalitetom</strong>.</li>
              </ul>
              <p className="text-base font-semibold mb-8" style={{ color: "var(--theme-fg)" }}>
                Premium pozicioniranje + digital-first strategija = jedini način da se mali proizvođač diferencira od velikih igrača.
              </p>

              <div className="h-px w-full mb-10" style={{ backgroundColor: "var(--theme-divider)" }} />

              {/* REZIME */}
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-6" style={{ color: "var(--theme-fg)" }}>
                Rezime
              </h2>
              <p className="text-base mb-4" style={{ color: "var(--theme-fg-muted)" }}>Ova dva meseca postavljaju temelj:</p>
              <ol className="space-y-3 mb-6 text-base" style={{ color: "var(--theme-fg-muted)" }}>
                <li><strong style={{ color: "var(--theme-fg)" }}>1.</strong> <strong style={{ color: "var(--theme-fg)" }}>Profesionalna digitalna prisutnost</strong> na 4 platforme (Instagram, Facebook, TikTok, LinkedIn)</li>
                <li><strong style={{ color: "var(--theme-fg)" }}>2.</strong> <strong style={{ color: "var(--theme-fg)" }}>Content mašina</strong> koja radi konzistentno: edukacija, transparentnost, recepti</li>
                <li><strong style={{ color: "var(--theme-fg)" }}>3.</strong> <strong style={{ color: "var(--theme-fg)" }}>Influenser mreža</strong> koja širi priču o Famis kvalitetu</li>
                <li><strong style={{ color: "var(--theme-fg)" }}>4.</strong> <strong style={{ color: "var(--theme-fg)" }}>Podaci i rezultati</strong> koji dokazuju ROI i pravdaju dalju investiciju</li>
              </ol>
              <p className="text-base mb-4" style={{ color: "var(--theme-fg-muted)" }}>
                Svaka odluka u ovom planu je potkrepljena dokazima iz prakse, od malih mesara koje su porasle 10x na Facebooku, do food brendova koji su eksplodirali na TikToku sa minimalnim budžetom.
              </p>
              <p className="text-lg font-bold mt-6 mb-4" style={{ color: "var(--theme-fg)" }}>
                Famis ima fantastičan proizvod. Vreme je da to svi saznaju.
              </p>

              <div className="h-px w-full mb-10" style={{ backgroundColor: "var(--theme-divider)" }} />

              {/* IZVORI */}
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-6" style={{ color: "var(--theme-fg)" }}>
                Izvori
              </h2>
              <ol className="space-y-3 text-sm list-decimal list-inside" style={{ color: "var(--theme-fg-muted)" }}>
                <li><a href="https://omnivoreagency.com/2024/07/31/food-transparency-translates-to-trust-what-manufacturers-need-to-know/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "var(--theme-fg-subtle)" }}>Omnivore Agency - Food Transparency Translates to Trust</a></li>
                <li><a href="https://www.supplysidefbj.com/market-trends-analysis/75-of-consumers-will-pay-extra-for-clean-label-ingredients" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "var(--theme-fg-subtle)" }}>SupplySide FBJ - 75% of Consumers Will Pay Extra for Clean Label</a></li>
                <li><a href="https://www.traceone.com/resources/plm-compliance-blog/nutrition-label-scrutiny-compliance-by-design-food-beverage" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "var(--theme-fg-subtle)" }}>TraceOne - 65% of Consumers Read Nutrition Labels</a></li>
                <li><a href="https://bdmarketing.com/transparency-authenticity-and-behind-the-scenes-content/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "var(--theme-fg-subtle)" }}>Big Deal Marketing - Transparency, Authenticity, and BTS Content</a></li>
                <li><a href="https://popularpays.com/blog/tiktok-case-studies" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "var(--theme-fg-subtle)" }}>Popular Pays - 3 Successful TikTok Case Studies (Nerdy Nuts)</a></li>
                <li><a href="https://influencermarketinghub.com/tiktok-marketing-case-studies/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "var(--theme-fg-subtle)" }}>Influencer Marketing Hub - Top 3 TikTok Marketing Case Studies (Idahoan)</a></li>
                <li><a href="https://ads.tiktok.com/business/en/inspiration/cm-foods" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "var(--theme-fg-subtle)" }}>TikTok for Business - CM Foods Case Study</a></li>
                <li><a href="https://mixdigital.agency/works/snack-brand-case-study-visual-identity-engagement-growth/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "var(--theme-fg-subtle)" }}>Mix Digital Agency - Chipster Snack Brand Case Study</a></li>
                <li><a href="https://www.linkedin.com/pulse/b2b-marketing-food-manufacturing-lori-krieger" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "var(--theme-fg-subtle)" }}>LinkedIn Pulse - B2B Marketing in Food Manufacturing</a></li>
                <li><a href="https://www.circlesocialinc.com/case-study-how-linkedin-is-the-best-digital-platform-to-reach-decision-makers-in-b2b-marketing/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "var(--theme-fg-subtle)" }}>Circle Social - LinkedIn for B2B Decision Makers</a></li>
                <li><a href="https://iqfluence.io/public/blog/influencer-marketing-case-studies" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "var(--theme-fg-subtle)" }}>IQfluence - 20 Influencer Marketing Case Studies + ROI Data</a></li>
                <li><a href="https://www.trend.io/blog/influencer-marketing-case-studies" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "var(--theme-fg-subtle)" }}>Trend.io - 8 Influencer Marketing Case Studies (Iceland, Kettle+Fire)</a></li>
                <li><a href="https://themissingingredient.com/micro-influencers-food-beverage-brands/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "var(--theme-fg-subtle)" }}>The Missing Ingredient - Micro-Influencers in Food &amp; Beverage</a></li>
                <li><a href="https://influencermarketinghub.com/influencer-marketing-case-studies/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "var(--theme-fg-subtle)" }}>Influencer Marketing Hub - 8 Case Studies with Incredible Results</a></li>
                <li><a href="https://mariapeaglerdigital.com/social-media-for-local-business-case-study-local-neighborhood-meat-market-on-facebook/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "var(--theme-fg-subtle)" }}>Maria Peagler Digital - Stittsworth Meats Case Study</a></li>
                <li><a href="https://www.ibisworld.com/serbia/industry/meat-processing/200133/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "var(--theme-fg-subtle)" }}>IBISWorld - Meat Processing in Serbia</a></li>
                <li><a href="https://www.statista.com/outlook/cmo/food/meat/serbia" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "var(--theme-fg-subtle)" }}>Statista - Meat Market Serbia</a></li>
                <li><a href="https://midanmarketing.com/blog/top-10-meat-dairy-industry-trends-to-watch-in-2026/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" style={{ color: "var(--theme-fg-subtle)" }}>Midan Marketing - Top 10 Meat &amp; Dairy Trends 2026</a></li>
              </ol>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
