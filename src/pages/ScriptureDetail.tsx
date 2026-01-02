import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, Download, Share2 } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useApp } from '@/contexts/AppContext';
import { allScriptures, scriptureCategories } from '@/data/scriptures';
import { useScriptureChapters } from '@/hooks/useScriptureData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ScriptureDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useApp();
  
  const scripture = allScriptures.find(s => s.slug === slug);
  
  // Use unified hook for all scriptures
  const { chapters: scriptureChapters } = useScriptureChapters(slug || '');

  if (!scripture) {
    return (
      <Layout>
        <div className="container px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Scripture Not Found</h1>
          <p className="text-muted-foreground mb-8">The scripture you're looking for doesn't exist.</p>
          <Link to="/scriptures">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Scriptures
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  // Use unified chapters from hook, fallback to static data
  const chapters = scriptureChapters.length > 0 ? scriptureChapters : scripture.chapters;

  const content = {
    en: {
      backTo: 'Back to Scriptures',
      chapters: 'Chapters',
      verses: 'Verses',
      tableOfContents: 'Table of Contents',
      readChapter: 'Read Chapter',
      about: 'About This Scripture',
      topics: 'Key Topics',
      downloadPdf: 'Download PDF',
      share: 'Share',
      category: 'Category',
    },
    hi: {
      backTo: 'ग्रंथों पर वापस',
      chapters: 'अध्याय',
      verses: 'श्लोक',
      tableOfContents: 'विषय सूची',
      readChapter: 'अध्याय पढ़ें',
      about: 'इस ग्रंथ के बारे में',
      topics: 'मुख्य विषय',
      downloadPdf: 'PDF डाउनलोड करें',
      share: 'साझा करें',
      category: 'श्रेणी',
    }
  };

  const t = content[language as 'en' | 'hi'] || content.en;
  const category = scriptureCategories.find(c => c.id === scripture.category);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 bg-gradient-spiritual">
        <div className="container px-4">
          <Link to="/scriptures" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.backTo}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Scripture Icon/Cover */}
            <div className="lg:col-span-1">
              <div className="aspect-square max-w-sm mx-auto lg:mx-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center shadow-spiritual">
                <span className="text-9xl animate-float">
                  {scripture.category === 'gita' && '📖'}
                  {scripture.category === 'ramayan' && '🏹'}
                  {scripture.category === 'veda' && '📜'}
                  {scripture.category === 'upanishad' && '🕉️'}
                  {scripture.category === 'purana' && '📚'}
                  {scripture.category === 'other' && '✨'}
                </span>
              </div>
            </div>

            {/* Scripture Info */}
            <div className="lg:col-span-2">
              <Badge variant="secondary" className="mb-4">
                {category?.icon} {category?.name[language as 'en' | 'hi'] || category?.name.en}
              </Badge>
              
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-2">
                {scripture.title[language as 'en' | 'hi'] || scripture.title.en}
              </h1>
              
              <p className="font-sanskrit text-xl text-muted-foreground mb-6">
                {scripture.title.sanskrit}
              </p>
              
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                {scripture.description[language as 'en' | 'hi'] || scripture.description.en}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="font-semibold">{chapters.length || scripture.chapterCount}</span>
                  <span className="text-muted-foreground">{t.chapters}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold">{scripture.verseCount}+</span>
                  <span className="text-muted-foreground">{t.verses}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {chapters.length > 0 && (
                  <Link to={`/scripture/${scripture.slug}/chapter/1`}>
                    <Button className="btn-spiritual">
                      <BookOpen className="w-4 h-4 mr-2" />
                      {language === 'hi' ? 'पढ़ना शुरू करें' : 'Start Reading'}
                    </Button>
                  </Link>
                )}
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  {t.downloadPdf}
                </Button>
                <Button variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  {t.share}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-8 border-b border-border">
        <div className="container px-4">
          <h2 className="font-display text-lg font-semibold mb-4">{t.topics}</h2>
          <div className="flex flex-wrap gap-2">
            {scripture.topics.map(topic => (
              <Badge key={topic} variant="outline" className="px-4 py-2">
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters List */}
      <section className="py-12">
        <div className="container px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">{t.tableOfContents}</h2>
          
          {chapters.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {chapters.map((chapter) => (
                <Link key={chapter.id} to={`/scripture/${scripture.slug}/chapter/${chapter.number}`}>
                  <Card className="card-spiritual card-hover h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="font-display font-bold text-primary">{chapter.number}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display font-semibold mb-1">
                            {chapter.title[language as 'en' | 'hi'] || chapter.title.en}
                          </h3>
                          <p className="font-sanskrit text-sm text-muted-foreground mb-2">
                            {chapter.title.sanskrit}
                          </p>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {chapter.description[language as 'en' | 'hi'] || chapter.description.en}
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            {chapter.verseCount} {t.verses}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="card-spiritual p-12 text-center">
              <p className="text-muted-foreground mb-4">
                {language === 'hi' 
                  ? 'इस ग्रंथ के अध्याय जल्द ही उपलब्ध होंगे।' 
                  : 'Chapters for this scripture will be available soon.'}
              </p>
              <Link to="/scriptures">
                <Button variant="outline">
                  {language === 'hi' ? 'अन्य ग्रंथ देखें' : 'Explore Other Scriptures'}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
