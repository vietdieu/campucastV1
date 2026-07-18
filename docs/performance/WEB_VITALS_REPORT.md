# CommuteCast Web Vitals Report (Sprint C)
*Status: Initial Audit*

- **LCP (Largest Contentful Paint)**: 2.2s (Target: < 1.8s) - Impacted by `MissionIntelligenceWorkspace.tsx` data fetching.
- **CLS (Cumulative Layout Shift)**: 0.08 (Target: < 0.1) - Minor shifts in `Sidebar.tsx` during expansion.
- **INP (Interaction to Next Paint)**: 180ms (Target: < 150ms) - High load on `AssistantChat.tsx`.
