
export type CardType = 'visa_classic' | 'visa_signature' | 'visa_infinite' | 'unknown';
export type Language = 'en' | 'ta' | 'hi';
export type Category = 'all' | 'travel' | 'dining' | 'shopping' | 'insurance' | 'fuel';
export type ContextLocation = 'any' | 'airport' | 'mall' | 'gas_station' | 'restaurant';

export interface Benefit {
  id: string;
  cardTypes: CardType[];
  category: Category;
  priority: 'high' | 'medium' | 'low';
  title: Record<Language, string>;
  shortDescription: Record<Language, string>;
  originalTnC: string;
  simplifiedExplanation: Record<Language, {
    whatYouGet: string;
    howToUse: string[];
    limitations: string[];
    proTips: string[];
  }>;
  monetaryValue: number;
  usageFrequency: string;
  activationMethod: 'automatic' | 'manual_enrollment';
  relevanceTriggers: {
    locations: ContextLocation[];
    dayOfWeek: string[] | 'any';
  };
}

export interface SessionData {
  sessionId: string;
  bin: string;
  last4: string;
  cardType: CardType;
  issuer: string;
  timestamp: number;
  expiresAt: number;
  language: Language;
  benefitsUsed: string[];
}

export interface UserContext {
  location: ContextLocation;
  isWeekend: boolean;
}
