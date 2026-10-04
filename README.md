# Ahlul Khair Foundation — Online Class Registration

A single-page registration app for Ahlul Khair Foundation's online
**part-time and full-time** programs, for **adults and children**.

**Programs taught**

| Program | |
|---|---|
| Arabic Literacy | |
| Learning Qur'an Recitation | with good tajweed |
| Quranic Memorization | |
| Fiqihu | (Islamic Jurisprudence) |

## The public link

The app is published with GitHub Pages at:

**https://abayshatpy26.github.io/ahlul-khair-foundation/**

Anyone can open it on an Android phone, iPhone or computer — no account
and no sign-in needed. Share that link on WhatsApp, Facebook or by SMS.

## How a registration reaches the foundation

The form has no server. When someone submits it, the app builds their
full details into a WhatsApp message addressed to **+234702633370** and
shows a *Send on WhatsApp* button, with a *copy my details* fallback.
The registration arrives in the foundation's WhatsApp chat.

A copy is also saved in that person's own browser only — it is not sent
anywhere else and the foundation cannot read it.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole app — form, admin dashboard, styling, logic |
| `apps_script/create_form.gs` | Run once at script.google.com to generate the matching Google Form + response spreadsheet |

## Admin view

The **Admin** tab (demo passcode `1234`) previews the coordinator
dashboard: totals, programs requested, time-of-day demand, and a
filterable table with status tracking and CSV export. It only ever shows
registrations saved on the device you are using.

## Updating the app

Edit `index.html` and push to `master` — GitHub Pages redeploys the live
link automatically within a minute or two.

## Contact

- Phone / WhatsApp: **+234702633370**
- Gmail: **ahlulkhairfoundation.com**

*Connect Muslim with Quran Every Where You Go.*
