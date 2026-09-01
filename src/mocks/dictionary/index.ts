import { Root } from "@/features/dictionary/types";

export const dictionaryMock:Root[] = [
  {
    id: "word-laufen",
    word: "laufen",
    article: null,
    wordType: "verb",
    level: "A1",
    pronunciation: {
      ipa: "ˈlaʊ̯fn̩",
      text: "لاوْفِن",
    },
    definitions: [
      {
        id: "laufen-meaning-1",
        german: "sich zu Fuß fortbewegen, oft schneller als beim Gehen",
        persian: "با پای خود حرکت کردن؛ دویدن",
        context: "Bewegung / Alltag",
        examples: [
          {
            id: "laufen-example-1",
            german: "Ich laufe jeden Morgen im Park.",
            persian: "من هر صبح در پارک می‌دوم.",
            context: "Sport / Alltag",
            audioUrl: null,
          },
          {
            id: "laufen-example-2",
            german: "Wir sind schnell zur Bushaltestelle gelaufen.",
            persian: "ما با سرعت به ایستگاه اتوبوس رفتیم.",
            context: "Alltag",
            audioUrl: null,
          },
        ],
      },
      {
        id: "laufen-meaning-2",
        german: "funktionieren oder in Betrieb sein",
        persian: "کار کردن؛ در حال کار یا فعالیت بودن",
        context: "Maschinen / Geräte",
        examples: [
          {
            id: "laufen-example-3",
            german: "Der Computer läuft wieder.",
            persian: "کامپیوتر دوباره کار می‌کند.",
            context: "Technik",
            audioUrl: null,
          },
          {
            id: "laufen-example-4",
            german: "Die Waschmaschine läuft noch.",
            persian: "ماشین لباسشویی هنوز در حال کار است.",
            context: "Haushalt",
            audioUrl: null,
          },
        ],
      },
      {
        id: "laufen-meaning-3",
        german: "stattfinden oder einen bestimmten Verlauf haben",
        persian: "برگزار شدن؛ پیش رفتن یا جریان داشتن",
        context: "Ereignisse / Situationen",
        examples: [
          {
            id: "laufen-example-5",
            german: "Wie läuft das Vorstellungsgespräch?",
            persian: "مصاحبه شغلی چطور پیش می‌رود؟",
            context: "Arbeit",
            audioUrl: null,
          },
        ],
      },
    ],
    audio: {
      pronunciationUrl: null,
      placeholder: true,
    },
    videos: [
      {
        id: "laufen-video-1",
        title: "Laufen einfach erklärt",
        description:
          "Ein kurzes Lernvideo mit einfachen Alltagssituationen rund um das Verb „laufen“.",
        provider: "youtube",
        videoId: "22igE__djW0",
        thumbnailUrl: null,
        isPlaceholder: false,
        generatedByAI: false,
      },
      {
        id: "laufen-video-2",
        title: "Laufen im Alltag",
        description:
          "Verschiedene Bedeutungen von „laufen“ anhand typischer Alltagssituationen.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
      {
        id: "laufen-video-3",
        title: "Laufen oder gehen?",
        description:
          "Der Unterschied zwischen „laufen“ und „gehen“ in verschiedenen Situationen.",
        provider: "aparat",
        videoId: "zmqkm9o",
        thumbnailUrl: null,
        isPlaceholder: false,
        generatedByAI: false,
      },
    ],
    exercise: {
      id: "exercise-laufen",
      title: "Übungen zu „laufen“",
      description:
        "Übe die verschiedenen Bedeutungen und typischen Verwendungen von „laufen“.",
      href: "/practice?word=laufen",
    },
    betterUnderstanding: [
      {
        id: "laufen-resource-1",
        title: "Konjugation von „laufen“",
        description: "Präsens, Präteritum und Perfekt von „laufen“.",
        type: "grammar",
        href: "#",
      },
      {
        id: "laufen-resource-2",
        title: "laufen vs. gehen",
        description: "Wann benutzt man „laufen“ und wann „gehen“?",
        type: "comparison",
        href: "#",
      },
    ],
    relations: {
      synonyms: [
        {
          wordId: "rennen",
          word: "rennen",
          level: "A2",
          note: "Schneller und gezielter als „laufen“; oft mit höherem Tempo.",
        },
        {
          wordId: "gehen",
          word: "gehen",
          level: "A1",
          note: "Nicht in allen Bedeutungen synonym; bei Fortbewegung meist langsamer.",
        },
      ],
      antonyms: [
        {
          wordId: "stehen",
          word: "stehen",
          level: "A1",
          note: "Gegensatz bei körperlicher Bewegung bzw. Fortbewegung.",
        },
      ],
      relatedWords: [
        {
          wordId: "Spaziergang",
          word: "Spaziergang",
          level: "A1",
          relation: "related",
        },
        {
          wordId: "Läufer",
          word: "Läufer",
          level: "A2",
          relation: "person",
        },
      ],
    },
    metadata: {
      category: ["Alltag", "Bewegung", "Arbeit"],
      isSaved: false,
      popularity: 92,
    },
  },
  {
    id: "word-entscheidung",
    word: "Entscheidung",
    article: "die",
    wordType: "Name",
    level: "B1",
    pronunciation: {
      ipa: "ɛntˈʃaɪ̯dʊŋ",
      text: "اِنت‌شای‌دونگ",
    },
    definitions: [
      {
        id: "entscheidung-meaning-1",
        german: "der Entschluss, etwas Bestimmtes zu tun oder nicht zu tun",
        persian: "تصمیم؛ انتخاب یا تعیین اینکه کاری انجام شود یا نشود",
        context: "Alltag / persönliche Entscheidungen",
        examples: [
          {
            id: "entscheidung-example-1",
            german: "Ich muss heute eine wichtige Entscheidung treffen.",
            persian: "من باید امروز یک تصمیم مهم بگیرم.",
            context: "Alltag",
            audioUrl: null,
          },
          {
            id: "entscheidung-example-2",
            german: "Die Entscheidung fiel mir nicht leicht.",
            persian: "گرفتن این تصمیم برایم آسان نبود.",
            context: "Persönlich",
            audioUrl: null,
          },
        ],
      },
      {
        id: "entscheidung-meaning-2",
        german:
          "das Ergebnis eines Entscheidungsprozesses, das von einer Person oder Institution festgelegt wurde",
        persian:
          "تصمیم نهایی یا نتیجه‌ای که پس از بررسی و انتخاب گرفته شده است",
        context: "Arbeit / Institutionen",
        examples: [
          {
            id: "entscheidung-example-3",
            german:
              "Die Entscheidung des Unternehmens wurde gestern bekannt gegeben.",
            persian: "تصمیم شرکت دیروز اعلام شد.",
            context: "Arbeit",
            audioUrl: null,
          },
          {
            id: "entscheidung-example-4",
            german: "Wir warten noch auf die Entscheidung der Universität.",
            persian: "ما هنوز منتظر تصمیم دانشگاه هستیم.",
            context: "Universität",
            audioUrl: null,
          },
        ],
      },
    ],
    audio: {
      pronunciationUrl: "/audio/dictionary/Entscheidung.mp3",
      placeholder: false,
    },
    videos: [
      {
        id: "entscheidung-video-1",
        title: "Entscheidung einfach erklärt",
        description:
          "Das Wort „Entscheidung“ mit einfachen Beispielen aus Alltag, Studium und Arbeit.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
      {
        id: "entscheidung-video-2",
        title: "Eine Entscheidung treffen",
        description:
          "Typische Ausdrücke und Redewendungen rund um Entscheidungen.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
    ],
    exercise: {
      id: "exercise-entscheidung",
      title: "Übungen zu „Entscheidung“",
      description:
        "Übe die Verwendung von „Entscheidung“ in verschiedenen Kontexten.",
      href: "/practice?word=entscheidung",
    },
    betterUnderstanding: [
      {
        id: "entscheidung-resource-1",
        title: "Eine Entscheidung treffen",
        description:
          "Eine wichtige und sehr häufige Wortverbindung mit „Entscheidung“.",
        type: "collocation",
        href: "#",
      },
      {
        id: "entscheidung-resource-2",
        title: "entscheiden vs. Entscheidung",
        description:
          "Der Unterschied zwischen dem Verb „entscheiden“ und dem Substantiv „Entscheidung“.",
        type: "grammar",
        href: "#",
      },
    ],
    relations: {
      synonyms: [
        {
          wordId: "entschluss",
          word: "Entschluss",
          level: "B2",
          note: "Ähnlich zu „Entscheidung“, besonders wenn der eigene Entschluss im Vordergrund steht.",
        },
        {
          wordId: "beschluss",
          word: "Beschluss",
          level: "B2",
          note: "Häufig bei offiziellen, institutionellen oder formellen Entscheidungen.",
        },
      ],
      antonyms: [
        {
          wordId: "unentschlossenheit",
          word: "Unentschlossenheit",
          level: "B2",
          note: "Zustand, in dem man sich nicht für eine Möglichkeit entscheiden kann.",
        },
      ],
      relatedWords: [
        {
          wordId: "entscheiden",
          word: "entscheiden",
          level: "B1",
          relation: "verb",
        },
        {
          wordId: "entscheidend",
          word: "entscheidend",
          level: "B2",
          relation: "adjective",
        },
      ],
    },
    metadata: {
      category: ["Alltag", "Arbeit", "Universität"],
      isSaved: false,
      popularity: 87,
    },
  },
  {
    id: "word-zuverlaessig",
    word: "zuverlässig",
    article: null,
    wordType: "adjective",
    level: "B1",
    pronunciation: {
      ipa: "ˈt͡suːfɛɐ̯lɛsɪç",
      text: "تْسوو‌فِر‌لِسیش",
    },
    definitions: [
      {
        id: "zuverlaessig-meaning-1",
        german: "so, dass man sich auf jemanden oder etwas verlassen kann",
        persian: "قابل اعتماد؛ کسی یا چیزی که می‌توان روی او/آن حساب کرد",
        context: "Personen / Beziehungen",
        examples: [
          {
            id: "zuverlaessig-example-1",
            german: "Er ist sehr zuverlässig und hält immer seine Versprechen.",
            persian: "او بسیار قابل اعتماد است و همیشه به قول‌هایش عمل می‌کند.",
            context: "Person",
            audioUrl: null,
          },
          {
            id: "zuverlaessig-example-2",
            german: "Sie ist eine zuverlässige Kollegin.",
            persian: "او همکار قابل اعتمادی است.",
            context: "Arbeit",
            audioUrl: null,
          },
        ],
      },
      {
        id: "zuverlaessig-meaning-2",
        german: "so, dass etwas erwartungsgemäß und ohne Probleme funktioniert",
        persian: "قابل اطمینان؛ چیزی که به‌طور منظم و بدون مشکل کار می‌کند",
        context: "Technik / Systeme",
        examples: [
          {
            id: "zuverlaessig-example-3",
            german: "Das Auto ist alt, aber noch sehr zuverlässig.",
            persian: "این ماشین قدیمی است، اما هنوز بسیار قابل اطمینان است.",
            context: "Technik",
            audioUrl: null,
          },
          {
            id: "zuverlaessig-example-4",
            german: "Wir brauchen eine zuverlässige Internetverbindung.",
            persian: "ما به یک اتصال اینترنت قابل اطمینان نیاز داریم.",
            context: "Technik / Alltag",
            audioUrl: null,
          },
        ],
      },
    ],
    audio: {
      pronunciationUrl: null,
      placeholder: true,
    },
    videos: [
      {
        id: "zuverlaessig-video-1",
        title: "Zuverlässig einfach erklärt",
        description:
          "Die Bedeutung von „zuverlässig“ mit einfachen Beispielen.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
      {
        id: "zuverlaessig-video-2",
        title: "Zuverlässig im Berufsleben",
        description: "Wie man „zuverlässig“ im beruflichen Kontext verwendet.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
    ],
    exercise: {
      id: "exercise-zuverlaessig",
      title: "Übungen zu „zuverlässig“",
      description:
        "Übe die Verwendung des Adjektivs „zuverlässig“ in verschiedenen Situationen.",
      href: "/practice?word=zuverlässig",
    },
    betterUnderstanding: [
      {
        id: "zuverlaessig-resource-1",
        title: "zuverlässig vs. vertrauenswürdig",
        description:
          "Der Unterschied zwischen Zuverlässigkeit und Vertrauenswürdigkeit.",
        type: "comparison",
        href: "#",
      },
      {
        id: "zuverlaessig-resource-2",
        title: "Zuverlässigkeit im Beruf",
        description: "Typische Verwendung des Wortes im beruflichen Kontext.",
        type: "context",
        href: "#",
      },
    ],
    relations: {
      synonyms: [
        {
          wordId: "verlaesslich",
          word: "verlässlich",
          level: "B1",
          note: "Sehr nah an „zuverlässig“ und in vielen Kontexten austauschbar.",
        },
        {
          wordId: "vertrauenswuerdig",
          word: "vertrauenswürdig",
          level: "B2",
          note: "Betont stärker, dass jemand vertrauenswürdig ist.",
        },
      ],
      antonyms: [
        {
          wordId: "unzuverlaessig",
          word: "unzuverlässig",
          level: "B1",
          note: "Das direkte Gegenteil von „zuverlässig“.",
        },
      ],
      relatedWords: [
        {
          wordId: "zuverlaessigkeit",
          word: "Zuverlässigkeit",
          level: "B1",
          relation: "noun",
        },
        {
          wordId: "verlassen",
          word: "sich auf jemanden verlassen",
          level: "B1",
          relation: "expression",
        },
      ],
    },
    metadata: {
      category: ["Arbeit", "Alltag", "Persönlichkeit"],
      isSaved: false,
      popularity: 84,
    },
  },
  {
    id: "word-essen",
    word: "essen",
    article: null,
    wordType: "verb",
    level: "A1",
    pronunciation: {
      ipa: "ˈɛsn̩",
      text: "اِسِن",
    },
    definitions: [
      {
        id: "essen-meaning-1",
        german: "Nahrung zu sich nehmen",
        persian: "غذا خوردن",
        context: "Alltag / Ernährung",
        examples: [
          {
            id: "essen-example-1",
            german: "Ich esse gerne Pizza.",
            persian: "من پیتزا دوست دارم.",
            context: "Alltag",
            audioUrl: null,
          },
          {
            id: "essen-example-2",
            german: "Wir essen jeden Tag zusammen.",
            persian: "ما هر روز با هم غذا می‌خوریم.",
            context: "Alltag",
            audioUrl: null,
          },
        ],
      },
    ],
    audio: {
      pronunciationUrl: null,
      placeholder: true,
    },
    videos: [
      {
        id: "essen-video-1",
        title: "Essen einfach erklärt",
        description: "Die Bedeutung von „essen“ mit einfachen Beispielen.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
    ],
    exercise: {
      id: "exercise-essen",
      title: "Übungen zu „essen“",
      description: "Übe die Verwendung des Verbs „essen“.",
      href: "/practice?word=essen",
    },
    betterUnderstanding: [
      {
        id: "essen-resource-1",
        title: "Konjugation von „essen“",
        description: "Präsens, Präteritum und Perfekt von „essen“.",
        type: "grammar",
        href: "#",
      },
      {
        id: "essen-resource-2",
        title: "essen vs. fressen",
        description: "Der Unterschied zwischen „essen“ und „fressen“.",
        type: "comparison",
        href: "#",
      },
    ],
    relations: {
      synonyms: [
        {
          wordId: "speisen",
          word: "speisen",
          level: "B1",
          note: "Formaler Ausdruck für „essen“.",
        },
        {
          wordId: "verzehren",
          word: "verzehren",
          level: "B2",
          note: "Gehobener Ausdruck.",
        },
      ],
      antonyms: [
        {
          wordId: "fasten",
          word: "fasten",
          level: "B2",
          note: "Gegenteil von Nahrungsaufnahme.",
        },
      ],
      relatedWords: [
        {
          wordId: "Essen",
          word: "Essen",
          level: "A1",
          relation: "noun",
        },
        {
          wordId: "Essenszeit",
          word: "Essenszeit",
          level: "A2",
          relation: "related",
        },
      ],
    },
    metadata: {
      category: ["Alltag", "Ernährung"],
      isSaved: false,
      popularity: 95,
    },
  },
  {
    id: "word-wasser",
    word: "Wasser",
    article: "das",
    wordType: "Name",
    level: "A1",
    pronunciation: {
      ipa: "ˈvasɐ",
      text: "واسِر",
    },
    definitions: [
      {
        id: "wasser-meaning-1",
        german: "die klare, farblose Flüssigkeit, die in Flüssen und Seen ist",
        persian: "آب؛ مایعی که در رودخانه‌ها و دریاچه‌ها وجود دارد",
        context: "Alltag / Natur",
        examples: [
          {
            id: "wasser-example-1",
            german: "Ich trinke jeden Tag viel Wasser.",
            persian: "من هر روز آب زیاد می‌نوشم.",
            context: "Alltag",
            audioUrl: null,
          },
          {
            id: "wasser-example-2",
            german: "Das Wasser im See ist kalt.",
            persian: "آب دریاچه سرد است.",
            context: "Natur",
            audioUrl: null,
          },
        ],
      },
    ],
    audio: {
      pronunciationUrl: null,
      placeholder: true,
    },
    videos: [
      {
        id: "wasser-video-1",
        title: "Wasser einfach erklärt",
        description: "Die Bedeutung von „Wasser“ mit einfachen Beispielen.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
    ],
    exercise: {
      id: "exercise-wasser",
      title: "Übungen zu „Wasser“",
      description: "Übe die Verwendung des Wortes „Wasser“.",
      href: "/practice?word=wasser",
    },
    betterUnderstanding: [
      {
        id: "wasser-resource-1",
        title: "Wasser im Alltag",
        description: "Typische Verwendung des Wortes im Alltag.",
        type: "context",
        href: "#",
      },
    ],
    relations: {
      synonyms: [
        {
          wordId: "fluss",
          word: "Fluss",
          level: "A1",
          note: "Bezieht sich auf das fließende Wasser.",
        },
      ],
      antonyms: [],
      relatedWords: [
        {
          wordId: "Meer",
          word: "Meer",
          level: "A1",
          relation: "related",
        },
        {
          wordId: "Regen",
          word: "Regen",
          level: "A1",
          relation: "related",
        },
      ],
    },
    metadata: {
      category: ["Alltag", "Natur"],
      isSaved: false,
      popularity: 98,
    },
  },
  {
    id: "word-freund",
    word: "Freund",
    article: "der",
    wordType: "Name",
    level: "A1",
    pronunciation: {
      ipa: "fʁɔʏ̯nt",
      text: "فْروی‌نت",
    },
    definitions: [
      {
        id: "freund-meaning-1",
        german: "eine Person, die man gern mag und mit der man Zeit verbringt",
        persian: "دوست؛ شخصی که دوستش داریم و با او وقت می‌گذرانیم",
        context: "Alltag / Beziehungen",
        examples: [
          {
            id: "freund-example-1",
            german: "Er ist mein bester Freund.",
            persian: "او بهترین دوست من است.",
            context: "Alltag",
            audioUrl: null,
          },
          {
            id: "freund-example-2",
            german: "Sie hat viele Freunde.",
            persian: "او دوستان زیادی دارد.",
            context: "Alltag",
            audioUrl: null,
          },
        ],
      },
    ],
    audio: {
      pronunciationUrl: null,
      placeholder: true,
    },
    videos: [
      {
        id: "freund-video-1",
        title: "Freund einfach erklärt",
        description: "Die Bedeutung von „Freund“ mit einfachen Beispielen.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
    ],
    exercise: {
      id: "exercise-freund",
      title: "Übungen zu „Freund“",
      description: "Übe die Verwendung des Wortes „Freund“.",
      href: "/practice?word=freund",
    },
    betterUnderstanding: [
      {
        id: "freund-resource-1",
        title: "Freund vs. Bekannter",
        description: "Der Unterschied zwischen Freund und Bekanntem.",
        type: "comparison",
        href: "#",
      },
    ],
    relations: {
      synonyms: [
        {
          wordId: "kumpel",
          word: "Kumpel",
          level: "A2",
          note: "Informeller Ausdruck für Freund.",
        },
        {
          wordId: "kamerad",
          word: "Kamerad",
          level: "B1",
          note: "Besonders im sportlichen oder militärischen Kontext.",
        },
      ],
      antonyms: [
        {
          wordId: "feind",
          word: "Feind",
          level: "A2",
          note: "Gegensatz zu Freund.",
        },
      ],
      relatedWords: [
        {
          wordId: "Freundschaft",
          word: "Freundschaft",
          level: "A2",
          relation: "noun",
        },
        {
          wordId: "freundlich",
          word: "freundlich",
          level: "A2",
          relation: "adjective",
        },
      ],
    },
    metadata: {
      category: ["Alltag", "Beziehungen"],
      isSaved: false,
      popularity: 96,
    },
  },
  {
    id: "word-sprechen",
    word: "sprechen",
    article: null,
    wordType: "verb",
    level: "A1",
    pronunciation: {
      ipa: "ˈʃpʁɛçn̩",
      text: "شْپْرِخِن",
    },
    definitions: [
      {
        id: "sprechen-meaning-1",
        german: "seine Gedanken mit Worten ausdrücken",
        persian: "صحبت کردن؛ بیان افکار با کلمات",
        context: "Alltag / Kommunikation",
        examples: [
          {
            id: "sprechen-example-1",
            german: "Ich spreche Deutsch.",
            persian: "من آلمانی صحبت می‌کنم.",
            context: "Sprache",
            audioUrl: null,
          },
          {
            id: "sprechen-example-2",
            german: "Wir sprechen über das Wetter.",
            persian: "ما درباره آب و هوا صحبت می‌کنیم.",
            context: "Alltag",
            audioUrl: null,
          },
        ],
      },
    ],
    audio: {
      pronunciationUrl: null,
      placeholder: true,
    },
    videos: [
      {
        id: "sprechen-video-1",
        title: "Sprechen einfach erklärt",
        description: "Die Bedeutung von „sprechen“ mit einfachen Beispielen.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
    ],
    exercise: {
      id: "exercise-sprechen",
      title: "Übungen zu „sprechen“",
      description: "Übe die Verwendung des Verbs „sprechen“.",
      href: "/practice?word=sprechen",
    },
    betterUnderstanding: [
      {
        id: "sprechen-resource-1",
        title: "Konjugation von „sprechen“",
        description: "Präsens, Präteritum und Perfekt von „sprechen“.",
        type: "grammar",
        href: "#",
      },
    ],
    relations: {
      synonyms: [
        {
          wordId: "reden",
          word: "reden",
          level: "A1",
          note: "Ähnlich zu „sprechen“, aber etwas informeller.",
        },
        {
          wordId: "sagen",
          word: "sagen",
          level: "A1",
          note: "Fokussiert mehr auf den Inhalt.",
        },
      ],
      antonyms: [
        {
          wordId: "schweigen",
          word: "schweigen",
          level: "A2",
          note: "Nicht sprechen.",
        },
      ],
      relatedWords: [
        {
          wordId: "Gespräch",
          word: "Gespräch",
          level: "A2",
          relation: "noun",
        },
        {
          wordId: "Sprache",
          word: "Sprache",
          level: "A1",
          relation: "related",
        },
      ],
    },
    metadata: {
      category: ["Alltag", "Kommunikation"],
      isSaved: false,
      popularity: 94,
    },
  },
  {
    id: "word-gross",
    word: "groß",
    article: null,
    wordType: "adjective",
    level: "A1",
    pronunciation: {
      ipa: "ɡʁoːs",
      text: "گْروس",
    },
    definitions: [
      {
        id: "gross-meaning-1",
        german: "überdurchschnittlich in der Größe",
        persian: "بزرگ؛ بالاتر از حد متوسط از نظر اندازه",
        context: "Alltag / Beschreibung",
        examples: [
          {
            id: "gross-example-1",
            german: "Das ist ein großes Haus.",
            persian: "این یک خانه بزرگ است.",
            context: "Alltag",
            audioUrl: null,
          },
          {
            id: "gross-example-2",
            german: "Mein Bruder ist größer als ich.",
            persian: "برادرم از من بزرگ‌تر است.",
            context: "Person",
            audioUrl: null,
          },
        ],
      },
    ],
    audio: {
      pronunciationUrl: null,
      placeholder: true,
    },
    videos: [
      {
        id: "gross-video-1",
        title: "Groß einfach erklärt",
        description: "Die Bedeutung von „groß“ mit einfachen Beispielen.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
    ],
    exercise: {
      id: "exercise-gross",
      title: "Übungen zu „groß“",
      description: "Übe die Verwendung des Adjektivs „groß“.",
      href: "/practice?word=gross",
    },
    betterUnderstanding: [
      {
        id: "gross-resource-1",
        title: "Groß vs. großartig",
        description: "Der Unterschied zwischen Größe und Bedeutung.",
        type: "comparison",
        href: "#",
      },
    ],
    relations: {
      synonyms: [
        {
          wordId: "riesig",
          word: "riesig",
          level: "A2",
          note: "Bedeutet noch größer als „groß“.",
        },
      ],
      antonyms: [
        {
          wordId: "klein",
          word: "klein",
          level: "A1",
          note: "Das direkte Gegenteil.",
        },
      ],
      relatedWords: [
        {
          wordId: "Größe",
          word: "Größe",
          level: "A1",
          relation: "noun",
        },
        {
          wordId: "vergrößern",
          word: "vergrößern",
          level: "B1",
          relation: "verb",
        },
      ],
    },
    metadata: {
      category: ["Alltag", "Beschreibung"],
      isSaved: false,
      popularity: 93,
    },
  },
  {
    id: "word-arbeiten",
    word: "arbeiten",
    article: null,
    wordType: "verb",
    level: "A1",
    pronunciation: {
      ipa: "ˈaʁbaɪ̯tn̩",
      text: "آرْبایْتِن",
    },
    definitions: [
      {
        id: "arbeiten-meaning-1",
        german: "eine Tätigkeit ausüben, um Geld zu verdienen",
        persian: "کار کردن؛ فعالیت انجام دادن برای کسب درآمد",
        context: "Arbeit / Beruf",
        examples: [
          {
            id: "arbeiten-example-1",
            german: "Ich arbeite in einem Büro.",
            persian: "من در یک دفتر کار می‌کنم.",
            context: "Beruf",
            audioUrl: null,
          },
          {
            id: "arbeiten-example-2",
            german: "Er arbeitet sehr hart.",
            persian: "او خیلی سخت کار می‌کند.",
            context: "Arbeit",
            audioUrl: null,
          },
        ],
      },
    ],
    audio: {
      pronunciationUrl: null,
      placeholder: true,
    },
    videos: [
      {
        id: "arbeiten-video-1",
        title: "Arbeiten einfach erklärt",
        description: "Die Bedeutung von „arbeiten“ mit einfachen Beispielen.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
    ],
    exercise: {
      id: "exercise-arbeiten",
      title: "Übungen zu „arbeiten“",
      description: "Übe die Verwendung des Verbs „arbeiten“.",
      href: "/practice?word=arbeiten",
    },
    betterUnderstanding: [
      {
        id: "arbeiten-resource-1",
        title: "Konjugation von „arbeiten“",
        description: "Präsens, Präteritum und Perfekt von „arbeiten“.",
        type: "grammar",
        href: "#",
      },
    ],
    relations: {
      synonyms: [
        {
          wordId: "jobben",
          word: "jobben",
          level: "A2",
          note: "Informell, oft für Studentenjobs.",
        },
        {
          wordId: "schaffen",
          word: "schaffen",
          level: "B1",
          note: "Umgangssprachlich für arbeiten.",
        },
      ],
      antonyms: [
        {
          wordId: "faulenzen",
          word: "faulenzen",
          level: "B1",
          note: "Nichts tun, faul sein.",
        },
      ],
      relatedWords: [
        {
          wordId: "Arbeit",
          word: "Arbeit",
          level: "A1",
          relation: "noun",
        },
        {
          wordId: "Arbeitsplatz",
          word: "Arbeitsplatz",
          level: "A2",
          relation: "related",
        },
      ],
    },
    metadata: {
      category: ["Arbeit", "Beruf"],
      isSaved: false,
      popularity: 97,
    },
  },
  {
    id: "word-familie",
    word: "Familie",
    article: "die",
    wordType: "Name",
    level: "A1",
    pronunciation: {
      ipa: "faˈmiːli̯ə",
      text: "فا-می-لی-ه",
    },
    definitions: [
      {
        id: "familie-meaning-1",
        german: "die Gruppe von Personen, die zusammenleben und verwandt sind",
        persian: "خانواده؛ گروهی از افراد که با هم زندگی می‌کنند و نسبت دارند",
        context: "Alltag / Beziehungen",
        examples: [
          {
            id: "familie-example-1",
            german: "Meine Familie ist groß.",
            persian: "خانواده من بزرگ است.",
            context: "Alltag",
            audioUrl: null,
          },
          {
            id: "familie-example-2",
            german: "Wir verbringen Weihnachten mit der Familie.",
            persian: "ما کریسمس را با خانواده می‌گذرانیم.",
            context: "Alltag",
            audioUrl: null,
          },
        ],
      },
    ],
    audio: {
      pronunciationUrl: null,
      placeholder: true,
    },
    videos: [
      {
        id: "familie-video-1",
        title: "Familie einfach erklärt",
        description: "Die Bedeutung von „Familie“ mit einfachen Beispielen.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
    ],
    exercise: {
      id: "exercise-familie",
      title: "Übungen zu „Familie“",
      description: "Übe die Verwendung des Wortes „Familie“.",
      href: "/practice?word=familie",
    },
    betterUnderstanding: [
      {
        id: "familie-resource-1",
        title: "Familienmitglieder",
        description: "Die wichtigsten Familienmitglieder auf Deutsch.",
        type: "context",
        href: "#",
      },
    ],
    relations: {
      synonyms: [],
      antonyms: [],
      relatedWords: [
        {
          wordId: "Mutter",
          word: "Mutter",
          level: "A1",
          relation: "family-member",
        },
        {
          wordId: "Vater",
          word: "Vater",
          level: "A1",
          relation: "family-member",
        },
        {
          wordId: "Kind",
          word: "Kind",
          level: "A1",
          relation: "family-member",
        },
        {
          wordId: "Geschwister",
          word: "Geschwister",
          level: "A1",
          relation: "family-member",
        },
      ],
    },
    metadata: {
      category: ["Alltag", "Beziehungen"],
      isSaved: false,
      popularity: 99,
    },
  },
  {
    id: "word-haus",
    word: "Haus",
    article: "das",
    wordType: "Name",
    level: "A1",
    pronunciation: {
      ipa: "haʊ̯s",
      text: "هاوْس",
    },
    definitions: [
      {
        id: "haus-meaning-1",
        german: "ein Gebäude, in dem Menschen wohnen",
        persian: "خانه؛ ساختمانی که افراد در آن زندگی می‌کنند",
        context: "Alltag / Wohnen",
        examples: [
          {
            id: "haus-example-1",
            german: "Das Haus ist sehr schön.",
            persian: "خانه بسیار زیبا است.",
            context: "Alltag",
            audioUrl: null,
          },
          {
            id: "haus-example-2",
            german: "Wir haben ein Haus mit Garten.",
            persian: "ما یک خانه با باغ داریم.",
            context: "Alltag",
            audioUrl: null,
          },
        ],
      },
    ],
    audio: {
      pronunciationUrl: null,
      placeholder: true,
    },
    videos: [
      {
        id: "haus-video-1",
        title: "Haus einfach erklärt",
        description: "Die Bedeutung von „Haus“ mit einfachen Beispielen.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
    ],
    exercise: {
      id: "exercise-haus",
      title: "Übungen zu „Haus“",
      description: "Übe die Verwendung des Wortes „Haus“.",
      href: "/practice?word=haus",
    },
    betterUnderstanding: [
      {
        id: "haus-resource-1",
        title: "Haus vs. Wohnung",
        description: "Der Unterschied zwischen Haus und Wohnung.",
        type: "comparison",
        href: "#",
      },
    ],
    relations: {
      synonyms: [
        {
          wordId: "gebaeude",
          word: "Gebäude",
          level: "A2",
          note: "Allgemeiner Begriff für jedes Gebäude.",
        },
        {
          wordId: "heim",
          word: "Heim",
          level: "A2",
          note: "Betont den Wohncharakter.",
        },
      ],
      antonyms: [],
      relatedWords: [
        {
          wordId: "Wohnung",
          word: "Wohnung",
          level: "A1",
          relation: "related",
        },
        {
          wordId: "Garten",
          word: "Garten",
          level: "A1",
          relation: "related",
        },
      ],
    },
    metadata: {
      category: ["Alltag", "Wohnen"],
      isSaved: false,
      popularity: 97,
    },
  },
  {
    id: "word-auto",
    word: "Auto",
    article: "das",
    wordType: "Name",
    level: "A1",
    pronunciation: {
      ipa: "ˈaʊ̯to",
      text: "آوْتو",
    },
    definitions: [
      {
        id: "auto-meaning-1",
        german: "ein Fahrzeug mit Motor für den Straßenverkehr",
        persian: "اتومبیل؛ وسیله نقلیه موتوری برای جاده",
        context: "Alltag / Verkehr",
        examples: [
          {
            id: "auto-example-1",
            german: "Das Auto ist rot.",
            persian: "اتومبیل قرمز است.",
            context: "Alltag",
            audioUrl: null,
          },
          {
            id: "auto-example-2",
            german: "Wir fahren mit dem Auto in den Urlaub.",
            persian: "ما با اتومبیل به تعطیلات می‌رویم.",
            context: "Alltag",
            audioUrl: null,
          },
        ],
      },
    ],
    audio: {
      pronunciationUrl: null,
      placeholder: true,
    },
    videos: [
      {
        id: "auto-video-1",
        title: "Auto einfach erklärt",
        description: "Die Bedeutung von „Auto“ mit einfachen Beispielen.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
    ],
    exercise: {
      id: "exercise-auto",
      title: "Übungen zu „Auto“",
      description: "Übe die Verwendung des Wortes „Auto“.",
      href: "/practice?word=auto",
    },
    betterUnderstanding: [
      {
        id: "auto-resource-1",
        title: "Auto vs. Fahrrad",
        description: "Der Unterschied zwischen Auto und Fahrrad.",
        type: "comparison",
        href: "#",
      },
    ],
    relations: {
      synonyms: [
        {
          wordId: "fahrzeug",
          word: "Fahrzeug",
          level: "A2",
          note: "Allgemeiner Begriff für jedes Fahrzeug.",
        },
        {
          wordId: "wagen",
          word: "Wagen",
          level: "A2",
          note: "Synonym für Auto, etwas formeller.",
        },
      ],
      antonyms: [],
      relatedWords: [
        {
          wordId: "fahren",
          word: "fahren",
          level: "A1",
          relation: "verb",
        },
        {
          wordId: "Fahrer",
          word: "Fahrer",
          level: "A2",
          relation: "person",
        },
      ],
    },
    metadata: {
      category: ["Alltag", "Verkehr"],
      isSaved: false,
      popularity: 96,
    },
  },
  {
    id: "word-gluecklich",
    word: "glücklich",
    article: null,
    wordType: "adjective",
    level: "A2",
    pronunciation: {
      ipa: "ˈɡlʏklɪç",
      text: "گْلوک‌لیش",
    },
    definitions: [
      {
        id: "gluecklich-meaning-1",
        german: "sehr zufrieden und froh",
        persian: "خوشحال؛ بسیار راضی و شاد",
        context: "Alltag / Gefühle",
        examples: [
          {
            id: "gluecklich-example-1",
            german: "Ich bin glücklich.",
            persian: "من خوشحال هستم.",
            context: "Alltag",
            audioUrl: null,
          },
          {
            id: "gluecklich-example-2",
            german: "Das war ein glücklicher Tag.",
            persian: "این یک روز خوشحال بود.",
            context: "Alltag",
            audioUrl: null,
          },
        ],
      },
    ],
    audio: {
      pronunciationUrl: null,
      placeholder: true,
    },
    videos: [
      {
        id: "gluecklich-video-1",
        title: "Glücklich einfach erklärt",
        description: "Die Bedeutung von „glücklich“ mit einfachen Beispielen.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
    ],
    exercise: {
      id: "exercise-gluecklich",
      title: "Übungen zu „glücklich“",
      description: "Übe die Verwendung des Adjektivs „glücklich“.",
      href: "/practice?word=glücklich",
    },
    betterUnderstanding: [
      {
        id: "gluecklich-resource-1",
        title: "Glücklich vs. zufrieden",
        description: "Der Unterschied zwischen glücklich und zufrieden.",
        type: "comparison",
        href: "#",
      },
    ],
    relations: {
      synonyms: [
        {
          wordId: "froh",
          word: "froh",
          level: "A1",
          note: "Ähnlich zu glücklich, aber etwas schwächer.",
        },
        {
          wordId: "zufrieden",
          word: "zufrieden",
          level: "A1",
          note: "Betont die Zufriedenheit.",
        },
      ],
      antonyms: [
        {
          wordId: "traurig",
          word: "traurig",
          level: "A1",
          note: "Das Gegenteil von glücklich.",
        },
        {
          wordId: "unglücklich",
          word: "unglücklich",
          level: "A2",
          note: "Das direkte Gegenteil.",
        },
      ],
      relatedWords: [
        {
          wordId: "Glück",
          word: "Glück",
          level: "A1",
          relation: "noun",
        },
      ],
    },
    metadata: {
      category: ["Alltag", "Gefühle"],
      isSaved: false,
      popularity: 91,
    },
  },
  {
    id: "word-lernen",
    word: "lernen",
    article: null,
    wordType: "verb",
    level: "A1",
    pronunciation: {
      ipa: "ˈlɛʁnən",
      text: "لِرْنِن",
    },
    definitions: [
      {
        id: "lernen-meaning-1",
        german: "sich Wissen oder Fähigkeiten aneignen",
        persian: "یاد گرفتن؛ کسب دانش یا مهارت",
        context: "Alltag / Bildung",
        examples: [
          {
            id: "lernen-example-1",
            german: "Ich lerne Deutsch.",
            persian: "من آلمانی یاد می‌گیرم.",
            context: "Sprache",
            audioUrl: null,
          },
          {
            id: "lernen-example-2",
            german: "Die Kinder lernen in der Schule.",
            persian: "بچه‌ها در مدرسه یاد می‌گیرند.",
            context: "Schule",
            audioUrl: null,
          },
        ],
      },
    ],
    audio: {
      pronunciationUrl: null,
      placeholder: true,
    },
    videos: [
      {
        id: "lernen-video-1",
        title: "Lernen einfach erklärt",
        description: "Die Bedeutung von „lernen“ mit einfachen Beispielen.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
    ],
    exercise: {
      id: "exercise-lernen",
      title: "Übungen zu „lernen“",
      description: "Übe die Verwendung des Verbs „lernen“.",
      href: "/practice?word=lernen",
    },
    betterUnderstanding: [
      {
        id: "lernen-resource-1",
        title: "Konjugation von „lernen“",
        description: "Präsens, Präteritum und Perfekt von „lernen“.",
        type: "grammar",
        href: "#",
      },
      {
        id: "lernen-resource-2",
        title: "lernen vs. studieren",
        description: "Der Unterschied zwischen lernen und studieren.",
        type: "comparison",
        href: "#",
      },
    ],
    relations: {
      synonyms: [
        {
          wordId: "studieren",
          word: "studieren",
          level: "A1",
          note: "Besonders für Universitätsbildung.",
        },
        {
          wordId: "üben",
          word: "üben",
          level: "A1",
          note: "Fokussiert auf praktische Wiederholung.",
        },
      ],
      antonyms: [],
      relatedWords: [
        {
          wordId: "Lehrer",
          word: "Lehrer",
          level: "A1",
          relation: "person",
        },
        {
          wordId: "Schule",
          word: "Schule",
          level: "A1",
          relation: "related",
        },
      ],
    },
    metadata: {
      category: ["Alltag", "Bildung"],
      isSaved: false,
      popularity: 98,
    },
  },
  {
    id: "word-geld",
    word: "Geld",
    article: "das",
    wordType: "Name",
    level: "A1",
    pronunciation: {
      ipa: "ɡɛlt",
      text: "گِلْت",
    },
    definitions: [
      {
        id: "geld-meaning-1",
        german: "Zahlungsmittel, mit dem man Waren und Dienstleistungen kauft",
        persian: "پول؛ وسیله پرداخت برای خرید کالا و خدمات",
        context: "Alltag / Wirtschaft",
        examples: [
          {
            id: "geld-example-1",
            german: "Ich habe kein Geld dabei.",
            persian: "من پول همراه ندارم.",
            context: "Alltag",
            audioUrl: null,
          },
          {
            id: "geld-example-2",
            german: "Das Buch kostet 20 Euro.",
            persian: "این کتاب ۲۰ یورو قیمت دارد.",
            context: "Alltag",
            audioUrl: null,
          },
        ],
      },
    ],
    audio: {
      pronunciationUrl: null,
      placeholder: true,
    },
    videos: [
      {
        id: "geld-video-1",
        title: "Geld einfach erklärt",
        description: "Die Bedeutung von „Geld“ mit einfachen Beispielen.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
    ],
    exercise: {
      id: "exercise-geld",
      title: "Übungen zu „Geld“",
      description: "Übe die Verwendung des Wortes „Geld“.",
      href: "/practice?word=geld",
    },
    betterUnderstanding: [
      {
        id: "geld-resource-1",
        title: "Geld im Alltag",
        description: "Typische Ausdrücke rund um Geld.",
        type: "context",
        href: "#",
      },
    ],
    relations: {
      synonyms: [
        {
          wordId: "kohle",
          word: "Kohle",
          level: "B1",
          note: "Umgangssprachlich für Geld.",
        },
      ],
      antonyms: [],
      relatedWords: [
        {
          wordId: "bezahlen",
          word: "bezahlen",
          level: "A1",
          relation: "verb",
        },
        {
          wordId: "kosten",
          word: "kosten",
          level: "A1",
          relation: "verb",
        },
      ],
    },
    metadata: {
      category: ["Alltag", "Wirtschaft"],
      isSaved: false,
      popularity: 99,
    },
  },
  {
    id: "word-zeit",
    word: "Zeit",
    article: "die",
    wordType: "Name",
    level: "A1",
    pronunciation: {
      ipa: "t͡saɪ̯t",
      text: "تْسایْت",
    },
    definitions: [
      {
        id: "zeit-meaning-1",
        german: "die Dauer, in der etwas geschieht",
        persian: "زمان؛ مدت زمانی که چیزی اتفاق می‌افتد",
        context: "Alltag / Zeit",
        examples: [
          {
            id: "zeit-example-1",
            german: "Wie spät ist es?",
            persian: "ساعت چند است؟",
            context: "Alltag",
            audioUrl: null,
          },
          {
            id: "zeit-example-2",
            german: "Ich habe keine Zeit.",
            persian: "من وقت ندارم.",
            context: "Alltag",
            audioUrl: null,
          },
        ],
      },
    ],
    audio: {
      pronunciationUrl: null,
      placeholder: true,
    },
    videos: [
      {
        id: "zeit-video-1",
        title: "Zeit einfach erklärt",
        description: "Die Bedeutung von „Zeit“ mit einfachen Beispielen.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
    ],
    exercise: {
      id: "exercise-zeit",
      title: "Übungen zu „Zeit“",
      description: "Übe die Verwendung des Wortes „Zeit“.",
      href: "/practice?word=zeit",
    },
    betterUnderstanding: [
      {
        id: "zeit-resource-1",
        title: "Zeit im Alltag",
        description: "Typische Ausdrücke rund um Zeit.",
        type: "context",
        href: "#",
      },
    ],
    relations: {
      synonyms: [],
      antonyms: [],
      relatedWords: [
        {
          wordId: "Uhr",
          word: "Uhr",
          level: "A1",
          relation: "related",
        },
        {
          wordId: "Stunde",
          word: "Stunde",
          level: "A1",
          relation: "related",
        },
      ],
    },
    metadata: {
      category: ["Alltag", "Zeit"],
      isSaved: false,
      popularity: 100,
    },
  },
  {
    id: "word-verstehen",
    word: "verstehen",
    article: null,
    wordType: "verb",
    level: "A1",
    pronunciation: {
      ipa: "fɛɐ̯ˈʃteːən",
      text: "فِر‌شْتِه‌ن",
    },
    definitions: [
      {
        id: "verstehen-meaning-1",
        german: "den Sinn oder die Bedeutung von etwas erfassen",
        persian: "فهمیدن؛ درک معنی یا مفهوم چیزی",
        context: "Alltag / Kommunikation",
        examples: [
          {
            id: "verstehen-example-1",
            german: "Ich verstehe die Frage nicht.",
            persian: "من سوال را نمی‌فهمم.",
            context: "Alltag",
            audioUrl: null,
          },
          {
            id: "verstehen-example-2",
            german: "Verstehst du mich?",
            persian: "من را می‌فهمی؟",
            context: "Alltag",
            audioUrl: null,
          },
        ],
      },
    ],
    audio: {
      pronunciationUrl: null,
      placeholder: true,
    },
    videos: [
      {
        id: "verstehen-video-1",
        title: "Verstehen einfach erklärt",
        description: "Die Bedeutung von „verstehen“ mit einfachen Beispielen.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
    ],
    exercise: {
      id: "exercise-verstehen",
      title: "Übungen zu „verstehen“",
      description: "Übe die Verwendung des Verbs „verstehen“.",
      href: "/practice?word=verstehen",
    },
    betterUnderstanding: [
      {
        id: "verstehen-resource-1",
        title: "Konjugation von „verstehen“",
        description: "Präsens, Präteritum und Perfekt von „verstehen“.",
        type: "grammar",
        href: "#",
      },
    ],
    relations: {
      synonyms: [
        {
          wordId: "begreifen",
          word: "begreifen",
          level: "A2",
          note: "Etwas wirklich verstehen, tiefer gehend.",
        },
        {
          wordId: "kapieren",
          word: "kapieren",
          level: "B1",
          note: "Umgangssprachlich für verstehen.",
        },
      ],
      antonyms: [
        {
          wordId: "missverstehen",
          word: "missverstehen",
          level: "B1",
          note: "Falsch verstehen.",
        },
      ],
      relatedWords: [
        {
          wordId: "Verständnis",
          word: "Verständnis",
          level: "A2",
          relation: "noun",
        },
        {
          wordId: "verständlich",
          word: "verständlich",
          level: "A2",
          relation: "adjective",
        },
      ],
    },
    metadata: {
      category: ["Alltag", "Kommunikation"],
      isSaved: false,
      popularity: 95,
    },
  },
  {
    id: "word-schreiben",
    word: "schreiben",
    article: null,
    wordType: "verb",
    level: "A1",
    pronunciation: {
      ipa: "ˈʃʁaɪ̯bn̩",
      text: "شْرایْبِن",
    },
    definitions: [
      {
        id: "schreiben-meaning-1",
        german: "Wörter oder Zeichen auf Papier oder Bildschirm festhalten",
        persian: "نوشتن؛ ثبت کلمات یا نشانه‌ها روی کاغذ یا صفحه",
        context: "Alltag / Kommunikation",
        examples: [
          {
            id: "schreiben-example-1",
            german: "Ich schreibe einen Brief.",
            persian: "من یک نامه می‌نویسم.",
            context: "Alltag",
            audioUrl: null,
          },
          {
            id: "schreiben-example-2",
            german: "Sie schreibt einen Roman.",
            persian: "او یک رمان می‌نویسد.",
            context: "Kultur",
            audioUrl: null,
          },
        ],
      },
    ],
    audio: {
      pronunciationUrl: null,
      placeholder: true,
    },
    videos: [
      {
        id: "schreiben-video-1",
        title: "Schreiben einfach erklärt",
        description: "Die Bedeutung von „schreiben“ mit einfachen Beispielen.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
    ],
    exercise: {
      id: "exercise-schreiben",
      title: "Übungen zu „schreiben“",
      description: "Übe die Verwendung des Verbs „schreiben“.",
      href: "/practice?word=schreiben",
    },
    betterUnderstanding: [
      {
        id: "schreiben-resource-1",
        title: "Konjugation von „schreiben“",
        description: "Präsens, Präteritum und Perfekt von „schreiben“.",
        type: "grammar",
        href: "#",
      },
    ],
    relations: {
      synonyms: [
        {
          wordId: "notieren",
          word: "notieren",
          level: "A2",
          note: "Kurz aufschreiben.",
        },
        {
          wordId: "aufschreiben",
          word: "aufschreiben",
          level: "A1",
          note: "Etwas schriftlich festhalten.",
        },
      ],
      antonyms: [
        {
          wordId: "lesen",
          word: "lesen",
          level: "A1",
          note: "Gegensatz zur Schreibaktivität.",
        },
      ],
      relatedWords: [
        {
          wordId: "Schrift",
          word: "Schrift",
          level: "A1",
          relation: "noun",
        },
        {
          wordId: "Autor",
          word: "Autor",
          level: "A2",
          relation: "person",
        },
      ],
    },
    metadata: {
      category: ["Alltag", "Kommunikation"],
      isSaved: false,
      popularity: 94,
    },
  },
  {
    id: "word-kind",
    word: "Kind",
    article: "das",
    wordType: "Name",
    level: "A1",
    pronunciation: {
      ipa: "kɪnt",
      text: "کینْت",
    },
    definitions: [
      {
        id: "kind-meaning-1",
        german: "ein junger Mensch, der noch nicht erwachsen ist",
        persian: "کودک؛ انسان جوانی که هنوز بالغ نشده است",
        context: "Alltag / Familie",
        examples: [
          {
            id: "kind-example-1",
            german: "Das Kind spielt im Garten.",
            persian: "کودک در باغ بازی می‌کند.",
            context: "Alltag",
            audioUrl: null,
          },
          {
            id: "kind-example-2",
            german: "Wir haben zwei Kinder.",
            persian: "ما دو فرزند داریم.",
            context: "Familie",
            audioUrl: null,
          },
        ],
      },
    ],
    audio: {
      pronunciationUrl: null,
      placeholder: true,
    },
    videos: [
      {
        id: "kind-video-1",
        title: "Kind einfach erklärt",
        description: "Die Bedeutung von „Kind“ mit einfachen Beispielen.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
    ],
    exercise: {
      id: "exercise-kind",
      title: "Übungen zu „Kind“",
      description: "Übe die Verwendung des Wortes „Kind“.",
      href: "/practice?word=kind",
    },
    betterUnderstanding: [
      {
        id: "kind-resource-1",
        title: "Kind vs. Jugendlicher",
        description: "Der Unterschied zwischen Kind und Jugendlichem.",
        type: "comparison",
        href: "#",
      },
    ],
    relations: {
      synonyms: [
        {
          wordId: "jugendlicher",
          word: "Jugendlicher",
          level: "A2",
          note: "Für ältere Kinder/Teenager.",
        },
      ],
      antonyms: [
        {
          wordId: "Erwachsener",
          word: "Erwachsener",
          level: "A2",
          note: "Das Gegenteil von Kind.",
        },
      ],
      relatedWords: [
        {
          wordId: "Familie",
          word: "Familie",
          level: "A1",
          relation: "related",
        },
        {
          wordId: "Eltern",
          word: "Eltern",
          level: "A1",
          relation: "family",
        },
      ],
    },
    metadata: {
      category: ["Alltag", "Familie"],
      isSaved: false,
      popularity: 98,
    },
  },
  {
    id: "word-bleiben",
    word: "bleiben",
    article: null,
    wordType: "verb",
    level: "A1",
    pronunciation: {
      ipa: "ˈblaɪ̯bn̩",
      text: "بْلایْبِن",
    },
    definitions: [
      {
        id: "bleiben-meaning-1",
        german: "an einem Ort verweilen, nicht weggehen",
        persian: "ماندن؛ در یک مکان بودن، نرفتن",
        context: "Alltag / Bewegung",
        examples: [
          {
            id: "bleiben-example-1",
            german: "Ich bleibe zu Hause.",
            persian: "من در خانه می‌مانم.",
            context: "Alltag",
            audioUrl: null,
          },
          {
            id: "bleiben-example-2",
            german: "Wir bleiben noch eine Stunde.",
            persian: "ما یک ساعت دیگر می‌مانیم.",
            context: "Alltag",
            audioUrl: null,
          },
        ],
      },
    ],
    audio: {
      pronunciationUrl: null,
      placeholder: true,
    },
    videos: [
      {
        id: "bleiben-video-1",
        title: "Bleiben einfach erklärt",
        description: "Die Bedeutung von „bleiben“ mit einfachen Beispielen.",
        provider: "self-hosted",
        videoUrl: null,
        thumbnailUrl: null,
        isPlaceholder: true,
        generatedByAI: true,
      },
    ],
    exercise: {
      id: "exercise-bleiben",
      title: "Übungen zu „bleiben“",
      description: "Übe die Verwendung des Verbs „bleiben“.",
      href: "/practice?word=bleiben",
    },
    betterUnderstanding: [
      {
        id: "bleiben-resource-1",
        title: "Konjugation von „bleiben“",
        description: "Präsens, Präteritum und Perfekt von „bleiben“.",
        type: "grammar",
        href: "#",
      },
    ],
    relations: {
      synonyms: [
        {
          wordId: "verweilen",
          word: "verweilen",
          level: "B1",
          note: "Formaler Ausdruck für bleiben.",
        },
        {
          wordId: "übernachten",
          word: "übernachten",
          level: "A2",
          note: "Besonders für die Nacht.",
        },
      ],
      antonyms: [
        {
          wordId: "gehen",
          word: "gehen",
          level: "A1",
          note: "Das Gegenteil von bleiben.",
        },
        {
          wordId: "weggehen",
          word: "weggehen",
          level: "A1",
          note: "Einen Ort verlassen.",
        },
      ],
      relatedWords: [
        {
          wordId: "Aufenthalt",
          word: "Aufenthalt",
          level: "A2",
          relation: "noun",
        },
        {
          wordId: "bleibend",
          word: "bleibend",
          level: "B1",
          relation: "adjective",
        },
      ],
    },
    metadata: {
      category: ["Alltag", "Bewegung"],
      isSaved: false,
      popularity: 89,
    },
  },
];
