const fs = require('fs');
let content = fs.readFileSync('src/hooks/useSpeechRecognition.ts', 'utf8');

content = content.replace(/const startListening = useCallback\(\(\) => \{[\s\S]*?\}, \[[^\]]*\]\);/, `const startListening = useCallback(() => {
    manualStopRef.current = false;
    setErrorType(null);
    setErrorMessage("");

    const msgs = getLocalizedMessages();
    const cbs = callbacksRef.current;

    if (!navigator.onLine) {
      setErrorType("offline");
      setErrorMessage(msgs.offline);
      if (cbs.onError) {
        cbs.onError("offline", msgs.offline, "start-offline");
      }
      return;
    }

    const SpeechRecognitionClass =
      speechRecognitionFactory || (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognitionClass) {
      setErrorType("unsupported");
      setErrorMessage(msgs.unsupported);
      if (cbs.onError) {
        cbs.onError("unsupported", msgs.unsupported, "api-missing");
      }
      return;
    }

    try {
      if (recognitionRef.current) {
        recognitionRef.current.onend = null;
        recognitionRef.current.abort();
      }

      const recognition = new SpeechRecognitionClass();
      recognition.lang = cbs.lang || (uiLanguage === "vi" ? "vi-VN" : "en-US");
      recognition.continuous = cbs.continuous;
      recognition.interimResults = cbs.interimResults;

      recognition.onstart = () => {
        if (lastEndTimeRef.current > 0) {
          const gap = performance.now() - lastEndTimeRef.current;
          console.debug(\`[SpeechRecognition] Gap between sessions: \${gap.toFixed(2)}ms\`);
        }
        setIsListening(true);
        activeListeningRef.current = true;
        if (callbacksRef.current.onStart) {
          callbacksRef.current.onStart();
        }
      };

      recognition.onerror = (event) => {
        if (event.error === "aborted" || event.error === "no-speech") {
          console.debug(\`[SpeechRecognition] Benign event: \${event.error}\`);
          setIsListening(false);
          activeListeningRef.current = false;
          return;
        }

        console.error("Speech Recognition runtime error:", event.error);
        
        let type = "error";
        let msg = msgs.generalError;

        if (event.error === "not-allowed") {
          msg = msgs.micDenied;
        } else if (event.error === "network") {
          type = "offline";
          msg = msgs.offline;
        }

        setErrorType(type);
        setErrorMessage(msg);
        setIsListening(false);
        activeListeningRef.current = false;

        if (callbacksRef.current.onError) {
          callbacksRef.current.onError(type, msg, event.error);
        }
      };

      recognition.onend = () => {
        lastEndTimeRef.current = performance.now();
        setIsListening(false);
        activeListeningRef.current = false;
        
        if (callbacksRef.current.onEnd) {
          callbacksRef.current.onEnd();
        }
      };

      recognition.onresult = (event) => {
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const result = event.results[i];
          if (result.isFinal) {
            const transcript = result[0].transcript;
            if (callbacksRef.current.onTranscript && transcript && transcript.trim() !== "") {
              callbacksRef.current.onTranscript(transcript);
            }
          }
        }
      };

      recognitionRef.current = recognition;
      recognition.start();

    } catch (err) {
      console.error("Speech Recognition startup exception:", err);
      setErrorType("error");
      setErrorMessage(msgs.generalError);
      setIsListening(false);
      activeListeningRef.current = false;
      if (callbacksRef.current.onError) {
        callbacksRef.current.onError("error", msgs.generalError, err.message);
      }
    }
  }, [getLocalizedMessages, speechRecognitionFactory, uiLanguage]);`);

fs.writeFileSync('src/hooks/useSpeechRecognition.ts', content);
