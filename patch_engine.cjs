const fs = require('fs');
let content = fs.readFileSync('src/services/VoiceCommandEngine.ts', 'utf8');

// Replace Set with Map for callbacks
content = content.replace(
  '  private stateChangeCallbacks = new Set<(state: VoiceEngineState) => void>();\n  private transcriptCallbacks = new Set<(transcript: string) => void>();\n  private commandCallbacks = new Set<(action: VoiceCommandAction) => void>();\n  private errorCallbacks = new Set<(type: SpeechRecognitionErrorType, message: string, detail?: string) => void>();\n  private duckingChangeCallbacks = new Set<(isDucked: boolean, targetVolume: number) => void>();',
  `  private stateChangeCallbacks = new Map<string, (state: VoiceEngineState) => void>();
  private transcriptCallbacks = new Map<string, (transcript: string) => void>();
  private commandCallbacks = new Map<string, (action: VoiceCommandAction) => void>();
  private errorCallbacks = new Map<string, (type: SpeechRecognitionErrorType, message: string, detail?: string) => void>();
  private duckingChangeCallbacks = new Map<string, (isDucked: boolean, targetVolume: number) => void>();
  private activeContextId: string | null = null;
  public getActiveContext() { return this.activeContextId; }`
);

// We need to update registerCallbacks and unregisterCallbacks to take a contextId
const registerOld = `  public registerCallbacks(handlers: {
    onStateChange?: (state: VoiceEngineState) => void;
    onTranscript?: (transcript: string) => void;
    onCommand?: (action: VoiceCommandAction) => void;
    onError?: (type: SpeechRecognitionErrorType, message: string, detail?: string) => void;
    onDuckingChange?: (isDucked: boolean, targetVolume: number) => void;
  }) {
    if (handlers.onStateChange) this.stateChangeCallbacks.add(handlers.onStateChange);
    if (handlers.onTranscript) this.transcriptCallbacks.add(handlers.onTranscript);
    if (handlers.onCommand) this.commandCallbacks.add(handlers.onCommand);
    if (handlers.onError) this.errorCallbacks.add(handlers.onError);
    if (handlers.onDuckingChange) this.duckingChangeCallbacks.add(handlers.onDuckingChange);
  }

  public unregisterCallbacks(handlers: {
    onStateChange?: (state: VoiceEngineState) => void;
    onTranscript?: (transcript: string) => void;
    onCommand?: (action: VoiceCommandAction) => void;
    onError?: (type: SpeechRecognitionErrorType, message: string, detail?: string) => void;
    onDuckingChange?: (isDucked: boolean, targetVolume: number) => void;
  }) {
    if (handlers.onStateChange) this.stateChangeCallbacks.delete(handlers.onStateChange);
    if (handlers.onTranscript) this.transcriptCallbacks.delete(handlers.onTranscript);
    if (handlers.onCommand) this.commandCallbacks.delete(handlers.onCommand);
    if (handlers.onError) this.errorCallbacks.delete(handlers.onError);
    if (handlers.onDuckingChange) this.duckingChangeCallbacks.delete(handlers.onDuckingChange);
  }`;

const registerNew = `  public registerCallbacks(contextId: string, handlers: {
    onStateChange?: (state: VoiceEngineState) => void;
    onTranscript?: (transcript: string) => void;
    onCommand?: (action: VoiceCommandAction) => void;
    onError?: (type: SpeechRecognitionErrorType, message: string, detail?: string) => void;
    onDuckingChange?: (isDucked: boolean, targetVolume: number) => void;
  }) {
    if (handlers.onStateChange) this.stateChangeCallbacks.set(contextId, handlers.onStateChange);
    if (handlers.onTranscript) this.transcriptCallbacks.set(contextId, handlers.onTranscript);
    if (handlers.onCommand) this.commandCallbacks.set(contextId, handlers.onCommand);
    if (handlers.onError) this.errorCallbacks.set(contextId, handlers.onError);
    if (handlers.onDuckingChange) this.duckingChangeCallbacks.set(contextId, handlers.onDuckingChange);
  }

  public unregisterCallbacks(contextId: string) {
    this.stateChangeCallbacks.delete(contextId);
    this.transcriptCallbacks.delete(contextId);
    this.commandCallbacks.delete(contextId);
    this.errorCallbacks.delete(contextId);
    this.duckingChangeCallbacks.delete(contextId);
  }`;

content = content.replace(registerOld, registerNew);

content = content.replace(/this\.stateChangeCallbacks\.forEach\(cb => cb\(newState\)\);/g, 'this.stateChangeCallbacks.forEach(cb => cb(newState));');
// wait, stateChange should be broadcasted to all? YES, so UI can update isListening.
// error should be broadcasted? Maybe only to active? Let's broadcast state and error to ALL.
// But transcript and command MUST only go to activeContextId!

content = content.replace(/this\.transcriptCallbacks\.forEach\(cb => cb\(rawText\)\);/g, 'const cb = this.activeContextId ? this.transcriptCallbacks.get(this.activeContextId) : null; if (cb) cb(rawText);');
content = content.replace(/if \(this\.transcriptCallbacks\.size > 0\) {/g, 'if (this.transcriptCallbacks.size > 0) {');

content = content.replace(/this\.commandCallbacks\.forEach\(cb => cb\(action\)\);/g, 'const cb = this.activeContextId ? this.commandCallbacks.get(this.activeContextId) : null; if (cb) cb(action);');
content = content.replace(/if \(this\.commandCallbacks\.size > 0\) {/g, 'if (this.commandCallbacks.size > 0) {');

content = content.replace(/this\.errorCallbacks\.forEach\(cb => cb\((.*?)\)\);/g, 'this.errorCallbacks.forEach(cb => cb($1));');
content = content.replace(/this\.duckingChangeCallbacks\.forEach\(cb => cb\((.*?)\)\);/g, 'this.duckingChangeCallbacks.forEach(cb => cb($1));');

// Update startEngine
const startEngineOld = `  public async startEngine(options: { continuous?: boolean } = {}): Promise<void> {
    if (this.isListeningActive) {
      console.warn("[VoiceCommandEngine] Engine is already listening.");
      return;
    }`;

const startEngineNew = `  public async startEngine(options: { continuous?: boolean, contextId?: string } = {}): Promise<void> {
    if (options.contextId) {
      this.activeContextId = options.contextId;
      console.log("[VoiceCommandEngine] Active context switched to:", this.activeContextId);
    }
    if (this.isListeningActive) {
      console.warn("[VoiceCommandEngine] Engine is already listening.");
      return;
    }`;

content = content.replace(startEngineOld, startEngineNew);

fs.writeFileSync('src/services/VoiceCommandEngine.ts', content);
