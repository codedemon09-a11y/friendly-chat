import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, X, BookOpen, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useApp } from '@/contexts/AppContext';
import { searchScriptures, allScriptures } from '@/data/scriptures';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SearchPage() {
  const { language } = useApp();
  const [query, setQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const results = useMemo(() => {
    if (query.length < 2) return [];
    setHasSearched(true);
    return searchScriptures(query, language as 'en' | 'hi');
  }, [query, language]);

  const content = {
    en: {
      title: 'Search Scriptures',
      subtitle: 'Find verses, chapters, and books by keyword',
      placeholder: 'Search by verse, keyword, or topic...',
      results: 'results found',
      noResults: 'No results found for',
      tryDifferent: 'Try different keywords or browse scriptures',
      suggestions: 'Popular Searches',
      chapter: 'Chapter',
      verse: 'Verse',
      readMore: 'Read More',
    },
    hi: {
      title: 'ग्रंथ खोजें',
      subtitle: 'कीवर्ड द्वारा श्लोक, अध्याय और पुस्तकें खोजें',
      placeholder: 'श्लोक, कीवर्ड या विषय से खोजें...',
      results: 'परिणाम मिले',
      noResults: 'के लिए कोई परिणाम नहीं मिला',
      tryDifferent: 'अलग कीवर्ड आज़माएं या ग्रंथ ब्राउज़ करें',
      suggestions: 'लोकप्रिय खोज',
      chapter: 'अध्याय',
      verse: 'श्लोक',
      readMore: 'और पढ़ें',
    }
  };

  const t = content[language as 'en' | 'hi'] || content.en;

  const popularSearches = [
    'Karma', 'Dharma', 'Moksha', 'Bhakti', 'Yoga', 'Soul', 'Duty', 'Peace'
  ];

  const handlePopularSearch = (term: string) => {
    setQuery(term);
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) => 
      regex.test(part) ? <mark key={i} className="bg-primary/20 text-foreground px-0.5 rounded">{part}</mark> : part
    );
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-gradient-spiritual">
        <div className="container px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-muted-foreground text-lg mb-8">{t.subtitle}</p>

          {/* Search Input */}
          <div className="max-w-2xl mx-auto relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.placeholder}
              className="pl-12 pr-12 py-6 text-lg bg-background border-2 border-border focus:border-primary rounded-xl shadow-card"
            />
            {query && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Results or Suggestions */}
      <section className="py-12">
        <div className="container px-4">
          {query.length >= 2 ? (
            <>
              {/* Results Header */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{results.length}</span> {t.results}
                </p>
              </div>

              {results.length > 0 ? (
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <Card key={index} className="card-spiritual card-hover">
                      <CardContent className="p-6">
                        {result.verse ? (
                          // Verse Result
                          <Link to={`/scripture/${result.scripture.slug}/chapter/${result.verse.chapter}#verse-${result.verse.verse}`}>
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <BookOpen className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge variant="secondary" className="text-xs">
                                    {result.scripture.title[language as 'en' | 'hi']}
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    {t.chapter} {result.verse.chapter}, {t.verse} {result.verse.verse}
                                  </Badge>
                                </div>
                                <p className="font-sanskrit text-foreground mb-2 line-clamp-2">
                                  {highlightMatch(result.verse.sanskrit, query)}
                                </p>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                  {highlightMatch(result.verse.translations[language as 'en' | 'hi'] || result.verse.translations.en, query)}
                                </p>
                              </div>
                              <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                            </div>
                          </Link>
                        ) : result.chapter ? (
                          // Chapter Result
                          <Link to={`/scripture/${result.scripture.slug}/chapter/${result.chapter.number}`}>
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                <span className="font-display font-bold text-secondary">{result.chapter.number}</span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <Badge variant="secondary" className="text-xs mb-2">
                                  {result.scripture.title[language as 'en' | 'hi']}
                                </Badge>
                                <h3 className="font-display font-semibold mb-1">
                                  {highlightMatch(result.chapter.title[language as 'en' | 'hi'] || result.chapter.title.en, query)}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                  {result.chapter.description[language as 'en' | 'hi'] || result.chapter.description.en}
                                </p>
                              </div>
                              <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                            </div>
                          </Link>
                        ) : (
                          // Scripture Result
                          <Link to={`/scripture/${result.scripture.slug}`}>
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-2xl">
                                {result.scripture.category === 'gita' && '📖'}
                                {result.scripture.category === 'ramayan' && '🏹'}
                                {result.scripture.category === 'veda' && '📜'}
                                {result.scripture.category === 'upanishad' && '🕉️'}
                                {result.scripture.category === 'purana' && '📚'}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-display font-semibold mb-1">
                                  {highlightMatch(result.scripture.title[language as 'en' | 'hi'] || result.scripture.title.en, query)}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                  {result.scripture.description[language as 'en' | 'hi'] || result.scripture.description.en}
                                </p>
                              </div>
                              <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                            </div>
                          </Link>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg mb-2">
                    {t.noResults} "<span className="text-foreground font-medium">{query}</span>"
                  </p>
                  <p className="text-muted-foreground">{t.tryDifferent}</p>
                  <Link to="/scriptures" className="mt-6 inline-block">
                    <Button variant="outline">
                      {language === 'hi' ? 'ग्रंथ ब्राउज़ करें' : 'Browse Scriptures'}
                    </Button>
                  </Link>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Popular Searches */}
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-display text-xl font-semibold mb-6">{t.suggestions}</h2>
                <div className="flex flex-wrap justify-center gap-2">
                  {popularSearches.map(term => (
                    <Button
                      key={term}
                      variant="outline"
                      onClick={() => handlePopularSearch(term)}
                      className="rounded-full"
                    >
                      {term}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quick Browse */}
              <div className="mt-16">
                <h2 className="font-display text-2xl font-bold text-center mb-8">
                  {language === 'hi' ? 'त्वरित ब्राउज़' : 'Quick Browse'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {allScriptures.slice(0, 6).map(scripture => (
                    <Link key={scripture.id} to={`/scripture/${scripture.slug}`}>
                      <Card className="card-spiritual card-hover">
                        <CardContent className="p-4 flex items-center gap-4">
                          <span className="text-3xl">
                            {scripture.category === 'gita' && '📖'}
                            {scripture.category === 'ramayan' && '🏹'}
                            {scripture.category === 'veda' && '📜'}
                            {scripture.category === 'upanishad' && '🕉️'}
                            {scripture.category === 'purana' && '📚'}
                          </span>
                          <div>
                            <h3 className="font-display font-semibold">
                              {scripture.title[language as 'en' | 'hi']}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {scripture.chapterCount} chapters
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}
