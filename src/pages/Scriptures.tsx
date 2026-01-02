import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, BookOpen } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useApp } from '@/contexts/AppContext';
import { allScriptures, scriptureCategories } from '@/data/scriptures';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function Scriptures() {
  const { language } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const selectedCategory = searchParams.get('category');

  const filteredScriptures = useMemo(() => {
    if (!selectedCategory) return allScriptures;
    return allScriptures.filter(s => s.category === selectedCategory);
  }, [selectedCategory]);

  const content = {
    en: {
      title: 'Sacred Scriptures',
      subtitle: 'Explore the complete collection of Hindu religious texts',
      allCategories: 'All',
      chapters: 'Chapters',
      verses: 'Verses',
      readNow: 'Read Now',
      noResults: 'No scriptures found in this category',
    },
    hi: {
      title: 'पवित्र ग्रंथ',
      subtitle: 'हिंदू धार्मिक ग्रंथों के संपूर्ण संग्रह का अन्वेषण करें',
      allCategories: 'सभी',
      chapters: 'अध्याय',
      verses: 'श्लोक',
      readNow: 'अभी पढ़ें',
      noResults: 'इस श्रेणी में कोई ग्रंथ नहीं मिला',
    }
  };

  const t = content[language as 'en' | 'hi'] || content.en;

  const handleCategoryChange = (category: string | null) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-gradient-spiritual">
        <div className="container px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-16 md:top-20 bg-background/95 backdrop-blur-md z-30">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={!selectedCategory ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange(null)}
                className={cn(!selectedCategory && "bg-primary text-primary-foreground")}
              >
                {t.allCategories}
              </Button>
              {scriptureCategories.map(cat => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={cn(selectedCategory === cat.id && "bg-primary text-primary-foreground")}
                >
                  <span className="mr-1">{cat.icon}</span>
                  {cat.name[language as 'en' | 'hi'] || cat.name.en}
                </Button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 border border-border rounded-lg p-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setViewMode('grid')}
                className={cn(viewMode === 'grid' && 'bg-muted')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setViewMode('list')}
                className={cn(viewMode === 'list' && 'bg-muted')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Grid/List */}
      <section className="py-12">
        <div className="container px-4">
          {filteredScriptures.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">{t.noResults}</p>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredScriptures.map((scripture) => (
                <Link key={scripture.id} to={`/scripture/${scripture.slug}`}>
                  <Card className="card-spiritual card-hover h-full overflow-hidden group">
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                      <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
                        {scripture.category === 'gita' && '📖'}
                        {scripture.category === 'ramayan' && '🏹'}
                        {scripture.category === 'veda' && '📜'}
                        {scripture.category === 'upanishad' && '🕉️'}
                        {scripture.category === 'purana' && '📚'}
                        {scripture.category === 'other' && '✨'}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                          {scripture.title[language as 'en' | 'hi'] || scripture.title.en}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {scriptureCategories.find(c => c.id === scripture.category)?.name[language as 'en' | 'hi']}
                        </Badge>
                      </div>
                      <p className="font-sanskrit text-sm text-muted-foreground mb-3">
                        {scripture.title.sanskrit}
                      </p>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {scripture.description[language as 'en' | 'hi'] || scripture.description.en}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <span>{scripture.chapterCount} {t.chapters}</span>
                        <span>•</span>
                        <span>{scripture.verseCount}+ {t.verses}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {scripture.topics.slice(0, 3).map(topic => (
                          <Badge key={topic} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredScriptures.map((scripture) => (
                <Link key={scripture.id} to={`/scripture/${scripture.slug}`}>
                  <Card className="card-spiritual card-hover overflow-hidden">
                    <CardContent className="p-6 flex items-center gap-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-4xl">
                          {scripture.category === 'gita' && '📖'}
                          {scripture.category === 'ramayan' && '🏹'}
                          {scripture.category === 'veda' && '📜'}
                          {scripture.category === 'upanishad' && '🕉️'}
                          {scripture.category === 'purana' && '📚'}
                          {scripture.category === 'other' && '✨'}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-display text-xl font-semibold">
                            {scripture.title[language as 'en' | 'hi'] || scripture.title.en}
                          </h3>
                          <Badge variant="secondary" className="text-xs flex-shrink-0">
                            {scriptureCategories.find(c => c.id === scripture.category)?.name.en}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-1 mb-2">
                          {scripture.description[language as 'en' | 'hi'] || scripture.description.en}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{scripture.chapterCount} {t.chapters}</span>
                          <span>•</span>
                          <span>{scripture.verseCount}+ {t.verses}</span>
                        </div>
                      </div>
                      <Button variant="ghost" className="flex-shrink-0">
                        <BookOpen className="w-4 h-4 mr-2" />
                        {t.readNow}
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
