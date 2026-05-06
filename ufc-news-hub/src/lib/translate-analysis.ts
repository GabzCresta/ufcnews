// ═══════════════════════════════════════════════════════════
// Analysis Translation Utility (PT -> EN)
// Mechanical dictionary fallback used when a locale-specific
// data-en.ts file does not exist for an analysis.
//
// PREFERRED: AI-translated data-en.ts via translator agent.
// This module is the safety net only.
// ═══════════════════════════════════════════════════════════

import type { Lang } from './i18n-labels';

// ── Weight Classes ──
const weightClasses: Record<string, string> = {
  'Peso Pesado (265 lbs)': 'Heavyweight (265 lbs)',
  'Peso Meio-Pesado (205 lbs)': 'Light Heavyweight (205 lbs)',
  'Peso Medio (185 lbs)': 'Middleweight (185 lbs)',
  'Peso Meio-Medio (170 lbs)': 'Welterweight (170 lbs)',
  'Peso Leve (155 lbs)': 'Lightweight (155 lbs)',
  'Peso Pena (145 lbs)': 'Featherweight (145 lbs)',
  'Peso Galo (135 lbs)': 'Bantamweight (135 lbs)',
  'Peso Mosca (125 lbs)': 'Flyweight (125 lbs)',
  'Peso Palha (115 lbs)': 'Strawweight (115 lbs)',
  'Peso Mosca Feminino (125 lbs)': "Women's Flyweight (125 lbs)",
  'Peso Galo Feminino (135 lbs)': "Women's Bantamweight (135 lbs)",
  'Peso Palha Feminino (115 lbs)': "Women's Strawweight (115 lbs)",
  'Peso Pena Feminino (145 lbs)': "Women's Featherweight (145 lbs)",
  'Peso Pesado': 'Heavyweight',
  'Peso Meio-Pesado': 'Light Heavyweight',
  'Peso Medio': 'Middleweight',
  'Peso Meio-Medio': 'Welterweight',
  'Peso Leve': 'Lightweight',
  'Peso Pena': 'Featherweight',
  'Peso Galo': 'Bantamweight',
  'Peso Mosca': 'Flyweight',
  'Peso Palha': 'Strawweight',
};

// ── Fight Methods ──
const methods: Record<string, string> = {
  'Decisao Unanime': 'Unanimous Decision',
  'Decisao Dividida': 'Split Decision',
  'Decisao Majoritaria': 'Majority Decision',
  'Submissao': 'Submission',
  'Nocaute': 'Knockout',
  'Nocaute Tecnico': 'TKO',
  'No Contest': 'No Contest',
  'Empate': 'Draw',
  'Desqualificacao': 'Disqualification',
};

// ── Months (full) ──
const monthsFull: Record<string, string> = {
  'Janeiro': 'January',
  'Fevereiro': 'February',
  'Marco': 'March',
  'Abril': 'April',
  'Maio': 'May',
  'Junho': 'June',
  'Julho': 'July',
  'Agosto': 'August',
  'Setembro': 'September',
  'Outubro': 'October',
  'Novembro': 'November',
  'Dezembro': 'December',
};

// ── Months (abbreviated) ──
const monthsAbbr: Record<string, string> = {
  'Jan': 'Jan',
  'Fev': 'Feb',
  'Mar': 'Mar',
  'Abr': 'Apr',
  'Mai': 'May',
  'Jun': 'Jun',
  'Jul': 'Jul',
  'Ago': 'Aug',
  'Set': 'Sep',
  'Out': 'Oct',
  'Nov': 'Nov',
  'Dez': 'Dec',
};

// ── Stat Labels ──
const statLabels: Record<string, string> = {
  'Sig. Strikes por Minuto': 'Sig. Strikes per Minute',
  'Precisao de Strikes (%)': 'Strike Accuracy (%)',
  'Strikes Absorvidos/Min': 'Strikes Absorbed/Min',
  'Defesa de Strikes (%)': 'Strike Defense (%)',
  'Takedowns por 15 Min': 'Takedowns per 15 Min',
  'Precisao de Takedown (%)': 'Takedown Accuracy (%)',
  'Defesa de Takedown (%)': 'Takedown Defense (%)',
  'Submissoes por 15 Min': 'Submissions per 15 Min',
};

// ── Tale of Tape Labels ──
const taleOfTapeLabels: Record<string, string> = {
  'Idade': 'Age',
  'Altura': 'Height',
  'Envergadura': 'Reach',
  'Stance': 'Stance',
  'Academia': 'Gym',
  'Peso': 'Weight',
};

// ── Confidence / Risk / Momentum / Quality Labels ──
const labels: Record<string, string> = {
  // Confidence
  'MEDIA': 'MEDIUM',
  'MEDIA-ALTA': 'MEDIUM-HIGH',
  'ALTA': 'HIGH',
  'BAIXA': 'LOW',
  'MEDIA-BAIXA': 'MEDIUM-LOW',
  // Risk
  'RISCO ALTO': 'HIGH RISK',
  'RISCO MEDIO': 'MEDIUM RISK',
  'RISCO BAIXO': 'LOW RISK',
  'POSITIVO': 'POSITIVE',
  'ENORME POSITIVO': 'HUGE POSITIVE',
  'NEUTRO': 'NEUTRAL',
  // Momentum
  'Em Alta': 'On Fire',
  'Em Ascensao': 'Rising',
  'Em Recuperacao': 'Recovering',
  'Estavel': 'Stable',
  'Estavel (com ressalvas)': 'Stable (with caveats)',
  // Quality
  'Excelente': 'Excellent',
  'Muito Bom': 'Very Good',
  'Bom': 'Good',
  'Medio': 'Average',
  'Ruim': 'Poor',
  // Betting edge
  'forte': 'strong',
  'moderado': 'moderate',
  'leve': 'slight',
  'alta': 'high',
  'media': 'medium',
  'baixa': 'low',
  // Value pick types
  'Over/Under': 'Over/Under',
  'Duracao': 'Duration',
  'Metodo': 'Method',
  'Moneyline': 'Moneyline',
  'Prop': 'Prop',
  // Danger zone
  'EQUILIBRADO': 'BALANCED',
  'ROUND DECISIVO': 'DECISIVE ROUND',
};

// ── Common Phrases ──
type PhraseRule = [RegExp, string | ((_match: string, ...args: string[]) => string)];

const phrases: PhraseRule[] = [
  // Date pattern: "NN de Month, YYYY" -> "Month NN, YYYY"
  [/(\d{1,2}) de (Janeiro|Fevereiro|Marco|Abril|Maio|Junho|Julho|Agosto|Setembro|Outubro|Novembro|Dezembro),?\s*(\d{4})/gi,
    (_match: string, day: string, month: string, year: string) => {
      const key = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
      const m = monthsFull[key] || month;
      return `${m} ${day}, ${year}`;
    }],

  // Abbreviated month + year: "Set 2023" -> "Sep 2023"
  [/\b(Jan|Fev|Mar|Abr|Mai|Jun|Jul|Ago|Set|Out|Nov|Dez)\b(?=\s+\d{4})/g,
    (_match: string, month: string) => monthsAbbr[month] || month],

  // Rankings: "#N Peso Medio" -> "#N Middleweight"
  [/#(\d+)\s+(Peso\s+(?:Pesado|Meio-Pesado|Medio|Meio-Medio|Leve|Pena|Galo|Mosca|Palha)(?:\s+Feminino)?)/gi,
    (_match: string, num: string, wc: string) => {
      const entry = Object.entries(weightClasses).find(([k]) =>
        k.toLowerCase().startsWith(wc.toLowerCase())
      );
      const translated = entry ? entry[1].replace(/\s*\(.*\)/, '') : wc;
      return `#${num} ${translated}`;
    }],

  // Champion terms
  [/\bCampeao\b/g, 'Champion'],
  [/\bCampea\b/g, 'Champion'],
  [/\bex-campeao\b/gi, 'former champion'],

  // Disclaimer
  [/Analise estatistica para fins informativos\. Aposte com responsabilidade\./g,
    'Statistical analysis for informational purposes only. Bet responsibly.'],

  // EN-specific replacements
  [/Pos Weigh-Ins/gi, 'Post Weigh-Ins'],
  [/Titulo em Jogo/gi, 'Title on the Line'],
  [/Perdeu Titulo/gi, 'Lost Title'],
  [/Queixo Exposto/gi, 'Chin Exposed'],
  [/Fraqueza Exposta/gi, 'Weakness Exposed'],
  [/Bastidores/gi, 'Behind the Scenes'],
  [/\banos\b/g, 'years old'],
  [/\bmeses parado\b/g, 'months inactive'],
  [/\bderrotas seguidas\b/g, 'consecutive losses'],
  [/\bderrotas\b/g, 'losses'],
  [/\bvitorias\b/g, 'wins'],
  [/\bnocaute\b/gi, 'knockout'],
  [/\benvergadura\b/gi, 'reach'],
  [/\bpolegadas\b/g, 'inches'],
  [/\blutador\b/gi, 'fighter'],
  [/\bluta em casa\b/gi, 'fights at home'],
  [/\bArmadilha:/g, 'Trap:'],
  [/\bArmadilha\b/g, 'Trap'],
];

// ── Deep recursive translator ──
function translateString(str: string): string {
  if (!str || typeof str !== 'string') return str;

  // 1. Exact matches across all dictionaries
  const allExactMaps = [weightClasses, methods, statLabels, taleOfTapeLabels, labels];
  for (const map of allExactMaps) {
    if (map[str]) return map[str];
  }

  let result = str;

  // 2. Partial replacements via phrases
  for (const [pattern, replacement] of phrases) {
    result = result.replace(pattern, replacement as string);
  }

  // 3. Weight class replacement within strings
  for (const [pt, en] of Object.entries(weightClasses)) {
    if (result.includes(pt)) {
      result = result.split(pt).join(en);
    }
  }

  // 4. Method replacement within strings
  for (const [pt, en] of Object.entries(methods)) {
    if (result.includes(pt)) {
      result = result.split(pt).join(en);
    }
  }

  // 5. Stat label replacement within strings
  for (const [pt, en] of Object.entries(statLabels)) {
    if (result.includes(pt)) {
      result = result.split(pt).join(en);
    }
  }

  return result;
}

// ── Deep object translator ──
function translateDeep<T>(obj: T): T {
  if (obj === null || obj === undefined) return obj;

  if (typeof obj === 'string') {
    return translateString(obj) as T;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => translateDeep(item)) as T;
  }

  if (typeof obj === 'object' && obj !== null) {
    if (obj instanceof Date) return obj;

    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
      result[key] = translateDeep(value);
    }
    return result as T;
  }

  return obj;
}

/**
 * Translates analysis data from Portuguese to English (mechanical fallback).
 * Returns input unchanged when locale is undefined or 'pt'.
 */
export function translateAnalysis<T>(data: T, locale?: Lang): T {
  if (!locale || locale === 'pt') return data;
  return translateDeep(data);
}

/**
 * Helper to check if locale needs translation
 */
export function needsTranslation(locale: string): boolean {
  return locale !== 'pt';
}
