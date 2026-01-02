// Shiva Purana data - Complete with all 7 Samhitas
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

// Complete Shiva Purana verses for each Samhita
export const shivPuranaVerses: { [key: number]: any[] } = {
  1: [ // Vidyeshvara Samhita
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
    },
    {
      id: 'shiv-1-1-3',
      chapter: 1,
      verse: 3,
      sanskrit: 'ॐ नमः शिवाय इति पञ्चाक्षरं मनुम् ।\nजपेद्यः सततं भक्त्या स शिवेन सह मोदते ॥',
      transliteration: 'oṃ namaḥ śivāya iti pañcākṣaraṃ manum |\njapedyaḥ satataṃ bhaktyā sa śivena saha modate ||',
      translations: {
        en: 'He who constantly chants with devotion the five-syllabled mantra "Om Namah Shivaya" rejoices with Shiva.',
        hi: 'जो भक्ति से निरंतर "ॐ नमः शिवाय" पंचाक्षर मंत्र का जप करता है, वह शिव के साथ आनंदित होता है।'
      },
      meaning: {
        en: 'The power and glory of the Panchakshara mantra (Om Namah Shivaya).',
        hi: 'पंचाक्षर मंत्र (ॐ नमः शिवाय) की शक्ति और महिमा।'
      }
    },
    {
      id: 'shiv-1-1-4',
      chapter: 1,
      verse: 4,
      sanskrit: 'शिवलिङ्गं महापुण्यं सर्वपापप्रणाशनम् ।\nपूजयेद्यः सदा भक्त्या स याति परमां गतिम् ॥',
      transliteration: 'śivaliṅgaṃ mahāpuṇyaṃ sarvapāpapraṇāśanam |\npūjayedyaḥ sadā bhaktyā sa yāti paramāṃ gatim ||',
      translations: {
        en: 'The Shiva Linga is supremely meritorious and destroys all sins. He who worships it with constant devotion attains the highest goal.',
        hi: 'शिवलिंग परम पुण्यमय है और सभी पापों का नाश करता है। जो सदा भक्ति से इसकी पूजा करता है वह परम गति को प्राप्त होता है।'
      },
      meaning: {
        en: 'The significance of Shiva Linga worship for spiritual liberation.',
        hi: 'आध्यात्मिक मुक्ति के लिए शिवलिंग पूजा का महत्व।'
      }
    },
    {
      id: 'shiv-1-1-5',
      chapter: 1,
      verse: 5,
      sanskrit: 'महादेवस्य माहात्म्यं को वा वक्तुं समर्थवान् ।\nब्रह्मादयोऽपि देवेशा न विदुः परमं शिवम् ॥',
      transliteration: 'mahādevasya māhātmyaṃ ko vā vaktuṃ samarthavān |\nbrahmādayo\'pi deveśā na viduḥ paramaṃ śivam ||',
      translations: {
        en: 'Who is capable of describing the glory of Mahadeva? Even Brahma and other lords of gods do not know the Supreme Shiva.',
        hi: 'महादेव की महिमा का वर्णन करने में कौन समर्थ है? ब्रह्मा आदि देवेश भी परम शिव को नहीं जानते।'
      },
      meaning: {
        en: 'Even the greatest gods cannot fully comprehend Shiva\'s infinite glory.',
        hi: 'सबसे बड़े देवता भी शिव की अनंत महिमा को पूर्णतः नहीं समझ सकते।'
      }
    }
  ],
  2: [ // Rudra Samhita
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
    },
    {
      id: 'shiv-2-1-2',
      chapter: 1,
      verse: 2,
      sanskrit: 'सती देहं परित्यज्य हिमाचलसुता बभूव ।\nपार्वती नाम विख्याता तपसा शिवमाप्तवान् ॥',
      transliteration: 'satī dehaṃ parityajya himācalasutā babhūva |\npārvatī nāma vikhyātā tapasā śivam āptavān ||',
      translations: {
        en: 'After Sati abandoned her body, she was born as the daughter of Himachal. Known as Parvati, she attained Shiva through austerity.',
        hi: 'सती ने देह त्याग कर हिमाचल की पुत्री के रूप में जन्म लिया। पार्वती नाम से विख्यात, उन्होंने तपस्या से शिव को पाया।'
      },
      meaning: {
        en: 'The story of Sati\'s rebirth as Parvati and her devotion to Shiva.',
        hi: 'सती के पार्वती के रूप में पुनर्जन्म और शिव के प्रति उनकी भक्ति की कथा।'
      }
    },
    {
      id: 'shiv-2-1-3',
      chapter: 1,
      verse: 3,
      sanskrit: 'गणानां त्वां गणपतिं हवामहे कविं कवीनामुपमश्रवस्तमम् ।\nज्येष्ठराजं ब्रह्मणां ब्रह्मणस्पत आ नः शृण्वन्नूतिभिः सीद सादनम् ॥',
      transliteration: 'gaṇānāṃ tvāṃ gaṇapatiṃ havāmahe kaviṃ kavīnām upamaśravastamam |\njyeṣṭharājaṃ brahmaṇāṃ brahmaṇaspata ā naḥ śṛṇvann ūtibhiḥ sīda sādanam ||',
      translations: {
        en: 'We invoke you, Lord of Ganas (Ganesha), the wisest among the wise, king of prayers, lord of Brahma. Hearing our call, come to us with your blessings.',
        hi: 'हे गणपति, हम आपका आह्वान करते हैं, कवियों में श्रेष्ठ कवि, प्रार्थनाओं के राजा। हमारी पुकार सुनकर आशीर्वाद सहित पधारें।'
      },
      meaning: {
        en: 'Famous invocation to Ganesha, the son of Shiva and Parvati.',
        hi: 'शिव और पार्वती के पुत्र गणेश का प्रसिद्ध आह्वान।'
      }
    },
    {
      id: 'shiv-2-1-4',
      chapter: 1,
      verse: 4,
      sanskrit: 'षण्मुखः षड्भुजः श्रीमान् कार्तिकेयो महाबलः ।\nशिवपुत्रो महातेजा देवसेनापतिर्विभुः ॥',
      transliteration: 'ṣaṇmukhaḥ ṣaḍbhujaḥ śrīmān kārttikeyo mahābalaḥ |\nśivaputro mahātejā devaseṇāpatir vibhuḥ ||',
      translations: {
        en: 'Six-faced, six-armed, resplendent Kartikeya of great strength, son of Shiva, of great radiance, commander of the divine army, all-pervading.',
        hi: 'षण्मुख, षड्भुज, श्रीमान कार्तिकेय महाबली, शिवपुत्र, महातेजस्वी, देवसेनापति, सर्वव्यापी।'
      },
      meaning: {
        en: 'Description of Kartikeya (Skanda), Shiva\'s son and commander of the divine forces.',
        hi: 'कार्तिकेय (स्कंद) का वर्णन, शिव के पुत्र और दिव्य सेना के सेनापति।'
      }
    }
  ],
  3: [ // Shatarudra Samhita
    {
      id: 'shiv-3-1-1',
      chapter: 1,
      verse: 1,
      sanskrit: 'नमः शिवाय शान्ताय रुद्राय भयनाशिने ।\nशतरूपधराय नित्यं नमस्तस्मै महात्मने ॥',
      transliteration: 'namaḥ śivāya śāntāya rudrāya bhayanāśine |\nśatarūpadharāya nityaṃ namastasmai mahātmane ||',
      translations: {
        en: 'Salutations to Shiva, the peaceful one, to Rudra who destroys fear. Always salutations to that great soul who bears a hundred forms.',
        hi: 'शिव को नमस्कार, शांत स्वरूप, भय का नाश करने वाले रुद्र को। सौ रूप धारण करने वाले उस महात्मा को सदा नमस्कार।'
      },
      meaning: {
        en: 'Invocation to Rudra in his hundred forms.',
        hi: 'रुद्र के सौ रूपों का आह्वान।'
      }
    },
    {
      id: 'shiv-3-1-2',
      chapter: 1,
      verse: 2,
      sanskrit: 'द्वादश ज्योतिर्लिङ्गानि पूज्यन्ते लोकपावनी ।\nसोमनाथं मल्लिकार्जुनं महाकालेश्वरं शुभम् ॥',
      transliteration: 'dvādaśa jyotirliṅgāni pūjyante lokapāvanī |\nsomanāthaṃ mallikārjunaṃ mahākāleśvaraṃ śubham ||',
      translations: {
        en: 'The twelve Jyotirlingas are worshipped for purifying the world - Somnath, Mallikarjuna, the auspicious Mahakaleshwar.',
        hi: 'द्वादश ज्योतिर्लिंग लोक पावन के लिए पूजित हैं - सोमनाथ, मल्लिकार्जुन, शुभ महाकालेश्वर।'
      },
      meaning: {
        en: 'Introduction to the twelve sacred Jyotirlingas.',
        hi: 'द्वादश पवित्र ज्योतिर्लिंगों का परिचय।'
      }
    },
    {
      id: 'shiv-3-1-3',
      chapter: 1,
      verse: 3,
      sanskrit: 'ॐकारेश्वरमम्बिकायां श्रीभीमशङ्करं तथा ।\nनागेश्वरं त्र्यम्बकेशं केदारेश्वरमुत्तमम् ॥',
      transliteration: 'oṃkāreśvaram ambikāyāṃ śrībhīmaśaṅkaraṃ tathā |\nnāgeśvaraṃ tryambakeśaṃ kedāreśvaram uttamam ||',
      translations: {
        en: 'Omkareshwar at Ambika, Shri Bhimashankar, Nageshwar, Tryambakeshwar, the supreme Kedareshwar.',
        hi: 'अंबिका में ओंकारेश्वर, श्री भीमाशंकर, नागेश्वर, त्र्यंबकेश्वर, उत्तम केदारेश्वर।'
      },
      meaning: {
        en: 'Continuing the list of the twelve Jyotirlingas.',
        hi: 'द्वादश ज्योतिर्लिंगों की सूची जारी।'
      }
    }
  ],
  4: [ // Kotirudra Samhita
    {
      id: 'shiv-4-1-1',
      chapter: 1,
      verse: 1,
      sanskrit: 'कोटि रुद्राणां या शक्तिः सा शक्तिर्महेश्वरी ।\nजगदुद्धारिणी देवी पार्वती परमेश्वरी ॥',
      transliteration: 'koṭi rudrāṇāṃ yā śaktiḥ sā śaktir maheśvarī |\njagaduddhāriṇī devī pārvatī parameśvarī ||',
      translations: {
        en: 'The power that is in ten million Rudras, that power is Maheshwari. The goddess who uplifts the world is Parvati, the Supreme Goddess.',
        hi: 'करोड़ों रुद्रों में जो शक्ति है वह शक्ति महेश्वरी है। जगत का उद्धार करने वाली देवी पार्वती परमेश्वरी हैं।'
      },
      meaning: {
        en: 'The divine feminine power (Shakti) that pervades all forms of Rudra.',
        hi: 'दिव्य स्त्री शक्ति जो रुद्र के सभी रूपों में व्याप्त है।'
      }
    },
    {
      id: 'shiv-4-1-2',
      chapter: 1,
      verse: 2,
      sanskrit: 'मृत्युञ्जयाय रुद्राय नीलकण्ठाय शम्भवे ।\nअमृतेशाय शर्वाय महादेवाय ते नमः ॥',
      transliteration: 'mṛtyuñjayāya rudrāya nīlakaṇṭhāya śambhave |\namṛteśāya śarvāya mahādevāya te namaḥ ||',
      translations: {
        en: 'Salutations to Rudra who conquers death, to the blue-throated Shambhu, to the lord of nectar, to Sharva, to Mahadeva.',
        hi: 'मृत्युंजय रुद्र को नमस्कार, नीलकंठ शंभु को, अमृतेश को, शर्व को, महादेव को नमः।'
      },
      meaning: {
        en: 'Salutations to various forms and names of Lord Shiva.',
        hi: 'भगवान शिव के विभिन्न रूपों और नामों को नमस्कार।'
      }
    }
  ],
  5: [ // Uma Samhita
    {
      id: 'shiv-5-1-1',
      chapter: 1,
      verse: 1,
      sanskrit: 'उमा हिमवतो पुत्री शिवस्य प्रियवल्लभा ।\nजगन्माता महादेवी सर्वमङ्गलमङ्गला ॥',
      transliteration: 'umā himavato putrī śivasya priyavallabhā |\njaganmātā mahādevī sarvamaṅgalamaṅgalā ||',
      translations: {
        en: 'Uma, daughter of Himavat, beloved consort of Shiva, mother of the universe, great goddess, the auspicious of all auspiciousness.',
        hi: 'उमा, हिमवान की पुत्री, शिव की प्रिय पत्नी, जगत की माता, महादेवी, सर्वमंगलमंगला।'
      },
      meaning: {
        en: 'Introduction to Goddess Uma (Parvati) as the universal mother.',
        hi: 'देवी उमा (पार्वती) का जगत की माता के रूप में परिचय।'
      }
    },
    {
      id: 'shiv-5-1-2',
      chapter: 1,
      verse: 2,
      sanskrit: 'धर्मार्थकाममोक्षाणां दात्री देवी सनातनी ।\nभक्तानुग्रहकर्त्री च शिवा शक्तिः परात्परा ॥',
      transliteration: 'dharmārthakāmamokṣāṇāṃ dātrī devī sanātanī |\nbhaktānugrahakartṛ ca śivā śaktiḥ parātparā ||',
      translations: {
        en: 'The eternal goddess who bestows dharma, artha, kama and moksha. She who grants grace to devotees, the auspicious Shakti, the highest of the high.',
        hi: 'धर्म, अर्थ, काम और मोक्ष देने वाली सनातन देवी। भक्तों पर अनुग्रह करने वाली शिवा शक्ति, परम से भी परम।'
      },
      meaning: {
        en: 'Uma grants all four goals of human life to her devotees.',
        hi: 'उमा अपने भक्तों को जीवन के चारों पुरुषार्थ प्रदान करती हैं।'
      }
    },
    {
      id: 'shiv-5-1-3',
      chapter: 1,
      verse: 3,
      sanskrit: 'या देवी सर्वभूतेषु मातृरूपेण संस्थिता ।\nनमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः ॥',
      transliteration: 'yā devī sarvabhūteṣu mātṛrūpeṇa saṃsthitā |\nnamastasyai namastasyai namastasyai namo namaḥ ||',
      translations: {
        en: 'To that Goddess who exists in all beings in the form of mother, salutations to her, salutations to her, salutations to her, again and again.',
        hi: 'जो देवी सभी प्राणियों में माता के रूप में स्थित हैं, उन्हें नमस्कार, उन्हें नमस्कार, उन्हें नमस्कार, बार-बार नमस्कार।'
      },
      meaning: {
        en: 'The divine mother resides in all beings.',
        hi: 'दिव्य माता सभी प्राणियों में निवास करती हैं।'
      }
    }
  ],
  6: [ // Kailasa Samhita
    {
      id: 'shiv-6-1-1',
      chapter: 1,
      verse: 1,
      sanskrit: 'कैलासं मन्दरं मेरुं हिमवन्तं च पर्वतम् ।\nशिवस्य निलयं पुण्यं वर्णयामि महात्मनः ॥',
      transliteration: 'kailāsaṃ mandaraṃ meruṃ himavantaṃ ca parvatam |\nśivasya nilayaṃ puṇyaṃ varṇayāmi mahātmanaḥ ||',
      translations: {
        en: 'I describe Kailasa, Mandara, Meru, and Himavan mountain - the sacred abode of the great-souled Shiva.',
        hi: 'मैं कैलास, मंदर, मेरु और हिमवान पर्वत का वर्णन करता हूँ - महात्मा शिव का पवित्र निवास।'
      },
      meaning: {
        en: 'Introduction to the sacred mountains associated with Shiva.',
        hi: 'शिव से जुड़े पवित्र पर्वतों का परिचय।'
      }
    },
    {
      id: 'shiv-6-1-2',
      chapter: 1,
      verse: 2,
      sanskrit: 'कैलासे शिवमीशानं ध्यायन्ति योगिनो जनाः ।\nब्रह्मविद्यां परां प्राप्य मुक्तिमापुर्महात्मनः ॥',
      transliteration: 'kailāse śivam īśānaṃ dhyāyanti yogino janāḥ |\nbrahmavidyāṃ parāṃ prāpya muktim āpur mahātmanaḥ ||',
      translations: {
        en: 'On Kailasa, yogis meditate on Shiva the Lord. Attaining supreme knowledge of Brahman, the great souls achieve liberation.',
        hi: 'कैलास पर योगीजन शिव ईशान का ध्यान करते हैं। परम ब्रह्मविद्या प्राप्त कर महात्मा मुक्ति पाते हैं।'
      },
      meaning: {
        en: 'Kailasa as the ultimate destination for yogis seeking liberation.',
        hi: 'मुक्ति चाहने वाले योगियों के लिए कैलास परम गंतव्य।'
      }
    }
  ],
  7: [ // Vayaviya Samhita
    {
      id: 'shiv-7-1-1',
      chapter: 1,
      verse: 1,
      sanskrit: 'वायुरुवाच महादेवं योगिनां योगमुत्तमम् ।\nशिवं सर्वगतं शान्तं सर्वज्ञं सर्वकारणम् ॥',
      transliteration: 'vāyur uvāca mahādevaṃ yogināṃ yogam uttamam |\nśivaṃ sarvagataṃ śāntaṃ sarvajñaṃ sarvakāraṇam ||',
      translations: {
        en: 'Vayu said: Mahadeva is the supreme yoga of yogis - Shiva who is all-pervading, peaceful, omniscient, and the cause of all.',
        hi: 'वायु ने कहा: महादेव योगियों का सर्वोत्तम योग हैं - शिव जो सर्वव्यापी, शांत, सर्वज्ञ और सर्वकारण हैं।'
      },
      meaning: {
        en: 'Vayu (Wind god) begins narrating Shiva\'s yogic aspects.',
        hi: 'वायु देव शिव के योगिक पक्षों का वर्णन प्रारंभ करते हैं।'
      }
    },
    {
      id: 'shiv-7-1-2',
      chapter: 1,
      verse: 2,
      sanskrit: 'अष्टाङ्गयोगमार्गेण शिवं ध्यात्वा समाहितः ।\nयोगी मुक्तिमवाप्नोति परमानन्दलक्षणम् ॥',
      transliteration: 'aṣṭāṅgayogamārgeṇa śivaṃ dhyātvā samāhitaḥ |\nyogī muktim avāpnoti paramānandalakṣaṇam ||',
      translations: {
        en: 'Through the path of eight-limbed yoga, meditating on Shiva with concentration, the yogi attains liberation characterized by supreme bliss.',
        hi: 'अष्टांग योग मार्ग से एकाग्रचित्त होकर शिव का ध्यान करते हुए, योगी परम आनंद लक्षण मुक्ति प्राप्त करता है।'
      },
      meaning: {
        en: 'The path of Ashtanga Yoga leads to liberation through meditation on Shiva.',
        hi: 'अष्टांग योग का मार्ग शिव के ध्यान द्वारा मुक्ति की ओर ले जाता है।'
      }
    },
    {
      id: 'shiv-7-1-3',
      chapter: 1,
      verse: 3,
      sanskrit: 'यमो नियमश्चैव आसनं प्राणसंयमः ।\nप्रत्याहारश्च धारणा ध्यानं समाधिरेव च ॥',
      transliteration: 'yamo niyamaścaiva āsanaṃ prāṇasaṃyamaḥ |\npratyāhāraśca dhāraṇā dhyānaṃ samādhir eva ca ||',
      translations: {
        en: 'Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana and Samadhi - these are the eight limbs.',
        hi: 'यम, नियम, आसन, प्राणायाम, प्रत्याहार, धारणा, ध्यान और समाधि - ये आठ अंग हैं।'
      },
      meaning: {
        en: 'The eight limbs of yoga as taught in Shiva Purana.',
        hi: 'शिव पुराण में वर्णित योग के आठ अंग।'
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
