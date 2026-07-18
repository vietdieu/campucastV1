const fs = require('fs');
let content = fs.readFileSync('src/hooks/useSpeechRecognition.ts', 'utf8');

// Add contextId to props
content = content.replace(
  'interface UseSpeechRecognitionProps {\n  uiLanguage: "vi" | "en";',
  'interface UseSpeechRecognitionProps {\n  contextId?: string;\n  uiLanguage: "vi" | "en";'
);

content = content.replace(
  'export function useSpeechRecognition({',
  'let hookCounter = 0;\nexport function useSpeechRecognition({'
);

content = content.replace(
  '  speechRecognitionFactory\n}: UseSpeechRecognitionProps) {',
  '  speechRecognitionFactory,\n  contextId\n}: UseSpeechRecognitionProps) {'
);

// We need a unique contextId if not provided
const refCodeOld = `  const [isListening, setIsListening] = useState<boolean>(false);
  const [errorType, setErrorType] = useState<SpeechRecognitionErrorType>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const engine = VoiceCommandEngine.getInstance();`;

const refCodeNew = `  const [isListening, setIsListening] = useState<boolean>(false);
  const [errorType, setErrorType] = useState<SpeechRecognitionErrorType>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const engine = VoiceCommandEngine.getInstance();
  const hookId = useRef(contextId || \`hook_\${++hookCounter}\`).current;`;

content = content.replace(refCodeOld, refCodeNew);

// Update registerCallbacks
const regOld = `    };
    engine.registerCallbacks(handlers);
    
    return () => {
      engine.unregisterCallbacks(handlers);
    };
  }, [engine]);`;

const regNew = `    };
    engine.registerCallbacks(hookId, handlers);
    
    return () => {
      engine.unregisterCallbacks(hookId);
    };
  }, [engine, hookId]);`;

content = content.replace(regOld, regNew);

// Update startListening
const startOld = `  const startListening = useCallback(() => {
    engine.startEngine({ continuous });
  }, [engine, continuous]);`;

const startNew = `  const startListening = useCallback(() => {
    engine.startEngine({ continuous, contextId: hookId });
  }, [engine, continuous, hookId]);`;

content = content.replace(startOld, startNew);

fs.writeFileSync('src/hooks/useSpeechRecognition.ts', content);
