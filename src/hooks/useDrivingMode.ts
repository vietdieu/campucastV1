// src/hooks/useDrivingMode.ts
import { useState, useEffect, useCallback, useRef } from "react";
import { useUserPreferences } from "../components/UserPreferencesProvider";
import { useSpeechRecognition } from "./useSpeechRecognition";

export interface UseDrivingModeReturn {
  isDrivingMode: boolean;
  toggleDrivingMode: () => void;
  enableDrivingMode: () => void;
  disableDrivingMode: () => void;
  isListening: boolean;
  isContinuous: boolean;
  setIsContinuous: (val: boolean) => void;
  transcript: string;
  commandFeedback: string;
  micError: string;
  startSpeechRecognition: () => void;
  stopSpeechRecognition: () => void;
  vibrate: (pattern: number | number[]) => void;
  toast: {
    message: string | null;
    show: boolean;
  };
  clearToast: () => void;
}

export function matchAndStripWakeWord(text: string, uiLanguage: "vi" | "en"): { matched: boolean; stripped: string } {
  const normalizedText = text.toLowerCase().trim();
  const wakeWords = uiLanguage === "vi" 
    ? ["hây ơi", "hây", "cast ơi", "này cast", "ơi cast", "cát ơi", "này cát", "này kết", "kết ơi"]
    : ["hey cast", "ok cast", "hey assistant", "hey cash", "hi cast", "hey", "cast"];

  for (const word of wakeWords) {
    const index = normalizedText.indexOf(word);
    if (index !== -1) {
      const stripped = normalizedText.substring(index + word.length).trim();
      return { matched: true, stripped };
    }
  }
  return { matched: false, stripped: normalizedText };
}

function playTick() {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(1200, ctx.currentTime);
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {
    console.warn("Failed to play tick sound", e);
  }
}

export interface UseDrivingModeOptions {
  onCommand?: (command: string) => void;
  playFeedbackSound?: () => void;
  vibrate?: (pattern: number | number[]) => void;
}

export function useDrivingMode(
  uiLanguage: "vi" | "en" = "vi",
  options: UseDrivingModeOptions = {}
): UseDrivingModeReturn {
  const { onCommand, playFeedbackSound, vibrate } = options;
  const { preferences, updateDrivingMode } = useUserPreferences();
  const [isContinuous, setIsContinuous] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [commandFeedback, setCommandFeedback] = useState("");
  const [micError, setMicError] = useState("");
  const [toastState, setToastState] = useState<{ message: string | null; show: boolean }>({
    message: null,
    show: false,
  });

  const commandTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const transcriptTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (commandTimeoutRef.current) clearTimeout(commandTimeoutRef.current);
      if (transcriptTimeoutRef.current) clearTimeout(transcriptTimeoutRef.current);
    };
  }, []);

  const enableDrivingMode = useCallback(() => {
    updateDrivingMode(true);
    const msg = uiLanguage === "vi" ? "Chế độ lái xe đã bật" : "Driving Mode Enabled";
    setToastState({ message: msg, show: true });
  }, [updateDrivingMode, uiLanguage]);

  const disableDrivingMode = useCallback(() => {
    updateDrivingMode(false);
    setToastState({ message: null, show: false });
  }, [updateDrivingMode]);

  const toggleDrivingMode = useCallback(() => {
    if (preferences.isDrivingMode) {
      disableDrivingMode();
    } else {
      enableDrivingMode();
    }
  }, [preferences.isDrivingMode, enableDrivingMode, disableDrivingMode]);

  const clearToast = useCallback(() => {
    setToastState(prev => ({ ...prev, show: false }));
  }, []);

  const processVoiceCommand = useCallback((text: string) => {
    const wakeWordEnabled = preferences.wakeWordEnabled !== false;
    
    // Always set transcript so the user knows they are being heard
    setTranscript(text);
    if (transcriptTimeoutRef.current) clearTimeout(transcriptTimeoutRef.current);
    transcriptTimeoutRef.current = setTimeout(() => {
      setTranscript("");
    }, 4000);

    if (wakeWordEnabled) {
      const { matched, stripped } = matchAndStripWakeWord(text, uiLanguage);
      if (!matched) {
        setCommandFeedback(uiLanguage === "vi" ? "Vui lòng gọi 'Hây' trước câu lệnh" : "Say 'Hey' before your command");
        // Auto-clear feedback
        if (commandTimeoutRef.current) clearTimeout(commandTimeoutRef.current);
        commandTimeoutRef.current = setTimeout(() => {
          setCommandFeedback("");
        }, 3500);
        return; // ignore commands lacking the wake-word
      }
      if (playFeedbackSound) {
        playFeedbackSound();
      } else {
        playTick();
      }
      if (onCommand) {
        onCommand(stripped);
      }
    } else {
      if (onCommand) {
        onCommand(text);
      }
    }
    
    // Auto-clear feedback
    if (commandTimeoutRef.current) clearTimeout(commandTimeoutRef.current);
    commandTimeoutRef.current = setTimeout(() => {
      setCommandFeedback("");
    }, 3500);
  }, [onCommand, preferences.wakeWordEnabled, uiLanguage, playFeedbackSound]);

  const { isListening, startListening, stopListening } = useSpeechRecognition({
    uiLanguage,
    lang: uiLanguage === "vi" ? "vi-VN" : "en-US",
    continuous: isContinuous,
    interimResults: false,
    onStart: () => {
      setMicError("");
    },
    onTranscript: (resultText) => {
      if (resultText && resultText.trim() !== "") {
        processVoiceCommand(resultText);
      }
    },
    onEnd: () => {
      // In continuous mode, browser might stop after ~60s
      // We only restart if isContinuous is still true and we are in Driving Mode
      if (isContinuous && preferences.isDrivingMode) {
        setTimeout(() => {
          if (isContinuous && preferences.isDrivingMode) {
            startListening();
          }
        }, 50); // Reduced delay since continuous: true handles the short silences now
      }
    },
    onError: (type, message, detail) => {
      if (detail === "aborted" || detail === "no-speech") {
        return;
      }
      setMicError(message);
      setToastState({
        message: uiLanguage === "vi" ? `Lỗi trợ lý giọng nói: ${message}` : `Voice assistant error: ${message}`,
        show: true
      });
    }
  });

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && isContinuous && preferences.isDrivingMode) {
        // Resume if we were supposed to be listening
        if (!isListening) {
          startListening();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [isContinuous, preferences.isDrivingMode, isListening, startListening]);

  useEffect(() => {
    if (toastState.show) {
      const timer = setTimeout(() => clearToast(), 3500);
      return () => clearTimeout(timer);
    }
  }, [toastState.show, clearToast]);

  return {
    isDrivingMode: preferences.isDrivingMode,
    toggleDrivingMode,
    enableDrivingMode,
    disableDrivingMode,
    isListening,
    isContinuous,
    setIsContinuous,
    transcript,
    commandFeedback,
    micError,
    startSpeechRecognition: startListening,
    stopSpeechRecognition: stopListening,
    vibrate: (pattern: number | number[]) => {
      if (vibrate) {
        vibrate(pattern);
      } else if (typeof navigator !== "undefined" && navigator.vibrate) {
        navigator.vibrate(pattern);
      }
    },
    toast: toastState,
    clearToast
  };
}
