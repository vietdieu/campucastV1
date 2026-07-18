const fs = require('fs');
let content = fs.readFileSync('src/hooks/useSpeechRecognition.ts', 'utf8');

const oldCode = `  // Hook registers itself with the singleton engine
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
  }, [engine]);`;

const newCode = `  // Hook registers itself with the singleton engine
  useEffect(() => {
    const handlers = {
      onStateChange: (state: any) => {
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
      onTranscript: (transcript: string) => {
        if (callbacksRef.current.onTranscript) {
          callbacksRef.current.onTranscript(transcript);
        }
      },
      onError: (type: any, msg: string, detail: any) => {
        setErrorType(type);
        setErrorMessage(msg);
        if (callbacksRef.current.onError) {
          callbacksRef.current.onError(type, msg, detail);
        }
      }
    };
    engine.registerCallbacks(handlers);
    
    return () => {
      engine.unregisterCallbacks(handlers);
    };
  }, [engine]);`;

content = content.replace(oldCode, newCode);
fs.writeFileSync('src/hooks/useSpeechRecognition.ts', content);
