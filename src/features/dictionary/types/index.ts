export interface Root {
  id: string;
  word: string;
  article: string | null;
  wordType: string;
  level: string;
  pronunciation: Pronunciation;
  definitions: Definition[];
  audio: Audio;
  videos: Video[];
  exercise: Exercise;
  betterUnderstanding: BetterUnderstanding[];
  relations: Relations;
  metadata: Metadata;
}

export interface Pronunciation {
  ipa: string;
  text: string;
}

export interface Definition {
  id: string;
  german: string;
  persian: string;
  context: string;
  examples: Example[];
}

export interface Example {
  id: string;
  german: string;
  persian: string;
  context: string;
  audioUrl: string | null;
}

export interface Audio {
  pronunciationUrl: string | null;
  placeholder: boolean;
}

export type VideoProvider = "youtube" | "aparat" | "self-hosted";

export interface Video {
  id: string;
  title: string;
  description: string;

  provider: VideoProvider;

  videoId?: string;
  videoUrl?: string | null;

  thumbnailUrl: string | null;

  isPlaceholder: boolean;
  generatedByAI: boolean;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface BetterUnderstanding {
  id: string;
  title: string;
  description: string;
  type: string;
  href: string;
}

export interface Relations {
  synonyms: Synonym[];
  antonyms: Antonym[];
  relatedWords: RelatedWord[];
}

export interface Synonym {
  wordId: string;
  word: string;
  level: string;
  note: string;
}

export interface Antonym {
  wordId: string;
  word: string;
  level: string;
  note: string;
}

export interface RelatedWord {
  wordId: string;
  word: string;
  level: string;
  relation: string;
}

export interface Metadata {
  category: string[];
  isSaved: boolean;
  popularity: number;
}
