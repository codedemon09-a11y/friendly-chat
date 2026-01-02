import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, Share2 } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useApp } from '@/contexts/AppContext';
import { allScriptures, scriptureCategories } from '@/data/scriptures';
import { useScriptureChapters } from '@/hooks/useScriptureData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

// Import scripture images
import bhagavadGitaCover from '@/assets/bhagavad-gita-cover.jpg';
import ramayanCover from '@/assets/ramayan-cover.jpg';
import shivPuranaCover from '@/assets/shiv-purana-cover.jpg';
import rigVedaCover from '@/assets/rig-veda-cover.jpg';
import upanishadsCover from '@/assets/upanishads-cover.jpg';

const scriptureImages: Record<string, string> = {
  'bhagavad-gita': bhagavadGitaCover,
  'ramayan': ramayanCover,
  'shiv-purana': shivPuranaCover,
  'rig-veda': rigVedaCover,
  'upanishads': upanishadsCover,
};

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
  const hasContent = chapters.length > 0 && chapters.some(ch => ch.verses && ch.verses.length > 0);

  const content = {
    en: {
      backTo: 'Back to Scriptures',
      chapters: 'Chapters',
      verses: 'Verses',
      tableOfContents: 'Table of Contents',
      readChapter: 'Read Chapter',
      about: 'About This Scripture',
      topics: 'Key Topics',
      share: 'Share',
      category: 'Category',
      comingSoon: 'Coming Soon',
      comingSoonDesc: 'Content for this scripture is being prepared. Please check back later.',
    },
    hi: {
      backTo: 'ग्रंथों पर वापस',
      chapters: 'अध्याय',
      verses: 'श्लोक',
      tableOfContents: 'विषय सूची',
      readChapter: 'अध्याय पढ़ें',
      about: 'इस ग्रंथ के बारे में',
      topics: 'मुख्य विषय',
      share: 'साझा करें',
      category: 'श्रेणी',
      comingSoon: 'जल्द आ रहा है',
      comingSoonDesc: 'इस ग्रंथ की सामग्री तैयार की जा रही है। कृपया बाद में पुनः देखें।',
    },
    mr: {
      backTo: 'ग्रंथांकडे परत',
      chapters: 'अध्याय',
      verses: 'श्लोक',
      tableOfContents: 'विषय सूची',
      readChapter: 'अध्याय वाचा',
      about: 'या ग्रंथाबद्दल',
      topics: 'मुख्य विषय',
      share: 'शेअर करा',
      category: 'श्रेणी',
      comingSoon: 'लवकरच येत आहे',
      comingSoonDesc: 'या ग्रंथाची सामग्री तयार केली जात आहे. कृपया नंतर पुन्हा पहा.',
    }
  };

  const t = content[language as 'en' | 'hi' | 'mr'] || content.en;
  const category = scriptureCategories.find(c => c.id === scripture.category);
  const coverImage = scriptureImages[scripture.slug];

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: scripture.title.en,
        text: scripture.description.en,
        url
      });
    } else {
      navigator.clipboard.writeText(url);
      toast({ title: language === 'hi' ? 'लिंक कॉपी हो गया!' : language === 'mr' ? 'लिंक कॉपी झाली!' : 'Link copied!' });
    }
  };

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
            {/* Scripture Cover Image */}
            <div className="lg:col-span-1">
              <div className="aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-spiritual">
                {coverImage ? (
                  <img 
                    src={coverImage} 
                    alt={scripture.title.en}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-9xl animate-float">
                      {scripture.category === 'gita' && '📖'}
                      {scripture.category === 'ramayan' && '🏹'}
                      {scripture.category === 'veda' && '📜'}
                      {scripture.category === 'upanishad' && '🕉️'}
                      {scripture.category === 'purana' && '📚'}
                      {scripture.category === 'other' && '✨'}
                    </span>
                  </div>
                )}
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
                {hasContent ? (
                  <Link to={`/scripture/${scripture.slug}/chapter/1`}>
                    <Button className="btn-spiritual">
                      <BookOpen className="w-4 h-4 mr-2" />
                      {language === 'hi' ? 'पढ़ना शुरू करें' : language === 'mr' ? 'वाचायला सुरुवात करा' : 'Start Reading'}
                    </Button>
                  </Link>
                ) : (
                  <Button className="btn-spiritual" disabled>
                    <BookOpen className="w-4 h-4 mr-2" />
                    {t.comingSoon}
                  </Button>
                )}
                <Button variant="outline" onClick={handleShare}>
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

      {/* Chapters List or Coming Soon */}
      <section className="py-12">
        <div className="container px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">{t.tableOfContents}</h2>
          
          {hasContent ? (
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
              <div className="text-6xl mb-4">📚</div>
              <h3 className="font-display text-2xl font-bold mb-2">{t.comingSoon}</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                {t.comingSoonDesc}
              </p>
              <Link to="/scriptures">
                <Button variant="outline">
                  {language === 'hi' ? 'अन्य ग्रंथ देखें' : language === 'mr' ? 'इतर ग्रंथ पहा' : 'Explore Other Scriptures'}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}