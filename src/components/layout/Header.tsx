import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Moon, Sun, BookOpen, Heart, Globe } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
];

const navItems = [
  { path: '/', label: { en: 'Home', hi: 'होम' } },
  { path: '/scriptures', label: { en: 'Scriptures', hi: 'ग्रंथ' } },
  { path: '/search', label: { en: 'Search', hi: 'खोजें' } },
  { path: '/bookmarks', label: { en: 'Bookmarks', hi: 'बुकमार्क' } },
  { path: '/about', label: { en: 'About', hi: 'परिचय' } },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, theme, setTheme, bookmarks } = useApp();
  const location = useLocation();

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground shadow-spiritual">
              <span className="text-xl md:text-2xl">🕉️</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {language === 'hi' ? 'शास्त्र पाठ' : 'Shastra Path'}
              </h1>
              <p className="text-xs text-muted-foreground">
                {language === 'hi' ? 'पवित्र ग्रंथ' : 'Sacred Scriptures'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'nav-link font-medium',
                  location.pathname === item.path && 'text-primary active'
                )}
              >
                {item.label[language as 'en' | 'hi'] || item.label.en}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Search (Desktop) */}
            <Link to="/search" className="hidden md:flex">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Search className="w-5 h-5" />
              </Button>
            </Link>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                  <Globe className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border">
                {languages.map(lang => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={cn(
                      'cursor-pointer',
                      language === lang.code && 'bg-primary/10 text-primary'
                    )}
                  >
                    <span className="mr-2">{lang.nativeName}</span>
                    <span className="text-muted-foreground text-sm">({lang.name})</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-primary"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>

            {/* Bookmarks (Desktop) */}
            <Link to="/bookmarks" className="hidden md:flex relative">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Heart className="w-5 h-5" />
                {bookmarks.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                    {bookmarks.length}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-muted-foreground"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                  location.pathname === item.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-muted'
                )}
              >
                {item.path === '/' && <BookOpen className="w-5 h-5" />}
                {item.path === '/scriptures' && <span>📚</span>}
                {item.path === '/search' && <Search className="w-5 h-5" />}
                {item.path === '/bookmarks' && <Heart className="w-5 h-5" />}
                {item.path === '/about' && <span>ℹ️</span>}
                <span className="font-medium">
                  {item.label[language as 'en' | 'hi'] || item.label.en}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
