import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Search, Heart, Download, Play, Sparkles } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useApp } from '@/contexts/AppContext';
import { allScriptures, getVerseOfTheDay, scriptureCategories } from '@/data/scriptures';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroBanner from '@/assets/hero-banner.jpg';

export default function Index() {
  const { language } = useApp();
  const verseOfDay = getVerseOfTheDay();

  const content = {
    en: {
      heroTitle: 'Discover Ancient Wisdom',
      heroSubtitle: 'Explore the sacred Hindu scriptures in multiple languages',
      heroDesc: 'Read Bhagavad Gita, Ramayan, Vedas, Upanishads, Puranas and more with translations, meanings, and audio narration.',
      exploreBtn: 'Explore Scriptures',
      searchBtn: 'Search Verses',
      verseOfDay: 'Verse of the Day',
      readMore: 'Read More',
      featuredBooks: 'Sacred Scriptures',
      featuredDesc: 'Begin your spiritual journey with these timeless texts',
      categories: 'Browse by Category',
      features: 'Why Choose Shastra Path?',
      featuresList: [
        { icon: BookOpen, title: 'Complete Collection', desc: 'Access all major Hindu scriptures in one place' },
        { icon: Search, title: 'Smart Search', desc: 'Find verses by keywords, topics, or references' },
        { icon: Heart, title: 'Personal Library', desc: 'Bookmark and save your favorite verses' },
        { icon: Download, title: 'Offline Access', desc: 'Download PDFs for reading anywhere' },
        { icon: Play, title: 'Audio Narration', desc: 'Listen to verses with traditional recitation' },
        { icon: Sparkles, title: 'Multi-Language', desc: 'Read in Sanskrit, Hindi, English & more' },
      ],
      chapters: 'Chapters',
      verses: 'Verses',
    },
    hi: {
      heroTitle: 'प्राचीन ज्ञान की खोज',
      heroSubtitle: 'कई भाषाओं में पवित्र हिंदू ग्रंथों का अन्वेषण करें',
      heroDesc: 'भगवद्गीता, रामायण, वेद, उपनिषद, पुराण और अधिक अनुवाद, अर्थ और ऑडियो वर्णन के साथ पढ़ें।',
      exploreBtn: 'ग्रंथ देखें',
      searchBtn: 'श्लोक खोजें',
      verseOfDay: 'आज का श्लोक',
      readMore: 'और पढ़ें',
      featuredBooks: 'पवित्र ग्रंथ',
      featuredDesc: 'इन कालातीत ग्रंथों से अपनी आध्यात्मिक यात्रा शुरू करें',
      categories: 'श्रेणी के अनुसार ब्राउज़ करें',
      features: 'शास्त्र पाठ क्यों चुनें?',
      featuresList: [
        { icon: BookOpen, title: 'संपूर्ण संग्रह', desc: 'सभी प्रमुख हिंदू ग्रंथ एक स्थान पर' },
        { icon: Search, title: 'स्मार्ट खोज', desc: 'कीवर्ड, विषय या संदर्भ से श्लोक खोजें' },
        { icon: Heart, title: 'व्यक्तिगत पुस्तकालय', desc: 'अपने पसंदीदा श्लोक बुकमार्क करें' },
        { icon: Download, title: 'ऑफलाइन पहुंच', desc: 'कहीं भी पढ़ने के लिए PDF डाउनलोड करें' },
        { icon: Play, title: 'ऑडियो वर्णन', desc: 'पारंपरिक पाठ के साथ श्लोक सुनें' },
        { icon: Sparkles, title: 'बहु-भाषा', desc: 'संस्कृत, हिंदी, अंग्रेजी और अधिक में पढ़ें' },
      ],
      chapters: 'अध्याय',
      verses: 'श्लोक',
    }
  };

  const t = content[language as 'en' | 'hi'] || content.en;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBanner} 
            alt="Hindu Temple at Sunrise" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          <div className="absolute inset-0 bg-gradient-hero opacity-40" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6 animate-fade-up">
              🙏 {language === 'hi' ? 'नमस्ते • आपका स्वागत है' : 'Namaste • Welcome'}
            </span>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up delay-100">
              <span className="text-gradient-spiritual">{t.heroTitle}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-4 animate-fade-up delay-200">
              {t.heroSubtitle}
            </p>
            
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up delay-300">
              {t.heroDesc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-400">
              <Link to="/scriptures">
                <Button className="btn-spiritual text-lg px-8 py-6">
                  <BookOpen className="mr-2 w-5 h-5" />
                  {t.exploreBtn}
                </Button>
              </Link>
              <Link to="/search">
                <Button variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-primary/10">
                  <Search className="mr-2 w-5 h-5" />
                  {t.searchBtn}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Verse of the Day */}
      <section className="py-16 bg-gradient-spiritual">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-spiritual p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🪔</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold">{t.verseOfDay}</h2>
              </div>
              
              <blockquote className="border-l-4 border-primary pl-6 mb-6">
                <p className="font-sanskrit text-xl md:text-2xl text-foreground leading-relaxed mb-4">
                  {verseOfDay.sanskrit}
                </p>
                <p className="text-lg text-muted-foreground italic mb-4">
                  {verseOfDay.transliteration}
                </p>
                <p className="text-foreground">
                  {verseOfDay.translations[language as 'en' | 'hi'] || verseOfDay.translations.en}
                </p>
              </blockquote>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  — Bhagavad Gita, Chapter {verseOfDay.chapter}, Verse {verseOfDay.verse}
                </p>
                <Link to={`/scripture/bhagavad-gita/chapter/${verseOfDay.chapter}`}>
                  <Button variant="ghost" className="text-primary hover:text-primary/80">
                    {t.readMore} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Scriptures */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{t.featuredBooks}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.featuredDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allScriptures.slice(0, 6).map((scripture, index) => (
              <Link key={scripture.id} to={`/scripture/${scripture.slug}`}>
                <Card className="card-spiritual card-hover h-full overflow-hidden group">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
                      {scripture.category === 'gita' && '📖'}
                      {scripture.category === 'ramayan' && '🏹'}
                      {scripture.category === 'veda' && '📜'}
                      {scripture.category === 'upanishad' && '🕉️'}
                      {scripture.category === 'purana' && '📚'}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {scripture.title[language as 'en' | 'hi'] || scripture.title.en}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {scripture.description[language as 'en' | 'hi'] || scripture.description.en}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{scripture.chapterCount} {t.chapters}</span>
                      <span>•</span>
                      <span>{scripture.verseCount}+ {t.verses}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/scriptures">
              <Button variant="outline" size="lg" className="border-2">
                {language === 'hi' ? 'सभी ग्रंथ देखें' : 'View All Scriptures'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">{t.categories}</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {scriptureCategories.map((category) => (
              <Link 
                key={category.id} 
                to={`/scriptures?category=${category.id}`}
                className="card-spiritual p-6 text-center card-hover group"
              >
                <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">{category.icon}</span>
                <h3 className="font-display font-semibold text-sm group-hover:text-primary transition-colors">
                  {category.name[language as 'en' | 'hi'] || category.name.en}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">{t.features}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.featuresList.map((feature, index) => (
              <div key={index} className="card-spiritual p-6 card-hover">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            {language === 'hi' ? 'आज ही अपनी आध्यात्मिक यात्रा शुरू करें' : 'Begin Your Spiritual Journey Today'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {language === 'hi' 
              ? 'हजारों वर्षों के ज्ञान और बुद्धि का अनुभव करें।' 
              : 'Experience thousands of years of wisdom and enlightenment.'}
          </p>
          <Link to="/scriptures">
            <Button className="btn-spiritual text-lg px-10 py-6">
              <Sparkles className="mr-2 w-5 h-5" />
              {language === 'hi' ? 'अभी पढ़ना शुरू करें' : 'Start Reading Now'}
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
