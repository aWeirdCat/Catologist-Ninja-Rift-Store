# Commit Message & Change Log

## Title
```text
Organize assets directory, add Battlepass seasons 1-22 & revamp preview UI
```

## Description
```text
- Reorganize project assets into structured directories:
  * assets/icons/ (bots, senjutsu, stamina, talent point, token coins)
  * assets/qr/ (Maybank, CIMB, Touch 'n Go DuitNow codes)
  * assets/starter-pack/ (lvl-10 to lvl-100 subfolders and halloween)
  * assets/battlepass/ (season_1 through season_22)
- Add complete Battlepass Season 1 to Season 22 item data, stats, descriptions, and dynamic token calculation:
  * S1-S11: 255 tokens
  * S12-S15: 400 tokens
  * S16-S19: 510 tokens
  * S20: 1,000 tokens
  * S21: 1,500 tokens
  * S22: 1,100 tokens
- Add 3 new 'To be Received' display bars in order ticket modal:
  * Stamina Rolls to be received
  * Talent Points to be received
  * Senjutsu Points to be received
- Standardize gaming item preview tooltip format across Starter Packs and Battlepass:
  * Title, dynamic quantity badge (e.g. x1) at top-right
  * Subtitle, description, and separated combat stats pills
- Add Limit: 1 restriction badge on all Battlepass package cards
- Restore description for Halloween Package in catalog data
- Match Deals preview button styling to category palette
- Update all image paths across index.html, custom-images.js, battlepass-data.js, and qr-data.js
```

