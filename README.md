# JLPT Zero to N1 Interactive Learning Platform

A premium interactive Japanese learning website for daily study from absolute zero to JLPT N1.

## Stack
- Astro static frontend
- Cloudflare Pages hosting
- Cloudflare Worker API
- GitHub Actions CI/CD
- LocalStorage progress/review state, future-ready for KV/D1

## Local Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Worker Development
```bash
npm run worker:dev
```

## Worker API
- `GET /api/lesson/today`
- `GET /api/lessons`
- `GET /api/vocabulary?level=N5`
- `GET /api/kanji?level=N5`
- `GET /api/grammar?level=N5`
- `GET /api/progress`
- `POST /api/progress`
- `GET /api/review/due`
- `POST /api/review`

## Cloudflare/GitHub Secrets
Set these in GitHub repository secrets:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_PAGES_PROJECT_NAME`

## Deploy Manually
```bash
npm run build
npx wrangler pages deploy dist --project-name=<your-pages-project>
npx wrangler deploy --config worker/wrangler.toml
```

## Content Updates
Initial content lives in `src/data/curriculum.ts`. Add new daily lessons, vocabulary, kanji, grammar, reading, listening, and JLPT practice items there or migrate to Astro content collections as content volume grows.
