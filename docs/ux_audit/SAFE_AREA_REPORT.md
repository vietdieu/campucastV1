# CommuteCast Safe Area Compliance Report (Sprint A2)
**Principal UX Architect & Senior Mobile Engineer Reference**  
*Status: Approved Engineering Guidelines*

---

## 🏛️ 1. Mobile & Automotive Viewport Analysis

When running CommuteCast in mobile frames, web viewports, or car dashboard mounts, layouts must account for hardware obstructions (camera notches, Dynamic Islands, physical screen bezels) and software indicators (gesture swipe-up indicators, split-screen docks):

```
       ┌───────────────────────────────────────────┐
       │   [ Notch / Camera / Dynamic Island ]     │  iOS / Android Notch Area
       │                                           │
       │                                           │
       │                COMMUTECAST                │
       │                                           │
       │                                           │
       │         [ Home Swipe Indicator ]          │  iOS Gesture Swipe / Android Bar
       └───────────────────────────────────────────┘
```

---

## 📱 2. Operating Environment Rules

### 1. iOS Safari & Chrome (iPhone / iPad)
- **Obstruction**: Camera cutouts, Dynamic Island, and the physical bottom Home Indicator bar.
- **Problem**: Floating bottom players or navigation buttons that sit at the absolute bottom (`bottom-0`) overlap with the swipe gesture bar, causing accidental application exits or non-responsive taps.
- **Solution**: Always use standard CSS safe area inset environment variables:
  ```css
  padding-bottom: env(safe-area-inset-bottom);
  padding-top: env(safe-area-inset-top);
  ```

### 2. Android Chrome & Edge (Notches & Gesture Bars)
- **Obstruction**: Corner and center hole-punch camera cutouts.
- **Problem**: Title bars, clocks, and settings controls are covered by status bar info or physical device curved corners.
- **Solution**: Apply `safe-padding` rules to all top-level header components.

### 3. Driving Mode (Landscape Mount / Car Dashboard)
- **Obstruction**: Wide aspects, dashboard docks, and dashboard bezels.
- **Problem**: When a device is mounted horizontally, the left and right safe areas expand significantly, causing content near the screen border to become untappable.
- **Solution**: Integrate horizontal safe margins into the HUD wrapper:
  ```css
  padding-left: max(1rem, env(safe-area-inset-left));
  padding-right: max(1rem, env(safe-area-inset-right));
  ```

---

## 🛠️ 3. CSS Safe Area Classes Reference

We declare a standard class configuration to ensure safe spacing across any component:

1. **Top Spacing**:
   `pt-[env(safe-area-inset-top)]` / `top-[env(safe-area-inset-top)]`
2. **Bottom Spacing**:
   `pb-[env(safe-area-inset-bottom)]` / `bottom-[env(safe-area-inset-bottom)]`
3. **Left/Right Boundaries**:
   `pl-[env(safe-area-inset-left)]` / `pr-[env(safe-area-inset-right)]`
