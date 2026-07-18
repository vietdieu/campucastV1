# CommuteCast Layout Debt Report (Sprint A2)
**Chief Software Architect & Senior Frontend Engineer Analysis**  
*Status: Active Maintenance Registry*

---

## 🔍 1. Detailed Layout & Styling Debt Catalog

We analyzed the structure of every screen and custom visual layout to pinpoint code lines violating modular token guidelines, responsive bounds, and screen reader structures:

| File Location | Severity | Category | Issue Description | Priority | Action Item |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `src/components/Header.tsx` | **Medium** | Tokens | Hardcoded `h-[68px]` height on header block. | **P2** | Bind header height to global CSS layout variable. |
| `src/components/Sidebar.tsx` | **Low** | Duplication | Hardcoded navigation list duplicated from BottomNav. | **P3** | Move navigation array to a unified schema in `/src/types.ts`. |
| `src/components/views/SettingsTabView.tsx` | **High** | Scroll Trap | Nesting scrollable containers with fixed height caps. | **P1** | Replace fixed heights with flex heights (`flex-1 min-h-0`). |
| `src/components/DrivingMode.tsx` | **Critical** | Contrast Override | Hardcoded black/zinc backgrounds violating eye-care light theme. | **P0** | Refactor visual layers to use theme-aware semantic tokens. |
| `src/components/views/MissionTabView.tsx` | **High** | Collision | Layout elements overlay on viewport widths under 768px. | **P1** | Collapse left panel and draft cards into a 1-column layout. |
| `src/components/ui/PageHeader.tsx` | **Medium** | Consistency | Margin variations compared to other page headers. | **P2** | Standardize container padding using global layout spacing rules. |

---

## 🛠️ 2. Execution & Remediating Plan

1. **Category: Theme-Aware Driving HUD Override**  
   - **Resolution**: Refactor background styles in `DrivingMode.tsx` from raw zinc values to dynamic CSS variables. Use `var(--color-bg-base)` and standard colors.
2. **Category: Scroll Trap Elimination**  
   - **Resolution**: Remove all custom nested `.scrollbar-none` and `.custom-scrollbar` containers that enforce rigid heights on settings panels. Force elements to render inline or handle sizing cleanly via fluid parent boundaries.
3. **Category: Navigation Deduplication**  
   - **Resolution**: Export a single `NAV_ITEMS` array from `/src/types.ts` that both `Sidebar.tsx` and `BottomNavigation.tsx` map over to prevent code divergence.
