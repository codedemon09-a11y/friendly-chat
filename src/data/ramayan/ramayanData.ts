// Ramayan data - Valmiki Ramayan with 7 Kandas
export const ramayanChaptersData = [
  {
    number: 1,
    name: { en: 'Bala Kanda', hi: 'बालकाण्ड', sanskrit: 'बालकाण्ड' },
    description: { 
      en: 'The Book of Youth - Birth and childhood of Rama, his education under Sage Vishwamitra, breaking of Shiva\'s bow, and marriage to Sita.',
      hi: 'बाल्यकाण्ड - राम का जन्म और बचपन, विश्वामित्र के साथ शिक्षा, शिव धनुष का भंग और सीता से विवाह।'
    },
    sargas: 77,
    topics: ['Birth of Rama', 'Vishwamitra', 'Tadaka', 'Ahalya', 'Sita Swayamvar']
  },
  {
    number: 2,
    name: { en: 'Ayodhya Kanda', hi: 'अयोध्याकाण्ड', sanskrit: 'अयोध्याकाण्ड' },
    description: { 
      en: 'The Book of Ayodhya - Preparations for Rama\'s coronation, Kaikeyi\'s demands, Rama\'s exile to the forest for 14 years.',
      hi: 'अयोध्याकाण्ड - राम के राज्याभिषेक की तैयारी, कैकेयी की माँग, और राम का 14 वर्ष का वनवास।'
    },
    sargas: 119,
    topics: ['Coronation', 'Kaikeyi', 'Exile', 'Bharata', 'Paduka']
  },
  {
    number: 3,
    name: { en: 'Aranya Kanda', hi: 'अरण्यकाण्ड', sanskrit: 'अरण्यकाण्ड' },
    description: { 
      en: 'The Book of the Forest - Life in exile, encounters with sages and demons, abduction of Sita by Ravana.',
      hi: 'अरण्यकाण्ड - वनवास का जीवन, ऋषियों और राक्षसों से मिलन, रावण द्वारा सीता का अपहरण।'
    },
    sargas: 75,
    topics: ['Forest Life', 'Shurpanakha', 'Golden Deer', 'Sita Abduction', 'Jatayu']
  },
  {
    number: 4,
    name: { en: 'Kishkindha Kanda', hi: 'किष्किन्धाकाण्ड', sanskrit: 'किष्किन्धाकाण्ड' },
    description: { 
      en: 'The Book of Kishkindha - Rama meets Hanuman and Sugriva, alliance with the Vanara kingdom, search for Sita begins.',
      hi: 'किष्किन्धाकाण्ड - राम की हनुमान और सुग्रीव से भेंट, वानर राज्य से मित्रता, सीता की खोज।'
    },
    sargas: 67,
    topics: ['Hanuman', 'Sugriva', 'Vali', 'Vanara Army', 'Search for Sita']
  },
  {
    number: 5,
    name: { en: 'Sundara Kanda', hi: 'सुन्दरकाण्ड', sanskrit: 'सुन्दरकाण्ड' },
    description: { 
      en: 'The Beautiful Book - Hanuman\'s leap to Lanka, finding Sita in Ashoka Vatika, burning of Lanka.',
      hi: 'सुन्दरकाण्ड - हनुमान की लंका यात्रा, अशोक वाटिका में सीता से मिलन, लंका दहन।'
    },
    sargas: 68,
    topics: ['Ocean Leap', 'Lanka', 'Ashoka Vatika', 'Lanka Dahan', 'Hanuman']
  },
  {
    number: 6,
    name: { en: 'Yuddha Kanda', hi: 'युद्धकाण्ड', sanskrit: 'युद्धकाण्ड' },
    description: { 
      en: 'The Book of War - Building of Ram Setu, the great battle against Ravana, victory and rescue of Sita.',
      hi: 'युद्धकाण्ड - रामसेतु का निर्माण, रावण से महायुद्ध, विजय और सीता का उद्धार।'
    },
    sargas: 128,
    topics: ['Ram Setu', 'Battle', 'Kumbhakarna', 'Indrajit', 'Ravana Vadh']
  },
  {
    number: 7,
    name: { en: 'Uttara Kanda', hi: 'उत्तरकाण्ड', sanskrit: 'उत्तरकाण्ड' },
    description: { 
      en: 'The Last Book - Return to Ayodhya, Rama\'s reign (Rama Rajya), the story of Sita\'s exile and final departure.',
      hi: 'उत्तरकाण्ड - अयोध्या वापसी, राम राज्य, सीता का वनगमन और अंतिम प्रस्थान।'
    },
    sargas: 111,
    topics: ['Rama Rajya', 'Lava Kusha', 'Sita\'s Trial', 'Ashwamedha', 'Final Departure']
  }
];

// Complete verses from each Kanda
export const ramayanVerses: { [key: number]: any[] } = {
  1: [
    {
      id: 'ram-1-1-1',
      sarga: 1,
      verse: 1,
      sanskrit: 'तपःस्वाध्यायनिरतं तपस्वी वाग्विदां वरम् ।\nनारदं परिपप्रच्छ वाल्मीकिर्मुनिपुङ्गवम् ॥',
      transliteration: 'tapah-svadhyaya-niratam tapasvee vagvidaam varam | naaradam paripapraccha vaalmeekir-muni-pungavam ||',
      translations: {
        en: 'The ascetic Valmiki questioned the eminent sage Narada, who was devoted to penance and sacred studies, and was foremost among the eloquent.',
        hi: 'तप और स्वाध्याय में निरत, वाग्विदों में श्रेष्ठ, मुनियों में उत्तम नारद से तपस्वी वाल्मीकि ने पूछा।'
      },
      meaning: {
        en: 'This opening verse introduces the dialogue between Sage Valmiki and Narada, setting the stage for the entire Ramayana.',
        hi: 'यह प्रारंभिक श्लोक ऋषि वाल्मीकि और नारद के बीच संवाद का परिचय देता है।'
      }
    },
    {
      id: 'ram-1-1-2',
      sarga: 1,
      verse: 2,
      sanskrit: 'को न्वस्मिन्साम्प्रतं लोके गुणवान्कश्च वीर्यवान् ।\nधर्मज्ञश्च कृतज्ञश्च सत्यवाक्यो दृढव्रतः ॥',
      transliteration: 'ko nvasmin-saampratam loke gunavaan-kashcha veeryavaan | dharmajnashcha kritajnashcha satyavaakyo dridha-vratah ||',
      translations: {
        en: 'Who in this world today is virtuous? Who is valorous? Who knows dharma? Who is grateful? Who speaks truth and is firm in his vows?',
        hi: 'इस संसार में आज कौन गुणवान है? कौन वीर्यवान है? कौन धर्मज्ञ है? कौन कृतज्ञ है? कौन सत्यवादी और दृढ़प्रतिज्ञ है?'
      },
      meaning: {
        en: 'Valmiki asks Narada about the ideal man who possesses all virtues, leading to the description of Lord Rama.',
        hi: 'वाल्मीकि नारद से आदर्श पुरुष के बारे में पूछते हैं जो सभी गुणों से संपन्न हो।'
      }
    },
    {
      id: 'ram-1-1-3',
      sarga: 1,
      verse: 3,
      sanskrit: 'चारित्रेण च को युक्तः सर्वभूतेषु को हितः ।\nविद्वान्कः कः समर्थश्च कश्चैकप्रियदर्शनः ॥',
      transliteration: 'chaaritrena cha ko yuktah sarvabhooteshu ko hitah | vidvaankah kah samarthashcha kashchaika-priyadarshanah ||',
      translations: {
        en: 'Who is endowed with good character? Who is benevolent to all beings? Who is learned? Who is capable? Whose appearance is pleasing to all?',
        hi: 'कौन सद्चरित्र है? कौन सभी प्राणियों का हित करने वाला है? कौन विद्वान है? कौन समर्थ है? किसका दर्शन सभी को प्रिय है?'
      },
      meaning: {
        en: 'Valmiki continues his inquiry about the perfect person who possesses wisdom, capability and whose very sight brings joy.',
        hi: 'वाल्मीकि उस पूर्ण व्यक्ति के बारे में पूछते हैं जो ज्ञानी, समर्थ और सुंदर हो।'
      }
    },
    {
      id: 'ram-1-1-4',
      sarga: 1,
      verse: 4,
      sanskrit: 'आत्मवान्को जितक्रोधो द्युतिमान्कोऽनसूयकः ।\nकस्य बिभ्यति देवाश्च जातरोषस्य संयुगे ॥',
      transliteration: 'aatmavaan-ko jitakrodho dyutimaan-ko-anasooyakah | kasya bibhyati devaashcha jaataroshasya samyuge ||',
      translations: {
        en: 'Who has self-control? Who has conquered anger? Who is radiant? Who is free from envy? Of whom are even the gods afraid when he is enraged in battle?',
        hi: 'कौन आत्मवान है? किसने क्रोध को जीता है? कौन तेजस्वी है? कौन निर्मत्सर है? युद्ध में रुष्ट होने पर किससे देवता भी डरते हैं?'
      },
      meaning: {
        en: 'These qualities describe a being of divine power and self-mastery, pointing towards Rama.',
        hi: 'ये गुण दिव्य शक्ति और आत्म-संयम वाले व्यक्ति का वर्णन करते हैं।'
      }
    },
    {
      id: 'ram-1-1-5',
      sarga: 1,
      verse: 5,
      sanskrit: 'एतदिच्छाम्यहं श्रोतुं परं कौतूहलं हि मे ।\nमहर्षे त्वं समर्थोऽसि ज्ञातुमेवंविधं नरम् ॥',
      transliteration: 'etad-icchaamy-aham shrotum param kautuhalam hi me | maharṣe tvam samartho-si jnaatum-evam-vidham naram ||',
      translations: {
        en: 'I wish to hear about such a person. I have great curiosity. O great sage, you are capable of knowing such a man.',
        hi: 'मैं ऐसे व्यक्ति के बारे में सुनना चाहता हूँ। मुझे बड़ी जिज्ञासा है। हे महर्षि, आप ऐसे मनुष्य को जानने में समर्थ हैं।'
      },
      meaning: {
        en: 'Valmiki expresses his eagerness to learn about this ideal person from the all-knowing Narada.',
        hi: 'वाल्मीकि सर्वज्ञ नारद से इस आदर्श व्यक्ति के बारे में जानने की उत्सुकता व्यक्त करते हैं।'
      }
    },
    {
      id: 'ram-1-1-6',
      sarga: 1,
      verse: 6,
      sanskrit: 'श्रुत्वा चैतत्त्रिलोकज्ञो वाल्मीकेर्नारदो वचः ।\nश्रूयतामिति चामन्त्र्य प्रहृष्टो वाक्यमब्रवीत् ॥',
      transliteration: 'shrutvaa chaitat-trilokajno vaalmeeker-naarado vachah | shrooyataam-iti chaamantrya prahrishto vaakyam-abraveet ||',
      translations: {
        en: 'Hearing these words of Valmiki, Narada, who knows all three worlds, said "Listen" with delight and spoke these words.',
        hi: 'वाल्मीकि के इन वचनों को सुनकर, तीनों लोकों के ज्ञाता नारद ने प्रसन्न होकर "सुनिए" कहा और बोले।'
      },
      meaning: {
        en: 'Narada, pleased with the question, prepares to describe Rama to Valmiki.',
        hi: 'नारद प्रश्न से प्रसन्न होकर वाल्मीकि को राम का वर्णन करने की तैयारी करते हैं।'
      }
    },
    {
      id: 'ram-1-1-7',
      sarga: 1,
      verse: 7,
      sanskrit: 'बहवो दुर्लभाश्चैव ये त्वया कीर्तिता गुणाः ।\nमुने वक्ष्याम्यहं बुद्ध्वा तैर्युक्तः श्रूयतां नरः ॥',
      transliteration: 'bahavo durlabhaashchaiva ye tvayaa keertitaa gunaah | mune vakshyaamy-aham buddhvaa tairyuktah shrooyataam narah ||',
      translations: {
        en: 'The qualities you have enumerated are many and rare. O sage, I shall speak of a man endowed with them. Listen.',
        hi: 'आपने जो गुण बताए हैं वे अनेक और दुर्लभ हैं। हे मुनि, मैं उन गुणों से युक्त मनुष्य का वर्णन करूँगा। सुनिए।'
      },
      meaning: {
        en: 'Narada acknowledges the rarity of such virtues and prepares to reveal Rama.',
        hi: 'नारद ऐसे गुणों की दुर्लभता स्वीकार करते हैं और राम का परिचय देने की तैयारी करते हैं।'
      }
    },
    {
      id: 'ram-1-1-8',
      sarga: 1,
      verse: 8,
      sanskrit: 'इक्ष्वाकुवंशप्रभवो रामो नाम जनैः श्रुतः ।\nनियतात्मा महावीर्यो द्युतिमान्धृतिमान्वशी ॥',
      transliteration: 'ikshvaaku-vamsha-prabhavo raamo naama janaih shrutah | niyataatmaa mahaaveeryo dyutimaan-dhritimaan-vashee ||',
      translations: {
        en: 'Born in the Ikshvaku dynasty, he is known among people as Rama. He is self-controlled, of great valor, radiant, steadfast, and master of his senses.',
        hi: 'इक्ष्वाकु वंश में उत्पन्न, लोगों में राम नाम से प्रसिद्ध। वे संयमी, महावीर्यवान, तेजस्वी, धैर्यवान और इंद्रियों के स्वामी हैं।'
      },
      meaning: {
        en: 'Narada begins describing Rama, first mentioning his noble lineage and fundamental virtues.',
        hi: 'नारद राम का वर्णन प्रारंभ करते हैं, पहले उनके कुल और मूल गुणों का उल्लेख करते हैं।'
      }
    },
    {
      id: 'ram-1-1-9',
      sarga: 1,
      verse: 9,
      sanskrit: 'बुद्धिमान्नीतिमान्वाग्मी श्रीमाञ्शत्रुनिबर्हणः ।\nविपुलांसो महाबाहुः कम्बुग्रीवो महाहनुः ॥',
      transliteration: 'buddhimaan-neetimaan-vaagmee shreemaan-shatru-nibarhanah | vipulaanso mahaabaahuh kambugreevo mahaahanuh ||',
      translations: {
        en: 'He is intelligent, righteous, eloquent, prosperous, and destroyer of enemies. He has broad shoulders, mighty arms, a conch-like neck, and strong jaws.',
        hi: 'वे बुद्धिमान, नीतिवान, वाग्मी, श्रीमान और शत्रुनाशक हैं। उनके विशाल कंधे, महान भुजाएँ, शंख जैसी गर्दन और मजबूत हनु हैं।'
      },
      meaning: {
        en: 'This verse describes both the mental and physical attributes of Rama.',
        hi: 'यह श्लोक राम के मानसिक और शारीरिक दोनों गुणों का वर्णन करता है।'
      }
    },
    {
      id: 'ram-1-1-10',
      sarga: 1,
      verse: 10,
      sanskrit: 'महोरस्को महेष्वासो गूढजत्रुररिन्दमः ।\nआजानुबाहुः सुशिरा सुललाटः सुविक्रमः ॥',
      transliteration: 'mahorsko maheshvaaso goodhajatru-rarindamah | aajaanubaahuh sushiraa sulalaatah suvikramah ||',
      translations: {
        en: 'He has a broad chest, is a great archer, has well-concealed collar-bones, and subdues enemies. His arms reach his knees, he has a beautiful head, forehead, and gait.',
        hi: 'उनकी छाती विशाल है, वे महान धनुर्धर हैं, गुप्त गठीले कंधे वाले, शत्रु-दमनकारी। उनकी भुजाएँ घुटनों तक, सुंदर शिर, ललाट और चाल है।'
      },
      meaning: {
        en: 'Further physical description showing Rama as the ideal warrior prince.',
        hi: 'राम को आदर्श योद्धा राजकुमार के रूप में दर्शाने वाला शारीरिक वर्णन।'
      }
    },
    {
      id: 'ram-1-2-1',
      sarga: 2,
      verse: 1,
      sanskrit: 'स तु धर्मात्मनो जातो राम इक्ष्वाकुसत्तमः ।\nकौसल्याया महाभागो देवतानां यथा हरिः ॥',
      transliteration: 'sa tu dharmaatmano jaato raama ikshvaaku-sattamah | kausalyaayaa mahaabhaago devataanaam yathaa harih ||',
      translations: {
        en: 'That Rama, best of the Ikshvaku race, was born to the righteous king, from Kausalya, most fortunate, like Vishnu among gods.',
        hi: 'वह राम, इक्ष्वाकु कुल में श्रेष्ठ, धर्मात्मा राजा से, कौसल्या से जन्मे, अत्यंत भाग्यशाली, जैसे देवताओं में विष्णु।'
      },
      meaning: {
        en: 'Describes Rama birth from Kausalya, comparing him to Vishnu.',
        hi: 'कौसल्या से राम के जन्म का वर्णन, उन्हें विष्णु से तुलना करते हुए।'
      }
    },
    {
      id: 'ram-1-18-1',
      sarga: 18,
      verse: 1,
      sanskrit: 'ततो यज्ञे समाप्ते तु ऋतूनां षट् समत्ययुः ।\nततश्च द्वादशे मासे चैत्रे नावमिके तिथौ ॥',
      transliteration: 'tato yajne samaapte tu ritoonaam shat samatyayuh | tatashcha dvadashe maase chaitre naavamike tithau ||',
      translations: {
        en: 'After the completion of the sacrifice, six seasons passed. Then, in the twelfth month, on the ninth day of Chaitra.',
        hi: 'यज्ञ की समाप्ति के बाद छह ऋतुएँ बीत गईं। फिर बारहवें महीने में, चैत्र की नवमी तिथि को।'
      },
      meaning: {
        en: 'This verse marks the time of Rama birth - Chaitra Navami, celebrated as Ram Navami.',
        hi: 'यह श्लोक राम जन्म का समय बताता है - चैत्र नवमी, जो राम नवमी के रूप में मनाई जाती है।'
      }
    },
    {
      id: 'ram-1-18-2',
      sarga: 18,
      verse: 2,
      sanskrit: 'नक्षत्रेऽदितिदैवत्ये स्वोच्चसंस्थेषु पञ्चसु ।\nग्रहेषु कर्कटे लग्ने वाक्पतावींदुना सह ॥',
      transliteration: 'nakshetre-aditidaivatye svocchasamstheshu panchasu | graheshu karkate lagne vaakpataaveendunaa saha ||',
      translations: {
        en: 'Under the star Punarvasu presided by Aditi, with five planets in exaltation, in Cancer ascendant, with Jupiter and Moon together.',
        hi: 'अदिति-देवता वाले पुनर्वसु नक्षत्र में, पाँच ग्रह उच्च स्थान में, कर्क लग्न में, बृहस्पति और चंद्रमा के साथ।'
      },
      meaning: {
        en: 'The auspicious astrological configuration at the time of Rama birth.',
        hi: 'राम के जन्म के समय शुभ ज्योतिषीय स्थिति।'
      }
    },
    {
      id: 'ram-1-18-3',
      sarga: 18,
      verse: 3,
      sanskrit: 'प्रोद्यमाने जगन्नाथं सर्वलोकनमस्कृतम् ।\nकौसल्याजनयद्रामं दिव्यलक्षणसंयुतम् ॥',
      transliteration: 'prodyamaane jagannaatham sarvaloka-namaskritam | kausalyaa-janayad-raamam divya-lakshana-samyutam ||',
      translations: {
        en: 'As the Lord of the universe was rising, worshipped by all worlds, Kausalya gave birth to Rama, endowed with divine marks.',
        hi: 'जब जगत के स्वामी उदित हो रहे थे, सभी लोकों द्वारा नमस्कृत, कौसल्या ने दिव्य लक्षणों से युक्त राम को जन्म दिया।'
      },
      meaning: {
        en: 'The actual moment of Rama birth, describing him as Lord of the universe with divine marks.',
        hi: 'राम के जन्म का वास्तविक क्षण, उन्हें दिव्य लक्षणों सहित जगत के स्वामी के रूप में वर्णित करते हुए।'
      }
    },
    {
      id: 'ram-1-27-1',
      sarga: 27,
      verse: 1,
      sanskrit: 'विश्वामित्रो महातेजा राघवाभ्यां सुविस्मितः ।\nबलातिबलयोश्चैव धारणं प्रददौ पृथक् ॥',
      transliteration: 'vishvaamitro mahaatejaa raaghaavaabhyaam suvismitah | balaatibalayoshchaiva dhaaranam pradadau prithak ||',
      translations: {
        en: 'The greatly radiant Vishwamitra, amazed at the Raghavas, gave them separately the knowledge of Bala and Atibala.',
        hi: 'महान तेजस्वी विश्वामित्र, राघवों से प्रभावित होकर, उन्हें बला और अतिबला विद्या अलग-अलग प्रदान की।'
      },
      meaning: {
        en: 'Vishwamitra imparts divine weapons and knowledge to Rama and Lakshmana.',
        hi: 'विश्वामित्र राम और लक्ष्मण को दिव्य अस्त्र और विद्या प्रदान करते हैं।'
      }
    },
    {
      id: 'ram-1-31-1',
      sarga: 31,
      verse: 1,
      sanskrit: 'ततो रामो महातेजा गौतमाश्रममागतः ।\nअहल्यां दृष्टवान्राज्ञः शापाद्विगतकल्मषाम् ॥',
      transliteration: 'tato raamo mahaatejaa gautamaashramam-aagatah | ahalyaam drishtavaan-raajnah shaapaad-vigata-kalmashaam ||',
      translations: {
        en: 'Then the greatly radiant Rama came to Gautama ashram and saw Ahalya, freed from her curse and purified.',
        hi: 'फिर महातेजस्वी राम गौतम के आश्रम में आए और अहल्या को देखा, जो शाप से मुक्त और पवित्र हो गई थीं।'
      },
      meaning: {
        en: 'Rama liberates Ahalya from her curse by touching her with his feet.',
        hi: 'राम अपने चरण स्पर्श से अहल्या को शाप से मुक्त करते हैं।'
      }
    },
    {
      id: 'ram-1-67-1',
      sarga: 67,
      verse: 1,
      sanskrit: 'ततः प्रभाते विमले कृतकर्मा नराधिपः ।\nविश्वामित्रं महात्मानं आजुहाव सराघवम् ॥',
      transliteration: 'tatah prabhaate vimale kritakarmaa naraadhipah | vishvaamitram mahaatmaanam aajuhaava saraaghavam ||',
      translations: {
        en: 'Then at the pure dawn, after completing his duties, the king invited the great soul Vishwamitra along with Rama.',
        hi: 'फिर निर्मल प्रभात में, अपने कर्तव्यों को पूरा करके, राजा ने महात्मा विश्वामित्र को राम सहित आमंत्रित किया।'
      },
      meaning: {
        en: 'King Janaka invites Vishwamitra and Rama to the bow-ceremony.',
        hi: 'राजा जनक विश्वामित्र और राम को धनुष-यज्ञ के लिए आमंत्रित करते हैं।'
      }
    },
    {
      id: 'ram-1-67-12',
      sarga: 67,
      verse: 12,
      sanskrit: 'स तच्छापं महच्चापं राघवः परिगृह्य च ।\nआरोपयत्सहस्राक्षस्त्वष्ट्रेव विजयं धनुः ॥',
      transliteration: 'sa tachchhaapam mahachchhaapam raaghavah parigrhya cha | aaropayat-sahasraakshas-tvashtreva vijayam dhanuh ||',
      translations: {
        en: 'That Rama, holding that great bow, strung it like the thousand-eyed Indra stringing Vijaya bow made by Tvashta.',
        hi: 'उस राम ने उस महान धनुष को पकड़कर, ऐसे चढ़ाया जैसे सहस्राक्ष इंद्र त्वष्टा निर्मित विजय धनुष चढ़ाते हैं।'
      },
      meaning: {
        en: 'Rama strings the mighty bow of Shiva with ease.',
        hi: 'राम शिव के महान धनुष को सहज ही चढ़ाते हैं।'
      }
    },
    {
      id: 'ram-1-67-13',
      sarga: 67,
      verse: 13,
      sanskrit: 'आरोप्य च धनुः श्रेष्ठं पूरयामास वीर्यवान् ।\nतन्मध्ये भज्यत तदा वज्रपातनिस्वनम् ॥',
      transliteration: 'aaropya cha dhanuh shrestham poorayaamaasa veeryavaan | tan-madhye bhajyata tadaa vajra-paata-nisvanam ||',
      translations: {
        en: 'Having strung that excellent bow, the valiant one drew it fully. It broke in the middle with a sound like thunderbolt.',
        hi: 'उस श्रेष्ठ धनुष को चढ़ाकर, वीर्यवान ने पूर्णतः खींचा। वह बीच में वज्रपात जैसी ध्वनि के साथ टूट गया।'
      },
      meaning: {
        en: 'Rama breaks the bow of Shiva, winning the hand of Sita.',
        hi: 'राम शिव का धनुष तोड़ते हैं, सीता का हाथ जीतते हैं।'
      }
    }
  ],
  2: [
    {
      id: 'ram-2-1-1',
      sarga: 1,
      verse: 1,
      sanskrit: 'गच्छता मातुलकुलं भरतेन तदा अनघ ।\nशत्रुघ्नः कैकयीपुत्रः नीतो प्रीतिपुरस्कृतः ॥',
      transliteration: 'gachchhataa maatula-kulam bharatena tadaa anagha | shatrughnah kaikeyee-putrah neeto preeti-puraskritah ||',
      translations: {
        en: 'At that time, O sinless one, when Bharata went to his maternal uncle house, Shatrughna, son of Kaikeyi, was taken along with affection.',
        hi: 'उस समय, हे निष्पाप, जब भरत अपने मामा के घर गए, कैकेयी पुत्र शत्रुघ्न स्नेह सहित साथ ले जाए गए।'
      },
      meaning: {
        en: 'Sets the scene - Bharata and Shatrughna are away at their maternal grandfather.',
        hi: 'दृश्य स्थापित करता है - भरत और शत्रुघ्न अपने नाना के यहाँ हैं।'
      }
    },
    {
      id: 'ram-2-2-1',
      sarga: 2,
      verse: 1,
      sanskrit: 'स तत्रोपविशत्प्रीतो रामः सौमित्रिणा सह ।\nपूज्यमानः सुखं तत्र न्यवसत्तां च शर्वरीम् ॥',
      transliteration: 'sa tatropavishat-preeto raamah saumitrinaa saha | poojyamaanah sukham tatra nyavasat-taam cha sharvareem ||',
      translations: {
        en: 'Rama sat there happily with Lakshmana. Being honored, he spent that night comfortably there.',
        hi: 'राम वहाँ लक्ष्मण के साथ प्रसन्नतापूर्वक बैठे। सम्मानित होकर, उन्होंने वह रात वहाँ सुख से बिताई।'
      },
      meaning: {
        en: 'Rama and Lakshmana prepare for what they believe will be Rama coronation.',
        hi: 'राम और लक्ष्मण उसकी तैयारी करते हैं जो उनके विचार में राम का राज्याभिषेक होगा।'
      }
    },
    {
      id: 'ram-2-12-1',
      sarga: 12,
      verse: 1,
      sanskrit: 'तां तथा रुदतीं दृष्ट्वा कैकेयीं शोककर्शिताम् ।\nउवाच राजा संभ्रान्तो मन्थरायाश्च शंशयम् ॥',
      transliteration: 'taam tathaa rudateem dristvaa kaikeyeem shoka-karshitaam | uvaacha raajaa sambhraanto mantharaayaashcha shamshayam ||',
      translations: {
        en: 'Seeing Kaikeyi weeping thus, emaciated by grief, the confused king spoke, suspicious of Manthara.',
        hi: 'कैकेयी को इस प्रकार रोती, शोक से कृश देखकर, भ्रमित राजा ने मंथरा पर संदेह करते हुए कहा।'
      },
      meaning: {
        en: 'King Dasharatha finds Kaikeyi in the anger chamber, beginning the tragic turn.',
        hi: 'राजा दशरथ कैकेयी को क्रोध कक्ष में पाते हैं, त्रासदी का आरंभ।'
      }
    },
    {
      id: 'ram-2-16-1',
      sarga: 16,
      verse: 1,
      sanskrit: 'तां तथा शोकसंतप्तां निर्णिक्तामिव कुण्डलाम् ।\nउवाच रामो धर्मात्मा स्वयमादाय पादुके ॥',
      transliteration: 'taam tathaa shoka-samtaptaam nirniktaam-iva kundalam | uvaacha raamo dharmaatmaa svayam-aadaaya paaduke ||',
      translations: {
        en: 'Seeing her thus burning with grief, like an earring without luster, the righteous Rama spoke, himself taking the sandals.',
        hi: 'उन्हें इस प्रकार शोक से जलती, तेजहीन कुंडल जैसी देखकर, धर्मात्मा राम ने स्वयं पादुकाएँ लेकर कहा।'
      },
      meaning: {
        en: 'Rama consoles Kaushalya and prepares for exile.',
        hi: 'राम कौशल्या को सांत्वना देते हैं और वनवास की तैयारी करते हैं।'
      }
    },
    {
      id: 'ram-2-31-1',
      sarga: 31,
      verse: 1,
      sanskrit: 'एवमुक्तस्तु रामेण लक्ष्मणः परवीरहा ।\nप्रहृष्टवदनो भूत्वा राघवं प्रत्यभाषत ॥',
      transliteration: 'evam-uktastu raamena laksmanah paraveerahaa | prahrishtavadano bhootvaa raaghavam pratyabhaashata ||',
      translations: {
        en: 'Thus addressed by Rama, Lakshmana, slayer of enemy heroes, with a delighted face, replied to Rama.',
        hi: 'राम द्वारा इस प्रकार संबोधित, शत्रु वीरों के नाशक लक्ष्मण ने प्रसन्न मुख से राम को उत्तर दिया।'
      },
      meaning: {
        en: 'Lakshmana expresses his determination to accompany Rama to the forest.',
        hi: 'लक्ष्मण राम के साथ वन जाने का अपना संकल्प व्यक्त करते हैं।'
      }
    },
    {
      id: 'ram-2-40-1',
      sarga: 40,
      verse: 1,
      sanskrit: 'ततस्तां रात्रिमुषित्वा गङ्गातीरे स राघवः ।\nप्रभातायां रजन्यां तु प्रातः सन्ध्यामुपस्य वै ॥',
      transliteration: 'tatas-taam raatrim-ushitvaa gangaateere sa raaghavah | prabhaataayaam rajanyaam tu praatah sandhyaam-upasya vai ||',
      translations: {
        en: 'Having spent that night on the bank of Ganga, that Rama, when dawn broke, performed the morning prayers.',
        hi: 'गंगा तट पर वह रात बिताकर, जब प्रभात हुआ, राघव ने प्रातः संध्या की।'
      },
      meaning: {
        en: 'Rama, Sita and Lakshmana begin their forest exile.',
        hi: 'राम, सीता और लक्ष्मण अपना वनवास प्रारंभ करते हैं।'
      }
    },
    {
      id: 'ram-2-112-1',
      sarga: 112,
      verse: 1,
      sanskrit: 'ततो रामं भरद्वाजः प्राप्तं शुश्राव मारुतात् ।\nतस्मै सत्कृत्य मेधावी प्रीतः प्रादाद्वरासनम् ॥',
      transliteration: 'tato raamam bharadvaajah praaptam shushraava maarutaat | tasmai satkritya medhaavee preetah praadaad-varaasanam ||',
      translations: {
        en: 'Then Bharadwaja heard from the wind that Rama had arrived. The wise sage, honoring him, pleased, offered an excellent seat.',
        hi: 'फिर भारद्वाज ने वायु से सुना कि राम आ गए। बुद्धिमान ऋषि ने उनका सत्कार कर प्रसन्नतापूर्वक उत्तम आसन दिया।'
      },
      meaning: {
        en: 'Bharata goes to meet Rama and request him to return.',
        hi: 'भरत राम से मिलने और लौटने का अनुरोध करने जाते हैं।'
      }
    },
    {
      id: 'ram-2-112-25',
      sarga: 112,
      verse: 25,
      sanskrit: 'राजपादौ गृहीत्वा तु भरतः शोककर्शितः ।\nनिषसाद तदा तत्र रामं दृष्ट्वा महाव्रतम् ॥',
      transliteration: 'raaja-paadau griheetvaa tu bharatah shoka-karshitah | nishasaada tadaa tatra raamam drishtvaa mahaa-vratam ||',
      translations: {
        en: 'Taking hold of Rama feet, Bharata, emaciated by grief, sat there, seeing Rama of great vows.',
        hi: 'राम के चरण पकड़कर, शोक से कृश भरत वहाँ बैठे, महाव्रती राम को देखकर।'
      },
      meaning: {
        en: 'Bharata falls at Rama feet, begging him to return.',
        hi: 'भरत राम के चरणों में गिरते हैं, उनसे लौटने की प्रार्थना करते हैं।'
      }
    }
  ],
  3: [
    {
      id: 'ram-3-1-1',
      sarga: 1,
      verse: 1,
      sanskrit: 'प्रविश्य तु महारण्यं रामो राजीवलोचनः ।\nविराधं राक्षसं हत्वा दण्डकां प्रविवेश ह ॥',
      transliteration: 'pravishya tu mahaaranyam raamo raajeeva-lochanah | viraadham raakshasam hatvaa dandakaam pravivesha ha ||',
      translations: {
        en: 'Entering the great forest, lotus-eyed Rama, having killed the demon Viradha, entered the Dandaka forest.',
        hi: 'महान वन में प्रवेश कर, कमल नेत्र राम ने राक्षस विराध को मारकर दण्डक वन में प्रवेश किया।'
      },
      meaning: {
        en: 'Beginning of forest life, Rama defeats Viradha.',
        hi: 'वन जीवन का आरंभ, राम विराध को पराजित करते हैं।'
      }
    },
    {
      id: 'ram-3-17-1',
      sarga: 17,
      verse: 1,
      sanskrit: 'तौ तत्रोपविशद्वीरौ सीता चैव यशस्विनी ।\nस्थलीमुत्पलपद्माढ्यां गोदावर्याश्च संनिधौ ॥',
      transliteration: 'tau tatropavishat-veerau seetaa chaiva yashasvinee | sthaleem-utpala-padmaaDhyaam godaavaryaashcha sannidhau ||',
      translations: {
        en: 'Those two heroes and the illustrious Sita sat there on the bank full of lotuses and water lilies, near the Godavari.',
        hi: 'वे दोनों वीर और यशस्विनी सीता वहाँ कमल और उत्पल से भरे तट पर, गोदावरी के निकट बैठे।'
      },
      meaning: {
        en: 'Rama, Sita and Lakshmana settle in Panchavati.',
        hi: 'राम, सीता और लक्ष्मण पंचवटी में बसते हैं।'
      }
    },
    {
      id: 'ram-3-18-1',
      sarga: 18,
      verse: 1,
      sanskrit: 'तस्मिंस्तत्रोषितः कालं कंचिद्रामः ससीतकः ।\nलक्ष्मणेन सह भ्रात्रा सुखमासेदरिंदमः ॥',
      transliteration: 'tasmins-tatroshitah kaalam kanchid-raamah saseetakah | laksmanena saha bhraatraa sukham-aased-arindamah ||',
      translations: {
        en: 'There, Rama with Sita, enemy-destroyer, lived happily for some time with his brother Lakshmana.',
        hi: 'वहाँ, सीता सहित राम, शत्रुनाशक, कुछ समय अपने भाई लक्ष्मण के साथ सुखपूर्वक रहे।'
      },
      meaning: {
        en: 'Peaceful life at Panchavati before Shurpanakha arrives.',
        hi: 'शूर्पणखा के आगमन से पहले पंचवटी में शांतिपूर्ण जीवन।'
      }
    },
    {
      id: 'ram-3-19-1',
      sarga: 19,
      verse: 1,
      sanskrit: 'तस्मिन्नेवाश्रमे रामो वसन्राज्ञां हितः सताम् ।\nऋषीणां पूजितो नित्यं पूजयंश्च मनस्विनः ॥',
      transliteration: 'tasminn-evaashrame raamo vasan-raajnaam hitah sataam | risheenaam poojito nityam poojayamshcha manasvinah ||',
      translations: {
        en: 'Living in that ashram, Rama, benefactor of righteous kings, was daily honored by sages and honored the wise ones.',
        hi: 'उस आश्रम में रहते, राम, सत्राजाओं के हितकारी, प्रतिदिन ऋषियों द्वारा पूजित और विद्वानों को पूजते थे।'
      },
      meaning: {
        en: 'Rama life among the sages in the forest.',
        hi: 'वन में ऋषियों के बीच राम का जीवन।'
      }
    },
    {
      id: 'ram-3-43-1',
      sarga: 43,
      verse: 1,
      sanskrit: 'तं दृष्ट्वा राघवो मायामयं मृगमनुत्तमम् ।\nसीतायाः प्रियमन्वैषी जगाम पवनात्मजः ॥',
      transliteration: 'tam drishtva raaghavo maayaamayam mrigam-anuttamam | seetaayaah priyam-anvaishee jagaama pavanaatmajah ||',
      translations: {
        en: 'Seeing that illusory deer most excellent, seeking Sita pleasure, Rama went after it.',
        hi: 'उस अत्युत्तम मायामय मृग को देखकर, सीता की प्रसन्नता चाहते, राम उसके पीछे गए।'
      },
      meaning: {
        en: 'Rama goes after the golden deer - Maricha in disguise.',
        hi: 'राम स्वर्ण मृग के पीछे जाते हैं - छद्मवेशी मारीच।'
      }
    },
    {
      id: 'ram-3-49-1',
      sarga: 49,
      verse: 1,
      sanskrit: 'ततो रावणमुत्पत्य सीतां कृत्वा स्वमङ्गके ।\nप्रययौ नभसा शीघ्रं मेघवन्मारुतो यथा ॥',
      transliteration: 'tato raavanam-utpatya seetaam kritvaa svamangake | prayayau nabhasaa sheeghram meghavan-maaruto yathaa ||',
      translations: {
        en: 'Then Ravana flew up, placing Sita on his lap, and went swiftly through the sky like the wind with a cloud.',
        hi: 'फिर रावण उड़ा, सीता को अपनी गोद में रखकर, और बादल वाले वायु की तरह तेज़ी से आकाश में गया।'
      },
      meaning: {
        en: 'Ravana abducts Sita.',
        hi: 'रावण सीता का अपहरण करता है।'
      }
    },
    {
      id: 'ram-3-50-1',
      sarga: 50,
      verse: 1,
      sanskrit: 'जटायुस्तु ततो दृष्ट्वा सीतां रावणमोहिताम् ।\nह्रियमाणां पुरीं लङ्कां राक्षसेन्द्रेण रक्षसा ॥',
      transliteration: 'jataayus-tu tato dristvaa seetaam raavana-mohitaam | hriyamaanaam pureem lankaam raakshasena-drena rakshasaa ||',
      translations: {
        en: 'Then Jatayu, seeing Sita deluded by Ravana, being carried to Lanka city by the king of demons.',
        hi: 'फिर जटायु ने देखा, रावण द्वारा मोहित सीता को, राक्षसों के राजा द्वारा लंका नगरी ले जाई जाती।'
      },
      meaning: {
        en: 'Jatayu sees Ravana carrying Sita.',
        hi: 'जटायु रावण को सीता ले जाते देखता है।'
      }
    },
    {
      id: 'ram-3-68-1',
      sarga: 68,
      verse: 1,
      sanskrit: 'स तु तीव्रेण शोकेन परीतो राघवः तदा ।\nविललाप महातेजा मूर्च्छितः पुनरुत्थितः ॥',
      transliteration: 'sa tu teevrena shokena pareeto raaghavah tadaa | vilaapa mahaatejaa moorchchhitah punar-utthitah ||',
      translations: {
        en: 'Then Rama, overwhelmed by intense grief, greatly radiant, lamented, having fainted and risen again.',
        hi: 'फिर राम, तीव्र शोक से व्याकुल, महातेजस्वी, मूर्छित होकर फिर उठकर विलाप किए।'
      },
      meaning: {
        en: 'Rama grief upon finding Sita missing.',
        hi: 'सीता को न पाकर राम का शोक।'
      }
    }
  ],
  4: [
    {
      id: 'ram-4-1-1',
      sarga: 1,
      verse: 1,
      sanskrit: 'स तेन मृगरूपेण मार्गमाणो महावनम् ।\nपम्पातीरमनुप्राप्य सुग्रीवसहचारिणम् ॥',
      transliteration: 'sa tena mrigaroopena maargamaano mahaa-vanam | pampaateeram-anupraapty sugreeva-sahacharanam ||',
      translations: {
        en: 'He, searching the great forest for that one in deer form, reached the shore of Pampa, companion of Sugriva.',
        hi: 'वे, उस मृग रूपी को महावन में खोजते, पम्पा तट पर पहुँचे, सुग्रीव के साथी।'
      },
      meaning: {
        en: 'Rama reaches the region where Sugriva lives.',
        hi: 'राम उस क्षेत्र में पहुँचते हैं जहाँ सुग्रीव रहते हैं।'
      }
    },
    {
      id: 'ram-4-3-1',
      sarga: 3,
      verse: 1,
      sanskrit: 'हनुमान्वानरश्रेष्ठः पर्वतादृष्यमूकतः ।\nतयोः समीपमागम्य प्राञ्जलिर्वाक्यमब्रवीत् ॥',
      transliteration: 'hanumaan-vaanara-shrestah parvataad-rishyamookatah | tayoh sameepam-aagamya praanjalir-vaakyam-abraveet ||',
      translations: {
        en: 'Hanuman, best of monkeys, from Rishyamuka mountain, coming near those two, with folded hands spoke these words.',
        hi: 'वानरों में श्रेष्ठ हनुमान, ऋष्यमूक पर्वत से, उन दोनों के निकट आकर, हाथ जोड़कर बोले।'
      },
      meaning: {
        en: 'First meeting of Hanuman with Rama and Lakshmana.',
        hi: 'हनुमान की राम और लक्ष्मण से पहली भेंट।'
      }
    },
    {
      id: 'ram-4-4-1',
      sarga: 4,
      verse: 1,
      sanskrit: 'स तयोर्वचनं श्रुत्वा हनूमान्मारुतात्मजः ।\nप्रत्युवाच ततो वाक्यं प्रीतिप्रतिपुरस्कृतम् ॥',
      transliteration: 'sa tayorvachanam shrutvaa hanoomaan-maarutaatmajah | pratyuvaacha tato vaakyam preeti-pratipuraskritam ||',
      translations: {
        en: 'Hanuman, son of the Wind, hearing their words, then replied with words full of affection.',
        hi: 'वायुपुत्र हनुमान, उनके वचन सुनकर, फिर स्नेहपूर्ण वचनों से उत्तर दिए।'
      },
      meaning: {
        en: 'Hanuman responds to Rama with devotion.',
        hi: 'हनुमान भक्ति से राम को उत्तर देते हैं।'
      }
    },
    {
      id: 'ram-4-5-1',
      sarga: 5,
      verse: 1,
      sanskrit: 'स तु वालिवधं श्रुत्वा सुग्रीवो वानराधिपः ।\nप्रहृष्टवदनो भूत्वा रामं वचनमब्रवीत् ॥',
      transliteration: 'sa tu vaali-vadham shrutvaa sugreevo vaanara-adhipah | prahrishta-vadano bhootvaa raamam vachanam-abraveet ||',
      translations: {
        en: 'Sugriva, lord of monkeys, hearing of Vali death, with a joyful face, spoke these words to Rama.',
        hi: 'वानरों के अधिपति सुग्रीव, वालि वध सुनकर, प्रसन्न मुख से राम को बोले।'
      },
      meaning: {
        en: 'Sugriva alliance with Rama after Vali death.',
        hi: 'वालि वध के बाद सुग्रीव का राम से मित्रता।'
      }
    },
    {
      id: 'ram-4-28-1',
      sarga: 28,
      verse: 1,
      sanskrit: 'ततः प्लवगशार्दूला दिक्षु सर्वासु सत्वराः ।\nययुर्दिव्याम्बरधराः सीतायाः परिमार्गणे ॥',
      transliteration: 'tatah plavaga-shaarDoolaa dikshu sarvaasu satvaraah | yayur-divyaambara-dharaah seetaayaah parimaargane ||',
      translations: {
        en: 'Then the tiger-like monkeys, wearing divine garments, went quickly in all directions to search for Sita.',
        hi: 'फिर व्याघ्र-समान वानर, दिव्य वस्त्र धारण कर, सभी दिशाओं में सीता की खोज में तेज़ी से गए।'
      },
      meaning: {
        en: 'The great search for Sita begins.',
        hi: 'सीता की महान खोज प्रारंभ होती है।'
      }
    },
    {
      id: 'ram-4-40-1',
      sarga: 40,
      verse: 1,
      sanskrit: 'ततः समुद्रं सम्प्राप्य सागरं वरुणालयम् ।\nअपारं पारसंक्रान्ता हनुमान्मारुतात्मजः ॥',
      transliteration: 'tatah samudram sampraapya saagaram varunaalayam | apaaram paara-sankraantaa hanumaan-maarutaatmajah ||',
      translations: {
        en: 'Then reaching the sea, the ocean, abode of Varuna, boundless, Hanuman son of Wind crossed to the other shore.',
        hi: 'फिर समुद्र पहुँचकर, वरुण के निवास सागर, अपार को पार कर, वायुपुत्र हनुमान दूसरे तट पहुँचे।'
      },
      meaning: {
        en: 'Hanuman prepares to leap across the ocean.',
        hi: 'हनुमान समुद्र पार करने की तैयारी करते हैं।'
      }
    }
  ],
  5: [
    {
      id: 'ram-5-1-1',
      sarga: 1,
      verse: 1,
      sanskrit: 'ततो रावणनीतायाः सीतायाः शत्रुकर्शनः ।\nइयेष पदमन्वेष्टुं चारणाचरिते पथि ॥',
      transliteration: 'tato raavana-neetaayaah seetaayaah shatru-karshanah | iyesha padam-anveshum chaarana-aacharite pathi ||',
      translations: {
        en: 'Then Hanuman, the destroyer of enemies, wished to search for the whereabouts of Sita who was carried away by Ravana, on the path traversed by celestial beings.',
        hi: 'तब शत्रुओं को कष्ट देने वाले हनुमान ने रावण द्वारा हरी गई सीता का पता लगाने के लिए आकाश मार्ग से जाने की इच्छा की।'
      },
      meaning: {
        en: 'This verse begins the Sundara Kanda, describing Hanuman determination to find Sita.',
        hi: 'यह श्लोक सुंदरकांड का प्रारंभ करता है, जो हनुमान के सीता को खोजने के संकल्प का वर्णन करता है।'
      }
    },
    {
      id: 'ram-5-1-2',
      sarga: 1,
      verse: 2,
      sanskrit: 'अतिक्रम्य सुतां तारां उदयादृषभो यथा ।\nसत्त्ववाञ्जवनाकाशं पपात जवनः कपिः ॥',
      transliteration: 'atikramya sutaam taaraam udayaad-rishabho yathaa | sattvavaan-javana-aakaasham papaata javanah kapih ||',
      translations: {
        en: 'Like the sun rising over the daughter of the star (the horizon), the powerful and swift monkey leaped into the sky.',
        hi: 'जैसे सूर्य तारों की पुत्री (क्षितिज) के ऊपर उदय होता है, वैसे ही बलवान और तेज कपि आकाश में उछले।'
      },
      meaning: {
        en: 'Hanuman begins his legendary leap across the ocean to Lanka.',
        hi: 'हनुमान ने लंका की ओर समुद्र पार करने की अपनी प्रसिद्ध छलांग शुरू की।'
      }
    },
    {
      id: 'ram-5-1-41',
      sarga: 1,
      verse: 41,
      sanskrit: 'स सागरमनाधृष्यमभ्येत्य वरुणालयम् ।\nजगाम विगतोद्वेगो महेन्द्राचलसंनिभः ॥',
      transliteration: 'sa saagaram-anaadhrishyam-abhyetya varunaalayam | jagaama vigata-udvego mahendraachala-sannibhah ||',
      translations: {
        en: 'He, approaching the unconquerable ocean, the abode of Varuna, went without fear, like Mount Mahendra.',
        hi: 'वे, अजेय समुद्र, वरुण के निवास के पास आकर, निर्भय गए, महेंद्र पर्वत के समान।'
      },
      meaning: {
        en: 'Hanuman leaps fearlessly like a mountain.',
        hi: 'हनुमान पर्वत की भाँति निर्भय छलांग लगाते हैं।'
      }
    },
    {
      id: 'ram-5-1-126',
      sarga: 1,
      verse: 126,
      sanskrit: 'स तस्य मध्ये नगरस्य तस्य विभज्य योगेन गृहं कुबेरस्य ।\nददर्श सीतां शोकपरायणां तां पद्मीं महत्यां विगतप्रभेव ॥',
      transliteration: 'sa tasya madhye nagarasya tasya vibhajya yogena griham kuberasya | dadarsha seetaam shoka-paraayanaam taam padmeem mahatyaam vigata-prabheva ||',
      translations: {
        en: 'In the middle of that city, dividing it by his powers, he saw Sita, devoted to grief, like a great lotus without radiance.',
        hi: 'उस नगर के मध्य में, अपनी शक्ति से विभाजित करते हुए, उन्होंने शोकमग्न सीता को देखा, जैसे तेजहीन महान कमल।'
      },
      meaning: {
        en: 'Hanuman finally finds Sita in Lanka.',
        hi: 'हनुमान अंततः लंका में सीता को पाते हैं।'
      }
    },
    {
      id: 'ram-5-15-1',
      sarga: 15,
      verse: 1,
      sanskrit: 'तां समीक्ष्य विशालाक्षीं राजपुत्रीं यशस्विनीम् ।\nतर्कयामास सीतेति कारणैरुपपादितैः ॥',
      transliteration: 'taam sameekshya vishalaaksheem raaja-putreem yashasvineem | tarkayaamaasa seeteti kaaranaih-upapaaditaih ||',
      translations: {
        en: 'Seeing that large-eyed, illustrious princess, he reasoned that she was Sita, based on various proofs.',
        hi: 'उस विशाल नेत्र, यशस्विनी राजकुमारी को देखकर, उन्होंने विभिन्न प्रमाणों से तर्क किया कि वे सीता हैं।'
      },
      meaning: {
        en: 'Hanuman confirms Sita identity.',
        hi: 'हनुमान सीता की पहचान की पुष्टि करते हैं।'
      }
    },
    {
      id: 'ram-5-35-1',
      sarga: 35,
      verse: 1,
      sanskrit: 'भयात्कमलपत्राक्षी विकृष्टा जनकात्मजा ।\nउवाच रोदमाना सा वाचं करुणविक्लवाम् ॥',
      transliteration: 'bhayaat-kamala-patraakshee vikrishta janaka-atmajaa | uvaacha rodamaanaa saa vaacham karuna-viklavaam ||',
      translations: {
        en: 'The lotus-eyed daughter of Janaka, distressed with fear, weeping, spoke words filled with anguish.',
        hi: 'कमल नेत्री जनक नंदिनी भय से व्याकुल, रोती हुई, करुणा भरे वचन बोलीं।'
      },
      meaning: {
        en: 'This describes Sita emotional state when Hanuman finds her in Ashoka Vatika.',
        hi: 'यह अशोक वाटिका में हनुमान द्वारा मिलने पर सीता की भावनात्मक स्थिति का वर्णन करता है।'
      }
    },
    {
      id: 'ram-5-36-1',
      sarga: 36,
      verse: 1,
      sanskrit: 'इत्येवं कपिशार्दूलो वाक्यं सान्त्वपुरस्कृतम् ।\nसीतायै कथयामास सीता च प्रत्यभाषत ॥',
      transliteration: 'ityevam kapi-sharDoolo vaakyam saantva-puraskritam | seetaayai kathayaamaasa seetaa cha pratyabhashata ||',
      translations: {
        en: 'Thus the tiger among monkeys spoke soothing words to Sita, and Sita replied.',
        hi: 'इस प्रकार वानरों में व्याघ्र ने सीता को सांत्वना के वचन कहे, और सीता ने उत्तर दिया।'
      },
      meaning: {
        en: 'Hanuman consoles Sita with news of Rama.',
        hi: 'हनुमान सीता को राम के समाचार से सांत्वना देते हैं।'
      }
    },
    {
      id: 'ram-5-54-1',
      sarga: 54,
      verse: 1,
      sanskrit: 'स वायुसूनुः प्रतिपूर्णमानसः प्रदीपयामास महोदयं पुरम् ।\nसमं समंताच्च विधूमरश्मिभिः ज्वलद्भिरार्चिर्भिरुपान्तमन्दिरैः ॥',
      transliteration: 'sa vaayu-soonuh pratipoornamaanasah pradeepayaamaasa mahodayam puram | samam samantaach-cha vidhoom-rashmibhih jvaladhhir-aarchir-bhir-upaanta-mandiraih ||',
      translations: {
        en: 'The son of Wind, with fulfilled heart, set fire to the great city of Lanka, uniformly all around, with smokeless flames, burning the outer mansions.',
        hi: 'पूर्ण मनोरथ वायुपुत्र ने महान लंका नगरी को आग लगाई, सब ओर समान रूप से, धुएँ रहित ज्वालाओं से, बाहरी महलों को जलाते हुए।'
      },
      meaning: {
        en: 'Hanuman burns Lanka (Lanka Dahan).',
        hi: 'हनुमान लंका जलाते हैं (लंका दहन)।'
      }
    },
    {
      id: 'ram-5-58-1',
      sarga: 58,
      verse: 1,
      sanskrit: 'कपिर्महात्मा हृष्टो दृष्टा वैदेहीम् ।\nभक्षितोद्यानवृक्षश्च हत्वा राक्षसपुंगवान् ॥',
      transliteration: 'kapir-mahaatmaa hrishto drishtaa vaideheem | bhakshitodyaana-vrikshashcha hatvaa raakshasa-pungavaan ||',
      translations: {
        en: 'The great-souled monkey, delighted having seen Vaidehi, having destroyed the garden trees, having killed the demon chiefs.',
        hi: 'महात्मा वानर, वैदेही को देखकर प्रसन्न, उद्यान के वृक्षों को नष्ट करके, राक्षस प्रमुखों को मारकर।'
      },
      meaning: {
        en: 'Hanuman triumphant return after fulfilling his mission.',
        hi: 'अपने मिशन को पूरा करके हनुमान की विजयी वापसी।'
      }
    },
    {
      id: 'ram-5-66-1',
      sarga: 66,
      verse: 1,
      sanskrit: 'दृष्ट्वा सीतां सर्वलक्षणसम्पन्नां वैदेहीं जनकात्मजाम् ।\nप्रत्याश्वास्य च तां देवीं प्रणम्य च पुनः पुनः ॥',
      transliteration: 'dristvaa seetaam sarva-lakshana-sampannaam vaideheem janakaatmajaam | pratyaashvaasya cha taam deveem pranamya cha punah punah ||',
      translations: {
        en: 'Having seen Sita, the daughter of Janaka, Vaidehi, endowed with all auspicious marks, having consoled that goddess, bowing again and again.',
        hi: 'सभी शुभ लक्षणों से युक्त जनक पुत्री वैदेही सीता को देखकर, उस देवी को सांत्वना देकर, बार-बार प्रणाम करके।'
      },
      meaning: {
        en: 'Hanuman bids farewell to Sita.',
        hi: 'हनुमान सीता से विदा लेते हैं।'
      }
    }
  ],
  6: [
    {
      id: 'ram-6-1-1',
      sarga: 1,
      verse: 1,
      sanskrit: 'ततः कृत्वा वानराः कल्याणं कर्म तत्र ते ।\nआगम्य ससुग्रीवाः समीपं राघवस्य ते ॥',
      transliteration: 'tatah kritvaa vaanarraah kalyaanam karma tatra te | aagamya sasugreevaah sameepam raaghavasya te ||',
      translations: {
        en: 'Then those monkeys, having accomplished that auspicious task, came with Sugriva to the presence of Rama.',
        hi: 'फिर वे वानर, उस शुभ कार्य को पूर्ण करके, सुग्रीव सहित राम के समीप आए।'
      },
      meaning: {
        en: 'The monkeys return to Rama with news of Sita.',
        hi: 'वानर सीता के समाचार के साथ राम के पास लौटते हैं।'
      }
    },
    {
      id: 'ram-6-4-1',
      sarga: 4,
      verse: 1,
      sanskrit: 'स तु रामोपदेशेन सागरं प्रत्यवैक्षत ।\nध्यात्वा मुहूर्तं वानराणां सेनां विसर्जयन् ॥',
      transliteration: 'sa tu raamaa-upadeshena saagaram pratyavaikshata | dhyaatvaa muhurtam vaanarraanaam senaam visarjayan ||',
      translations: {
        en: 'He, by Rama instruction, looked at the sea, meditating for a moment, releasing the army of monkeys.',
        hi: 'वे, राम के उपदेश से, समुद्र को देखते, क्षण भर ध्यान करते, वानर सेना को भेजते।'
      },
      meaning: {
        en: 'Preparations begin to cross the ocean.',
        hi: 'समुद्र पार करने की तैयारियाँ शुरू होती हैं।'
      }
    },
    {
      id: 'ram-6-22-1',
      sarga: 22,
      verse: 1,
      sanskrit: 'ततस्ते वानराः सर्वे सेतुबन्धनतत्पराः ।\nबभूवुर्विगतोद्वेगा राघवस्य मते स्थिताः ॥',
      transliteration: 'tataste vaanarraah sarve setu-bandhana-tatparaah | babhoovur-vigata-udvegaa raaghavasya mate sthitaah ||',
      translations: {
        en: 'Then all those monkeys, devoted to building the bridge, became free from anxiety, staying in Rama counsel.',
        hi: 'फिर वे सभी वानर, सेतु बनाने में तत्पर, चिंतामुक्त हो गए, राम की सलाह में स्थित।'
      },
      meaning: {
        en: 'The monkeys build Ram Setu.',
        hi: 'वानर रामसेतु का निर्माण करते हैं।'
      }
    },
    {
      id: 'ram-6-59-1',
      sarga: 59,
      verse: 1,
      sanskrit: 'ततः कुम्भकर्णं च जाग्रतं भीमविक्रमम् ।\nआगम्य रावणो वाक्यमब्रवीत्प्रियवादिनम् ॥',
      transliteration: 'tatah kumbhakarnam cha jaagratam bheema-vikramam | aagamya raavano vaakyam-abraveet-priya-vaadinam ||',
      translations: {
        en: 'Then Ravana, coming to the awake Kumbhakarna of terrible prowess, spoke pleasing words.',
        hi: 'फिर रावण, जागे हुए भयंकर पराक्रमी कुम्भकर्ण के पास आकर, प्रिय वचन बोला।'
      },
      meaning: {
        en: 'Ravana wakes Kumbhakarna for battle.',
        hi: 'रावण कुम्भकर्ण को युद्ध के लिए जगाता है।'
      }
    },
    {
      id: 'ram-6-90-1',
      sarga: 90,
      verse: 1,
      sanskrit: 'ततो रामः प्रहृष्टात्मा रावणं निहतं रणे ।\nलक्ष्मणेन सह भ्रात्रा विभीषणमुपाह्वयत् ॥',
      transliteration: 'tato raamah prahrishta-aatmaa raavanam nihatam rane | lakshmanena saha bhraatraa vibheeshanam-upaahvayat ||',
      translations: {
        en: 'Then Rama, with joyful heart, seeing Ravana slain in battle, with his brother Lakshmana, called Vibhishana.',
        hi: 'फिर राम, प्रसन्न हृदय से, युद्ध में मारे गए रावण को देखकर, भाई लक्ष्मण सहित, विभीषण को बुलाए।'
      },
      meaning: {
        en: 'Ravana is killed; Rama calls Vibhishana.',
        hi: 'रावण वध; राम विभीषण को बुलाते हैं।'
      }
    },
    {
      id: 'ram-6-111-1',
      sarga: 111,
      verse: 1,
      sanskrit: 'ततो रामः सुसंहृष्टः पूजितः सर्वराक्षसैः ।\nविभीषणमभिप्रेक्ष्य लक्ष्मणं च महाबलम् ॥',
      transliteration: 'tato raamah susam-hrishtah poojitah sarva-raakshasaih | vibheeshanam-abhiprekshya lakshmanam cha mahaa-balam ||',
      translations: {
        en: 'Then Rama, greatly delighted, worshipped by all demons, looking at Vibhishana and mighty Lakshmana.',
        hi: 'फिर राम, अत्यंत प्रसन्न, सभी राक्षसों द्वारा पूजित, विभीषण और महाबली लक्ष्मण को देखते हुए।'
      },
      meaning: {
        en: 'Victory celebrations begin.',
        hi: 'विजय उत्सव प्रारंभ होता है।'
      }
    },
    {
      id: 'ram-6-115-1',
      sarga: 115,
      verse: 1,
      sanskrit: 'ततः पुष्पकमारूढो भ्रातृभ्यां सहितः प्रभुः ।\nवैदेह्या च महातेजा अयोध्यां प्रस्थितो बलात् ॥',
      transliteration: 'tatah pushpakam-aaruuDho bhraatribhyaam sahitah prabhuh | vaidehyaa cha mahaatejaa ayodhyaam prasthito balaat ||',
      translations: {
        en: 'Then the Lord, greatly radiant, mounting the Pushpaka, with his brothers and Vaidehi, set out for Ayodhya.',
        hi: 'फिर महातेजस्वी प्रभु, पुष्पक पर चढ़कर, अपने भाइयों और वैदेही सहित, अयोध्या की ओर चले।'
      },
      meaning: {
        en: 'Rama returns to Ayodhya in the Pushpaka Vimana.',
        hi: 'राम पुष्पक विमान में अयोध्या लौटते हैं।'
      }
    },
    {
      id: 'ram-6-128-1',
      sarga: 128,
      verse: 1,
      sanskrit: 'ततस्तस्मिन्महाकाले सर्वभूतहिते रतः ।\nराज्यं रामः समासाद्य पालयामास मेदिनीम् ॥',
      transliteration: 'tatastasmin-mahaakaale sarvabhoota-hite ratah | raajyam raamah samaasaadya paalayaamaasa medineem ||',
      translations: {
        en: 'Then at that auspicious time, devoted to the welfare of all beings, Rama, having obtained the kingdom, ruled the earth.',
        hi: 'फिर उस महान समय में, सभी प्राणियों के कल्याण में रत, राम ने राज्य प्राप्त कर पृथ्वी का पालन किया।'
      },
      meaning: {
        en: 'Rama begins his righteous rule.',
        hi: 'राम अपना धर्मपूर्ण राज्य प्रारंभ करते हैं।'
      }
    }
  ],
  7: [
    {
      id: 'ram-7-1-1',
      sarga: 1,
      verse: 1,
      sanskrit: 'ततः प्रभाते राजेन्द्रः स्नातश्चीरवृत्तितः ।\nवैदेहीसहितो रामो यज्ञं कर्तुं समुत्सुकः ॥',
      transliteration: 'tatah prabhaate raajendrah snaatash-cheera-vrittatah | vaidehee-sahito raamo yajnam kartum samutsukah ||',
      translations: {
        en: 'Then in the morning, the king of kings, having bathed according to the rules, Rama with Vaidehi, eager to perform the sacrifice.',
        hi: 'फिर प्रातः, राजाओं के राजा, नियमानुसार स्नान करके, राम वैदेही सहित, यज्ञ करने को उत्सुक।'
      },
      meaning: {
        en: 'Rama prepares for the Ashwamedha Yagna.',
        hi: 'राम अश्वमेध यज्ञ की तैयारी करते हैं।'
      }
    },
    {
      id: 'ram-7-45-1',
      sarga: 45,
      verse: 1,
      sanskrit: 'ततः काले गते तस्मिन्सीता गर्भवती भवत् ।\nरामो राज्यं समासाद्य प्रजाः पालयते सदा ॥',
      transliteration: 'tatah kaale gate tasmin-seetaa garbhavatee bhavat | raamo raajyam samaasaadya prajaah paalayate sadaa ||',
      translations: {
        en: 'Then as time passed, Sita became pregnant. Rama, having obtained the kingdom, always protected the subjects.',
        hi: 'फिर समय बीतने पर, सीता गर्भवती हुईं। राम ने राज्य प्राप्त कर प्रजा का सदा पालन किया।'
      },
      meaning: {
        en: 'Sita pregnancy and Rama righteous rule.',
        hi: 'सीता का गर्भ और राम का धर्मपूर्ण शासन।'
      }
    },
    {
      id: 'ram-7-48-1',
      sarga: 48,
      verse: 1,
      sanskrit: 'वाल्मीकिस्तु समागम्य सीतां दृष्ट्वा तपोवने ।\nउवाच धर्मसंयुक्तं वाक्यं धर्मभृतां वरः ॥',
      transliteration: 'vaalmeekis-tu samaagamya seetaam dristvaa tapovane | uvaacha dharma-samyuktam vaakyam dharmabhritaam varah ||',
      translations: {
        en: 'Valmiki, coming and seeing Sita in the hermitage, best among the righteous, spoke words full of dharma.',
        hi: 'वाल्मीकि, आकर तपोवन में सीता को देखकर, धर्मधारियों में श्रेष्ठ, धर्मयुक्त वचन बोले।'
      },
      meaning: {
        en: 'Valmiki shelters Sita in his ashram.',
        hi: 'वाल्मीकि अपने आश्रम में सीता को आश्रय देते हैं।'
      }
    },
    {
      id: 'ram-7-66-1',
      sarga: 66,
      verse: 1,
      sanskrit: 'ततो वाल्मीकिनोक्तेन विधिना राघवोत्तमः ।\nकुशलावौ समाहूय रामायणमिदं श्रुवन् ॥',
      transliteration: 'tato vaalmeeki-noktena vidhinaa raaghava-uttamah | kushalaa-vau samaahooya raamaayanamidam shruvan ||',
      translations: {
        en: 'Then by the method told by Valmiki, the best of Raghus, calling Kusha and Lava, heard this Ramayana.',
        hi: 'फिर वाल्मीकि द्वारा बताई विधि से, राघवों में श्रेष्ठ, कुश और लव को बुलाकर, यह रामायण सुनी।'
      },
      meaning: {
        en: 'Lava and Kusha recite the Ramayana.',
        hi: 'लव और कुश रामायण का पाठ करते हैं।'
      }
    },
    {
      id: 'ram-7-97-1',
      sarga: 97,
      verse: 1,
      sanskrit: 'ततो रामः समाज्ञाय सीतां धर्मपरायणाम् ।\nउवाच वचनं धर्म्यं सीतायाः शृण्वतां सताम् ॥',
      transliteration: 'tato raamah samaajnaaya seetaam dharma-paraayanaam | uvaacha vachanam dharmyam seetaayaah shrinvataam sataam ||',
      translations: {
        en: 'Then Rama, knowing Sita devoted to dharma, spoke righteous words, as the virtuous ones listened.',
        hi: 'फिर राम, धर्मपरायण सीता को जानते हुए, धर्म के वचन बोले, जब साधु जन सुन रहे थे।'
      },
      meaning: {
        en: 'Rama addresses Sita before the assembly.',
        hi: 'राम सभा के समक्ष सीता को संबोधित करते हैं।'
      }
    },
    {
      id: 'ram-7-97-20',
      sarga: 97,
      verse: 20,
      sanskrit: 'एवमुक्त्वा महातेजा राम इक्ष्वाकुनन्दनः ।\nसीतां च प्रेक्ष्य धर्मज्ञां प्रणम्य च पितामहम् ॥',
      transliteration: 'evam-uktvaa mahaatejaa raama ikshvaaku-nandanah | seetaam cha prekshya dharmajnaam pranamya cha pitaamaham ||',
      translations: {
        en: 'Having spoken thus, the greatly radiant Rama, delight of Ikshvakus, looking at the dharma-knowing Sita, bowing to the grandfather.',
        hi: 'इस प्रकार कहकर, महातेजस्वी राम, इक्ष्वाकु कुल के आनंद, धर्मज्ञ सीता को देखते हुए, पितामह को प्रणाम करते हुए।'
      },
      meaning: {
        en: 'The final scene before Sita departure.',
        hi: 'सीता के प्रस्थान से पहले अंतिम दृश्य।'
      }
    },
    {
      id: 'ram-7-110-1',
      sarga: 110,
      verse: 1,
      sanskrit: 'इति श्रीमद्रामायणे वाल्मीकीये आदिकाव्ये उत्तरकाण्डे ।\nरामराज्याभिषेके श्रीराम स्तुतिः संपूर्णा ॥',
      transliteration: 'iti shreemad-raamaayane vaalmeekeye aadikaavye uttarakaande | raama-raajya-abhisheke shreeraama stutih sampurnaa ||',
      translations: {
        en: 'Thus in the glorious Ramayana, the first epic by Valmiki, in Uttara Kanda, at Rama coronation, the praise of Shri Rama is complete.',
        hi: 'इस प्रकार श्रीमद्रामायण में, वाल्मीकि के आदि काव्य में, उत्तरकांड में, राम राज्याभिषेक में, श्रीराम की स्तुति पूर्ण हुई।'
      },
      meaning: {
        en: 'The conclusion of the great epic Ramayana.',
        hi: 'महान महाकाव्य रामायण का समापन।'
      }
    }
  ]
};

// Get chapter data for Ramayan
export function getRamayanChapter(kandaNumber: number) {
  const kanda = ramayanChaptersData.find(k => k.number === kandaNumber);
  if (!kanda) return null;
  
  return {
    id: `ramayan-kanda-${kandaNumber}`,
    number: kandaNumber,
    title: kanda.name,
    description: kanda.description,
    verseCount: kanda.sargas,
    topics: kanda.topics,
    verses: ramayanVerses[kandaNumber] || []
  };
}

// Get all Ramayan chapters
export function getAllRamayanChapters() {
  return ramayanChaptersData.map(kanda => ({
    id: `ramayan-kanda-${kanda.number}`,
    number: kanda.number,
    title: kanda.name,
    description: kanda.description,
    verseCount: kanda.sargas,
    topics: kanda.topics,
    verses: ramayanVerses[kanda.number] || []
  }));
}
