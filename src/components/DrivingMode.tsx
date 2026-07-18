import { colors } from "../foundation/tokens/colors";
import React, { useState, useEffect, useCallback } from "react";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  RotateCw, 
  X, 
  ShieldAlert, 
  Mic, 
  MicOff, 
  Wifi, 
  WifiOff, 
  AlertTriangle, 
  RefreshCw, 
  Archive, 
  Volume2, 
  X as XIcon,
  SkipForward,
  SkipBack
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { useUserPreferences } from "./UserPreferencesProvider";
import { useDrivingMode } from "../hooks/useDrivingMode";

// Shared variables for managing beep cancellation
let sharedBeepAudioContext: AudioContext | null = null;
let activeOscillators: { stop: () => void }[] = [];

function playBeep(frequency: number, duration: number, double: boolean = false) {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    
    if (!sharedBeepAudioContext) {
      sharedBeepAudioContext = new AudioContextClass();
    }
    const ctx = sharedBeepAudioContext;
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    // Cancel active/overlapping beeps
    activeOscillators.forEach(osc => {
      try { osc.stop(); } catch(e){}
    });
    activeOscillators = [];

    const playSingle = (timeOffset: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(frequency, ctx.currentTime + timeOffset);
      
      gain.gain.setValueAtTime(0.3, ctx.currentTime + timeOffset);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + timeOffset + duration);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(ctx.currentTime + timeOffset);
      osc.stop(ctx.currentTime + timeOffset + duration);

      activeOscillators.push({
        stop: () => {
          try { osc.stop(); } catch(e){}
        }
      });
    };

    if (double) {
      playSingle(0);
      playSingle(0.15); // play second beep after 150ms
    } else {
      playSingle(0);
    }
  } catch (err) {
    console.error("Failed to play beep:", err);
  }
}

function playTTSFeedback(text: string, uiLanguage: "vi" | "en") {
  try {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel(); // cancel current speech immediately to prevent overlap
    
    // Strip emojis
    const cleanText = text.replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDFFF]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = uiLanguage === "vi" ? "vi-VN" : "en-US";
    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.error("Failed to play TTS feedback:", err);
  }
}

interface DrivingModeProps {
  key?: string;
  title: string;
  isPlaying: boolean;
  currentTime: number;
  totalDuration: number;
  onPlayPause: () => void;
  onSkip: (seconds: number) => void;
  onScrubberChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onExit: () => void;
  uiLanguage?: "vi" | "en";
  error?: string | null;
  isGenerating?: boolean;
  generationProgress?: string | number;
  savedBriefings?: any[];
  onPlaySavedBriefing?: (briefing: any) => void;
  onRetryGeneration?: () => void;
  onNext?: () => void;
  onDuckingChange?: (isDucked: boolean) => void;
  volume?: number;
  onVolumeChange?: (val: number) => void;

  // Voice control props passed from top-level useDrivingMode hook
  isListening?: boolean;
  isContinuous?: boolean;
  setIsContinuous?: (val: boolean) => void;
  micError?: string;
  transcript?: string;
  commandFeedback?: string;
  startSpeechRecognition?: () => void;
  stopSpeechRecognition?: () => void;
  vibrate?: (pattern: number | number[]) => void;
  drivingCommandRef?: React.MutableRefObject<((command: string) => void) | null>;
  drivingModeVoice?: {
    isListening: boolean;
    isContinuous: boolean;
    setIsContinuous: (val: boolean) => void;
    micError: string;
    transcript: string;
    commandFeedback: string;
    startSpeechRecognition: () => void;
    stopSpeechRecognition: () => void;
    vibrate: (pattern: number | number[]) => void;
    drivingCommandRef: React.MutableRefObject<((command: string) => void) | null>;
  };
}

import { parseVoiceCommand } from "../utils/parseVoiceCommand";

export default function DrivingMode({
  title,
  isPlaying,
  currentTime,
  totalDuration,
  onPlayPause,
  onSkip,
  onExit,
  uiLanguage = "vi",
  error = null,
  isGenerating = false,
  generationProgress = 0,
  savedBriefings = [],
  onPlaySavedBriefing,
  onRetryGeneration,
  onNext,
  onDuckingChange,
  volume = 0.9,
  onVolumeChange,
  isListening: propIsListening,
  isContinuous: propIsContinuous,
  setIsContinuous: propSetIsContinuous,
  micError: propMicError,
  transcript: propTranscript,
  commandFeedback: propCommandFeedback,
  startSpeechRecognition: propStartSpeechRecognition,
  stopSpeechRecognition: propStopSpeechRecognition,
  vibrate: propVibrate,
  drivingCommandRef: propDrivingCommandRef,
  drivingModeVoice
}: DrivingModeProps) {

  const { preferences } = useUserPreferences();
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  // Fallback voice hook if props are not provided
  const fallbackVoice = useDrivingMode();
  const voiceSource = drivingModeVoice || (propSetIsContinuous === undefined && propIsListening === undefined ? fallbackVoice : undefined);

  // Resolve voice state/actions either from direct props, drivingModeVoice object, or fallback hook
  const isListening = propIsListening !== undefined ? propIsListening : (voiceSource?.isListening ?? false);
  const isContinuous = propSetIsContinuous !== undefined ? propIsContinuous : (voiceSource?.isContinuous ?? false);
  const setIsContinuous = propSetIsContinuous || voiceSource?.setIsContinuous || (() => {});
  const micError = propMicError !== undefined ? propMicError : (voiceSource?.micError ?? "");
  const transcript = propTranscript !== undefined ? propTranscript : (voiceSource?.transcript ?? "");
  const commandFeedback = propCommandFeedback !== undefined ? propCommandFeedback : (voiceSource?.commandFeedback ?? "");
  const startSpeechRecognition = propStartSpeechRecognition || voiceSource?.startSpeechRecognition || (() => {});
  const stopSpeechRecognition = propStopSpeechRecognition || voiceSource?.stopSpeechRecognition || (() => {});
  const vibrate = propVibrate || voiceSource?.vibrate || (() => {});
  const effectiveDrivingCommandRef = propDrivingCommandRef || (voiceSource as any)?.drivingCommandRef;

  const t = {
    vi: {
      modeActive: "GIAO DIỆN HUD ĐANG BẬT",
      safetyWarning: "Tập trung lái xe an toàn",
      exitBtn: "Thoát HUD",
      noBriefing: "Sẵn sàng phát thanh",
      offlineWarning: "MẤT KẾT NỐI: Dùng dữ liệu cũ",
      voiceActive: "Trợ lý sẵn sàng",
      continuousOn: "Rảnh tay: Bật",
      continuousOff: "Nhấn để ra lệnh",
      statusListening: "🎙️ Đang nghe...",
      statusProcessing: "⚙️ Đang xử lý...",
      savedTitle: "Bản tin lưu trữ",
      voiceOffline: "Điều khiển giọng nói tạm ngưng"
    },
    en: {
      modeActive: "DRIVING HUD ACTIVE",
      safetyWarning: "HUD Layout • Voice control",
      exitBtn: "Exit HUD",
      noBriefing: "Ready to broadcast",
      offlineWarning: "OFFLINE: Using cache",
      voiceActive: "Assistant Ready",
      continuousOn: "Hands-free: ON",
      continuousOff: "Tap to command",
      statusListening: "🎙️ Listening...",
      statusProcessing: "⚙️ Processing...",
      savedTitle: "Offline Archive",
      voiceOffline: "No network connection"
    }
  }[uiLanguage];

  const [localFeedback, setLocalFeedback] = useState("");

  const activeTitle = isGenerating ? (uiLanguage === "vi" ? "ĐANG TỔNG HỢP..." : "GENERATING...") : title || t.noBriefing;
  const activeIsPlaying = isPlaying;
  const activeCurrentTime = currentTime;
  const activeTotalDuration = totalDuration;

  const handleActivePlayPause = () => {
    onPlayPause();
  };

  const handleActiveSkip = (seconds: number) => {
    onSkip(seconds);
  };

  const handleActiveNext = () => {
    if (onNext) onNext();
  };

  const handleActivePrev = () => {
    // No-op for now unless prev is supported in the future
  };

  const handleVoiceCommand = useCallback((commandText: string) => {
    const action = parseVoiceCommand(commandText, uiLanguage);
    
    const triggerSuccessFeedback = (msg: string) => {
      setLocalFeedback(msg);
      playBeep(880, 0.1);
      playTTSFeedback(msg, uiLanguage);
      if (preferences.hapticFeedbackEnabled !== false && typeof navigator !== "undefined" && navigator.vibrate) {
        navigator.vibrate(50);
      }
    };

    switch (action.type) {
      case "SWITCH_VIEW":
        triggerSuccessFeedback(uiLanguage === "vi" ? "📰 Chế độ bản tin" : "📰 Briefing Mode");
        break;
      case "SEARCH":
        triggerSuccessFeedback(uiLanguage === "vi" ? `🔍 Đang tìm: ${action.query}` : `🔍 Searching: ${action.query}`);
        break;
      case "PLAY":
        triggerSuccessFeedback(uiLanguage === "vi" ? "▶️ Đang phát..." : "▶️ Playing...");
        handleActivePlayPause();
        break;
      case "PAUSE":
        triggerSuccessFeedback(uiLanguage === "vi" ? "⏸️ Đã tạm dừng" : "⏸️ Paused");
        handleActivePlayPause();
        break;
      case "NEXT":
        triggerSuccessFeedback(uiLanguage === "vi" ? "⏭️ Chuyển bài" : "⏭️ Next Track");
        handleActiveNext();
        break;
      case "FORWARD":
        triggerSuccessFeedback(uiLanguage === "vi" ? `⏩ Tua nhanh ${action.seconds}s` : `⏩ Fast Forward ${action.seconds}s`);
        handleActiveSkip(action.seconds);
        break;
      case "REWIND":
        triggerSuccessFeedback(uiLanguage === "vi" ? `⏪ Tua lùi ${action.seconds}s` : `⏪ Rewind ${action.seconds}s`);
        handleActiveSkip(-action.seconds);
        break;
      case "EXIT":
        triggerSuccessFeedback(uiLanguage === "vi" ? "🚪 Thoát..." : "🚪 Exiting...");
        setTimeout(onExit, 1000);
        break;
      case "UNRECOGNIZED":
        const failMsg = uiLanguage === "vi" ? `❓ Không rõ: "${action.raw}"` : `❓ Unrecognized: "${action.raw}"`;
        setLocalFeedback(failMsg);
        playBeep(220, 0.1, true); // Low pitch double beep for unrecognized commands
        if (preferences.hapticFeedbackEnabled !== false && vibrate) {
          vibrate([50, 100, 50]); // 2 short vibration pulses
        }
        break;
    }

    setTimeout(() => setLocalFeedback(""), 3000);
  }, [isPlaying, onPlayPause, onSkip, onExit, onNext, uiLanguage, preferences.hapticFeedbackEnabled, vibrate]);

  // Register command handler to the shared ref
  useEffect(() => {
    if (effectiveDrivingCommandRef) {
      effectiveDrivingCommandRef.current = handleVoiceCommand;
      return () => {
        if (effectiveDrivingCommandRef.current === handleVoiceCommand) {
          effectiveDrivingCommandRef.current = null;
        }
      };
    }
  }, [handleVoiceCommand, effectiveDrivingCommandRef]);

  useEffect(() => {
    if (onDuckingChange) onDuckingChange(isListening);
  }, [isListening, onDuckingChange]);

  useEffect(() => {
    if (isContinuous) startSpeechRecognition();
    else stopSpeechRecognition();
    return () => stopSpeechRecognition();
  }, [isContinuous, startSpeechRecognition, stopSpeechRecognition]);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => {
      setIsOffline(true);
      if (isContinuous) {
        setIsContinuous(false);
        stopSpeechRecognition();
        const msg = uiLanguage === "vi" ? "Mất mạng: Đã tắt giọng nói" : "Offline: Voice control disabled";
        setLocalFeedback(msg);
        playBeep(440, 0.2, true); // Warning beep
        playTTSFeedback(msg, uiLanguage);
        setTimeout(() => setLocalFeedback(""), 4000);
      }
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [isContinuous, setIsContinuous, stopSpeechRecognition, uiLanguage]);

  useEffect(() => {
    const docElm = document.documentElement;
    const enterFullscreen = async () => {
      try {
        if (docElm.requestFullscreen) await docElm.requestFullscreen();
      } catch (err) {
        console.warn("Fullscreen request blocked:", err);
      }
    };
    enterFullscreen();
    return () => {
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let wakeLock: any = null;
    const requestLock = async () => {
      try {
        if ('wakeLock' in navigator) wakeLock = await (navigator as any).wakeLock.request('screen');
      } catch (err) {
        console.warn("Wake Lock failed:", err);
      }
    };
    requestLock();
    return () => {
      document.body.style.overflow = "";
      if (wakeLock) wakeLock.release().catch(() => {});
    };
  }, []);

  // Translation t object already resolved at the top

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds === Infinity) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const isQuotaLimit = error && (error.includes("QUOTA_LIMIT") || error.includes("429") || error.includes("quota"));

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black text-white select-none overflow-hidden flex flex-col p-1 md:p-4"
      id="driving-hud-root"
    >
      {/* 1. TOP HEADER (Fixed Height) */}
      <header className="shrink-0 h-10 md:h-12 flex items-center justify-between px-2 md:px-4 border-b border-white/5 z-30">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
            <ShieldAlert className="w-4 h-4 md:w-5 h-5 text-yellow-500 animate-pulse" />
          </div>
          <div className="hidden sm:block">
            <h2 className="text-[10px] md:text-xs font-black tracking-widest text-blue-400 uppercase font-mono">{t.modeActive}</h2>
            <p className="text-[7px] md:text-[8px] font-bold text-white/40 uppercase tracking-tighter">{t.safetyWarning}</p>
          </div>
        </div>

        <button 
          onClick={onExit}
          className="h-8 md:h-10 px-3 md:px-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-all active:scale-95 group"
        >
          <XIcon className="w-3.5 h-3.5 md:w-4 h-4 text-red-400 group-hover:scale-110" />
          <span className="font-black uppercase tracking-widest text-[9px] md:text-[10px] whitespace-nowrap">{t.exitBtn}</span>
        </button>
      </header>

      {/* 2. CENTER STAGE (Flexible Height) */}
      <main className="w-full flex flex-row items-stretch gap-3 md:gap-4 px-4 flex-1 overflow-hidden py-2">
        {/* CỘT TRÁI - Khung hiển thị chính */}
        <div className="flex-[4] h-full flex flex-col items-center justify-center bg-zinc-900/50 rounded-2xl overflow-hidden relative p-6">
          <AnimatePresence mode="wait">
            {(localFeedback || commandFeedback) && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="absolute top-4 z-50 px-6 py-3 bg-blue-600 rounded-2xl shadow-2xl border border-blue-400/50"
              >
                <span className="text-sm md:text-lg font-black uppercase tracking-widest">{localFeedback || commandFeedback}</span>
              </motion.div>
            )}
          </AnimatePresence>
          
          <AnimatePresence>
            {transcript && (
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-4 left-4 right-4 z-50 px-4 py-2 bg-zinc-800/80 backdrop-blur-md rounded-xl text-center border border-white/10"
              >
                <p className="text-sm md:text-base text-zinc-300 font-medium leading-relaxed italic">
                  "{transcript}"
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div 
            key="briefing-stage"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="flex flex-col items-center gap-8 text-center w-full"
          >
            <h1 className="text-xl md:text-2xl font-bold tracking-wide leading-tight max-w-2xl px-6">
              {isGenerating ? (uiLanguage === "vi" ? "ĐANG TỔNG HỢP..." : "GENERATING...") : title || t.noBriefing}
            </h1>
            
            <div className="flex items-center gap-1.5 h-16 md:h-24">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
                <motion.div
                  key={i}
                  animate={{ height: isPlaying ? [10, 80, 10] : 6 }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.08 }}
                  className="w-1.5 md:w-2.5 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* CỘT PHẢI - Tính năng phụ dọc */}
        <div className="flex-[1] max-w-[250px] flex flex-col justify-start gap-4 pt-2 overflow-y-auto">
          <div className="w-full text-center pb-2 text-white/30 text-xs font-semibold uppercase tracking-widest border-b border-white/10 mb-2">
            {uiLanguage === "vi" ? "BẢN TIN LƯU TRỮ" : "OFFLINE ARCHIVE"}
          </div>
          
          {savedBriefings.map((briefing) => (
            <div key={briefing.id} className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-2">
              <div className="text-[10px] font-bold text-white/80 uppercase truncate">{briefing.title}</div>
              <button 
                onClick={() => onPlaySavedBriefing?.(briefing)}
                className="w-full py-2 bg-blue-600 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all"
              >
                {uiLanguage === "vi" ? "Phát Ngoại Tuyến" : "Play Offline"}
              </button>
            </div>
          ))}

          <div className="w-full text-center pb-2 text-white/30 text-xs font-semibold uppercase tracking-widest border-b border-white/10 mb-2 mt-4">
            {uiLanguage === "vi" ? "TÙY CHỌN" : "OPTIONS"}
          </div>
          <button onClick={onRetryGeneration} className="flex items-center gap-2 w-full py-3 px-2 justify-center rounded-xl font-semibold text-sm transition-all bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 active:scale-95">
            <RefreshCw className="w-4 h-4" />
            <span>{uiLanguage === "vi" ? "LÀM MỚI" : "REFRESH"}</span>
          </button>
        </div>
      </main>

      {/* 3. BOTTOM CONTROL BLOCK (Unified) */}
      <footer className="shrink-0 flex flex-col gap-4 pb-2 z-40 mt-auto w-full max-w-4xl mx-auto">
        <div className="w-full space-y-2 px-4 mb-2">
          <div className="flex justify-between font-mono text-[10px] md:text-xs font-medium text-white/40 uppercase tracking-widest">
            <span>{formatTime(activeCurrentTime)}</span>
            <span className={cn("transition-colors", activeIsPlaying ? "text-blue-400" : "text-white/20")}>{activeIsPlaying ? "STREAMING" : "PAUSED"}</span>
            <span>{formatTime(activeTotalDuration)}</span>
          </div>
          <div className="relative h-4 md:h-5 w-full bg-zinc-800/80 rounded-full border border-white/10 overflow-hidden cursor-pointer group transition-all">
            <input
              type="range"
              min={0}
              max={activeTotalDuration || 100}
              value={activeCurrentTime}
              onChange={(e) => {
                const newTime = Number(e.target.value);
                handleActiveSkip(newTime - activeCurrentTime);
              }}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30"
            />
            {/* Track */}
            <div className="absolute inset-0 bg-zinc-900/50" />
            
            {/* Progress Fill */}
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-blue-400 z-10"
              animate={{ width: `${(activeCurrentTime / (activeTotalDuration || 1)) * 100}%` }}
              transition={{ type: "spring", bounce: 0, duration: 0.1 }}
            />
            {/* Knobby Thumb visualization */}
            <motion.div 
               className="absolute top-0 h-full w-1.5 bg-white shadow-[0_0_10px_white] z-20"
               animate={{ left: `calc(${(activeCurrentTime / (activeTotalDuration || 1)) * 100}% - 0.75px)` }}
               transition={{ type: "spring", bounce: 0, duration: 0.1 }}
            />
          </div>
        </div>

        {/* STATUS BAR & MEDIA CONTROLS (Absolute Bottom) */}
        <div className="relative flex items-center justify-between px-4 md:px-8 h-16 border-t border-white/5 pt-2">
          {/* Left Status */}
          <div className="flex flex-col gap-2 z-10">
            <div className="flex items-center gap-6">
              {isOffline ? (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500/80">
                  <WifiOff className="w-3 h-3" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">{t.voiceOffline}</span>
                </div>
              ) : (
                <button onClick={() => setIsContinuous(!isContinuous)} className={cn("flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-semibold tracking-normal transition-all", isContinuous ? "bg-emerald-600/20 text-emerald-400 border border-emerald-500/30" : "bg-white/5 text-white/30 border border-white/10")}>
                  {isContinuous ? <Mic className="w-2.5 h-2.5" /> : <MicOff className="w-2.5 h-2.5" />}
                  <span>{isContinuous ? "VOICE ON" : "VOICE OFF"}</span>
                </button>
              )}
              <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-medium hidden sm:flex">
                <button 
                  onClick={() => onVolumeChange?.(Math.max(0, Math.round((volume - 0.1) * 10) / 10))}
                  className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 active:scale-95"
                >
                  -
                </button>
                <Volume2 className="w-3 h-3" />
                <span className="w-8 text-center">{Math.round(volume * 100)}%</span>
                <button 
                  onClick={() => onVolumeChange?.(Math.min(1, Math.round((volume + 0.1) * 10) / 10))}
                  className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 active:scale-95"
                >
                  +
                </button>
              </div>
            </div>
            {micError && (
              <div className="text-red-400 text-[9px] max-w-[200px] leading-tight">
                {micError}
              </div>
            )}
          </div>

          {/* Center Media Controls */}
          <div className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20 mt-1 gap-4 md:gap-6",
            isOffline ? "gap-6 md:gap-10" : ""
          )}>

            <button 
              onClick={() => handleActiveSkip(-15)} 
              className={cn(
                "rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all active:scale-90",
                isOffline ? "w-14 h-14 md:w-16 md:h-16" : "w-10 h-10 md:w-12 md:h-12"
              )}
            >
              <RotateCcw className={cn("text-white/60", isOffline ? "w-6 h-6 md:w-7 md:h-7" : "w-4 h-4 md:w-5 md:h-5")} />
            </button>

            <button 
              onClick={handleActivePlayPause} 
              className={cn(
                "rounded-full bg-white text-black shadow-xl flex items-center justify-center hover:bg-zinc-200 transition-all active:scale-95",
                isOffline ? "w-18 h-18 md:w-24 md:h-24" : "w-14 h-14 md:w-16 md:h-16"
              )}
            >
              {activeIsPlaying ? (
                <Pause className={cn("fill-current", isOffline ? "w-8 h-8 md:w-10 md:h-10" : "w-6 h-6 md:w-8 md:h-8")} />
              ) : (
                <Play className={cn("fill-current ml-1", isOffline ? "w-8 h-8 md:w-10 md:h-10" : "w-6 h-6 md:w-8 md:h-8")} />
              )}
            </button>

            <button 
              onClick={() => handleActiveSkip(15)} 
              className={cn(
                "rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all active:scale-90",
                isOffline ? "w-14 h-14 md:w-16 md:h-16" : "w-10 h-10 md:w-12 md:h-12"
              )}
            >
              <RotateCw className={cn("text-white/60", isOffline ? "w-6 h-6 md:w-7 md:h-7" : "w-4 h-4 md:w-5 md:h-5")} />
            </button>

            {onNext && (
              <button 
                onClick={handleActiveNext} 
                className={cn(
                  "rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all active:scale-90",
                  isOffline ? "w-14 h-14 md:w-16 md:h-16" : "w-10 h-10 md:w-12 md:h-12"
                )}
              >
                <SkipForward className={cn("text-blue-400", isOffline ? "w-6 h-6 md:w-7 md:h-7" : "w-4 h-4 md:w-5 md:h-5")} />
              </button>
            )}
          </div>

          {/* Right Status */}
          <div className="flex items-center gap-6 z-10">
            <span className="text-blue-500/40 text-[9px] font-bold tracking-[0.2em] animate-pulse uppercase hidden sm:block">
              {uiLanguage === "vi" ? "SẴN SÀNG ĐIỀU KHIỂN" : "READY TO CONTROL"}
            </span>
            <button className="flex items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors">
              <Archive className="w-3 h-3" />
              <span className="text-[10px] font-medium uppercase tracking-widest hidden sm:block">{t.savedTitle} ({savedBriefings.length})</span>
            </button>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {(isOffline || error) && (
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} className="fixed bottom-24 left-4 right-4 md:left-10 md:right-10 z-[110]">
             <div className={cn("p-4 md:p-6 rounded-2xl border flex items-center gap-4 shadow-2xl backdrop-blur-xl", isQuotaLimit ? "bg-amber-950/90 border-amber-500/50" : "bg-red-950/90 border-red-500/50")}>
                <AlertTriangle className={cn("w-6 h-6 shrink-0", isQuotaLimit ? "text-amber-400" : "text-red-400")} />
                <div className="flex-1 min-w-0">
                   <h3 className="text-xs md:text-sm font-black uppercase tracking-widest leading-none">{isQuotaLimit ? "QUOTA LIMIT" : "SYSTEM ERROR"}</h3>
                   <p className="text-[10px] md:text-xs font-bold opacity-70 truncate">{error || (isOffline ? t.offlineWarning : "")}</p>
                </div>
                <button onClick={onRetryGeneration} className="shrink-0 px-4 py-2 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-lg hover:bg-zinc-200">
                  Retry
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
