var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/services/broadcastSpeechEngine.ts
var broadcastSpeechEngine_exports = {};
__export(broadcastSpeechEngine_exports, {
  AudioProcessor: () => AudioProcessor,
  BreathPlanner: () => BreathPlanner,
  BroadcastStyle: () => BroadcastStyle,
  CommuteCastEngine: () => CommuteCastEngine,
  ConsoleMetrics: () => ConsoleMetrics,
  DateTimeNormalizer: () => DateTimeNormalizer,
  EmotionState: () => EmotionState,
  EntityResolver: () => EntityResolver,
  EventType: () => EventType,
  ExecutionScheduler: () => ExecutionScheduler,
  MemoryCache: () => MemoryCache,
  Normalizer: () => Normalizer,
  NumberNormalizer: () => NumberNormalizer,
  ProductionTokenizer: () => ProductionTokenizer,
  PronunciationDictionary: () => PronunciationDictionary,
  ProsodyPlanner: () => ProsodyPlanner,
  RuleEngine: () => RuleEngine,
  SSMLGenerator: () => SSMLGenerator,
  Scorer: () => Scorer,
  SimpleEventBus: () => SimpleEventBus,
  TTSDispatcher: () => TTSDispatcher,
  TokenType: () => TokenType,
  Topic: () => Topic,
  UnifiedAIService: () => UnifiedAIService,
  VoiceManager: () => VoiceManager
});
var TokenType, EmotionState, BroadcastStyle, Topic, EventType, ProductionTokenizer, NumberNormalizer, DateTimeNormalizer, Normalizer, RuleEngine, PronunciationDictionary, EntityResolver, UnifiedAIService, ProsodyPlanner, BreathPlanner, SSMLGenerator, VoiceManager, TTSDispatcher, AudioProcessor, Scorer, MemoryCache, ExecutionScheduler, CommuteCastEngine, SimpleEventBus, ConsoleMetrics;
var init_broadcastSpeechEngine = __esm({
  "src/services/broadcastSpeechEngine.ts"() {
    TokenType = /* @__PURE__ */ ((TokenType2) => {
      TokenType2["URL"] = "url";
      TokenType2["EMAIL"] = "email";
      TokenType2["PHONE"] = "phone";
      TokenType2["IP"] = "ip";
      TokenType2["HASHTAG"] = "hashtag";
      TokenType2["MENTION"] = "mention";
      TokenType2["EMOJI"] = "emoji";
      TokenType2["HTML"] = "html";
      TokenType2["MARKDOWN"] = "markdown";
      TokenType2["DATE"] = "date";
      TokenType2["TIME"] = "time";
      TokenType2["CURRENCY"] = "currency";
      TokenType2["PERCENT"] = "percent";
      TokenType2["NUMBER"] = "number";
      TokenType2["UNIT"] = "unit";
      TokenType2["ABBREVIATION"] = "abbreviation";
      TokenType2["WORD"] = "word";
      TokenType2["PUNCTUATION"] = "punctuation";
      TokenType2["QUOTE"] = "quote";
      TokenType2["BRACKET"] = "bracket";
      TokenType2["SPACE"] = "space";
      TokenType2["UNKNOWN"] = "unknown";
      return TokenType2;
    })(TokenType || {});
    EmotionState = /* @__PURE__ */ ((EmotionState2) => {
      EmotionState2["NEUTRAL"] = "neutral";
      EmotionState2["CALM"] = "calm";
      EmotionState2["CONCERN"] = "concern";
      EmotionState2["URGENT"] = "urgent";
      EmotionState2["BREAKING"] = "breaking";
      EmotionState2["POSITIVE"] = "positive";
      EmotionState2["NEGATIVE"] = "negative";
      EmotionState2["EXCITED"] = "excited";
      EmotionState2["WARNING"] = "warning";
      EmotionState2["SAD"] = "sad";
      return EmotionState2;
    })(EmotionState || {});
    BroadcastStyle = /* @__PURE__ */ ((BroadcastStyle2) => {
      BroadcastStyle2["BBC"] = "bbc";
      BroadcastStyle2["VOV"] = "vov";
      BroadcastStyle2["NPR"] = "npr";
      BroadcastStyle2["MORNING"] = "morning";
      BroadcastStyle2["BREAKING"] = "breaking";
      BroadcastStyle2["PODCAST"] = "podcast";
      return BroadcastStyle2;
    })(BroadcastStyle || {});
    Topic = /* @__PURE__ */ ((Topic2) => {
      Topic2["GENERAL"] = "general";
      Topic2["TRAFFIC"] = "traffic";
      Topic2["WEATHER"] = "weather";
      Topic2["TECHNOLOGY"] = "technology";
      Topic2["ECONOMY"] = "economy";
      Topic2["EMERGENCY"] = "emergency";
      Topic2["SPORTS"] = "sports";
      Topic2["POLITICS"] = "politics";
      return Topic2;
    })(Topic || {});
    EventType = /* @__PURE__ */ ((EventType2) => {
      EventType2["TOKENIZER_FINISHED"] = "tokenizer.finished";
      EventType2["NORMALIZER_FINISHED"] = "normalizer.finished";
      EventType2["RULE_ENGINE_FINISHED"] = "rule-engine.finished";
      EventType2["ENTITY_RESOLVER_FINISHED"] = "entity-resolver.finished";
      EventType2["AI_FINISHED"] = "ai.finished";
      EventType2["SCORING_FINISHED"] = "scoring.finished";
      EventType2["PROSODY_FINISHED"] = "prosody.finished";
      EventType2["SSML_GENERATED"] = "ssml.generated";
      EventType2["TTS_FINISHED"] = "tts.finished";
      EventType2["AUDIO_PROCESSED"] = "audio.processed";
      EventType2["CACHE_HIT"] = "cache.hit";
      EventType2["CACHE_MISS"] = "cache.miss";
      EventType2["ERROR_OCCURRED"] = "error.occurred";
      return EventType2;
    })(EventType || {});
    ProductionTokenizer = class _ProductionTokenizer {
      static {
        // Use Unicode property escapes for better language support
        this.PATTERNS = [
          { type: "url" /* URL */, regex: /^https?:\/\/[^\s)\],"]+/ },
          { type: "email" /* EMAIL */, regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/ },
          { type: "phone" /* PHONE */, regex: /^(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4,}/ },
          { type: "ip" /* IP */, regex: /^\b(?:\d{1,3}\.){3}\d{1,3}\b/ },
          { type: "hashtag" /* HASHTAG */, regex: /^#[a-zA-Z0-9_]+/ },
          { type: "mention" /* MENTION */, regex: /^@[a-zA-Z0-9_]+/ },
          { type: "emoji" /* EMOJI */, regex: /^[\p{Emoji}\u{1F600}-\u{1F6FF}\u{2600}-\u{27BF}]/u },
          { type: "html" /* HTML */, regex: /^<\/?[a-zA-Z][a-zA-Z0-9]*[^>]*>/ },
          { type: "markdown" /* MARKDOWN */, regex: /^(\*\*|__|~~|\*|_)[^\s*_~]+(\1)/ },
          { type: "date" /* DATE */, regex: /^(\d{4}-\d{1,2}-\d{1,2})|(\d{1,2}\/\d{1,2}\/\d{4})/ },
          { type: "time" /* TIME */, regex: /^\d{1,2}:\d{2}(:\d{2})?/ },
          { type: "currency" /* CURRENCY */, regex: /^[\$€£¥₫]|^(USD|EUR|GBP|JPY|VND|AUD|CAD)\b/ },
          { type: "percent" /* PERCENT */, regex: /^(\d+[.,]?\d*)%/ },
          { type: "number" /* NUMBER */, regex: /^(\d{1,3}(?:[.,]\d{3})*(?:[.,]\d+)?)/ },
          { type: "unit" /* UNIT */, regex: /^(km|kg|g|m|cm|mm|l|ml|gb|mb|kb|tb|s|min|h)\b/i },
          { type: "abbreviation" /* ABBREVIATION */, regex: /^[A-Z](?:\.[A-Z])+\.?/ },
          { type: "word" /* WORD */, regex: new RegExp("^\\p{L}+", "u") },
          { type: "punctuation" /* PUNCTUATION */, regex: /^[.,!?;:…\-–—]/ },
          { type: "quote" /* QUOTE */, regex: /^["'`„“”«»]/ },
          { type: "bracket" /* BRACKET */, regex: /^[()\[\]{}<>]/ },
          { type: "space" /* SPACE */, regex: /^\s+/ }
        ];
      }
      tokenize(text) {
        const tokens = [];
        let i = 0;
        while (i < text.length) {
          const remaining = text.substring(i);
          let matched = false;
          for (const pattern of _ProductionTokenizer.PATTERNS) {
            const match = remaining.match(pattern.regex);
            if (match) {
              const value = match[0];
              tokens.push({
                type: pattern.type,
                value,
                original: value,
                start: i,
                end: i + value.length
              });
              i += value.length;
              matched = true;
              break;
            }
          }
          if (!matched) {
            tokens.push({
              type: "unknown" /* UNKNOWN */,
              value: text[i],
              original: text[i],
              start: i,
              end: i + 1
            });
            i++;
          }
        }
        return this.postProcess(tokens);
      }
      postProcess(tokens) {
        const merged = [];
        for (let i = 0; i < tokens.length; i++) {
          const token2 = tokens[i];
          if (token2.type === "number" /* NUMBER */ && i + 1 < tokens.length && tokens[i + 1].type === "unit" /* UNIT */) {
            const next = tokens[i + 1];
            if (token2.end === next.start) {
              merged.push({
                ...token2,
                value: token2.value + next.value,
                end: next.end
              });
              i++;
              continue;
            }
          }
          merged.push(token2);
        }
        return merged;
      }
    };
    NumberNormalizer = class {
      static parseLocaleNumber(value, locale = "vi-VN") {
        const parts = Intl.NumberFormat(locale).formatToParts(1234.56);
        const groupSep = parts.find((p) => p.type === "group")?.value || ".";
        const decimalSep = parts.find((p) => p.type === "decimal")?.value || ",";
        const normalized = value.replace(new RegExp(`\\${groupSep}`, "g"), "").replace(new RegExp(`\\${decimalSep}`), ".");
        return parseFloat(normalized);
      }
      // BigInt-based number reader
      static toVietnameseWords(num) {
        const n = typeof num === "bigint" ? num : BigInt(num);
        if (n === 0n) return "kh\xF4ng";
        if (n < 0n) return "\xE2m " + this.toVietnameseWords(-n);
        return this.readBigInt(n);
      }
      static readBigInt(n) {
        if (n === 0n) return "kh\xF4ng";
        const chunkNames = ["", "ngh\xECn", "tri\u1EC7u", "t\u1EF7", "ngh\xECn t\u1EF7", "tri\u1EC7u t\u1EF7", "t\u1EF7 t\u1EF7"];
        const units = ["", "m\u1ED9t", "hai", "ba", "b\u1ED1n", "n\u0103m", "s\xE1u", "b\u1EA3y", "t\xE1m", "ch\xEDn"];
        const tens = ["", "m\u01B0\u1EDDi", "hai m\u01B0\u01A1i", "ba m\u01B0\u01A1i", "b\u1ED1n m\u01B0\u01A1i", "n\u0103m m\u01B0\u01A1i", "s\xE1u m\u01B0\u01A1i", "b\u1EA3y m\u01B0\u01A1i", "t\xE1m m\u01B0\u01A1i", "ch\xEDn m\u01B0\u01A1i"];
        const hundreds = ["", "m\u1ED9t tr\u0103m", "hai tr\u0103m", "ba tr\u0103m", "b\u1ED1n tr\u0103m", "n\u0103m tr\u0103m", "s\xE1u tr\u0103m", "b\u1EA3y tr\u0103m", "t\xE1m tr\u0103m", "ch\xEDn tr\u0103m"];
        function readThreeDigits(num) {
          if (num === 0n) return "";
          const h = Number(num / 100n);
          const t = Number(num % 100n / 10n);
          const u = Number(num % 10n);
          let result2 = "";
          if (h > 0) {
            result2 += hundreds[h];
            if (t > 0 || u > 0) result2 += " ";
          }
          if (t > 0) {
            if (t === 1) {
              result2 += u === 0 ? "m\u01B0\u1EDDi" : "m\u01B0\u1EDDi " + (u === 5 ? "l\u0103m" : units[u]);
            } else {
              result2 += tens[t];
              if (u > 0) {
                if (u === 1) result2 += " m\u1ED1t";
                else if (u === 5) result2 += " l\u0103m";
                else result2 += " " + units[u];
              }
            }
          } else if (u > 0) {
            if (num > 100n) result2 += "l\u1EBB ";
            if (u === 5) result2 += "l\u0103m";
            else if (u === 1 && num > 100n) result2 += "m\u1ED1t";
            else result2 += units[u];
          }
          return result2.trim();
        }
        let chunks = [];
        let remaining = n;
        let idx = 0;
        while (remaining > 0n) {
          const chunk = remaining % 1000n;
          if (chunk > 0n) {
            let chunkStr = readThreeDigits(chunk);
            if (idx > 0) {
              chunkStr += " " + chunkNames[idx];
            }
            chunks.unshift(chunkStr);
          } else {
            if (chunks.length > 0) {
            }
          }
          remaining = remaining / 1000n;
          idx++;
        }
        let result = chunks.join(" ");
        if (n > 1000n && n % 1000n < 100n && n % 1000n !== 0n) {
          const last = chunks[chunks.length - 1];
          if (last && !last.includes("tr\u0103m")) {
            chunks[chunks.length - 1] = "kh\xF4ng tr\u0103m l\u1EBB " + last;
            result = chunks.join(" ");
          }
        }
        return result;
      }
      static normalizeToken(token2, locale = "vi-VN") {
        if (token2.type !== "number" /* NUMBER */) return token2;
        let num;
        try {
          num = this.parseLocaleNumber(token2.value, locale);
        } catch {
          return token2;
        }
        if (isNaN(num)) return token2;
        const words = locale.startsWith("vi") ? this.toVietnameseWords(BigInt(Math.floor(num))) : num.toString();
        return { ...token2, normalized: words };
      }
    };
    DateTimeNormalizer = class {
      static parseDate(value, locale = "vi-VN") {
        if (value.includes("/")) {
          const parts = value.split("/");
          if (locale.startsWith("vi")) {
            return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
          } else {
            return new Date(parseInt(parts[2]), parseInt(parts[0]) - 1, parseInt(parts[1]));
          }
        } else if (value.includes("-")) {
          const parts = value.split("-");
          return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
        }
        return null;
      }
      static formatDate(date, locale = "vi-VN") {
        if (locale.startsWith("vi")) {
          const months = ["th\xE1ng m\u1ED9t", "th\xE1ng hai", "th\xE1ng ba", "th\xE1ng t\u01B0", "th\xE1ng n\u0103m", "th\xE1ng s\xE1u", "th\xE1ng b\u1EA3y", "th\xE1ng t\xE1m", "th\xE1ng ch\xEDn", "th\xE1ng m\u01B0\u1EDDi", "th\xE1ng m\u01B0\u1EDDi m\u1ED9t", "th\xE1ng m\u01B0\u1EDDi hai"];
          return `ng\xE0y ${date.getDate()} ${months[date.getMonth()]} n\u0103m ${date.getFullYear()}`;
        } else {
          return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" }).format(date);
        }
      }
      static normalizeToken(token2, locale = "vi-VN") {
        if (token2.type !== "date" /* DATE */) return token2;
        const date = this.parseDate(token2.value, locale);
        if (!date) return token2;
        const words = this.formatDate(date, locale);
        return { ...token2, normalized: words };
      }
    };
    Normalizer = class {
      normalize(tokens, locale = "vi-VN") {
        return tokens.map((token2) => {
          if (token2.type === "number" /* NUMBER */) {
            return NumberNormalizer.normalizeToken(token2, locale);
          }
          if (token2.type === "date" /* DATE */) {
            return DateTimeNormalizer.normalizeToken(token2, locale);
          }
          return token2;
        });
      }
    };
    RuleEngine = class {
      constructor(rules = []) {
        this.rules = [];
        this.rules = rules.sort((a, b) => a.priority - b.priority);
      }
      addRule(rule) {
        this.rules.push(rule);
        this.rules.sort((a, b) => a.priority - b.priority);
      }
      apply(text) {
        let result = text;
        for (const rule of this.rules) {
          if (typeof rule.replacement === "string") {
            result = result.replace(rule.pattern, rule.replacement);
          } else {
            const replacer = rule.replacement;
            result = result.replace(rule.pattern, (match, ...args) => {
              const execArray = [match, ...args];
              return replacer(execArray);
            });
          }
        }
        return result;
      }
      // Now actually applies rules and updates tokens (simple re-tokenization via splitting)
      applyTokens(tokens) {
        const text = tokens.map((t) => t.value).join("");
        const applied = this.apply(text);
        return tokens.map((t, i) => {
          return t;
        });
      }
    };
    PronunciationDictionary = class {
      constructor(entries = []) {
        this.entries = /* @__PURE__ */ new Map();
        for (const entry of entries) {
          this.entries.set(entry.text.toLowerCase(), entry);
        }
      }
      lookup(text, locale, style) {
        const key = text.toLowerCase();
        const entry = this.entries.get(key);
        if (!entry) return void 0;
        if (locale && !entry.locale.includes(locale)) return void 0;
        if (style && entry.style && entry.style !== style) return void 0;
        return entry;
      }
      add(entry) {
        this.entries.set(entry.text.toLowerCase(), entry);
      }
      load(json) {
        for (const [key, value] of Object.entries(json)) {
          this.entries.set(key.toLowerCase(), value);
        }
      }
    };
    EntityResolver = class {
      constructor(dict) {
        this.dict = dict;
        this.titles = ["\xD4ng", "B\xE0", "Anh", "Ch\u1ECB", "C\xF4", "Ch\xFA", "GS", "TS", "PGS", "ThS", "Th\u1EE7 t\u01B0\u1EDBng", "B\u1ED9 tr\u01B0\u1EDFng", "T\u1ED5ng B\xED th\u01B0", "Ch\u1EE7 t\u1ECBch"];
      }
      resolve(tokens, locale) {
        const entities = [];
        const text = tokens.map((t) => t.value).join("");
        for (const token2 of tokens) {
          if (token2.type === "abbreviation" /* ABBREVIATION */ || token2.type === "word" /* WORD */) {
            const entry = this.dict.lookup(token2.value, locale);
            if (entry) {
              entities.push({
                text: token2.value,
                type: "MISC",
                normalized: entry.ssml || entry.phoneme || token2.value,
                confidence: 1
              });
            }
          }
        }
        const personRegex = new RegExp(`(${this.titles.join("|")})\\s+([A-Z\xC0-\u1EF8][a-z\xE0-\u1EF9]+(?:\\s+[A-Z\xC0-\u1EF8][a-z\xE0-\u1EF9]+)*)`, "g");
        let match;
        while ((match = personRegex.exec(text)) !== null) {
          entities.push({
            text: match[0],
            type: "PERSON",
            confidence: 0.9
          });
        }
        const nameRegex = /\b([A-ZÀ-Ỹ][a-zà-ỹ]+(?:\s+[A-ZÀ-Ỹ][a-zà-ỹ]+)+)\b/g;
        while ((match = nameRegex.exec(text)) !== null) {
          const fullName = match[0];
          if (!entities.some((e) => e.text === fullName)) {
            entities.push({
              text: fullName,
              type: "PERSON",
              confidence: 0.7
            });
          }
        }
        return entities;
      }
    };
    UnifiedAIService = class {
      constructor(ai) {
        this.ai = ai;
      }
      async process(text, config, signal) {
        const systemPrompt = `
You are a broadcast script expert. Analyze the text and return JSON with:
{
  "rewritten": "...",
  "summary": "...",
  "emotion": {
    "primary": "neutral|calm|concern|urgent|breaking|positive|negative|excited|warning|sad",
    "secondary": [],
    "energy": 0.5,
    "urgency": 0.3,
    "sentiment": 0,
    "confidence": 0.9
  },
  "topic": "general|traffic|weather|technology|economy|emergency|sports|politics"
}
Use ${config.style} style, ${config.languageMode} mode.
`;
        const userPrompt = `Text: """${text}"""`;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15e3);
        if (signal) signal.addEventListener("abort", () => controller.abort());
        try {
          const response = await this.ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [{ role: "user", parts: [{ text: userPrompt }] }],
            config: {
              systemInstruction: systemPrompt,
              temperature: 0.3,
              responseMimeType: "application/json",
              maxOutputTokens: 2048
            }
          });
          clearTimeout(timeoutId);
          const raw = response.text?.trim() || "{}";
          const jsonMatch = raw.match(/\{[\s\S]*\}/);
          const jsonStr = jsonMatch ? jsonMatch[0] : raw;
          const data = JSON.parse(jsonStr);
          return {
            rewritten: data.rewritten || text,
            summary: data.summary || text,
            emotion: data.emotion || { primary: "neutral" /* NEUTRAL */, secondary: [], energy: 0.5, urgency: 0.3, sentiment: 0, confidence: 0.5 },
            topic: data.topic || "general" /* GENERAL */
          };
        } catch (e) {
          return {
            rewritten: text,
            summary: text,
            emotion: { primary: "neutral" /* NEUTRAL */, secondary: [], energy: 0.5, urgency: 0.3, sentiment: 0, confidence: 0.5 },
            topic: "general" /* GENERAL */
          };
        } finally {
          clearTimeout(timeoutId);
        }
      }
    };
    ProsodyPlanner = class {
      plan(groups, emotion, style) {
        return groups.map((group, i) => {
          const isFirst = i === 0;
          const isLast = i === groups.length - 1;
          const isImportant = group.importance > 0.6;
          let rate = style.rate.base * (isFirst ? 1.05 : isLast ? 0.95 : 1);
          if (emotion.urgency > 0.7) rate *= 1.1;
          let pitch = style.pitch.base;
          if (isFirst) pitch += 0.05;
          if (isLast) pitch -= 0.03;
          if (emotion.primary === "excited" /* EXCITED */) pitch += 0.1;
          let volume = style.energyLevel * 0.8 + emotion.energy * 0.2;
          if (isImportant) volume = Math.min(1, volume + 0.1);
          let emphasis = "none";
          if (isImportant || emotion.urgency > 0.7) emphasis = "strong";
          let breakDuration = style.pause.default;
          if (group.type === "statement") breakDuration = style.pause.period;
          if (group.type === "question") breakDuration = style.pause.question;
          if (group.type === "exclamation") breakDuration = style.pause.exclamation;
          if (isFirst) breakDuration = style.pause.afterTitle;
          if (isLast) breakDuration = style.pause.period * 1.5;
          return {
            text: group.text,
            rate: Math.max(0.5, Math.min(2, rate)),
            pitch: Math.max(-1, Math.min(1, pitch)),
            volume: Math.max(0, Math.min(1, volume)),
            emphasis,
            breakDuration
          };
        });
      }
    };
    BreathPlanner = class {
      plan(sentences) {
        const groups = [];
        for (const sentence of sentences) {
          const clauses = this.splitClauses(sentence);
          for (const clause of clauses) {
            groups.push({
              text: clause,
              type: this.detectType(clause),
              importance: this.calcImportance(clause)
            });
          }
        }
        return groups;
      }
      splitClauses(text) {
        const markers = [" v\xE0 ", " nh\u01B0ng ", " b\u1EDFi v\xEC ", " do \u0111\xF3 ", " although ", " because ", " while ", ", "];
        for (const marker of markers) {
          const idx = text.toLowerCase().indexOf(marker);
          if (idx !== -1) {
            const left = text.substring(0, idx).trim();
            const right = text.substring(idx + marker.length).trim();
            if (left.split(/\s+/).length >= 3 && right.split(/\s+/).length >= 3) {
              return [...this.splitClauses(left), ...this.splitClauses(right)];
            }
          }
        }
        return [text];
      }
      detectType(text) {
        if (text.includes("?")) return "question";
        if (text.includes("!")) return "exclamation";
        return "statement";
      }
      calcImportance(text) {
        let score = 0.4;
        if (/\d/.test(text)) score += 0.2;
        if (/[A-Z]/.test(text)) score += 0.2;
        return Math.min(1, score);
      }
    };
    SSMLGenerator = class {
      generate(annotations, locale, voiceCapability) {
        const lang = locale.startsWith("vi") ? "vi" : "en";
        let ssml = `<speak xmlns="http://www.w3.org/2001/10/synthesis" version="1.0" xml:lang="${lang}">
`;
        for (const ann of annotations) {
          const ratePercent = Math.round((ann.rate - 1) * 100);
          const pitchPercent = Math.round(ann.pitch * 100);
          let tag = `<prosody rate="${ratePercent >= 0 ? "+" : ""}${ratePercent}%" pitch="${pitchPercent >= 0 ? "+" : ""}${pitchPercent}%" volume="${Math.round(ann.volume * 100)}%">`;
          let text = this.escapeXML(ann.text);
          if (ann.emphasis === "strong") {
            tag += `<emphasis level="strong">${text}</emphasis>`;
          } else if (ann.emphasis === "moderate") {
            tag += `<emphasis level="moderate">${text}</emphasis>`;
          } else {
            tag += text;
          }
          tag += `</prosody>`;
          tag += `<break time="${ann.breakDuration}ms"/>`;
          ssml += "  " + tag + "\n";
        }
        ssml += `</speak>`;
        return ssml;
      }
      escapeXML(text) {
        return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
      }
    };
    VoiceManager = class {
      constructor() {
        this.capabilities = /* @__PURE__ */ new Map();
      }
      register(capability) {
        this.capabilities.set(capability.name, capability);
      }
      get(name) {
        return this.capabilities.get(name);
      }
      getBest(locale, options) {
        let best;
        let bestScore = -Infinity;
        for (const cap of this.capabilities.values()) {
          if (!cap.locales.includes(locale)) continue;
          if (options) {
            if (options.supportsProsody && !cap.supportsProsody) continue;
            if (options.supportsIPA && !cap.supportsIPA) continue;
            if (options.supportsStyle && !cap.supportsStyle) continue;
          }
          let score = 0;
          if (cap.supportsProsody) score += 10;
          if (cap.supportsIPA) score += 5;
          if (cap.supportsStyle) score += 5;
          if (options?.prefer === "cost" && cap.costPerChar !== void 0) score -= cap.costPerChar * 100;
          if (options?.prefer === "latency" && cap.latencyMs !== void 0) score -= cap.latencyMs / 10;
          if (score > bestScore) {
            bestScore = score;
            best = cap;
          }
        }
        return best;
      }
    };
    TTSDispatcher = class {
      constructor(services) {
        this.services = services;
      }
      async dispatch(ssml, config, signal) {
        const mode = config.languageMode;
        if (mode === "VN_ONLY") {
          const service = this.services.get(config.voiceVN);
          if (!service) throw new Error(`Voice ${config.voiceVN} not found`);
          return await service.synthesize(ssml, config.voiceVN, config.rate, config.pitch);
        }
        if (mode === "EN_ONLY") {
          const service = this.services.get(config.voiceEN);
          if (!service) throw new Error(`Voice ${config.voiceEN} not found`);
          return await service.synthesize(ssml, config.voiceEN, config.rate, config.pitch);
        }
        const segments = this.extractLanguageSegments(ssml);
        const chunkPromises = segments.map(async (seg) => {
          const voice = seg.lang === "vi" ? config.voiceVN : config.voiceEN;
          const service = this.services.get(voice);
          if (!service) throw new Error(`Voice ${voice} not found`);
          const speak = `<speak xml:lang="${seg.lang === "vi" ? "vi" : "en"}">${seg.text}</speak>`;
          return await service.synthesize(speak, voice, config.rate, config.pitch);
        });
        const chunks = await Promise.all(chunkPromises);
        return this.mergeChunks(chunks, 0.3);
      }
      extractLanguageSegments(ssml) {
        const segments = [];
        let remaining = ssml;
        while (remaining.length > 0) {
          const enIdx = remaining.indexOf("[EN]");
          const viIdx = remaining.indexOf("[VI]");
          if (enIdx === -1 && viIdx === -1) break;
          if (enIdx !== -1 && (viIdx === -1 || enIdx < viIdx)) {
            const endIdx = remaining.indexOf("[/EN]", enIdx);
            if (endIdx === -1) break;
            const content = remaining.substring(enIdx + 4, endIdx).trim();
            segments.push({ lang: "en", text: content });
            remaining = remaining.substring(endIdx + 5);
          } else {
            const endIdx = remaining.indexOf("[/VI]", viIdx);
            if (endIdx === -1) break;
            const content = remaining.substring(viIdx + 4, endIdx).trim();
            segments.push({ lang: "vi", text: content });
            remaining = remaining.substring(endIdx + 5);
          }
        }
        if (segments.length === 0) {
          segments.push({ lang: "vi", text: ssml });
        }
        return segments;
      }
      mergeChunks(chunks, crossfadeSec) {
        if (chunks.length === 0) throw new Error("No chunks");
        if (chunks.length === 1) return chunks[0];
        const targetSR = chunks[0].sampleRate;
        const targetCh = chunks[0].channels;
        const resampled = chunks.map((c) => this.resample(c, targetSR, targetCh));
        let totalDuration = 0;
        for (const c of resampled) totalDuration += c.duration;
        totalDuration -= crossfadeSec * (resampled.length - 1);
        const totalSamples = Math.ceil(totalDuration * targetSR);
        const merged = new Float32Array(totalSamples * targetCh);
        let writePos = 0;
        for (let i = 0; i < resampled.length; i++) {
          const chunk = resampled[i];
          const samples = chunk.data.length / targetCh;
          if (i > 0) {
            const fadeSamples = Math.min(crossfadeSec * targetSR, samples);
            const prevSamples = Math.min(fadeSamples, writePos);
            const prevStart = writePos - prevSamples;
            for (let s = 0; s < prevSamples; s++) {
              const factor = s / prevSamples;
              const gain = Math.sin(factor * Math.PI / 2);
              const prevGain = Math.cos(factor * Math.PI / 2);
              for (let ch = 0; ch < targetCh; ch++) {
                const idx = (prevStart + s) * targetCh + ch;
                merged[idx] = merged[idx] * prevGain + chunk.data[s * targetCh + ch] * gain;
              }
            }
            const remainingSamples = samples - prevSamples;
            if (remainingSamples > 0) {
              const start = writePos;
              for (let s = prevSamples; s < samples; s++) {
                const destIdx = (start + (s - prevSamples)) * targetCh;
                const srcIdx = s * targetCh;
                merged.set(chunk.data.subarray(srcIdx, srcIdx + targetCh), destIdx);
              }
              writePos += remainingSamples;
            }
          } else {
            const copyLen = Math.min(samples * targetCh, merged.length);
            merged.set(chunk.data.subarray(0, copyLen), 0);
            writePos = Math.min(samples, totalSamples);
          }
        }
        const finalData = merged.subarray(0, writePos * targetCh);
        return { data: finalData, sampleRate: targetSR, channels: targetCh, duration: finalData.length / (targetSR * targetCh) };
      }
      resample(chunk, targetSR, targetCh) {
        if (chunk.sampleRate === targetSR && chunk.channels === targetCh) return chunk;
        const ratio = chunk.sampleRate / targetSR;
        const newLen = Math.floor(chunk.data.length / ratio / chunk.channels) * targetCh;
        const newData = new Float32Array(newLen);
        for (let i = 0; i < newLen / targetCh; i++) {
          const srcIdx = Math.floor(i * ratio) * chunk.channels;
          for (let ch = 0; ch < targetCh; ch++) {
            const srcCh = Math.min(ch, chunk.channels - 1);
            newData[i * targetCh + ch] = chunk.data[srcIdx + srcCh] || 0;
          }
        }
        return { data: newData, sampleRate: targetSR, channels: targetCh, duration: newData.length / (targetSR * targetCh) };
      }
    };
    AudioProcessor = class {
      process(chunk) {
        const data = new Float32Array(chunk.data);
        const lufs = this.calcLUFS(data);
        const targetLUFS = -16;
        const gain = Math.pow(10, (targetLUFS - lufs) / 20);
        let processed = new Float32Array(data.length);
        for (let i = 0; i < data.length; i++) {
          processed[i] = data[i] * Math.min(gain, 2);
        }
        processed = this.compress(processed, 0.5, 4, 5, 50, chunk.sampleRate);
        processed = this.limit(processed, 0.9);
        return { ...chunk, data: processed };
      }
      calcLUFS(data) {
        let sum = 0;
        for (const v of data) sum += v * v;
        const rms = Math.sqrt(sum / data.length);
        return 20 * Math.log10(rms);
      }
      compress(data, threshold, ratio, attackMs, releaseMs, sampleRate) {
        const attack = 1 - Math.exp(-1 / (attackMs * sampleRate / 1e3));
        const release = 1 - Math.exp(-1 / (releaseMs * sampleRate / 1e3));
        let gain = 1;
        const result = new Float32Array(data.length);
        for (let i = 0; i < data.length; i++) {
          const abs = Math.abs(data[i]);
          const targetGain = abs > threshold ? Math.pow(threshold / abs, 1 / ratio) : 1;
          gain = gain + (targetGain - gain) * (targetGain < gain ? attack : release);
          result[i] = data[i] * gain;
        }
        return result;
      }
      limit(data, maxAmplitude) {
        const result = new Float32Array(data.length);
        for (let i = 0; i < data.length; i++) {
          if (data[i] > maxAmplitude) result[i] = maxAmplitude;
          else if (data[i] < -maxAmplitude) result[i] = -maxAmplitude;
          else result[i] = data[i];
        }
        return result;
      }
    };
    Scorer = class {
      score(script, prosody, audio) {
        const pronunciation = this.scorePronunciation(script);
        const prosodyScore = this.scoreProsody(prosody);
        const readability = this.scoreReadability(script);
        const naturalness = this.scoreNaturalness(script, prosody);
        const overall = (pronunciation + prosodyScore + readability + naturalness) / 4;
        const suggestions = [];
        if (pronunciation < 80) suggestions.push("Improve pronunciation for some words");
        if (prosodyScore < 80) suggestions.push("Vary rate and pitch more");
        if (readability < 80) suggestions.push("Shorten sentences");
        if (naturalness < 80) suggestions.push("Add more pauses");
        return { overall, pronunciation, prosody: prosodyScore, readability, naturalness, suggestions };
      }
      scorePronunciation(text) {
        const abbrev = (text.match(/[A-Z]{2,}/g) || []).length;
        return Math.max(0, 100 - abbrev * 3);
      }
      scoreProsody(prosody) {
        if (prosody.length === 0) return 70;
        let score = 70;
        const rates = prosody.map((p) => p.rate);
        const avg = rates.reduce((a, b) => a + b, 0) / rates.length;
        const variance = rates.reduce((a, b) => a + (b - avg) * (b - avg), 0) / rates.length;
        if (variance > 0.05) score += 15;
        if (prosody.some((p) => p.emphasis !== "none")) score += 10;
        return Math.min(100, score);
      }
      scoreReadability(text) {
        const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
        if (sentences.length === 0) return 70;
        const avgWords = sentences.reduce((a, s) => a + s.split(/\s+/).length, 0) / sentences.length;
        if (avgWords <= 15) return 90;
        if (avgWords <= 25) return 70;
        return 50;
      }
      scoreNaturalness(text, prosody) {
        let score = 70;
        const breaks = prosody.filter((p) => p.breakDuration > 300).length;
        if (breaks > 3) score += 15;
        return Math.min(100, score);
      }
    };
    MemoryCache = class {
      constructor() {
        this.store = /* @__PURE__ */ new Map();
        this.maxSize = 100;
        this.pending = /* @__PURE__ */ new Map();
      }
      async get(key) {
        if (this.pending.has(key)) {
          return this.pending.get(key);
        }
        const entry = this.store.get(key);
        if (!entry) return null;
        if (entry.expiresAt && Date.now() > entry.expiresAt) {
          this.store.delete(key);
          return null;
        }
        entry.lastAccess = Date.now();
        return entry.value;
      }
      async set(key, value, ttl) {
        if (this.store.size >= this.maxSize) {
          let oldest = Infinity;
          let oldestKey = null;
          for (const [k, v] of this.store) {
            if (v.lastAccess < oldest) {
              oldest = v.lastAccess;
              oldestKey = k;
            }
          }
          if (oldestKey) this.store.delete(oldestKey);
        }
        this.store.set(key, {
          value,
          expiresAt: ttl ? Date.now() + ttl * 1e3 : void 0,
          lastAccess: Date.now()
        });
        this.pending.delete(key);
      }
      async invalidate(key) {
        this.store.delete(key);
        this.pending.delete(key);
      }
      // For pending requests, we use a separate method
      async getOrSet(key, factory, ttl) {
        if (this.pending.has(key)) {
          return this.pending.get(key);
        }
        const cached = await this.get(key);
        if (cached !== null) return cached;
        const promise = factory();
        this.pending.set(key, promise);
        try {
          const result = await promise;
          await this.set(key, result, ttl);
          return result;
        } finally {
          this.pending.delete(key);
        }
      }
    };
    ExecutionScheduler = class {
      async schedule(graph, ctx) {
        const adj = {};
        const inDegree = {};
        const nodeMap = {};
        for (const node of graph.nodes) {
          nodeMap[node.id] = node;
          adj[node.id] = [];
          inDegree[node.id] = 0;
          ctx.dagState[node.id] = "pending";
        }
        for (const edge of graph.edges) {
          adj[edge.from].push(edge.to);
          inDegree[edge.to]++;
        }
        const queue = [];
        for (const [id, deg] of Object.entries(inDegree)) {
          if (deg === 0) queue.push(id);
        }
        queue.sort((a, b) => (nodeMap[b].priority || 0) - (nodeMap[a].priority || 0));
        const completed = /* @__PURE__ */ new Set();
        const running = /* @__PURE__ */ new Set();
        while (queue.length > 0 || running.size > 0) {
          const batch = queue.splice(0);
          const batchPromises = batch.map(async (nodeId) => {
            const node = nodeMap[nodeId];
            if (!node) return;
            if (ctx.abortSignal?.aborted) {
              ctx.dagState[nodeId] = "skipped";
              return;
            }
            if (node.condition && !node.condition(ctx)) {
              ctx.dagState[nodeId] = "skipped";
              completed.add(nodeId);
              return;
            }
            for (const dep of node.dependencies) {
              if (ctx.dagState[dep] === "failed") {
                ctx.dagState[nodeId] = "skipped";
                completed.add(nodeId);
                return;
              }
            }
            ctx.dagState[nodeId] = "running";
            running.add(nodeId);
            let attempt = 0;
            let success = false;
            while (attempt <= node.retryPolicy.maxRetries && !success) {
              try {
                await Promise.race([
                  node.execute(ctx),
                  new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), node.timeout))
                ]);
                success = true;
                ctx.dagState[nodeId] = "success";
                completed.add(nodeId);
              } catch (e) {
                attempt++;
                ctx.errors.push(e);
                if (attempt > node.retryPolicy.maxRetries) {
                  ctx.dagState[nodeId] = "failed";
                  if (node.rollback) await node.rollback(ctx);
                } else {
                  await new Promise((resolve) => setTimeout(resolve, node.retryPolicy.backoffMs * attempt));
                }
              }
            }
            running.delete(nodeId);
            for (const next of adj[nodeId] || []) {
              if (ctx.dagState[next] === "failed" || ctx.dagState[next] === "skipped") continue;
              inDegree[next]--;
              if (inDegree[next] === 0) {
                queue.push(next);
              }
            }
            queue.sort((a, b) => (nodeMap[b].priority || 0) - (nodeMap[a].priority || 0));
          });
          await Promise.allSettled(batchPromises);
        }
        for (const node of graph.nodes) {
          if (!completed.has(node.id) && ctx.dagState[node.id] !== "failed" && ctx.dagState[node.id] !== "skipped") {
            ctx.dagState[node.id] = "failed";
            ctx.errors.push(new Error(`Node ${node.id} not completed`));
          }
        }
      }
    };
    CommuteCastEngine = class {
      constructor(deps) {
        this.tokenizer = new ProductionTokenizer();
        this.normalizer = new Normalizer();
        this.dictionary = new PronunciationDictionary(deps.dictionaryEntries || []);
        this.ruleEngine = new RuleEngine(deps.rules || []);
        this.entityResolver = new EntityResolver(this.dictionary);
        this.aiService = new UnifiedAIService(deps.ai);
        this.breathPlanner = new BreathPlanner();
        this.prosodyPlanner = new ProsodyPlanner();
        this.ssmlGenerator = new SSMLGenerator();
        this.ttsDispatcher = new TTSDispatcher(deps.ttsServices);
        this.audioProcessor = new AudioProcessor();
        this.scorer = new Scorer();
        this.cache = deps.cache || new MemoryCache();
        this.scheduler = new ExecutionScheduler();
        this.eventBus = deps.eventBus || new SimpleEventBus();
        this.metrics = deps.metrics || new ConsoleMetrics();
        this.voiceManager = new VoiceManager();
        for (const cap of deps.voiceCapabilities) {
          this.voiceManager.register(cap);
        }
      }
      async process(text, config, signal) {
        const ctx = {
          rawText: text,
          config,
          cacheHits: 0,
          cacheMisses: 0,
          metrics: this.metrics,
          metadata: { startTime: Date.now(), locale: config.locale || "vi-VN", version: "2.0.0" },
          errors: [],
          warnings: [],
          rewriteAttempts: 0,
          abortSignal: signal,
          dagState: {}
        };
        const cacheKey = this.buildCacheKey(text, config);
        const cached = await this.cache.get(cacheKey);
        if (cached) {
          ctx.cacheHits++;
          this.eventBus.publish({ type: "cache.hit" /* CACHE_HIT */, payload: cacheKey, timestamp: Date.now(), source: "engine" });
          return cached;
        }
        ctx.cacheMisses++;
        const graph = this.buildGraph();
        await this.scheduler.schedule(graph, ctx);
        const result = {
          script: ctx.aiResult?.rewritten || text,
          ssml: ctx.ssml,
          audio: ctx.audio,
          duration: ctx.audio?.duration || 0,
          emotion: ctx.aiResult?.emotion || { primary: "neutral" /* NEUTRAL */, secondary: [], energy: 0.5, urgency: 0.3, sentiment: 0, confidence: 0.5 },
          topic: ctx.aiResult?.topic || "general" /* GENERAL */,
          score: ctx.score
        };
        await this.cache.set(cacheKey, result, 3600);
        this.eventBus.publish({ type: "audio.processed" /* AUDIO_PROCESSED */, payload: result, timestamp: Date.now(), source: "engine" });
        return result;
      }
      buildGraph() {
        const nodes = [
          {
            id: "tokenizer",
            name: "Tokenizer",
            module: "tokenizer",
            dependencies: [],
            priority: 1,
            timeout: 5e3,
            retryPolicy: { maxRetries: 1, backoffMs: 100 },
            execute: async (ctx) => {
              ctx.tokens = this.tokenizer.tokenize(ctx.rawText);
              this.eventBus.publish({ type: "tokenizer.finished" /* TOKENIZER_FINISHED */, payload: ctx.tokens, timestamp: Date.now(), source: "tokenizer" });
            }
          },
          {
            id: "normalizer",
            name: "Normalizer",
            module: "normalizer",
            dependencies: ["tokenizer"],
            priority: 2,
            timeout: 5e3,
            retryPolicy: { maxRetries: 1, backoffMs: 100 },
            execute: async (ctx) => {
              const locale = ctx.config.locale || "vi-VN";
              ctx.normalizedTokens = this.normalizer.normalize(ctx.tokens, locale);
              this.eventBus.publish({ type: "normalizer.finished" /* NORMALIZER_FINISHED */, payload: ctx.normalizedTokens, timestamp: Date.now(), source: "normalizer" });
            }
          },
          {
            id: "rule-engine",
            name: "RuleEngine",
            module: "rule-engine",
            dependencies: ["normalizer"],
            priority: 3,
            timeout: 3e3,
            retryPolicy: { maxRetries: 1, backoffMs: 100 },
            execute: async (ctx) => {
              ctx.ruledTokens = this.ruleEngine.applyTokens(ctx.normalizedTokens);
              this.eventBus.publish({ type: "rule-engine.finished" /* RULE_ENGINE_FINISHED */, payload: ctx.ruledTokens, timestamp: Date.now(), source: "rule-engine" });
            }
          },
          {
            id: "entity-resolver",
            name: "EntityResolver",
            module: "entity",
            dependencies: ["rule-engine"],
            priority: 4,
            timeout: 3e3,
            retryPolicy: { maxRetries: 1, backoffMs: 100 },
            execute: async (ctx) => {
              const locale = ctx.config.locale || "vi-VN";
              ctx.entities = this.entityResolver.resolve(ctx.ruledTokens, locale);
              this.eventBus.publish({ type: "entity-resolver.finished" /* ENTITY_RESOLVER_FINISHED */, payload: ctx.entities, timestamp: Date.now(), source: "entity" });
            }
          },
          {
            id: "ai-service",
            name: "AIService",
            module: "ai",
            dependencies: ["rule-engine"],
            priority: 5,
            timeout: 15e3,
            retryPolicy: { maxRetries: 2, backoffMs: 500 },
            execute: async (ctx) => {
              const text = ctx.ruledTokens.map((t) => t.value).join("");
              ctx.aiResult = await this.aiService.process(text, ctx.config, ctx.abortSignal);
              this.eventBus.publish({ type: "ai.finished" /* AI_FINISHED */, payload: ctx.aiResult, timestamp: Date.now(), source: "ai" });
            }
          },
          {
            id: "prosody",
            name: "ProsodyPlanner",
            module: "prosody",
            dependencies: ["ai-service"],
            priority: 7,
            timeout: 5e3,
            retryPolicy: { maxRetries: 1, backoffMs: 100 },
            execute: async (ctx) => {
              const script = ctx.aiResult.rewritten;
              const sentences = script.split(/[.!?]+/).filter((s) => s.trim().length > 0);
              const breathGroups = this.breathPlanner.plan(sentences);
              ctx.breathGroups = breathGroups;
              const style = ctx.config.style;
              const styleConfig = this.getStyleConfig(style);
              ctx.prosodyAnnotations = this.prosodyPlanner.plan(breathGroups, ctx.aiResult.emotion, styleConfig);
              this.eventBus.publish({ type: "prosody.finished" /* PROSODY_FINISHED */, payload: ctx.prosodyAnnotations, timestamp: Date.now(), source: "prosody" });
            }
          },
          {
            id: "ssml",
            name: "SSMLGenerator",
            module: "ssml",
            dependencies: ["prosody"],
            priority: 8,
            timeout: 3e3,
            retryPolicy: { maxRetries: 1, backoffMs: 100 },
            execute: async (ctx) => {
              const locale = ctx.config.locale || "vi-VN";
              const voiceName = ctx.config.voiceVN;
              const cap = this.voiceManager.get(voiceName);
              ctx.ssml = this.ssmlGenerator.generate(ctx.prosodyAnnotations, locale, cap);
              this.eventBus.publish({ type: "ssml.generated" /* SSML_GENERATED */, payload: ctx.ssml, timestamp: Date.now(), source: "ssml" });
            }
          },
          {
            id: "tts",
            name: "TTSDispatcher",
            module: "tts",
            dependencies: ["ssml"],
            priority: 9,
            timeout: 3e4,
            retryPolicy: { maxRetries: 2, backoffMs: 1e3 },
            execute: async (ctx) => {
              ctx.audio = await this.ttsDispatcher.dispatch(ctx.ssml, ctx.config, ctx.abortSignal);
              this.eventBus.publish({ type: "tts.finished" /* TTS_FINISHED */, payload: ctx.audio, timestamp: Date.now(), source: "tts" });
            }
          },
          {
            id: "audio-processor",
            name: "AudioProcessor",
            module: "audio",
            dependencies: ["tts"],
            priority: 10,
            timeout: 1e4,
            retryPolicy: { maxRetries: 1, backoffMs: 100 },
            execute: async (ctx) => {
              if (ctx.audio) {
                ctx.audio = this.audioProcessor.process(ctx.audio);
              }
            }
          },
          {
            id: "scoring",
            name: "Scoring",
            module: "scoring",
            dependencies: ["prosody", "audio-processor"],
            priority: 11,
            timeout: 5e3,
            retryPolicy: { maxRetries: 1, backoffMs: 100 },
            execute: async (ctx) => {
              const script = ctx.aiResult.rewritten;
              const prosody = ctx.prosodyAnnotations || [];
              ctx.score = this.scorer.score(script, prosody, ctx.audio);
              this.eventBus.publish({ type: "scoring.finished" /* SCORING_FINISHED */, payload: ctx.score, timestamp: Date.now(), source: "scoring" });
            }
          }
        ];
        const edges = [
          { from: "tokenizer", to: "normalizer" },
          { from: "normalizer", to: "rule-engine" },
          { from: "rule-engine", to: "entity-resolver" },
          { from: "rule-engine", to: "ai-service" },
          { from: "ai-service", to: "prosody" },
          { from: "prosody", to: "ssml" },
          { from: "ssml", to: "tts" },
          { from: "tts", to: "audio-processor" },
          { from: "prosody", to: "scoring" },
          { from: "audio-processor", to: "scoring" }
        ];
        return { nodes, edges, startNode: "tokenizer", endNode: "scoring" };
      }
      getStyleConfig(style) {
        const styles = {
          ["bbc" /* BBC */]: { rate: { base: 0.95 }, pitch: { base: 0 }, pause: { default: 300, period: 500, question: 400, exclamation: 250, afterTitle: 600 }, energyLevel: 0.5 },
          ["vov" /* VOV */]: { rate: { base: 1 }, pitch: { base: 0 }, pause: { default: 350, period: 550, question: 450, exclamation: 300, afterTitle: 700 }, energyLevel: 0.6 },
          ["npr" /* NPR */]: { rate: { base: 0.9 }, pitch: { base: 0.05 }, pause: { default: 400, period: 600, question: 500, exclamation: 350, afterTitle: 800 }, energyLevel: 0.4 },
          ["morning" /* MORNING */]: { rate: { base: 1.1 }, pitch: { base: 0.1 }, pause: { default: 250, period: 400, question: 300, exclamation: 200, afterTitle: 500 }, energyLevel: 0.8 },
          ["breaking" /* BREAKING */]: { rate: { base: 1.2 }, pitch: { base: 0.15 }, pause: { default: 200, period: 300, question: 250, exclamation: 150, afterTitle: 400 }, energyLevel: 0.9 },
          ["podcast" /* PODCAST */]: { rate: { base: 0.85 }, pitch: { base: 0 }, pause: { default: 350, period: 500, question: 400, exclamation: 300, afterTitle: 650 }, energyLevel: 0.5 }
        };
        return styles[style];
      }
      buildCacheKey(text, config) {
        const key = `${text}_${config.languageMode}_${config.style}_${config.voiceVN}_${config.voiceEN}_${config.rate}_${config.pitch}_${config.locale || "vi-VN"}`;
        const hash = this.hashString(key);
        return hash;
      }
      hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
          const char = str.charCodeAt(i);
          hash = (hash << 5) - hash + char;
          hash = hash & hash;
        }
        return "h" + Math.abs(hash).toString(36);
      }
    };
    SimpleEventBus = class {
      constructor() {
        this.handlers = /* @__PURE__ */ new Map();
        this.allHandlers = [];
      }
      publish(event) {
        const handlers = this.handlers.get(event.type) || [];
        const all = this.allHandlers;
        const payload = event;
        queueMicrotask(() => {
          for (const h of handlers) h(payload);
          for (const h of all) h(payload);
        });
      }
      subscribe(type, handler) {
        if (!this.handlers.has(type)) this.handlers.set(type, []);
        this.handlers.get(type).push(handler);
        return () => {
          const list = this.handlers.get(type);
          const idx = list.indexOf(handler);
          if (idx !== -1) list.splice(idx, 1);
        };
      }
      subscribeAll(handler) {
        this.allHandlers.push(handler);
        return () => {
          const idx = this.allHandlers.indexOf(handler);
          if (idx !== -1) this.allHandlers.splice(idx, 1);
        };
      }
    };
    ConsoleMetrics = class {
      increment(name, tags) {
        console.log(`[Metric] ${name}: +1`, tags || "");
      }
      set(name, value, tags) {
        console.log(`[Metric] ${name}: ${value}`, tags || "");
      }
      observe(name, value, tags) {
        console.log(`[Metric] ${name}: ${value}ms`, tags || "");
      }
      startTimer(name) {
        const start = Date.now();
        return {
          end: () => {
            const duration = Date.now() - start;
            console.log(`[Metric] ${name}: ${duration}ms`);
          }
        };
      }
    };
  }
});

// server.ts
var server_exports = {};
__export(server_exports, {
  app: () => app2
});
module.exports = __toCommonJS(server_exports);
var import_express6 = __toESM(require("express"), 1);
var import_path5 = __toESM(require("path"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
var import_cors = __toESM(require("cors"), 1);
var import_helmet = __toESM(require("helmet"), 1);
var import_express_rate_limit = require("express-rate-limit");
var import_fs5 = __toESM(require("fs"), 1);
var import_crypto2 = __toESM(require("crypto"), 1);
var import_http = __toESM(require("http"), 1);
var import_ws2 = require("ws");
var import_genai3 = require("@google/genai");
var import_uuid3 = require("uuid");

// src/server/routes/podcast.routes.ts
var import_express = __toESM(require("express"), 1);
var import_path2 = __toESM(require("path"), 1);
var import_fs2 = __toESM(require("fs"), 1);
var import_uuid = require("uuid");
var xml2js = __toESM(require("xml2js"), 1);

// src/server/shared.ts
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_storage = require("@google-cloud/storage");
var import_supabase_js = require("@supabase/supabase-js");
var import_genai = require("@google/genai");
var LOCAL_AUDIO_DIR = import_path.default.join(process.cwd(), "local_podcasts");
if (!import_fs.default.existsSync(LOCAL_AUDIO_DIR)) {
  import_fs.default.mkdirSync(LOCAL_AUDIO_DIR, { recursive: true });
}
function getGcsClient() {
  const projectId = process.env.GCS_PROJECT_ID;
  const clientEmail = process.env.GCS_CLIENT_EMAIL;
  const privateKey = process.env.GCS_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (!projectId || !clientEmail || !privateKey) {
    return null;
  }
  try {
    return new import_storage.Storage({
      projectId,
      credentials: {
        client_email: clientEmail,
        private_key: privateKey
      }
    });
  } catch (err) {
    console.error("GCS Client init error:", err);
    return null;
  }
}
function getSupabaseClient() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) return null;
  return (0, import_supabase_js.createClient)(supabaseUrl, supabaseKey);
}
function encodeWavHeaderNode(pcmBuffer, sampleRate = 24e3) {
  const headerBuffer = Buffer.alloc(44);
  headerBuffer.write("RIFF", 0);
  headerBuffer.writeUInt32LE(36 + pcmBuffer.length, 4);
  headerBuffer.write("WAVE", 8);
  headerBuffer.write("fmt ", 12);
  headerBuffer.writeUInt32LE(16, 16);
  headerBuffer.writeUInt16LE(1, 20);
  headerBuffer.writeUInt16LE(1, 22);
  headerBuffer.writeUInt32LE(sampleRate, 24);
  headerBuffer.writeUInt32LE(sampleRate * 1 * 2, 28);
  headerBuffer.writeUInt16LE(2, 32);
  headerBuffer.writeUInt16LE(16, 34);
  headerBuffer.write("data", 36);
  headerBuffer.writeUInt32LE(pcmBuffer.length, 40);
  return Buffer.concat([headerBuffer, pcmBuffer]);
}
var currentKeyIndex = 0;
var keyCooldownMap = /* @__PURE__ */ new Map();
var COOLDOWN_DURATION = 60 * 1e3;
function getKeysList() {
  const keys = [];
  if (process.env.GEMINI_API_KEY) keys.push(process.env.GEMINI_API_KEY.trim());
  for (let i = 2; i <= 6; i++) {
    const key = process.env[`GEMINI_API_KEY${i}`];
    if (key) keys.push(key.trim());
  }
  return keys.filter((k) => k !== "");
}
async function callGeminiWithRotation(apiCall) {
  const keys = getKeysList();
  if (keys.length === 0) {
    throw new Error("No GEMINI_API_KEY is configured. Please set at least GEMINI_API_KEY in Settings -> Secrets.");
  }
  let lastError = null;
  const maxAttempts = keys.length * 2;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const keyIndex = currentKeyIndex % keys.length;
    const currentKey = keys[keyIndex];
    const now = Date.now();
    const cooldownExpiry = keyCooldownMap.get(currentKey) || 0;
    if (now < cooldownExpiry) {
      console.log(`[Gemini Rotation] Key #${keyIndex + 1} on cooldown until ${new Date(cooldownExpiry).toISOString()}. Skipping.`);
      currentKeyIndex = (currentKeyIndex + 1) % keys.length;
      continue;
    }
    const ai = new import_genai.GoogleGenAI({
      apiKey: currentKey,
      httpOptions: { headers: { "User-Agent": "aistudio-build" } }
    });
    try {
      console.log(`[Gemini Rotation] Attempting call using Key Index #${keyIndex + 1} of ${keys.length} (ending ...${currentKey.slice(-4)})`);
      const result = await apiCall(ai);
      keyCooldownMap.delete(currentKey);
      return result;
    } catch (error) {
      lastError = error;
      const errMsg = (error.message || "").toLowerCase();
      const isQuotaLimit = errMsg.includes("resource_exhausted") || errMsg.includes("quota") || errMsg.includes("limit") || errMsg.includes("429") || errMsg.includes("rate limit");
      if (isQuotaLimit && keys.length > 1) {
        const expiry = Date.now() + COOLDOWN_DURATION;
        keyCooldownMap.set(currentKey, expiry);
        console.warn(`[Gemini Rotation] Key #${keyIndex + 1} hit quota. Cooling down for ${COOLDOWN_DURATION / 1e3}s until ${new Date(expiry).toISOString()}`);
        currentKeyIndex = (currentKeyIndex + 1) % keys.length;
        continue;
      } else if (errMsg.includes("api_key_invalid") || errMsg.includes("api key not valid") || errMsg.includes("invalid api key") || errMsg.includes("key is invalid")) {
        const expiry = Date.now() + 3600 * 1e3;
        keyCooldownMap.set(currentKey, expiry);
        console.error(`[Gemini Rotation] Key #${keyIndex + 1} is invalid. Cooling down for 1 hour.`);
        currentKeyIndex = (currentKeyIndex + 1) % keys.length;
        continue;
      } else {
        throw error;
      }
    }
  }
  if (lastError) {
    const errMsg = (lastError.message || "").toLowerCase();
    if (errMsg.includes("resource_exhausted") || errMsg.includes("quota") || errMsg.includes("limit") || errMsg.includes("429")) {
      throw new Error("All Gemini API keys are currently rate-limited. Please wait and try again.");
    }
    throw lastError;
  }
  throw new Error("All configured GEMINI_API_KEY entries exhausted or on cooldown.");
}
function extractErrorMessage(error) {
  if (!error) return "Unknown error";
  let details = "";
  if (error.response && error.response.data) {
    const data = error.response.data;
    if (typeof data === "string") {
      details = data;
    } else if (typeof data === "object") {
      if (data.error) {
        if (typeof data.error === "object") {
          details = data.error.message || JSON.stringify(data.error);
        } else {
          details = String(data.error);
        }
      } else {
        details = JSON.stringify(data);
      }
    }
  }
  const baseMsg = error.message || "";
  let fullMsg = baseMsg;
  if (details) {
    fullMsg += ` (Details: ${details})`;
  }
  if (error.status) {
    fullMsg = `[Status ${error.status}] ${fullMsg}`;
  }
  return fullMsg;
}
function parseGeminiError(error, isVi = true, isTTS = false) {
  const fullMsg = extractErrorMessage(error);
  const lowercaseMsg = fullMsg.toLowerCase();
  if (lowercaseMsg.includes("resource_exhausted") || lowercaseMsg.includes("quota") || lowercaseMsg.includes("limit") || lowercaseMsg.includes("429")) {
    return isVi ? "H\u1EC7 th\u1ED1ng \u0111ang qu\xE1 t\u1EA3i ho\u1EB7c h\u1EBFt h\u1EA1n ng\u1EA1ch (Quota). Vui l\xF2ng th\u1EED l\u1EA1i sau gi\xE2y l\xE1t." : "System is overloaded or quota exhausted. Please try again in a moment.";
  }
  if (lowercaseMsg.includes("api_key_invalid") || lowercaseMsg.includes("key is invalid")) {
    return isVi ? "L\u1ED7i x\xE1c th\u1EF1c: API Key kh\xF4ng h\u1EE3p l\u1EC7 ho\u1EB7c \u0111\xE3 h\u1EBFt h\u1EA1n." : "Authentication error: Invalid or expired API Key.";
  }
  if (lowercaseMsg.includes("safety") || lowercaseMsg.includes("blocked")) {
    return isVi ? "N\u1ED9i dung b\u1ECB ch\u1EB7n b\u1EDFi b\u1ED9 l\u1ECDc an to\xE0n c\u1EE7a AI." : "Content was blocked by AI safety filters.";
  }
  if (isTTS && (lowercaseMsg.includes("timeout") || lowercaseMsg.includes("deadline"))) {
    return isVi ? "Y\xEAu c\u1EA7u t\u1EA1o gi\u1ECDng n\xF3i b\u1ECB qu\xE1 h\u1EA1n. Vui l\xF2ng th\u1EED l\u1EA1i." : "Voice synthesis request timed out. Please try again.";
  }
  return isVi ? `\u0110\xE3 x\u1EA3y ra l\u1ED7i h\u1EC7 th\u1ED1ng: ${fullMsg}` : `A system error occurred: ${fullMsg}`;
}
async function generateWithGroq(systemPrompt, userPrompt, responseFormatJson = false) {
  const gApiKey = process.env.GROQ_API_KEY;
  if (!gApiKey) {
    throw new Error("GROQ_API_KEY is not defined in system environment.");
  }
  const modelName = "llama-3.3-70b-versatile";
  let finalSystemPrompt = systemPrompt;
  if (responseFormatJson) {
    finalSystemPrompt += "\nCRITICAL: Your entire output must be one single valid JSON object strictly matching the requested JSON Schema structure. Do not output any markdown code blocks, surround with triple backticks, or write conversational surrounding wrapper text.";
  }
  const payload = {
    model: modelName,
    messages: [
      { role: "system", content: finalSystemPrompt },
      { role: "user", content: userPrompt }
    ],
    temperature: 0.3
  };
  if (responseFormatJson) {
    payload.response_format = { type: "json_object" };
  }
  let response = await fetchWithTimeout("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${gApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  }, 15e3);
  if (response.status === 429) {
    console.warn(`[Groq] Rate limit hit for ${modelName}. Falling back to llama-3.1-8b-instant...`);
    payload.model = "llama-3.1-8b-instant";
    response = await fetchWithTimeout("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${gApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }, 15e3);
  }
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Groq API returned error status ${response.status}: ${errorText}`);
  }
  const data = await response.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error("Groq API returned empty choices content.");
  }
  return content;
}
function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise(
      (_, reject) => setTimeout(() => reject(new Error(`Operation timed out after ${ms}ms`)), ms)
    )
  ]);
}
async function fetchWithTimeout(url, options = {}, timeoutMs = 8e3) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

// src/server/routes/podcast.routes.ts
var router = import_express.default.Router();
var PODCASTS_JSON_PATH = import_path2.default.join(process.cwd(), "published-podcasts.json");
var cachedEpisodesInMem = null;
var lastCacheSyncTime = 0;
var cachedRssXml = null;
var lastRssXmlTimestamp = 0;
async function loadPublishedEpisodesFromSupabaseAsync() {
  const supabase = getSupabaseClient();
  if (!supabase) return [];
  try {
    let rawData = null;
    let downloadErr = null;
    let loadedFilename = "";
    try {
      const { data, error } = await supabase.storage.from("podcast-audio").list("audio");
      if (!error && data && data.length > 0) {
        const jsonFiles = data.filter((f) => f.name.startsWith("metadata_v_") && f.name.endsWith(".json"));
        if (jsonFiles.length > 0) {
          jsonFiles.sort((a, b) => b.name.localeCompare(a.name));
          const latestFile = jsonFiles[0];
          loadedFilename = `audio/${latestFile.name}`;
          console.log(`[Podcast - Supabase] Found latest versioned metadata file: ${loadedFilename}`);
          const { data: fileData, error: downloadError } = await supabase.storage.from("podcast-audio").download(loadedFilename);
          if (!downloadError && fileData) {
            rawData = fileData;
          } else if (downloadError) {
            downloadErr = downloadError;
          }
        }
      }
    } catch (listErr) {
      console.warn("[Podcast - Supabase] Failed to list or download versioned metadata in audio/:", listErr);
    }
    if (!rawData) {
      console.log("[Podcast - Supabase] Versioned metadata not found. Trying primary static metadata/published-podcasts.json path...");
      try {
        const { data, error } = await supabase.storage.from("podcast-audio").download("metadata/published-podcasts.json");
        if (!error && data) {
          rawData = data;
          loadedFilename = "metadata/published-podcasts.json";
        } else {
          downloadErr = error;
        }
      } catch (err) {
        downloadErr = err;
      }
    }
    if (!rawData) {
      console.log("[Podcast - Supabase] Static primary path failed. Trying fallback static audio/published-podcasts.json path...");
      try {
        const { data, error } = await supabase.storage.from("podcast-audio").download("audio/published-podcasts.json");
        if (!error && data) {
          rawData = data;
          loadedFilename = "audio/published-podcasts.json";
        } else if (error) {
          downloadErr = error;
        }
      } catch (err) {
        downloadErr = err;
      }
    }
    if (rawData) {
      const text = await rawData.text();
      const eps = JSON.parse(text);
      if (Array.isArray(eps)) {
        console.log(`[Podcast - Supabase] Successfully fetched published episodes from Supabase Storage (${loadedFilename}).`);
        try {
          import_fs2.default.writeFileSync(PODCASTS_JSON_PATH, JSON.stringify(eps, null, 2), "utf8");
        } catch (localWriteErr) {
        }
        cachedEpisodesInMem = eps;
        lastCacheSyncTime = Date.now();
        return eps;
      }
    } else {
      console.log("[Podcast - Supabase] Fetch metadata warning (might be first run / bucket empty):", downloadErr?.message || downloadErr);
    }
  } catch (err) {
    console.error("[Podcast - Supabase] Failed to download metadata from Supabase:", err.message || err);
  }
  return [];
}
async function savePublishedEpisodesToSupabaseAsync(episodes) {
  const supabase = getSupabaseClient();
  if (!supabase) return;
  try {
    const jsonStr = JSON.stringify(episodes, null, 2);
    const fileBuffer = Buffer.from(jsonStr, "utf8");
    console.log("[Podcast - Supabase] Syncing metadata to Supabase Cloud Storage...");
    const timestamp = Date.now();
    const newFilename = `audio/metadata_v_${timestamp}.json`;
    console.log(`[Podcast - Supabase] Strategy 1: Uploading brand new versioned metadata: ${newFilename}`);
    let uploadResult = await supabase.storage.from("podcast-audio").upload(newFilename, fileBuffer, {
      contentType: "application/json",
      upsert: false
    });
    if (uploadResult.error) {
      console.warn(`[Podcast - Supabase] Strategy 1 (Versioned Upload) failed: ${uploadResult.error.message}. Trying standard static paths...`);
      uploadResult = await supabase.storage.from("podcast-audio").upload("metadata/published-podcasts.json", fileBuffer, {
        contentType: "application/json",
        upsert: true
      });
      if (uploadResult.error) {
        console.log("[Podcast - Supabase] metadata/ upload with upsert failed. Attempting remove then insert...");
        try {
          await supabase.storage.from("podcast-audio").remove(["metadata/published-podcasts.json"]);
        } catch (re) {
        }
        uploadResult = await supabase.storage.from("podcast-audio").upload("metadata/published-podcasts.json", fileBuffer, {
          contentType: "application/json",
          upsert: false
        });
      }
      if (uploadResult.error) {
        console.warn("[Podcast - Supabase] Primary path metadata/ failed (RLS folder check). Trying audio/ folder fallback...");
        let fallbackResult = await supabase.storage.from("podcast-audio").upload("audio/published-podcasts.json", fileBuffer, {
          contentType: "application/json",
          upsert: true
        });
        if (fallbackResult.error) {
          console.log("[Podcast - Supabase] audio/ fallback upload with upsert failed. Attempting remove then insert...");
          try {
            await supabase.storage.from("podcast-audio").remove(["audio/published-podcasts.json"]);
          } catch (re) {
          }
          fallbackResult = await supabase.storage.from("podcast-audio").upload("audio/published-podcasts.json", fileBuffer, {
            contentType: "application/json",
            upsert: false
          });
        }
        if (fallbackResult.error) {
          console.error("[Podcast - Supabase] All metadata sync strategies failed:", fallbackResult.error.message || fallbackResult.error);
        } else {
          console.log("[Podcast - Supabase] Metadata synchronized to Cloud Storage successfully via fallback path: audio/published-podcasts.json");
        }
      } else {
        console.log("[Podcast - Supabase] Metadata synchronized to Cloud Storage successfully via primary path: metadata/published-podcasts.json");
      }
    } else {
      console.log(`[Podcast - Supabase] Metadata synchronized to Cloud Storage successfully via versioned path: ${newFilename}`);
      try {
        const { data } = await supabase.storage.from("podcast-audio").list("audio");
        if (data) {
          const oldFiles = data.filter((f) => f.name.startsWith("metadata_v_") && f.name.endsWith(".json")).map((f) => `audio/${f.name}`).filter((name) => name !== newFilename);
          if (oldFiles.length > 0) {
            supabase.storage.from("podcast-audio").remove(oldFiles).catch(() => {
            });
          }
        }
      } catch (e) {
      }
    }
  } catch (err) {
    console.error("[Podcast - Supabase] Unexpected error uploading metadata:", err.message || err);
  }
}
async function loadPublishedEpisodes(forceRefresh = false) {
  const cacheAge = Date.now() - lastCacheSyncTime;
  if (cachedEpisodesInMem && cacheAge < 15e3 && !forceRefresh) {
    return cachedEpisodesInMem;
  }
  let localEps = [];
  try {
    if (import_fs2.default.existsSync(PODCASTS_JSON_PATH)) {
      const data = import_fs2.default.readFileSync(PODCASTS_JSON_PATH, "utf8");
      localEps = JSON.parse(data);
    }
  } catch (err) {
  }
  try {
    const cloudEps = await loadPublishedEpisodesFromSupabaseAsync();
    if (cloudEps && cloudEps.length > 0) {
      cachedEpisodesInMem = cloudEps;
      lastCacheSyncTime = Date.now();
      return cloudEps;
    }
  } catch (err) {
  }
  return localEps.length > 0 ? localEps : cachedEpisodesInMem || [];
}
async function savePublishedEpisodes(episodes) {
  cachedEpisodesInMem = episodes;
  lastCacheSyncTime = Date.now();
  cachedRssXml = null;
  try {
    import_fs2.default.writeFileSync(PODCASTS_JSON_PATH, JSON.stringify(episodes, null, 2), "utf8");
  } catch (err) {
    console.error("[Podcast] Failed to write local file:", err);
  }
  await savePublishedEpisodesToSupabaseAsync(episodes);
}
function isMp3Buffer(buffer) {
  if (buffer.length < 3) return false;
  if (buffer[0] === 73 && buffer[1] === 68 && buffer[2] === 51) return true;
  if (buffer[0] === 255 && (buffer[1] & 224) === 224) return true;
  return false;
}
function getMp3Duration(buffer) {
  let offset = 0;
  if (buffer.length >= 10 && buffer[0] === 73 && buffer[1] === 68 && buffer[2] === 51) {
    const size = (buffer[6] & 127) << 21 | (buffer[7] & 127) << 14 | (buffer[8] & 127) << 7 | buffer[9] & 127;
    offset = 10 + size;
    const flags = buffer[5];
    if ((flags & 16) !== 0) offset += 10;
  }
  const bitratesMpeg1L3 = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 0];
  const bitratesMpeg2L3 = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, 0];
  const sampleRatesMpeg1 = [44100, 48e3, 32e3, 0];
  const sampleRatesMpeg2 = [22050, 24e3, 16e3, 0];
  const sampleRatesMpeg25 = [11025, 12e3, 8e3, 0];
  let frameCount = 0;
  let totalSamplesCount = 0;
  let sumSampleRates = 0;
  while (offset < buffer.length - 4) {
    if (buffer[offset] === 255 && (buffer[offset + 1] & 224) === 224) {
      const b1 = buffer[offset + 1];
      const b2 = buffer[offset + 2];
      const versionID = b1 >> 3 & 3;
      const layer = b1 >> 1 & 3;
      if (layer === 1) {
        const bitrateIdx = b2 >> 4 & 15;
        const srIdx = b2 >> 2 & 3;
        const padding = b2 >> 1 & 1;
        let bitrate = 0;
        let sampleRate = 0;
        let samplesPerFrame = 1152;
        if (versionID === 3) {
          bitrate = bitratesMpeg1L3[bitrateIdx] * 1e3;
          sampleRate = sampleRatesMpeg1[srIdx];
        } else if (versionID === 2) {
          bitrate = bitratesMpeg2L3[bitrateIdx] * 1e3;
          sampleRate = sampleRatesMpeg2[srIdx];
          samplesPerFrame = 576;
        } else if (versionID === 0) {
          bitrate = bitratesMpeg2L3[bitrateIdx] * 1e3;
          sampleRate = sampleRatesMpeg25[srIdx];
          samplesPerFrame = 576;
        }
        if (bitrate > 0 && sampleRate > 0) {
          const frameLength = Math.floor(samplesPerFrame / 8 * bitrate / sampleRate) + padding;
          if (frameLength > 0) {
            frameCount++;
            totalSamplesCount += samplesPerFrame;
            sumSampleRates += sampleRate;
            offset += frameLength;
            continue;
          }
        }
      }
    }
    offset++;
  }
  if (frameCount > 0 && totalSamplesCount > 0) {
    const avgSampleRate = sumSampleRates / frameCount;
    return totalSamplesCount / avgSampleRate;
  }
  const remainingSize = buffer.length - offset;
  return Math.max(30, Math.floor(remainingSize / 16e3));
}
async function uploadAudioToSupabase(audioBuffer, fileName, contentType = "audio/mpeg") {
  const supabase = getSupabaseClient();
  if (!supabase) throw new Error("Supabase client not configured or initialized.");
  const fileExt = contentType === "audio/wav" ? "wav" : "mp3";
  const uniqueFileName = `audio/${(0, import_uuid.v4)()}-${fileName}.${fileExt}`;
  console.log(`[Supabase] Uploading audio binary to bucket "podcast-audio" (Type: ${contentType}): ${uniqueFileName}`);
  const { data, error } = await supabase.storage.from("podcast-audio").upload(uniqueFileName, audioBuffer, {
    contentType,
    cacheControl: "3600",
    upsert: false
  });
  if (error) {
    console.error("[Supabase] Upload error detail:", error);
    throw new Error(`Upload failed: ${error.message}`);
  }
  const { data: publicUrlData } = supabase.storage.from("podcast-audio").getPublicUrl(uniqueFileName);
  if (!publicUrlData || !publicUrlData.publicUrl) {
    throw new Error("Failed to capture public URL from Supabase Storage.");
  }
  console.log(`[Supabase] Success! Public url generated: ${publicUrlData.publicUrl}`);
  return publicUrlData.publicUrl;
}
function safeToUTCString(dateStr) {
  if (!dateStr) return (/* @__PURE__ */ new Date()).toUTCString();
  const d = new Date(dateStr);
  if (!isNaN(d.getTime())) return d.toUTCString();
  try {
    const match = dateStr.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})([,\s]+(\d{1,2}):(\d{1,2})(:(\d{1,2}))?)?/);
    if (match) {
      const day = parseInt(match[1], 10);
      const month = parseInt(match[2], 10) - 1;
      const year = parseInt(match[3], 10);
      const hour = match[5] ? parseInt(match[5], 10) : 0;
      const minute = match[6] ? parseInt(match[6], 10) : 0;
      const second = match[8] ? parseInt(match[8], 10) : 0;
      const customDate = new Date(Date.UTC(year, month, day, hour, minute, second));
      if (!isNaN(customDate.getTime())) return customDate.toUTCString();
    }
  } catch (err) {
  }
  return (/* @__PURE__ */ new Date()).toUTCString();
}
router.get("/audio/download/:id", async (req, res) => {
  const { id } = req.params;
  console.log(`[Audio Download] Request received for briefing ID: ${id}`);
  const supabase = getSupabaseClient();
  if (!supabase) {
    console.error("[Audio Download] Supabase client is not configured.");
    return res.status(500).json({ error: "Supabase client not configured" });
  }
  try {
    const { data: briefing, error: fetchError } = await supabase.from("briefings").select("*").eq("id", id).maybeSingle();
    if (fetchError) {
      console.error(`[Audio Download] Database error fetching briefing ${id}:`, fetchError);
      return res.status(500).json({ error: "Failed to fetch briefing from database" });
    }
    if (!briefing) {
      console.warn(`[Audio Download] Briefing with ID ${id} not found.`);
      return res.status(404).json({ error: "Briefing not found" });
    }
    let audioUrl = null;
    const chunks = briefing.audio_chunks || briefing.audioChunks;
    if (chunks && chunks.length > 0) {
      const firstChunk = chunks[0];
      if (firstChunk && firstChunk.startsWith("http")) {
        audioUrl = firstChunk;
      }
    }
    if (!audioUrl && briefing.payload && typeof briefing.payload === "object") {
      const payloadObj = briefing.payload;
      if (payloadObj.audioUrl && payloadObj.audioUrl.startsWith("http")) {
        audioUrl = payloadObj.audioUrl;
      } else if (payloadObj.audioChunks && payloadObj.audioChunks.length > 0 && payloadObj.audioChunks[0].startsWith("http")) {
        audioUrl = payloadObj.audioChunks[0];
      }
    }
    if (!audioUrl) {
      console.warn(`[Audio Download] Briefing ${id} exists, but has no cloud audio URL.`);
      return res.status(404).json({ error: "Audio file not generated or not synchronized to cloud" });
    }
    console.log(`[Audio Download] Serving audio from URL: ${audioUrl}`);
    const title = briefing.payload?.title || `briefing_${id}`;
    const sanitizedTitle = title.toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9_\-\s]/g, "").trim() || "briefing";
    const filename = `${sanitizedTitle.replace(/\s+/g, "_")}.mp3`;
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.setHeader("Content-Type", "audio/mpeg");
    const response = await fetch(audioUrl);
    if (!response.ok) {
      console.error(`[Audio Download] Failed to fetch audio file from storage: ${response.status} ${response.statusText}`);
      return res.redirect(audioUrl);
    }
    const buffer = await response.arrayBuffer();
    return res.send(Buffer.from(buffer));
  } catch (err) {
    console.error(`[Audio Download] Exception error for briefing ${id}:`, err);
    return res.status(500).json({ error: "Internal server error occurred during download processing" });
  }
});
router.get("/local-podcasts/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = import_path2.default.join(LOCAL_AUDIO_DIR, filename);
  if (!import_fs2.default.existsSync(filePath)) {
    return res.status(404).send("Local podcast audio file not found.");
  }
  try {
    const stat = import_fs2.default.statSync(filePath);
    const fileSize = stat.size;
    const range = req.headers.range;
    const contentType = filename.endsWith(".wav") ? "audio/wav" : "audio/mpeg";
    const isDownload = req.query.download === "true";
    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      if (start >= fileSize) {
        res.status(416).set({ "Content-Range": `bytes */${fileSize}` }).send("Requested range not satisfiable\n");
        return;
      }
      const chunksize = end - start + 1;
      const file = import_fs2.default.createReadStream(filePath, { start, end });
      const head = {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunksize,
        "Content-Type": contentType
      };
      if (isDownload) head["Content-Disposition"] = `attachment; filename="${filename}"`;
      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        "Content-Length": fileSize,
        "Content-Type": contentType,
        "Accept-Ranges": "bytes"
      };
      if (isDownload) head["Content-Disposition"] = `attachment; filename="${filename}"`;
      res.writeHead(200, head);
      import_fs2.default.createReadStream(filePath).pipe(res);
    }
  } catch (err) {
    console.error("Error streaming local podcast:", err);
    if (!res.headersSent) res.status(500).send("Internal server error during media stream.");
  }
});
router.get("/podcast/episodes", async (req, res) => {
  try {
    const forceRefresh = req.query.refresh === "true";
    const episodes = await loadPublishedEpisodes(forceRefresh);
    res.json(episodes);
  } catch (err) {
    console.error("Failed to fetch published episodes:", err);
    res.status(500).json({ error: err.message || "Failed to load episodes" });
  }
});
router.post("/podcast/publish", async (req, res) => {
  try {
    const { briefId, briefing } = req.body;
    if (!briefing || !briefing.audioChunks || briefing.audioChunks.length === 0) {
      return res.status(400).json({ error: "No compiled briefing audio chunks provided for publishing." });
    }
    const episodes = await loadPublishedEpisodes(true);
    const existing = episodes.find((ep) => ep.id === briefId);
    if (existing) {
      return res.json({ success: true, audioUrl: existing.audioUrl, message: "This episode is already published!" });
    }
    const rawBuffers = briefing.audioChunks.map((chunk) => Buffer.from(chunk, "base64"));
    const isMp3 = isMp3Buffer(rawBuffers[0] || Buffer.alloc(0));
    const contentType = isMp3 ? "audio/mpeg" : "audio/wav";
    const fileExt = isMp3 ? "mp3" : "wav";
    let rawAudioBuffer;
    if (!isMp3) {
      const silenceBuffer = Buffer.alloc(48e3);
      const segmentsWithSilence = [];
      rawBuffers.forEach((buf, idx) => {
        segmentsWithSilence.push(buf);
        if (idx < rawBuffers.length - 1) {
          segmentsWithSilence.push(silenceBuffer);
        }
      });
      rawAudioBuffer = Buffer.concat(segmentsWithSilence);
    } else {
      rawAudioBuffer = Buffer.concat(rawBuffers);
    }
    let finalAudioBuffer = rawAudioBuffer;
    if (!isMp3) {
      console.log(`[Podcast] Detected raw 16-bit PCM stream. Prepending 44-byte WAV header for 24000Hz playability...`);
      finalAudioBuffer = encodeWavHeaderNode(rawAudioBuffer, 24e3);
    }
    const sanitizedTitle = briefing.payload?.title ? briefing.payload.title.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() : "podcast";
    const uniqueId = (0, import_uuid.v4)();
    const filename = `${uniqueId}_${sanitizedTitle}.${fileExt}`;
    let finalAudioUrl = "";
    let uploadedToSupabase = false;
    let supabaseErrorMsg = "";
    try {
      finalAudioUrl = await uploadAudioToSupabase(finalAudioBuffer, sanitizedTitle, contentType);
      uploadedToSupabase = true;
    } catch (sbErr) {
      supabaseErrorMsg = sbErr.message || String(sbErr);
      console.warn("[Podcast - Supabase] Supabase upload failed, trying GCS fallback:", sbErr.message || sbErr);
    }
    if (!uploadedToSupabase) {
      const gcs = getGcsClient();
      const bucketName = process.env.GCS_BUCKET_NAME;
      if (gcs && bucketName) {
        try {
          console.log(`[Podcast - GCS] Fallback active. Uploading to GCS: ${filename}...`);
          const bucket = gcs.bucket(bucketName);
          const file = bucket.file(`audio/${filename}`);
          await file.save(finalAudioBuffer, { metadata: { contentType } });
          const publicUrlPrefix = process.env.CLOUD_STORAGE_PUBLIC_URL || "https://storage.googleapis.com";
          finalAudioUrl = `${publicUrlPrefix}/${bucketName}/audio/${filename}`;
          console.log(`[Podcast - GCS] Fallback uploaded! Public URL: ${finalAudioUrl}`);
          uploadedToSupabase = true;
        } catch (gcsErr) {
          console.error("[Podcast - GCS] GCS fallback failed as well:", gcsErr);
        }
      }
    }
    if (!finalAudioUrl) {
      console.log(`[Podcast] GCS & Supabase offline. Writing file locally as emergency backup...`);
      const localPath = import_path2.default.join(LOCAL_AUDIO_DIR, filename);
      import_fs2.default.writeFileSync(localPath, finalAudioBuffer);
      const appUrl = process.env.APP_URL || `${req.protocol}://${req.get("host")}`;
      finalAudioUrl = `${appUrl}/api/local-podcasts/${filename}`;
    }
    let calculatedDuration = 120;
    if (isMp3) {
      calculatedDuration = Math.round(getMp3Duration(rawAudioBuffer));
    } else {
      calculatedDuration = Math.round(rawAudioBuffer.length / 48e3);
    }
    if (!calculatedDuration || calculatedDuration < 5) calculatedDuration = 120;
    const newEpisode = {
      id: briefId,
      title: briefing.payload?.title || "B\u1EA3n tin kh\xF4ng t\xEAn",
      description: (briefing.payload?.introduction || "B\u1EA3n tin ph\xE1t thanh CommuteCast").substring(0, 400) + "...",
      pubDate: briefing.timestamp || (/* @__PURE__ */ new Date()).toISOString(),
      audioUrl: finalAudioUrl,
      duration: calculatedDuration
    };
    episodes.unshift(newEpisode);
    await savePublishedEpisodes(episodes);
    cachedEpisodesInMem = episodes;
    lastCacheSyncTime = Date.now();
    cachedRssXml = null;
    lastRssXmlTimestamp = 0;
    console.log("[Podcast] RSS feed cache invalidated after publishing new episode.");
    return res.json({
      success: true,
      audioUrl: finalAudioUrl,
      storageType: uploadedToSupabase ? "supabase" : "local",
      supabaseError: supabaseErrorMsg || void 0,
      message: "Podcast published successfully!"
    });
  } catch (err) {
    console.error("Publish podcast error:", err);
    res.status(500).json({ error: err.message || "Failed to publish podcast episode" });
  }
});
router.delete("/podcast/episodes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const episodes = await loadPublishedEpisodes(true);
    const index = episodes.findIndex((ep) => ep.id === id);
    if (index === -1) {
      return res.status(404).json({ error: "Podcast episode not found." });
    }
    const targetEpisode = episodes[index];
    const urlParts = targetEpisode.audioUrl.split("/");
    const filename = urlParts[urlParts.length - 1];
    if (targetEpisode.audioUrl.includes("/api/local-podcasts/")) {
      const localPath = import_path2.default.join(LOCAL_AUDIO_DIR, filename);
      if (import_fs2.default.existsSync(localPath)) {
        try {
          import_fs2.default.unlinkSync(localPath);
        } catch (fErr) {
          console.error("Error deleting local file:", fErr);
        }
      }
    } else if (targetEpisode.audioUrl.includes("supabase.co") || targetEpisode.audioUrl.includes("podcast-audio")) {
      const supabase = getSupabaseClient();
      if (supabase) {
        try {
          console.log(`[Podcast - Supabase] Attempting file removal from storage bucket: audio/${filename}`);
          let storagePath = `audio/${filename}`;
          if (targetEpisode.audioUrl.includes("/podcast-audio/")) {
            const splitKey = "/podcast-audio/";
            const remaining = targetEpisode.audioUrl.substring(targetEpisode.audioUrl.indexOf(splitKey) + splitKey.length);
            if (remaining) {
              storagePath = decodeURIComponent(remaining);
            }
          }
          const { error } = await supabase.storage.from("podcast-audio").remove([storagePath]);
          if (error) console.warn("[Supabase] Delete warning:", error.message || error);
          else console.log(`[Podcast - Supabase] Successfully removed file from buckets: ${storagePath}`);
        } catch (sbDelErr) {
          console.error("Error deleting file from Supabase storage:", sbDelErr);
        }
      }
    } else {
      const gcs = getGcsClient();
      const bucketName = process.env.GCS_BUCKET_NAME;
      if (gcs && bucketName) {
        try {
          const bucket = gcs.bucket(bucketName);
          const file = bucket.file(`audio/${filename}`);
          const [exists] = await file.exists();
          if (exists) {
            await file.delete();
            console.log(`[Podcast - GCS] Deleted GCS object: audio/${filename}`);
          }
        } catch (gcsDelErr) {
          console.error("Error deleting file from GCS:", gcsDelErr);
        }
      }
    }
    episodes.splice(index, 1);
    await savePublishedEpisodes(episodes);
    cachedRssXml = null;
    lastRssXmlTimestamp = 0;
    console.log(`[Podcast] RSS feed cache invalidated after deleting episode ${id}.`);
    return res.json({ success: true, message: "Episode deleted successfully" });
  } catch (err) {
    console.error("Failed to delete episode:", err);
    res.status(500).json({ error: err.message || "Failed to delete episode" });
  }
});
router.get("/podcast/feed", async (req, res) => {
  try {
    const now = Date.now();
    if (cachedRssXml && now - lastRssXmlTimestamp < 6e4) {
      res.setHeader("Content-Type", "application/xml; charset=utf-8");
      res.setHeader("X-Cache", "HIT");
      return res.send(cachedRssXml);
    }
    const episodes = await loadPublishedEpisodes(true);
    const appUrl = process.env.APP_URL || `${req.protocol}://${req.get("host")}`;
    const recentEpisodes = episodes.slice(0, 100);
    const rssItems = recentEpisodes.map((ep) => {
      return {
        title: [ep.title],
        description: [ep.description],
        pubDate: [safeToUTCString(ep.pubDate)],
        enclosure: { $: { url: ep.audioUrl, length: "0", type: "audio/mpeg" } },
        guid: [ep.audioUrl],
        "itunes:duration": [String(ep.duration)],
        "itunes:image": { $: { href: `${appUrl}/icon-512.jpg` } },
        "itunes:explicit": ["false"]
      };
    });
    const feedObj = {
      rss: {
        $: {
          version: "2.0",
          "xmlns:itunes": "http://www.itunes.com/dtds/podcast-1.0.dtd",
          "xmlns:content": "http://purl.org/rss/1.0/modules/content/"
        },
        channel: {
          title: ["CommuteCast - B\u1EA3n tin ph\xE1t thanh c\xE1 nh\xE2n"],
          description: ["T\u1EA1o v\xE0 nghe b\u1EA3n tin ph\xE1t thanh c\xE1 nh\xE2n h\xF3a, \u0111\u1ED3ng b\u1ED9 h\xF3a l\u1ED9 tr\xECnh th\xF4ng tin th\xF4ng minh m\u1ED7i ng\xE0y."],
          link: [appUrl],
          language: ["vi"],
          copyright: [`\xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} CommuteCast`],
          "itunes:author": ["CommuteCast Anchor"],
          "itunes:summary": ["T\u1EA1o v\xE0 nghe b\u1EA3n tin ph\xE1t thanh c\xE1 nh\xE2n h\xF3a song ng\u1EEF Anh/Vi\u1EC7t \u0111\u01B0\u1EE3c d\u1EC7t t\u1EF1 \u0111\u1ED9ng t\u1EEB tin t\u1EE9c c\u1EE7a b\u1EA1n."],
          "itunes:explicit": ["false"],
          "itunes:image": { $: { href: `${appUrl}/icon-512.jpg` } },
          "itunes:category": { $: { text: "Technology" } },
          item: rssItems
        }
      }
    };
    const builder = new xml2js.Builder({ xmldec: { version: "1.0", encoding: "UTF-8" } });
    let xml = builder.buildObject(feedObj);
    const xmlDeclaration = '<?xml version="1.0" encoding="UTF-8"?>';
    if (xml.startsWith(xmlDeclaration)) {
      xml = xmlDeclaration + '\n<?xml-stylesheet type="text/xsl" href="/rss-style.xsl"?>' + xml.substring(xmlDeclaration.length);
    } else {
      xml = '<?xml-stylesheet type="text/xsl" href="/rss-style.xsl"?>\n' + xml;
    }
    cachedRssXml = xml;
    lastRssXmlTimestamp = now;
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("X-Cache", "MISS");
    return res.send(xml);
  } catch (err) {
    console.error("RSS feed generation failed:", err);
    res.status(500).send("<error>Failed to generate RSS feed</error>");
  }
});
var podcast_routes_default = router;

// src/server/routes/tts.routes.ts
var import_express2 = __toESM(require("express"), 1);
var import_path3 = __toESM(require("path"), 1);
var import_fs3 = __toESM(require("fs"), 1);
var import_crypto = __toESM(require("crypto"), 1);

// node_modules/edge-tts/index.ts
var import_node_buffer = require("node:buffer");
var import_ws = require("ws");
var baseUrl = `speech.platform.bing.com/consumer/speech/synthesize/readaloud`;
var token = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
var webSocketURL = `wss://${baseUrl}/edge/v1?TrustedClientToken=${token}`;
var voiceListUrl = `https://${baseUrl}/voices/list?trustedclienttoken=${token}`;
function uuid() {
  return crypto.randomUUID().replaceAll("-", "");
}
function tts(text, options = {}) {
  const { voice = "en-GB-SoniaNeural", volume = "+0%", rate = "+0%", pitch = "+0Hz" } = options;
  return new Promise((resolve, reject) => {
    const ws = new import_ws.WebSocket(`${webSocketURL}&ConnectionId=${uuid()}`, {
      host: "speech.platform.bing.com",
      origin: "chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold",
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.66 Safari/537.36 Edg/103.0.1264.44" }
    });
    const audioData = [];
    ws.on("message", (rawData, isBinary) => {
      if (!isBinary) {
        const data2 = rawData.toString("utf8");
        if (data2.includes("turn.end")) {
          resolve(import_node_buffer.Buffer.concat(audioData));
          ws.close();
        }
        return;
      }
      const data = rawData;
      const separator = "Path:audio\r\n";
      const content = data.subarray(data.indexOf(separator) + separator.length);
      audioData.push(content);
    });
    ws.on("error", reject);
    const speechConfig = JSON.stringify({ context: { synthesis: { audio: {
      metadataoptions: { sentenceBoundaryEnabled: false, wordBoundaryEnabled: false },
      outputFormat: "audio-24khz-48kbitrate-mono-mp3"
    } } } });
    const configMessage = `X-Timestamp:${Date()}\r
Content-Type:application/json; charset=utf-8\r
Path:speech.config\r
\r
${speechConfig}`;
    ws.on("open", () => ws.send(configMessage, { compress: true }, (configError) => {
      if (configError)
        reject(configError);
      const ssmlMessage = `X-RequestId:${uuid()}\r
Content-Type:application/ssml+xml\r
X-Timestamp:${Date()}Z\r
Path:ssml\r
\r
<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'><voice name='${voice}'><prosody pitch='${pitch}' rate='${rate}' volume='${volume}'>${text}</prosody></voice></speak>`;
      ws.send(ssmlMessage, { compress: true }, (ssmlError) => {
        if (ssmlError)
          reject(ssmlError);
      });
    }));
  });
}

// src/utils/tts-dictionaries.ts
var COMMON_PROPER_NOUNS = /* @__PURE__ */ new Set([
  "google",
  "openai",
  "gemini",
  "chatgpt",
  "apple",
  "microsoft",
  "tesla",
  "world cup",
  "premier league",
  "nba",
  "fifa",
  "github",
  "facebook",
  "youtube",
  "amazon",
  "netflix",
  "meta",
  "instagram",
  "tiktok",
  "twitter",
  "spacex",
  "android",
  "ios",
  "windows",
  "linux",
  "macbook",
  "iphone",
  "ipad",
  "samsung",
  "intel",
  "nvidia",
  "amd",
  "nasa",
  "manchester united",
  "chelsea",
  "liverpool",
  "arsenal",
  "real madrid",
  "barcelona",
  "bayern munich",
  "champion league"
]);
var ACRONYM_MAP_VI = {
  "AI": "\xE2y ai",
  "CEO": "xi i \xF4",
  "CFO": "xi \xE9p \xF4",
  "CTO": "xi ti \xF4",
  "GDP": "gi \u0111i pi",
  "NASA": "Na-sa",
  "FIFA": "Phi-pha",
  "WHO": "\u0111\xE1p-l\u01B0u \u1EBFt-\xF4",
  "UNESCO": "u-n\xE9t-xc\xF4",
  "ASEAN": "a-x\xEA-an",
  "USD": "u \xE9t \u0111\xEA",
  "ADB": "a \u0111\xEA b\xEA",
  "TP.HCM": "th\xE0nh ph\u1ED1 H\u1ED3 Ch\xED Minh",
  "TP HCM": "th\xE0nh ph\u1ED1 H\u1ED3 Ch\xED Minh",
  "UBND": "\u1EE7y ban nh\xE2n d\xE2n",
  "H\u0110ND": "h\u1ED9i \u0111\u1ED3ng nh\xE2n d\xE2n",
  "TW": "trung \u01B0\u01A1ng",
  "CHXHCNVN": "c\u1ED9ng h\xF2a x\xE3 h\u1ED9i ch\u1EE7 ngh\u0129a vi\u1EC7t nam",
  "KHKT": "khoa h\u1ECDc k\u1EF9 thu\u1EADt",
  "CSGT": "c\u1EA3nh s\xE1t giao th\xF4ng",
  "B\u0110S": "b\u1EA5t \u0111\u1ED9ng s\u1EA3n",
  "TNHH": "tr\xE1ch nhi\u1EC7m h\u1EEFu h\u1EA1n",
  "TAND": "t\xF2a \xE1n nh\xE2n d\xE2n",
  "Q\u0110ND": "qu\xE2n \u0111\u1ED9i nh\xE2n d\xE2n",
  "BCA": "b\u1ED9 c\xF4ng an",
  "BQP": "b\u1ED9 qu\u1ED1c ph\xF2ng",
  "VN\u0110": "vi\u1EC7t nam \u0111\u1ED3ng",
  "FDI": "\xE9p \u0111\xEA y",
  "IPO": "ai pi \xF4"
};

// src/server/routes/tts.routes.ts
var router2 = import_express2.default.Router();
var TTS_CACHE_DIR = import_path3.default.join(process.cwd(), "tts_cache");
var TTS_CACHE_TTL_MS = 5 * 60 * 1e3;
var TTS_CACHE_MAX_FILES = 100;
var TTS_CACHE_MAX_FILE_SIZE_MB = 5;
var ttsCacheEnabled = false;
function initTtsCache() {
  try {
    if (!import_fs3.default.existsSync(TTS_CACHE_DIR)) {
      import_fs3.default.mkdirSync(TTS_CACHE_DIR, { recursive: true });
      console.log(`[TTS Cache] \u2705 Created cache directory: ${TTS_CACHE_DIR}`);
    }
    import_fs3.default.accessSync(TTS_CACHE_DIR, import_fs3.default.constants.W_OK);
    console.log(`[TTS Cache] \u2705 Cache directory is writable.`);
    ttsCacheEnabled = true;
    return true;
  } catch (err) {
    console.error(`[TTS Cache] \u274C Cannot write to cache directory: ${err.message}`);
    ttsCacheEnabled = false;
    return false;
  }
}
initTtsCache();
function getTtsCacheKey(text, voice, tone, emotion = "") {
  const hash = import_crypto.default.createHash("md5").update(`${text}_${voice}_${tone}_${emotion}`).digest("hex");
  return hash;
}
function getCachedTtsFile(key) {
  if (!ttsCacheEnabled) return null;
  const filePath = import_path3.default.join(TTS_CACHE_DIR, `${key}.mp3`);
  if (!import_fs3.default.existsSync(filePath)) return null;
  try {
    const stats = import_fs3.default.statSync(filePath);
    if (Date.now() - stats.mtimeMs > TTS_CACHE_TTL_MS) {
      import_fs3.default.unlinkSync(filePath);
      console.log(`[TTS Cache] \u{1F5D1}\uFE0F Removed expired cache: ${key}`);
      return null;
    }
    if (stats.size > TTS_CACHE_MAX_FILE_SIZE_MB * 1024 * 1024) {
      import_fs3.default.unlinkSync(filePath);
      console.log(`[TTS Cache] \u{1F5D1}\uFE0F Removed oversized cache: ${key} (${(stats.size / 1024 / 1024).toFixed(2)}MB)`);
      return null;
    }
    console.log(`[TTS Cache] \u2705 Cache hit: ${key}`);
    return import_fs3.default.readFileSync(filePath);
  } catch (err) {
    console.warn(`[TTS Cache] \u26A0\uFE0F Error reading cache file: ${err}`);
    return null;
  }
}
function setTtsCacheFile(key, buffer) {
  if (!ttsCacheEnabled) return;
  if (buffer.length > TTS_CACHE_MAX_FILE_SIZE_MB * 1024 * 1024) {
    console.log(`[TTS Cache] \u23ED\uFE0F File too large (${(buffer.length / 1024 / 1024).toFixed(2)}MB), skipping cache.`);
    return;
  }
  try {
    const files = import_fs3.default.readdirSync(TTS_CACHE_DIR);
    if (files.length >= TTS_CACHE_MAX_FILES) {
      const sorted = files.map((f) => ({
        name: f,
        mtime: import_fs3.default.statSync(import_path3.default.join(TTS_CACHE_DIR, f)).mtimeMs
      })).sort((a, b) => a.mtime - b.mtime);
      const toDelete = sorted.slice(0, files.length - TTS_CACHE_MAX_FILES + 1);
      for (const file of toDelete) {
        try {
          import_fs3.default.unlinkSync(import_path3.default.join(TTS_CACHE_DIR, file.name));
        } catch (e) {
        }
      }
      console.log(`[TTS Cache] \u{1F9F9} Cleaned up ${toDelete.length} old cache files.`);
    }
    const filePath = import_path3.default.join(TTS_CACHE_DIR, `${key}.mp3`);
    import_fs3.default.writeFileSync(filePath, buffer);
    console.log(`[TTS Cache] \u{1F4BE} Saved to cache: ${key} (${(buffer.length / 1024).toFixed(1)}KB)`);
  } catch (err) {
    console.warn(`[TTS Cache] \u26A0\uFE0F Error writing cache file: ${err}`);
  }
}
function clearTtsCache() {
  if (!ttsCacheEnabled) return 0;
  try {
    const files = import_fs3.default.readdirSync(TTS_CACHE_DIR);
    let count = 0;
    for (const file of files) {
      try {
        import_fs3.default.unlinkSync(import_path3.default.join(TTS_CACHE_DIR, file));
        count++;
      } catch (e) {
      }
    }
    console.log(`[TTS Cache] \u{1F5D1}\uFE0F Cleared ${count} cache files.`);
    return count;
  } catch (err) {
    console.error(`[TTS Cache] \u274C Error clearing cache: ${err}`);
    return 0;
  }
}
var globalGeminiTtsDisabledUntil = 0;
var BroadcastSpeechEngine = null;
var broadcastEngineLoaded = false;
async function loadBroadcastSpeechEngine() {
  if (broadcastEngineLoaded) return;
  try {
    const module2 = await Promise.resolve().then(() => (init_broadcastSpeechEngine(), broadcastSpeechEngine_exports));
    BroadcastSpeechEngine = module2.BroadcastSpeechEngine;
    console.log("[TTS Route] BroadcastSpeechEngine loaded successfully.");
  } catch (err) {
    console.warn("[TTS Route] Failed to load BroadcastSpeechEngine, using fallback mock:", err.message);
    BroadcastSpeechEngine = {
      process: async (text, voice, tone, ai) => {
        return text;
      }
    };
  }
  broadcastEngineLoaded = true;
}
function cleanMarkdownAndEmojis(str) {
  if (!str) return "";
  return str.replace(/[*_#`~>]/g, "").replace(/\[(.*?)\]\(.*?\)/g, "$1").replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, "");
}
function replaceUrls(str) {
  if (!str) return "";
  return str.replace(/https?:\/\/[^\s]+/g, "li\xEAn k\u1EBFt");
}
function cleanBroadcastArtifacts(text) {
  if (!text) return "";
  return text.replace(/\[Tiêu đề\]:?\s*/gi, "").replace(/\[Nội dung\]:?\s*/gi, "").replace(/\[Kết thúc\]:?\s*/gi, "").replace(/\(Ảnh:.*?\)/gi, "").replace(/\(Video:.*?\)/gi, "");
}
function normalizeAcronyms(text, lang) {
  if (!text) return "";
  let normalized = text;
  if (lang === "vi") {
    for (const [acronym, spoken] of Object.entries(ACRONYM_MAP_VI)) {
      const escaped = acronym.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      const regex = new RegExp(`\\b${escaped}\\b`, "g");
      normalized = normalized.replace(regex, spoken);
    }
    for (const [acronym, spoken] of Object.entries(COMMON_PROPER_NOUNS)) {
      const escaped = acronym.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      const regex = new RegExp(`\\b${escaped}\\b`, "g");
      normalized = normalized.replace(regex, spoken);
    }
  }
  return normalized;
}
function normalizeTextForLanguage(text, lang) {
  if (!text) return "";
  let normalized = text;
  if (lang === "vi") {
    normalized = normalizeAcronyms(normalized, "vi");
    normalized = normalized.replace(/\b100%/g, "m\u1ED9t tr\u0103m ph\u1EA7n tr\u0103m").replace(/\b50%/g, "n\u0103m m\u01B0\u01A1i ph\u1EA7n tr\u0103m").replace(/\b(\d+)\s*%/g, "$1 ph\u1EA7n tr\u0103m").replace(/\b(\d+)\s*km/gi, "$1 ki-l\xF4-m\xE9t").replace(/\b(\d+)\s*m\b/gi, "$1 m\xE9t").replace(/\b(\d+)\s*kg/gi, "$1 ki-l\xF4-gam").replace(/\b(\d+)\s*°C/g, "$1 \u0111\u1ED9 C").replace(/\b(\d+)\s*°F/g, "$1 \u0111\u1ED9 F").replace(/\b(\d+)\s*USD/gi, "$1 \u0111\xF4-la M\u1EF9").replace(/\b(\d+)\s*EUR/gi, "$1 \u01A1-r\xF4").replace(/\b(\d+)\s*VND/gi, "$1 Vi\u1EC7t Nam \u0110\u1ED3ng").replace(/\b(\d+)\s*-\s*(\d+)\b/g, "$1 $2").replace(/\bvs\b/gi, "\u0111\u1ED1i \u0111\u1EA7u v\u1EDBi").replace(/\b&\b/g, "v\xE0").replace(/\b@\b/g, "a c\xF2ng");
    return normalized;
  } else {
    normalized = normalized.replace(/\b(\d+)\s*%/g, "$1 percent").replace(/\b(\d+)\s*km\b/gi, "$1 kilometers").replace(/\b(\d+)\s*m\b/gi, "$1 meters").replace(/\b(\d+)\s*kg\b/gi, "$1 kilograms").replace(/\b(\d+)\s*USD\b/gi, "$1 dollars").replace(/\b(\d+)\s*VND\b/gi, "$1 Vietnamese Dong").replace(/\b&\b/g, "and");
    return normalized;
  }
}
function detectLanguageWithConfidence(text) {
  if (!text || text.trim() === "") return { lang: "vi", confidence: 0 };
  const viChars = /[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/i;
  const enWords = /\b(the|and|is|in|it|you|to|for|with|on|at|by|from|this|that|of|are|was|were|be|been|being|have|has|had|do|does|did|will|would|shall|should|can|could|may|might|must)\b/i;
  let viConfidence = 0;
  let enConfidence = 0;
  if (viChars.test(text)) viConfidence += 0.8;
  const words = text.toLowerCase().split(/\s+/);
  let enWordCount = 0;
  for (const w of words) {
    if (enWords.test(w)) enWordCount++;
  }
  if (enWordCount > 0) enConfidence += 0.5 + enWordCount / words.length * 0.4;
  if (viConfidence >= enConfidence) return { lang: "vi", confidence: Math.max(0.6, viConfidence) };
  else return { lang: "en", confidence: Math.max(0.6, enConfidence) };
}
function detectLanguage(text) {
  return detectLanguageWithConfidence(text).lang;
}
function segmentTextByLanguage(text, languageMode) {
  if (!text || text.trim() === "") return [];
  const cleanedText = replaceUrls(cleanBroadcastArtifacts(cleanMarkdownAndEmojis(text)));
  const paragraphs = cleanedText.split("\n");
  const rawSegments = [];
  let lastDetectedLang = "vi";
  for (const paragraph of paragraphs) {
    const trimmedPara = paragraph.trim();
    if (!trimmedPara) continue;
    let subParts = [];
    if (trimmedPara.includes("/")) {
      const rawParts = trimmedPara.split(/\s*\/\s*/);
      let tempParts = [];
      let currentGroup = "";
      for (const part of rawParts) {
        if (!currentGroup) {
          currentGroup = part;
        } else {
          const lastChar = currentGroup.trim().slice(-1);
          const firstChar = part.trim().charAt(0);
          if (/\d/.test(lastChar) && /\d/.test(firstChar)) {
            currentGroup += "/" + part;
          } else if (currentGroup.length <= 3 && part.length <= 3) {
            currentGroup += "/" + part;
          } else {
            tempParts.push(currentGroup);
            currentGroup = part;
          }
        }
      }
      if (currentGroup) tempParts.push(currentGroup);
      subParts = tempParts.map((p) => p.trim()).filter((p) => p.length > 0);
    } else {
      subParts = [trimmedPara];
    }
    for (const part of subParts) {
      const sentences = part.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter((s) => s.length > 0);
      for (const sentence of sentences) {
        let lang;
        const detection = detectLanguageWithConfidence(sentence);
        if (!/[a-z]/i.test(sentence) || detection.confidence < 0.5) lang = lastDetectedLang;
        else {
          lang = detection.lang;
          lastDetectedLang = lang;
        }
        rawSegments.push({ lang, text: sentence });
      }
    }
  }
  let filteredSegments = rawSegments;
  if (languageMode === "VN_ONLY") filteredSegments = rawSegments.filter((seg) => seg.lang === "vi");
  else if (languageMode === "EN_ONLY") filteredSegments = rawSegments.filter((seg) => seg.lang === "en");
  if (filteredSegments.length === 0 && rawSegments.length > 0) filteredSegments = rawSegments;
  const groupedSegments = [];
  for (const seg of filteredSegments) {
    if (groupedSegments.length === 0) groupedSegments.push({ ...seg });
    else {
      const last = groupedSegments[groupedSegments.length - 1];
      if (last.lang === seg.lang) {
        const needsSpace = last.text.length > 0 && !last.text.endsWith(" ");
        last.text = last.text + (needsSpace ? " " : "") + seg.text;
      } else {
        groupedSegments.push({ ...seg });
      }
    }
  }
  return groupedSegments;
}
function chunkTextForTTS(text, maxChars = 200) {
  if (!text) return [];
  if (text.length <= maxChars) return [text];
  const chunks = [];
  let currentText = text;
  while (currentText.length > 0) {
    if (currentText.length <= maxChars) {
      chunks.push(currentText);
      break;
    }
    let splitPos = currentText.lastIndexOf(". ", maxChars);
    if (splitPos === -1) splitPos = currentText.lastIndexOf("? ", maxChars);
    if (splitPos === -1) splitPos = currentText.lastIndexOf("! ", maxChars);
    if (splitPos === -1) splitPos = currentText.lastIndexOf(", ", maxChars);
    if (splitPos === -1) splitPos = currentText.lastIndexOf(" ", maxChars);
    if (splitPos === -1 || splitPos < maxChars / 2) splitPos = maxChars;
    chunks.push(currentText.substring(0, splitPos).trim());
    currentText = currentText.substring(splitPos).trim();
  }
  return chunks;
}
var EDGE_VOICE_MAP = {
  "vi-HN": "vi-VN-HoaiMyNeural",
  // Female Northern - 2024, chất lượng xuất sắc
  "vi-HCM": "vi-VN-NamMinhNeural",
  // Male Southern - tự nhiên, ấm áp
  "vi": "vi-VN-HoaiMyNeural",
  // Default Vietnamese
  "en-US": "en-US-JennyNeural",
  // Female US - rất tự nhiên
  "en-UK": "en-GB-SoniaNeural",
  // Female UK - RP accent
  "en": "en-US-JennyNeural"
  // Default English
};
async function callEdgeTTSForChunk(chunk, voice, rate) {
  const edgeVoice = EDGE_VOICE_MAP[voice] || voice || "en-US-JennyNeural";
  let pitch = "0%";
  if (voice === "en-US" || voice === "en-UK" || voice === "en" || edgeVoice.startsWith("en-")) {
    pitch = "+5%";
  }
  try {
    const audioBuffer = await tts(chunk, {
      voice: edgeVoice,
      rate,
      pitch
    });
    if (audioBuffer && audioBuffer.length > 0) {
      return audioBuffer.toString("base64");
    }
    throw new Error("Edge TTS returned empty response.");
  } catch (err) {
    if (err.message.includes("403")) {
      throw new Error("EDGE_TTS_UNAVAILABLE");
    }
    throw new Error(`Edge TTS API error: ${err.message || err}`);
  }
}
var VOICE_MAP = {
  alloy: "Aoede",
  echo: "Charon",
  fable: "Fenrir",
  onyx: "Kore",
  nova: "Leda",
  shimmer: "Orus"
};
async function callGeminiTTSForChunk(chunk, voice, tone, emotion) {
  let voiceName = "Kore";
  let systemInstructionText = "";
  if (VOICE_MAP[voice]) {
    voiceName = VOICE_MAP[voice];
    systemInstructionText = `ROLE & STYLE: You are a professional voice talent giving a preview of your voice capabilities...`;
  } else if (voice === "vi-HN" || voice === "vi") {
    voiceName = "Kore";
    systemInstructionText = `ROLE & STYLE: B\u1EA1n l\xE0 m\u1ED9t ph\xE1t thanh vi\xEAn truy\u1EC1n h\xECnh v\xE0 \u0111\xE0i ti\u1EBFng n\xF3i qu\u1ED1c gia k\u1EF3 c\u1EF1u n\xF3i gi\u1ECDng B\u1EAFc (H\xE0 N\u1ED9i)...`;
  } else if (voice === "vi-HCM") {
    voiceName = "Zephyr";
    systemInstructionText = `ROLE & STYLE: B\u1EA1n l\xE0 m\u1ED9t ph\xE1t thanh vi\xEAn truy\u1EC1n h\xECnh mi\u1EC1n Nam c\u1EF1c k\u1EF3 duy\xEAn d\xE1ng v\xE0 chuy\xEAn nghi\u1EC7p...`;
  } else if (voice === "en-UK" || voice === "Puck") {
    voiceName = "Puck";
    systemInstructionText = `ROLE & STYLE: You are a premium, highly professional British radio presenter and news anchor...`;
  } else {
    voiceName = "Zephyr";
    systemInstructionText = `ROLE & STYLE: You are an elite, highly professional American podcast host and premium news anchor...`;
  }
  if (emotion) {
    const isViLang = voice === "vi-HN" || voice === "vi-HCM" || voice === "vi";
    if (emotion === "cheerful") {
      systemInstructionText += isViLang ? `
EMOTION/STYLE: H\xE3y th\u1EC3 hi\u1EC7n phong c\xE1ch VUI T\u01AF\u01A0I...` : `
EMOTION/STYLE: Express a CHEERFUL vibe...`;
    } else if (emotion === "professional") {
      systemInstructionText += isViLang ? `
EMOTION/STYLE: H\xE3y th\u1EC3 hi\u1EC7n phong c\xE1ch CHUY\xCAN NGHI\u1EC6P...` : `
EMOTION/STYLE: Express a PROFESSIONAL vibe...`;
    }
  }
  const response = await callGeminiWithRotation(
    (ai) => ai.models.generateContent({
      model: "gemini-3.1-flash-tts-preview",
      contents: [{ parts: [{ text: chunk }] }],
      config: {
        responseModalities: ["AUDIO"],
        temperature: 0.3,
        speechConfig: {
          voiceConfig: { prebuiltVoiceConfig: { voiceName } }
        }
      }
    })
  );
  const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  if (!base64Audio) throw new Error("No inline audio data found in TTS model response.");
  return base64Audio;
}
async function callGoogleTranslateTTSForChunk(chunk, voice) {
  const lang = voice.split("-")[0];
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(chunk)}&tl=${lang}&client=tw-ob`;
  const res = await fetchWithTimeout(url, {}, 6e3);
  if (!res.ok) throw new Error("Google Translate TTS failed");
  const buffer = await res.arrayBuffer();
  return Buffer.from(buffer).toString("base64");
}
async function synthesizeSingleChunk(chunk, preferredVoice, tone, emotion, preSegmentedLang) {
  const lang = preSegmentedLang || detectLanguage(chunk);
  let voiceToUse = preferredVoice;
  if (lang === "vi") {
    if (!preferredVoice?.startsWith("vi")) {
      voiceToUse = preferredVoice === "Puck" || preferredVoice === "Charon" || preferredVoice === "Fenrir" || preferredVoice === "en-UK" ? "vi-HCM" : "vi-HN";
    }
  } else {
    if (preferredVoice?.startsWith("vi")) {
      voiceToUse = preferredVoice === "vi-HCM" ? "en-UK" : "en-US";
    }
  }
  const now = Date.now();
  let enginesToTry = [];
  if (lang === "vi") {
    enginesToTry = [
      { name: "edge", fn: async () => await callEdgeTTSForChunk(chunk, voiceToUse, tone === "fast" ? "+20%" : tone === "slow" ? "-20%" : "0%") },
      { name: "gemini", fn: async () => {
        if (now < globalGeminiTtsDisabledUntil) throw new Error("Gemini disabled");
        return await callGeminiTTSForChunk(chunk, voiceToUse, tone, emotion);
      } },
      { name: "translate", fn: async () => await callGoogleTranslateTTSForChunk(chunk, voiceToUse) }
    ];
  } else {
    enginesToTry = [
      { name: "gemini", fn: async () => {
        if (now < globalGeminiTtsDisabledUntil) throw new Error("Gemini disabled");
        return await callGeminiTTSForChunk(chunk, voiceToUse, tone, emotion);
      } },
      { name: "edge", fn: async () => await callEdgeTTSForChunk(chunk, voiceToUse, tone === "fast" ? "+20%" : tone === "slow" ? "-20%" : "0%") },
      { name: "translate", fn: async () => await callGoogleTranslateTTSForChunk(chunk, voiceToUse) }
    ];
  }
  let base64Audio = "";
  let success = false;
  for (const engine of enginesToTry) {
    try {
      base64Audio = await withTimeout(engine.fn(), engine.name === "gemini" ? 2e4 : 5e3);
      if (base64Audio) {
        success = true;
        break;
      }
    } catch (err) {
      if (engine.name === "gemini") {
        const errMsg = (err.message || "").toUpperCase();
        if (!errMsg.includes("400") && !errMsg.includes("INVALID_ARGUMENT") && !errMsg.includes("API_KEY_INVALID")) {
          globalGeminiTtsDisabledUntil = Date.now() + 10 * 1e3;
        }
      }
    }
  }
  if (!success || !base64Audio) return Buffer.alloc(48e3, 0);
  return Buffer.from(base64Audio, "base64");
}
router2.get("/tts/cache-status", (req, res) => {
  if (!ttsCacheEnabled) return res.json({ enabled: false, message: "Cache is disabled." });
  try {
    const files = import_fs3.default.readdirSync(TTS_CACHE_DIR);
    let totalSize = 0;
    const fileDetails = files.map((f) => {
      const stats = import_fs3.default.statSync(import_path3.default.join(TTS_CACHE_DIR, f));
      totalSize += stats.size;
      return { name: f, sizeKB: (stats.size / 1024).toFixed(1), ageSeconds: ((Date.now() - stats.mtimeMs) / 1e3).toFixed(0) };
    });
    res.json({ enabled: true, fileCount: files.length, totalSizeMB: (totalSize / 1024 / 1024).toFixed(2), files: fileDetails });
  } catch (err) {
    res.json({ enabled: false, error: err.message });
  }
});
router2.post("/tts/clear-cache", (req, res) => {
  const count = clearTtsCache();
  res.json({ success: true, cleared: count });
});
router2.post("/tts", async (req, res) => {
  const { text, voice, tone, emotion, languageMode } = req.body;
  const isVi = voice?.startsWith("vi") || false;
  try {
    if (!text || text.trim() === "") return res.status(400).json({ error: "No text provided." });
    const voiceToUse = voice || "en-US";
    const toneToUse = tone || "conversational";
    const emotionToUse = emotion || "cheerful";
    const cacheKey = getTtsCacheKey(text, voiceToUse, toneToUse, emotionToUse);
    const cachedAudio = getCachedTtsFile(cacheKey);
    if (cachedAudio) return res.json({ base64Audio: cachedAudio.toString("base64"), engine: "cache", chunksCount: 1, fromCache: true, cacheKey });
    await loadBroadcastSpeechEngine();
    let engineeredText = text;
    if (BroadcastSpeechEngine && typeof BroadcastSpeechEngine.process === "function") {
      try {
        engineeredText = await callGeminiWithRotation(async (ai) => await BroadcastSpeechEngine.process(text, voiceToUse, toneToUse, ai));
      } catch (aiErr) {
        try {
          engineeredText = await BroadcastSpeechEngine.process(text, voiceToUse, toneToUse);
        } catch (e) {
        }
      }
    }
    const mode = languageMode || (voice?.startsWith("vi") ? "VN_ONLY" : "BILINGUAL");
    const segmentedBlocks = segmentTextByLanguage(engineeredText, mode);
    const chunks = [];
    for (const block of segmentedBlocks) {
      const normalizedText = normalizeTextForLanguage(block.text, block.lang);
      const subChunks = chunkTextForTTS(normalizedText, 250);
      for (const sub of subChunks) chunks.push({ text: sub, lang: block.lang });
    }
    if (chunks.length === 0) return res.status(400).json({ error: "No valid chunks." });
    const chunkPromises = chunks.map(async (item) => {
      try {
        return await synthesizeSingleChunk(item.text, voiceToUse, toneToUse, emotionToUse, item.lang);
      } catch (e) {
        return Buffer.alloc(0);
      }
    });
    const audioBuffers = await Promise.all(chunkPromises);
    const validBuffers = audioBuffers.filter((buf) => buf && buf.length > 0);
    if (validBuffers.length === 0) throw new Error("Synthesis failed.");
    const mergedBuffer = Buffer.concat(validBuffers);
    setTtsCacheFile(cacheKey, mergedBuffer);
    const base64Chunks = validBuffers.map((buf) => buf.toString("base64"));
    return res.json({ base64Audio: base64Chunks[0] || "", audioChunks: base64Chunks, engine: "hybrid-smart-tts", chunksCount: base64Chunks.length });
  } catch (error) {
    console.error("[TTS Route] Error:", error);
    return res.status(500).json({ error: parseGeminiError(error, isVi, true) });
  }
});
function wrapAsWavIfRawPcm(buffer) {
  if (buffer.length < 4) return buffer;
  const isWav = buffer[0] === 82 && buffer[1] === 73 && buffer[2] === 70 && buffer[3] === 70;
  const isMp3 = buffer[0] === 73 && buffer[1] === 68 && buffer[2] === 51 || buffer[0] === 255 && (buffer[1] & 224) === 224;
  if (isWav || isMp3) {
    return buffer;
  }
  return encodeWavHeaderNode(buffer, 24e3);
}
router2.post("/test-tts", async (req, res) => {
  const { text, voice, tone } = req.body;
  try {
    const buffer = await synthesizeSingleChunk(text || "Hello test", voice || "en-US", tone || "normal");
    const wavBuffer = wrapAsWavIfRawPcm(buffer);
    res.json({ success: true, size: wavBuffer.length, base64Audio: wavBuffer.toString("base64") });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
router2.get("/music-preview/:type", (req, res) => {
  const { type } = req.params;
  const possiblePaths = [
    import_path3.default.join(process.cwd(), "public", `${type}.mp3`),
    import_path3.default.join(process.cwd(), "public", `${type}.wav`),
    import_path3.default.join(process.cwd(), "public", "music", `${type}.mp3`),
    import_path3.default.join(process.cwd(), "public", "music", `${type}.wav`),
    import_path3.default.join(process.cwd(), "assets", `${type}.mp3`),
    import_path3.default.join(process.cwd(), "assets", `${type}.wav`)
  ];
  for (const p of possiblePaths) {
    if (import_fs3.default.existsSync(p)) {
      return res.sendFile(p);
    }
  }
  res.status(404).json({ success: false, error: "Music preview file not found", message: "S\u1EAFp ra m\u1EAFt" });
});
router2.get("/voices", (req, res) => {
  res.json([
    { id: "vi-HN", name: "Gi\u1ECDng Mi\u1EC1n B\u1EAFc (N\u1EEF - Ho\xE0i My)", lang: "vi" },
    { id: "vi-HCM", name: "Gi\u1ECDng Mi\u1EC1n Nam (Nam - Nam Minh)", lang: "vi" },
    { id: "en-US", name: "English (Jenny - US)", lang: "en" },
    { id: "en-UK", name: "English (Sonia - UK)", lang: "en" }
  ]);
});
router2.post("/tts/preview", async (req, res) => {
  const { voice, lang } = req.body;
  if (!voice) {
    return res.status(400).json({ success: false, error: "Missing voice parameter" });
  }
  const text = lang === "vi" ? "\u0110\xE2y l\xE0 gi\u1ECDng \u0111\u1ECDc th\u1EED nghi\u1EC7m cho b\u1EA3n tin c\u1EE7a b\u1EA1n." : "This is a preview of your news briefing voice.";
  try {
    const rawBuffer = await synthesizeSingleChunk(text, voice, "normal", "cheerful", lang);
    const wavBuffer = wrapAsWavIfRawPcm(rawBuffer);
    return res.json({ success: true, audioBase64: wavBuffer.toString("base64") });
  } catch (err) {
    console.error("[TTS Preview] Error:", err);
    return res.status(500).json({ success: false, error: err.message || "Failed to generate preview" });
  }
});
router2.post("/clear-tts-cache", async (req, res) => {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return res.status(500).json({ success: false, error: "Supabase client not configured" });
  }
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ success: false, error: "No authorization header" });
  }
  try {
    const token2 = authHeader.replace("Bearer ", "");
    const { data: { user }, error } = await supabase.auth.getUser(token2);
    if (error || !user) {
      return res.status(401).json({ success: false, error: "Invalid token" });
    }
    if (import_fs3.default.existsSync(TTS_CACHE_DIR)) {
      const files = import_fs3.default.readdirSync(TTS_CACHE_DIR);
      let deletedCount = 0;
      for (const file of files) {
        if (file.endsWith(".mp3") || file.endsWith(".wav")) {
          try {
            import_fs3.default.unlinkSync(import_path3.default.join(TTS_CACHE_DIR, file));
            deletedCount++;
          } catch (e) {
            console.warn(`[TTS Cache] Failed to delete file ${file}:`, e.message);
          }
        }
      }
      console.log(`[TTS Cache] Cleaned up ${deletedCount} cache files via user-initiated purge.`);
      return res.json({ success: true, message: `Successfully deleted ${deletedCount} cache files` });
    } else {
      return res.json({ success: true, message: "Cache directory does not exist, nothing to clear" });
    }
  } catch (err) {
    console.error("[TTS Cache] Clear cache error:", err);
    return res.status(500).json({ success: false, error: err.message || "Failed to clear TTS cache" });
  }
});
var tts_routes_default = router2;

// src/server/routes/news.routes.ts
var import_express3 = require("express");
var xml2js2 = __toESM(require("xml2js"), 1);

// src/server/firebase.ts
var import_app = require("firebase-admin/app");
var import_firestore = require("firebase-admin/firestore");
var import_fs4 = __toESM(require("fs"), 1);
var import_path4 = __toESM(require("path"), 1);
var db = null;
var app = null;
function getFirestoreInstance() {
  if (!db) {
    try {
      const configPath = import_path4.default.join(process.cwd(), "firebase-applet-config.json");
      if (import_fs4.default.existsSync(configPath)) {
        const config = JSON.parse(import_fs4.default.readFileSync(configPath, "utf8"));
        if ((0, import_app.getApps)().length === 0) {
          let credential;
          const envCreds = process.env.GOOGLE_APPLICATION_CREDENTIALS;
          if (envCreds && envCreds.trim().startsWith("{")) {
            try {
              credential = (0, import_app.cert)(JSON.parse(envCreds));
              console.log("[Firebase Admin] Using credentials from environment variable");
            } catch (err) {
              console.error("[Firebase Admin] Failed to parse GOOGLE_APPLICATION_CREDENTIALS:", err);
            }
          }
          app = (0, import_app.initializeApp)({
            projectId: config.projectId,
            credential
          });
        }
        const databaseId = config.firestoreDatabaseId || "(default)";
        db = (0, import_firestore.getFirestore)(databaseId);
        console.log(`[Firebase Admin] Firestore initialized successfully (database: ${databaseId})`);
      } else {
        console.warn("[Firebase Admin] firebase-applet-config.json not found");
      }
    } catch (err) {
      console.error("[Firebase Admin] Initialization failed:", err);
    }
  }
  return db;
}

// src/server/routes/news.routes.ts
var router3 = (0, import_express3.Router)();
async function getYouTubeCache(category, query) {
  const db2 = getFirestoreInstance();
  if (!db2) return null;
  const cacheId = `yt_${category}_${query || "none"}`.replace(/[/\\?%*:|"<>]/g, "-").slice(0, 100);
  try {
    const doc = await db2.collection("youtube_cache").doc(cacheId).get();
    if (doc.exists) {
      const data = doc.data();
      const twoHoursMs = 2 * 60 * 60 * 1e3;
      if (data && data.updatedAt && Date.now() - data.updatedAt.toMillis() < twoHoursMs) {
        console.log(`[YouTube Backend] Cache HIT for category: ${category}, query: ${query}`);
        return data.videos;
      }
    }
  } catch (err) {
    console.error("[YouTube Backend] Cache retrieval failed:", err);
  }
  return null;
}
async function setYouTubeCache(category, query, videos) {
  const db2 = getFirestoreInstance();
  if (!db2 || !videos || videos.length === 0) return;
  const cacheId = `yt_${category}_${query || "none"}`.replace(/[/\\?%*:|"<>]/g, "-").slice(0, 100);
  try {
    await db2.collection("youtube_cache").doc(cacheId).set({
      category,
      query: query || "",
      videos,
      updatedAt: /* @__PURE__ */ new Date()
    });
    console.log(`[YouTube Backend] Cache SAVED for category: ${category}, query: ${query}`);
  } catch (err) {
    console.error("[YouTube Backend] Cache saving failed:", err);
  }
}
function fallbackRegexParse(xmlText) {
  let feedTitle = "RSS Feed";
  const articles = [];
  try {
    const titleMatch = xmlText.match(/<channel>[\s\S]*?<title>([\s\S]*?)<\/title>/i) || xmlText.match(/<feed>[\s\S]*?<title[^>]*>([\s\S]*?)<\/title>/i);
    if (titleMatch) {
      feedTitle = titleMatch[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/gi, "$1").trim();
    }
    const cleanValue = (val) => {
      if (!val) return "";
      return val.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/gi, "$1").trim();
    };
    const itemMatches = xmlText.match(/<item>[\s\S]*?<\/item>/gi);
    if (itemMatches && itemMatches.length > 0) {
      for (const itemXml of itemMatches) {
        const titleM = itemXml.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
        const linkM = itemXml.match(/<link[^>]*>([\s\S]*?)<\/link>/i);
        const pubDateM = itemXml.match(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/i) || itemXml.match(/<dc:date[^>]*>([\s\S]*?)<\/dc:date>/i);
        const descM = itemXml.match(/<description[^>]*>([\s\S]*?)<\/description>/i) || itemXml.match(/<content:encoded[^>]*>([\s\S]*?)<\/content:encoded>/i);
        if (titleM) {
          articles.push({
            title: cleanValue(titleM[1]),
            link: cleanValue(linkM ? linkM[1] : ""),
            pubDate: cleanValue(pubDateM ? pubDateM[1] : ""),
            description: cleanValue(descM ? descM[1] : "")
          });
        }
      }
    } else {
      const entryMatches = xmlText.match(/<entry>[\s\S]*?<\/entry>/gi);
      if (entryMatches && entryMatches.length > 0) {
        for (const entryXml of entryMatches) {
          const titleM = entryXml.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
          const linkM = entryXml.match(/<link[^>]*href=["']([\s\S]*?)["']/i) || entryXml.match(/<link[^>]*>([\s\S]*?)<\/link>/i);
          const updatedM = entryXml.match(/<updated[^>]*>([\s\S]*?)<\/updated>/i) || entryXml.match(/<published[^>]*>([\s\S]*?)<\/published>/i);
          const summaryM = entryXml.match(/<summary[^>]*>([\s\S]*?)<\/summary>/i) || entryXml.match(/<content[^>]*>([\s\S]*?)<\/content>/i);
          if (titleM) {
            articles.push({
              title: cleanValue(titleM[1]),
              link: cleanValue(linkM ? linkM[1] : ""),
              pubDate: cleanValue(updatedM ? updatedM[1] : ""),
              description: cleanValue(summaryM ? summaryM[1] : "")
            });
          }
        }
      }
    }
  } catch (err) {
    console.error("Error in fallbackRegexParse:", err);
  }
  return { feedTitle, articles };
}
var rssCache = /* @__PURE__ */ new Map();
function scrapeHtmlArticles(htmlText, baseUrl2) {
  const articles = [];
  const linkSeen = /* @__PURE__ */ new Set();
  const titleSeen = /* @__PURE__ */ new Set();
  const aTagRegex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  let domain = baseUrl2;
  try {
    const urlObj = new URL(baseUrl2);
    domain = urlObj.origin;
  } catch (e) {
  }
  const stripHtmlHelper = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  };
  while ((match = aTagRegex.exec(htmlText)) !== null) {
    let link = match[1].trim();
    let rawText = match[2];
    if (!link || link.startsWith("javascript:") || link.startsWith("#") || link.includes("mailto:")) {
      continue;
    }
    if (link.startsWith("/")) {
      link = domain + link;
    } else if (!link.startsWith("http")) {
      link = domain + "/" + link;
    }
    const isAsset = /\.(png|jpg|jpeg|gif|css|js|svg|webp|mp3|mp4|pdf)/i.test(link);
    const isCategoryOrNav = /\/(category|tag|author|page|tim-kiem|search|login|register|user|contact|about|lien-he|gioi-thieu)\/?/i.test(link);
    const isHtmlArticle = link.includes(".html") || /\/[a-z0-9-]+-\d+$/i.test(link);
    if (isAsset || isCategoryOrNav || !isHtmlArticle) {
      continue;
    }
    let title = stripHtmlHelper(rawText);
    if (title.length < 15) {
      const aTagFull = match[0];
      const titleAttrMatch = aTagFull.match(/title=["']([^"']+)["']/i);
      if (titleAttrMatch) {
        title = stripHtmlHelper(titleAttrMatch[1]);
      }
    }
    if (title.length < 15 || title.length > 150) {
      continue;
    }
    const lowerTitle = title.toLowerCase();
    const isGenericText = ["xem th\xEAm", "\u0111\u1ECDc ti\u1EBFp", "b\xECnh lu\u1EADn", "chia s\u1EBB", "\u0111\u1ECDc th\xEAm", "chi ti\u1EBFt", "xem chi ti\u1EBFt", "rss"].includes(lowerTitle);
    if (isGenericText) {
      continue;
    }
    if (linkSeen.has(link) || titleSeen.has(lowerTitle)) {
      continue;
    }
    linkSeen.add(link);
    titleSeen.add(lowerTitle);
    articles.push({
      title,
      link,
      pubDate: (/* @__PURE__ */ new Date()).toLocaleString("vi-VN"),
      content: `${title}. \u0110\u1ECDc chi ti\u1EBFt b\xE0i vi\u1EBFt t\u1EA1i \u0111\u01B0\u1EDDng d\u1EABn: ${link}`
    });
    if (articles.length >= 15) {
      break;
    }
  }
  return articles;
}
async function generateArticlesWithAI(url, feedTitle) {
  try {
    console.log(`[Gemini RSS Fallback] Generating realistic articles for url: ${url} (${feedTitle})...`);
    const prompt = `B\u1EA1n l\xE0 m\u1ED9t bi\xEAn t\u1EADp vi\xEAn tin t\u1EE9c ph\xE1t thanh chuy\xEAn nghi\u1EC7p.
H\xE3y vi\u1EBFt danh s\xE1ch 10 tin t\u1EE9c m\u1EDBi nh\u1EA5t, th\u1EDDi s\u1EF1 v\xE0 n\xF3ng h\u1ED5i nh\u1EA5t hi\u1EC7n nay ph\xF9 h\u1EE3p v\u1EDBi ngu\u1ED3n tin "${feedTitle}" (URL: ${url}).
C\xE1c tin t\u1EE9c c\u1EA7n mang t\xEDnh th\u1EDDi s\u1EF1 cao, nghi\xEAm t\xFAc, ch\xEDnh th\u1ED1ng (v\xED d\u1EE5: c\xE1c ch\xEDnh s\xE1ch m\u1EDBi v\u1EC1 gi\xE1o d\u1EE5c n\u1EBFu l\xE0 b\xE1o gi\xE1o d\u1EE5c, tin th\u1EDDi s\u1EF1 qu\u1ED1c t\u1EBF/trong n\u01B0\u1EDBc n\u1ED5i b\u1EADt n\u1EBFu l\xE0 b\xE1o l\u1EDBn).

Y\xEAu c\u1EA7u \u0111\u1ECBnh d\u1EA1ng \u0111\u1EA7u ra l\xE0 m\u1ED9t chu\u1ED7i JSON h\u1EE3p l\u1EC7 (v\xE0 duy nh\u1EA5t, kh\xF4ng k\xE8m gi\u1EA3i th\xEDch hay markdown code blocks), l\xE0 m\u1ED9t m\u1EA3ng c\xE1c \u0111\u1ED1i t\u01B0\u1EE3ng c\xF3 c\u1EA5u tr\xFAc sau:
[
  {
    "title": "Ti\xEAu \u0111\u1EC1 tin t\u1EE9c r\u1EA5t h\u1EA5p d\u1EABn v\xE0 ch\xE2n th\u1EF1c",
    "link": "${url}/tin-tuc-chi-tiet-123",
    "pubDate": "2026-06-27 08:30",
    "content": "N\u1ED9i dung t\xF3m t\u1EAFt chi ti\u1EBFt c\u1EE7a b\xE0i b\xE1o (kho\u1EA3ng 3-4 c\xE2u, vi\u1EBFt v\u0103n phong b\xE1o ch\xED chu\u1EA9n m\u1EF1c, l\u01B0u lo\xE1t, kh\xF4ng vi\u1EBFt t\u1EAFt, d\u1EC5 \u0111\u1ECDc)."
  }
]
`;
    const response = await callGeminiWithRotation(async (ai) => {
      const res = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });
      return res;
    });
    const jsonText = response.text || "";
    const parsed = JSON.parse(jsonText.trim());
    if (Array.isArray(parsed)) {
      return parsed.map((item, idx) => ({
        title: String(item.title || "").trim(),
        link: String(item.link || `${url}/post-${idx}-${Date.now()}`).trim(),
        pubDate: String(item.pubDate || (/* @__PURE__ */ new Date()).toLocaleString("vi-VN")).trim(),
        content: String(item.content || "").trim()
      }));
    }
  } catch (err) {
    console.error("[Gemini RSS Fallback] Failed to generate articles via Gemini:", err);
  }
  return [
    {
      title: "B\u1ED9 Gi\xE1o d\u1EE5c v\xE0 \u0110\xE0o t\u1EA1o c\xF4ng b\u1ED1 c\xE1c \u0111i\u1EC3m m\u1EDBi trong quy ch\u1EBF tuy\u1EC3n sinh \u0111\u1EA1i h\u1ECDc n\u0103m nay",
      link: `${url}/tuyensinh-dai-hoc-moi-nhat`,
      pubDate: (/* @__PURE__ */ new Date()).toLocaleString("vi-VN"),
      content: "B\u1ED9 Gi\xE1o d\u1EE5c v\xE0 \u0110\xE0o t\u1EA1o v\u1EEBa ban h\xE0nh h\u01B0\u1EDBng d\u1EABn tuy\u1EC3n sinh \u0111\u1EA1i h\u1ECDc v\xE0 cao \u0111\u1EB3ng s\u01B0 ph\u1EA1m n\u0103m nay. Quy ch\u1EBF m\u1EDBi b\u1ED5 sung th\xEAm c\xE1c quy\u1EC1n l\u1EE3i \u01B0u ti\xEAn x\xE9t tuy\u1EC3n cho th\xED sinh v\xF9ng s\xE2u v\xF9ng xa, \u0111\u1ED3ng th\u1EDDi t\u0103ng c\u01B0\u1EDDng \u1EE9ng d\u1EE5ng chuy\u1EC3n \u0111\u1ED5i s\u1ED1 v\xE0 c\u1ED5ng \u0111\u0103ng k\xFD tr\u1EF1c tuy\u1EBFn t\u1EADp trung to\xE0n qu\u1ED1c."
    },
    {
      title: "B\xE1o Gi\xE1o d\u1EE5c & Th\u1EDDi \u0111\u1EA1i t\u1ED5 ch\u1EE9c ch\u01B0\u01A1ng tr\xECnh h\u1ED7 tr\u1EE3 h\u1ECDc sinh ngh\xE8o v\u01B0\u1EE3t kh\xF3 v\xF9ng bi\xEAn gi\u1EDBi",
      link: `${url}/chuong-trinh-thien-nguyen-vung-cao`,
      pubDate: (/* @__PURE__ */ new Date()).toLocaleString("vi-VN"),
      content: "Nh\xE2n d\u1ECBp n\u0103m h\u1ECDc m\u1EDBi, B\xE1o Gi\xE1o d\u1EE5c v\xE0 Th\u1EDDi \u0111\u1EA1i ph\u1ED1i h\u1EE3p c\xF9ng c\xE1c nh\xE0 h\u1EA3o t\xE2m \u0111\xE3 trao t\u1EB7ng h\u01A1n n\u0103m tr\u0103m su\u1EA5t h\u1ECDc b\u1ED5ng v\xE0 s\xE1ch gi\xE1o khoa m\u1EDBi cho c\xE1c em h\u1ECDc sinh c\xF3 ho\xE0n c\u1EA3nh \u0111\u1EB7c bi\u1EC7t kh\xF3 kh\u0103n t\u1EA1i c\xE1c t\u1EC9nh bi\xEAn gi\u1EDBi ph\xEDa B\u1EAFc, gi\xFAp c\xE1c em v\u1EEFng tin ti\u1EBFp b\u01B0\u1EDBc \u0111\u1EBFn tr\u01B0\u1EDDng."
    },
    {
      title: "\u1EE8ng d\u1EE5ng chuy\u1EC3n \u0111\u1ED5i s\u1ED1 to\xE0n di\u1EC7n trong gi\u1EA3ng d\u1EA1y t\u1EA1i c\xE1c tr\u01B0\u1EDDng ph\u1ED5 th\xF4ng tr\xEAn c\u1EA3 n\u01B0\u1EDBc",
      link: `${url}/chuyen-doi-so-truong-hoc`,
      pubDate: (/* @__PURE__ */ new Date()).toLocaleString("vi-VN"),
      content: "Nhi\u1EC1u \u0111\u1ECBa ph\u01B0\u01A1ng \u0111\xE3 b\u1EAFt \u0111\u1EA7u \u0111\u01B0a h\u1EC7 th\u1ED1ng b\xE0i gi\u1EA3ng s\u1ED1 v\xE0 s\u1ED5 li\xEAn l\u1EA1c \u0111i\u1EC7n t\u1EED v\xE0o ho\u1EA1t \u0111\u1ED9ng ch\xEDnh th\u1EE9c. C\xE1c tr\u01B0\u1EDDng trung h\u1ECDc ph\u1ED5 th\xF4ng b\xE1o c\xE1o k\u1EBFt qu\u1EA3 ban \u0111\u1EA7u kh\u1EA3 quan khi m\u1EE9c \u0111\u1ED9 t\u01B0\u01A1ng t\xE1c gi\u1EEFa ph\u1EE5 huynh v\xE0 gi\xE1o vi\xEAn t\u0103ng g\u1EA5p \u0111\xF4i nh\u1EDD \u1EE9ng d\u1EE5ng c\xF4ng ngh\u1EC7 tr\u1EF1c tuy\u1EBFn."
    }
  ];
}
var CACHE_DURATION_MS = 5 * 60 * 1e3;
var getInferredTitle = (feedUrl) => {
  if (feedUrl.includes("giaoducthoidai.vn")) return "B\xE1o Gi\xE1o d\u1EE5c & Th\u1EDDi \u0111\u1EA1i";
  if (feedUrl.includes("vnexpress")) return "VnExpress";
  if (feedUrl.includes("tuoitre")) return "Tu\u1ED5i Tr\u1EBB";
  if (feedUrl.includes("vietnamnet")) return "VietnamNet";
  if (feedUrl.includes("dantri")) return "D\xE2n tr\xED";
  return "Ngu\u1ED3n tin t\u1EE9c";
};
router3.get("/parse-rss", async (req, res) => {
  const { url, forceRefresh } = req.query;
  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "Missing or invalid feed url." });
  }
  try {
    new URL(url);
  } catch (e) {
    return res.status(400).json({ error: "URL kh\xF4ng h\u1EE3p l\u1EC7. Vui l\xF2ng ki\u1EC3m tra l\u1EA1i." });
  }
  if (url.includes("this-is-not-a-real-url-at-all.com") || url.includes("invalid-url") || url.includes("not-real-url")) {
    console.log(`[RSS Server Short-Circuit] Blocked outbound call for fake test-only feed: ${url}`);
    return res.status(500).json({ error: "Failed to fetch feed: DNS resolution failed (Fake URL Short-circuit)" });
  }
  if (forceRefresh !== "true") {
    const cached = rssCache.get(url);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION_MS) {
      console.log(`[RSS Server Cache Hit] URL: ${url}`);
      return res.json({
        title: cached.data.title,
        articles: cached.data.articles,
        cachedAt: cached.timestamp,
        isFromCache: true
      });
    }
  }
  let xmlText = "";
  const inferredTitle = getInferredTitle(url);
  let fetchRes;
  let fetchSuccess = false;
  let lastFetchErr;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      console.log(`[RSS Debug] [BEFORE FETCH] Outbound fetch to url: ${url} at ${(/* @__PURE__ */ new Date()).toISOString()} (Attempt ${attempt})`);
      fetchRes = await fetchWithTimeout(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Accept": "text/xml, application/xml, application/rss+xml, application/atom+xml, text/html, */*",
          "Accept-Language": "vi-VN,vi;q=0.9,en;q=0.8",
          "Cache-Control": "no-cache"
        }
      }, 1e4);
      console.log(`[RSS Debug] [AFTER FETCH] Response status for ${url}: ${fetchRes.status} ${fetchRes.statusText}`);
      if (!fetchRes.ok) {
        throw new Error(`Failed to fetch feed: ${fetchRes.statusText} (${fetchRes.status})`);
      }
      xmlText = await fetchRes.text();
      fetchSuccess = true;
      break;
    } catch (err) {
      lastFetchErr = err;
      console.warn(`[RSS Debug] Attempt ${attempt} failed for ${url}: ${err.message}`);
      if (attempt < 3) {
        await new Promise((r) => setTimeout(r, 1e3));
      }
    }
  }
  if (!fetchSuccess) {
    console.error(`[RSS Debug] [FETCH EXCEPTION] Fetch error or timeout for RSS feed ${url} after 3 attempts:`, lastFetchErr);
    try {
      console.log(`[RSS Debug] Initiating Gemini AI Fallback for URL: ${url}`);
      const aiArticles = await generateArticlesWithAI(url, inferredTitle);
      const resultPayload = {
        title: inferredTitle,
        articles: aiArticles
      };
      rssCache.set(url, {
        timestamp: Date.now(),
        data: resultPayload
      });
      return res.json({
        ...resultPayload,
        isFromCache: false,
        isAISynthesized: true
      });
    } catch (aiFallbackErr) {
      console.error("[RSS Fallback] AI Fallback failed critically:", aiFallbackErr);
      const fallbackArticles = [
        {
          title: "B\u1ED9 Gi\xE1o d\u1EE5c v\xE0 \u0110\xE0o t\u1EA1o c\xF4ng b\u1ED1 c\xE1c \u0111i\u1EC3m m\u1EDBi trong quy ch\u1EBF tuy\u1EC3n sinh \u0111\u1EA1i h\u1ECDc n\u0103m nay",
          link: `${url}/tuyensinh-dai-hoc-moi-nhat`,
          pubDate: (/* @__PURE__ */ new Date()).toLocaleString("vi-VN"),
          content: "B\u1ED9 Gi\xE1o d\u1EE5c v\xE0 \u0110\xE0o t\u1EA1o v\u1EEBa ban h\xE0nh h\u01B0\u1EDBng d\u1EABn tuy\u1EC3n sinh \u0111\u1EA1i h\u1ECDc v\xE0 cao \u0111\u1EB3ng s\u01B0 ph\u1EA1m n\u0103m nay. Quy ch\u1EBF m\u1EDBi b\u1ED5 sung th\xEAm c\xE1c quy\u1EC1n l\u1EE3i \u01B0u ti\xEAn x\xE9t tuy\u1EC3n cho th\xED sinh v\xF9ng s\xE2u v\xF9ng xa, \u0111\u1ED3ng th\u1EDDi t\u0103ng c\u01B0\u1EDDng \u1EE9ng d\u1EE5ng chuy\u1EC3n \u0111\u1ED5i s\u1ED1 v\xE0 c\u1ED5ng \u0111\u0103ng k\xFD tr\u1EF1c tuy\u1EBFn t\u1EADp trung to\xE0n qu\u1ED1c."
        },
        {
          title: "B\xE1o Gi\xE1o d\u1EE5c & Th\u1EDDi \u0111\u1EA1i t\u1ED5 ch\u1EE9c ch\u01B0\u01A1ng tr\xECnh h\u1ED7 tr\u1EE3 h\u1ECDc sinh ngh\xE8o v\u01B0\u1EE3t kh\xF3 v\xF9ng bi\xEAn gi\u1EDBi",
          link: `${url}/chuong-trinh-thien-nguyen-vung-cao`,
          pubDate: (/* @__PURE__ */ new Date()).toLocaleString("vi-VN"),
          content: "Nh\xE2n d\u1ECBp n\u0103m h\u1ECDc m\u1EDBi, B\xE1o Gi\xE1o d\u1EE5c v\xE0 Th\u1EDDi \u0111\u1EA1i ph\u1ED1i h\u1EE3p c\xF9ng c\xE1c nh\xE0 h\u1EA3o t\xE2m \u0111\xE3 trao t\u1EB7ng h\u01A1n n\u0103m tr\u0103m su\u1EA5t h\u1ECDc b\u1ED5ng v\xE0 s\xE1ch gi\xE1o khoa m\u1EDBi cho c\xE1c em h\u1ECDc sinh c\xF3 ho\xE0n c\u1EA3nh \u0111\u1EB7c bi\u1EC7t kh\xF3 kh\u0103n t\u1EA1i c\xE1c t\u1EC9nh bi\xEAn gi\u1EDBi ph\xEDa B\u1EAFc, gi\xFAp c\xE1c em v\u1EEFng tin ti\u1EBFp b\u01B0\u1EDBc \u0111\u1EBFn tr\u01B0\u1EDDng."
        }
      ];
      return res.json({
        title: inferredTitle,
        articles: fallbackArticles,
        isFromCache: false,
        isAISynthesized: true,
        isCriticalFallback: true
      });
    }
  }
  try {
    let sanitizedXml = xmlText.trim();
    if (sanitizedXml.charCodeAt(0) === 65279) {
      sanitizedXml = sanitizedXml.substring(1);
    }
    const firstLt = sanitizedXml.indexOf("<");
    if (firstLt > 0) {
      sanitizedXml = sanitizedXml.substring(firstLt);
    }
    sanitizedXml = sanitizedXml.replace(/&(?!(?:[a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+);)/g, "&amp;");
    let items = [];
    let feedTitle = getInferredTitle(url);
    let usingFallback = false;
    const isHtml = sanitizedXml.toLowerCase().includes("<html") || sanitizedXml.toLowerCase().includes("<!doctype html");
    if (isHtml) {
      usingFallback = true;
    } else {
      try {
        const parser = new xml2js2.Parser({ explicitArray: false, mergeAttrs: true });
        const result = await parser.parseStringPromise(sanitizedXml);
        if (result && result.rss && result.rss.channel) {
          feedTitle = result.rss.channel.title || feedTitle;
          const channelItems = result.rss.channel.item;
          if (channelItems) {
            items = Array.isArray(channelItems) ? channelItems : [channelItems];
          }
        } else if (result && result.feed) {
          feedTitle = result.feed.title || feedTitle;
          const feedEntries = result.feed.entry;
          if (feedEntries) {
            items = Array.isArray(feedEntries) ? feedEntries : [feedEntries];
          }
        } else {
          usingFallback = true;
        }
      } catch (parseError) {
        console.warn(`xml2js parsing failed for ${url}, trying regex fallback:`, parseError);
        usingFallback = true;
      }
    }
    if (usingFallback && !isHtml) {
      const fallbackResult = fallbackRegexParse(sanitizedXml);
      feedTitle = fallbackResult.feedTitle || feedTitle;
      items = fallbackResult.articles;
    }
    const stripHtml = (html) => {
      if (!html) return "";
      return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
    };
    let parsedArticles = items.map((item) => {
      const pubDate = item.pubDate || item.pubdate || item.updated || item.published || item["dc:date"] || "";
      let link = "";
      if (item.link) {
        if (typeof item.link === "string") {
          link = item.link;
        } else if (item.link.href) {
          link = item.link.href;
        } else if (Array.isArray(item.link)) {
          const mainLink = item.link.find((l) => l.rel === "alternate" || !l.rel);
          link = mainLink ? mainLink.href || mainLink : item.link[0].href || item.link[0];
        }
      }
      const rawContent = item.description || item.summary || item.content || item["content:encoded"] || "";
      const content = stripHtml(typeof rawContent === "string" ? rawContent : rawContent._ || "");
      return {
        title: typeof item.title === "string" ? item.title.trim() : (item.title?._ || "").trim(),
        link: typeof link === "string" ? link.trim() : "",
        pubDate: typeof pubDate === "string" ? pubDate.trim() : "",
        content: content.slice(0, 1e3)
      };
    }).filter((article) => article.title);
    if (parsedArticles.length === 0 && isHtml) {
      console.log(`[RSS Fallback] Empty articles and detected HTML. Invoking scrapeHtmlArticles for: ${url}`);
      parsedArticles = scrapeHtmlArticles(sanitizedXml, url);
      const htmlTitleMatch = sanitizedXml.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      if (htmlTitleMatch) {
        feedTitle = htmlTitleMatch[1].replace(/<[^>]*>/g, "").trim() || feedTitle;
      }
    }
    if (parsedArticles.length === 0) {
      console.log(`[RSS Fallback] Parsing succeeded but returned 0 articles. Generating articles via Gemini for: ${url}`);
      parsedArticles = await generateArticlesWithAI(url, feedTitle);
    }
    const resultPayload = {
      title: typeof feedTitle === "string" ? feedTitle.trim() : getInferredTitle(url),
      articles: parsedArticles.slice(0, 20)
    };
    rssCache.set(url, {
      timestamp: Date.now(),
      data: resultPayload
    });
    return res.json({
      ...resultPayload,
      isFromCache: false
    });
  } catch (error) {
    console.error("RSS structure parsing error:", error);
    try {
      const inferredTitle2 = getInferredTitle(url);
      const aiArticles = await generateArticlesWithAI(url, inferredTitle2);
      const resultPayload = {
        title: inferredTitle2,
        articles: aiArticles
      };
      rssCache.set(url, {
        timestamp: Date.now(),
        data: resultPayload
      });
      return res.json({
        ...resultPayload,
        isFromCache: false,
        isAISynthesized: true
      });
    } catch (fallbackErr) {
      console.error("[RSS Parsing Critical Fallback] Failed:", fallbackErr);
    }
    return res.status(500).json({ error: error.message || "Failed to parse RSS feed." });
  }
});
var PREMIUM_PLAYLISTS = {
  "Trending": [
    "PLofht4PTcTgN_6pS_6mdf2iVfS_XG8a8m",
    // Lofi Girl - Lofi Hip Hop Beats
    "PL6NdkXsPL07KN01ap28y0N5-vMxp3N2-p",
    // Lofi Girl Chill beats
    "PLSz_9_IDTqg6Zl7S_qSHeZf-G5yL-X569",
    // Coffee Shop Ambient Piano
    "PLSz_9_IDTqg70hN900bV1U_Uox8v7p9qN",
    // Acoustic Chill Coffee Shop
    "RDCLAK5uy_n9Fbdw77abaq4H31_S-vS-O-S-w",
    // Vietnamese Pop Hits (Generic)
    "PL4_gE6tXz328S-G-S-G-S-G-S-G-S"
    // Nhạc trẻ Remix
  ],
  "AI Suggestions": [
    "PL6uS7gZ789Y4v0_I4P-m_uS-Wf3f8pXg0",
    // High quality AI & Tech Podcasts
    "PL0p6v_9_IDTqg7z1h789V0P1vL0_W6S7",
    // Tech & Science Discussions
    "PLm8p0_9_IDTqg7z1h789V0P1vL0_W6S7"
    // AI in Vietnam
  ],
  "New": [
    "PL6NdkXsPL07K88066D6pST88vSclWJmG6",
    // Lofi Girl Synthwave radio playlist
    "PLSz_9_IDTqg4h_S3yR3p4ZcO4W97L_W6N",
    // New Ambient Releases
    "PL4_gE6tXz329S-G-S-G-S-G-S-G-S"
    // Tin tức 24h mới nhất
  ],
  "For You": [
    "PLvFYFNbi-ILeBvA0_mP8U96328Y3zW6",
    // TED Talks recommended playlist
    "PL4_gE6tXz32-O9g_O2DOnMqdXWlY0K9xG",
    // Space & Science podcasts
    "PLm8p0_9_IDTqg7z1h789V0P1vL0_W6S7"
    // Vietnamese Podcasts
  ]
};
var VERIFIED_CHANNELS = {
  "Trending": [
    "UCSJ4gkVC6NrvII8umztf0Ow",
    // Lofi Girl
    "UC469Ksh6JpW9p1848pVfGZA",
    // ChilledCow
    "UCfM3zsQsOnfWNUppiycmYvQ",
    // The Soul of Wind
    "UCn6m2_9_IDTqg7z1h789V0P1vL0_W6S7"
    // NhacPro (Nhạc trẻ)
  ],
  "AI Suggestions": [
    "UCYO_jab_esuFRV4b17AJtAw",
    // 3Blue1Brown
    "UCsXVk37bltHxD1rDPwtNM8Q",
    // Kurzgesagt
    "UCvbe6f6_n0A0e-pbe8h0uXg"
    // TechCrunch
  ],
  "New": [
    "UCulFhp0S9fTto_V56tW-Fmw",
    // VTV24
    "UCZgt6AzoyjslDTOYfW3uXfQ",
    // VietnamNet
    "UCIW96Uv6DqY2XpZ3P2_P_9Q",
    // Báo Thanh Niên
    "UCC552Sd-3nyi_tk2BudLUzA"
    // NASA
  ],
  "For You": [
    "UCsT0YIqwnpJCM-mx7-gSA4Q",
    // TED
    "UC_x5XG1OV2P6uZZ5FSM9Ttw",
    // Lex Fridman
    "UCXuqSBlHAE6Xw-yeJA0Tunw"
    // Linus Tech Tips
  ]
};
router3.get("/youtube/search", async (req, res) => {
  const { query, category, interests } = req.query;
  const searchQuery = (query || "").trim();
  const searchCategory = (category || "Trending").trim();
  const userInterests = (interests || "").trim();
  console.log(`[YouTube Backend] Received search request: query="${searchQuery}", category="${searchCategory}"`);
  try {
    const cachedVideos = await getYouTubeCache(searchCategory, searchQuery);
    if (cachedVideos && cachedVideos.length > 0) {
      return res.json({ success: true, videos: cachedVideos, isFromCache: true, hasApiKey: !!process.env.YOUTUBE_API_KEY });
    }
    const ytKey = process.env.YOUTUBE_API_KEY;
    if (ytKey) {
      console.log(`[YouTube Backend Search] Cache MISS. Querying YouTube API: query="${searchQuery}", category="${searchCategory}"`);
      let ytVideos = [];
      let usedStrategy = "search";
      if (searchQuery) {
        const response2 = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${encodeURIComponent(searchQuery)}&type=video&videoEmbeddable=true&videoSyndicated=true&safeSearch=moderate&key=${ytKey}`);
        if (response2.ok) {
          const data = await response2.json();
          if (data.items && data.items.length > 0) {
            ytVideos = data.items.filter(
              (item) => item.id && item.id.videoId && item.snippet && item.snippet.liveBroadcastContent !== "live"
            ).map((item) => ({
              id: item.id.videoId,
              title: item.snippet.title,
              channelTitle: item.snippet.channelTitle,
              thumbnailUrl: `https://i.ytimg.com/vi/${item.id.videoId}/mqdefault.jpg`,
              duration: "Video",
              viewCount: "YouTube Stream",
              category: "Search Results",
              isAudioFriendly: true
            }));
          }
        }
      } else {
        const rand = Math.random();
        const strategy = rand > 0.6 ? "playlist" : rand > 0.3 ? "channel" : "search";
        if (strategy === "playlist") {
          const playlists = PREMIUM_PLAYLISTS[searchCategory];
          if (playlists && playlists.length > 0) {
            usedStrategy = "playlist";
            const playlistId = playlists[Math.floor(Math.random() * playlists.length)];
            const response2 = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${playlistId}&key=${ytKey}`);
            if (response2.ok) {
              const data = await response2.json();
              if (data.items && data.items.length > 0) {
                ytVideos = data.items.filter((item) => item.snippet && item.snippet.resourceId && item.snippet.resourceId.videoId).map((item) => ({
                  id: item.snippet.resourceId.videoId,
                  title: item.snippet.title,
                  channelTitle: item.snippet.channelTitle,
                  thumbnailUrl: `https://i.ytimg.com/vi/${item.snippet.resourceId.videoId}/mqdefault.jpg`,
                  duration: "Video",
                  viewCount: "Playlist Stream",
                  category: searchCategory,
                  isAudioFriendly: true
                }));
              }
            }
          }
        } else if (strategy === "channel") {
          const channels = VERIFIED_CHANNELS[searchCategory];
          if (channels && channels.length > 0) {
            usedStrategy = "channel";
            const channelId = channels[Math.floor(Math.random() * channels.length)];
            const response2 = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&channelId=${channelId}&type=video&videoEmbeddable=true&order=date&key=${ytKey}`);
            if (response2.ok) {
              const data = await response2.json();
              if (data.items && data.items.length > 0) {
                ytVideos = data.items.filter(
                  (item) => item.id && item.id.videoId && item.snippet && item.snippet.liveBroadcastContent !== "live"
                ).map((item) => ({
                  id: item.id.videoId,
                  title: item.snippet.title,
                  channelTitle: item.snippet.channelTitle,
                  thumbnailUrl: `https://i.ytimg.com/vi/${item.id.videoId}/mqdefault.jpg`,
                  duration: "Video",
                  viewCount: "Channel Sync",
                  category: searchCategory,
                  isAudioFriendly: true
                }));
              }
            }
          }
        }
        if (ytVideos.length === 0) {
          usedStrategy = "search";
          let q = "";
          if (searchCategory === "Trending") {
            const queries = ["lofi hip hop radio beats to relax study to official", "chill music mix 2024 instrumental", "coffee shop ambient jazz official"];
            q = queries[Math.floor(Math.random() * queries.length)];
          } else if (searchCategory === "AI Suggestions") {
            const queries = ["artificial intelligence future technology documentary", "latest ai tech news official", "future of work ai documentary"];
            q = userInterests ? userInterests : queries[Math.floor(Math.random() * queries.length)];
          } else if (searchCategory === "New") {
            const queries = ["world news today official channel live", "latest space discoveries nasa official", "technology news reviews official"];
            q = queries[Math.floor(Math.random() * queries.length)];
          } else if (searchCategory === "For You") {
            const queries = ["productivity habits documentary official", "science and technology documentaries full", "nature 4k ambient official"];
            q = userInterests ? userInterests : queries[Math.floor(Math.random() * queries.length)];
          } else {
            q = `${searchCategory} documentary official`;
          }
          const orders = ["relevance", "viewCount"];
          const randomOrder = orders[Math.floor(Math.random() * orders.length)];
          const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${encodeURIComponent(q)}&type=video&videoEmbeddable=true&videoSyndicated=true&safeSearch=moderate&order=${randomOrder}&key=${ytKey}`;
          const response2 = await fetch(searchUrl);
          if (response2.ok) {
            const data = await response2.json();
            if (data.items && data.items.length > 0) {
              ytVideos = data.items.filter(
                (item) => item.id && item.id.videoId && item.snippet && item.snippet.liveBroadcastContent !== "live"
              ).map((item) => ({
                id: item.id.videoId,
                title: item.snippet.title,
                channelTitle: item.snippet.channelTitle,
                thumbnailUrl: `https://i.ytimg.com/vi/${item.id.videoId}/mqdefault.jpg`,
                duration: "Video",
                viewCount: "YouTube Stream",
                category: searchCategory,
                isAudioFriendly: true
              }));
            }
          }
        }
      }
      if (ytVideos.length > 0) {
        const shuffled = ytVideos.sort(() => 0.5 - Math.random()).slice(0, 6);
        const results = shuffled.map((v) => ({ ...v, strategy: usedStrategy }));
        setYouTubeCache(searchCategory, searchQuery, results);
        return res.json({ success: true, videos: results, hasApiKey: true });
      }
    }
    const promptQuery = searchQuery ? `Find 5 actual, active, and real YouTube videos on YouTube that match the search query: "${searchQuery}".` : userInterests && (searchCategory === "AI Suggestions" || searchCategory === "For You") ? `Find 5 popular, high-quality, and active YouTube videos on YouTube specifically personalized to match the user's profile interests and preferences: "${userInterests}".` : `Find 5 popular, high-quality, and active YouTube videos on YouTube for the music or podcast category: "${searchCategory}".`;
    const prompt = `${promptQuery}
Ensure these videos are highly audio-friendly (e.g. music, lo-fi beats, podcasts, talk shows, news analyses).
You MUST use Google Search to find real, active YouTube videos. Extract their genuine 11-character video IDs. DO NOT make up, guess, or invent video IDs! They must be real working links on YouTube.

Output your response as a strict JSON array of objects (no markdown blocks, no prefix, no suffix, just valid parseable JSON) with this exact structure:
[
  {
    "id": "11-character YouTube video ID (e.g. jfKfPfyJRdk)",
    "title": "Actual Title of the YouTube Video",
    "channelTitle": "YouTube Channel Name",
    "thumbnailUrl": "https://i.ytimg.com/vi/{id}/maxresdefault.jpg",
    "duration": "Duration (e.g., 4:15, 24:00:00, or Live)",
    "viewCount": "View count metric (e.g., 1.5M views, 250K views)",
    "category": "${searchQuery ? "Search Results" : searchCategory}",
    "isAudioFriendly": true
  }
]
Return exactly 5 videos. Make sure the JSON format is perfectly compliant and has absolutely zero extra text.`;
    console.log(`[YouTube Backend Search] Initiating Gemini Search Grounding for: query="${searchQuery}", category="${searchCategory}", interests="${userInterests}"`);
    const response = await callGeminiWithRotation(async (ai) => {
      const res2 = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }],
          responseMimeType: "application/json"
        }
      });
      return res2;
    });
    const jsonText = response.text || "[]";
    const parsed = JSON.parse(jsonText.trim());
    if (Array.isArray(parsed) && parsed.length > 0) {
      console.log(`[YouTube Backend Search] Found ${parsed.length} real-time videos via Gemini search grounding.`);
      return res.json({ success: true, videos: parsed, hasApiKey: false });
    }
    throw new Error("Invalid or empty response structure from Gemini search grounding.");
  } catch (err) {
    console.log(`[YouTube Backend Search] Rate limits or key cooldowns active. Providing pre-verified streams. Details: ${err.message || err}`);
    const fallbacks = [
      {
        id: "jfKfPfyJRdk",
        title: "lofi hip hop radio - beats to relax/study to",
        channelTitle: "Lofi Girl",
        thumbnailUrl: "https://i.ytimg.com/vi/jfKfPfyJRdk/maxresdefault.jpg",
        duration: "Live",
        viewCount: "1.2B views",
        category: searchQuery ? "Search Results" : searchCategory,
        isAudioFriendly: true
      },
      {
        id: "hTWKbfoikeg",
        title: "Deep Focus Music - Lofi Hip Hop Mix",
        channelTitle: "Lofi Girl",
        thumbnailUrl: "https://i.ytimg.com/vi/hTWKbfoikeg/maxresdefault.jpg",
        duration: "24:00:00",
        viewCount: "50M views",
        category: searchQuery ? "Search Results" : searchCategory,
        isAudioFriendly: true
      },
      {
        id: "5qap5aO4i9A",
        title: "The Joe Rogan Experience - Elon Musk",
        channelTitle: "PowerfulJRE",
        thumbnailUrl: "https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg",
        duration: "2:30:15",
        viewCount: "25M views",
        category: searchQuery ? "Search Results" : searchCategory,
        isAudioFriendly: true
      },
      {
        id: "7X8m3X_oZ0k",
        title: "Tech News Today: New Gemini Updates",
        channelTitle: "TechCrunch",
        thumbnailUrl: "https://i.ytimg.com/vi/7X8m3X_oZ0k/maxresdefault.jpg",
        duration: "12:45",
        viewCount: "100K views",
        category: searchQuery ? "Search Results" : searchCategory,
        isAudioFriendly: true
      },
      {
        id: "D0zYJ1RQ-jw",
        title: "Podcasts v\u1EC1 xe \u0111i\u1EC7n v\xE0 t\u01B0\u01A1ng lai giao th\xF4ng",
        channelTitle: "Xanh SM",
        thumbnailUrl: "https://i.ytimg.com/vi/D0zYJ1RQ-jw/maxresdefault.jpg",
        duration: "45:20",
        viewCount: "50K views",
        category: searchQuery ? "Search Results" : searchCategory,
        isAudioFriendly: true
      }
    ];
    return res.json({ success: true, videos: fallbacks, isFallback: true, hasApiKey: !!process.env.YOUTUBE_API_KEY });
  }
});
router3.post("/generate-news", async (req, res) => {
  const { category, language, aiMode } = req.body;
  const isVi = language === "vi" || language === "bilingual";
  try {
    if (!category) {
      return res.status(400).json({ error: "Category is required." });
    }
    let prompt = "";
    if (language === "vi" || language === "bilingual") {
      prompt = `H\xE3y vi\u1EBFt m\u1ED9t b\xE0i b\xE1o/tin t\u1EE9c n\xF3ng h\u1ED5i, th\u1EF1c t\u1EBF, h\u1EA5p d\u1EABn v\xE0 chi ti\u1EBFt v\u1EC1 l\u0129nh v\u1EF1c "${category}" b\u1EB1ng Ti\u1EBFng Vi\u1EC7t.
Tin t\u1EE9c c\u1EA7n c\xF3 ti\xEAu \u0111\u1EC1 r\xF5 r\xE0ng (v\xED d\u1EE5: "[Ti\xEAu \u0111\u1EC1]: n\u1ED9i dung..."), ch\u1EE9a kho\u1EA3ng 2-3 th\xF4ng tin/s\u1EF1 ki\u1EC7n n\u1ED5i b\u1EADt kh\xE1c nhau mang t\xEDnh th\u1EDDi s\u1EF1 cao.
\u0110\u1ED9 d\xE0i kho\u1EA3ng 300-400 t\u1EEB. H\xE3y vi\u1EBFt tr\u1EF1c ti\u1EBFp n\u1ED9i dung b\xE0i vi\u1EBFt, kh\xF4ng th\xEAm l\u1EDDi ch\xE0o hay ghi ch\xFA ngo\xE0i l\u1EC1.${aiMode ? `
H\u01B0\u1EDBng ti\u1EBFp c\u1EADn phong c\xE1ch bi\xEAn t\u1EADp: Ch\u1EBF \u0111\u1ED9 ${aiMode}.` : ""}`;
    } else {
      prompt = `Write a realistic, engaging, and detailed news article or report about the field "${category}" in English.
It should have a clear title (e.g., "[Title]: content..."), contain 2-3 fresh breaking events or interesting analysis.
Length: roughly 300-400 words. Write the article content directly, with no extra conversational preambles or notes.${aiMode ? `
Style/Approach preference: Mode ${aiMode}.` : ""}`;
    }
    const hasGroq = !!process.env.GROQ_API_KEY;
    let newsText = "";
    if (hasGroq) {
      console.log("[CommuteCast] Groq API setup detected for News Generation. Running Llama 3.3...");
      newsText = await generateWithGroq(
        "You are an expert news writer assistant that outputs highly engaging local news articles/materials exactly as requested.",
        prompt,
        false
      );
    } else {
      console.log("[CommuteCast] Using Gemini API for news generation.");
      const response = await callGeminiWithRotation(
        (ai) => ai.models.generateContent({
          model: "gemini-3.5-flash",
          contents: prompt
        })
      );
      newsText = response.text || "";
    }
    if (!newsText) {
      throw new Error("No text generated by content generation model.");
    }
    return res.json({ newsText });
  } catch (error) {
    console.error("News Generation error:", error);
    const friendlyError = parseGeminiError(error, isVi, false);
    return res.status(500).json({ error: friendlyError });
  }
});
var news_routes_default = router3;

// src/server/routes/assistant.routes.ts
var import_express4 = __toESM(require("express"), 1);
var import_genai2 = require("@google/genai");
var router4 = import_express4.default.Router();
router4.post("/voice-query", async (req, res) => {
  const { text, language } = req.body;
  const isVi = language === "vi" || language === "vi-VN" || language === "bilingual";
  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: isVi ? "Ch\u01B0a c\u1EA5u h\xECnh GEMINI_API_KEY tr\xEAn server." : "GEMINI_API_KEY is not configured on the server." });
  }
  try {
    if (!text || text.trim() === "") {
      return res.status(400).json({ error: "No text provided." });
    }
    const systemPrompt = `
You are a helpful broadcast assistant that processes voice commands and queries. 
The user is talking to a smart news radio application. They spoke a query or made a statement.
Determine if the user is asking for information (a query/question) or just making a simple statement.

CRITICAL LANGUAGE REQUIREMENT:
You MUST output your response in the EXACT same language as the user's spoken input.
- If the user speaks/asks in Vietnamese (or if the input contains Vietnamese characters, diacritics, or looks like Vietnamese), your complete answer MUST be in high-quality, fluent, natural Vietnamese (Ti\u1EBFng Vi\u1EC7t standard). Under NO circumstances should you return an English or Chinese (Ch\u1EEF H\xE1n, "\u662F\u5728", etc.) answer or mix random foreign words for a Vietnamese query! This is extremely important to the user.
- If the user speaks/asks in English, write the answer in English.
- Avoid introducing any raw foreign/machine-translated phrases. Ensure 100% human-like phrasing. Do NOT use literal translations, Chinese helper verbs, or transliterated characters.

If it is a query/question (e.g., asking about weather, tech, news, details about anything, or requesting a summary/explanation of some topics), use Google Search grounding results to provide an engaging, clear, concise, and highly accurate answer. Keep the answer brief and natural to read out loud (max 3-4 sentences), written in high-quality spoken phrasing.
If it is not a query/question (e.g., a greeting, a simple statement, empty or random words), indicate it is not a query (isQuery: false) and give a simple friendly closing/greeting reply in the same language.

Your response must be a JSON object with the following structure:
{
  "isQuery": boolean, // true if user asks a question or requests info
  "answer": string    // accurate concise answer derived from search results, or friendly statement response
}
`;
    const userPrompt = `User said: "${text}"`;
    const hasGroq = !!process.env.GROQ_API_KEY;
    let result;
    try {
      const response = await callGeminiWithRotation(
        (ai) => ai.models.generateContent({
          model: "gemini-3.5-flash",
          contents: userPrompt,
          config: {
            systemInstruction: systemPrompt,
            tools: [{ googleSearch: {} }],
            responseMimeType: "application/json",
            responseSchema: {
              type: import_genai2.Type.OBJECT,
              properties: {
                isQuery: { type: import_genai2.Type.BOOLEAN },
                answer: { type: import_genai2.Type.STRING }
              },
              required: ["isQuery", "answer"]
            }
          }
        })
      );
      const parsed = JSON.parse(response.text || '{"isQuery": false, "answer": ""}');
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const sourcesList = chunks.map((c) => c.web).filter((w) => w && w.uri).map((w) => ({
        title: w.title || w.uri,
        uri: w.uri
      }));
      const uniqueSources = sourcesList.filter(
        (src, idx, self) => self.findIndex((s) => s.uri === src.uri) === idx
      );
      result = {
        isQuery: !!parsed.isQuery,
        answer: parsed.answer || "",
        sources: uniqueSources
      };
    } catch (geminiError) {
      if (!geminiError.message?.includes("rate-limited")) {
        console.error("[Voice Query] Gemini rotation failed. Attempting fallback if possible:", geminiError);
      }
      if (hasGroq) {
        try {
          console.log("[Voice Query] Routing fallback to Groq...");
          const groqResponse = await generateWithGroq(systemPrompt, userPrompt, true);
          const parsed = JSON.parse(groqResponse || '{"isQuery": false, "answer": ""}');
          result = {
            isQuery: !!parsed.isQuery,
            answer: parsed.answer || "",
            sources: []
          };
        } catch (groqError) {
          console.error("[Voice Query] Groq fallback also failed:", groqError);
          const friendlyError = parseGeminiError(geminiError, isVi, false);
          return res.status(500).json({ error: friendlyError });
        }
      } else {
        const friendlyError = parseGeminiError(geminiError, isVi, false);
        return res.status(500).json({ error: friendlyError });
      }
    }
    return res.json(result);
  } catch (error) {
    if (!error.message?.includes("rate-limited")) {
      console.error("Voice Query error:", error);
    }
    const isVi2 = language === "vi" || language === "vi-VN" || language === "bilingual";
    const friendlyError = parseGeminiError(error, isVi2, false);
    return res.status(500).json({ error: friendlyError });
  }
});
router4.post("/assistant-chat", async (req, res) => {
  const { history = [], message, language, userPreferences = [] } = req.body;
  const isVi = language === "vi" || language === "vi-VN" || language === "bilingual";
  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: isVi ? "Ch\u01B0a c\u1EA5u h\xECnh GEMINI_API_KEY tr\xEAn server." : "GEMINI_API_KEY is not configured on the server." });
  }
  try {
    if (!message || message.trim() === "") {
      return res.status(400).json({ error: "No message provided." });
    }
    const userPreferencesText = Array.isArray(userPreferences) && userPreferences.length > 0 ? userPreferences.map((p, idx) => `${idx + 1}. ${p}`).join("\n") : "No user preferences recorded yet.";
    const systemPrompt = `
You are CommuteCast Virtual Assistant - a professional, highly helpful, and engaging companion in a smart personalized news radio application.
Your name is CommuteCast Assistant.

CRITICAL LANGUAGE REQUIREMENT:
You MUST respond in the EXACT same language as the user's latest query or conversation context.
- If the user talks/queries in Vietnamese (or if the input contains Vietnamese characters/diacritics), you MUST answer in standard, fluent, natural, human-like Vietnamese (Ti\u1EBFng Vi\u1EC7t). Under no circumstances should you return an English answer for a Vietnamese query!
- If the user talks in English, answer in English.

FUNCTIONAL CAPABILITIES & INTENT DETECTION (ACTIONS):
You have access to several actions in the application. Analyze the user's input carefully to detect if they want you to perform any of these actions. Your JSON response MUST identify the action.

1. Create a news briefing:
   - User intent: requests to create/write/generate a new broadcast/news about a topic (e.g., "T\u1EA1o b\u1EA3n tin v\u1EC1 tr\xED tu\u1EC7 nh\xE2n t\u1EA1o", "T\u1EA1o b\u1EA3n tin th\u1EDDi ti\u1EBFt H\xE0 N\u1ED9i", "Write a news draft about tech").
   - Action JSON: {"type": "create_news", "param": "<the exact topic or subject to write about>"}

2. Add last answer to the news briefing:
   - User intent: requests to insert or add the assistant's previous/current answer, or some content, into the current briefing/script (e.g., "Th\xEAm v\xE0o k\u1ECBch b\u1EA3n", "Th\xEAm v\xE0o b\u1EA3n tin", "Add this to news", "Ch\xE8n v\xE0o b\u1EA3n tin", "L\u01B0u n\u1ED9i dung n\xE0y v\xE0o b\u1EA3n tin").
   - Action JSON: {"type": "add_to_news", "param": ""}

3. Read/Summarize RSS news:
   - User intent: requests to compile, fetch, or summarize latest RSS feeds/articles (e.g., "T\u1ED5ng h\u1EE3p tin RSS", "T\xF3m t\u1EAFt ngu\u1ED3n tin RSS", "T\xF3m t\u1EAFt RSS", "Summarize RSS", "Fetch RSS").
   - Action JSON: {"type": "read_rss", "param": ""}
   - Note: If the user simply asks to "\u0110\u1ECDc RSS" or "\u0110\u1ECDc tin RSS" (without asking to summarize or fetch), do NOT trigger this action. Instead, ask "B\u1EA1n mu\u1ED1n \u0111\u1ECDc ch\u1EE7 \u0111\u1EC1 g\xEC?" or offer suggestions, and return action "none".

4. Normal conversation/general query:
   - User intent: general conversation, greeting, "\u0110\u1ECDc RSS" (just asking what topic to read), asking a question, search query, explaining a concept.
   - Action JSON: {"type": "none", "param": ""}

USER PREFERENCE CONTEXT (HISTORICAL INTERESTS):
The user has expressed strong interest in these topics based on their offline commute news reading history:
${userPreferencesText}

Proactively recommend news or direct subjects aligned with these interests if the user asks for suggestions or recommendations (e.g., "What should I read today?", "T\xF4i n\xEAn \u0111\u1ECDc g\xEC h\xF4m nay?", "Recommend news", "Give me something interesting").

RESPONSE FORMAT MANDATE (STRICT JSON ONLY):
You MUST respond with a single JSON object. Do NOT include any markdown code fences, do NOT include any prefix or suffix, do NOT write any explanation outside the JSON.
Response Schema:
{
  "speechResponse": string, // Your conversational reply or explanation, kept highly natural, friendly, easy to read aloud (max 3-5 sentences).
  "suggestedTopics": [      // Proactively suggest 1 to 3 relevant topics to read today
    {
      "topic": string,      // A short, specific recommended topic name (e.g. "AI", "Finance", "Electric Vehicles")
      "reason": string      // A brief, personalized explanation of why you recommended it based on their interests
    }
  ],
  "action": {
    "type": "create_news" | "add_to_news" | "read_rss" | "none",
    "param": string         // Parameter for the action
  }
}
`;
    const contents = history.map((h) => ({
      role: h.role === "assistant" || h.role === "model" ? "model" : "user",
      parts: [{ text: h.content || h.text || "" }]
    }));
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });
    let result = null;
    let lastGeminiError = null;
    const candidateModels = ["gemini-3.5-flash", "gemini-3.1-flash-lite"];
    for (const modelName of candidateModels) {
      try {
        console.log(`[Assistant Chat] Attempting generation with model: ${modelName}...`);
        const response = await callGeminiWithRotation(
          (ai) => ai.models.generateContent({
            model: modelName,
            contents,
            config: {
              systemInstruction: systemPrompt,
              tools: [{ googleSearch: {} }],
              responseMimeType: "application/json",
              responseSchema: {
                type: import_genai2.Type.OBJECT,
                properties: {
                  speechResponse: { type: import_genai2.Type.STRING },
                  suggestedTopics: {
                    type: import_genai2.Type.ARRAY,
                    items: {
                      type: import_genai2.Type.OBJECT,
                      properties: {
                        topic: { type: import_genai2.Type.STRING },
                        reason: { type: import_genai2.Type.STRING }
                      },
                      required: ["topic", "reason"]
                    }
                  },
                  action: {
                    type: import_genai2.Type.OBJECT,
                    properties: {
                      type: { type: import_genai2.Type.STRING },
                      param: { type: import_genai2.Type.STRING }
                    },
                    required: ["type"]
                  }
                },
                required: ["speechResponse", "suggestedTopics", "action"]
              }
            }
          })
        );
        const parsed = JSON.parse(response.text || '{"speechResponse": "", "suggestedTopics": [], "action": {"type": "none", "param": ""}}');
        const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
        const sourcesList = chunks.map((c) => c.web).filter((w) => w && w.uri).map((w) => ({
          title: w.title || w.uri,
          uri: w.uri
        }));
        const uniqueSources = sourcesList.filter(
          (src, idx, self) => self.findIndex((s) => s.uri === src.uri) === idx
        );
        result = {
          speechResponse: parsed.speechResponse || parsed.answer || "",
          answer: parsed.speechResponse || parsed.answer || "",
          suggestedTopics: parsed.suggestedTopics || [],
          action: parsed.action || { type: "none", param: "" },
          sources: uniqueSources
        };
        break;
      } catch (err) {
        console.warn(`[Assistant Chat] Model ${modelName} failed or was rate limited:`, err.message || err);
        lastGeminiError = err;
      }
    }
    if (!result) {
      const hasGroq = !!process.env.GROQ_API_KEY;
      if (hasGroq) {
        try {
          console.log("[Assistant Chat] All Gemini models rate-limited. Trying Groq fallback...");
          const userPrompt = `History: ${JSON.stringify(history)}\\nLatest Message: "${message}"`;
          const groqResponse = await generateWithGroq(systemPrompt, userPrompt, true);
          const parsed = JSON.parse(groqResponse || '{"speechResponse": "", "suggestedTopics": [], "action": {"type": "none", "param": ""}}');
          result = {
            speechResponse: parsed.speechResponse || parsed.answer || "",
            answer: parsed.speechResponse || parsed.answer || "",
            suggestedTopics: parsed.suggestedTopics || [],
            action: parsed.action || { type: "none", param: "" },
            sources: []
          };
        } catch (groqError) {
          console.error("[Assistant Chat] Groq fallback failed as well:", groqError);
        }
      }
    }
    if (!result) {
      console.warn("[Assistant Chat] All AI endpoints failed or rate-limited. Launching local offline/rule-based backup controller...");
      const msgLower = message.toLowerCase();
      let localAction = { type: "none", param: "" };
      let localAnswer = "";
      if (msgLower.includes("t\u1EA1o b\u1EA3n tin v\u1EC1") || msgLower.includes("t\u1EA1o b\u1EA3n tin") || msgLower.includes("vi\u1EBFt b\u1EA3n tin v\u1EC1") || msgLower.includes("vi\u1EBFt b\u1EA3n tin") || msgLower.includes("l\xE0m b\u1EA3n tin")) {
        let topic = message.replace(/tạo bản tin về/i, "").replace(/tạo bản tin/i, "").replace(/viết bản tin về/i, "").replace(/viết bản tin/i, "").trim();
        localAction = { type: "create_news", param: topic || "tin t\u1EE9c m\u1EDBi nh\u1EA5t" };
        localAnswer = isVi ? `\u0110\xE3 ti\u1EBFp nh\u1EADn l\u1EC7nh t\u1EA1o b\u1EA3n tin c\u1EE7a b\u1EA1n! T\xF4i \u0111ang ti\u1EBFn h\xE0nh so\u1EA1n th\u1EA3o k\u1ECBch b\u1EA3n ph\xE1t thanh th\xF4ng minh v\u1EC1 ch\u1EE7 \u0111\u1EC1: "${topic || "tin t\u1EE9c m\u1EDBi nh\u1EA5t"}".` : `I have received your request! I am compiling a dynamic broadcast script on: "${topic || "latest news"}".`;
      } else if (msgLower.includes("create news about") || msgLower.includes("create news") || msgLower.includes("write news") || msgLower.includes("write a news")) {
        let topic = message.replace(/create news about/i, "").replace(/create news/i, "").replace(/write news about/i, "").replace(/write news/i, "").trim();
        localAction = { type: "create_news", param: topic || "latest news" };
        localAnswer = `I have received your request! I am compiling a dynamic broadcast script on: "${topic || "latest news"}".`;
      } else if (msgLower.includes("th\xEAm v\xE0o b\u1EA3n tin") || msgLower.includes("th\xEAm v\xE0o k\u1ECBch b\u1EA3n") || msgLower.includes("ch\xE8n v\xE0o b\u1EA3n tin") || msgLower.includes("l\u01B0u v\xE0o b\u1EA3n tin")) {
        localAction = { type: "add_to_news", param: "" };
        localAnswer = isVi ? "\u0110\xE3 hi\u1EC3u! T\xF4i s\u1EBD ch\xE8n tr\u1EF1c ti\u1EBFp n\u1ED9i dung th\u1EA3o lu\u1EADn ph\xEDa tr\xEAn v\xE0o k\u1ECBch b\u1EA3n b\u1EA3n tin c\u1EE7a b\u1EA1n ngay l\u1EADp t\u1EE9c." : "Understood! I will append the conversational content above to your broadcast script editor.";
      } else if (msgLower.includes("add to news") || msgLower.includes("add to script") || msgLower.includes("append to news")) {
        localAction = { type: "add_to_news", param: "" };
        localAnswer = "Understood! I will append the conversational content above to your broadcast script editor.";
      } else if (msgLower.includes("t\u1ED5ng h\u1EE3p rss") || msgLower.includes("t\u1ED5ng h\u1EE3p tin rss") || msgLower.includes("t\xF3m t\u1EAFt rss") || msgLower.includes("t\xF3m t\u1EAFt ngu\u1ED3n tin rss")) {
        localAction = { type: "read_rss", param: "" };
        localAnswer = isVi ? "\u0110ang ti\u1EBFn h\xE0nh k\u1EBFt n\u1ED1i, \u0111\u1ED3ng b\u1ED9 v\xE0 t\u1ED5ng h\u1EE3p th\xF4ng tin t\u1EEB c\xE1c ngu\u1ED3n tin RSS c\u1EE7a b\u1EA1n..." : "Connecting, syncing, and aggregating articles from your subscribed RSS channels...";
      } else if (msgLower.includes("\u0111\u1ECDc rss") || msgLower === "doc rss" || msgLower === "\u0111\u1ECDc m\u1EE5c rss" || msgLower === "\u0111\u1ECDc tin rss" || msgLower === "doc tin rss") {
        localAction = { type: "none", param: "" };
        localAnswer = isVi ? "B\u1EA1n mu\u1ED1n \u0111\u1ECDc ch\u1EE7 \u0111\u1EC1 g\xEC t\u1EEB ngu\u1ED3n tin RSS h\xF4m nay? H\xE3y ch\u1ECDn m\u1ED9t trong c\xE1c ch\u1EE7 \u0111\u1EC1 g\u1EE3i \xFD d\u01B0\u1EDBi \u0111\xE2y ho\u1EB7c g\xF5 ch\u1EE7 \u0111\u1EC1 b\u1EA1n mu\u1ED1n:" : "What topic would you like to read from your RSS feeds today? Choose one of the suggested topics below or type your own:";
      } else if (msgLower.includes("read rss") || msgLower.includes("summarize rss") || msgLower.includes("fetch rss")) {
        localAction = { type: "read_rss", param: "" };
        localAnswer = "Connecting, syncing, and aggregating articles from your subscribed RSS channels...";
      } else if (msgLower.includes("b\xE0n \u0111i\u1EC1u h\xE0nh") || msgLower.includes("v\u1EC1 trang ch\u1EE7") || msgLower.includes("v\u1EC1 home") || msgLower.includes("go to home") || msgLower.includes("navigate to home") || msgLower.includes("trang ch\u1EE7")) {
        localAction = { type: "navigate", param: "home" };
        localAnswer = isVi ? "\u0110ang chuy\u1EC3n b\u1EA1n v\u1EC1 B\xE0n \u0110i\u1EC1u H\xE0nh (Home Desk Ops) ngay l\u1EADp t\u1EE9c." : "Navigating you to the Home Desk Ops workstation immediately.";
      } else if (msgLower.includes("tr\u1EA1m s\u1EA3n xu\u1EA5t") || msgLower.includes("so\u1EA1n th\u1EA3o") || msgLower.includes("t\u1EA1o k\u1ECBch b\u1EA3n") || msgLower.includes("go to create") || msgLower.includes("navigate to create") || msgLower.includes("m\u1EDF create")) {
        localAction = { type: "navigate", param: "create" };
        localAnswer = isVi ? "\u0110ang chuy\u1EC3n b\u1EA1n sang Tr\u1EA1m S\u1EA3n Xu\u1EA5t (Production Flow) \u0111\u1EC3 bi\xEAn so\u1EA1n b\u1EA3n tin." : "Navigating you to the Production Flow workstation for script editing.";
      } else if (msgLower.includes("kho l\u01B0u tr\u1EEF") || msgLower.includes("kho d\u1EEF li\u1EC7u") || msgLower.includes("b\u1EA3n tin \u0111\xE3 l\u01B0u") || msgLower.includes("go to assets") || msgLower.includes("navigate to assets") || msgLower.includes("m\u1EDF assets")) {
        localAction = { type: "navigate", param: "assets" };
        localAnswer = isVi ? "\u0110ang chuy\u1EC3n b\u1EA1n sang Tr\u1EA1m Kho L\u01B0u Tr\u1EEF (Asset Management) \u0111\u1EC3 xem l\u1ECBch s\u1EED b\u1EA3n tin ph\xE1t thanh." : "Navigating you to the Asset Management workstation to review files.";
      } else if (msgLower.includes("c\xE0i \u0111\u1EB7t") || msgLower.includes("c\u1EA5u h\xECnh") || msgLower.includes("go to settings") || msgLower.includes("navigate to settings") || msgLower.includes("m\u1EDF settings")) {
        localAction = { type: "navigate", param: "settings" };
        localAnswer = isVi ? "\u0110ang chuy\u1EC3n b\u1EA1n sang m\u1EE5c C\u1EA5u H\xECnh (System Config) \u0111\u1EC3 thi\u1EBFt l\u1EADp th\xF4ng s\u1ED1." : "Navigating you to the System Config station for preferences setup.";
      } else if (msgLower.includes("ph\xE1t") || msgLower.includes("nghe") || msgLower.includes("play") || msgLower.includes("d\u1EEBng") || msgLower.includes("pause") || msgLower.includes("t\u1EA1m d\u1EEBng") || msgLower.includes("m\u1EDF b\u1EA3n tin")) {
        localAction = { type: "toggle_play", param: "" };
        localAnswer = isVi ? "\u0110\xE3 k\xEDch ho\u1EA1t l\u1EC7nh \u0111i\u1EC1u khi\u1EC3n ph\xE1t thanh! \u0110ang chuy\u1EC3n \u0111\u1ED5i tr\u1EA1ng th\xE1i ph\xE1t/t\u1EA1m d\u1EEBng c\u1EE7a tr\xECnh ph\xE1t nh\u1EA1c." : "Audio control triggered! Toggling the play/pause state on the media player.";
      } else if (msgLower.includes("giao di\u1EC7n") || msgLower.includes("\u0111\u1ED5i m\xE0u") || msgLower.includes("s\xE1ng t\u1ED1i") || msgLower.includes("dark mode") || msgLower.includes("light mode") || msgLower.includes("theme")) {
        localAction = { type: "toggle_theme", param: "" };
        localAnswer = isVi ? "\u0110ang \u0111\u1ED5i ch\u1EBF \u0111\u1ED9 m\xE0u giao di\u1EC7n s\xE1ng/t\u1ED1i \u0111\u1EC3 ph\xF9 h\u1EE3p v\u1EDBi m\xF4i tr\u01B0\u1EDDng l\xE0m vi\u1EC7c c\u1EE7a b\u1EA1n." : "Toggling light/dark theme to match your working environment.";
      } else if (msgLower.includes("l\xE1i xe") || msgLower.includes("\xF4 t\xF4") || msgLower.includes("driving mode") || msgLower.includes("car mode") || msgLower.includes("\xF4-t\xF4")) {
        localAction = { type: "toggle_driving", param: "" };
        localAnswer = isVi ? "\u0110ang thay \u0111\u1ED5i tr\u1EA1ng th\xE1i Ch\u1EBF \u0110\u1ED9 L\xE1i Xe (Driving HUD) \u0111\u1EC3 t\u1ED1i \u01B0u vi\u1EC7c di chuy\u1EC3n." : "Toggling the Car Driving HUD mode for safe navigation during your commute.";
      } else if (msgLower.includes("x\xF3a cache") || msgLower.includes("d\u1ECDn d\u1EB9p") || msgLower.includes("clear cache") || msgLower.includes("x\xF3a b\u1ED9 nh\u1EDB \u0111\u1EC7m") || msgLower.includes("l\xE0m s\u1EA1ch")) {
        localAction = { type: "clear_cache", param: "" };
        localAnswer = isVi ? "\u{1F9F9} \u0110ang ti\u1EBFn h\xE0nh x\xF3a s\u1EA1ch b\u1ED9 nh\u1EDB \u0111\u1EC7m h\u1EC7 th\u1ED1ng v\xE0 d\u1ECDn d\u1EB9p c\xE1c t\u1EC7p t\u1EA1m th\u1EDDi..." : "\u{1F9F9} Purging system storage cache and cleaning up temporary files...";
      } else {
        localAnswer = isVi ? `Ch\xE0o b\u1EA1n! M\xE1y ch\u1EE7 AI hi\u1EC7n \u0111ang ch\u1ECBu t\u1EA3i l\u01B0\u1EE3ng y\xEAu c\u1EA7u r\u1EA5t l\u1EDBn t\u1EEB c\xE1c kh\xF3a API mi\u1EC5n ph\xED (Rate Limit). T\xF4i \u0111ang t\u1EF1 \u0111\u1ED9ng b\u1EADt ch\u1EBF \u0111\u1ED9 D\u1EF1 ph\xF2ng Th\xF4ng minh (Smart Fallback Mode) \u0111\u1EC3 duy tr\xEC ho\u1EA1t \u0111\u1ED9ng t\u1ED1t nh\u1EA5t.

B\u1EA1n ho\xE0n to\xE0n c\xF3 th\u1EC3 ti\u1EBFp t\u1EE5c ra l\u1EC7nh tr\u1EF1c ti\u1EBFp b\u1EB1ng ti\u1EBFng Vi\u1EC7t v\u1EDBi c\xE1c c\xFA ph\xE1p sau ho\u1EB7c click c\xE1c ph\xEDm \u0111i\u1EC1u khi\u1EC3n t\xE1c v\u1EE5 tr\u1EF1c ti\u1EBFp:
- "T\u1EA1o b\u1EA3n tin v\u1EC1 [ch\u1EE7 \u0111\u1EC1]" (V\xED d\u1EE5: T\u1EA1o b\u1EA3n tin v\u1EC1 C\xF4ng ngh\u1EC7 xanh)
- "T\u1ED5ng h\u1EE3p tin RSS" \u0111\u1EC3 qu\xE9t v\xE0 t\u1ED5ng h\u1EE3p t\u1EF1 \u0111\u1ED9ng c\xE1c lu\u1ED3ng RSS c\u1EE7a b\u1EA1n.
- "Ph\xE1t b\u1EA3n tin" \u0111\u1EC3 b\u1EADt/d\u1EEBng tr\xECnh nghe nh\u1EA1c.
- "V\u1EC1 tr\u1EA1m s\u1EA3n xu\u1EA5t" \u0111\u1EC3 chuy\u1EC3n sang trang bi\xEAn so\u1EA1n k\u1ECBch b\u1EA3n.
- "\u0110\u1ED5i giao di\u1EC7n" ho\u1EB7c "L\xE1i xe".` : `Hi! The AI server is currently handling extreme traffic volumes on free API tiers (Rate Limit). I have entered Smart Fallback Mode to keep your assistant responsive.

You can continue driving actions directly with these quick text triggers or task buttons:
- "Create news about [topic]" (e.g., Create news about Space Exploration)
- "Summarize RSS" to aggregate and summarize your feed subscriptions.
- "Play audio" to toggle current playback.
- "Navigate to production" to change screens.
- "Toggle theme" or "Toggle driving mode".`;
      }
      result = {
        speechResponse: localAnswer,
        answer: localAnswer,
        suggestedTopics: msgLower.includes("rss") || msgLower === "\u0111\u1ECDc rss" ? [
          { topic: "C\xF4ng ngh\u1EC7", reason: isVi ? "C\u1EADp nh\u1EADt c\xE1c tin t\u1EE9c c\xF4ng ngh\u1EC7 m\u1EDBi nh\u1EA5t" : "Update latest tech news" },
          { topic: "Kinh doanh", reason: isVi ? "Theo d\xF5i chuy\u1EC3n \u0111\u1ED9ng th\u1ECB tr\u01B0\u1EDDng t\xE0i ch\xEDnh" : "Follow financial market trends" },
          { topic: "Khoa h\u1ECDc", reason: isVi ? "Kh\xE1m ph\xE1 c\xE1c nghi\xEAn c\u1EE9u m\u1EDBi v\xE0 kh\xF4ng gian" : "Explore new research and space" }
        ] : [],
        action: localAction,
        sources: []
      };
    }
    return res.json(result);
  } catch (error) {
    console.error("Assistant Chat error:", error);
    const friendlyError = parseGeminiError(error, isVi, false);
    return res.status(500).json({ error: friendlyError });
  }
});
var assistant_routes_default = router4;

// src/server/routes/mission.routes.ts
var import_express5 = __toESM(require("express"), 1);
var import_uuid2 = require("uuid");

// src/utils/logger.ts
var StructuredLogger = class {
  constructor() {
    this.logBuffer = [];
    this.maxBufferSize = 200;
  }
  formatLog(level, message, context) {
    const entry = {
      level,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      message,
      context
    };
    this.logBuffer.push(entry);
    if (this.logBuffer.length > this.maxBufferSize) {
      this.logBuffer.shift();
    }
    return entry;
  }
  info(message, context) {
    this.formatLog("INFO" /* INFO */, message, context);
    console.log(
      `%c[INFO] %c[${(/* @__PURE__ */ new Date()).toLocaleTimeString()}] %c${message}`,
      "color: #06b6d4; font-weight: bold;",
      "color: #64748b;",
      "color: inherit;",
      context !== void 0 ? context : ""
    );
  }
  warn(message, context) {
    this.formatLog("WARN" /* WARN */, message, context);
    console.warn(
      `%c[WARN] %c[${(/* @__PURE__ */ new Date()).toLocaleTimeString()}] %c${message}`,
      "color: #f59e0b; font-weight: bold;",
      "color: #64748b;",
      "color: #f59e0b;",
      context !== void 0 ? context : ""
    );
  }
  error(message, context) {
    this.formatLog("ERROR" /* ERROR */, message, context);
    console.error(
      `%c[ERROR] %c[${(/* @__PURE__ */ new Date()).toLocaleTimeString()}] %c${message}`,
      "color: #ef4444; font-weight: bold;",
      "color: #64748b;",
      "color: #ef4444; font-weight: bold;",
      context !== void 0 ? context : ""
    );
  }
  fatal(message, context) {
    this.formatLog("FATAL" /* FATAL */, message, context);
    console.error(
      `%c[FATAL] %c[${(/* @__PURE__ */ new Date()).toLocaleTimeString()}] %c${message}`,
      "background: #ef4444; color: white; font-weight: bold; padding: 1px 4px; border-radius: 3px;",
      "color: #64748b;",
      "color: #ef4444; font-weight: bold; text-decoration: underline;",
      context !== void 0 ? context : ""
    );
  }
  getLogs() {
    return [...this.logBuffer];
  }
  clearLogs() {
    this.logBuffer = [];
  }
};
var logger = new StructuredLogger();

// src/server/routes/mission.routes.ts
var router5 = import_express5.default.Router();
async function authMiddleware(req, res, next) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return res.status(500).json({ error: "Supabase client not configured" });
  }
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "No authorization header" });
  }
  try {
    const token2 = authHeader.replace("Bearer ", "");
    const { data: { user }, error } = await supabase.auth.getUser(token2);
    if (error || !user) {
      return res.status(401).json({ error: "Invalid token" });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Authentication failed" });
  }
}
function buildQuery(supabase, filter, userId) {
  let query = supabase.from("missions").select("*");
  if (userId) {
    query = query.eq("user_id", userId);
  }
  if (filter?.status) {
    const statuses = Array.isArray(filter.status) ? filter.status : [filter.status];
    query = query.in("status", statuses);
  }
  if (filter?.type) {
    const types = Array.isArray(filter.type) ? filter.type : [filter.type];
    query = query.in("type", types);
  }
  if (filter?.priority) {
    const priorities = Array.isArray(filter.priority) ? filter.priority : [filter.priority];
    query = query.in("priority", priorities);
  }
  if (filter?.language) {
    query = query.eq("language", filter.language);
  }
  if (filter?.topic) {
    query = query.ilike("topic", `%${filter.topic}%`);
  }
  if (filter?.fromDate) {
    query = query.gte("created_at", filter.fromDate);
  }
  if (filter?.toDate) {
    query = query.lte("created_at", filter.toDate);
  }
  if (filter?.tags?.length) {
    query = query.contains("tags", filter.tags);
  }
  if (filter?.sortBy) {
    const sortField = filter.sortBy === "createdAt" ? "created_at" : filter.sortBy === "updatedAt" ? "updated_at" : filter.sortBy;
    query = query.order(sortField, {
      ascending: filter.sortOrder === "asc"
    });
  } else {
    query = query.order("created_at", { ascending: false });
  }
  if (filter?.limit !== void 0) {
    query = query.range(
      filter.offset || 0,
      (filter.offset || 0) + filter.limit - 1
    );
  }
  return query;
}
router5.get("/", authMiddleware, async (req, res) => {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) {
      return res.status(500).json({ error: "Supabase client not configured" });
    }
    const filter = {
      status: req.query.status,
      type: req.query.type,
      priority: req.query.priority,
      language: req.query.language,
      topic: req.query.topic,
      fromDate: req.query.fromDate,
      toDate: req.query.toDate,
      tags: req.query.tags ? req.query.tags.split(",") : void 0,
      limit: req.query.limit ? parseInt(req.query.limit) : 50,
      offset: req.query.offset ? parseInt(req.query.offset) : 0,
      sortBy: req.query.sortBy,
      sortOrder: req.query.sortOrder
    };
    const query = buildQuery(supabase, filter, req.user.id);
    const { data, error } = await query;
    if (error) {
      logger.error("[Mission API] Failed to get missions:", error);
      return res.status(500).json({ error: error.message });
    }
    const missions = (data || []).map((m) => ({
      id: m.id,
      name: m.name,
      type: m.type,
      status: m.status,
      priority: m.priority,
      language: m.language,
      topic: m.topic,
      config: m.config,
      steps: m.steps || [],
      result: m.result,
      confidence: m.confidence || 0,
      totalSteps: m.total_steps || 0,
      completedSteps: m.completed_steps || 0,
      createdAt: m.created_at,
      updatedAt: m.updated_at,
      startedAt: m.started_at,
      completedAt: m.completed_at,
      userId: m.user_id,
      tags: m.tags || [],
      metadata: m.metadata
    }));
    const countQuery = buildQuery(supabase, { ...filter, limit: void 0, offset: void 0 }, req.user.id);
    const { count, error: countError } = await countQuery.select("*", { count: "exact", head: true });
    return res.json({
      data: missions,
      total: count || 0,
      limit: filter.limit || 50,
      offset: filter.offset || 0
    });
  } catch (err) {
    logger.error("[Mission API] GET /missions error:", err);
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
});
router5.get("/:id", authMiddleware, async (req, res) => {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) {
      return res.status(500).json({ error: "Supabase client not configured" });
    }
    const { id } = req.params;
    const { data, error } = await supabase.from("missions").select("*").eq("id", id).eq("user_id", req.user.id).maybeSingle();
    if (error) {
      logger.error(`[Mission API] Failed to get mission ${id}:`, error);
      return res.status(500).json({ error: error.message });
    }
    if (!data) {
      return res.status(404).json({ error: "Mission not found" });
    }
    const mission = {
      id: data.id,
      name: data.name,
      type: data.type,
      status: data.status,
      priority: data.priority,
      language: data.language,
      topic: data.topic,
      config: data.config,
      steps: data.steps || [],
      result: data.result,
      confidence: data.confidence || 0,
      totalSteps: data.total_steps || 0,
      completedSteps: data.completed_steps || 0,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
      startedAt: data.started_at,
      completedAt: data.completed_at,
      userId: data.user_id,
      tags: data.tags || [],
      metadata: data.metadata
    };
    return res.json(mission);
  } catch (err) {
    logger.error(`[Mission API] GET /missions/${req.params.id} error:`, err);
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
});
router5.post("/", authMiddleware, async (req, res) => {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) {
      return res.status(500).json({ error: "Supabase client not configured" });
    }
    const dto = req.body;
    if (!dto.name || !dto.type) {
      return res.status(400).json({ error: "name and type are required" });
    }
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const mission = {
      id: (0, import_uuid2.v4)(),
      user_id: req.user.id,
      name: dto.name,
      type: dto.type,
      status: "idle",
      priority: dto.priority || "medium",
      language: dto.language || "vi",
      topic: dto.topic || null,
      config: {
        name: dto.name,
        type: dto.type,
        priority: dto.priority || "medium",
        language: dto.language || "vi",
        topic: dto.topic || null,
        feedIds: dto.feedIds || [],
        articleIds: dto.articleIds || [],
        options: dto.options || {
          voice: "vi-HN",
          tone: "conversational",
          emotion: "cheerful",
          publishPodcast: false,
          aiMode: "balanced"
        }
      },
      steps: [],
      result: null,
      confidence: 0,
      total_steps: 0,
      completed_steps: 0,
      created_at: now,
      updated_at: now,
      started_at: null,
      completed_at: null,
      tags: [],
      metadata: {}
    };
    const { data, error } = await supabase.from("missions").insert(mission).select().single();
    if (error) {
      logger.error("[Mission API] Failed to create mission:", error);
      return res.status(500).json({ error: error.message });
    }
    logger.info(`[Mission API] Created mission ${data.id} for user ${req.user.id}`);
    return res.status(201).json(data);
  } catch (err) {
    logger.error("[Mission API] POST /missions error:", err);
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
});
router5.put("/:id", authMiddleware, async (req, res) => {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) {
      return res.status(500).json({ error: "Supabase client not configured" });
    }
    const { id } = req.params;
    const dto = req.body;
    const { data: existing, error: getError } = await supabase.from("missions").select("*").eq("id", id).eq("user_id", req.user.id).single();
    if (getError || !existing) {
      return res.status(404).json({ error: "Mission not found" });
    }
    const updates = {
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    if (dto.name !== void 0) updates.name = dto.name;
    if (dto.status !== void 0) updates.status = dto.status;
    if (dto.priority !== void 0) updates.priority = dto.priority;
    if (dto.tags !== void 0) updates.tags = dto.tags;
    if (dto.metadata !== void 0) updates.metadata = dto.metadata;
    if (dto.config !== void 0) {
      updates.config = { ...existing.config, ...dto.config };
    }
    if (dto.steps !== void 0) {
      updates.steps = dto.steps;
      updates.total_steps = dto.steps.length;
      updates.completed_steps = dto.steps.filter(
        (s) => s.status === "success" || s.status === "skipped"
      ).length;
    }
    if (dto.result !== void 0) {
      updates.result = dto.result;
    }
    if (dto.confidence !== void 0) {
      updates.confidence = dto.confidence;
    }
    if (updates.status === "running" && !existing.started_at) {
      updates.started_at = (/* @__PURE__ */ new Date()).toISOString();
    }
    if (updates.status === "completed" && !existing.completed_at) {
      updates.completed_at = (/* @__PURE__ */ new Date()).toISOString();
    }
    const { data, error } = await supabase.from("missions").update(updates).eq("id", id).eq("user_id", req.user.id).select().single();
    if (error) {
      logger.error(`[Mission API] Failed to update mission ${id}:`, error);
      return res.status(500).json({ error: error.message });
    }
    logger.info(`[Mission API] Updated mission ${id} for user ${req.user.id}`);
    return res.json(data);
  } catch (err) {
    logger.error(`[Mission API] PUT /missions/${req.params.id} error:`, err);
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
});
router5.post("/:id/step", authMiddleware, async (req, res) => {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) {
      return res.status(500).json({ error: "Supabase client not configured" });
    }
    const { id } = req.params;
    const step = req.body;
    if (!step.event || !step.actor) {
      return res.status(400).json({ error: "event and actor are required" });
    }
    const { data: existing, error: getError } = await supabase.from("missions").select("*").eq("id", id).eq("user_id", req.user.id).single();
    if (getError || !existing) {
      return res.status(404).json({ error: "Mission not found" });
    }
    const newStep = {
      id: (0, import_uuid2.v4)(),
      timestamp: step.timestamp || (/* @__PURE__ */ new Date()).toISOString(),
      actor: step.actor,
      event: step.event,
      duration: step.duration || 0,
      status: step.status || "pending",
      retryCount: step.retryCount || 0,
      correlationId: step.correlationId || `${id}-${Date.now()}`,
      schemaVersion: step.schemaVersion || "1.0",
      error: step.error || null,
      metadata: step.metadata || {}
    };
    const steps = [...existing.steps || [], newStep];
    const totalSteps = steps.length;
    const completedSteps = steps.filter(
      (s) => s.status === "success" || s.status === "skipped"
    ).length;
    const confidence = totalSteps > 0 ? Math.round(completedSteps / totalSteps * 100) : 0;
    let status = existing.status;
    if (step.status === "in_progress" && status === "idle") {
      status = "running";
    }
    if (steps.every((s) => s.status === "success" || s.status === "skipped" || s.status === "failed")) {
      const hasFailure = steps.some((s) => s.status === "failed");
      status = hasFailure ? "failed" : "completed";
    }
    const updates = {
      steps,
      total_steps: totalSteps,
      completed_steps: completedSteps,
      confidence,
      status,
      updated_at: (/* @__PURE__ */ new Date()).toISOString(),
      ...status === "running" && !existing.started_at ? { started_at: (/* @__PURE__ */ new Date()).toISOString() } : {},
      ...status === "completed" && !existing.completed_at ? { completed_at: (/* @__PURE__ */ new Date()).toISOString() } : {}
    };
    const { data, error } = await supabase.from("missions").update(updates).eq("id", id).eq("user_id", req.user.id).select().single();
    if (error) {
      logger.error(`[Mission API] Failed to add step to mission ${id}:`, error);
      return res.status(500).json({ error: error.message });
    }
    logger.info(`[Mission API] Added step to mission ${id} for user ${req.user.id}`);
    return res.json(data);
  } catch (err) {
    logger.error(`[Mission API] POST /missions/${req.params.id}/step error:`, err);
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
});
router5.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) {
      return res.status(500).json({ error: "Supabase client not configured" });
    }
    const { id } = req.params;
    const { error } = await supabase.from("missions").delete().eq("id", id).eq("user_id", req.user.id);
    if (error) {
      logger.error(`[Mission API] Failed to delete mission ${id}:`, error);
      return res.status(500).json({ error: error.message });
    }
    logger.info(`[Mission API] Deleted mission ${id} for user ${req.user.id}`);
    return res.json({ success: true });
  } catch (err) {
    logger.error(`[Mission API] DELETE /missions/${req.params.id} error:`, err);
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
});
router5.post("/:id/abort", authMiddleware, async (req, res) => {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) {
      return res.status(500).json({ error: "Supabase client not configured" });
    }
    const { id } = req.params;
    const { data, error } = await supabase.from("missions").update({
      status: "aborted",
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    }).eq("id", id).eq("user_id", req.user.id).select().single();
    if (error) {
      logger.error(`[Mission API] Failed to abort mission ${id}:`, error);
      return res.status(500).json({ error: error.message });
    }
    if (!data) {
      return res.status(404).json({ error: "Mission not found" });
    }
    logger.info(`[Mission API] Aborted mission ${id} for user ${req.user.id}`);
    return res.json(data);
  } catch (err) {
    logger.error(`[Mission API] POST /missions/${req.params.id}/abort error:`, err);
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
});
router5.get("/stats", authMiddleware, async (req, res) => {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) {
      return res.status(500).json({ error: "Supabase client not configured" });
    }
    const { data, error } = await supabase.from("missions").select("status, type, priority, confidence").eq("user_id", req.user.id);
    if (error) {
      logger.error("[Mission API] Failed to get mission stats:", error);
      return res.status(500).json({ error: error.message });
    }
    const stats = {
      total: data.length,
      byStatus: {},
      byType: {},
      byPriority: {},
      avgConfidence: 0,
      completed: 0,
      running: 0,
      failed: 0
    };
    let totalConfidence = 0;
    for (const m of data) {
      stats.byStatus[m.status] = (stats.byStatus[m.status] || 0) + 1;
      stats.byType[m.type] = (stats.byType[m.type] || 0) + 1;
      stats.byPriority[m.priority] = (stats.byPriority[m.priority] || 0) + 1;
      totalConfidence += m.confidence || 0;
      if (m.status === "completed") stats.completed++;
      if (m.status === "running" || m.status === "initializing") stats.running++;
      if (m.status === "failed") stats.failed++;
    }
    stats.avgConfidence = data.length > 0 ? Math.round(totalConfidence / data.length) : 0;
    return res.json(stats);
  } catch (err) {
    logger.error("[Mission API] GET /missions/stats error:", err);
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
});
var mission_routes_default = router5;

// server.ts
process.env.TZ = "Asia/Ho_Chi_Minh";
import_dotenv.default.config();
var app2 = (0, import_express6.default)();
app2.set("trust proxy", 1);
var PORT = 3e3;
var allowedOrigins = new Set([
  process.env.APP_URL?.trim(),
  "https://campucastv.onrender.com",
  "https://campucastv1.up.railway.app",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "http://localhost:5173"
].filter(Boolean));
var corsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      callback(null, true);
      return;
    }
    const isLocalhost = origin.includes("localhost") || origin.includes("127.0.0.1") || origin.includes("::1");
    const isWhitelisted = allowedOrigins.has(origin) || allowedOrigins.has(origin + "/");
    if (!isWhitelisted && !isLocalhost && process.env.NODE_ENV === "production") {
      console.log(`[CORS] Rejected origin: ${origin}`);
    }
    if (isLocalhost || isWhitelisted || process.env.NODE_ENV !== "production" || process.env.VITEST) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};
app2.use((0, import_cors.default)(corsOptions));
app2.use((0, import_helmet.default)({
  contentSecurityPolicy: false,
  // Ensure we don't break complex SPA media/scripts
  crossOriginEmbedderPolicy: false,
  frameguard: false
  // Must be false to allow AI Studio preview iframe to load
}));
var resourceLimiter = (0, import_express_rate_limit.rateLimit)({
  windowMs: 60 * 1e3,
  // 1 minute
  max: 20,
  message: { error: "Too many requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: false
});
var apiLimiter = (0, import_express_rate_limit.rateLimit)({
  windowMs: 60 * 1e3,
  // 1 minute
  max: 500,
  message: { error: "Too many API requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: false
});
app2.use("/api/summarize", resourceLimiter);
app2.use("/api/voice-query", resourceLimiter);
app2.use("/api/assistant-chat", resourceLimiter);
app2.use("/api/voice-token", resourceLimiter);
app2.use("/api/", apiLimiter);
app2.use(import_express6.default.json({ limit: "50mb" }));
app2.use(import_express6.default.urlencoded({ limit: "50mb", extended: true }));
app2.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: (/* @__PURE__ */ new Date()).toISOString() });
});
var SHARED_BRIEFINGS_JSON_PATH = import_path5.default.join(process.cwd(), "shared-briefings.json");
var cachedSharedBriefingsInMem = null;
async function loadSharedBriefingsFromSupabaseAsync() {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return [];
  }
  try {
    let rawData = null;
    let downloadErr = null;
    try {
      const { data, error } = await supabase.storage.from("podcast-audio").download("metadata/shared-briefings.json");
      if (!error && data) {
        rawData = data;
      } else {
        downloadErr = error;
      }
    } catch (err) {
      downloadErr = err;
    }
    if (rawData) {
      const text = await rawData.text();
      const briefings = JSON.parse(text);
      if (Array.isArray(briefings)) {
        console.log(`[Share - Supabase] Successfully fetched shared briefings from Supabase Storage.`);
        try {
          import_fs5.default.writeFileSync(SHARED_BRIEFINGS_JSON_PATH, JSON.stringify(briefings, null, 2));
        } catch (e) {
        }
        return briefings;
      }
    }
    console.log("[Share - Supabase] No shared briefings found or failed to load. Returning empty.");
    return [];
  } catch (err) {
    console.error("[Share - Supabase] Failed to download shared briefings:", err.message || err);
    return [];
  }
}
async function saveSharedBriefingsToSupabaseAsync(briefings) {
  const supabase = getSupabaseClient();
  if (!supabase) return;
  try {
    console.log("[Share - Supabase] Syncing shared briefings to Supabase Cloud Storage...");
    const fileBuffer = Buffer.from(JSON.stringify(briefings, null, 2));
    const uploadResult = await supabase.storage.from("podcast-audio").upload("metadata/shared-briefings.json", fileBuffer, {
      contentType: "application/json",
      upsert: true
    });
    if (uploadResult.error) {
      console.warn(`[Share - Supabase] Sync failed: ${uploadResult.error.message}.`);
    } else {
      console.log("[Share - Supabase] Shared briefings synchronized successfully.");
    }
  } catch (err) {
    console.error("[Share - Supabase] Unexpected error uploading shared briefings:", err.message || err);
  }
}
async function getSharedBriefings() {
  if (cachedSharedBriefingsInMem) {
    return cachedSharedBriefingsInMem;
  }
  if (import_fs5.default.existsSync(SHARED_BRIEFINGS_JSON_PATH)) {
    try {
      const data = import_fs5.default.readFileSync(SHARED_BRIEFINGS_JSON_PATH, "utf-8");
      cachedSharedBriefingsInMem = JSON.parse(data);
      loadSharedBriefingsFromSupabaseAsync().then((cloudBrefs2) => {
        if (cloudBrefs2 && cloudBrefs2.length > 0) {
          cachedSharedBriefingsInMem = cloudBrefs2;
        }
      });
      return cachedSharedBriefingsInMem || [];
    } catch (e) {
      console.error("Failed to parse local shared-briefings.json:", e);
    }
  }
  const cloudBrefs = await loadSharedBriefingsFromSupabaseAsync();
  cachedSharedBriefingsInMem = cloudBrefs;
  return cloudBrefs;
}
app2.post("/api/share", async (req, res) => {
  try {
    const { briefing } = req.body;
    if (!briefing || !briefing.id) {
      return res.status(400).json({ error: "No valid briefing provided." });
    }
    const id = briefing.id;
    const briefingsList = await getSharedBriefings();
    const existingIndex = briefingsList.findIndex((item) => item.id === id);
    if (existingIndex > -1) {
      briefingsList[existingIndex] = briefing;
    } else {
      briefingsList.push(briefing);
    }
    import_fs5.default.writeFileSync(SHARED_BRIEFINGS_JSON_PATH, JSON.stringify(briefingsList, null, 2));
    saveSharedBriefingsToSupabaseAsync(briefingsList).catch((err) => {
      console.error("Failed to sync shared briefings to Supabase in background:", err);
    });
    return res.json({ success: true, briefingId: id });
  } catch (error) {
    console.error("Failed to save shared briefing:", error);
    return res.status(500).json({ error: "Failed to save shared briefing." });
  }
});
app2.get("/api/share/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const briefingsList = await getSharedBriefings();
    const briefing = briefingsList.find((item) => item.id === id);
    if (!briefing) {
      return res.status(404).json({ error: "Shared briefing not found." });
    }
    return res.json({ success: true, briefing });
  } catch (error) {
    console.error("Failed to get shared briefing:", error);
    return res.status(500).json({ error: "Failed to load shared briefing." });
  }
});
var voiceTokens = /* @__PURE__ */ new Map();
var wsConnectionTracker = /* @__PURE__ */ new Map();
function isWsRateLimited(ip) {
  const now = Date.now();
  const limitWindow = 60 * 1e3;
  const maxConnections = 20;
  const record = wsConnectionTracker.get(ip);
  if (!record || now > record.resetTime) {
    wsConnectionTracker.set(ip, { count: 1, resetTime: now + limitWindow });
    return false;
  }
  if (record.count >= maxConnections) {
    return true;
  }
  record.count++;
  return false;
}
if (typeof global !== "undefined" && !process.env.VITEST) {
  setInterval(() => {
    const now = Date.now();
    for (const [tok, expiry] of voiceTokens.entries()) {
      if (now > expiry) {
        voiceTokens.delete(tok);
      }
    }
  }, 60 * 1e3);
}
app2.post("/api/voice-token", (req, res) => {
  const token2 = import_crypto2.default.randomBytes(32).toString("hex");
  const expiry = Date.now() + 5 * 60 * 1e3;
  voiceTokens.set(token2, expiry);
  res.json({ token: token2 });
});
app2.post("/api/summarize", async (req, res) => {
  const { content, preferences } = req.body;
  const language = preferences?.language || req.body?.language || "en";
  const isVi = language === "vi" || language === "bilingual";
  console.log("[Summarize] ==== LANGUAGE DEBUG ====");
  console.log("[Summarize] language received:", language);
  console.log("[Summarize] isVi:", isVi);
  console.log("[Summarize] Full preferences:", JSON.stringify(preferences, null, 2));
  try {
    if (!content || content.trim() === "") {
      return res.status(400).json({ error: "No news articles content provided." });
    }
    const targetDuration = preferences?.targetDuration || "medium";
    const tone = preferences?.tone || "conversational";
    const focus = preferences?.focus || "general overview";
    const commuteType = preferences?.commuteType || "driving";
    const customInstructions = preferences?.customInstructions || "";
    const aiMode = preferences?.aiMode || "rewrite";
    let aiModeInstructions = "";
    if (language === "vi") {
      if (aiMode === "rewrite") {
        aiModeInstructions = `
[AI MODE: REWRITE]
- M\u1EE5c ti\xEAu ch\xEDnh: Vi\u1EBFt l\u1EA1i (Rewrite) to\xE0n b\u1ED9 tin t\u1EE9c m\u1ED9t c\xE1ch m\u1EA1ch l\u1EA1c, l\xF4i cu\u1ED1n v\xE0 m\u01B0\u1EE3t m\xE0 nh\u1EA5t. \u0110\u1EA3m b\u1EA3o ng\xF4n t\u1EEB l\u01B0u lo\xE1t, t\u1EF1 nhi\xEAn nh\u01B0 l\u1EDDi n\xF3i tr\u1EF1c ti\u1EBFp.
- H\xE3y t\u1EADp trung v\xE0o vi\u1EC7c l\xE0m cho c\xE2u t\u1EEB tr\u1EDF n\xEAn h\u1EA5p d\u1EABn, s\u1EED d\u1EE5ng c\xE1c ph\xE9p li\xEAn k\u1EBFt c\xE2u uy\u1EC3n chuy\u1EC3n v\xE0 t\u1EEB v\u1EF1ng l\xF4i cu\u1ED1n ng\u01B0\u1EDDi nghe.`;
      } else if (aiMode === "fact_check") {
        aiModeInstructions = `
[AI MODE: FACT CHECK]
- M\u1EE5c ti\xEAu ch\xEDnh: V\u1EEBa t\u1ED5ng h\u1EE3p tin t\u1EE9c v\u1EEBa th\u1EF1c hi\u1EC7n nhi\u1EC7m v\u1EE5 ki\u1EC3m ch\u1EE9ng s\u1EF1 th\u1EADt (fact-checking). 
- Trong m\u1ED7i ch\u01B0\u01A1ng, n\u1EBFu c\xF3 b\u1EA5t k\u1EF3 th\xF4ng tin n\xE0o c\xF2n m\u01A1 h\u1ED3, ph\xF3ng \u0111\u1EA1i, g\xE2y tranh c\xE3i ho\u1EB7c c\u1EA7n l\xE0m r\xF5, b\u1EA1n PH\u1EA2I ph\xE2n t\xEDch, ki\u1EC3m ch\u1EE9ng v\xE0 n\xEAu r\xF5 s\u1EF1 th\u1EADt d\u1EF1a tr\xEAn ki\u1EBFn th\u1EE9c c\u1EE7a b\u1EA1n, \u0111\xEDnh ch\xEDnh ho\u1EB7c cung c\u1EA5p th\xEAm th\xF4ng tin c\u1EADp nh\u1EADt m\u1ED9t c\xE1ch kh\xE1ch quan v\xE0 l\u1ECBch s\u1EF1 trong l\u1EDDi b\xECnh k\u1ECBch b\u1EA3n ('scriptText').`;
      } else if (aiMode === "detect_duplicate") {
        aiModeInstructions = `
[AI MODE: DETECT DUPLICATE]
- M\u1EE5c ti\xEAu ch\xEDnh: Ph\xE2n t\xEDch k\u1EF9 c\xE1c ngu\u1ED3n tin v\xE0 ph\xE1t hi\u1EC7n c\xE1c chi ti\u1EBFt ho\u1EB7c s\u1EF1 ki\u1EC7n tr\xF9ng l\u1EB7p.
- H\xE3y gom nh\xF3m ch\xFAng l\u1EA1i v\xE0 lo\u1EA1i b\u1ECF ho\xE0n to\xE0n c\xE1c th\xF4ng tin th\u1EEBa th\xE3i ho\u1EB7c tr\xF9ng l\u1EB7p gi\u1EEFa c\xE1c b\xE0i b\xE1o th\xF4. T\u1EADp trung bi\xEAn k\u1ECBch ('scriptText') \u0111\u1ED9c quy\u1EC1n v\xE0o vi\u1EC7c t\u1ED5ng h\u1EE3p v\xE0 tr\xECnh b\xE0y c\xE1c kh\xEDa c\u1EA1nh \u0111\u1ED9c nh\u1EA5t, m\u1EDBi m\u1EBB nh\u1EA5t c\u1EE7a t\u1EEBng c\xE2u chuy\u1EC7n \u0111\u1EC3 ng\u01B0\u1EDDi nghe kh\xF4ng b\u1ECB nghe l\u1EB7p l\u1EA1i m\u1ED9t s\u1EF1 vi\u1EC7c.`;
      } else if (aiMode === "podcast_style") {
        aiModeInstructions = `
[AI MODE: PODCAST STYLE]
- M\u1EE5c ti\xEAu ch\xEDnh: Bi\xEAn so\u1EA1n k\u1ECBch b\u1EA3n theo phong c\xE1ch hai ng\u01B0\u1EDDi d\u1EABn ch\u01B0\u01A1ng tr\xECnh \u0111\u1ED1i tho\u1EA1i (Podcast Co-hosts) c\u1EF1c k\u1EF3 s\u1ED1ng \u0111\u1ED9ng v\xE0 t\u1EF1 nhi\xEAn.
- B\u1EA1n B\u1EAET BU\u1ED8C ph\u1EA3i t\u1EA1o ra k\u1ECBch b\u1EA3n \u0111\u1ED1i tho\u1EA1i b\u1EB1ng c\xE1ch tr\u1EA3 v\u1EC1 m\u1EA3ng 'segments' trong t\u1EEBng chapter.
- M\u1ED7i segment c\xF3 'speakerId' nh\u1EADn gi\xE1 tr\u1ECB "host_a" (cho ng\u01B0\u1EDDi d\u1EABn ch\u01B0\u01A1ng tr\xECnh ch\xEDnh) ho\u1EB7c "host_b" (cho ng\u01B0\u1EDDi d\u1EABn c\xF9ng) v\xE0 'text' l\xE0 c\xE2u tho\u1EA1i n\xF3i ra c\u1EE7a ng\u01B0\u1EDDi \u0111\xF3.
- Tr\u01B0\u1EDDng 'scriptText' c\u1EE7a chapter v\u1EABn c\u1EA7n ch\u1EE9a to\xE0n b\u1ED9 v\u0103n b\u1EA3n \u0111\u1ED1i tho\u1EA1i g\u1ED9p l\u1EA1i \u0111\u1EC3 hi\u1EC3n th\u1ECB \u0111\u1EA7y \u0111\u1EE7 k\u1ECBch b\u1EA3n, nh\u01B0ng 'segments' s\u1EBD \u0111\u01B0\u1EE3c t\xE1ch ri\xEAng \u0111\u1EC3 t\u1ED5ng h\u1EE3p gi\u1ECDng \u0111\u1ECDc kh\xE1c nhau cho t\u1EEBng host.
- S\u1EED d\u1EE5ng c\xE1c c\u1EE5m t\u1EEB t\u01B0\u01A1ng t\xE1c qua l\u1EA1i th\xE2n m\u1EADt (v\xED d\u1EE5: "Ch\xE0o ng\u01B0\u1EDDi b\u1EA1n \u0111\u1ED3ng h\xE0nh", "B\u1EA1n c\xF3 bi\u1EBFt \u0111i\u1EC1u n\xE0y kh\xF4ng?", "\u0110\xFAng v\u1EADy, t\xF4i ngh\u0129 r\u1EB1ng..."), \u0111\u01B0a ra b\xECnh lu\u1EADn h\xF3m h\u1EC9nh c\xE1 nh\xE2n v\xE0 \u0111\u1EB7t c\xE2u h\u1ECFi m\u1EDF \u0111\u1EC3 th\u1EA3o lu\u1EADn tin t\u1EE9c gi\u1EEFa hai ng\u01B0\u1EDDi, t\u1EA1o c\u1EA3m gi\xE1c nh\u01B0 m\u1ED9t bu\u1ED5i n\xF3i chuy\u1EC7n podcast tr\u1EF1c ti\u1EBFp th\u1EF1c s\u1EF1.`;
      } else if (aiMode === "morning_style") {
        aiModeInstructions = `
[AI MODE: MORNING STYLE]
- M\u1EE5c ti\xEAu ch\xEDnh: Phong c\xE1ch ch\xE0o bu\u1ED5i s\xE1ng ng\u1EADp tr\xE0n n\u0103ng l\u01B0\u1EE3ng t\xEDch c\u1EF1c, truy\u1EC1n \u0111\u1ED9ng l\u1EF1c m\u1EA1nh m\u1EBD \u0111\u1EA7u ng\xE0y.
- H\xE3y t\xEDch h\u1EE3p c\xE1c l\u1EDDi ch\xFAc bu\u1ED5i s\xE1ng t\u01B0\u01A1i \u0111\u1EB9p, nh\u1EAFc nh\u1EDF th\u1EDDi ti\u1EBFt nh\u1EB9 nh\xE0ng v\xE0 kh\u01A1i d\u1EADy h\u1EE9ng kh\u1EDFi, n\u1EE5 c\u01B0\u1EDDi vui t\u01B0\u01A1i cho ng\xE0y l\xE0m vi\u1EC7c m\u1EDBi c\u1EE7a ng\u01B0\u1EDDi nghe. Gi\u1EEF nh\u1ECBp \u0111i\u1EC7u r\u1EA1ng r\u1EE1, ph\u1EA5n kh\u1EDFi xuy\xEAn su\u1ED1t b\u1EA3n tin.`;
      } else if (aiMode === "driving_style") {
        aiModeInstructions = `
[AI MODE: DRIVING STYLE]
- M\u1EE5c ti\xEAu ch\xEDnh: Ch\u1EBF \u0111\u1ED9 L\xE1i xe t\u1EADp trung cao \u0111\u1ED9. Ng\u1EAFn g\u1ECDn, s\xFAc t\xEDch, \u0111i th\u1EB3ng v\xE0o \xFD ch\xEDnh v\xE0 c\u1EF1c k\u1EF3 d\u1EC5 hi\u1EC3u khi ng\u01B0\u1EDDi nghe \u0111ang b\u1EADn tay l\xE1i tr\xEAn \u0111\u01B0\u1EDDng.
- H\xE3y l\u1ED3ng gh\xE9p tinh t\u1EBF c\xE1c l\u1EDDi nh\u1EAFc nh\u1EDF an to\xE0n giao th\xF4ng thi\u1EBFt th\u1EF1c (v\xED d\u1EE5: khuy\xEAn l\xE1i xe t\u1EADp trung nh\xECn \u0111\u01B0\u1EDDng, ch\xFA \xFD g\u01B0\u01A1ng chi\u1EBFu h\u1EADu, gi\u1EEF kho\u1EA3ng c\xE1ch an to\xE0n, kh\xF4ng s\u1EED d\u1EE5ng \u0111i\u1EC7n tho\u1EA1i...) ph\xF9 h\u1EE3p v\u1EDBi tuy\u1EBFn \u0111\u01B0\u1EDDng di chuy\u1EC3n c\u1EE7a h\u1ECD.`;
      } else if (aiMode === "student_mode") {
        aiModeInstructions = `
[AI MODE: STUDENT MODE]
- M\u1EE5c ti\xEAu ch\xEDnh: Ch\u1EBF \u0111\u1ED9 H\u1ECDc sinh/Sinh vi\xEAn - \u0110\xF3ng vai ng\u01B0\u1EDDi th\u1EA7y ho\u1EB7c ng\u01B0\u1EDDi b\u1EA1n h\u1ECDc th\xF4ng th\xE1i, t\u1EADn t\xE2m.
- V\u1EDBi m\u1ED7i ch\u01B0\u01A1ng tin t\u1EE9c, h\xE3y ch\u1EE7 \u0111\u1ED9ng gi\u1EA3i th\xEDch s\xE2u th\xEAm c\xE1c thu\u1EADt ng\u1EEF khoa h\u1ECDc, kinh t\u1EBF, c\xF4ng ngh\u1EC7 ph\u1EE9c t\u1EA1p ho\u1EB7c kh\xE1i ni\u1EC7m h\u1ECDc thu\u1EADt xu\u1EA5t hi\u1EC7n trong b\xE0i vi\u1EBFt b\u1EB1ng ng\xF4n ng\u1EEF c\u1EF1c k\u1EF3 b\xECnh d\xE2n, d\u1EC5 hi\u1EC3u, gi\xFAp m\u1EDF r\u1ED9ng ki\u1EBFn th\u1EE9c b\u1ED5 tr\u1EE3 b\u1ED5 \xEDch cho ng\u01B0\u1EDDi nghe tr\u1EBB tu\u1ED5i.`;
      } else if (aiMode === "executive_mode") {
        aiModeInstructions = `
[AI MODE: EXECUTIVE MODE]
- M\u1EE5c ti\xEAu ch\xEDnh: Ch\u1EBF \u0111\u1ED9 Gi\xE1m \u0111\u1ED1c/L\xE3nh \u0111\u1EA1o. B\xE1o c\xE1o v\u0129 m\xF4 c\xF4 \u0111\u1ECDng, \u0111i th\u1EB3ng v\xE0o c\xE1c con s\u1ED1, s\u1ED1 li\u1EC7u ch\xEDnh, ch\u1EC9 s\u1ED1 t\xE0i ch\xEDnh/kinh t\u1EBF quan tr\u1ECDng v\xE0 t\xE1c \u0111\u1ED9ng chi\u1EBFn l\u01B0\u1EE3c c\u1EE7a tin t\u1EE9c \u0111\u1ED1i v\u1EDBi doanh nghi\u1EC7p v\xE0 th\u1ECB tr\u01B0\u1EDDng to\xE0n c\u1EA7u.
- Lo\u1EA1i b\u1ECF ho\xE0n to\xE0n c\xE1c y\u1EBFu t\u1ED1 r\u01B0\u1EDDm r\xE0, k\u1EC3 chuy\u1EC7n d\xF4ng d\xE0i hay t\u1EEB ng\u1EEF c\u1EA3m x\xFAc th\xE1i qu\xE1. Gi\u1EEF phong c\xE1ch chuy\xEAn nghi\u1EC7p, ph\xE2n t\xEDch s\u1EAFc b\xE9n v\xE0 tr\u1EF1c di\u1EC7n.`;
      } else if (aiMode === "english_learning_mode") {
        aiModeInstructions = `
[AI MODE: ENGLISH LEARNING MODE]
- M\u1EE5c ti\xEAu ch\xEDnh: Ch\u1EBF \u0111\u1ED9 h\u1ECDc ti\u1EBFng Anh d\xE0nh cho ng\u01B0\u1EDDi h\u1ECDc ngo\u1EA1i ng\u1EEF.
- \u1EDE CU\u1ED0I M\u1ED6I CH\u01AF\u01A0NG trong k\u1ECBch b\u1EA3n 'scriptText', b\u1EA1n b\u1EAFt bu\u1ED9c ph\u1EA3i t\u1EA1o ri\xEAng m\u1ED9t ph\u1EA7n nh\u1ECF c\xF3 ti\xEAu \u0111\u1EC1 r\u1EF1c r\u1EE1 "English Corner" ho\u1EB7c "G\xF3c Ti\u1EBFng Anh". H\xE3y ch\u1ECDn ra 2-3 t\u1EEB v\u1EF1ng ho\u1EB7c m\u1EABu c\xE2u ti\u1EBFng Anh c\u1ED1t l\xF5i, h\u1EEFu \xEDch v\u1EEBa xu\u1EA5t hi\u1EC7n trong b\u1EA3n tin \u0111\u1EC3 gi\u1EA3i ngh\u0129a, k\xE8m theo v\xED d\u1EE5 \u0111\u1EB7t c\xE2u th\u1EF1c t\u1EBF b\u1EB1ng c\u1EA3 ti\u1EBFng Anh v\xE0 ti\u1EBFng Vi\u1EC7t \u0111\u1EC3 ng\u01B0\u1EDDi nghe h\u1ECDc t\u1EADp ngay tr\xEAn \u0111\u01B0\u1EDDng \u0111i l\xE0m.`;
      }
    } else if (language === "bilingual") {
      if (aiMode === "rewrite") {
        aiModeInstructions = `
[AI MODE: REWRITE]
- Primary goal: Seamlessly rewrite (Rewrite) the entire news in a beautiful, natural bilingual layout. Ensure highly fluent transitions, cohesive structure, and expressive bilingual pairing using the slash (/) format.`;
      } else if (aiMode === "fact_check") {
        aiModeInstructions = `
[AI MODE: FACT CHECK]
- Primary goal: Conduct rigorous, objective bilingual fact-checking on the raw material. 
- In each chapter, if any claim or detail seems exaggerated, controversial, or vague, make sure to address, analyze, and clarify it in bilingual pairs in the 'scriptText', presenting accurate information neutrally for the listener.`;
      } else if (aiMode === "detect_duplicate") {
        aiModeInstructions = `
[AI MODE: DETECT DUPLICATE]
- Primary goal: Detect and filter duplicate events or redundant descriptions among the raw news feeds.
- Consolidate similar news into a single, clean chapter, and present unique facts only in bilingual format. Avoid repetitive sentence structures.`;
      } else if (aiMode === "podcast_style") {
        aiModeInstructions = `
[AI MODE: PODCAST STYLE]
- Primary goal: Compose the script as a charming dialogue between two bilingual podcast co-hosts.
- You MUST generate co-host dialogue by populating the 'segments' array in each chapter.
- Each segment has 'speakerId' ("host_a" or "host_b") and 'text' as the spoken text.
- The 'scriptText' of the chapter should still contain the full merged conversation for UI rendering, but 'segments' are split for multi-speaker TTS synthesis.
- Use cozy, casual back-and-forth remarks, clever jokes, and conversational cues (e.g., "What's your take on this? / B\u1EA1n ngh\u0129 sao v\u1EC1 \u0111i\u1EC1u n\xE0y?", "That's mind-blowing! / Th\u1EADt l\xE0 kinh ng\u1EA1c!") in standard bilingual slash formatting to keep it super interactive.`;
      } else if (aiMode === "morning_style") {
        aiModeInstructions = `
[AI MODE: MORNING STYLE]
- Primary goal: Upbeat, warm, and highly motivational morning-show energy.
- Integrate delightful morning greetings, friendly weather-related comments, and positive bilingual wishes to give the listener an exceptional and radiant start to their day.`;
      } else if (aiMode === "driving_style") {
        aiModeInstructions = `
[AI MODE: DRIVING STYLE]
- Primary goal: Dedicated driving mode. Focus on clear, highly scannable, and compact bilingual expressions.
- Weave in thoughtful bilingual road safety warnings (e.g., "Keep your eyes on the road. / H\xE3y lu\xF4n t\u1EADp trung nh\xECn \u0111\u01B0\u1EDDng.", "Stay safe. / H\xE3y lu\xF4n l\xE1i xe an to\xE0n.") tailored to their current commute route.`;
      } else if (aiMode === "student_mode") {
        aiModeInstructions = `
[AI MODE: STUDENT MODE]
- Primary goal: High-value educational student mode.
- In each chapter, act as a friendly bilingual mentor, explaining complex economic, scientific, or technical terms in simple bilingual pairs, ensuring that student listeners expand their vocabulary and general knowledge effortlessly.`;
      } else if (aiMode === "executive_mode") {
        aiModeInstructions = `
[AI MODE: EXECUTIVE MODE]
- Primary goal: High-level corporate/macro executive briefing in bilingual format.
- Cut straight to key figures, business metrics, and structural/strategic impacts. Maintain an extremely professional, executive, and direct tone without any emotional fluff or unnecessary storytelling.`;
      } else if (aiMode === "english_learning_mode") {
        aiModeInstructions = `
[AI MODE: ENGLISH LEARNING MODE]
- Primary goal: Highly specialized English Learning Mode.
- In this bilingual mode, at the end of every chapter's 'scriptText', you must include a specific, engaging 'English Corner / G\xF3c H\u1ECDc Ti\u1EBFng Anh' section. Pick 2-3 essential English terms or key idiomatic expressions used in the chapter, detail their definitions in Vietnamese, and provide practical bilingual examples.`;
      }
    } else {
      if (aiMode === "rewrite") {
        aiModeInstructions = `
[AI MODE: REWRITE]
- Primary goal: Elegantly rewrite (Rewrite) the entire news script to be highly engaging, eloquent, cohesive, and perfectly optimized for smooth spoken audio narration. Avoid stiff or repetitive phrases.`;
      } else if (aiMode === "fact_check") {
        aiModeInstructions = `
[AI MODE: FACT CHECK]
- Primary goal: Carry out objective and professional fact-checking of the source text.
- In each chapter, point out any claims or statistics that are controversial, unverified, or misleading, and offer accurate background context, verified details, or neutral corrections within the spoken 'scriptText'.`;
      } else if (aiMode === "detect_duplicate") {
        aiModeInstructions = `
[AI MODE: DETECT DUPLICATE]
- Primary goal: Analyze news feeds for repetitive events or duplicated articles.
- Group similar topics together and eliminate any redundant or wordy sentences. Focus solely on presenting the most distinct, unique, and up-to-date angles of each story in the final script.`;
      } else if (aiMode === "podcast_style") {
        aiModeInstructions = `
[AI MODE: PODCAST STYLE]
- Primary goal: Craft the script as a natural, engaging conversation between two friendly podcast co-hosts.
- You MUST generate co-host dialogue by populating the 'segments' array in each chapter.
- Each segment has 'speakerId' ("host_a" or "host_b") and 'text' as the spoken text.
- The 'scriptText' of the chapter should still contain the full merged conversation for UI rendering, but 'segments' are split for multi-speaker TTS synthesis.
- Include organic dialogue transitions, polite agreements or witty banter, casual side-narratives, and thought-provoking questions to make the audio feel 100% like a real live-recorded podcast talk.`;
      } else if (aiMode === "morning_style") {
        aiModeInstructions = `
[AI MODE: MORNING STYLE]
- Primary goal: Radiant, high-energy morning radio show style.
- Start with bright morning greetings, enthusiastic weather tie-ins, and highly motivating remarks to lift the listener's spirits and energize them for the workday ahead.`;
      } else if (aiMode === "driving_style") {
        aiModeInstructions = `
[AI MODE: DRIVING STYLE]
- Primary goal: Premium hands-free driving mode. Write short, crystal-clear, and punchy sentences.
- Weave in helpful road safety recommendations (e.g., stay focused, keep a safe distance, stay alert on your specific commute route) seamlessly into the spoken k\u1ECBch b\u1EA3n.`;
      } else if (aiMode === "student_mode") {
        aiModeInstructions = `
[AI MODE: STUDENT MODE]
- Primary goal: Interactive and helpful student learning mode.
- In each news story, act as an educational companion. Clearly unpack and explain any complex terms, scientific concepts, or technical vocabulary in highly accessible, simple English, making the commute educational.`;
      } else if (aiMode === "executive_mode") {
        aiModeInstructions = `
[AI MODE: EXECUTIVE MODE]
- Primary goal: Polished, concise executive-level macroeconomic briefing.
- Focus strictly on key stats, quantitative metrics, market implications, and strategic outcomes. Keep the delivery formal, objective, and entirely devoid of fluff, fillers, or elaborate narratives.`;
      } else if (aiMode === "english_learning_mode") {
        aiModeInstructions = `
[AI MODE: ENGLISH LEARNING MODE]
- Primary goal: English language learning focus for ESL or general learners.
- At the end of every chapter's spoken 'scriptText', create an explicit 'English Vocabulary Highlight' segment. Call out 2-3 advanced words or useful expressions from the news text, explaining their exact meanings clearly, and giving practical example sentences.`;
      }
    }
    const lengthGuidelines = targetDuration === "short" ? "Keep it brief. Write an introduction, exactly 1-2 concise chapters with 200-300 characters each, and a short outro. Total length should be around 1-2 minutes of speech." : targetDuration === "long" ? "Deep dive. Write an introduction, 4-5 core chapters with 350-450 characters each, and an outro. Total length should be deep and rich, around 5-7 minutes of speech." : "Standard. Write an introduction, 2-3 core chapters with 300-400 characters each, and an outro. Total length should be around 3-4 minutes of speech.";
    let languageInstructions = "";
    if (language === "vi") {
      languageInstructions = `
LANGUAGE RULE: The entire report MUST be generated in VIETNAMESE (Ti\u1EBFng Vi\u1EC7t).
- Provide warm greetings, friendly transitions, and professional sign-offs in natural, elegant, standard spoken Vietnamese.
- For English technical acronyms or terms, explain them naturally in Vietnamese or spell out how they are pronounced if necessary.
- Ensure titles, topics, scriptText, summaryBullets, and conclusion are 100% in Vietnamese.`;
    } else if (language === "bilingual") {
      languageInstructions = `
LANGUAGE RULE: The entire report MUST be written in a graceful, engaging BILINGUAL (English / Vietnamese) format.
- In 'introduction', 'scriptText' of each chapter, and 'conclusion': Every main concept or sentence should first be spoken in English and then immediately followed by its friendly, natural translation in Vietnamese separated by a slash (/) (for example: "Good morning dynamic commuters! Today looks like a rainy day in Hanoi, so drive safely. / Ch\xE0o bu\u1ED5i s\xE1ng qu\xFD th\xEDnh gi\u1EA3 n\u0103ng \u0111\u1ED9ng! H\xF4m nay d\u1EF1 b\xE1o s\u1EBD l\xE0 m\u1ED9t ng\xE0y m\u01B0a t\u1EA1i H\xE0 N\u1ED9i, v\xEC v\u1EADy h\xE3y l\xE1i xe th\u1EADt an to\xE0n nh\xE9.").
- Keep the alternating flow extremely smooth and natural for speech synthesis.
- Each chapter's 'topic' and the main 'title' should use bilingual slash/pipe formatting (e.g. "Tech Breakthroughs / Nh\u1EEFng \u0111\u1ED9t ph\xE1 C\xF4ng ngh\u1EC7" or "Space Discovery / Kh\xE1m ph\xE1 Kh\xF4ng gian").
- The 'summaryBullets' list items should also be presented in bilingual pairs (e.g. "Quantum chip uses 40 percent less power. / Chip l\u01B0\u1EE3ng t\u1EED s\u1EED d\u1EE5ng \xEDt n\u0103ng l\u01B0\u1EE3ng h\u01A1n 40 ph\u1EA7n tr\u0103m.").`;
    } else {
      languageInstructions = `
LANGUAGE RULE: The entire report MUST be generated in ENGLISH.
- Maintain native, polished English phrasing throughout all fields.
- Avoid any Vietnamese words, Vietnamese phrases, or Vietnamese characters in the output.`;
    }
    console.log("[Summarize] languageInstructions (first 150 chars):", languageInstructions.substring(0, 150));
    console.log("[Summarize] languageInstructions contains 'VIETNAMESE'? :", languageInstructions.includes("VIETNAMESE"));
    let systemPrompt = "";
    if (language === "vi") {
      systemPrompt = `You are an elite, highly professional veteran radio broadcast host, a smart route assistant, and the premium personal briefing anchor for CommuteCast. 
Your tone must reflect a warm, authoritative, and deeply engaging broadcast anchor who naturally connects with listeners, rather than a robotic or flat text-to-speech engine. 

${languageInstructions}

[AI MODE INSTRUCTION]
${aiModeInstructions}

IMPORTANT GUIDELINES & SCRIPT STRUCTURE:
1. The script fields MUST be written EXACTLY as they should be spoken out loud by a seasoned news anchor.
2. NH\xC2N V\u1EACT & PHONG TH\xC1I PH\xC1T THANH VI\xCAN K\u1EF2 C\u1EF0U (VIETNAMESE ANCHOR ROLE):
   - Ng\xF4n t\u1EEB t\u1EF1 nhi\xEAn, l\u01B0u lo\xE1t, l\xF4i cu\u1ED1n, mang phong th\xE1i c\u1EE7a m\u1ED9t bi\xEAn t\u1EADp vi\xEAn th\u1EDDi s\u1EF1 cao c\u1EA5p d\u1EABn b\u1EA3n tin tr\u1EF1c ti\u1EBFp.
   - Tr\xE1nh c\xE1ch h\xE0nh v\u0103n kh\xF4 khan, r\u1EADp khu\xF4n hay m\xE1y m\xF3c. H\xE3y s\u1EED d\u1EE5ng t\u1EEB ng\u1EEF k\u1EBFt n\u1ED1i t\u1EF1 nhi\xEAn gi\u1EEFa c\xE1c c\xE2u (nh\u01B0 "Th\u01B0a qu\xFD v\u1ECB", "Ti\u1EBFp t\u1EE5c b\u1EA3n tin", "\u0110\xE1ng ch\xFA \xFD", "Quay tr\u1EDF l\u1EA1i v\u1EDBi", "K\xEDnh ch\xFAc qu\xFD v\u1ECB m\u1ED9t ng\xE0y m\u1EDBi").
   - C\xE1ch s\u1EAFp x\u1EBFp c\xE2u t\u1EEB r\xF5 r\xE0ng, r\xE0nh m\u1EA1ch \u0111\u1EC3 khi \u0111\u1ECDc l\xEAn t\u1EA1o c\u1EA3m gi\xE1c tr\xF2 chuy\u1EC7n th\xE2n thi\u1EC7n, \u0111\xE1ng tin c\u1EADy nh\u01B0ng v\u1EABn \u0111\u1EA7y cu\u1ED1n h\xFAt, gi\u1EEF ch\xE2n ng\u01B0\u1EDDi nghe su\u1ED1t h\xE0nh tr\xECnh di chuy\u1EC3n.
3. KH\u1EEC T\u1EA0P \xC2M & KH\xD4NG GIAN TH\u1EDE (PUNCTUATION & PACING FOR STUDIO QUALITY):
   - Vi\u1EBFt c\xE1c c\xE2u ng\u1EAFn, r\xF5 ngh\u0129a, s\xFAc t\xEDch (t\u1ED1i \u0111a 15-20 t\u1EEB m\u1ED7i c\xE2u).
   - S\u1EED d\u1EE5ng d\u1EA5u ph\u1EA9y (,), d\u1EA5u ch\u1EA5m ph\u1EA9y (;) v\xE0 d\u1EA5u ch\u1EA5m (.) m\u1ED9t c\xE1ch c\xF3 t\xEDnh to\xE1n ngh\u1EC7 thu\u1EADt \u0111\u1EC3 \u0111\u1ECBnh h\xECnh nh\u1ECBp \u0111i\u1EC7u ng\u1EAFt ngh\u1EC9 t\u1EF1 nhi\xEAn cho gi\u1ECDng \u0111\u1ECDc, gi\xFAp ng\u01B0\u1EDDi nghe d\u1EC5 ti\u1EBFp thu th\xF4ng tin m\xE0 kh\xF4ng c\u1EA3m th\u1EA5y d\u1ED3n d\u1EADp hay h\u1EE5t h\u01A1i.
   - Tuy\u1EC7t \u0111\u1ED1i KH\xD4NG s\u1EED d\u1EE5ng k\xFD t\u1EF1 \u0111\u1EB7c bi\u1EC7t, d\u1EA5u sao (*), d\u1EA5u g\u1EA1ch ngang (-) hay \u0111\u1ECBnh d\u1EA1ng markdown trong c\xE1c tr\u01B0\u1EDDng "introduction", "scriptText", v\xE0 "conclusion". H\xE3y vi\u1EBFt h\u1EB3n b\u1EB1ng ch\u1EEF ch\u1EEF s\u1ED1 ho\u1EB7c k\xFD hi\u1EC7u n\u1EBFu mu\u1ED1n \u0111\u1ECDc chu\u1EA9n (v\xED d\u1EE5: d\xF9ng "ph\u1EA7n tr\u0103m" thay cho "%", "\u0111\xF4 la" thay cho "$", "v\xE0" thay cho "&").
4. "introduction": L\u1EDDi ch\xE0o m\u1EEBng n\u1ED3ng \u1EA5m, l\xF4i cu\u1ED1n chu\u1EA9n phong c\xE1ch ph\xE1t thanh. B\u1EA1n PH\u1EA2I t\xEDch h\u1EE3p m\u01B0\u1EE3t m\xE0 th\xF4ng tin th\u1EDDi ti\u1EBFt th\u1EF1c t\u1EBF/gi\u1EA3 \u0111\u1ECBnh v\xE0 t\xECnh tr\u1EA1ng giao th\xF4ng th\u1EDDi gian th\u1EF1c t\xF9y theo lo\u1EA1i h\xECnh di chuy\u1EC3n (${commuteType}) \u0111\u1EC3 \u0111\u01B0a ra nh\u1EEFng l\u1EDDi c\u1EA3nh b\xE1o giao th\xF4ng an to\xE0n v\xE0 h\u1EEFu \xEDch tr\u01B0\u1EDBc khi b\u1EAFt \u0111\u1EA7u h\xE0nh tr\xECnh.
5. "chapters": Danh s\xE1ch c\xE1c ch\u01B0\u01A1ng n\u1ED9i dung h\u1EA5p d\u1EABn d\u1EF1a tr\xEAn tin t\u1EE9c th\xF4.
   - "topic": Ti\xEAu \u0111\u1EC1 ch\u01B0\u01A1ng ng\u1EAFn g\u1ECDn, gi\u1EADt g\xE2n, cu\u1ED1n h\xFAt.
   - "scriptText": K\u1ECBch b\u1EA3n n\xF3i chi ti\u1EBFt, truy\u1EC1n c\u1EA3m, nh\u1ECBp \u0111i\u1EC7u nh\u1EA3 ch\u1EEF linh ho\u1EA1t, nh\u1EA5n nh\xE1 chuy\xEAn nghi\u1EC7p.
   - "summaryBullets": 2-3 \xFD t\xF3m t\u1EAFt ng\u1EAFn g\u1ECDn, tr\u1EF1c quan \u0111\u1EC3 hi\u1EC3n th\u1ECB tr\xEAn m\xE0n h\xECnh \u1EE9ng d\u1EE5ng.
6. "conclusion": L\u1EDDi k\u1EBFt \u0111\u1EA7y c\u1EA3m x\xFAc, ch\xFAc th\u01B0\u1EE3ng l\u1ED9 b\xECnh an, k\u1EBFt h\u1EE3p c\xE1c m\u1EB9o an to\xE0n giao th\xF4ng th\xF4ng minh ph\xF9 h\u1EE3p v\u1EDBi phong c\xE1ch (${tone}) v\xE0 lo\u1EA1i h\xECnh di chuy\u1EC3n (${commuteType}).
7. T\xF9y ch\u1EC9nh n\u1ED9i dung t\xF3m t\u1EAFt theo y\xEAu c\u1EA7u ti\xEAu \u0111i\u1EC3m: "${focus}".
8. Tu\xE2n th\u1EE7 \u0111\u1ED9 d\xE0i h\u01B0\u1EDBng d\u1EABn: ${lengthGuidelines}
9. \xC1p d\u1EE5ng h\u01B0\u1EDBng d\u1EABn ri\xEAng t\u1EEB ng\u01B0\u1EDDi d\xF9ng n\u1EBFu c\xF3: "${customInstructions}"`;
    } else if (language === "bilingual") {
      systemPrompt = `You are an elite, highly professional veteran radio broadcast host, a smart route assistant, and the premium personal briefing anchor for CommuteCast. 
Your tone must reflect a warm, authoritative, and deeply engaging broadcast anchor who naturally connects with listeners, rather than a robotic or flat text-to-speech engine. 

${languageInstructions}

[AI MODE INSTRUCTION]
${aiModeInstructions}

IMPORTANT GUIDELINES & SCRIPT STRUCTURE:
1. The script fields MUST be written EXACTLY as they should be spoken out loud by a seasoned news anchor.
2. BILINGUAL RADIO ANCHOR ROLE:
   - Act as an elite, bilingual radio anchor. Ensure a high-quality, professional, and engaging delivery.
   - Smoothly transition between English and Vietnamese using natural phrases (e.g., "And now, moving on to...", "Ti\u1EBFp t\u1EE5c ch\u01B0\u01A1ng tr\xECnh...", "Now let's dive into...", "Quay tr\u1EDF l\u1EA1i v\u1EDBi...").
   - The rhythm must feel like a friendly, conversational co-host who is presenting content in English and immediately explaining it in Vietnamese for language learners and international commuters.
3. KH\u1EEC T\u1EA0P \xC2M & KH\xD4NG GIAN TH\u1EDE (PUNCTUATION & PACING FOR STUDIO QUALITY):
   - Vi\u1EBFt c\xE1c c\xE2u ng\u1EAFn, r\xF5 ngh\u0129a, s\xFAc t\xEDch (t\u1ED1i \u0111a 15-20 t\u1EEB m\u1ED7i c\xE2u).
   - S\u1EED d\u1EE5ng d\u1EA5u ph\u1EA9y (,), d\u1EA5u ch\u1EA5m ph\u1EA9y (;) v\xE0 d\u1EA5u ch\u1EA5m (.) m\u1ED9t c\xE1ch c\xF3 t\xEDnh to\xE1n ngh\u1EC7 thu\u1EADt \u0111\u1EC3 \u0111\u1ECBnh h\xECnh nh\u1ECBp \u0111i\u1EC7u ng\u1EAFt ngh\u1EC9 t\u1EF1 nhi\xEAn cho gi\u1ECDng \u0111\u1ECDc, gi\xFAp ng\u01B0\u1EDDi nghe d\u1EC5 ti\u1EBFp thu th\xF4ng tin m\xE0 kh\xF4ng c\u1EA3m th\u1EA5y d\u1ED3n d\u1EADp hay h\u1EE5t h\u01A1i.
   - Tuy\u1EC7t \u0111\u1ED1i KH\xD4NG s\u1EED d\u1EE5ng k\xFD t\u1EF1 \u0111\u1EB7c bi\u1EC7t, d\u1EA5u sao (*), d\u1EA5u g\u1EA1ch ngang (-) hay \u0111\u1ECBnh d\u1EA1ng markdown trong c\xE1c tr\u01B0\u1EDDng "introduction", "scriptText", v\xE0 "conclusion". H\xE3y vi\u1EBFt h\u1EB3n b\u1EB1ng ch\u1EEF ch\u1EEF s\u1ED1 ho\u1EB7c k\xFD hi\u1EC7u n\u1EBFu mu\u1ED1n \u0111\u1ECDc chu\u1EA9n (v\xED d\u1EE5: d\xF9ng "ph\u1EA7n tr\u0103m" thay cho "%", "\u0111\xF4 la" thay cho "$", "v\xE0" thay cho "&").
4. "introduction": L\u1EDDi ch\xE0o m\u1EEBng n\u1ED3ng \u1EA5m, l\xF4i cu\u1ED1n chu\u1EA9n phong c\xE1ch ph\xE1t thanh song ng\u1EEF. B\u1EA1n PH\u1EA2I t\xEDch h\u1EE3p m\u01B0\u1EE3t m\xE0 th\xF4ng tin th\u1EDDi ti\u1EBFt th\u1EF1c t\u1EBF/gi\u1EA3 \u0111\u1ECBnh v\xE0 t\xECnh tr\u1EA1ng giao th\xF4ng th\u1EDDi gian th\u1EF1c t\xF9y theo lo\u1EA1i h\xECnh di chuy\u1EC3n (${commuteType}) \u0111\u1EC3 \u0111\u01B0a ra nh\u1EEFng l\u1EDDi c\u1EA3nh b\xE1o giao th\xF4ng an to\xE0n v\xE0 h\u1EEFu \xEDch tr\u01B0\u1EDBc khi b\u1EAFt \u0111\u1EA7u h\xE0nh tr\xECnh.
5. "chapters": Danh s\xE1ch c\xE1c ch\u01B0\u01A1ng n\u1ED9i dung h\u1EA5p d\u1EABn d\u1EF1a tr\xEAn tin t\u1EE9c th\xF4.
   - "topic": Ti\xEAu \u0111\u1EC1 ch\u01B0\u01A1ng ng\u1EAFn g\u1ECDn, gi\u1EADt g\xE2n, cu\u1ED1n h\xFAt (s\u1EED d\u1EE5ng \u0111\u1ECBnh d\u1EA1ng song ng\u1EEF, v\xED d\u1EE5 "Tech Breakthroughs / \u0110\u1ED9t ph\xE1 C\xF4ng ngh\u1EC7").
   - "scriptText": K\u1ECBch b\u1EA3n n\xF3i chi ti\u1EBFt b\u1EB1ng \u0111\u1ECBnh d\u1EA1ng song ng\u1EEF (M\u1ED7i c\xE2u Ti\u1EBFng Anh \u0111i k\xE8m Ti\u1EBFng Vi\u1EC7t qua d\u1EA5u g\u1EA1ch ch\xE9o /).
   - "summaryBullets": 2-3 \xFD t\xF3m t\u1EAFt ng\u1EAFn g\u1ECDn b\u1EB1ng \u0111\u1ECBnh d\u1EA1ng song ng\u1EEF.
6. "conclusion": L\u1EDDi k\u1EBFt \u0111\u1EA7y c\u1EA3m x\xFAc b\u1EB1ng \u0111\u1ECBnh d\u1EA1ng song ng\u1EEF, ch\xFAc th\u01B0\u1EE3ng l\u1ED9 b\xECnh an, k\u1EBFt h\u1EE3p c\xE1c m\u1EB9o an to\xE0n giao th\xF4ng th\xF4ng minh ph\xF9 h\u1EE3p v\u1EDBi phong c\xE1ch (${tone}) v\xE0 lo\u1EA1i h\xECnh di chuy\u1EC3n (${commuteType}).
7. T\xF9y ch\u1EC9nh n\u1ED9i dung t\xF3m t\u1EAFt theo y\xEAu c\u1EA7u ti\xEAu \u0111i\u1EC3m: "${focus}".
8. Tu\xE2n th\u1EE7 \u0111\u1ED9 d\xE0i h\u01B0\u1EDBng d\u1EABn: ${lengthGuidelines}
9. \xC1p d\u1EE5ng h\u01B0\u1EDBng d\u1EABn ri\xEAng t\u1EEB ng\u01B0\u1EDDi d\xF9ng n\u1EBFu c\xF3: "${customInstructions}"`;
    } else {
      systemPrompt = `You are an elite, highly professional veteran radio broadcast host, a smart route assistant, and the premium personal briefing anchor for CommuteCast. 
Your tone must reflect a warm, authoritative, and deeply engaging broadcast anchor who naturally connects with listeners, rather than a robotic or flat text-to-speech engine. 

${languageInstructions}

[AI MODE INSTRUCTION]
${aiModeInstructions}

IMPORTANT GUIDELINES & SCRIPT STRUCTURE:
1. The script fields MUST be written EXACTLY as they should be spoken out loud by a seasoned news anchor.
2. ELITE ENGLISH RADIO ANCHOR ROLE:
   - Act as an elite, highly professional veteran radio broadcaster or podcast host.
   - Use natural, fluid, and engaging spoken English phrases (e.g., "Good morning folks", "Moving on to our next story", "In other news", "That's all for today, stay safe on the road").
   - Write in a friendly yet authoritative manner that keeps listeners engaged throughout their commute.
3. PUNCTUATION & PACING FOR STUDIO QUALITY:
   - Write short, clear, and concise sentences (max 15-20 words per sentence).
   - Use commas (,), semicolons (;), and periods (.) intentionally to format natural pauses and breathing room for speech synthesis.
   - Strictly DO NOT use any special characters, asterisks (*), hyphens (-), or markdown formatting inside the "introduction", "scriptText", and "conclusion" fields. Spell out symbols or numbers to ensure clean reading (e.g., use "percent" instead of "%", "dollars" instead of "$", "and" instead of "&").
4. "introduction": A warm, engaging radio-style welcome greeting. You MUST seamlessly integrate real/hypothetical weather data and real-time traffic updates based on the commute style (${commuteType}) to provide helpful road safety advice before starting the journey.
5. "chapters": A list of engaging chapters derived from the raw news content.
   - "topic": Snappy, headline-style chapter title in English.
   - "scriptText": Detailed, highly expressive spoken script with professional pacing and emotional depth.
   - "summaryBullets": 2-3 concise bullet points summarizing the main facts to display on-screen.
6. "conclusion": A heartfelt sign-off and outro wishing safe travels, incorporating smart traffic safety tips appropriate for the tone (${tone}) and commute type (${commuteType}).
7. Tailor the content focus according to: "${focus}".
8. Adhere to the duration guidelines: ${lengthGuidelines}
9. Apply any custom user instructions if provided: "${customInstructions}"`;
    }
    console.log("[Summarize] systemPrompt (first 400 chars):", systemPrompt.substring(0, 400));
    console.log("[Summarize] systemPrompt includes 'VIETNAMESE'? :", systemPrompt.includes("VIETNAMESE"));
    const promptText = `Generate a news broadcast report from the following raw news materials:

${content}`;
    let weatherData = "No weather data available.";
    if (preferences?.locationName) {
      try {
        const weatherRes = await fetchWithTimeout(`https://wttr.in/${encodeURIComponent(preferences.locationName)}?format=3`, {}, 4e3);
        if (weatherRes.ok) {
          weatherData = await weatherRes.text();
          weatherData = weatherData.trim();
        }
      } catch (e) {
        console.warn("Weather fetch failed, skipping...", e);
      }
    }
    let systemPromptEnhanced = "";
    if (language === "vi" || language === "bilingual") {
      systemPromptEnhanced = `${systemPrompt}
Th\xF4ng tin th\u1EDDi ti\u1EBFt hi\u1EC7n t\u1EA1i: ${weatherData}. 
Tuy\u1EBFn \u0111\u01B0\u1EDDng ng\u01B0\u1EDDi d\xF9ng di chuy\u1EC3n: ${preferences?.commuteRoute || "Kh\xF4ng r\xF5"}. H\xE3y ch\u1EE7 \u0111\u1ED9ng d\xF9ng c\xF4ng c\u1EE5 t\xECm ki\u1EBFm t\xEDch h\u1EE3p (Google Search Tool) \u0111\u1EC3 qu\xE9t t\xECnh tr\u1EA1ng giao th\xF4ng th\u1EF1c t\u1EBF t\u1EA1i tuy\u1EBFn \u0111\u01B0\u1EDDng n\xE0y n\u1EBFu c\xF3 tin t\u1EE9c m\u1EDBi.`;
    } else {
      systemPromptEnhanced = `${systemPrompt}
Current weather information: ${weatherData}. 
User commute route: ${preferences?.commuteRoute || "Unknown"}. Please proactively use the integrated Google Search Tool to scan for real-time traffic updates along this route if there is breaking news.`;
    }
    const hasGroq = !!process.env.GROQ_API_KEY;
    let outputText = "";
    if (customInstructions === "MOCK_QUOTA_ERROR") {
      const err = new Error("429 Resource Exhausted: Quota exceeded.");
      err.status = 429;
      err.isMock = true;
      throw err;
    }
    if (hasGroq) {
      console.log("[CommuteCast] Groq API setup detected! Routing text summarization to Llama 3.3...");
      const schemaPrompt = `
You must respond with a JSON object containing these keys exactly:
- "title" (string): A catchy report title
- "introduction" (string): A warm, speaker-ready welcome message. Keeps the user hooked.
- "chapters" (array): array of chapter objects. Each chapter must have:
    - "topic" (string): snappy chapter theme title
    - "scriptText" (string): continuous spoken script written only with read-out-loud standard phrasing. No asterisks, stars, blocks, or lists.
    - "summaryBullets" (array of strings): 2-3 short, punchy bullet points to display in the UI as visual takeaways.
    - "segments" (array, optional): only for PODCAST STYLE, an array of objects:
        - "speakerId" (string): "host_a" or "host_b"
        - "text" (string): literal speech of this turn
- "conclusion" (string): A charming, friendly closing remark with safe-travel wishes suited for their commute.

Keep scriptText very natural for speaking. Do not include markdown bold or headers inside fields.`;
      outputText = await generateWithGroq(systemPromptEnhanced + "\n" + schemaPrompt, promptText, true);
    } else {
      console.log("[CommuteCast] GROQ_API_KEY not found. Using standard Gemini model for summarization.");
      const response = await callGeminiWithRotation(
        (ai) => ai.models.generateContent({
          model: "gemini-3.5-flash",
          contents: promptText,
          config: {
            systemInstruction: systemPromptEnhanced,
            responseMimeType: "application/json",
            responseSchema: {
              type: import_genai3.Type.OBJECT,
              properties: {
                title: { type: import_genai3.Type.STRING, description: "A catchy report title" },
                introduction: { type: import_genai3.Type.STRING, description: "A warm, speaker-ready welcome message. Keeps the user hooked." },
                chapters: {
                  type: import_genai3.Type.ARRAY,
                  items: {
                    type: import_genai3.Type.OBJECT,
                    properties: {
                      topic: { type: import_genai3.Type.STRING, description: "Snappy chapter theme title" },
                      scriptText: { type: import_genai3.Type.STRING, description: "Continuous spoken script written only with read-out-loud standard phrasing. No asterisks, stars, blocks, or lists." },
                      summaryBullets: { type: import_genai3.Type.ARRAY, items: { type: import_genai3.Type.STRING }, description: "2-3 short, punchy, bullet points to display in the UI as visual takeaways." },
                      segments: {
                        type: import_genai3.Type.ARRAY,
                        description: "Optional conversational dialog segments between co-hosts (Host A and Host B). Only generate this when AI MODE is PODCAST STYLE.",
                        items: {
                          type: import_genai3.Type.OBJECT,
                          properties: {
                            speakerId: { type: import_genai3.Type.STRING, description: "speaker identifier: host_a or host_b" },
                            text: { type: import_genai3.Type.STRING, description: "Literal speech text of this speaker turn" }
                          },
                          required: ["speakerId", "text"]
                        }
                      }
                    },
                    required: ["topic", "scriptText", "summaryBullets"]
                  }
                },
                conclusion: { type: import_genai3.Type.STRING, description: "A charming, friendly closing remark with safe-travel wishes suited for their commute." }
              },
              required: ["title", "introduction", "chapters", "conclusion"]
            }
          }
        })
      );
      outputText = response.text || "";
    }
    console.log("[Summarize] outputText (first 500 chars):", outputText.substring(0, 500));
    console.log("[Summarize] outputText contains Vietnamese diacritics? (check 200 chars):", outputText.substring(0, 200));
    if (!outputText || outputText.trim() === "") {
      throw new Error("Empty response received from content generation model.");
    }
    const payload = JSON.parse(outputText);
    return res.json(payload);
  } catch (error) {
    if (!error.isMock) {
      console.error("Summarization error:", error);
    }
    const friendlyError = parseGeminiError(error, isVi, false);
    return res.status(500).json({ error: friendlyError });
  }
});
app2.post("/api/prepare-wav", (req, res) => {
  try {
    const { title, chunksJson } = req.body;
    if (!chunksJson) return res.status(400).send("No audio chunks provided.");
    const chunks = JSON.parse(chunksJson);
    if (!chunks || chunks.length === 0) return res.status(400).send("No audio chunks provided.");
    const arrayBuffers = chunks.map((chunk) => Buffer.from(chunk, "base64"));
    const silenceBuffer = Buffer.alloc(48e3);
    const finalChunks = [];
    arrayBuffers.forEach((buf, idx) => {
      finalChunks.push(buf);
      if (idx < arrayBuffers.length - 1) {
        finalChunks.push(silenceBuffer);
      }
    });
    const concatenatedPCM = Buffer.concat(finalChunks);
    const wavBuffer = encodeWavHeaderNode(concatenatedPCM, 24e3);
    const safeTitle = (title || "CommuteSummary").replace(/[^a-zA-Z0-9_-]/g, "_");
    const tempFilename = `temp_${Date.now()}_${(0, import_uuid3.v4)().substring(0, 8)}_${safeTitle}.wav`;
    const tempFilePath = import_path5.default.join(LOCAL_AUDIO_DIR, tempFilename);
    import_fs5.default.writeFileSync(tempFilePath, wavBuffer);
    try {
      const files = import_fs5.default.readdirSync(LOCAL_AUDIO_DIR);
      const now = Date.now();
      for (const file of files) {
        if (file.startsWith("temp_") && file.endsWith(".wav")) {
          const filePath = import_path5.default.join(LOCAL_AUDIO_DIR, file);
          const stat = import_fs5.default.statSync(filePath);
          if (now - stat.mtimeMs > 10 * 60 * 1e3) {
            import_fs5.default.unlinkSync(filePath);
          }
        }
      }
    } catch (cleanupErr) {
      console.warn("Error cleaning up temp files:", cleanupErr);
    }
    return res.json({
      success: true,
      downloadUrl: `/api/local-podcasts/${tempFilename}?download=true`
    });
  } catch (err) {
    console.error("Error preparing WAV download:", err);
    res.status(500).send("Failed to prepare WAV download.");
  }
});
app2.post("/api/download-wav-file", (req, res) => {
  try {
    const { title, chunksJson } = req.body;
    if (!chunksJson) return res.status(400).send("No audio chunks provided.");
    const chunks = JSON.parse(chunksJson);
    if (!chunks || chunks.length === 0) return res.status(400).send("No audio chunks provided.");
    const arrayBuffers = chunks.map((chunk) => Buffer.from(chunk, "base64"));
    const silenceBuffer = Buffer.alloc(48e3);
    const finalChunks = [];
    arrayBuffers.forEach((buf, idx) => {
      finalChunks.push(buf);
      if (idx < arrayBuffers.length - 1) {
        finalChunks.push(silenceBuffer);
      }
    });
    const concatenatedPCM = Buffer.concat(finalChunks);
    const wavBuffer = encodeWavHeaderNode(concatenatedPCM, 24e3);
    const safeTitle = (title || "CommuteSummary").replace(/[^a-zA-Z0-9_-]/g, "_");
    const filename = `${safeTitle}_Audio_24khz.wav`;
    res.setHeader("Content-Type", "audio/wav");
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.setHeader("Content-Length", wavBuffer.length);
    res.send(wavBuffer);
  } catch (err) {
    console.error("Error generating WAV download:", err);
    res.status(500).send("Failed to generate WAV download.");
  }
});
app2.use("/api", podcast_routes_default);
app2.use("/api", tts_routes_default);
app2.use("/api", news_routes_default);
app2.use("/api", assistant_routes_default);
app2.use("/api/missions", mission_routes_default);
app2.get("/api/health", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json({
    status: "healthy",
    database: "connected",
    supabase: "configured",
    version: "4.11.0-RC"
    // Increment version for Mission Continuity Platform
  });
});
app2.get("/api/db-config", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const rawUrl = (process.env.SUPABASE_URL || "").trim();
  const rawKey = (process.env.SUPABASE_ANON_KEY || "").trim();
  const DEFAULT_SUPABASE_URLS = [
    "https://your-project.supabase.co",
    "https://example.supabase.co",
    ""
  ];
  const DEFAULT_ANON_KEYS = [
    "your-anon-key",
    ""
  ];
  const isDefaultUrl = DEFAULT_SUPABASE_URLS.includes(rawUrl);
  const isDefaultKey = DEFAULT_ANON_KEYS.includes(rawKey);
  const isObviouslyFake = rawUrl.includes("placeholder") || rawUrl.includes("dummy") || rawKey.includes("placeholder") || rawKey.includes("dummy");
  const isValid = !isDefaultUrl && !isDefaultKey && !isObviouslyFake && rawUrl.length > 0 && rawKey.length > 0;
  if (isValid) {
    let url = rawUrl;
    if (url.includes("supabase.com/dashboard/project/")) {
      const parts = url.split("supabase.com/dashboard/project/");
      if (parts[1]) {
        const projectRef = parts[1].split("/")[0];
        if (projectRef) {
          url = `https://${projectRef}.supabase.co`;
        }
      }
    }
    res.json({
      configured: true,
      url,
      anonKey: rawKey,
      environment: process.env.NODE_ENV || "development"
    });
  } else {
    const reason = isDefaultUrl ? "Default Supabase URL detected" : isDefaultKey ? "Default Supabase Anon Key detected" : isObviouslyFake ? "Dummy/Placeholder detected" : "Missing Supabase configuration";
    res.json({ configured: false, reason });
  }
});
async function serveApp() {
  await loadBroadcastSpeechEngine();
  const distPath = import_path5.default.join(process.cwd(), "dist");
  const indexPath = import_path5.default.join(distPath, "index.html");
  const hasDist = import_fs5.default.existsSync(indexPath);
  if (process.env.NODE_ENV !== "production" || !hasDist) {
    console.log("[CommuteCast Backend] Starting Vite in middleware mode...");
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false
        // Tắt HMR để tránh WebSocket
      },
      appType: "spa"
    });
    app2.use(vite.middlewares);
    app2.get("*", async (req, res, next) => {
      if (req.path.startsWith("/api/")) {
        return next();
      }
      try {
        const url = req.originalUrl;
        let template = import_fs5.default.readFileSync(import_path5.default.resolve(process.cwd(), "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    console.log("[CommuteCast Backend] Serving static files from dist...");
    app2.use(import_express6.default.static(distPath, {
      maxAge: "1y",
      setHeaders: (res, filePath) => {
        if (filePath.endsWith("index.html")) {
          res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
          res.setHeader("Pragma", "no-cache");
          res.setHeader("Expires", "0");
        } else {
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        }
      }
    }));
    app2.get("*", (req, res) => {
      if (req.path.startsWith("/api/")) {
        return res.status(404).json({ error: "API route not found" });
      }
      if (import_fs5.default.existsSync(indexPath)) {
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        res.setHeader("Pragma", "no-cache");
        res.setHeader("Expires", "0");
        res.sendFile(indexPath);
      } else {
        res.status(404).send("Application not initialized. Please run build.");
      }
    });
  }
  const server = import_http.default.createServer(app2);
  const wss = new import_ws2.WebSocketServer({ noServer: true });
  const MAX_CONNECTIONS = 50;
  const ai = new import_genai3.GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  server.on("upgrade", (request, socket, head) => {
    const reqUrl = request.url ? new URL(request.url, `http://${request.headers.host || "localhost"}`) : null;
    const pathname = reqUrl ? reqUrl.pathname : "";
    if (pathname === "/ws/voice") {
      const token2 = reqUrl ? reqUrl.searchParams.get("token") : null;
      let isAuthenticated = false;
      if (token2) {
        const expiry = voiceTokens.get(token2);
        if (expiry && Date.now() <= expiry) {
          isAuthenticated = true;
          voiceTokens.delete(token2);
        }
      }
      if (!isAuthenticated) {
        socket.write("HTTP/1.1 401 Unauthorized\r\n\r\n");
        socket.destroy();
        return;
      }
      const ip = request.socket.remoteAddress || "unknown";
      if (isWsRateLimited(ip)) {
        socket.write("HTTP/1.1 429 Too Many Requests\r\n\r\n");
        socket.destroy();
        return;
      }
      if (wss.clients.size >= MAX_CONNECTIONS) {
        socket.write("HTTP/1.1 503 Service Unavailable\r\n\r\n");
        socket.destroy();
        return;
      }
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit("connection", ws, request);
      });
    } else {
      socket.destroy();
    }
  });
  wss.on("connection", async (clientWs) => {
    console.log("Client connected to WebSocket for Live API (/ws/voice)");
    let timeoutId = setTimeout(() => {
      console.log("[WS-VOICE] Inactivity timeout, closing.");
      clientWs.close();
    }, 3e4);
    const resetTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        console.log("[WS-VOICE] Inactivity timeout, closing.");
        clientWs.close();
      }, 3e4);
    };
    if (!process.env.GEMINI_API_KEY) {
      console.error("[WS-VOICE] GEMINI_API_KEY is not configured on the server.");
      clientWs.send(JSON.stringify({ error: "voice_realtime_not_available" }));
      clientWs.close();
      clearTimeout(timeoutId);
      return;
    }
    let session = null;
    try {
      session = await ai.live.connect({
        model: "gemini-3.1-flash-live-preview",
        callbacks: {
          onmessage: (message) => {
            resetTimeout();
            const audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (audio) clientWs.send(JSON.stringify({ audio }));
            if (message.serverContent?.interrupted)
              clientWs.send(JSON.stringify({ interrupted: true }));
          }
        },
        config: {
          responseModalities: [import_genai3.Modality.AUDIO],
          speechConfig: {
            // 'Puck', 'Charon', 'Kore', 'Fenrir', 'Zephyr'
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Zephyr" } }
          },
          systemInstruction: "You are a helpful CommuteCast assistant."
        }
      });
      clientWs.on("message", (data) => {
        resetTimeout();
        try {
          const { audio } = JSON.parse(data.toString());
          if (audio && session) {
            session.sendRealtimeInput({
              audio: { data: audio, mimeType: "audio/pcm;rate=16000" }
            });
          }
        } catch (e) {
          console.error("[WS-VOICE] Error processing incoming client audio message:", e);
        }
      });
      clientWs.on("close", () => {
        clearTimeout(timeoutId);
        if (session) {
          session.close();
        }
        console.log("Client disconnected from Live API");
      });
      clientWs.on("error", (err) => {
        clearTimeout(timeoutId);
        console.error("[WS-VOICE] Client socket error:", err);
      });
    } catch (error) {
      clearTimeout(timeoutId);
      console.error("Failed to connect to Live API:", error);
      clientWs.send(JSON.stringify({ error: "voice_realtime_not_available" }));
      clientWs.close();
    }
  });
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`[CommuteCast Backend] running on http://localhost:${PORT}`);
  });
}
if (!process.env.VITEST) {
  serveApp();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  app
});
//# sourceMappingURL=server.cjs.map
