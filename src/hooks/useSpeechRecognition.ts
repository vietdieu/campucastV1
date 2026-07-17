// src/hooks/useSpeechRecognition.ts
import { useState, useEffect, useCallback, useRef } from "react";
import { VoiceCommandEngine, SpeechRecognitionErrorType } from "../services/VoiceCommandEngine";

export type { SpeechRecognitionErrorType };

interface UseSpeechRecognitionProps {
  uiLanguage: "vi" | "en";
  lang?: string;
  continuous?: boolean;
  interimResults?: boolean;
  onTranscript?: (transcript: string) => void;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (type: SpeechRecognitionErrorType, message: string, detail?: string) => void;
  /** Optional factory for testing or mobile platforms */
  speechRecognitionFactory?: any;
}

export function useSpeechRecognition({
  uiLanguage,
  lang,
  continuous = false,
  interimResults = false,
  onTranscript,
  onStart,
  onEnd,
  onError,
  speechRecognitionFactory
}: UseSpeechRecognitionProps) {
  const [isListening, setIsListening] = useState<boolean>(false);
  const [errorType, setErrorType] = useState<SpeechRecognitionErrorType>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const engine = VoiceCommandEngine.getInstance();

  // Keep references to latest callbacks
  const callbacksRef = useRef({ onTranscript, onStart, onEnd, onError });
  useEffect(() => {
    callbacksRef.current = { onTranscript, onStart, onEnd, onError };
  });

  // Sync parameters with engine
  useEffect(() => {
    engine.setUiLanguage(uiLanguage);
  }, [uiLanguage, engine]);

  // Hook registers itself with the singleton engine
  useEffect(() => {
    engine.registerCallbacks({
      onStateChange: (state) => {
        setIsListening(state !== "IDLE");
        if (state === "LISTENING") {
          if (callbacksRef.current.onStart) {
            callbacksRef.current.onStart();
          }
        }
        if (state === "IDLE") {
          if (callbacksRef.current.onEnd) {
            callbacksRef.current.onEnd();
          }
        }
      },
      onTranscript: (transcript) => {
        if (callbacksRef.current.onTranscript) {
          callbacksRef.current.onTranscript(transcript);
        }
      },
      onError: (type, msg, detail) => {
        setErrorType(type);
        setErrorMessage(msg);
        if (callbacksRef.current.onError) {
          callbacksRef.current.onError(type, msg, detail);
        }
      }
    });
  }, [engine]);

  const startListening = useCallback(() => {
    engine.startEngine({ continuous });
  }, [engine, continuous]);

  const stopListening = useCallback(() => {
    engine.stopEngine();
  }, [engine]);

  return {
    isListening,
    errorType,
    errorMessage,
    startListening,
    stopListening,
    clearError: () => {
      setErrorType(null);
      setErrorMessage("");
    }
  };
}
