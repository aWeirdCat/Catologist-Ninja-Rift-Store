# Catologist's Store — Ninja Rift Top-Up Catalog

A fast, mobile-friendly web catalog and order ticket generator for Ninja Rift packages, tokens, battlepasses, and leveling bundles. Built with Tailwind CSS and vanilla JavaScript, hosted on GitHub Pages.

🔗 **Live Site:** https://aweirdcat.github.io/Catologist-Ninja-Rift-Store/

---

## ⚡ What It Does

- **Browse Packages:** View real-time prices, contents, item stats, and purchase rules across 9 color-coded categories.
- **Interactive Item Previews:** Live visual modal with gaming-grade tooltips (stats, skills, cooldowns, and descriptions) for all Battlepass seasons and Level-Up Starter Packs.
- **Battlepass Picker (Seasons 1–22):** Dynamic pricing engine with tier selector (Normal vs. Maxed), Limit 1 rule enforcement, and automatic token calculation (255 to 1,500 tokens).
- **"To Be Received" Rewards Bar:** Live calculation of bonus Tokens, Stamina Rolls, Talent Points, and Senjutsu Points delivered to your order summary.
- **DuitNow QR Instant Checkout:** Integrated QR code modal supporting Maybank MAE, Touch 'n Go eWallet, and CIMB Octo with one-click copy for amount and character reference.
- **Copy-to-Chat Flow:** Users enter their Character ID, build a cart, and click to copy a formatted order ticket ready to paste directly into WhatsApp or Discord.
- **Bilingual:** Instant toggle between English (ENG) and Bahasa Melayu (BM).

---

## 🛍️ Categories Included

1. **1st-Time Deals (Emerald)** — 25% off intro packages with interactive preview (Limit 1).
2. **Tokens (Blue)** — Core token packages A through E.
3. **Market Coins (Purple)** — 1:1 token-equivalent trade currency.
4. **Clan Packs (Cyan)** — Stamina rolls with token value comparison.
5. **Arena Packs (Sapphire)** — Energy capsules with efficiency breakdown.
6. **Emblems (Amber)** — Free to Emblem / Emblem+ perks with exclusive single-choice enforcement & 2,200 token policy.
7. **Battlepass (Red)** — Seasons 1–22 full item preview, tier picker (Normal / Maxed), and token reward calculator (Limit 1).
8. **Level Up (Pink Blossom)** — Milestone packs (Lv10–Lv100) + Halloween Package featuring rich item previews, stats, and sequential purchase rules.
9. **Bots (Crimson)** — Utility tools and automation subscriptions with video guides.

---

## 📂 Project Structure

```text
├── index.html                 # Main web storefront markup & layout
├── css/
│   └── styles.css             # Custom utility styles, scrolls & animations
├── js/
│   ├── app.js                 # Cart state, event handlers, modals & preview logic
│   └── data/
│       ├── catalog.js         # Package pricing, names, and limits
│       ├── battlepass-data.js # Full Season 1-22 item data & stats
│       ├── levelup-data.js    # Starter pack items (Lv10-Lv100 & Halloween)
│       ├── custom-images.js   # Image asset mapping
│       ├── qr-data.js         # DuitNow QR image configurations
│       └── i18n.js            # English & Bahasa Melayu translations
└── assets/
    ├── icons/                 # System and currency coins (Token, Stamina, Senjutsu, etc.)
    ├── qr/                    # Payment QR codes (Maybank, CIMB, TNG)
    ├── starter-pack/          # Level-up item artwork sorted by level (lvl-10 to lvl-100)
    └── battlepass/            # Battlepass season item assets (season_1 to season_22)
```

---

## 🚀 How to Run or Edit

No heavy build steps or complex dependencies required.

### Run Locally

Open `index.html` directly in any web browser, or serve locally with any static HTTP server:
```bash
npx serve .
```

### Edit Items & Logic

- **Pricing & Packages:** Update `js/data/catalog.js`
- **Battlepass Items & Seasons:** Edit `js/data/battlepass-data.js`
- **Starter Packs & Items:** Edit `js/data/levelup-data.js`
- **Translations:** Edit `js/data/i18n.js`
- **QR Codes:** Update paths in `js/data/qr-data.js`

### Deploy to GitHub Pages

1. Push changes to your repository's `main` branch.
2. Go to **Settings > Pages > Build and deployment**.
3. Set **Source** to `Deploy from a branch` and branch to `main / (root)`.
4. Save, and your changes will deploy automatically.

---

## 📄 License

Open-source under the MIT License.
