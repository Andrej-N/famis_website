# FAMIS Website — Image Prompts for AI Generator

## VAŽNO: Referentne slike pakovanja

Uz svaki prompt priloži slike iz foldera `redesigned packages/` kao referencu. AI mora da vidi kako pakovanja zapravo izgledaju — matte crne kutije sa dot-grid šarom u boji, bold uppercase tipografija, IIII logo mark.

---

## OPŠTA PRAVILA ZA SVE SLIKE

- **Pozadina: UVEK čisto crna (#0a0a0a) ili vrlo tamno siva**
- **Osvetljenje: studio osvetljenje, meko, kontrolisano — nikada prirodno/dnevno svetlo**
- **Stil: premium product photography, minimalistički, kao za luksuzne brendove**
- **Bez teksta, bez watermark-a, bez logotipa na slikama**
- **Rezolucija: visoka (minimum 1920px po široj strani)**
- **Referenca brendova za stil fotografije: Aesop, Apple, Bang & Olufsen**

---

## 1. HERO SLIKA (glavna, najvažnija)

**Gde ide:** Desna strana hero sekcije, zauzima pola ekrana
**Dimenzije:** 1200 x 1600px (portrait)
**Ime fajla:** `hero-lineup.jpg`

### Prompt:

```
Premium product photography on pure black background. Studio shot of premium meat product packaging arranged in an elegant composition. The packages are matte black rectangular boxes with colorful dot-grid patterns on the front — dots in red, orange, yellow, blue, and gray arranged in rows. Each box has bold white uppercase text for product names. Arrange 6-8 boxes in a staggered, editorial layout — some standing upright, some slightly angled, creating depth and visual interest. One white/cream colored box (Hrenovka) contrasts with the dark ones. Include one black-and-white polka-dot gift box partially visible. Dramatic studio lighting from above-left, creating subtle reflections on the matte surfaces. Ultra clean, minimal, no background elements. Shot from slightly above eye level. High-end commercial product photography style like Apple or Aesop campaigns.

[ATTACH REFERENCE IMAGES OF THE ACTUAL PACKAGING]
```

---

## 2. ABOUT SEKCIJA — Glavna slika

**Gde ide:** Leva strana About sekcije, aspect ratio 4:3
**Dimenzije:** 1600 x 1200px (landscape)
**Ime fajla:** `about-main.jpg`

### Prompt:

```
Premium product photography on dark background. An artful flat-lay arrangement of matte black meat product packaging boxes viewed from a 30-degree angle on a dark slate/concrete surface. The boxes feature colorful dot-grid patterns (red, orange, yellow, blue dots arranged in rows) and bold white uppercase typography. Arrange approximately 10-12 boxes in neat rows like a collection display. Include one white/cream box and one black-and-white polka-dot patterned gift box for contrast. Soft, diffused overhead studio lighting. Dark, moody atmosphere. The surface should be barely visible — almost merging with the black background. Negative space on the edges. Commercial product photography, editorial style.

[ATTACH REFERENCE IMAGES OF THE ACTUAL PACKAGING]
```

---

## 3. ABOUT SEKCIJA — Leva manja slika

**Gde ide:** Donji red About sekcije, leva strana
**Dimenzije:** 1600 x 1000px (landscape 16:10)
**Ime fajla:** `about-gift.jpg`

### Prompt:

```
Premium product photography on black background. Close-up of a luxury gift box with black and white polka-dot pattern (large white circles on black), lid partially open, revealing matte black product boxes inside. The inner boxes have colorful dot patterns visible on their faces. Studio lighting creating a soft highlight on the polka-dot pattern. Shallow depth of field — sharp focus on the gift box, slight blur on background elements. Ultra premium, luxurious feel. Like unboxing a high-end cosmetics or tech product. Minimal composition, lots of negative space.

[ATTACH REFERENCE IMAGES OF THE POLKA-DOT GIFT BOX]
```

---

## 4. ABOUT SEKCIJA — Desna manja slika

**Gde ide:** Donji red About sekcije, desna strana
**Dimenzije:** 1600 x 1000px (landscape 16:10)
**Ime fajla:** `about-detail.jpg`

### Prompt:

```
Premium product photography, extreme close-up detail shot. A single matte black rectangular product box photographed at an angle, showing the bold white uppercase typography and a row of colored dots (4 blue dots and 1 red dot) on the front face. The text reads product name in sans-serif font. A single metallic silver circular seal/sticker visible on the box. Pure black background. Macro-level detail showing the matte texture of the cardboard. Dramatic side lighting creating a sharp highlight edge on one side of the box. Ultra minimal, moody, cinematic. Like a perfume or luxury spirits advertisement.

[ATTACH REFERENCE IMAGE: closeup-francuska.jpg]
```

---

## 5. PRODUCTS SEKCIJA — Banner slika (wide)

**Gde ide:** Široka slika na vrhu Products sekcije, aspect ratio 21:9
**Dimenzije:** 2100 x 900px (ultra-wide)
**Ime fajla:** `products-banner.jpg`

### Prompt:

```
Premium product photography, wide cinematic composition on pure black background. A long horizontal arrangement of matte black meat product boxes standing in a row, slightly overlapping, like dominoes about to fall or books on a shelf. Each box shows different colored dot-grid patterns — red, orange, yellow, blue, gray. The boxes decrease in size from center to edges creating a gentle arc. Dramatic studio lighting from directly above, creating sharp top-edge highlights and deep shadows below. Ultra-wide composition with generous negative space above and below. Cinematic, editorial. The kind of image you'd see in a Wallpaper* magazine product feature.

[ATTACH REFERENCE IMAGES OF THE ACTUAL PACKAGING]
```

---

## 6-13. INDIVIDUALNE PRODUCT CARD SLIKE (po jedna za svaki proizvod)

**Gde ide:** Product grid kartice, aspect ratio 4:3
**Dimenzije:** 800 x 600px (landscape)
**Ime fajla:** `product-[ime].jpg`

### Generalni prompt template (prilagodi ime proizvoda i boju tačaka):

```
Premium product photography on pure black background. A single matte black rectangular product box for "[IME PROIZVODA]" positioned at a slight 15-degree angle. The front face shows bold white uppercase text with the product name and a grid of colored dots in [BOJA — red/orange/yellow/blue/gray]. Clean studio lighting from upper-left, creating a subtle gradient highlight across the matte surface. The box casts a soft, barely visible shadow. Ultra minimal composition — the box occupies about 60% of the frame, centered with slight offset to the right. Premium, clean, like a cosmetics product shot. No other objects in frame.

[ATTACH REFERENCE IMAGES OF THE ACTUAL PACKAGING]
```

### Specifični promptovi po proizvodu:

| # | Fajl | Proizvod | Boja tačaka | Napomena |
|---|------|----------|-------------|----------|
| 6 | `product-gril.jpg` | Gril Kobasica | Red + orange dots | Široka kutija |
| 7 | `product-gril-ljuta.jpg` | Gril Kobasica Ljuta | Red dots | Široka kutija |
| 8 | `product-pikant.jpg` | Pikant Kobasica | Red dots | Široka kutija |
| 9 | `product-krajiska.jpg` | Krajiška Kobasica | Yellow dots | Široka kutija |
| 10 | `product-rostiljska.jpg` | Roštiljska Kobasica | Red + blue dots | Uska/visoka kutija |
| 11 | `product-rustiko.jpg` | Rustiko Kobasica | Blue dots | Uska/visoka kutija |
| 12 | `product-virsla.jpg` | Viršla | Orange dots | Široka kutija |
| 13 | `product-hrenovka.jpg` | Hrenovka | Gray dots | **BELA/KREM kutija** — jedina svetla! |
| 14 | `product-barfalada.jpg` | Barfalada Kobasica | Red dots | Široka kutija |
| 15 | `product-francuska.jpg` | Francuska Suva Kobasica | Blue dots | Uska/visoka kutija |
| 16 | `product-francuska-paprika.jpg` | Francuska Suva sa Paprikom | Blue + red dots | Uska/visoka kutija |

### Prompt za HRENOVKA (poseban jer je svetla kutija):

```
Premium product photography on pure black background. A single WHITE/CREAM colored rectangular product box for "HRENOVKA" positioned at a slight 15-degree angle. The front face shows dark text with the product name and a grid of GRAY dots. This box stands out as the only light-colored package in the product line. Clean studio lighting emphasizing the contrast between the white box and black background. Minimal composition, premium feel. The white box almost glows against the darkness.

[ATTACH REFERENCE IMAGES — especially the Hrenovka white box]
```

---

## 14. OG/SHARE SLIKA (za social media)

**Dimenzije:** 1200 x 630px
**Ime fajla:** `og-image.jpg`

### Prompt:

```
Premium product photography on pure black background. Three matte black product boxes arranged in a triangular composition — one standing tall in the back center, two shorter ones in front on either side. Each box shows different colored dot-grid patterns (red, blue, orange). Between them, slightly behind, a black-and-white polka-dot gift box peeks out. Clean studio lighting from above. Generous negative space on left side (for potential text overlay). Ultra premium, minimal, dark. Commercial product photography.

[ATTACH REFERENCE IMAGES OF THE ACTUAL PACKAGING]
```

---

## STRUKTURA FOLDERA NAKON GENERISANJA

```
public/products/
├── hero-lineup.jpg          (1200x1600)
├── about-main.jpg           (1600x1200)
├── about-gift.jpg           (1600x1000)
├── about-detail.jpg         (1600x1000)
├── products-banner.jpg      (2100x900)
├── product-gril.jpg         (800x600)
├── product-gril-ljuta.jpg   (800x600)
├── product-pikant.jpg       (800x600)
├── product-krajiska.jpg     (800x600)
├── product-rostiljska.jpg   (800x600)
├── product-rustiko.jpg      (800x600)
├── product-virsla.jpg       (800x600)
├── product-hrenovka.jpg     (800x600)
├── product-barfalada.jpg    (800x600)
├── product-francuska.jpg    (800x600)
├── product-francuska-paprika.jpg (800x600)
└── og-image.jpg             (1200x630)
```

---

## NAPOMENA

Kad generišeš slike, **OBAVEZNO priloži slike iz `redesigned packages/` foldera kao referencu**. AI generator mora da vidi:
- Kako izgledaju kutije (matte crne sa dot patternom)
- Kako izgleda tipografija (bold, uppercase, sans-serif)
- Kako izgleda bela Hrenovka kutija
- Kako izgleda polka-dot gift box
- IIII logo mark na kutijama

Bez referentnih slika, AI će generisati generičko pakovanje koje neće ličiti na FAMIS.
