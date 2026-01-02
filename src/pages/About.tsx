import { Link } from 'react-router-dom';
import { BookOpen, Heart, Globe, Download, Volume2, Users } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function About() {
  const { language } = useApp();

  const content = {
    en: {
      title: 'About Shastra Path',
      subtitle: 'Your gateway to ancient Hindu wisdom',
      mission: 'Our Mission',
      missionText: 'Shastra Path is dedicated to making the profound wisdom of Hindu scriptures accessible to everyone, regardless of language or location. We believe that the timeless teachings of the Bhagavad Gita, Ramayan, Vedas, Upanishads, and Puranas have the power to transform lives and guide humanity towards peace, understanding, and spiritual growth.',
      whatWeOffer: 'What We Offer',
      features: [
        { icon: BookOpen, title: 'Complete Scripture Collection', desc: 'Access all major Hindu scriptures including Bhagavad Gita, Ramayan, Vedas, Upanishads, and Puranas in their original Sanskrit with translations.' },
        { icon: Globe, title: 'Multi-Language Support', desc: 'Read scriptures in Sanskrit, Hindi, English, Bengali, Tamil, Marathi, and more languages to suit your preference.' },
        { icon: Heart, title: 'Personal Library', desc: 'Bookmark and save your favorite verses for easy access. Build your own collection of meaningful teachings.' },
        { icon: Download, title: 'Offline Reading', desc: 'Download PDFs of chapters and books to read anywhere, even without an internet connection.' },
        { icon: Volume2, title: 'Audio Narration', desc: 'Listen to traditional recitations of verses to experience the sacred sounds as they were meant to be heard.' },
        { icon: Users, title: 'Community', desc: 'Join a community of spiritual seekers exploring the depths of Hindu philosophy together.' },
      ],
      scriptures: 'The Scriptures',
      scriptureList: [
        { name: 'Bhagavad Gita', desc: 'The Song of God - A 700-verse dialogue between Lord Krishna and Arjuna on the battlefield of Kurukshetra, covering dharma, karma, bhakti, and moksha.' },
        { name: 'Ramayan', desc: 'The epic tale of Lord Rama, teaching the ideals of duty, righteousness, and devotion through the story of his life and adventures.' },
        { name: 'Vedas', desc: 'The oldest scriptures of Hinduism - Rig Veda, Yajur Veda, Sama Veda, and Atharva Veda - containing hymns, mantras, and philosophical insights.' },
        { name: 'Upanishads', desc: 'Philosophical texts exploring the nature of reality, the self (Atman), and the ultimate truth (Brahman).' },
        { name: 'Puranas', desc: 'Ancient texts containing mythology, cosmology, and genealogies of gods, sages, and kings.' },
      ],
      disclaimer: 'Disclaimer',
      disclaimerText: 'Shastra Path is created for educational and spiritual purposes. The translations and interpretations provided are drawn from various scholarly sources and traditional commentaries. We encourage readers to consult with qualified teachers and scholars for deeper understanding.',
      credits: 'Credits & Sources',
      creditsText: 'Our content is compiled from traditional Sanskrit texts, scholarly translations, and respected commentaries. We acknowledge the countless sages, scholars, and translators whose work has preserved and transmitted this wisdom through the ages.',
      startReading: 'Start Your Journey',
    },
    hi: {
      title: 'शास्त्र पाठ के बारे में',
      subtitle: 'प्राचीन हिंदू ज्ञान का आपका द्वार',
      mission: 'हमारा उद्देश्य',
      missionText: 'शास्त्र पाठ हिंदू ग्रंथों के गहन ज्ञान को भाषा या स्थान की परवाह किए बिना सभी के लिए सुलभ बनाने के लिए समर्पित है। हम मानते हैं कि भगवद्गीता, रामायण, वेद, उपनिषद और पुराणों की कालातीत शिक्षाएं जीवन को बदलने और मानवता को शांति, समझ और आध्यात्मिक विकास की ओर मार्गदर्शन करने की शक्ति रखती हैं।',
      whatWeOffer: 'हम क्या प्रदान करते हैं',
      features: [
        { icon: BookOpen, title: 'संपूर्ण ग्रंथ संग्रह', desc: 'भगवद्गीता, रामायण, वेद, उपनिषद और पुराणों सहित सभी प्रमुख हिंदू ग्रंथों को उनके मूल संस्कृत और अनुवाद के साथ पढ़ें।' },
        { icon: Globe, title: 'बहु-भाषा समर्थन', desc: 'अपनी पसंद के अनुसार संस्कृत, हिंदी, अंग्रेजी, बंगाली, तमिल, मराठी और अधिक भाषाओं में ग्रंथ पढ़ें।' },
        { icon: Heart, title: 'व्यक्तिगत पुस्तकालय', desc: 'आसान पहुंच के लिए अपने पसंदीदा श्लोकों को बुकमार्क और सेव करें।' },
        { icon: Download, title: 'ऑफलाइन पढ़ना', desc: 'इंटरनेट कनेक्शन के बिना भी कहीं भी पढ़ने के लिए अध्यायों और पुस्तकों की PDF डाउनलोड करें।' },
        { icon: Volume2, title: 'ऑडियो वर्णन', desc: 'पारंपरिक पाठ सुनें जैसा कि पवित्र ध्वनियों को सुनना चाहिए।' },
        { icon: Users, title: 'समुदाय', desc: 'हिंदू दर्शन की गहराइयों की खोज करने वाले आध्यात्मिक साधकों के समुदाय में शामिल हों।' },
      ],
      scriptures: 'ग्रंथ',
      scriptureList: [
        { name: 'भगवद्गीता', desc: 'भगवान का गीत - कुरुक्षेत्र के युद्धभूमि पर भगवान कृष्ण और अर्जुन के बीच 700 श्लोकों का संवाद, जो धर्म, कर्म, भक्ति और मोक्ष को कवर करता है।' },
        { name: 'रामायण', desc: 'भगवान राम की महागाथा, उनके जीवन और साहसिक कार्यों की कहानी के माध्यम से कर्तव्य, धार्मिकता और भक्ति के आदर्शों की शिक्षा।' },
        { name: 'वेद', desc: 'हिंदू धर्म के सबसे प्राचीन ग्रंथ - ऋग्वेद, यजुर्वेद, सामवेद और अथर्ववेद - जिनमें मंत्र और दार्शनिक अंतर्दृष्टि हैं।' },
        { name: 'उपनिषद', desc: 'दार्शनिक ग्रंथ जो वास्तविकता, आत्मा और परम सत्य (ब्रह्म) की प्रकृति की खोज करते हैं।' },
        { name: 'पुराण', desc: 'प्राचीन ग्रंथ जिनमें पौराणिक कथाएं, ब्रह्मांड विज्ञान और देवताओं, ऋषियों और राजाओं की वंशावली है।' },
      ],
      disclaimer: 'अस्वीकरण',
      disclaimerText: 'शास्त्र पाठ शैक्षिक और आध्यात्मिक उद्देश्यों के लिए बनाया गया है। प्रदान किए गए अनुवाद और व्याख्याएं विभिन्न विद्वान स्रोतों और पारंपरिक टीकाओं से ली गई हैं। हम पाठकों को गहरी समझ के लिए योग्य शिक्षकों और विद्वानों से परामर्श करने के लिए प्रोत्साहित करते हैं।',
      credits: 'क्रेडिट और स्रोत',
      creditsText: 'हमारी सामग्री पारंपरिक संस्कृत ग्रंथों, विद्वान अनुवादों और सम्मानित टीकाओं से संकलित है। हम उन अनगिनत ऋषियों, विद्वानों और अनुवादकों को स्वीकार करते हैं जिनके काम ने इस ज्ञान को युगों से संरक्षित और प्रसारित किया है।',
      startReading: 'अपनी यात्रा शुरू करें',
    }
  };

  const t = content[language as 'en' | 'hi'] || content.en;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-spiritual">
        <div className="container px-4 text-center">
          <div className="inline-block mb-6">
            <span className="text-6xl animate-float">🕉️</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-muted-foreground text-lg">{t.subtitle}</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-6">{t.mission}</h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              {t.missionText}
            </p>
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Features */}
      <section className="py-16">
        <div className="container px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">{t.whatWeOffer}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {t.features.map((feature, index) => (
              <Card key={index} className="card-spiritual">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Scriptures */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">{t.scriptures}</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {t.scriptureList.map((scripture, index) => (
              <Card key={index} className="card-spiritual">
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2">{scripture.name}</h3>
                  <p className="text-muted-foreground">{scripture.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer & Credits */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h2 className="font-display text-2xl font-bold mb-4">{t.disclaimer}</h2>
              <p className="text-muted-foreground">{t.disclaimerText}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold mb-4">{t.credits}</h2>
              <p className="text-muted-foreground">{t.creditsText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">{t.startReading}</h2>
          <Link to="/scriptures">
            <Button className="btn-spiritual text-lg px-10 py-6">
              <BookOpen className="w-5 h-5 mr-2" />
              {language === 'hi' ? 'ग्रंथ देखें' : 'Explore Scriptures'}
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
