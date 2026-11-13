/* ---------------- CATALOG DATA ---------------- */
    const CATALOG = [
      /* DEALS / SPECIAL PACKAGES */
      { id: "pkg-halloween", category: "first-time", name: "Halloween Package", desc: "2 Kinjutsu, Weapon, Back Item, Outfit, Hairstyle, Accessory & Bag of Candy", price: 41.00, oldPrice: null, limit: 99, tokens: 0 },
      { id: "ft-1", category: "first-time", name: "Package 1", desc: "31,500 Tokens + 100 Stamina Rolls + Kinjutsu + Pet", price: 150.00, oldPrice: 200.00, limit: 1, tokens: 31500 },
      { id: "ft-2", category: "first-time", name: "Package 2", desc: "14,175 Tokens + 40 Stamina Rolls + Kinjutsu + Pet", price: 75.75, oldPrice: 101.00, limit: 1, tokens: 14175 },
      { id: "ft-3", category: "first-time", name: "Package 3", desc: "5,250 Tokens + 20 Stamina Rolls + Kinjutsu + Pet", price: 30.75, oldPrice: 41.00, limit: 1, tokens: 5250 },
      { id: "ft-4", category: "first-time", name: "Package 4", desc: "2,310 Tokens + Kinjutsu + Pet", price: 15.75, oldPrice: 21.00, limit: 1, tokens: 2310 },
      { id: "ft-5", category: "first-time", name: "Package 5", desc: "315 Tokens + Hairstyle", price: 4.00, oldPrice: 5.00, limit: 1, tokens: 315 },
      { id: "ft-m1", category: "first-time", name: "Gacha Materials", desc: "Material Package (6-9)", price: 7.00, oldPrice: 9.00, limit: 1, tokens: 0 },
      { id: "ft-m2", category: "first-time", name: "Anniversary Materials", desc: "Material Package (6-9)", price: 7.00, oldPrice: 9.00, limit: 1, tokens: 0 },
      { id: "ft-m3", category: "first-time", name: "Anniversary Part II Materials", desc: "Material Package (6-9)", price: 7.00, oldPrice: 9.00, limit: 1, tokens: 0 },

      /* TOKENS */
      { id: "tk-a", category: "token", name: "Package A", desc: "31,500 Tokens + 100 Stamina Rolls + Kinjutsu + Pet", price: 200.00, oldPrice: null, limit: 99, tokens: 31500 },
      { id: "tk-b", category: "token", name: "Package B", desc: "14,175 Tokens + 40 Stamina Rolls + Kinjutsu + Pet", price: 101.00, oldPrice: null, limit: 99, tokens: 14175 },
      { id: "tk-c", category: "token", name: "Package C", desc: "5,250 Tokens + 20 Stamina Rolls + Kinjutsu + Pet", price: 41.00, oldPrice: null, limit: 99, tokens: 5250 },
      { id: "tk-d", category: "token", name: "Package D", desc: "2,310 Tokens + Kinjutsu + Pet", price: 21.00, oldPrice: null, limit: 99, tokens: 2310 },
      { id: "tk-e", category: "token", name: "Package E", desc: "315 Tokens + Hairstyle", price: 5.00, oldPrice: null, limit: 99, tokens: 315 },

      /* MARKET COINS */
      { id: "mc-a", category: "marketcoins", name: "Market Coins Pack A", desc: "31,500 Market Coins + 100 Stamina Rolls + Kinjutsu + Pet", price: 200.00, oldPrice: null, limit: 99, tokens: 31500 },
      { id: "mc-b", category: "marketcoins", name: "Market Coins Pack B", desc: "14,175 Market Coins + 40 Stamina Rolls + Kinjutsu + Pet", price: 101.00, oldPrice: null, limit: 99, tokens: 14175 },
      { id: "mc-c", category: "marketcoins", name: "Market Coins Pack C", desc: "5,250 Market Coins + 20 Stamina Rolls + Kinjutsu + Pet", price: 41.00, oldPrice: null, limit: 99, tokens: 5250 },
      { id: "mc-d", category: "marketcoins", name: "Market Coins Pack D", desc: "2,310 Market Coins + Kinjutsu + Pet", price: 21.00, oldPrice: null, limit: 99, tokens: 2310 },
      { id: "mc-e", category: "marketcoins", name: "Market Coins Pack E", desc: "315 Market Coins + Hairstyle", price: 5.00, oldPrice: null, limit: 99, tokens: 315 },

      /* CLAN */
      { id: "cl-sm", category: "clan", name: "Small Clan Pack", desc: "150 Stamina Rolls + 75 Twin Stamina Rolls + Pet", price: 21.00, oldPrice: null, limit: 99, tokens: 0 },
      { id: "cl-md", category: "clan", name: "Medium Clan Pack", desc: "500 Stamina Rolls + 50 Twin Stamina Rolls + Pet", price: 41.00, oldPrice: null, limit: 99, tokens: 0 },
      { id: "cl-lg", category: "clan", name: "Large Clan Pack", desc: "3,000 Stamina Rolls + 275 Twin Stamina Rolls + Clan Upgrade Capsule (+50 Energy) + Pet", price: 200.00, oldPrice: null, limit: 99, tokens: 0 },

      /* ARENA */
      { id: "ar-sm", category: "arena", name: "Small Arena Pack", desc: "200 Arena Energy Capsules + 50 Big Arena Energy Capsules", price: 41.00, oldPrice: null, limit: 99, tokens: 0 },
      { id: "ar-lg", category: "arena", name: "Large Arena Pack", desc: "1,400 Arena Energy Capsules + 150 Big Energy Capsules + Arena Capsule Upgrade (+50 Energy) + Pet", price: 200.00, oldPrice: null, limit: 99, tokens: 0 },

      /* EMBLEMS */
      { id: "em-1", category: "emblem", name: "Free -> Emblem", desc: "", price: 21.00, oldPrice: null, limit: 1, tokens: 2200 },
      { id: "em-2", category: "emblem", name: "Emblem -> Emblem+", desc: "", price: 21.00, oldPrice: null, limit: 1, tokens: 0 },
      { id: "em-3", category: "emblem", name: "Free -> Emblem+", desc: "", price: 41.00, oldPrice: null, limit: 1, tokens: 2200 },

      /* BATTLEPASS PACKAGES (SEASONS 1 - 22) */
      { id: "bp-s1", category: "battlepass", bpSeason: 1, name: "Battlepass Season 1", desc: "", price: 11.00, oldPrice: null, limit: 1, tokens: 255 },
      { id: "bp-s2", category: "battlepass", bpSeason: 2, name: "Battlepass Season 2", desc: "", price: 11.00, oldPrice: null, limit: 1, tokens: 255 },
      { id: "bp-s3", category: "battlepass", bpSeason: 3, name: "Battlepass Season 3", desc: "", price: 11.00, oldPrice: null, limit: 1, tokens: 255 },
      { id: "bp-s4", category: "battlepass", bpSeason: 4, name: "Battlepass Season 4", desc: "", price: 11.00, oldPrice: null, limit: 1, tokens: 255 },
      { id: "bp-s5", category: "battlepass", bpSeason: 5, name: "Battlepass Season 5", desc: "", price: 11.00, oldPrice: null, limit: 1, tokens: 255 },
      { id: "bp-s6", category: "battlepass", bpSeason: 6, name: "Battlepass Season 6", desc: "", price: 11.00, oldPrice: null, limit: 1, tokens: 255 },
      { id: "bp-s7", category: "battlepass", bpSeason: 7, name: "Battlepass Season 7", desc: "", price: 11.00, oldPrice: null, limit: 1, tokens: 255 },
      { id: "bp-s8", category: "battlepass", bpSeason: 8, name: "Battlepass Season 8", desc: "", price: 11.00, oldPrice: null, limit: 1, tokens: 255 },
      { id: "bp-s9", category: "battlepass", bpSeason: 9, name: "Battlepass Season 9", desc: "", price: 11.00, oldPrice: null, limit: 1, tokens: 255 },
      { id: "bp-s10", category: "battlepass", bpSeason: 10, name: "Battlepass Season 10", desc: "", price: 11.00, oldPrice: null, limit: 1, tokens: 255 },
      { id: "bp-s11", category: "battlepass", bpSeason: 11, name: "Battlepass Season 11", desc: "", price: 11.00, oldPrice: null, limit: 1, tokens: 255 },
      { id: "bp-s12", category: "battlepass", bpSeason: 12, name: "Battlepass Season 12", desc: "", price: 21.00, oldPrice: null, limit: 1, tokens: 400 },
      { id: "bp-s13", category: "battlepass", bpSeason: 13, name: "Battlepass Season 13", desc: "", price: 21.00, oldPrice: null, limit: 1, tokens: 400 },
      { id: "bp-s14", category: "battlepass", bpSeason: 14, name: "Battlepass Season 14", desc: "", price: 21.00, oldPrice: null, limit: 1, tokens: 400 },
      { id: "bp-s15", category: "battlepass", bpSeason: 15, name: "Battlepass Season 15", desc: "", price: 21.00, oldPrice: null, limit: 1, tokens: 400 },
      { id: "bp-s16", category: "battlepass", bpSeason: 16, name: "Battlepass Season 16", desc: "", price: 21.00, oldPrice: null, limit: 1, tokens: 510 },
      { id: "bp-s17", category: "battlepass", bpSeason: 17, name: "Battlepass Season 17", desc: "", price: 21.00, oldPrice: null, limit: 1, tokens: 510 },
      { id: "bp-s18", category: "battlepass", bpSeason: 18, name: "Battlepass Season 18", desc: "", price: 21.00, oldPrice: null, limit: 1, tokens: 510 },
      { id: "bp-s19", category: "battlepass", bpSeason: 19, name: "Battlepass Season 19", desc: "", price: 21.00, oldPrice: null, limit: 1, tokens: 510 },
      { id: "bp-s20", category: "battlepass", bpSeason: 20, name: "Battlepass Season 20", desc: "", price: 21.00, oldPrice: null, limit: 1, tokens: 1000 },
      { id: "bp-s21", category: "battlepass", bpSeason: 21, name: "Battlepass Season 21", desc: "", price: 21.00, oldPrice: null, limit: 1, tokens: 1500 },
      { id: "bp-s22", category: "battlepass", bpSeason: 22, name: "Battlepass Season 22 (Latest)", desc: "", price: 41.00, oldPrice: null, limit: 1, tokens: 1100 },

      /* LEVEL UP STARTER PACKAGES */
      { id: "lv-10", category: "levelup", name: "Lv10 Starter Pack", desc: "", price: 9.00, oldPrice: null, limit: 1, tokens: 700 },
      { id: "lv-20", category: "levelup", name: "Lv20 Starter Pack", desc: "", price: 13.00, oldPrice: null, limit: 1, tokens: 2000 },
      { id: "lv-30", category: "levelup", name: "Lv30 Starter Pack", desc: "", price: 17.00, oldPrice: null, limit: 1, tokens: 2500 },
      { id: "lv-40", category: "levelup", name: "Lv40 Starter Pack", desc: "", price: 21.00, oldPrice: null, limit: 1, tokens: 3000 },
      { id: "lv-50", category: "levelup", name: "Lv50 Starter Pack", desc: "", price: 29.00, oldPrice: null, limit: 1, tokens: 4100 },
      { id: "lv-60", category: "levelup", name: "Lv60 Starter Pack", desc: "", price: 41.00, oldPrice: null, limit: 1, tokens: 5200 },
      { id: "lv-70", category: "levelup", name: "Lv70 Starter Pack", desc: "", price: 61.00, oldPrice: null, limit: 1, tokens: 8000 },
      { id: "lv-80", category: "levelup", name: "Lv80 Starter Pack", desc: "", price: 101.00, oldPrice: null, limit: 1, tokens: 15000 },
      { id: "lv-90", category: "levelup", name: "Lv90 Starter Pack", desc: "", price: 141.00, oldPrice: null, limit: 1, tokens: 20000 },
      { id: "lv-100", category: "levelup", name: "Lv100 Starter Pack", desc: "", price: 200.00, oldPrice: null, limit: 1, tokens: 30000 },

      /* JHOSP CARDENAS BOTS */
      { id: "bot-1m", category: "bots", name: "1 Month Access", desc: "", price: 13.00, oldPrice: null, limit: 99, tokens: 0 },
      { id: "bot-3m", category: "bots", name: "3 Month Access", desc: "", price: 30.00, oldPrice: null, limit: 99, tokens: 0 },
      { id: "bot-life", category: "bots", name: "Lifetime Access", desc: "", price: 210.00, oldPrice: null, limit: 99, tokens: 0 }
    ];
