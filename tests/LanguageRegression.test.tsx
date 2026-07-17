import "fake-indexeddb/auto";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../src/App";
import { UserPreferencesProvider } from "../src/components/UserPreferencesProvider";
import { ThemeProvider } from "../src/components/ThemeProvider";
import { AdaptiveProvider } from "../src/layouts/AdaptiveContext";
import ManualPcmPlayer from "../src/components/ManualPcmPlayer";
import { vi, describe, it, expect, beforeEach } from "vitest";

// Mock services that might fail in JSDOM or try to hit real APIs
vi.mock("../src/services/telemetryService", () => ({
  telemetry: {
    track: vi.fn(),
    trackEvent: vi.fn(),
  },
}));

// Mock ResizeObserver which is not present in JSDOM
global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}));

// Mock IntersectionObserver which is not present in JSDOM
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}));

// Mock window.scrollTo
window.scrollTo = vi.fn();

describe("Language Regression Integration", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it("should not reset languageMode to default when UI language is toggled", async () => {
    render(
      <UserPreferencesProvider>
        <ThemeProvider>
          <AdaptiveProvider>
            <MemoryRouter>
              <App />
            </MemoryRouter>
          </AdaptiveProvider>
        </ThemeProvider>
      </UserPreferencesProvider>
    );

    // 1. Initial state is Vietnamese (default uiLanguage is 'vi')
    // We expect to see Vietnamese text in the sidebar: "Trung tâm AI"
    await waitFor(() => {
      expect(screen.getByText(/Trung tâm AI/i)).toBeDefined();
    }, { timeout: 5000 });

    // 2. Navigate to AI Center tab
    const aiCenterTab = screen.getByText(/Trung tâm AI/i);
    fireEvent.click(aiCenterTab);

    // 3. Navigate to Voice subtab (Giọng đọc)
    // Based on App.tsx, the default subtab for AI Center might not be 'voice'.
    // We need to click the 'Giọng đọc' tab/button.
    const voiceSubTab = screen.getByText(/Giọng đọc/i);
    fireEvent.click(voiceSubTab);

    // 4. Verify initial languageMode is Bilingual (or set it to Bilingual)
    // The text in translations.vi.langBilingual is "🔥 Song Ngữ Anh - Việt (Bilingual)"
    const bilingualBtnText = /Song Ngữ Anh - Việt/i;
    expect(screen.getByText(bilingualBtnText)).toBeDefined();
    
    // Explicitly click it to ensure it's set
    fireEvent.click(screen.getByText(bilingualBtnText));

    // 5. Toggle UI Language in Header
    // The toggle button has title "Switch to English" in Vietnamese mode
    const langToggle = screen.getByTitle(/Switch to English/i);
    fireEvent.click(langToggle);

    // 6. Verify UI changed to English
    // Sidebar should now show "AI Center" (English label)
    await waitFor(() => {
      expect(screen.getByText(/AI Center/i)).toBeDefined();
    });

    // 7. CRITICAL CHECK: Verify languageMode in PreferencesForm is STILL Bilingual
    // Now the text should be the English version: "🔥 Bilingual (En - Vi)"
    // The regex should match the English translation
    expect(screen.getByText(/Bilingual \(En - Vi\)/i)).toBeDefined();
    
    // If the bug existed, it would have reset to Vietnamese Only because of "Smart sync"
    // and we would find "Vietnamese Only" selected (or at least the Bilingual one wouldn't be the same).
  });

  it("should respect uiLanguage prop and not coerce uiLanguage based on userPref.language in ManualPcmPlayer", async () => {
    // 1. Set user preferences language to "en"
    localStorage.setItem("commutecast_user_preferences", JSON.stringify({
      language: "en",
      languageMode: "EN_ONLY"
    }));

    const mockPayload = {
      title: "Test Title",
      introduction: "Test Intro",
      chapters: [
        { topic: "Topic 1", scriptText: "Text 1", summaryBullets: ["Bullet 1"] }
      ],
      conclusion: "Test Conclusion"
    };

    // 2. Render ManualPcmPlayer with uiLanguage="vi" (Vietnamese UI)
    render(
      <UserPreferencesProvider>
        <ManualPcmPlayer 
          payload={mockPayload} 
          audioChunks={[]} 
          uiLanguage="vi"
        />
      </UserPreferencesProvider>
    );

    // 3. Confirm that the player's UI is indeed in Vietnamese (e.g. scriptTitle should be Vietnamese "Nội Dung Kịch Bản Bản Tin")
    await waitFor(() => {
      expect(screen.getByText(/Nội Dung Kịch Bản Bản Tin/i)).toBeDefined();
    });

    // There should be no English "Interactive Commute Broadcast Script"
    expect(screen.queryByText(/Interactive Commute Broadcast Script/i)).toBeNull();
  });
});
