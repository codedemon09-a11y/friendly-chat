// Shiva Purana data
export const shivPuranaSamhitas = [
  {
    number: 1,
    name: { en: 'Vidyeshvara Samhita', hi: 'विद्येश्वर संहिता', sanskrit: 'विद्येश्वरसंहिता' },
    description: { en: 'Introduction to Shiva worship, importance of Panchakshara mantra, and glory of Shiva Linga.', hi: 'शिव पूजा का परिचय, पंचाक्षर मंत्र का महत्व, और शिवलिंग की महिमा।' },
    chapters: 25,
    topics: ['Shiva Linga', 'Panchakshara', 'Worship']
  },
  {
    number: 2,
    name: { en: 'Rudra Samhita', hi: 'रुद्र संहिता', sanskrit: 'रुद्रसंहिता' },
    description: { en: 'Stories of Shiva\'s manifestations, marriage with Parvati, birth of Kartikeya and Ganesha.', hi: 'शिव के अवतारों की कथाएं, पार्वती से विवाह, कार्तिकेय और गणेश का जन्म।' },
    chapters: 43,
    topics: ['Shiva-Parvati', 'Ganesha', 'Kartikeya', 'Sati']
  },
  {
    number: 3,
    name: { en: 'Shatarudra Samhita', hi: 'शतरुद्र संहिता', sanskrit: 'शतरुद्रसंहिता' },
    description: { en: 'Hundred forms of Rudra, significance of various Shiva temples and sacred places.', hi: 'रुद्र के सौ रूप, विभिन्न शिव मंदिरों और तीर्थ स्थलों का महत्व।' },
    chapters: 42,
    topics: ['Rudra Forms', 'Jyotirlingas', 'Pilgrimage']
  },
  {
    number: 4,
    name: { en: 'Kotirudra Samhita', hi: 'कोटिरुद्र संहिता', sanskrit: 'कोटिरुद्रसंहिता' },
    description: { en: 'Ten million forms of Rudra, stories of devotees, and power of Shiva mantras.', hi: 'रुद्र के करोड़ों रूप, भक्तों की कथाएं, और शिव मंत्रों की शक्ति।' },
    chapters: 43,
    topics: ['Mantras', 'Devotees', 'Miracles']
  },
  {
    number: 5,
    name: { en: 'Uma Samhita', hi: 'उमा संहिता', sanskrit: 'उमासंहिता' },
    description: { en: 'Glory of Goddess Uma (Parvati), description of dharma, and path to liberation.', hi: 'देवी उमा (पार्वती) की महिमा, धर्म का वर्णन, और मोक्ष का मार्ग।' },
    chapters: 51,
    topics: ['Uma', 'Dharma', 'Liberation', 'Devotion']
  },
  {
    number: 6,
    name: { en: 'Kailasa Samhita', hi: 'कैलास संहिता', sanskrit: 'कैलाससंहिता' },
    description: { en: 'Description of Mount Kailasa, Shiva\'s abode, and the nature of ultimate reality.', hi: 'कैलास पर्वत का वर्णन, शिव का निवास, और परम सत्य की प्रकृति।' },
    chapters: 23,
    topics: ['Kailasa', 'Philosophy', 'Tantra']
  },
  {
    number: 7,
    name: { en: 'Vayaviya Samhita', hi: 'वायवीय संहिता', sanskrit: 'वायवीयसंहिता' },
    description: { en: 'Narrated by Vayu, this section covers Shiva\'s cosmic role and yogic practices.', hi: 'वायु द्वारा कथित, इस खंड में शिव की ब्रह्मांडीय भूमिका और योग साधना है।' },
    chapters: 30,
    topics: ['Yoga', 'Cosmic Role', 'Tantra']
  }
];

// Sample Shiva Purana verses
export const shivPuranaVerses: { [key: number]: any[] } = {
  1: [
    {
      id: 'shiv-1-1-1',
      chapter: 1,
      verse: 1,
      sanskrit: 'ॐ नमः शिवाय शान्ताय कारणत्रयहेतवे ।\nनिवेदयामि चात्मानं त्वं गतिः परमेश्वर ॥',
      transliteration: 'oṃ namaḥ śivāya śāntāya kāraṇatrayahetave |\nnivedayāmi cātmānaṃ tvaṃ gatiḥ parameśvara ||',
      translations: {
        en: 'Om, salutations to Shiva, the peaceful one, the cause of the three causes. I offer myself to you. You are my refuge, O Supreme Lord.',
        hi: 'ॐ, शिव को नमस्कार, शांत स्वरूप, तीन कारणों के कारण। मैं अपने आप को समर्पित करता हूँ। आप मेरी गति हैं, हे परमेश्वर।'
      },
      meaning: {
        en: 'An invocation to Lord Shiva at the beginning of Shiva Purana, offering complete surrender.',
        hi: 'शिव पुराण के प्रारंभ में भगवान शिव को आह्वान, पूर्ण समर्पण।'
      }
    },
    {
      id: 'shiv-1-1-2',
      chapter: 1,
      verse: 2,
      sanskrit: 'य एष परमो देवः सर्वदेवमयो महान् ।\nपूज्यते सर्वदेवैश्च तं प्रणम्य शिवं स्तुमः ॥',
      transliteration: 'ya eṣa paramo devaḥ sarvadevamayo mahān |\npūjyate sarvadevaiśca taṃ praṇamya śivaṃ stumaḥ ||',
      translations: {
        en: 'He who is the Supreme Lord, who contains all gods within himself, and who is worshipped by all gods - we bow to that Shiva and praise him.',
        hi: 'जो परम देव हैं, जो सभी देवताओं को समाहित करते हैं, और जो सभी देवताओं द्वारा पूज्य हैं - उन शिव को प्रणाम कर हम स्तुति करते हैं।'
      },
      meaning: {
        en: 'Shiva is described as the supreme deity who encompasses all other gods.',
        hi: 'शिव को सर्वोच्च देवता के रूप में वर्णित किया गया है जो सभी देवताओं को समाहित करते हैं।'
      }
    }
  ],
  2: [
    {
      id: 'shiv-2-1-1',
      chapter: 1,
      verse: 1,
      sanskrit: 'शिवं शक्त्या समायुक्तं सृष्टिस्थित्यन्तकारणम् ।\nप्रपद्ये परमं देवं सच्चिदानन्दविग्रहम् ॥',
      transliteration: 'śivaṃ śaktyā samāyuktaṃ sṛṣṭisthityantakāraṇam |\nprapadye paramaṃ devaṃ saccidānandavigraham ||',
      translations: {
        en: 'I take refuge in the Supreme Lord Shiva, who is united with Shakti, who is the cause of creation, maintenance, and dissolution, and whose form is existence-consciousness-bliss.',
        hi: 'मैं परम देव शिव की शरण लेता हूँ, जो शक्ति से युक्त हैं, जो सृष्टि, स्थिति और प्रलय के कारण हैं, और जिनका रूप सच्चिदानंद है।'
      },
      meaning: {
        en: 'Shiva with Shakti is the source of the cosmic cycle and embodies pure consciousness.',
        hi: 'शक्ति सहित शिव ब्रह्मांडीय चक्र के स्रोत हैं और शुद्ध चेतना का प्रतीक हैं।'
      }
    }
  ]
};

// Get all Shiva Purana chapters
export function getAllShivPuranaChapters() {
  return shivPuranaSamhitas.map(samhita => ({
    id: `shivpurana-samhita-${samhita.number}`,
    number: samhita.number,
    title: samhita.name,
    description: samhita.description,
    verseCount: samhita.chapters,
    topics: samhita.topics,
    verses: shivPuranaVerses[samhita.number] || []
  }));
}
