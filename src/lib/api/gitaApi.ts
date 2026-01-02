// Free Bhagavad Gita API - https://vedicscriptures.github.io
const BASE_URL = 'https://vedicscriptures.github.io';

export interface GitaChapterResponse {
  chapter_number: number;
  verses_count: number;
  name: string;
  translation: string;
  transliteration: string;
  meaning: {
    en: string;
    hi: string;
  };
  summary: {
    en: string;
    hi: string;
  };
}

export interface GitaSlokResponse {
  _id: string;
  chapter: number;
  verse: number;
  slok: string;
  transliteration: string;
  tej?: {
    author: string;
    ht: string;
  };
  siva?: {
    author: string;
    et: string;
    ec?: string;
  };
  purohit?: {
    author: string;
    et: string;
  };
  chinmay?: {
    author: string;
    hc: string;
  };
  san?: {
    author: string;
    et: string;
  };
  adi?: {
    author: string;
    et: string;
  };
  gambir?: {
    author: string;
    et: string;
  };
  madhav?: {
    author: string;
    sc: string;
  };
  anand?: {
    author: string;
    sc: string;
  };
  rams?: {
    author: string;
    ht: string;
    hc?: string;
  };
  rpicar?: {
    author: string;
    et: string;
    ec?: string;
  };
  abpicar?: {
    author: string;
    et: string;
    ec?: string;
  };
  jg?: {
    author: string;
    et: string;
  };
  ms?: {
    author: string;
    sc: string;
  };
  spicar?: {
    author: string;
    et: string;
    ec?: string;
  };
}

// Static chapter data with names and descriptions
export const gitaChaptersData: { number: number; verses: number; name: { en: string; hi: string; sanskrit: string }; description: { en: string; hi: string }; topics: string[] }[] = [
  { number: 1, verses: 47, name: { en: 'Arjuna Vishada Yoga', hi: 'अर्जुन विषाद योग', sanskrit: 'अर्जुनविषादयोग' }, description: { en: 'The Yoga of Arjuna\'s Dejection - Arjuna sees his relatives arrayed against him and becomes overwhelmed with grief.', hi: 'अर्जुन का विषाद - अर्जुन युद्धभूमि में अपने सगे-संबंधियों को देखकर मोहग्रस्त हो जाते हैं।' }, topics: ['Grief', 'Confusion', 'Compassion'] },
  { number: 2, verses: 72, name: { en: 'Sankhya Yoga', hi: 'सांख्य योग', sanskrit: 'साङ्ख्ययोग' }, description: { en: 'The Yoga of Knowledge - Krishna teaches about the eternal nature of the soul and the path of wisdom.', hi: 'ज्ञान योग - भगवान कृष्ण आत्मा की शाश्वत प्रकृति और ज्ञान के मार्ग के बारे में सिखाते हैं।' }, topics: ['Soul', 'Wisdom', 'Duty', 'Detachment'] },
  { number: 3, verses: 43, name: { en: 'Karma Yoga', hi: 'कर्म योग', sanskrit: 'कर्मयोग' }, description: { en: 'The Yoga of Action - Teaching the importance of selfless action without attachment to results.', hi: 'कर्म योग - फल की आसक्ति के बिना निःस्वार्थ कर्म के महत्व की शिक्षा।' }, topics: ['Action', 'Duty', 'Sacrifice'] },
  { number: 4, verses: 42, name: { en: 'Jnana Karma Sanyasa Yoga', hi: 'ज्ञान कर्म संन्यास योग', sanskrit: 'ज्ञानकर्मसंन्यासयोग' }, description: { en: 'The Yoga of Knowledge and Renunciation of Action - Divine knowledge and the importance of wisdom.', hi: 'ज्ञान और कर्म संन्यास का योग - दिव्य ज्ञान और बुद्धि का महत्व।' }, topics: ['Knowledge', 'Renunciation', 'Sacrifice'] },
  { number: 5, verses: 29, name: { en: 'Karma Sanyasa Yoga', hi: 'कर्म संन्यास योग', sanskrit: 'कर्मसंन्यासयोग' }, description: { en: 'The Yoga of Renunciation - The path of renunciation and its relation to action.', hi: 'संन्यास योग - त्याग का मार्ग और कर्म से उसका संबंध।' }, topics: ['Renunciation', 'Peace', 'Liberation'] },
  { number: 6, verses: 47, name: { en: 'Dhyana Yoga', hi: 'ध्यान योग', sanskrit: 'ध्यानयोग' }, description: { en: 'The Yoga of Meditation - Teaching the practice of meditation and self-control.', hi: 'ध्यान योग - ध्यान और आत्म-नियंत्रण का अभ्यास।' }, topics: ['Meditation', 'Self-control', 'Mind'] },
  { number: 7, verses: 30, name: { en: 'Jnana Vijnana Yoga', hi: 'ज्ञान विज्ञान योग', sanskrit: 'ज्ञानविज्ञानयोग' }, description: { en: 'The Yoga of Knowledge and Wisdom - Understanding the nature of the Divine.', hi: 'ज्ञान विज्ञान योग - परमात्मा की प्रकृति को समझना।' }, topics: ['Divine Nature', 'Knowledge', 'Worship'] },
  { number: 8, verses: 28, name: { en: 'Aksara Brahma Yoga', hi: 'अक्षर ब्रह्म योग', sanskrit: 'अक्षरब्रह्मयोग' }, description: { en: 'The Yoga of the Imperishable Brahman - The science of the Absolute and liberation.', hi: 'अक्षर ब्रह्म योग - परम तत्व और मुक्ति का विज्ञान।' }, topics: ['Brahman', 'Death', 'Liberation'] },
  { number: 9, verses: 34, name: { en: 'Raja Vidya Raja Guhya Yoga', hi: 'राजविद्या राजगुह्य योग', sanskrit: 'राजविद्याराजगुह्ययोग' }, description: { en: 'The Yoga of Royal Knowledge and Royal Secret - The supreme knowledge and secret.', hi: 'राजविद्या राजगुह्य योग - सर्वोच्च ज्ञान और रहस्य।' }, topics: ['Supreme Knowledge', 'Devotion', 'Faith'] },
  { number: 10, verses: 42, name: { en: 'Vibhuti Yoga', hi: 'विभूति योग', sanskrit: 'विभूतियोग' }, description: { en: 'The Yoga of Divine Glories - Krishna reveals His divine manifestations.', hi: 'विभूति योग - भगवान कृष्ण अपनी दिव्य विभूतियों का वर्णन करते हैं।' }, topics: ['Divine Manifestations', 'Glory', 'Power'] },
  { number: 11, verses: 55, name: { en: 'Vishvarupa Darshana Yoga', hi: 'विश्वरूप दर्शन योग', sanskrit: 'विश्वरूपदर्शनयोग' }, description: { en: 'The Yoga of the Vision of the Universal Form - Arjuna witnesses the cosmic form.', hi: 'विश्वरूप दर्शन योग - अर्जुन विराट स्वरूप के दर्शन करते हैं।' }, topics: ['Cosmic Form', 'Vision', 'Awe'] },
  { number: 12, verses: 20, name: { en: 'Bhakti Yoga', hi: 'भक्ति योग', sanskrit: 'भक्तियोग' }, description: { en: 'The Yoga of Devotion - The path of loving devotion to the Divine.', hi: 'भक्ति योग - भगवान के प्रति प्रेममय भक्ति का मार्ग।' }, topics: ['Devotion', 'Love', 'Surrender'] },
  { number: 13, verses: 35, name: { en: 'Kshetra Kshetragna Vibhaga Yoga', hi: 'क्षेत्र क्षेत्रज्ञ विभाग योग', sanskrit: 'क्षेत्रक्षेत्रज्ञविभागयोग' }, description: { en: 'The Yoga of the Field and the Knower - Understanding the body and the soul.', hi: 'क्षेत्र और क्षेत्रज्ञ का योग - शरीर और आत्मा को समझना।' }, topics: ['Body', 'Soul', 'Knowledge'] },
  { number: 14, verses: 27, name: { en: 'Gunatraya Vibhaga Yoga', hi: 'गुणत्रय विभाग योग', sanskrit: 'गुणत्रयविभागयोग' }, description: { en: 'The Yoga of the Three Gunas - Understanding the three qualities of nature.', hi: 'तीन गुणों का योग - प्रकृति के तीन गुणों को समझना।' }, topics: ['Gunas', 'Nature', 'Transcendence'] },
  { number: 15, verses: 20, name: { en: 'Purushottama Yoga', hi: 'पुरुषोत्तम योग', sanskrit: 'पुरुषोत्तमयोग' }, description: { en: 'The Yoga of the Supreme Person - The supreme being and liberation.', hi: 'पुरुषोत्तम योग - परमात्मा और मुक्ति।' }, topics: ['Supreme Being', 'Liberation', 'Tree of Life'] },
  { number: 16, verses: 24, name: { en: 'Daivasura Sampad Vibhaga Yoga', hi: 'दैवासुर सम्पद् विभाग योग', sanskrit: 'दैवासुरसम्पद्विभागयोग' }, description: { en: 'The Yoga of Divine and Demonic Natures - Divine and demonic qualities.', hi: 'दैवी और आसुरी संपदाओं का योग - दैवी और आसुरी गुण।' }, topics: ['Divine Qualities', 'Demonic Qualities', 'Conduct'] },
  { number: 17, verses: 28, name: { en: 'Sraddhatraya Vibhaga Yoga', hi: 'श्रद्धात्रय विभाग योग', sanskrit: 'श्रद्धात्रयविभागयोग' }, description: { en: 'The Yoga of the Three Kinds of Faith - Understanding different types of faith.', hi: 'तीन प्रकार की श्रद्धा का योग - विभिन्न प्रकार की श्रद्धा को समझना।' }, topics: ['Faith', 'Food', 'Sacrifice', 'Austerity'] },
  { number: 18, verses: 78, name: { en: 'Moksha Sanyasa Yoga', hi: 'मोक्ष संन्यास योग', sanskrit: 'मोक्षसंन्यासयोग' }, description: { en: 'The Yoga of Liberation through Renunciation - Conclusion and the path to liberation.', hi: 'मोक्ष संन्यास योग - निष्कर्ष और मुक्ति का मार्ग।' }, topics: ['Liberation', 'Renunciation', 'Surrender', 'Conclusion'] },
];

// Fetch all chapters
export async function fetchAllChapters(): Promise<GitaChapterResponse[]> {
  const response = await fetch(`${BASE_URL}/chapters`);
  if (!response.ok) throw new Error('Failed to fetch chapters');
  return response.json();
}

// Fetch specific chapter details
export async function fetchChapter(chapterNumber: number): Promise<GitaChapterResponse> {
  const response = await fetch(`${BASE_URL}/chapter/${chapterNumber}`);
  if (!response.ok) throw new Error(`Failed to fetch chapter ${chapterNumber}`);
  return response.json();
}

// Fetch specific verse
export async function fetchVerse(chapter: number, verse: number): Promise<GitaSlokResponse> {
  const response = await fetch(`${BASE_URL}/slok/${chapter}/${verse}`);
  if (!response.ok) throw new Error(`Failed to fetch verse ${chapter}:${verse}`);
  return response.json();
}

// Fetch all verses for a chapter
export async function fetchChapterVerses(chapterNumber: number): Promise<GitaSlokResponse[]> {
  const chapterInfo = gitaChaptersData.find(c => c.number === chapterNumber);
  if (!chapterInfo) throw new Error(`Chapter ${chapterNumber} not found`);
  
  const verseCount = chapterInfo.verses;
  const verses: GitaSlokResponse[] = [];
  
  // Fetch verses in batches for better performance
  const batchSize = 10;
  for (let i = 1; i <= verseCount; i += batchSize) {
    const batch = [];
    for (let j = i; j < Math.min(i + batchSize, verseCount + 1); j++) {
      batch.push(fetchVerse(chapterNumber, j));
    }
    const batchResults = await Promise.all(batch);
    verses.push(...batchResults);
  }
  
  return verses;
}

// Convert API response to our app's Verse format
export function convertApiVerseToAppVerse(apiVerse: GitaSlokResponse): {
  id: string;
  chapter: number;
  verse: number;
  sanskrit: string;
  transliteration: string;
  translations: { en: string; hi: string };
  meaning: { en: string; hi: string };
  keywords: string[];
} {
  // Get English translation (prefer siva, then purohit, then gambir)
  const englishTranslation = apiVerse.siva?.et || apiVerse.purohit?.et || apiVerse.gambir?.et || apiVerse.adi?.et || '';
  
  // Get Hindi translation (prefer tej, then rams)
  const hindiTranslation = apiVerse.tej?.ht || apiVerse.rams?.ht || '';
  
  // Get English commentary for meaning
  const englishMeaning = apiVerse.siva?.ec || apiVerse.rpicar?.ec || '';
  
  // Get Hindi commentary for meaning  
  const hindiMeaning = apiVerse.chinmay?.hc || apiVerse.rams?.hc || '';

  return {
    id: apiVerse._id,
    chapter: apiVerse.chapter,
    verse: apiVerse.verse,
    sanskrit: apiVerse.slok,
    transliteration: apiVerse.transliteration,
    translations: {
      en: englishTranslation,
      hi: hindiTranslation,
    },
    meaning: {
      en: englishMeaning,
      hi: hindiMeaning,
    },
    keywords: [],
  };
}
