import { QuoteFormData, COIFormData } from './form-schema';

const QUOTES_STORAGE_KEY = 'jose_insurance_quotes';
const COIS_STORAGE_KEY = 'jose_insurance_cois';

export interface StoredQuote extends QuoteFormData {
  id: string;
  timestamp: number;
}

export interface StoredCOI extends COIFormData {
  id: string;
  timestamp: number;
}

export const getStoredQuotes = (): StoredQuote[] => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(QUOTES_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to retrieve quotes from localStorage:', error);
    return [];
  }
};

export const getStoredCOIs = (): StoredCOI[] => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(COIS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to retrieve COI requests from localStorage:', error);
    return [];
  }
};

export const saveQuote = (data: QuoteFormData): StoredQuote => {
  const quote: StoredQuote = {
    ...data,
    id: `quote-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    timestamp: Date.now(),
  };

  try {
    const existing = getStoredQuotes();
    const updated = [quote, ...existing];
    localStorage.setItem(QUOTES_STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Failed to save quote to localStorage:', error);
  }

  return quote;
};

export const saveCOI = (data: COIFormData): StoredCOI => {
  const coi: StoredCOI = {
    ...data,
    id: `coi-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    timestamp: Date.now(),
  };

  try {
    const existing = getStoredCOIs();
    const updated = [coi, ...existing];
    localStorage.setItem(COIS_STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Failed to save COI to localStorage:', error);
  }

  return coi;
};

export const clearQuotes = (): void => {
  try {
    localStorage.removeItem(QUOTES_STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear quotes from localStorage:', error);
  }
};

export const clearCOIs = (): void => {
  try {
    localStorage.removeItem(COIS_STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear COI requests from localStorage:', error);
  }
};

export const getQuoteCount = (): number => {
  return getStoredQuotes().length;
};

export const getCOICount = (): number => {
  return getStoredCOIs().length;
};
