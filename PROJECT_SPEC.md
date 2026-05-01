# Ready-to-Run Project Specification: JLPT Zero to N1 Interactive Learning Platform

## 1. Product Vision
Build a premium interactive Japanese learning website for Haikal Shiddiq S.Kom., M.T. that guides learners from absolute zero through JLPT N5, N4, N3, N2, and N1 with daily lessons, spaced repetition, flashcards, quizzes, kanji mastery, grammar practice, reading, listening simulations, speaking/writing prompts, homework, and progress tracking.

## 2. Owner and Repository
- Owner: Haikal Shiddiq S.Kom., M.T.
- GitHub username: haikalshiddiq
- Suggested repository: `jlpt-zero-to-n1`
- Frontend hosting: Cloudflare Pages
- Backend/API: Cloudflare Worker

## 3. Architecture
- Frontend: Astro static site with client-side interactivity
- Styling: responsive premium dashboard CSS with Japanese-inspired visual system
- Content: repo-native TypeScript/JSON-style data modules for lessons, vocabulary, kanji, grammar, and quiz data
- Worker: Cloudflare Worker exposing `/api/*` JSON endpoints
- User progress: browser LocalStorage first, Worker mock API fallback; future-ready for KV/D1
- CI/CD: GitHub Actions for CI, Cloudflare Pages deploy, and Worker deploy

## 4. Core Pages
- `/`: landing dashboard and lesson preview
- `/daily-lesson`: daily lesson layout with review, vocabulary, kanji, grammar, reading, listening, practice, JLPT quiz, homework
- `/roadmap`: Pre-N5 → N1 progression roadmap
- `/vocabulary`: flashcards with show/hide, level filtering, and review buttons
- `/kanji`: kanji mastery cards and mini quizzes
- `/grammar`: grammar builder with structures, examples, and mistakes
- `/reading`: level-based reading passages with hidden explanations
- `/listening`: text-based listening simulations with slow/natural versions
- `/practice`: writing/speaking prompt area with self-check
- `/jlpt-practice`: multiple-choice JLPT-style questions with feedback
- `/review`: spaced repetition dashboard using 1/3/7/14/30 day cadence
- `/progress`: progress bars and JLPT readiness tracking

## 5. Worker API
- `GET /api/lesson/today`
- `GET /api/lessons`
- `GET /api/vocabulary?level=N5`
- `GET /api/kanji?level=N5`
- `GET /api/grammar?level=N5`
- `POST /api/progress`
- `GET /api/progress`
- `POST /api/review`
- `GET /api/review/due`

## 6. Initial Content
### Day 1: Japanese From Zero
- あ い う え お
- Vocabulary: わたし, あなた, せんせい, がくせい, にほん, にほんご, はい, いいえ, そうです, ちがいます
- Kanji: 日, 本, 日本
- Grammar: `A は B です`, `A は B ですか`

### Day 2: Greetings, Nationality, and Language
- Greetings and self-introduction
- Vocabulary: おはようございます, こんにちは, こんばんは, ありがとう, ありがとうございます, すみません, はじめまして, よろしくおねがいします, なまえ, インドネシア
- Kanji: 人, 語
- Grammar: `Country + 人`, `Country + 語`

## 7. Deployment Requirements
Set these GitHub repository secrets before live deployment:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_PAGES_PROJECT_NAME`
- Optional: `CLOUDFLARE_WORKER_NAME`

## 8. Verification Checklist
- `npm install` succeeds
- `npm run build` succeeds
- Static pages generate in `dist/`
- Worker local/dev syntax is valid through Wrangler
- `/api/lesson/today` returns JSON after Worker deploy
- flashcards flip
- quiz feedback works
- review dashboard stores LocalStorage review items
- progress dashboard updates from LocalStorage
