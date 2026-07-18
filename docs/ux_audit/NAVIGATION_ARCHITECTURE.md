# CommuteCast Navigation Architecture (Sprint A2)
**Chief Software Architect & Senior Frontend Engineer Reference**  
*Status: Approved and Certified Navigation System Specification*

---

## 🗺️ 1. Navigation Flow Map

CommuteCast maintains a unified routing, tab state, and navigation ecosystem. Regardless of the active device layout, a single semantic state machine controls workspace selection:

```
                            GLOBAL USER CONTROL
                                     │
                     ┌───────────────┴───────────────┐
                     ▼                               ▼
               DESKTOP VIEW                     MOBILE VIEW
            (Sidebar / Rail)                (Bottom Nav Bar)
                     │                               │
                     └───────────────┬───────────────┘
                                     ▼
                            ACTIVE TAB ROUTER
                                     │
         ┌──────────────┬────────────┼──────────────┬──────────────┐
         ▼              ▼            ▼              ▼              ▼
     Home Desk    Studio Desk   Media Library   Settings HUD    Driving HUD
```

---

## 📂 2. Structural Navigation Channels

### 1. Desktop & Tablet Sidebar (`src/components/Sidebar.tsx`)
- **Behavior**: Sticks to the left side of the screen (`sticky left-0`).
- **Modes**:
  - **Full Expanded**: Desktop view (>1200px) displays full text labels and a detailed version badge. Width is set to `w-64` (256px).
  - **Compact Rail**: Tablet view (768px - 1199px) collapses the sidebar into an icon-only vertical rail with a compact width of `w-20` (80px), conserving workspace area.
- **Visual Feedback**: Selection is highlighted using the `--color-accent` token background, featuring a subtle scaling effect on hover.

### 2. Mobile Bottom Navigation (`src/components/BottomNavigation.tsx`)
- **Behavior**: Positioned at the absolute bottom of the viewport (`fixed bottom-0 left-0 right-0`).
- **Safe Area Insets**: Includes `pb-[env(safe-area-inset-bottom)]` to prevent overlaps with iOS home swipe indicators.
- **Density**: Limited to 5 primary navigation tabs to guarantee touch target accuracy.

### 3. Header Action Nav (`src/components/Header.tsx`)
- **Behavior**: Fixed top bar (`sticky top-0`) holding dynamic contextual indicators and secondary features.
- **Controls**: Includes Theme toggle, Language selector, Search activation, Assistant toggle, and Profile drawer trigger.

---

## ⌨️ 3. Input Modality Support

### 1. Touch Modality (Mobile & Tablet)
- **Minimum Target Area**: Every button, navigation icon, and touch trigger must have a bounding touch target of at least **44px × 44px**.
- **Active State Feedback**: Tap targets use `active:scale-[0.98]` to provide immediate, micro-interactive tactile confirmation.

### 2. Mouse Modality (Desktop)
- **Hover Transitions**: Highlight states and tooltips enter smoothly using `transition-all duration-200 ease-out`.
- **Cursor State**: Every interactive element forces `cursor-pointer`.

### 3. Keyboard Modality (Power-user Shortcuts)
CommuteCast supports quick, keyboard-driven navigation commands. These hotkeys are bound globally in `src/features/keyboard/useKeyboardShortcuts.ts`:

- `Space` / `K`: Toggle Audio Play/Pause.
- `Alt` + `D`: Toggle Driving HUD mode.
- `Ctrl` + `K` / `⌘` + `K`: Open global search palette.
- `Left Arrow` / `Right Arrow` (when focused on playback): Seek backward/forward.
- `Esc`: Close open modals or clear inputs.
