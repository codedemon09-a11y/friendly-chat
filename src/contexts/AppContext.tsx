import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'bn' | 'ta' | 'mr';
type Theme = 'light' | 'dark';

interface Bookmark {
  verseId: string;
  scriptureId: string;
  chapterId: string;
  addedAt: Date;
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  bookmarks: Bookmark[];
  addBookmark: (bookmark: Omit<Bookmark, 'addedAt'>) => void;
  removeBookmark: (verseId: string) => void;
  isBookmarked: (verseId: string) => boolean;
  fontSize: number;
  setFontSize: (size: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  LANGUAGE: 'shastra-lang',
  THEME: 'shastra-theme',
  BOOKMARKS: 'shastra-bookmarks',
  FONT_SIZE: 'shastra-font-size'
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    return (saved as Language) || 'en';
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME);
    if (saved) return saved as Theme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    return saved ? JSON.parse(saved) : [];
  });

  const [fontSize, setFontSizeState] = useState<number>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.FONT_SIZE);
    return saved ? parseInt(saved) : 16;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FONT_SIZE, fontSize.toString());
  }, [fontSize]);

  const setLanguage = (lang: Language) => setLanguageState(lang);
  
  const setTheme = (newTheme: Theme) => setThemeState(newTheme);
  
  const setFontSize = (size: number) => setFontSizeState(size);

  const addBookmark = (bookmark: Omit<Bookmark, 'addedAt'>) => {
    setBookmarks(prev => [...prev, { ...bookmark, addedAt: new Date() }]);
  };

  const removeBookmark = (verseId: string) => {
    setBookmarks(prev => prev.filter(b => b.verseId !== verseId));
  };

  const isBookmarked = (verseId: string) => {
    return bookmarks.some(b => b.verseId === verseId);
  };

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      theme,
      setTheme,
      bookmarks,
      addBookmark,
      removeBookmark,
      isBookmarked,
      fontSize,
      setFontSize
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
