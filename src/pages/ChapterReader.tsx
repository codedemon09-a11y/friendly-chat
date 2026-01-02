import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Share2, 
  Copy, 
  Download,
  Volume2,
  Check,
  Minus,
  Plus,
  Loader2
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useApp } from '@/contexts/AppContext';
import { allScriptures } from '@/data/scriptures';
import { useScriptureChapters, useScriptureVerses } from '@/hooks/useScriptureData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export default function ChapterReader() {
  const { slug, chapterNum } = useParams<{ slug: string; chapterNum: string }>();
  const { language, isBookmarked, addBookmark, removeBookmark, fontSize, setFontSize } = useApp();
  const navigate = useNavigate();
  const [selectedVerse, setSelectedVerse] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [copiedVerse, setCopiedVerse] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scripture = allScriptures.find(s => s.slug === slug);
  const chapterNumber = parseInt(chapterNum || '1');
  
  // Use unified hooks for all scriptures
  const { chapters: allChapters } = useScriptureChapters(slug || '');
  const { verses: loadedVerses, isLoading: versesLoading, error: versesError } = useScriptureVerses(
    slug || '', 
    chapterNumber
  );

  // Get chapter data
  const chapter = allChapters.find(c => c.number === chapterNumber);

  // Get verses from hook
  const verses = loadedVerses;

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!scripture || !chapter) {
    return (
      <Layout>
        <div className="container px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Chapter Not Found</h1>
          <Link to={scripture ? `/scripture/${scripture.slug}` : '/scriptures'}>
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const prevChapter = allChapters.find(c => c.number === chapterNumber - 1);
  const nextChapter = allChapters.find(c => c.number === chapterNumber + 1);

  const handleCopyVerse = (verse: any) => {
    const text = `${verse.sanskrit}\n\n${verse.transliteration}\n\n${verse.translations?.[language as 'en' | 'hi'] || verse.translations?.en || ''}\n\n— ${scripture.title.en}, Chapter ${verse.chapter}, Verse ${verse.verse}`;
    navigator.clipboard.writeText(text);
    setCopiedVerse(verse.id);
    toast({ title: language === 'hi' ? 'श्लोक कॉपी हो गया!' : 'Verse copied!' });
    setTimeout(() => setCopiedVerse(null), 2000);
  };

  const handleShareVerse = (verse: any) => {
    const url = `${window.location.origin}/scripture/${slug}/chapter/${chapterNumber}#verse-${verse.verse}`;
    if (navigator.share) {
      navigator.share({
        title: `${scripture.title.en} - Chapter ${verse.chapter}, Verse ${verse.verse}`,
        text: verse.translations?.en || '',
        url
      });
    } else {
      navigator.clipboard.writeText(url);
      toast({ title: language === 'hi' ? 'लिंक कॉपी हो गया!' : 'Link copied!' });
    }
  };

  const handleBookmark = (verse: any) => {
    if (isBookmarked(verse.id)) {
      removeBookmark(verse.id);
      toast({ title: language === 'hi' ? 'बुकमार्क हटा दिया गया' : 'Bookmark removed' });
    } else {
      addBookmark({
        verseId: verse.id,
        scriptureId: scripture.id,
        chapterId: chapter.id
      });
      toast({ title: language === 'hi' ? 'बुकमार्क जोड़ दिया गया' : 'Bookmark added' });
    }
  };

  const content = {
    en: {
      chapter: 'Chapter',
      verse: 'Verse',
      meaning: 'Meaning',
      translation: 'Translation',
      previous: 'Previous',
      next: 'Next',
      verses: 'verses',
      backToScripture: 'Back to',
      loading: 'Loading verses...',
      error: 'Failed to load verses. Please try again.',
    },
    hi: {
      chapter: 'अध्याय',
      verse: 'श्लोक',
      meaning: 'अर्थ',
      translation: 'अनुवाद',
      previous: 'पिछला',
      next: 'अगला',
      verses: 'श्लोक',
      backToScripture: 'वापस',
      loading: 'श्लोक लोड हो रहे हैं...',
      error: 'श्लोक लोड करने में विफल। कृपया पुनः प्रयास करें।',
    }
  };

  const t = content[language as 'en' | 'hi'] || content.en;

  return (
    <Layout>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Top Navigation */}
      <div className="sticky top-16 md:top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <Link 
              to={`/scripture/${scripture.slug}`} 
              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">{t.backToScripture} {scripture.title[language as 'en' | 'hi']}</span>
              <span className="sm:hidden">{scripture.title[language as 'en' | 'hi']}</span>
            </Link>

            <div className="flex items-center gap-2">
              {/* Font Size Controls */}
              <div className="hidden sm:flex items-center gap-1 border border-border rounded-lg p-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                  disabled={fontSize <= 12}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="px-2 text-sm text-muted-foreground">{fontSize}px</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                  disabled={fontSize >= 24}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              <Button variant="ghost" size="sm">
                <Volume2 className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Audio</span>
              </Button>
              
              <Button variant="ghost" size="sm">
                <Download className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">PDF</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Chapter Navigation */}
          <aside className="hidden lg:block">
            <div className="sticky top-40">
              <h3 className="font-display font-semibold mb-4">{t.chapter}s</h3>
              <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-2">
                {allChapters.map(ch => (
                  <Link
                    key={ch.id}
                    to={`/scripture/${scripture.slug}/chapter/${ch.number}`}
                    className={cn(
                      "block px-3 py-2 rounded-lg text-sm transition-colors",
                      ch.number === chapterNumber 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {ch.number}. {ch.title[language as 'en' | 'hi'] || ch.title.en}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content - Verses */}
          <main className="lg:col-span-2">
            {/* Chapter Header */}
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                {t.chapter} {chapter.number}
              </Badge>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
                {chapter.title[language as 'en' | 'hi'] || chapter.title.en}
              </h1>
              <p className="font-sanskrit text-xl text-muted-foreground mb-4">
                {chapter.title.sanskrit}
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {chapter.description[language as 'en' | 'hi'] || chapter.description.en}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {chapter.topics.map(topic => (
                  <Badge key={topic} variant="outline">{topic}</Badge>
                ))}
              </div>
            </div>

            {/* Loading State */}
            {versesLoading && (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
                <p className="text-muted-foreground">{t.loading}</p>
              </div>
            )}

            {/* Error State */}
            {versesError && (
              <div className="text-center py-20">
                <p className="text-destructive mb-4">{t.error}</p>
                <Button onClick={() => window.location.reload()}>
                  {language === 'hi' ? 'पुनः प्रयास करें' : 'Try Again'}
                </Button>
              </div>
            )}

            {/* Verses */}
            {!versesLoading && !versesError && (
              <div className="space-y-8">
                {verses.map((verse: any) => (
                  <article 
                    key={verse.id}
                    id={`verse-${verse.verse}`}
                    className={cn(
                      "card-spiritual p-6 md:p-8 transition-all",
                      selectedVerse === verse.id && "ring-2 ring-primary"
                    )}
                    onClick={() => setSelectedVerse(verse.id)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{t.verse} {verse.verse}</Badge>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => { e.stopPropagation(); handleBookmark(verse); }}
                          className={cn(isBookmarked(verse.id) && "text-primary")}
                        >
                          <Heart className={cn("w-4 h-4", isBookmarked(verse.id) && "fill-primary")} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => { e.stopPropagation(); handleCopyVerse(verse); }}
                        >
                          {copiedVerse === verse.id ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => { e.stopPropagation(); handleShareVerse(verse); }}
                        >
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Sanskrit */}
                    <blockquote className="verse-highlight mb-6">
                      <p 
                        className="font-sanskrit text-foreground leading-loose"
                        style={{ fontSize: `${fontSize + 4}px` }}
                      >
                        {verse.sanskrit}
                      </p>
                    </blockquote>

                    {/* Transliteration */}
                    <p 
                      className="text-muted-foreground italic mb-6"
                      style={{ fontSize: `${fontSize}px` }}
                    >
                      {verse.transliteration}
                    </p>

                    <Separator className="my-6" />

                    {/* Translation */}
                    <div className="mb-6">
                      <h4 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                        {t.translation}
                      </h4>
                      <p 
                        className="text-foreground leading-relaxed"
                        style={{ fontSize: `${fontSize}px` }}
                      >
                        {verse.translations?.[language as 'en' | 'hi'] || verse.translations?.en || ''}
                      </p>
                    </div>

                    {/* Meaning - only show if available */}
                    {(verse.meaning?.[language as 'en' | 'hi'] || verse.meaning?.en) && (
                      <div className="bg-muted/30 rounded-lg p-4">
                        <h4 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                          {t.meaning}
                        </h4>
                        <p 
                          className="text-muted-foreground"
                          style={{ fontSize: `${fontSize - 1}px` }}
                        >
                          {verse.meaning?.[language as 'en' | 'hi'] || verse.meaning?.en}
                        </p>
                      </div>
                    )}

                    {/* Keywords */}
                    {verse.keywords && verse.keywords.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-4">
                        {verse.keywords.map((keyword: string) => (
                          <Badge key={keyword} variant="outline" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            )}

            {/* Chapter Navigation */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
              {prevChapter ? (
                <Link to={`/scripture/${scripture.slug}/chapter/${prevChapter.number}`}>
                  <Button variant="outline">
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    {t.previous}: {prevChapter.title[language as 'en' | 'hi'] || prevChapter.title.en}
                  </Button>
                </Link>
              ) : <div />}
              
              {nextChapter ? (
                <Link to={`/scripture/${scripture.slug}/chapter/${nextChapter.number}`}>
                  <Button variant="outline">
                    {t.next}: {nextChapter.title[language as 'en' | 'hi'] || nextChapter.title.en}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              ) : <div />}
            </div>
          </main>

          {/* Right Sidebar - Quick Info */}
          <aside className="hidden lg:block">
            <div className="sticky top-40">
              <Card className="card-spiritual">
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold mb-4">
                    {scripture.title[language as 'en' | 'hi']}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {chapter.verseCount} {t.verses}
                  </p>
                  <Separator className="my-4" />
                  <div className="space-y-2">
                    <p className="text-sm font-medium">{t.chapter} Topics:</p>
                    <div className="flex flex-wrap gap-1">
                      {chapter.topics.map(topic => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
