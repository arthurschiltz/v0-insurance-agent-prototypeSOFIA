import { QuoteFormData } from './form-schema';

const STORAGE_KEY = 'sofia_insurance_quotes';

export interface StoredQuote extends QuoteFormData {
  id: string;
  timestamp: number;
}

export const getStoredQuotes = (): StoredQuote[] => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to retrieve quotes from localStorage:', error);
    return [];
  }
};

export const saveQuote = (data: QuoteFormData): StoredQuote => {
  const quote: StoredQuote = {
    ...data,
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    timestamp: Date.now(),
  };

  try {
    const existing = getStoredQuotes();
    const updated = [quote, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Failed to save quote to localStorage:', error);
  }

  return quote;
};

export const clearQuotes = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear quotes from localStorage:', error);
  }
};

export const getQuoteCount = (): number => {
  return getStoredQuotes().length;
};
