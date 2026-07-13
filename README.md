# ProjectX Hub — Courses

A full course platform: 500 courses, real lesson content, an 80%-completion gate, a
10-question quiz, premium course locking, and a verifiable certificate on pass.
Built with Next.js + Tailwind, ready to push to GitHub and deploy on Vercel.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy (GitHub + Vercel)

```bash
git init
git add .
git commit -m "ProjectX Hub courses"
git remote add origin <your-github-repo-url>
git push -u origin main
```

Then on vercel.com: **New Project → Import your GitHub repo → Deploy.** No config needed,
Vercel detects Next.js automatically.

## How the 500 courses work — read this before you present it as "500 courses"

Being straight with you here so nothing surprises you later:

- **12 flagship courses** (in `data/flagshipCourses.js`) are fully hand-written: real
  multi-lesson explanations and real, specific 10-question quizzes. These are genuinely
  good and ready to show anyone.
- **The remaining ~488 courses** are generated (`data/courses.js`) from a topic bank
  (`data/topics.js`) covering 12 tracks — AI, Web Dev, Programming, Business,
  Cybersecurity, Marketing, Data Science, Design, Cloud, Mobile, DevOps, Finance.
  Their lessons and quizzes use a structured template that's genuinely educational
  (not lorem-ipsum filler) but not as deep as the flagship courses.

**To grow real quality over time:** write a new course object in the same shape inside
`flagshipCourses.js` and use the exact same `id` as the generated course you're replacing
(slug of track key + title) — it will automatically override the generated version
everywhere in the app. This is the intended way to scale from 12 to 500 real courses
without a rewrite.

## How progress, unlocking, and certificates work right now

Everything (lesson progress, premium unlocks, issued certificates) is stored in the
browser's `localStorage` — see `lib/progress.js`. That means:

- ✅ Fully working end-to-end demo, zero backend needed, deploys instantly.
- ⚠️ Certificates only verify on the **same browser/device** that earned them. If
  someone else visits `/verify` from their own phone, they won't find a certificate
  issued on your laptop.

### Upgrading to a real backend (recommended before sharing widely)

Since you've already built with Supabase before (Naxsora, Team Hub), the fastest
upgrade path is:

1. Create two tables: `certificates` (id, name, course_id, course_title, track, date)
   and `course_progress` (user_id, course_id, completed_lessons, quiz_passed).
2. Replace the functions in `lib/progress.js` with Supabase calls
   (`supabase.from('certificates').insert(...)`, `.select()`, etc.) — the function
   signatures are already designed to make this a drop-in swap.
3. Add Supabase email/OTP auth (you've done this before) so progress persists per
   user across devices, not just per browser.

## Premium course payments

`components/PaywallModal.js` has a working UI (shows price, a UPI QR placeholder,
"I've Paid — Unlock" button) but currently unlocks on trust — there's no real payment
verification yet. The file has inline comments showing exactly where to wire in your
real UPI/Razorpay flow and a server-side confirmation step before unlocking. This
mirrors the approach you used in Naxsora AI.

## Design notes

Light, clean, card-based UI in the spirit of Google's Material-style products — blue
primary (#1A73E8), restrained accent colors tied to meaning (green = success/free,
amber = premium/locked, red = error), Inter for body text, generous whitespace,
rounded cards with soft shadows. Fully responsive down to mobile.

## Project structure

```
data/topics.js            → topic banks per track (12 tracks)
data/flagshipCourses.js   → hand-written real courses (lessons + quiz)
data/courses.js           → generates the full 500-course catalog
lib/progress.js           → progress / unlock / certificate storage (localStorage)
components/                → LessonView, QuizView, CertificateCard, PaywallModal, etc.
pages/index.js             → course catalog (search + filters)
pages/course/[id].js       → lessons → 80% gate → quiz → certificate
pages/verify.js            → certificate lookup by ID
pages/certificates.js      → "my certificates" on this device
```
