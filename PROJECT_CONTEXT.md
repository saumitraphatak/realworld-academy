# Project Context: realworld-academy

## Short Description
A static learning portal for practical life knowledge: finance, health, history, geography, science, psychology, philosophy, home skills, books, puzzles, and meditation.

## What This Repo Is For
This repo is a self-education website organized around useful real-world literacy. The goal is to make broad, practical knowledge feel approachable and structured, especially for someone who wants to learn outside a formal class.

## Current Shape
- Static HTML/CSS/JS site.
- Homepage: `index.html`.
- Topic pages live in `pages/`.
- Shared styling: `css/styles.css`.
- Navigation and resources scripts: `js/nav.js`, `js/resources.js`.
- SEO/AI files: `llms.txt`, `llms-full.txt`, `robots.txt`, and `sitemap.xml`.
- Google site verification file is present.

## Design Intent
This should feel like a calm, organized academy, not a content farm. Pages should help users choose what to learn next, understand why it matters, and leave with a practical next action.

## Maintenance Notes
- Keep resource lists curated; avoid turning pages into undifferentiated link dumps.
- If adding new topics, update navigation, homepage links, and `sitemap.xml`.
- Where topics can affect health, finance, or legal decisions, use careful language and encourage primary sources or professionals.

## Local Preview
Open `index.html` directly in a browser. No build step is currently required.

## Good Future Improvements
- Add learning paths by time commitment: 30 minutes, one weekend, one month.
- Add progress/checklist features if the site becomes more app-like.
- Add citations or source notes to each page.
- Add a recommended first curriculum for adults starting from scratch.
