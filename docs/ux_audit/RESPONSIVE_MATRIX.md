# CommuteCast Cross-Platform Responsive Matrix (Sprint A2)
**Chief Software Architect & Principal UX Designer Reference**  
*Status: Approved Production Specification*

---

## 📱 Breakpoint Hierarchy & Adaptive Layout Rules

The platform operates on a strict **fluid adaptive viewport system**. Below are the precise rules applied across the width spectrum to maintain visual density and interaction safety:

```
320px        768px                 1200px                     1600px+
 ├─────────────┼──────────────────────┼─────────────────────────┤
 Mobile       Tablet (Portrait)     Laptop / Desktop          UltraWide / Centered
```

---

## 📊 Viewport Specification Grid

| Viewport Width | Device/Context Example | Sidebar Behavior | Header Actions | Spacing/Margins | Grid Columns | Layout Adaptations |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **320px - 390px** | iPhone SE, Galaxy Fold | Collapsed completely. | Hide status badges. Show search/profile icons only. | `p-3` (12px), `gap-3` | 1 Column | Bottom Navigation active. Compact cards. Audio player overlays full screen. |
| **391px - 767px** | iPhone 14 Pro, Pixel 7 | Collapsed completely. | Show basic badges. Standard spacing. | `p-4` (16px), `gap-4` | 1 Column | Bottom Navigation active. Split buttons stack vertically. |
| **768px - 1023px** | iPad Portrait, Nexus 9 | Navigation Rail (w-20 / 80px) | Show most header controls. | `p-4` (16px), `gap-4` | 2 Columns | Sidebar collapses to vertical rail with icon-only indicators. |
| **1024px - 1199px** | iPad Landscape, Surface | Navigation Rail (w-20 / 80px) | Full header active. | `p-6` (24px), `gap-6` | 2 Columns | Split layouts active. Side menus lock to rail. |
| **1200px - 1599px** | MacBook Air, Full HD | Fully Expanded (w-64 / 256px) | Full header active with email profile. | `p-6` (24px), `gap-6` | 3 Columns | Standard Bento Grid dashboard active. 3-panel configurations expanded. |
| **1600px - 2560px+** | iMac 27", UltraWide Monitor | Fully Expanded (w-64 / 256px) | Full header active. | `p-8` (32px), `gap-8` | 3 or 4 Columns | Shell is locked to `max-w-[1600px]` and centered with fluid gutters (`mx-auto`). |

---

## ⚙️ Layout Adjustments for Desktop Scales (High DPI Windows)

To prevent visual overlaps under high operating system scaling settings, the layout enforces:

1. **Fluid Heights**: Avoid setting fixed pixel heights for primary text blocks or list elements (e.g. `h-[300px]`). Instead, use minimum heights (`min-h-[300px]`) and auto-wrapping flex containers.
2. **Text Clipping Safeguards**: Text in headers and badges must use `truncate` or `ellipsis` gracefully, with tooltips containing the full string to avoid broken layout grids.
3. **Responsive Sizing Engine**: Leverage Tailwind's rem-based font sizes (`text-sm`, `text-base`), which scale naturally with the user's browser scaling preferences.

---

## 🛠️ Verification & Implementation Guidelines

- Breakpoints must align with `/src/layouts/AdaptiveContext.tsx` parameters.
- No raw media queries (e.g. `@media (max-width: 600px)`) may be declared inside stylesheet overrides; all responsive styling must leverage Tailwind standard breakpoint prefixes (`sm:`, `md:`, `lg:`, `xl:`).
