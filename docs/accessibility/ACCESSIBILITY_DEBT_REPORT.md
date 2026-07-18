# CommuteCast Accessibility Debt Report (Sprint B)
**Chief Quality Auditor & Frontend Tech Lead Review**  
*Status: Active Maintenance Registry*

---

## 🔍 1. Current Accessibility Debts & Gaps

We conducted a source-level sweep of the codebase to identify files violating semantic landmarks, ARIA labels, focus rings, or target sizes:

| Codebase File / Area | Severity | Debt Type | Issue Description | Priority | Remediation Action |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `src/components/BottomNavigation.tsx` | **Medium** | Semantic | Bottom navigation tabs lack navigation landmarks, ARIA roles, and active state indicators. | **P2** | Wrap tabs in a `<nav>` container, assign `role="tab"`, and add `aria-selected` attributes. |
| `src/components/Sidebar.tsx` | **Medium** | ARIA Labels | Icon-only nav sidebar buttons lack readable textual fallback tags. | **P2** | Wrap nested icons in `aria-hidden` and apply clear `aria-label` names to the parent buttons. |
| `src/components/views/HomeTabView.tsx` | **High** | Contrast | Secondary timestamps and telemetry text color `#71717A` drops below `4.5:1` in dark mode. | **P1** | Boost text color to `#9CA3AF` to satisfy WCAG AA standards. |
| `src/components/views/MissionTabView.tsx` | **Critical** | Operable | Stepper buttons and RSS source deletes are un-focusable or under 44px in tactile size. | **P0** | Scale small Lucide icons to 44px touch targets and wrap tab lists in standard ARIA groups. |
| `src/components/views/SettingsTabView.tsx` | **High** | Keyboard | Accordion settings blocks lack keydown handlers or tab indexing. | **P1** | Map `tabIndex={0}` to expand/collapse summary rows and bind Space/Enter keyboard event listeners. |
| `src/components/DrivingMode.tsx` | **Critical** | Contrast Override | The HUD forces static dark classes (`bg-zinc-900`, `text-emerald-400`) that bypass theme selections. | **P0** | Refactor layout containers to implement theme-aware semantic tokens. |

---

## ⚙️ 2. Safe Area & Mobile Obstruction Compliance

- **Home Gesture indicators**: The bottom navigation bar must reserve space for mobile Home swipe-bars. We must ensure `pb-[env(safe-area-inset-bottom)]` is consistently applied to prevent overlaps.
- **Dynamic Island & Notches**: The top-bar must reserve spacing for camera hole punches on iOS and Android devices via `pt-[env(safe-area-inset-top)]`.
- **Landscape Automotive Mounts**: Driving HUD layouts must expand margins to account for wide side bezel limits under horizontal rotation.
- **prefers-reduced-motion**: Respect user settings by disabling or slowing layout transition speeds when reduced-motion preferences are active.
