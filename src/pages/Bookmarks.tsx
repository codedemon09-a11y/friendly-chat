import { Link } from 'react-router-dom';
import { Heart, Trash2, BookOpen, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useApp } from '@/contexts/AppContext';
import { allScriptures } from '@/data/scriptures';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Bookmarks() {
  const { language, bookmarks, removeBookmark } = useApp();

  const content = {
    en: {
      title: 'Your Bookmarks',
      subtitle: 'Saved verses for quick access',
      empty: 'No bookmarks yet',
      emptyDesc: 'Start reading and bookmark verses you want to revisit',
      exploreBtn: 'Explore Scriptures',
      chapter: 'Chapter',
      verse: 'Verse',
      remove: 'Remove',
      totalBookmarks: 'bookmarks saved',
    },
    hi: {
      title: 'आपके बुकमार्क',
      subtitle: 'त्वरित पहुंच के लिए सहेजे गए श्लोक',
      empty: 'अभी तक कोई बुकमार्क नहीं',
      emptyDesc: 'पढ़ना शुरू करें और उन श्लोकों को बुकमार्क करें जिन्हें आप फिर से देखना चाहते हैं',
      exploreBtn: 'ग्रंथ देखें',
      chapter: 'अध्याय',
      verse: 'श्लोक',
      remove: 'हटाएं',
      totalBookmarks: 'बुकमार्क सहेजे गए',
    }
  };

  const t = content[language as 'en' | 'hi'] || content.en;

  // Get full verse data for each bookmark
  const bookmarkData = bookmarks.map(bookmark => {
    const scripture = allScriptures.find(s => s.id === bookmark.scriptureId);
    const chapter = scripture?.chapters.find(c => c.id === bookmark.chapterId);
    const verse = chapter?.verses.find(v => v.id === bookmark.verseId);
    return { ...bookmark, scripture, chapter, verse };
  }).filter(b => b.verse);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-gradient-spiritual">
        <div className="container px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-muted-foreground text-lg mb-4">{t.subtitle}</p>
          {bookmarks.length > 0 && (
            <Badge variant="secondary" className="text-base px-4 py-2">
              {bookmarks.length} {t.totalBookmarks}
            </Badge>
          )}
        </div>
      </section>

      {/* Bookmarks List */}
      <section className="py-12">
        <div className="container px-4">
          {bookmarkData.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
                <Heart className="w-10 h-10 text-muted-foreground" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">{t.empty}</h2>
              <p className="text-muted-foreground mb-8">{t.emptyDesc}</p>
              <Link to="/scriptures">
                <Button className="btn-spiritual">
                  <BookOpen className="w-4 h-4 mr-2" />
                  {t.exploreBtn}
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4 max-w-4xl mx-auto">
              {bookmarkData.map((bookmark) => (
                <Card key={bookmark.verseId} className="card-spiritual card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary">
                            {bookmark.scripture?.title[language as 'en' | 'hi']}
                          </Badge>
                          <Badge variant="outline">
                            {t.chapter} {bookmark.verse?.chapter}, {t.verse} {bookmark.verse?.verse}
                          </Badge>
                        </div>

                        <blockquote className="verse-highlight mb-4">
                          <p className="font-sanskrit text-foreground">
                            {bookmark.verse?.sanskrit}
                          </p>
                        </blockquote>

                        <p className="text-muted-foreground italic text-sm mb-4">
                          {bookmark.verse?.transliteration}
                        </p>

                        <p className="text-foreground">
                          {bookmark.verse?.translations[language as 'en' | 'hi'] || bookmark.verse?.translations.en}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                      <Link to={`/scripture/${bookmark.scripture?.slug}/chapter/${bookmark.verse?.chapter}#verse-${bookmark.verse?.verse}`}>
                        <Button variant="ghost" size="sm" className="text-primary">
                          {language === 'hi' ? 'पूरा पढ़ें' : 'Read Full Context'}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeBookmark(bookmark.verseId)}
                        className="text-destructive hover:text-destructive/80"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        {t.remove}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
