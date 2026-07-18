# CommuteCast Accessibility Remediation Plan (Sprint B)
**Chief Quality Auditor & Software Quality Auditor Blueprint**  
*Status: Approved for Development Roadmap*

---

## 🗺️ 1. Sequential Component-First Remediation Strategy

To prevent visual drift or inconsistent spacing (such as one tab using a focus ring but another bypassing it), we follow a strict **component-first** progression. Page views are only touched *after* primitive structures are verified to be fully compliant:

```
Step 1: Primitive Controls (Buttons / Cards) ──> Step 2: Form Inputs ──> Step 3: Navigation Shell ──> Step 4: Page Tab Panels
```

---

## 🛠️ 2. Architectural Remediation Phases

### 1. Phase 1: Standardize Primitive Buttons & Touch Targets
- **Objective**: Ensure focus outlines, hover states, and touch sizes are completely synchronized across the layout system.
- **Actions**:
  - Update `Button.tsx` and `Badge.tsx` to utilize `focus-visible:ring-2` with high-contrast outlines.
  - Scale compact touch points (such as close icons or deletion widgets) to at least `44px × 44px` of clickable padding.

### 2. Phase 2: Form Input Label Pairings & Helper Texts
- **Objective**: Wrap and link input controls cleanly, guaranteeing screen readers can parse forms.
- **Actions**:
  - Ensure every URL input, text input, and drop-down selection inside the Studio and Settings is paired with an explicit `<label htmlFor="...">`.
  - Provide screen reader helper notifications via `aria-describedby` where necessary.

### 3. Phase 3: Global Shell Navigation Sync (Bottom Nav & Sidebar)
- **Objective**: Standardize ARIA navigation landmarks and roles.
- **Actions**:
  - Refactor `BottomNavigation.tsx` and `Sidebar.tsx` tabs to incorporate `role="tab"`, `aria-selected={isActive}`, and appropriate screen reader text.
  - Apply CSS `env(safe-area-inset-bottom)` to protect bottom navigation bars from mobile home indicators.

### 4. Phase 4: Setting Accordions & Focus-Tapped Dialogs
- **Objective**: Eliminate keyboard traps and unlock full keyboard-only operability.
- **Actions**:
  - Bind `Space` and `Enter` key handlers to setting expand/collapse rows.
  - Incorporate robust focus trap triggers around active popups or dialog backdrops.

---

## 📋 3. Accessibility Quality Gate (DoD)

- **DoD 1 (Automated Validation)**: Compile Applet and Lint Applet must return a clean `PASS` build status with zero warnings.
- **DoD 2 (Contrast Compliance)**: All text elements across Cyber Dark, Studio Light, and Eye Care modes must satisfy the `4.5:1` minimum ratio.
- **DoD 3 (Tactile Target Boundary)**: No interactive element has an active tactile zone under `44px × 44px` on mobile viewports.
- **DoD 4 (Keyboard Nav Flow)**: Every action must be fully triggerable using a standard desktop keyboard without a mouse.
