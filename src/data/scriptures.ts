export interface Verse {
  id: string;
  chapter: number;
  verse: number;
  sanskrit: string;
  transliteration: string;
  translations: {
    en: string;
    hi: string;
    bn?: string;
    ta?: string;
    mr?: string;
  };
  meaning: {
    en: string;
    hi: string;
  };
  keywords: string[];
  audioUrl?: string;
}

export interface Chapter {
  id: string;
  number: number;
  title: {
    en: string;
    hi: string;
    sanskrit: string;
  };
  description: {
    en: string;
    hi: string;
  };
  verseCount: number;
  topics: string[];
  verses: Verse[];
}

export interface Scripture {
  id: string;
  slug: string;
  title: {
    en: string;
    hi: string;
    sanskrit: string;
  };
  description: {
    en: string;
    hi: string;
  };
  coverImage: string;
  category: 'gita' | 'ramayan' | 'veda' | 'purana' | 'upanishad' | 'other';
  chapterCount: number;
  verseCount: number;
  topics: string[];
  chapters: Chapter[];
}

// Sample data for Bhagavad Gita
export const bhagavadGita: Scripture = {
  id: 'bhagavad-gita',
  slug: 'bhagavad-gita',
  title: {
    en: 'Bhagavad Gita',
    hi: 'भगवद्गीता',
    sanskrit: 'श्रीमद्भगवद्गीता'
  },
  description: {
    en: 'The Song of God - A 700-verse Hindu scripture that is part of the epic Mahabharata. It is a sacred text of the Hindu religion and is considered one of the most important spiritual classics.',
    hi: 'भगवद्गीता हिंदू धर्म का एक पवित्र ग्रंथ है जो महाभारत का एक भाग है। इसमें भगवान श्री कृष्ण और अर्जुन के बीच का संवाद है।'
  },
  coverImage: '/images/gita-cover.jpg',
  category: 'gita',
  chapterCount: 18,
  verseCount: 700,
  topics: ['Karma Yoga', 'Bhakti Yoga', 'Jnana Yoga', 'Dharma', 'Moksha'],
  chapters: [
    {
      id: 'gita-ch-1',
      number: 1,
      title: {
        en: 'Arjuna Vishada Yoga',
        hi: 'अर्जुन विषाद योग',
        sanskrit: 'अर्जुनविषादयोग'
      },
      description: {
        en: 'The Yoga of Arjuna\'s Dejection - Arjuna sees his relatives and teachers arrayed against him and becomes overwhelmed with grief.',
        hi: 'अर्जुन का विषाद - अर्जुन युद्धभूमि में अपने सगे-संबंधियों को देखकर मोहग्रस्त हो जाते हैं।'
      },
      verseCount: 47,
      topics: ['Grief', 'Confusion', 'Compassion'],
      verses: [
        {
          id: 'gita-1-1',
          chapter: 1,
          verse: 1,
          sanskrit: 'धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||१||',
          transliteration: 'dhṛtarāṣṭra uvāca | dharmakṣetre kurukṣetre samavetā yuyutsavaḥ | māmakāḥ pāṇḍavāścaiva kimakurvata sañjaya ||1||',
          translations: {
            en: 'Dhritarashtra said: O Sanjaya, after my sons and the sons of Pandu assembled in the holy land of Kurukshetra, desiring to fight, what did they do?',
            hi: 'धृतराष्ट्र ने कहा: हे संजय! धर्मभूमि कुरुक्षेत्र में एकत्रित हुए युद्ध की इच्छा वाले मेरे और पांडु के पुत्रों ने क्या किया?'
          },
          meaning: {
            en: 'The blind king Dhritarashtra asks his minister Sanjaya about the events on the battlefield. This opening verse sets the stage for the entire Gita.',
            hi: 'अंधे राजा धृतराष्ट्र अपने मंत्री संजय से युद्धभूमि की घटनाओं के बारे में पूछते हैं। यह प्रारंभिक श्लोक संपूर्ण गीता की पृष्ठभूमि तैयार करता है।'
          },
          keywords: ['Dhritarashtra', 'Sanjaya', 'Kurukshetra', 'Dharma']
        },
        {
          id: 'gita-1-2',
          chapter: 1,
          verse: 2,
          sanskrit: 'सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् ||२||',
          transliteration: 'sañjaya uvāca | dṛṣṭvā tu pāṇḍavānīkaṁ vyūḍhaṁ duryodhanastadā | ācāryamupasaṅgamya rājā vacanamabravīt ||2||',
          translations: {
            en: 'Sanjaya said: At that time, King Duryodhana, seeing the Pandava army arrayed in military formation, approached his teacher Drona and spoke the following words.',
            hi: 'संजय ने कहा: उस समय राजा दुर्योधन ने पांडवों की सेना को व्यूहबद्ध देखकर द्रोणाचार्य के पास जाकर ये वचन कहे।'
          },
          meaning: {
            en: 'Sanjaya begins narrating the events. Duryodhana, seeing the organized Pandava army, goes to Dronacharya seeking reassurance.',
            hi: 'संजय घटनाओं का वर्णन करना शुरू करते हैं। दुर्योधन संगठित पांडव सेना को देखकर आश्वासन के लिए द्रोणाचार्य के पास जाता है।'
          },
          keywords: ['Sanjaya', 'Duryodhana', 'Drona', 'Army']
        }
      ]
    },
    {
      id: 'gita-ch-2',
      number: 2,
      title: {
        en: 'Sankhya Yoga',
        hi: 'सांख्य योग',
        sanskrit: 'साङ्ख्ययोग'
      },
      description: {
        en: 'The Yoga of Knowledge - Krishna begins to teach Arjuna about the eternal nature of the soul and the path of wisdom.',
        hi: 'ज्ञान योग - भगवान कृष्ण अर्जुन को आत्मा की शाश्वत प्रकृति और ज्ञान के मार्ग के बारे में सिखाते हैं।'
      },
      verseCount: 72,
      topics: ['Soul', 'Wisdom', 'Duty', 'Detachment'],
      verses: [
        {
          id: 'gita-2-47',
          chapter: 2,
          verse: 47,
          sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन | मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||४७||',
          transliteration: 'karmaṇyevādhikāraste mā phaleṣu kadācana | mā karmaphalaheturbhūrmā te saṅgo\'stvakarmaṇi ||47||',
          translations: {
            en: 'You have the right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself as the cause of the results of your activities, nor be attached to inaction.',
            hi: 'कर्म करने में ही तुम्हारा अधिकार है, फल में कभी नहीं। इसलिए कर्मफल की इच्छा से कर्म मत करो और अकर्म में भी तुम्हारी आसक्ति न हो।'
          },
          meaning: {
            en: 'This is one of the most famous verses of the Gita. It teaches the principle of Nishkama Karma - performing action without attachment to results.',
            hi: 'यह गीता के सबसे प्रसिद्ध श्लोकों में से एक है। यह निष्काम कर्म का सिद्धांत सिखाता है - परिणामों की आसक्ति के बिना कर्म करना।'
          },
          keywords: ['Karma', 'Action', 'Fruits', 'Duty', 'Detachment']
        }
      ]
    }
  ]
};

// Sample Ramayan data
export const ramayan: Scripture = {
  id: 'ramayan',
  slug: 'ramayan',
  title: {
    en: 'Ramayan',
    hi: 'रामायण',
    sanskrit: 'श्रीमद्रामायण'
  },
  description: {
    en: 'The epic tale of Lord Rama - One of the two major Sanskrit epics of ancient India. It narrates the life of Rama, the prince of Ayodhya.',
    hi: 'भगवान राम की महागाथा - प्राचीन भारत के दो महाकाव्यों में से एक। यह अयोध्या के राजकुमार राम के जीवन का वर्णन करती है।'
  },
  coverImage: '/images/ramayan-cover.jpg',
  category: 'ramayan',
  chapterCount: 7,
  verseCount: 24000,
  topics: ['Dharma', 'Devotion', 'Love', 'Sacrifice', 'Victory of Good'],
  chapters: [
    {
      id: 'ramayan-bala',
      number: 1,
      title: {
        en: 'Bala Kanda',
        hi: 'बालकांड',
        sanskrit: 'बालकाण्ड'
      },
      description: {
        en: 'The Book of Youth - Describes the birth and childhood of Rama and his brothers.',
        hi: 'बाल्यकाल का खंड - राम और उनके भाइयों के जन्म और बचपन का वर्णन करता है।'
      },
      verseCount: 2296,
      topics: ['Birth', 'Childhood', 'Education'],
      verses: []
    }
  ]
};

// Sample Vedas data
export const rigVeda: Scripture = {
  id: 'rig-veda',
  slug: 'rig-veda',
  title: {
    en: 'Rig Veda',
    hi: 'ऋग्वेद',
    sanskrit: 'ऋग्वेद'
  },
  description: {
    en: 'The oldest and most important of the four Vedas. It consists of hymns dedicated to various deities.',
    hi: 'चारों वेदों में सबसे प्राचीन और महत्वपूर्ण। इसमें विभिन्न देवताओं को समर्पित मंत्र हैं।'
  },
  coverImage: '/images/rigveda-cover.jpg',
  category: 'veda',
  chapterCount: 10,
  verseCount: 10552,
  topics: ['Hymns', 'Deities', 'Philosophy', 'Rituals'],
  chapters: []
};

export const upanishads: Scripture = {
  id: 'upanishads',
  slug: 'upanishads',
  title: {
    en: 'Upanishads',
    hi: 'उपनिषद्',
    sanskrit: 'उपनिषद्'
  },
  description: {
    en: 'The philosophical texts that form the theoretical basis for Hinduism. They contain discussions on meditation, philosophy, and the nature of Brahman.',
    hi: 'दार्शनिक ग्रंथ जो हिंदू धर्म के सैद्धांतिक आधार हैं। इनमें ध्यान, दर्शन और ब्रह्म की प्रकृति पर चर्चा है।'
  },
  coverImage: '/images/upanishads-cover.jpg',
  category: 'upanishad',
  chapterCount: 13,
  verseCount: 2000,
  topics: ['Brahman', 'Atman', 'Meditation', 'Philosophy'],
  chapters: []
};

export const shivPurana: Scripture = {
  id: 'shiv-purana',
  slug: 'shiv-purana',
  title: {
    en: 'Shiv Purana',
    hi: 'शिव पुराण',
    sanskrit: 'शिवपुराण'
  },
  description: {
    en: 'One of the eighteen major Puranas, dedicated to Lord Shiva. It contains stories of Shiva\'s glory and worship.',
    hi: 'अठारह महापुराणों में से एक, भगवान शिव को समर्पित। इसमें शिव की महिमा और पूजा की कथाएं हैं।'
  },
  coverImage: '/images/shivpurana-cover.jpg',
  category: 'purana',
  chapterCount: 7,
  verseCount: 24000,
  topics: ['Shiva', 'Parvati', 'Devotion', 'Cosmology'],
  chapters: []
};

export const allScriptures: Scripture[] = [
  bhagavadGita,
  ramayan,
  rigVeda,
  upanishads,
  shivPurana
];

export const scriptureCategories = [
  { id: 'gita', name: { en: 'Bhagavad Gita', hi: 'भगवद्गीता' }, icon: '🙏' },
  { id: 'ramayan', name: { en: 'Ramayan', hi: 'रामायण' }, icon: '🏹' },
  { id: 'veda', name: { en: 'Vedas', hi: 'वेद' }, icon: '📜' },
  { id: 'upanishad', name: { en: 'Upanishads', hi: 'उपनिषद्' }, icon: '🕉️' },
  { id: 'purana', name: { en: 'Puranas', hi: 'पुराण' }, icon: '📚' },
  { id: 'other', name: { en: 'Other Scriptures', hi: 'अन्य ग्रंथ' }, icon: '✨' }
];

// Daily verses for the "Verse of the Day" feature
export const dailyVerses: Verse[] = [
  bhagavadGita.chapters[0].verses[0],
  bhagavadGita.chapters[1]?.verses[0] || bhagavadGita.chapters[0].verses[1],
];

export function getVerseOfTheDay(): Verse {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const index = dayOfYear % dailyVerses.length;
  return dailyVerses[index];
}

export function searchScriptures(query: string, lang: 'en' | 'hi' = 'en'): {scripture: Scripture; chapter?: Chapter; verse?: Verse}[] {
  const results: {scripture: Scripture; chapter?: Chapter; verse?: Verse}[] = [];
  const lowerQuery = query.toLowerCase();

  allScriptures.forEach(scripture => {
    // Search in scripture title
    if (scripture.title[lang].toLowerCase().includes(lowerQuery) ||
        scripture.title.sanskrit.toLowerCase().includes(lowerQuery)) {
      results.push({ scripture });
    }

    // Search in chapters and verses
    scripture.chapters.forEach(chapter => {
      if (chapter.title[lang].toLowerCase().includes(lowerQuery)) {
        results.push({ scripture, chapter });
      }

      chapter.verses.forEach(verse => {
        if (verse.translations[lang]?.toLowerCase().includes(lowerQuery) ||
            verse.sanskrit.toLowerCase().includes(lowerQuery) ||
            verse.keywords.some(k => k.toLowerCase().includes(lowerQuery))) {
          results.push({ scripture, chapter, verse });
        }
      });
    });
  });

  return results;
}
