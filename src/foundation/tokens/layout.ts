export const layout = {
  // Widths
  containerMaxWidth: "1600px",
  sidebarWidth: "16rem",      // w-64, 256px
  sidebarRailWidth: "5rem",   // w-20, 80px
  
  // Heights
  headerHeight: "68px",       // h-[68px]
  bottomBarHeight: "64px",    // h-16
  subTabBarHeight: "44px",
  
  // Spacing & Gaps (Token values mapped to human-readable scales)
  gapCompact: "12px",
  gapStandard: "16px",
  gapComfortable: "24px",
  
  pagePaddingMobile: "12px",
  pagePaddingTablet: "16px",
  pagePaddingDesktop: "24px",
  
  // Breakpoints
  breakpoints: {
    xs: "320px",
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1600px",
  },
  
  // Layer z-indices (z-index hierarchy map)
  zIndex: {
    base: 0,
    sticky: 10,
    navigation: 20,
    sidebar: 30,
    header: 40,
    overlay: 50,
    dialog: 100,
    drawer: 100,
    toast: 150,
    tooltip: 200,
  }
};
