import { Link } from 'react-router-dom';
import { Heart, Github, Twitter } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';

export function Footer() {
  const { language } = useApp();

  const content = {
    en: {
      tagline: 'Explore the wisdom of ancient Hindu scriptures',
      quickLinks: 'Quick Links',
      scriptures: 'Scriptures',
      categories: 'Categories',
      resources: 'Resources',
      home: 'Home',
      allScriptures: 'All Scriptures',
      search: 'Search',
      bookmarks: 'Bookmarks',
      about: 'About Us',
      bhagavadGita: 'Bhagavad Gita',
      ramayan: 'Ramayan',
      vedas: 'Vedas',
      upanishads: 'Upanishads',
      puranas: 'Puranas',
      verseOfDay: 'Verse of the Day',
      dailyQuote: 'Daily Quote',
      downloadPdf: 'Download PDFs',
      madeWith: 'Made with',
      forSeekers: 'for spiritual seekers',
      copyright: '© 2024 Shastra Path. For educational and spiritual purposes.',
    },
    hi: {
      tagline: 'प्राचीन हिंदू ग्रंथों की ज्ञान यात्रा',
      quickLinks: 'त्वरित लिंक',
      scriptures: 'ग्रंथ',
      categories: 'श्रेणियाँ',
      resources: 'संसाधन',
      home: 'होम',
      allScriptures: 'सभी ग्रंथ',
      search: 'खोजें',
      bookmarks: 'बुकमार्क',
      about: 'हमारे बारे में',
      bhagavadGita: 'भगवद्गीता',
      ramayan: 'रामायण',
      vedas: 'वेद',
      upanishads: 'उपनिषद्',
      puranas: 'पुराण',
      verseOfDay: 'आज का श्लोक',
      dailyQuote: 'दैनिक उद्धरण',
      downloadPdf: 'PDF डाउनलोड',
      madeWith: 'बनाया गया',
      forSeekers: 'आध्यात्मिक साधकों के लिए',
      copyright: '© 2024 शास्त्र पाठ। शैक्षिक और आध्यात्मिक उद्देश्यों के लिए।',
    }
  };

  const t = content[language as 'en' | 'hi'] || content.en;

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground shadow-spiritual">
                <span className="text-xl">🕉️</span>
              </div>
              <h2 className="font-display text-xl font-bold">
                {language === 'hi' ? 'शास्त्र पाठ' : 'Shastra Path'}
              </h2>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {t.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t.home}</Link></li>
              <li><Link to="/scriptures" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t.allScriptures}</Link></li>
              <li><Link to="/search" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t.search}</Link></li>
              <li><Link to="/bookmarks" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t.bookmarks}</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t.about}</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">{t.categories}</h3>
            <ul className="space-y-2">
              <li><Link to="/scripture/bhagavad-gita" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t.bhagavadGita}</Link></li>
              <li><Link to="/scripture/ramayan" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t.ramayan}</Link></li>
              <li><Link to="/scripture/rig-veda" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t.vedas}</Link></li>
              <li><Link to="/scripture/upanishads" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t.upanishads}</Link></li>
              <li><Link to="/scripture/shiv-purana" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t.puranas}</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">{t.resources}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t.verseOfDay}</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t.dailyQuote}</Link></li>
              <li><Link to="/scriptures" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t.downloadPdf}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            {t.madeWith} <Heart className="w-4 h-4 text-primary fill-primary" /> {t.forSeekers}
          </p>
          <p className="text-muted-foreground text-xs text-center">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
