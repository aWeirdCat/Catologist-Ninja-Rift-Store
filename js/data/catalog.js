/* ---------------- CATALOG DATA ---------------- */
    const CATALOG = [
      /* FIRST-TIME BUYER SALE */
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

      /* LEVEL UP STARTER PACKAGES */
      { id: "lv-10", category: "levelup", name: "Lv10 Starter Pack", desc: "700 Tokens + Outfit, Weapon, Skills, Hairstyle, Back Item, Accessory & Pet", price: 9.00, oldPrice: null, limit: 1, tokens: 700 },
      { id: "lv-20", category: "levelup", name: "Lv20 Starter Pack", desc: "2,000 Tokens + Outfit, Weapon, Skills, Hairstyle, Back Item, Accessory & Pet", price: 13.00, oldPrice: null, limit: 1, tokens: 2000 },
      { id: "lv-30", category: "levelup", name: "Lv30 Starter Pack", desc: "2,500 Tokens + Outfit, Weapon, Skills, Hairstyle, Back Item, Accessory & Pet", price: 17.00, oldPrice: null, limit: 1, tokens: 2500 },
      { id: "lv-40", category: "levelup", name: "Lv40 Starter Pack", desc: "3,000 Tokens + Outfit, Weapon, Skills, Hairstyle, Back Item, Accessory & Pet", price: 21.00, oldPrice: null, limit: 1, tokens: 3000 },
      { id: "lv-50", category: "levelup", name: "Lv50 Starter Pack", desc: "4,100 Tokens + Outfit, Weapon, Skills, Hairstyle, Back Item, Accessory & Pet", price: 29.00, oldPrice: null, limit: 1, tokens: 4100 },
      { id: "lv-60", category: "levelup", name: "Lv60 Starter Pack", desc: "5,200 Tokens + Outfit, Weapon, Skills, Hairstyle, Back Item, Accessory & Pet", price: 41.00, oldPrice: null, limit: 1, tokens: 5200 },
      { id: "lv-70", category: "levelup", name: "Lv70 Starter Pack", desc: "8,000 Tokens + Outfit, Weapon, Skills, Hairstyle, Back Item, Accessory & Pet", price: 61.00, oldPrice: null, limit: 1, tokens: 8000 },
      { id: "lv-80", category: "levelup", name: "Lv80 Starter Pack", desc: "15,000 Tokens + Outfit, Weapon, Skills, Hairstyle, Back Item, Accessory & Pet", price: 101.00, oldPrice: null, limit: 1, tokens: 15000 },
      { id: "lv-90", category: "levelup", name: "Lv90 Starter Pack", desc: "20,000 Tokens + Outfit, Weapon, Skills, Hairstyle, Back Item, Accessory & Pet", price: 141.00, oldPrice: null, limit: 1, tokens: 20000 },
      { id: "lv-100", category: "levelup", name: "Lv100 Starter Pack", desc: "30,000 Tokens + Outfit, Weapon, Skills, Hairstyle, Back Item, Accessory & Pet", price: 200.00, oldPrice: null, limit: 1, tokens: 30000 },

      /* JHOSP CARDENAS BOTS */
      { id: "bot-1m", category: "bots", name: "1 Month Access", desc: "", price: 13.00, oldPrice: null, limit: 99, tokens: 0 },
      { id: "bot-3m", category: "bots", name: "3 Month Access", desc: "", price: 30.00, oldPrice: null, limit: 99, tokens: 0 },
      { id: "bot-life", category: "bots", name: "Lifetime Access", desc: "", price: 210.00, oldPrice: null, limit: 99, tokens: 0 }
    ];
