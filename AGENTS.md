# AGENTS.md

## What this is

Static bilingual (Arabic/English) personal fitness site — no build step, no package manager, no framework. Just HTML + vanilla JS + CSS served as-is.

## Structure

- `app.js` — shared data (workout split with images, meals, motivation), i18n, nav/header rendering, localStorage helpers. Every page loads it.
- `style.css` — single stylesheet, dark theme with CSS custom properties.
- `index.html` — home/dashboard (profile, countdown, stats, progress, nutrition snapshot, single daily quote, before-photos).
- `workout.html` — workout day detail: exercise cards with local illustrations + sets×reps.
- `diet.html` — meal options with random-pick feature.
- `log.html` — daily log form, submits to Formspree, also saves to localStorage (`ak_daily_logs`).
- `workout.html` has a "تسجيل التمرين" button that writes to `ak_workout_records` for today's date (de-duplicated by date; disables after logging).
- `motivation.html` — standalone motivation quotes page (motivation quotes also feed the homepage's single quote card).
- `assets/exercises/*.svg` — local exercise illustrations (transparent 512×512 SVGs), plus `LICENSES.md`/`ATTRIBUTION.md`/`LICENSE` (CC BY-SA 4.0 assets, MIT code) from the open **workout-guide** library. Do not hotlink external exercise images.

## Key conventions

- **Bilingual everywhere**: every text node has a `.i18n-ar` / `.i18n-en` pair. Language is toggled via CSS classes (`body.lang-ar` / `body.lang-en`), not JS templating. New text must follow this pattern.
- **Default language is Arabic** (`currentLang()` returns `'ar'`).
- **No build or transpilation** — edit files directly, open in browser.
- **All user data is localStorage** — keys: `ak_lang`, `ak_current_day`, `ak_daily_logs` (daily form), `ak_workout_records` (training-day log: array of `{date:'YYYY-MM-DD', day:Number, completed:true}`, one record per calendar date). Duplicate clicks on the same date do NOT create duplicates.
- **Before photos are STATIC developer-controlled assets**, not uploads — drop `before-1.jpg`, `before-2.jpg`, `before-3.jpg` into `assets/before/`; `index.html` references them directly. There is NO file input, localStorage, or base64 for before photos. Do not add upload UI.
- **Profile constants** live in the `PROFILE` object at the top of `app.js` (name, weight, height, age, goal, photo, `challengeStart`/`challengeDays` for the 30-day countdown). Name/gender/weight changes should be made there, not per-page.
- **Day selection is manual** — user picks which split day is "today" via the day picker; it is not computed from the date.
- **Log form posts to Formspree** (`xqpkeadb`) and also saves locally. The Formspree endpoint is hardcoded in `log.html`.
- **Profile photo**: `photo_2026-08-31_00-43-55.jpg` referenced in `app.js` and `index.html`, with `onerror="this.remove()"` fallback to initials.
- **Fonts**: Google Fonts — Cairo (Arabic) and Inter (English). Loaded via `<link>` in each HTML file.

## Adding content

- To add a workout day or exercise: edit the `DAYS` array in `app.js`. Each exercise is a structured object under `day.ex`: `{ id, en, ar, sets }` where `en`/`ar` are the names and `sets` holds "Sets×Reps" (e.g. `'4×8–10'`). The `id` must be a key in the `EX_IMAGE` map (or be intentionally imageless, as the rest day items are).
- Exercise images: the `EX_IMAGE` map in `app.js` maps each exercise `id` to a local SVG under `assets/exercises/*.svg` (copied from the workout-guide library). To change an exercise's image, either edit the SVG there or point the id at another existing file. `workout.html` renders each exercise as a card with the image + name + sets×reps; missing map entries safely render image-less.
- To add a meal option: edit the `MEALS` array in `app.js`. Order matters — `snack1` (pre-training) and `snack2` (post-training) sit between the three main meals.
- To add a motivational quote: edit the `MOTIVATION` object in `app.js`. `MOTIVATION.serious[0]` is what the homepage's daily quote card picks.
- New pages: copy any existing HTML file's `<head>` block (font links, CSS) and call `renderHeader()` + `renderNav()` in a `<script>` at the bottom.

## Current content (bulk / mass-gain, 30-day challenge)

- Split: 5 training days (`chest`, `back`, `legs`, `shoulders`, `upper`) + a `restcardio` rest day.
- Goal is **bulk (ضخامة)** starting weight 58kg; profile weight/height/age shown on the homepage and countdown reads from `PROFILE.challengeStart`. Update those numbers in `PROFILE`, not in the HTML stat cards.
- Homepage = clean dashboard: profile, 30-day countdown, weight/height/goal stats, progress bars (from `ak_workout_records`), nutrition snapshot, a single daily quote card, and a 3-card static "before photos" section (`assets/before/before-*.jpg`). Keep the homepage serious — no joke lists here.
