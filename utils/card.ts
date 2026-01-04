
import { CardType } from '../types';

export function validateCardLuhn(cardNumber: string): boolean {
  const digits = cardNumber.replace(/\D/g, '');
  if (digits.length < 13 || digits.length > 19) return false;
  if (digits[0] !== '4') return false; // Visa only for now

  let sum = 0;
  let isEven = false;
  
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
}

export function getCardType(bin: string): CardType {
  // Mock BIN mapping for prototype
  const mapping: Record<string, CardType> = {
    '453201': 'visa_signature',
    '411111': 'visa_classic',
    '401288': 'visa_infinite',
  };
  
  return mapping[bin] || 'visa_classic';
}

export function getIssuer(bin: string): string {
  const issuers: Record<string, string> = {
    '453201': 'SBI Card',
    '411111': 'HDFC Bank',
    '401288': 'ICICI Bank',
  };
  return issuers[bin] || 'Visa Partner Bank';
}
