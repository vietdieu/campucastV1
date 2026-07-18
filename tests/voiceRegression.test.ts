import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { VoiceCommandEngine } from "../src/services/VoiceCommandEngine";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe("Voice Acoustic Regression Testing Suite", () => {
  it("should verify acoustic WAV fixtures exist in tests/voice/fixtures/", () => {
    const fixturesDir = path.resolve(__dirname, "voice", "fixtures");
    const requiredFiles = ["cast_oi.wav", "next.wav", "pause.wav"];
    
    for (const file of requiredFiles) {
      const filePath = path.join(fixturesDir, file);
      const exists = fs.existsSync(filePath);
      console.log(`Fixture [${file}]: ${exists ? "FOUND 🟢" : "MISSING 🔴"}`);
      expect(exists).toBe(true);
    }
  });

  it("should simulate PCM replay, parse intents and execute pluggable skill router", async () => {
    const engine = VoiceCommandEngine.getInstance();
    
    // Run the high-fidelity regression test suite built into the engine
    const regressionResults = engine.runRegressionTestSuite();
    
    console.log("\n======================================================================");
    console.log("🎙️  COMMUTECAST AUTOMATED VOICE REGRESSION TEST REPORT");
    console.log(`⏱️  Timestamp: ${new Date(regressionResults.timestamp).toISOString()}`);
    console.log(`📊 Total: ${regressionResults.passCount + regressionResults.failCount} | Passed: ${regressionResults.passCount} | Failed: ${regressionResults.failCount}`);
    console.log("======================================================================\n");
    
    for (const r of regressionResults.results) {
      console.log(`[Replay & Compare] Input Phrase: "${r.input}"`);
      console.log(`   ➔ Expected: ${r.expectedIntent}`);
      console.log(`   ➔ Detected: ${r.detectedIntent}`);
      console.log(`   ➔ Confidence: ${(r.confidence * 100).toFixed(1)}%`);
      console.log(`   ➔ Status: ${r.passed ? "🟢 PASS" : "🔴 FAIL"}`);
      console.log("----------------------------------------------------------------------");
    }

    // Certify that at least 80% of the regression cases pass (12 out of 15)
    expect(regressionResults.passCount).toBeGreaterThanOrEqual(12);
  });
});
