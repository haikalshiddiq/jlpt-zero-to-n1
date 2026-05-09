import { grammar, kanji, lessons, quiz, roadmap, vocabulary } from '../data/curriculum';
import dailyAdditions from '../data/daily-additions.json';

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
  ['12', 'interactive rooms'],
  [String(vocabulary.length), 'vocab cards'],
  [String(kanji.length), 'kanji seeds'],
  [String(latestDailyDrops.length), 'CI/CD drops']
] as const;

export const featureCards = [
  ['🎯', 'Daily Lessons', 'Guided missions with review, input, output, and homework.'],
  ['⚡', 'Vocabulary Flashcards', 'Click-to-reveal cards for fast active recall.'],
  ['🧩', 'Kanji Mastery', 'Radical-aware kanji packs and compound vocabulary.'],
  ['🏆', 'JLPT Practice', 'Quiz-style drills inspired by playful classroom platforms.'],
  ['🔁', 'Spaced Review', 'Local review queue for repeated mastery.'],
  ['📈', 'Progress Arena', 'Track readiness and unlock the next stage.']
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
