
import { SessionData, CardType, Language } from '../types';
import { getCardType, getIssuer } from './card';

const SESSION_KEY = 'benefitlens_session';
const SESSION_DURATION = 15 * 60 * 1000; // 15 minutes

export function createSession(cardNumber: string, language: Language): SessionData {
  const bin = cardNumber.replace(/\D/g, '').substring(0, 6);
  const last4 = cardNumber.replace(/\D/g, '').slice(-4);
  const now = Date.now();
  
  const session: SessionData = {
    sessionId: Math.random().toString(36).substring(2, 15),
    bin,
    last4,
    cardType: getCardType(bin),
    issuer: getIssuer(bin),
    timestamp: now,
    expiresAt: now + SESSION_DURATION,
    language,
    benefitsUsed: []
  };
  
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}

export function getSession(): SessionData | null {
  const raw = sessionStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  
  const session: SessionData = JSON.parse(raw);
  if (Date.now() > session.expiresAt) {
    sessionStorage.removeItem(SESSION_KEY);
    return null;
  }
  
  return session;
}

export function clearSession(): void {
  sessionStorage.removeItem(SESSION_KEY);
}

export function updateSession(session: SessionData): void {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
}
