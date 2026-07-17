# CommuteCast Layer Stack & z-index Map (Sprint A2)
**Chief Software Architect & Senior Frontend Engineer Reference**  
*Status: Approved and Certified Stacking Order System*

---

## 🥞 1. Stacking Order Visual representation

To prevent z-index collision (such as custom player controls slipping behind cards, or tooltip alerts slipping behind the sidebar), CommuteCast implements a strictly defined vertical layer stack:

```
 z-index  Layer Type                Component / Purpose
 ───────  ────────────────────────  ───────────────────────────────────────────
   200    TOOLTIP                   `Tooltip` / Quick action text overlays
   150    TOAST / ALERTS            `PwaStatus` / Notifications / Banners
   100    DIALOG / DRAWER           `LoginModal` / `HelpCenterModal` / Search
    50    OVERLAY                   Backdrops / Glassmorphism panel dims
    40    HEADER                    `Header.tsx` sticky page navigation
    30    SIDEBAR                   `Sidebar.tsx` / `BottomNavigation.tsx`
    20    NAVIGATION RAIL           Icon-only rail for medium viewports
    10    STICKY SUB-TABS           `SubTabBar.tsx` contextual layout bars
     0    BASE VIEWPORTS            `HomeTabView` / Content cards / Main grids
```

---

## 📊 2. Stacking Specifications

| Layer Class | z-index Value | Core Components | Stacking Rules & Context Guidelines |
| :--- | :--- | :--- | :--- |
| **`z-[200]`** | 200 | Hover Tooltips | Must sit above all other layouts. Transient only. |
| **`z-[150]`** | 150 | Toast Notifications | Displayed in corners; must overlap all active sheets. |
| **`z-[100]`** | 100 | Modal Sheets, Drawers | Dialog popups blocking interaction. Focus-trapped. |
| **`z-[50]`** | 50 | Modal Backdrop Overlay | Semi-transparent screen dim; captures dismiss gesture. |
| **`z-[40]`** | 40 | Sticky Main Header | Pinned top navigation bar. |
| **`z-[30]`** | 30 | Left Navigation Sidebar | Full-height side menu or compact mobile bottom bar. |
| **`z-[10]`** | 10 | Sticky Sub-Tab Bars | Contextual segment togglers. |
| **`z-[0]`** | 0 | Layout Base / Content | Default stacking context for cards, grids, and lists. |

---

## 🛠️ 3. Execution & Implementation Rules

- **Strict Class Mapping**: All components must refer directly to the `layout.zIndex` token definitions rather than utilizing raw values (e.g. `z-[9999]`).
- **No Inline Z-Indices**: Hardcoding `style={{ zIndex: 123 }}` on custom divs is strictly forbidden to preserve global system sanity.
