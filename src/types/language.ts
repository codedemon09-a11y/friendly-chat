export type Language = 'en' | 'hi' | 'bn' | 'ta' | 'mr';

export const LANGUAGE_ORDER: Language[] = ['en', 'mr', 'hi', 'ta', 'bn'];

export const LANGUAGE_LABELS: Record<Language, { name: string; nativeName: string }> = {
  en: { name: 'English', nativeName: 'English' },
  mr: { name: 'Marathi', nativeName: 'मराठी' },
  hi: { name: 'Hindi', nativeName: 'हिंदी' },
  ta: { name: 'Tamil', nativeName: 'தமிழ்' },
  bn: { name: 'Bengali', nativeName: 'বাংলা' },
};
