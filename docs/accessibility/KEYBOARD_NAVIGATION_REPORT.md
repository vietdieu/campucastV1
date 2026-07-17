# CommuteCast Keyboard Navigation & Shortcuts Report (Sprint B)
**Chief Quality Auditor & Frontend Tech Lead Assessment**  
*Status: Approved Engineering Reference*

---

## 🏛️ 1. Focus Flow & Tab Order Auditing

To support power-users and those navigating without a mouse, CommuteCast enforces a clean, logical tab order. Focus must follow a natural reading order, moving from top-to-bottom and left-to-right:

```
[ HEADER NAVIGATION ] ──> [ SIDEBAR RAIL ] ──> [ MAIN VIEW WORKSPACE ] ──> [ AUDIO PLAYER CONTROLS ]
```

### Active Flow Rules
1. **Header Navigation Elements**: Tab focus lands first on the Search toggle, then moves sequentially through the Theme Selector, Language Selector, Assistant Panel Toggle, and Profile Menu.
2. **Left Navigation Sidebar / Bottom Nav Bar**: Focus shifts down the main navigation tabs (`Home`, `Mission Studio`, `Library`, `AI Center`, `Settings`).
3. **Workspace Main content**: Focus enters the active workspace card grid. Within cards, focus moves to inputs, primary buttons, and link cards.
4. **Active Playback Controller**: Focus lands on the progress scrubber slider, then moves through Play/Pause, Skip Back, Skip Forward, and Volume control keys.

---

## 🛠️ 2. Detected Focus Traps & Gaps

We analyzed focus behavior across all components to identify key areas of friction:

### 1. Accordion Settings Controls (`SettingsTabView.tsx`)
- **Issue**: Accordion rows (e.g. "Voice Synthesizer Tuning") are not focusable via keyboard, because they are wrapped in plain `<div>` tags without a `tabIndex`. 
- **Impact**: Keyboard-only users are locked out of expanding or collapsing configuration cards.
- **Remediation**: Wrap accordion summary headers in semantic `<button>` tags or apply `tabIndex={0}` and add keydown event listener.

### 2. Dialog Modal Layers (`LoginModal`, `HelpCenterModal`)
- **Issue**: Standard backdrop modals do not contain focus. Tabbing continuously inside an open modal eventually lets focus slip out of the card and back onto elements hidden underneath.
- **Impact**: Screen readers and keyboard users may accidentally activate background triggers while a dialog is active.
- **Remediation**: Implement a standard focus trap that wraps the modal viewport.

---

## 🎹 3. Global Keyboard Shortcuts Matrix

CommuteCast supports a comprehensive suite of hotkeys to accelerate navigation. These shortcuts must not conflict with native operating system commands:

| Action | Keyboard Shortcut | Component Scope | Prevention of Conflict |
| :--- | :--- | :--- | :--- |
| **Play / Pause Track** | `Space` / `K` | Global View | Safe; ignores keypress when user is focused inside a text input. |
| **Driving HUD Mode Toggle** | `Alt` + `D` | Global View | Safe; standard accessibility trigger key. |
| **Global Search Palette** | `Ctrl` + `K` / `⌘` + `K` | Global View | Safe; overrides default browser search to focus the custom app search. |
| **Seek Playback Backward** | `Left Arrow` | Audio Controller | Restricts trigger to when focused on the playback seeker. |
| **Seek Playback Forward** | `Right Arrow` | Audio Controller | Restricts trigger to when focused on the playback seeker. |
| **Close Overlay / Modal** | `Esc` | Active Modal | Standard exit control. |

---

## 🏆 Key Principles for Keyboard Stability

- **Always Visible Focus**: Focused elements must maintain a high-contrast focus ring: `focus-visible:ring-2 focus-visible:ring-brand-accent`.
- **Keyboard Trap Safeguards**: Any overlay blocking background interactions must trap focus strictly until dismissed.
- **No Floating Focus**: When an active modal is closed, focus must be returned cleanly to the triggering element instead of resetting focus to the top of the viewport.
