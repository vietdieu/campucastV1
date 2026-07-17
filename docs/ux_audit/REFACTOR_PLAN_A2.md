# CommuteCast Layout Refactor Plan (Sprint A2)
**Chief Software Architect & Senior Frontend Engineer Blueprint**  
*Status: Approved for Development Implementation*

---

## 🗺️ 1. Sequential Refactor Strategy

To prevent design fragmentation (e.g. page-specific layouts diverging), Sprint A2 dictates a strictly **component-first** refactoring sequence. Page-specific changes are only introduced *after* the core Layout tokens and structural shell components are fully normalized:

```
Step 1: Tokens Integration ──> Step 2: Global Shell ──> Step 3: Navigation ──> Step 4: Page Containers
```

---

## 🛠️ 2. Architectural Milestones

### 1. Step 1: Layout Tokens Integration
- **Objective**: Consolidate spacing, margins, heights, widths, and z-indices into standard design constants in `src/foundation/tokens/layout.ts`.
- **Status**: **COMPLETE**. Tokens successfully created and integrated under `src/foundation/tokens/index.ts`.

### 2. Step 2: App Shell Optimization (`src/App.tsx`)
- **Objective**: Align the main shell wrapper in `App.tsx` with unified layout tokens. Standardize main flex gutters and ensure proper responsive grid transitions.
- **Actions**:
  - Bind max-width bounds to `--max-width` CSS rules.
  - Standardize container spacing for the central desktop panel.

### 3. Step 3: Navigation Sync (`src/components/Sidebar.tsx` & `src/components/BottomNavigation.tsx`)
- **Objective**: Bind navigation widths and heights to layout tokens.
- **Actions**:
  - Update desktop Sidebar and mobile BottomNavigation to use variables from `layout.ts` for heights and padding to ensure tactile consistency.

### 4. Step 4: Page Containers Alignment (`src/layouts/ThreePanelLayout.tsx`)
- **Objective**: Ensure pages conform to the unified layout, avoiding hardcoded offsets and nested scroll traps.
- **Actions**:
  - Refactor nested overflow containers in tab pages to leverage `ThreePanelLayout.tsx` and proper auto-scroll layouts.

---

## 📋 3. Regression Safeguards & Quality Gate

- **Backward Compatibility**: Voice synthesis, news generation, offline storage, and state machines remain completely untouched. No business logic is modified.
- **Verification Routine**: Run `npm run lint` and `npm run build` after each component update to prevent type errors.
- **Cross-Platform Verification**:
  - Validate touch targets on simulated mobile screens.
  - Test layouts under extreme High-DPI scales (150%, 200%) to verify that no clipping or double scroll traps are introduced.
