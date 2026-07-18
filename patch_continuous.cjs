const fs = require('fs');
let content = fs.readFileSync('src/hooks/useSpeechRecognition.ts', 'utf8');

content = content.replace(
  '      onTranscript: (transcript: string) => {\n        if (callbacksRef.current.onTranscript) {\n          callbacksRef.current.onTranscript(transcript);\n        }\n      },',
  '      onTranscript: (transcript: string) => {\n        if (!continuous) {\n          engine.stopEngine();\n        }\n        if (callbacksRef.current.onTranscript) {\n          callbacksRef.current.onTranscript(transcript);\n        }\n      },'
);

fs.writeFileSync('src/hooks/useSpeechRecognition.ts', content);
