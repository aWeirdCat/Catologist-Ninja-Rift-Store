/* ========================================================= */
/*                 MAIN APPLICATION LOGIC                   */
/* ========================================================= */

let currentLang = 'en';

/* ---------------- CART STATE ---------------- */
    const cart = {};
    let currentCategory = "first-time";
    let bpSeason = 1;
    let bpTier = "Normal";

    /* ---------------- INITIALIZATION ---------------- */
    window.addEventListener("DOMContentLoaded", () => {
      try {
        const savedPalette = localStorage.getItem('catologist_palette');
        if (savedPalette && PALETTE_CONFIGS[savedPalette]) {
          currentPaletteMode = savedPalette;
        }
      } catch(e) {}
      buildBattlepassGrid();
      updateLanguageUI();
      applyPalette();
      switchCategory(currentCategory);
      updateCartSummary();
      checkAnnouncementOnLoad();
    });

    /* ---------------- LANGUAGE TOGGLE ---------------- */
    function toggleLanguage() {
      currentLang = currentLang === 'en' ? 'bm' : 'en';
      const langText = document.getElementById("current-lang-text");
      if (langText) langText.innerText = currentLang.toUpperCase();
      updateLanguageUI();
      renderItems();
      updateCartSummary();
      syncBattlepassUI();
    }

    function updateLanguageUI() {
      const t = I18N[currentLang];
      const setText = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.innerText = val;
      };

      setText("txt-store-title", t.storeTitle);
      setText("txt-badge-label", t.fulfilmentLabel);
      setText("txt-badge-val", t.fulfilmentVal);
      setText("txt-badge-label-m", t.fulfilmentLabel);
      setText("txt-badge-val-m", t.fulfilmentVal);
      setText("txt-event-tag", t.eventTag);
      setText("txt-event-limit-note", t.eventLimitNote);
      setText("txt-event-announcement", t.eventAnnouncement);
      setText("txt-tokens-tag", t.tokensTag);
      setText("txt-tokens-ingame-tag", t.tokensIngameTag);
      setText("txt-tokens-notice-head", t.tokensNoticeHead);
      setText("txt-tokens-line1", t.tokensLine1);
      setText("txt-tokens-line2", t.tokensLine2);
      setText("txt-tokens-refer-text", t.tokensReferText);
      setText("txt-mc-tag", t.mcTag);
      setText("txt-mc-convert-pill", t.mcConvertPill);
      setText("txt-mc-desc", t.mcDesc);
      setText("txt-mc-convert-note", t.mcConvertNote);
      setText("txt-mc-line1", t.mcLine1);
      setText("txt-mc-refer", t.mcRefer);
      setText("txt-clan-tag", t.clanTag);
      setText("txt-clan-limit-tag", t.clanLimitTag);
      setText("btn-tab-clan-guide", t.clanTabGuide);
      setText("btn-tab-clan-compare", t.clanTabCompare);
      setText("txt-clan-roll-desc", t.clanRollDesc);
      setText("txt-clan-twin-desc", t.clanTwinDesc);
      setText("txt-clan-cap-desc", t.clanCapDesc);
      setText("txt-arena-tag", t.arenaTag);
      setText("txt-arena-badge-val", t.arenaBadgeVal);
      setText("btn-tab-arena-guide", t.arenaTabGuide);
      setText("btn-tab-arena-compare", t.arenaTabCompare);
      setText("txt-arena-baseline", t.arenaBaseline);
      setText("txt-arena-cap-desc", t.arenaCapDesc);
      setText("txt-arena-bigcap-desc", t.arenaBigcapDesc);
      setText("txt-arena-upcap-desc", t.arenaUpcapDesc);
      setText("txt-bp-rewards-tag", t.bpRewardsTag);
      setText("txt-bp-rewards-ingame-tag", t.bpRewardsIngameTag);
      setText("txt-bp-rewards-desc", t.bpRewardsDesc);
      setText("txt-emblem-tag", t.emblemTag);
      setText("txt-emblem-limit-tag", t.emblemLimitTag);
      setText("txt-emblem-basic-intro", t.emblemBasicIntro);
      setText("txt-emblem-plus-tierbonus", t.emblemPlusTierBonus);
      setText("txt-bonus-badge", t.bonusBadge);
      setText("txt-bonus-highlight", t.bonusHighlight);
      setText("txt-bonus-desc", t.bonusDesc);
      setText("txt-lv-rewards-tag", t.lvRewardsTag);
      setText("txt-lv-rewards-ingame-tag", t.lvRewardsIngameTag);
      setText("txt-lv-rewards-desc", t.lvRewardsDesc);
      setText("txt-lv-rewards-note", t.lvRewardsNote);
      setText("txt-lv-notes-tag", t.lvNotesTag);
      setText("txt-lv-notes-limit-tag", t.lvNotesLimitTag);
      setText("txt-lv-notes-desc", t.lvNotesDesc);
      setText("txt-lv-dup-skill", t.lvDupSkill);
      setText("txt-lv-dup-cosmetic", t.lvDupCosmetic);

      // Bots Category UI
      setText("txt-cat-bots", t.catBots);
      setText("txt-bots-tag", t.botsTag);
      setText("txt-bots-official-tag", t.botsOfficialTag);
      setText("txt-bots-title", t.botsTitle);
      setText("txt-bots-announcement", t.botsAnnouncement);
      setText("txt-bot-f1-title", t.botFeature1Title);
      setText("txt-bot-f1-desc", t.botFeature1Desc);
      setText("txt-bot-f2-title", t.botFeature2Title);
      setText("txt-bot-f2-desc", t.botFeature2Desc);
      setText("txt-bot-f3-title", t.botFeature3Title);
      setText("txt-bot-f3-desc", t.botFeature3Desc);
      setText("txt-bot-f4-title", t.botFeature4Title);
      setText("txt-bot-f4-desc", t.botFeature4Desc);
      setText("txt-bots-notice", t.botsNotice);
      setText("txt-bots-browse-pricing", t.botsBrowsePricing);
      setText("txt-bots-tut-title", t.botsTutorialTitle);
      setText("txt-bots-tut-sub", t.botsTutorialSub);
      setText("txt-tut-btn-setup", t.tutBtnSetup);
      setText("txt-tut-btn-events", t.tutBtnEvents);
      setText("txt-tut-btn-pve", t.tutBtnPve);
      setText("txt-tut-btn-arena", t.tutBtnArena);
      setText("txt-bp-tier-label", t.bpTierLabel);
      setText("txt-bp-season-label", t.bpSeasonLabel);
      setText("txt-copy-button", t.copyBtn);
      setText("txt-tokens-obtained-label", t.tokensObtainedLabel);

      const charInput = document.getElementById("char-id-input");
      if (charInput) charInput.placeholder = t.charIdPlaceholder;

      setText("txt-cart-view-label", t.cartView);
      setText("txt-total-label", t.cartTotal);
      setText("txt-drawer-title", t.drawerTitle);
      setText("txt-clear-cart", t.clearCart);
      setText("txt-drawer-total-label", t.drawerSubtotal);
      setText("txt-modal-success-title", t.modalSuccessTitle);
      setText("txt-modal-success-sub", t.modalSuccessSub);
      setText("txt-modal-close-btn", t.modalClose);
      setText("txt-header-notice-btn", t.headerNoticeBtn);
      setText("txt-anno-tag", t.annoTag);
      setText("btn-anno-lang-toggle", t.annoLangToggle);
      setText("txt-anno-greeting", t.annoGreeting);
      
      const elApology = document.getElementById("txt-anno-apology");
      if (elApology) elApology.innerHTML = t.annoApologyHtml;

      setText("txt-anno-est-title", t.annoEstTitle);

      const elLine1 = document.getElementById("txt-anno-est-line1");
      if (elLine1) elLine1.innerHTML = t.annoEstLine1Html;

      const elLine2 = document.getElementById("txt-anno-est-line2");
      if (elLine2) elLine2.innerHTML = t.annoEstLine2Html;

      setText("txt-anno-rush-note", t.annoRushNote);
      setText("txt-anno-closing-note", t.annoClosingNote);
      setText("txt-anno-chk-label", t.annoChkLabel);
      setText("btn-anno-confirm", t.annoConfirmBtn);

      setText("txt-lvmodal-tag", t.lvNoticeTag);
      setText("txt-lvmodal-rule1", t.lvNoticeRule1);
      setText("txt-lvmodal-rule2", t.lvNoticeRule2);
      setText("txt-lvmodal-rule3", t.lvNoticeRule3);
      setText("txt-lvmodal-chk-label", t.lvNoticeChk);
      setText("btn-lvmodal-confirm", t.lvNoticeBtn);

      const palCfg = PALETTE_CONFIGS[currentPaletteMode];
      const palText = document.getElementById("current-palette-text");
      if (palText && palCfg) {
        palText.innerText = currentLang === 'en' ? palCfg.name : palCfg.nameBm;
      }
    }

let currentPaletteMode = 'refined';

    function cyclePaletteMode() {
      const modes = ['refined', 'eyecare', 'vivid'];
      const nextIdx = (modes.indexOf(currentPaletteMode) + 1) % modes.length;
      currentPaletteMode = modes[nextIdx];
      try { localStorage.setItem('catologist_palette', currentPaletteMode); } catch(e) {}
      applyPalette();
      const cfg = PALETTE_CONFIGS[currentPaletteMode];
      const isEn = currentLang === 'en';
      showToast((isEn ? 'Palette switched to: ' : 'Palet ditukar kepada: ') + (isEn ? cfg.name : cfg.nameBm));
    }

    function applyPalette() {
      const cfg = PALETTE_CONFIGS[currentPaletteMode];
      const palText = document.getElementById('current-palette-text');
      if (palText) {
        palText.innerText = currentLang === 'en' ? cfg.name : cfg.nameBm;
        palText.className = 'font-bold tracking-wide ' + cfg.tagClass;
      }

      for (const cat in cfg.dots) {
        const dot = document.getElementById('dot-' + cat);
        if (dot) dot.className = cfg.dots[cat];
      }

      document.querySelectorAll(".tab-btn").forEach(btn => {
        const btnCat = btn.dataset.cat;
        if (btnCat === currentCategory) {
          btn.className = `tab-btn ${cfg.tabs[currentCategory]}`;
        } else {
          btn.className = "tab-btn";
        }
      });

      renderItems();
      if (currentCategory === 'battlepass') {
        buildBattlepassGrid();
      }
    }

    function switchCategory(cat) {
      currentCategory = cat;
      const palette = PALETTE_CONFIGS[currentPaletteMode];

      document.querySelectorAll(".tab-btn").forEach(btn => {
        const btnCat = btn.dataset.cat;
        if (btnCat === cat) {
          btn.className = `tab-btn ${palette.tabs[cat]}`;
          btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          btn.className = "tab-btn";
        }
      });

      const ftBanner = document.getElementById("first-time-banner");
      const tkBanner = document.getElementById("tokens-banner");
      const mcBanner = document.getElementById("marketcoins-banner");
      const clBanner = document.getElementById("clan-banner");
      const arBanner = document.getElementById("arena-banner");
      const emBanner = document.getElementById("emblem-banner");
      const emBonusBanner = document.getElementById("emblem-bonus-banner");
      const bpBox = document.getElementById("bp-customizer");
      const lvDescBanner = document.getElementById("levelup-banner-desc");
      const lvNotesBanner = document.getElementById("levelup-banner-notes");
      const botBanner = document.getElementById("bots-banner");
      const botTutSection = document.getElementById("bots-tutorial-section");

      const hideAll = () => {
        if (ftBanner) ftBanner.classList.add("hidden");
        if (tkBanner) tkBanner.classList.add("hidden");
        if (mcBanner) mcBanner.classList.add("hidden");
        if (clBanner) clBanner.classList.add("hidden");
        if (arBanner) arBanner.classList.add("hidden");
        if (emBanner) emBanner.classList.add("hidden");
        if (emBonusBanner) emBonusBanner.classList.add("hidden");
        if (bpBox) bpBox.classList.add("hidden");
        if (lvDescBanner) lvDescBanner.classList.add("hidden");
        if (lvNotesBanner) lvNotesBanner.classList.add("hidden");
        if (botBanner) botBanner.classList.add("hidden");
        if (botTutSection) botTutSection.classList.add("hidden");
      };

      hideAll();

      if (cat === "first-time") {
        if (ftBanner) ftBanner.classList.remove("hidden");
      } else if (cat === "token") {
        if (tkBanner) tkBanner.classList.remove("hidden");
      } else if (cat === "marketcoins") {
        if (mcBanner) mcBanner.classList.remove("hidden");
      } else if (cat === "clan") {
        if (clBanner) clBanner.classList.remove("hidden");
      } else if (cat === "arena") {
        if (arBanner) arBanner.classList.remove("hidden");
      } else if (cat === "emblem") {
        if (emBanner) emBanner.classList.remove("hidden");
        if (emBonusBanner) emBonusBanner.classList.remove("hidden");
      } else if (cat === "battlepass") {
        if (bpBox) bpBox.classList.remove("hidden");
        buildBattlepassGrid();
        syncBattlepassUI();
      } else if (cat === "levelup") {
        if (lvDescBanner) lvDescBanner.classList.remove("hidden");
        if (lvNotesBanner) lvNotesBanner.classList.remove("hidden");
      } else if (cat === "bots") {
        if (botBanner) botBanner.classList.remove("hidden");
        if (botTutSection) botTutSection.classList.remove("hidden");
      }

      renderItems();
    }

    function switchClanInfo(view) {
      const guideBox = document.getElementById("clan-info-guide");
      const compareBox = document.getElementById("clan-info-compare");
      const btnGuide = document.getElementById("btn-tab-clan-guide");
      const btnCompare = document.getElementById("btn-tab-clan-compare");

      if (view === 'guide') {
        guideBox.classList.remove("hidden");
        compareBox.classList.add("hidden");
        btnGuide.className = "flex-1 py-1.5 rounded-lg text-xs font-semibold transition bg-teal-600 text-white shadow-sm";
        btnCompare.className = "flex-1 py-1.5 rounded-lg text-xs font-semibold transition text-zinc-400 hover:text-white";
      } else {
        guideBox.classList.add("hidden");
        compareBox.classList.remove("hidden");
        btnCompare.className = "flex-1 py-1.5 rounded-lg text-xs font-semibold transition bg-teal-600 text-white shadow-sm";
        btnGuide.className = "flex-1 py-1.5 rounded-lg text-xs font-semibold transition text-zinc-400 hover:text-white";
      }
    }

    function switchArenaInfo(view) {
      const guideBox = document.getElementById("arena-info-guide");
      const compareBox = document.getElementById("arena-info-compare");
      const btnGuide = document.getElementById("btn-tab-arena-guide");
      const btnCompare = document.getElementById("btn-tab-arena-compare");

      if (view === 'guide') {
        guideBox.classList.remove("hidden");
        compareBox.classList.add("hidden");
        btnGuide.className = "flex-1 py-1.5 rounded-lg text-xs font-semibold transition bg-indigo-600 text-white shadow-sm";
        btnCompare.className = "flex-1 py-1.5 rounded-lg text-xs font-semibold transition text-zinc-400 hover:text-white";
      } else {
        guideBox.classList.add("hidden");
        compareBox.classList.remove("hidden");
        btnCompare.className = "flex-1 py-1.5 rounded-lg text-xs font-semibold transition bg-indigo-600 text-white shadow-sm";
        btnGuide.className = "flex-1 py-1.5 rounded-lg text-xs font-semibold transition text-zinc-400 hover:text-white";
      }
    }

    function switchEmblemInfo(tier) {
      const basicBox = document.getElementById("emblem-info-basic");
      const plusBox = document.getElementById("emblem-info-plus");
      const btnBasic = document.getElementById("btn-tab-emblem");
      const btnPlus = document.getElementById("btn-tab-emblemplus");

      if (tier === 'emblem') {
        basicBox.classList.remove("hidden");
        plusBox.classList.add("hidden");
        btnBasic.className = "flex-1 py-1.5 rounded-lg text-xs font-semibold transition bg-amber-500 text-zinc-950 shadow-sm";
        btnPlus.className = "flex-1 py-1.5 rounded-lg text-xs font-semibold transition text-zinc-400 hover:text-white";
      } else {
        basicBox.classList.add("hidden");
        plusBox.classList.remove("hidden");
        btnPlus.className = "flex-1 py-1.5 rounded-lg text-xs font-semibold transition bg-amber-500 text-zinc-950 shadow-sm";
        btnBasic.className = "flex-1 py-1.5 rounded-lg text-xs font-semibold transition text-zinc-400 hover:text-white";
      }
    }

    /* ---------------- BATTLEPASS LOGIC ---------------- */
    function getBpPrice(season, tier) {
      const isMaxed = tier === "Maxed";
      if (season === 22) {
        return isMaxed ? 61.00 : 41.00;
      } else if (season >= 12 && season <= 21) {
        return isMaxed ? 31.00 : 21.00;
      } else {
        return isMaxed ? 16.00 : 11.00;
      }
    }

    function buildBattlepassGrid() {
      const grid = document.getElementById("bp-season-grid");
      if (!grid) return;
      grid.innerHTML = "";
      for (let s = 1; s <= 22; s++) {
        const btn = document.createElement("button");
        btn.type = "button";
        const isS22 = s === 22;
        const isSelected = s === bpSeason;
        const inCartForSeason = Object.keys(cart).find(k => k.startsWith(`bp-s${s}-`));

        let baseClasses = "relative py-1.5 rounded-xl text-xs font-mono font-medium transition border text-center ";
        if (isSelected) {
          baseClasses += "bg-rose-600 text-white border-rose-400 shadow-sm font-bold scale-[1.02]";
        } else if (inCartForSeason) {
          baseClasses += "bg-emerald-950/40 border-emerald-500/50 text-emerald-300 font-semibold";
        } else if (isS22) {
          baseClasses += "bg-amber-950/20 border-amber-500/40 text-amber-300 hover:border-amber-400";
        } else {
          baseClasses += "bg-surface-input border-surface-border text-zinc-300 hover:bg-zinc-800 hover:text-white";
        }

        btn.className = baseClasses;
        btn.innerHTML = `${s}${inCartForSeason && !isSelected ? `<span class="absolute top-0.5 right-1 w-1.5 h-1.5 rounded-full bg-emerald-400"></span>` : ''}`;
        btn.onclick = () => {
          bpSeason = s;
          buildBattlepassGrid();
          syncBattlepassUI();
        };
        grid.appendChild(btn);
      }
      syncBattlepassUI();
    }

    function setBpTier(tier) {
      bpTier = tier;
      const btnNorm = document.getElementById("btn-bp-normal");
      const btnMax = document.getElementById("btn-bp-maxed");
      const dotNorm = document.getElementById("dot-tier-normal");
      const dotMax = document.getElementById("dot-tier-maxed");
      const rateNorm = document.getElementById("tier-rate-normal");
      const rateMax = document.getElementById("tier-rate-maxed");

      if (tier === "Normal") {
        if (btnNorm) btnNorm.className = "p-2.5 px-3 rounded-xl border text-left transition flex items-center justify-between bg-rose-950/25 border-rose-500/50 ring-1 ring-rose-500/20 text-white shadow-sm group";
        if (btnMax) btnMax.className = "p-2.5 px-3 rounded-xl border text-left transition flex items-center justify-between bg-[#111116] border-surface-border text-zinc-400 hover:text-white hover:border-zinc-700 group";
        if (dotNorm) dotNorm.className = "w-1.5 h-1.5 rounded-full bg-rose-400";
        if (dotMax) dotMax.className = "w-1.5 h-1.5 rounded-full bg-transparent";
        if (rateNorm) rateNorm.className = "text-xs font-mono font-bold text-rose-300";
        if (rateMax) rateMax.className = "text-xs font-mono font-bold text-zinc-400";
      } else {
        if (btnMax) btnMax.className = "p-2.5 px-3 rounded-xl border text-left transition flex items-center justify-between bg-rose-950/25 border-rose-500/50 ring-1 ring-rose-500/20 text-white shadow-sm group";
        if (btnNorm) btnNorm.className = "p-2.5 px-3 rounded-xl border text-left transition flex items-center justify-between bg-[#111116] border-surface-border text-zinc-400 hover:text-white hover:border-zinc-700 group";
        if (dotMax) dotMax.className = "w-1.5 h-1.5 rounded-full bg-rose-400";
        if (dotNorm) dotNorm.className = "w-1.5 h-1.5 rounded-full bg-transparent";
        if (rateMax) rateMax.className = "text-xs font-mono font-bold text-rose-300";
        if (rateNorm) rateNorm.className = "text-xs font-mono font-bold text-zinc-400";
      }
      syncBattlepassUI();
    }

    function syncBattlepassUI() {
      const price = getBpPrice(bpSeason, bpTier);
      const isEn = currentLang === 'en';
      let bracketName = bpSeason === 22 
        ? (isEn ? "Season 22 (Latest)" : "Musim 22 (Terkini)")
        : bpSeason >= 12 
        ? (isEn ? "Seasons 12–21 Bracket" : "Kategori Musim 12–21")
        : (isEn ? "Seasons 1–11 Bracket" : "Kategori Musim 1–11");

      const activeBracket = document.getElementById("bp-active-bracket");
      if (activeBracket) activeBracket.innerText = `S${bpSeason} • ${bracketName}`;

      const rateNorm = document.getElementById("tier-rate-normal");
      const rateMax = document.getElementById("tier-rate-maxed");
      if (rateNorm) rateNorm.innerText = `RM ${getBpPrice(bpSeason, "Normal").toFixed(2)}`;
      if (rateMax) rateMax.innerText = `RM ${getBpPrice(bpSeason, "Maxed").toFixed(2)}`;
      
      const sWord = isEn ? "Season" : "Musim";
      const existingSeasonKey = Object.keys(cart).find(k => k.startsWith(`bp-s${bpSeason}-`));
      const addBtnLabel = document.getElementById("bp-add-button-label");
      const addBtnPrice = document.getElementById("bp-add-button-price");

      if (addBtnLabel && addBtnPrice) {
        if (existingSeasonKey) {
          const item = cart[existingSeasonKey];
          if (item.id === `bp-s${bpSeason}-${bpTier.toLowerCase()}`) {
            addBtnLabel.innerText = `✓ ${sWord} ${bpSeason} [${bpTier}] (Limit 1)`;
          } else {
            addBtnLabel.innerText = `Switch to ${sWord} ${bpSeason} [${bpTier}] (Limit 1)`;
          }
        } else {
          addBtnLabel.innerText = `+ Add ${sWord} ${bpSeason} [${bpTier}] (Limit 1)`;
        }
        addBtnPrice.innerText = `RM ${price.toFixed(2)}`;
      }
    }

    function addBattlepassToCart() {
      const bpId = `bp-s${bpSeason}-${bpTier.toLowerCase()}`;
      const price = getBpPrice(bpSeason, bpTier);
      const isEn = currentLang === 'en';
      const sWord = isEn ? "Season" : "Musim";

      const existingSeasonKey = Object.keys(cart).find(k => k.startsWith(`bp-s${bpSeason}-`));
      if (existingSeasonKey) {
        if (existingSeasonKey === bpId) {
          showToast(isEn ? `Season ${bpSeason} already in order (Limit 1)` : `Musim ${bpSeason} sudah dalam pesanan (Had 1)`);
          return;
        } else {
          delete cart[existingSeasonKey];
        }
      }

      cart[bpId] = {
        id: bpId,
        name: `Battlepass ${sWord} ${bpSeason} [${bpTier}]`,
        desc: bpTier === 'Normal' ? 'Discounted Pass Activation' : 'Maxed Pass Activation',
        price: price,
        qty: 1,
        limit: 1,
        tokens: 0
      };

      updateCartSummary();
      buildBattlepassGrid();
      syncBattlepassUI();
      showToast(`${sWord} ${bpSeason} [${bpTier}] added`);
    }

    /* ---------------- PRODUCT RENDERING (WITH LEVEL UP PREVIEW BUTTON) ---------------- */
    function renderItems() {
      const list = document.getElementById("product-list");
      list.innerHTML = "";

      if (currentCategory === "battlepass") return;

      const items = CATALOG.filter(item => item.category === currentCategory);
      const palette = PALETTE_CONFIGS[currentPaletteMode];
      const catKey = currentCategory in palette.cards ? currentCategory : 'default';

      items.forEach(item => {
        const inCartQty = cart[item.id] ? cart[item.id].qty : 0;
        const isLimitReached = item.limit === 1 && inCartQty >= 1;

        const row = document.createElement("div");
        const cardStyle = inCartQty > 0 
          ? palette.cards[catKey].inCart 
          : 'bg-surface-card border-surface-border ' + palette.cards[catKey].hover;

        row.className = `p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between gap-3 ${cardStyle}`;

        const priceColor = palette.prices[catKey];
        const addBtnStyle = palette.buttons[catKey];
        const stepperBg = palette.steppers[catKey];

        const isLevelUp = item.category === 'levelup';
        const isEmblem = item.category === 'emblem';
        const otherEmblemInCart = isEmblem && Object.keys(cart).some(k => k.startsWith('em-') && k !== item.id);

        const badgeHtml = isEmblem
          ? `<span class="text-[9px] font-mono font-medium px-1.5 py-0.2 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">${I18N[currentLang].emblemChoiceBadge}</span>`
          : (item.limit === 1 ? `<span class="text-[9px] font-mono font-medium px-1.5 py-0.2 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/60">${I18N[currentLang].limit1Badge}</span>` : '');

        row.innerHTML = `
          <div class="flex items-start justify-between gap-2">
            <div class="flex-1 min-w-0 pr-1.5">
              <div class="flex items-center gap-2">
                <span class="text-xs sm:text-[13px] font-semibold text-white tracking-tight truncate">${item.name}</span>
                ${badgeHtml}
              </div>
              ${item.desc && item.desc.trim() ? `<p class="text-[11px] sm:text-xs text-zinc-400 leading-snug break-words mt-1">${item.desc}</p>` : ''}
            </div>

            <div class="text-right shrink-0">
              <div class="text-xs sm:text-[13px] font-bold font-mono ${priceColor} tracking-tight">
                RM ${item.price.toFixed(2)}
              </div>
              ${item.oldPrice ? `<div class="text-[10px] text-zinc-500 line-through font-mono">RM ${item.oldPrice.toFixed(2)}</div>` : ''}
            </div>
          </div>

          <div class="flex items-center ${isLevelUp ? 'justify-between' : 'justify-end'} gap-2 pt-2 border-t border-zinc-800/40">
            ${isLevelUp ? `
              <!-- Eye-Catching Level Up Package Preview Button -->
              <button 
                type="button" 
                onclick="openPackagePreview('${item.id}')"
                class="px-2.5 py-1.5 rounded-xl bg-pink-500/15 hover:bg-pink-500/25 border border-pink-500/35 text-pink-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition active:scale-95 group shadow-sm">
                <svg class="w-3.5 h-3.5 text-pink-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span>Preview</span>
              </button>
            ` : ''}

            <div class="flex items-center">
              ${inCartQty === 0 ? `
                <button 
                  type="button" 
                  onclick="addToCart('${item.id}')"
                  class="px-3.5 py-1.5 rounded-xl active:scale-95 text-xs font-semibold transition ${addBtnStyle}">
                  ${otherEmblemInCart ? I18N[currentLang].switchBtn : '+ Add'}
                </button>
              ` : `
                <div class="flex items-center gap-1.5 ${stepperBg} border rounded-xl p-1">
                  <button 
                    type="button" 
                    onclick="changeQty('${item.id}', -1)" 
                    class="w-6 h-6 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg text-xs font-mono transition">
                    -
                  </button>
                  <span class="w-5 text-center font-mono text-xs font-bold text-white">${inCartQty}</span>
                  <button 
                    type="button" 
                    onclick="changeQty('${item.id}', 1)" 
                    ${isLimitReached ? 'disabled' : ''}
                    class="w-6 h-6 flex items-center justify-center rounded-lg text-xs font-mono transition ${
                      isLimitReached 
                        ? 'text-zinc-600 cursor-not-allowed' 
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }">
                    +
                  </button>
                </div>
              `}
            </div>
          </div>
        `;

        list.appendChild(row);
      });
    }

    /* ---------------- LEVEL UP PREVIEW MODAL LOGIC ---------------- */
    let currentPreviewId = null;

    function openPackagePreview(pkgId) {
      currentPreviewId = pkgId;
      const data = LEVEL_UP_DATA[pkgId];
      if (!data) return;

      const modal = document.getElementById("preview-modal");
      const titleEl = document.getElementById("preview-pkg-title");
      const tokensEl = document.getElementById("preview-pkg-tokens");
      const grid = document.getElementById("preview-items-grid");
      const quickAddBtn = document.getElementById("preview-quick-add-btn");
      const tokenVal = document.getElementById("preview-token-value");
      const tokenImg = document.getElementById("preview-token-img");

      titleEl.innerText = data.title;
      tokensEl.innerText = `+${data.tokens.toLocaleString()} Tokens Included`;
      if (tokenVal) tokenVal.innerText = (data.tokens || 0).toLocaleString();
      if (tokenImg && CUSTOM_ITEM_IMAGES["token_coin"]) {
        tokenImg.src = CUSTOM_ITEM_IMAGES["token_coin"];
      }
      grid.innerHTML = "";

      data.items.forEach((item, index) => {
        const slot = document.createElement("div");
        slot.className = "item-slot group relative bg-zinc-950/80 hover:bg-[#181822] border border-zinc-800 hover:border-pink-500/60 rounded-2xl p-3 flex flex-col items-center justify-between cursor-pointer transition shadow-md select-none hover:z-40";
        
        // Custom image support using either CUSTOM_ITEM_IMAGES[item.imgKey] or item.image with fallback icon
        const customImgSrc = (item.imgKey && CUSTOM_ITEM_IMAGES[item.imgKey]) ? CUSTOM_ITEM_IMAGES[item.imgKey] : (item.image || "");
        const imageHtml = customImgSrc && customImgSrc.trim().length > 5 
          ? `<img src="${customImgSrc}" alt="${item.name}" class="w-12 h-12 object-contain rounded-lg drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]" onerror="if (this.src.endsWith('.png')) { this.src = this.src.replace(/\.png$/, '.jpeg'); } else if (this.src.endsWith('.jpeg')) { this.src = this.src.replace(/\.jpeg$/, '.jpg'); } else { this.onerror=null; this.parentElement.innerHTML='<span class=\\'text-3xl filter drop-shadow\\'>${item.icon}</span>'; }">`
          : `<span class="text-3xl filter drop-shadow-[0_4px_10px_rgba(236,72,153,0.3)] group-hover:scale-110 transition-transform">${item.icon}</span>`;

        // Smart tooltip positioning:
        // Top row (0-3) opens downwards so it NEVER covers the header!
        // Bottom row (4-7) opens upwards.
        const isTopRow = index < 4;
        const positionClass = isTopRow 
          ? "top-[104%] translate-y-1" 
          : "bottom-[104%] -translate-y-1";

        // Caret positioning matching 100% opaque solid background
        const caretHtml = isTopRow 
          ? `<div class="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#16161f] border-t border-l border-pink-500/50 rotate-45 z-10"></div>`
          : `<div class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#16161f] border-b border-r border-pink-500/50 rotate-45 z-10"></div>`;

        // Horizontal alignment check to avoid clipping on screen edges
        let alignClass = "left-1/2 -translate-x-1/2";
        if (index % 4 === 0) {
          alignClass = "left-0"; // left edge
        } else if (index % 4 === 3) {
          alignClass = "right-0"; // right edge
        }

        slot.innerHTML = `
          <!-- Item Card Face -->
          <div class="w-full flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1">
            <span class="truncate pr-1">${item.type}</span>
            <span class="px-1.5 py-0.2 rounded text-[8.5px] font-bold ${item.rarityColor}">${item.rarity}</span>
          </div>

          <div class="my-2.5 flex items-center justify-center h-12">
            ${imageHtml}
          </div>

          <div class="w-full text-center">
            <div class="text-xs font-bold text-white tracking-tight truncate group-hover:text-pink-300 transition-colors">${item.name}</div>
          </div>

          <!-- Non-obstructive Solid Tooltip Card with elevated z-index -->
          <div class="item-tooltip absolute ${positionClass} ${alignClass} w-64 bg-[#16161f] border border-pink-500/60 p-3.5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.98)] text-left pointer-events-none z-50">
            ${caretHtml}
            <div class="flex items-center justify-between gap-1 border-b border-zinc-800 pb-1.5 mb-2">
              <span class="text-[10px] font-mono uppercase tracking-wider text-pink-300 font-bold">${item.type}</span>
              <span class="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded ${item.rarityColor}">${item.rarity}</span>
            </div>
            <div class="text-xs font-bold text-white tracking-tight mb-1">${item.name}</div>
            <p class="text-[11px] text-zinc-300 leading-relaxed mb-2 font-sans">${item.desc}</p>
            <div class="pt-2 border-t border-zinc-800/80 text-[10.5px] font-mono text-emerald-400 font-medium">
              ${item.stats}
            </div>
          </div>
        `;

        // Mobile tap toggle for tooltips
        slot.addEventListener('click', (e) => {
          if (window.innerWidth < 640) {
            e.stopPropagation();
            document.querySelectorAll('.item-tooltip').forEach(tt => {
              if (tt !== slot.querySelector('.item-tooltip')) {
                tt.style.visibility = 'hidden';
                tt.style.opacity = '0';
              }
            });
            const tt = slot.querySelector('.item-tooltip');
            const isVisible = tt.style.visibility === 'visible';
            tt.style.visibility = isVisible ? 'hidden' : 'visible';
            tt.style.opacity = isVisible ? '0' : '1';
          }
        });

        grid.appendChild(slot);
      });

      // Quick add button inside modal
      const inCart = cart[pkgId] && cart[pkgId].qty > 0;
      quickAddBtn.innerText = inCart ? "✓ In Order List" : "+ Add to Order";
      quickAddBtn.className = inCart 
        ? "flex-1 sm:flex-none px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold transition shadow-sm"
        : "flex-1 sm:flex-none px-5 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 active:scale-95 text-white text-xs font-bold transition shadow-[0_0_15px_rgba(236,72,153,0.3)]";

      quickAddBtn.onclick = () => {
        addToCart(pkgId);
        quickAddBtn.innerText = "✓ Added to Order";
        quickAddBtn.className = "flex-1 sm:flex-none px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold transition shadow-sm";
        showToast(`${data.title} added to order`);
      };

      modal.classList.remove("hidden");
      modal.classList.add("flex");
    }

    function closePreviewModal() {
      const modal = document.getElementById("preview-modal");
      if (modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }
    }

    /* ---------------- CART OPERATIONS ---------------- */
    function addToCart(itemId) {
      const item = CATALOG.find(p => p.id === itemId);
      if (!item) return;

      // Enforce single choice among the 3 Emblem options
      if (item.category === "emblem") {
        const existingEmblemKey = Object.keys(cart).find(k => k.startsWith("em-"));
        if (existingEmblemKey && existingEmblemKey !== itemId) {
          delete cart[existingEmblemKey];
          const isEn = currentLang === 'en';
          showToast(isEn ? `Switched to ${item.name} (Choose 1 only)` : `Ditukar kepada ${item.name} (Pilih 1 sahaja)`);
        }
      }

      if (!cart[itemId]) {
        cart[itemId] = {
          id: item.id,
          name: item.name,
          desc: item.desc,
          price: item.price,
          qty: 1,
          limit: item.limit || 99,
          tokens: item.tokens || 0
        };
      } else {
        if (cart[itemId].limit === 1 && cart[itemId].qty >= 1) return;
        cart[itemId].qty += 1;
      }

      updateCartSummary();
      renderItems();
    }

    function changeQty(itemId, delta) {
      if (!cart[itemId]) return;

      const newQty = cart[itemId].qty + delta;
      if (newQty <= 0) {
        delete cart[itemId];
      } else {
        if (cart[itemId].limit === 1 && newQty > 1) return;
        cart[itemId].qty = newQty;
      }

      updateCartSummary();
      renderItems();
      renderCartDrawerItems();
    }

    function clearCart() {
      for (const key in cart) delete cart[key];
      updateCartSummary();
      renderItems();
      renderCartDrawerItems();
    }

    function updateCartSummary() {
      let totalQty = 0;
      let totalPrice = 0;

      for (const id in cart) {
        totalQty += cart[id].qty;
        totalPrice += cart[id].price * cart[id].qty;
      }

      document.getElementById("cart-item-count-badge").innerText = `${totalQty} item${totalQty === 1 ? '' : 's'}`;
      document.getElementById("cart-subtotal").innerText = `RM ${totalPrice.toFixed(2)}`;
      document.getElementById("drawer-count-pill").innerText = totalQty;
      document.getElementById("drawer-total-amount").innerText = `RM ${totalPrice.toFixed(2)}`;

      if (currentCategory === "battlepass") {
        buildBattlepassGrid();
        syncBattlepassUI();
      }
    }

    function toggleCartDrawer() {
      const drawer = document.getElementById("cart-drawer");
      const isHidden = drawer.classList.contains("hidden");
      if (isHidden) {
        renderCartDrawerItems();
        drawer.classList.remove("hidden");
        drawer.classList.add("flex");
      } else {
        drawer.classList.add("hidden");
        drawer.classList.remove("flex");
      }
    }

    function renderCartDrawerItems() {
      const container = document.getElementById("cart-drawer-items");
      container.innerHTML = "";

      const keys = Object.keys(cart);
      if (keys.length === 0) {
        container.innerHTML = `<div class="py-10 text-center text-xs text-zinc-500 font-medium">${I18N[currentLang].emptyCartMsg}</div>`;
        return;
      }

      keys.forEach(id => {
        const item = cart[id];
        const row = document.createElement("div");
        row.className = "flex items-center justify-between p-3 rounded-xl bg-[#17171e] border border-zinc-800 text-xs";
        row.innerHTML = `
          <div class="min-w-0 pr-2">
            <div class="font-semibold text-white tracking-tight truncate">${item.name}</div>
            <div class="text-[11px] text-zinc-400 font-mono mt-0.5">RM ${item.price.toFixed(2)} x ${item.qty} = RM ${(item.price * item.qty).toFixed(2)}</div>
          </div>
          <div class="flex items-center gap-1.5 shrink-0">
            <button onclick="changeQty('${item.id}', -1)" class="w-6 h-6 rounded bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center font-mono transition">-</button>
            <span class="w-4 text-center font-mono font-bold text-white">${item.qty}</span>
            <button onclick="changeQty('${item.id}', 1)" ${item.limit === 1 && item.qty >= 1 ? 'disabled' : ''} class="w-6 h-6 rounded bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center font-mono disabled:opacity-30 disabled:cursor-not-allowed transition">+</button>
          </div>
        `;
        container.appendChild(row);
      });
    }

    function calculateTotalTokens() {
      let total = 0;
      for (const id in cart) {
        const item = cart[id];
        let t = item.tokens;
        if (t === undefined) {
          const match = (item.desc || "").match(/([\d,]+)\s*(Tokens|Market Coins)/i);
          t = match ? parseInt(match[1].replace(/,/g, ''), 10) || 0 : 0;
        }
        total += t * (item.qty || 1);
      }
      return total;
    }

    function handleTokensClick() {
      const totalTokens = calculateTotalTokens();
      const isEn = currentLang === 'en';
      showToast(isEn ? `Order includes ~${totalTokens.toLocaleString()} Tokens!` : `Pesanan ini mengandungi ~${totalTokens.toLocaleString()} Token!`);
    }

    function generateCleanOrderTicket(charId) {
      const t = I18N[currentLang];
      const regularItems = [];
      const battlepassItems = [];
      let total = 0;

      for (const id in cart) {
        const item = cart[id];
        const lineTotal = item.price * item.qty;
        total += lineTotal;

        if (id.startsWith('bp-') || item.name.toLowerCase().includes('battlepass')) {
          const match = item.name.match(/Season\s*(\d+)/i) || id.match(/s(\d+)/i);
          const seasonNum = match ? parseInt(match[1], 10) : 999;
          battlepassItems.push({
            season: seasonNum,
            text: "- " + item.qty + "x " + item.name + " (RM " + lineTotal.toFixed(2) + ")"
          });
        } else if (id.startsWith('lv-') || item.name.toLowerCase().includes('starter pack')) {
          const match = item.name.match(/Lv\s*(\d+)/i) || id.match(/lv-(\d+)/i);
          const lvNum = match ? parseInt(match[1], 10) : 999;
          regularItems.push({
            isStarterPack: true,
            orderKey: lvNum,
            text: "- " + item.qty + "x " + item.name + " (RM " + lineTotal.toFixed(2) + ")"
          });
        } else {
          const descLine = item.desc && item.desc.trim() ? "\n  " + item.desc : "";
          regularItems.push({
            isStarterPack: false,
            orderKey: 999,
            text: "- " + item.qty + "x " + item.name + " (RM " + lineTotal.toFixed(2) + ")" + descLine
          });
        }
      }

      battlepassItems.sort((a, b) => a.season - b.season);
      const formattedBpList = battlepassItems.map(b => b.text);

      const starterPacks = regularItems.filter(r => r.isStarterPack).sort((a, b) => a.orderKey - b.orderKey);
      const otherItems = regularItems.filter(r => !r.isStarterPack);
      const formattedRegularList = [...otherItems.map(r => r.text), ...starterPacks.map(r => r.text)];

      let itemsBlock = "";
      if (formattedRegularList.length > 0 && formattedBpList.length > 0) {
        itemsBlock = t.ticketItemsHeader + "\n" + formattedRegularList.join("\n") + "\n\nBattlepass :\n" + formattedBpList.join("\n");
      } else if (formattedBpList.length > 0) {
        itemsBlock = "Battlepass :\n" + formattedBpList.join("\n");
      } else {
        itemsBlock = t.ticketItemsHeader + "\n" + formattedRegularList.join("\n");
      }

      return t.ticketHeader + "\n" +
             t.ticketCharId + ": " + charId + "\n" +
             t.ticketFulfilment + "\n\n" +
             itemsBlock + "\n\n" +
             t.ticketTotal + " " + total.toFixed(2) + "\n\n" +
             t.ticketClosing;
    }

    function handleWhatsAppOrder() {
      const charId = document.getElementById("char-id-input").value.trim();
      const t = I18N[currentLang];

      if (!charId) {
        showToast(t.toastCharRequired);
        document.getElementById("char-id-input").focus();
        return;
      }

      if (Object.keys(cart).length === 0) {
        showToast(t.toastCartEmpty);
        return;
      }

      const ticketText = generateCleanOrderTicket(charId);
      fallbackCopy(ticketText);

      const targetPhone = "601121354481";
      const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(ticketText)}`;
      window.open(waUrl, '_blank');
      showToast('Opening WhatsApp with your order...');
    }

    function checkAnnouncementOnLoad() {
      try {
        const dismissed = localStorage.getItem('catologist_anno_dismissed');
        const today = new Date().toISOString().slice(0, 10);
        if (dismissed === today) return;
      } catch(e) {}

      setTimeout(() => {
        openAnnouncementModal();
      }, 350);
    }

    function openAnnouncementModal() {
      const modal = document.getElementById("announcement-modal");
      if (modal) {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      }
    }

    function closeAnnouncementModal() {
      const modal = document.getElementById("announcement-modal");
      const chk = document.getElementById("chk-dont-show-anno");
      if (chk && chk.checked) {
        try {
          const today = new Date().toISOString().slice(0, 10);
          localStorage.setItem('catologist_anno_dismissed', today);
        } catch(e) {}
      }
      if (modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }
    }

    /* ---------------- LEVEL UP NOTICE MODAL LOGIC ---------------- */
    function openLevelUpNoticeModal() {
      try {
        const dismissed = localStorage.getItem('catologist_lvnotice_dismissed');
        const today = new Date().toISOString().slice(0, 10);
        if (dismissed === today) {
          return;
        }
      } catch(e) {}

      const modal = document.getElementById("levelup-notice-modal");
      if (modal) {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      }
    }

    function closeLevelUpNoticeModal() {
      const modal = document.getElementById("levelup-notice-modal");
      const chk = document.getElementById("chk-dont-show-lvnotice");
      if (chk && chk.checked) {
        try {
          const today = new Date().toISOString().slice(0, 10);
          localStorage.setItem('catologist_lvnotice_dismissed', today);
        } catch(e) {}
      }
      if (modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }
    }

    function handleCopyOrder() {
      const charId = document.getElementById("char-id-input").value.trim();
      const t = I18N[currentLang];

      if (!charId) {
        showToast(t.toastCharRequired);
        document.getElementById("char-id-input").focus();
        return;
      }

      if (Object.keys(cart).length === 0) {
        showToast(t.toastCartEmpty);
        return;
      }

      const ticketText = generateCleanOrderTicket(charId);
      fallbackCopy(ticketText);

      const totalTokens = calculateTotalTokens();
      const tokensCountEl = document.getElementById("modal-tokens-count");
      if (tokensCountEl) tokensCountEl.innerText = totalTokens.toLocaleString();

      document.getElementById("ticket-preview-box").innerText = ticketText;
      const modal = document.getElementById("ticket-modal");
      modal.classList.remove("hidden");
      modal.classList.add("flex");

      showToast(t.toastCopied);
    }

    function closeTicketModal() {
      const modal = document.getElementById("ticket-modal");
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }

    function fallbackCopy(text) {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try { document.execCommand('copy'); } catch(e) {}
      document.body.removeChild(ta);
    }

    /* ---------------- PAYMENT QR LOGIC ---------------- */

let activeQrProvider = "maybank";

    function openQrModal(provider) {
      activeQrProvider = provider || "maybank";
      const qrModal = document.getElementById("qr-modal");
      if (!qrModal) return;
      renderQrView();
      qrModal.classList.remove("hidden");
      qrModal.classList.add("flex");
    }

    function closeQrModal() {
      const qrModal = document.getElementById("qr-modal");
      if (qrModal) {
        qrModal.classList.add("hidden");
        qrModal.classList.remove("flex");
      }
    }

    function switchQrProvider(provider) {
      activeQrProvider = provider;
      renderQrView();
    }

    function renderQrView() {
      const btnTng = document.getElementById("tab-qr-tng");
      const btnMaybank = document.getElementById("tab-qr-maybank");
      const btnCimb = document.getElementById("tab-qr-cimb");
      const banner = document.getElementById("qr-brand-banner");
      const brandName = document.getElementById("qr-brand-name");
      const displayImg = document.getElementById("qr-display-image");
      const guideAppName = document.getElementById("qr-guide-appname");

      const tabs = [btnTng, btnMaybank, btnCimb];
      tabs.forEach(btn => {
        if (btn) btn.className = "py-1.5 rounded-lg font-semibold transition text-center text-zinc-400 hover:text-white";
      });

      let brandColor = "#e5a700";
      let appTitle = "Maybank MAE / M2U";

      if (activeQrProvider === "tng") {
        if (btnTng) btnTng.className = "py-1.5 rounded-lg font-semibold transition text-center bg-blue-600 text-white shadow-sm";
        brandColor = "#0066cc";
        appTitle = "Touch 'n Go eWallet";
      } else if (activeQrProvider === "maybank") {
        if (btnMaybank) btnMaybank.className = "py-1.5 rounded-lg font-semibold transition text-center bg-amber-500 text-zinc-950 shadow-sm";
        brandColor = "#e5a700";
        appTitle = "Maybank MAE / M2U";
      } else if (activeQrProvider === "cimb") {
        if (btnCimb) btnCimb.className = "py-1.5 rounded-lg font-semibold transition text-center bg-rose-600 text-white shadow-sm";
        brandColor = "#ed1c24";
        appTitle = "CIMB Octo / Clicks";
      }

      if (banner) banner.style.backgroundColor = brandColor;
      if (brandName) brandName.innerText = appTitle;
      if (guideAppName) guideAppName.innerText = appTitle;

      if (displayImg) {
        const rawSrc = QR_IMAGES[activeQrProvider] || QR_IMAGES.maybank;
        displayImg.src = rawSrc;
        displayImg.onerror = function() {
          if (this.src.endsWith('.png')) {
            this.src = this.src.replace(/\.png$/, '.jpeg');
          } else if (this.src.endsWith('.jpeg')) {
            this.src = this.src.replace(/\.jpeg$/, '.jpg');
          }
        };
      }

      let subtotal = 0;
      for (const id in cart) subtotal += cart[id].price * cart[id].qty;
      const charId = document.getElementById("char-id-input").value.trim() || "-";
      
      const amtEl = document.getElementById("qr-val-amount");
      if (amtEl) amtEl.innerText = `RM ${subtotal.toFixed(2)}`;

      const refEl = document.getElementById("qr-val-ref");
      if (refEl) refEl.innerText = charId;
    }

    function copyPaymentAmount() {
      let subtotal = 0;
      for (const id in cart) subtotal += cart[id].price * cart[id].qty;
      const text = subtotal.toFixed(2);
      fallbackCopy(text);
      showToast(`Copied amount: RM ${text}`);
    }

    function copyPaymentRef() {
      const charId = document.getElementById("char-id-input").value.trim();
      if (!charId || charId === "-") {
        showToast("Please enter your Character ID first");
        return;
      }
      fallbackCopy(charId);
      showToast(`Copied reference: ${charId}`);
    }

    function downloadActiveQr() {
      const url = QR_IMAGES[activeQrProvider] || QR_IMAGES.maybank;
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.download = `DuitNow_${activeQrProvider}_QR.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast(`Opening ${activeQrProvider.toUpperCase()} QR image...`);
    }

    function showToast(msg) {
      const toast = document.getElementById("toast");
      const toastText = document.getElementById("toast-text");
      if (!toast || !toastText) return;

      toastText.innerText = msg;
      toast.classList.remove("opacity-0", "scale-95");
      toast.classList.add("opacity-100", "scale-100");

      setTimeout(() => {
        toast.classList.remove("opacity-100", "scale-100");
        toast.classList.add("opacity-0", "scale-95");
      }, 2200);
    }


    /* ---------------- BOT TUTORIAL VIDEO MODAL LOGIC ---------------- */
    const BOT_TUTORIAL_VIDEOS = {
      setup: {
        title: "Setup : How to setup the bot for 3 client",
        desc: "Step-by-step setup walkthrough for configuring and running the automation bot smoothly across 3 client windows simultaneously.",
        videoUrl: "" // 👉 Put your video link (e.g. YouTube embed "https://www.youtube.com/embed/XXXXX" or MP4)
      },
      events: {
        title: "Events : How to setup for events + recruits",
        desc: "Detailed guide on setting up automated event clears, event tasks, and character recruits effortlessly on autopilot.",
        videoUrl: ""
      },
      pve: {
        title: "PvE : How to setup for Coop PvE (Required 3 access keys)",
        desc: "Complete guide for automated Co-Op PvE dungeon farming. Please note that full 3-man spam runs require 3 separate bot access keys.",
        videoUrl: ""
      },
      arena: {
        title: "Arena : How to setup for arena",
        desc: "Automated Arena combat setup: auto-detects opponent buffs and immediately triggers disperse counters for maximum win-rate.",
        videoUrl: ""
      }
    };

    function openBotVideoModal(topicKey) {
      const modal = document.getElementById("bot-video-modal");
      const titleEl = document.getElementById("bot-video-title");
      const descEl = document.getElementById("bot-video-desc");
      const iframeEl = document.getElementById("bot-video-frame");
      const placeholderEl = document.getElementById("bot-video-placeholder");

      const item = BOT_TUTORIAL_VIDEOS[topicKey];
      if (!item || !modal) return;

      if (titleEl) titleEl.innerText = item.title;
      if (descEl) descEl.innerText = item.desc;

      if (item.videoUrl && item.videoUrl.trim()) {
        if (iframeEl) {
          iframeEl.src = item.videoUrl;
          iframeEl.classList.remove("hidden");
        }
        if (placeholderEl) placeholderEl.classList.add("hidden");
      } else {
        if (iframeEl) {
          iframeEl.src = "";
          iframeEl.classList.add("hidden");
        }
        if (placeholderEl) placeholderEl.classList.remove("hidden");
      }

      modal.classList.remove("hidden");
      modal.classList.add("flex");
    }

    function closeBotVideoModal() {
      const modal = document.getElementById("bot-video-modal");
      const iframeEl = document.getElementById("bot-video-frame");
      if (iframeEl) iframeEl.src = "";
      if (modal) {
        modal.classList.remove("flex");
        modal.classList.add("hidden");
      }
    }
