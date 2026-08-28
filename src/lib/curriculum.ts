import { grammar, kanji, lessons, quiz, roadmap, vocabulary } from '../data/curriculum';
import dailyAdditions from '../data/daily-additions.json';
import { kanaCount } from '../data/kana';
import { foundationKanji } from '../data/kanji-memory';

export type Lesson = (typeof lessons)[number];
export type VocabularyItem = (typeof vocabulary)[number];
export type KanjiItem = (typeof kanji)[number];
export type GrammarItem = Lesson['grammar'][number];
export type QuizQuestion = (typeof quiz)[number];
export type RoadmapStage = (typeof roadmap)[number];
export type DailyAddition = (typeof dailyAdditions)[number];

// Keep the original Day 2 starter lesson as the active guided lesson while
// automated daily drops grow alongside it through GitHub Actions.
export const activeLesson = lessons[1] ?? lessons[0];
export const latestDailyDrops = dailyAdditions.slice(0, 6);

export const homeStats = [
  ['13', 'interactive rooms'],
  [String(kanaCount), 'kana pairs'],
  [String(vocabulary.length), 'vocab cards'],
  [String(foundationKanji.length), 'kanji cards']
] as const;

export const featureCards = [
  ['あ', 'Kana Memory Lab', 'Read all 46 basic hiragana and katakana sounds with audio.'],
  ['言', 'Kotoba Memory', 'Hear, recall, reveal, and grade foundation vocabulary cards.'],
  ['字', 'Kanji Readings', 'Memorize 20 N5 kanji through readings, words, and spoken examples.'],
  ['聴', 'Listening Audio', 'Play slow and natural Japanese MP3 tracks for shadowing.'],
  ['問', 'JLPT Practice', 'Practice original N5 and N4 questions in exam-style sessions.'],
  ['復', 'Spaced Review', 'Save difficult kana, kotoba, and kanji for repeated recall.']
] as const;

export const progressAreas = [
  ['Hiragana/Katakana', 5],
  ['Vocabulary', 20],
  ['Kanji', 4],
  ['Grammar', 4],
  ['Reading', 2],
  ['Listening', 2],
  ['Writing', 2],
  ['Speaking', 2],
  ['JLPT N5 Readiness', 1]
] as const;

export const reviewDueCount = vocabulary.slice(0, 5).length;

export { dailyAdditions, grammar, kanji, lessons, quiz, roadmap, vocabulary };
