# O-joung Kwon — Jekyll homepage

The academic homepage at **https://ojoungkwon.github.io** uses Jekyll and the
[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) remote theme,
pinned to version 4.28.1. The original content, links, and presentation photos
have been retained. Existing `.html` page addresses still work.

## Editing content

- `index.md`: profile, positions, interests, grants, and education
- `research-team.md`: members, student papers, and presentation photos
- `research.md`: research topics
- `papers.md`: publications, preprints, theses, and manuscripts
- `presentations.md`: topics, talk timeline, and general talks
- `teaching.md`: semester-by-semester course list
- `seminar.md`: automatically generated seminar archive
- `_seminars/`: one Markdown file for each seminar event
- `links.md`: retained for old direct links; intentionally absent from navigation

Edit `_config.yml` to change the author profile, website URL, or theme settings.
Edit `_data/navigation.yml` to change the shared menus.
Small visual adjustments belong in `assets/css/main.scss`.
Photos are stored in `assets/images/`.

## Adding a seminar

Create a file such as `_seminars/2026-11-01-example.md`:

```markdown
---
title: "2026/11/1 · Seminar · Speaker (Affiliation)"
date: "2026-11-01"
event_id: seminar-28
---

**Title:** Talk title

**Speaker:** Speaker (Affiliation)

**Date:** November 1, 2026, 11:00

**Place:** Room, Hanyang University

**Abstract:** Write the abstract here.
```

The event is automatically added to `seminar.html` in reverse date order.
It also receives its own page at `/seminars/2026-11-01-example/`.
Use a unique `event_id` to preserve archive anchors. For events on the same day,
filenames determine the secondary order. An end date or multi-day schedule can
be written in the body; `date` is the first day used for sorting.

## Local preview

With a current Ruby installation and Bundler:

```sh
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000. Use `bundle exec jekyll build` for a build check.
Do not commit `_site/` or `vendor/`.

## GitHub Pages

Publish these source files in the repository serving `ojoungkwon.github.io`.
For GitHub's built-in Jekyll publishing, select **Settings → Pages → Build and
deployment → Deploy from a branch**, then select the publishing branch and
`/(root)`. Do not add `.nojekyll`, because this site needs Jekyll to build.

The domain settings are `url: "https://ojoungkwon.github.io"` and `baseurl: ""`.
If the repository is renamed or moved, update its Git remote separately.

## Content provenance

Research team, papers, presentations, teaching, and seminar content was copied
from the corresponding pages on `http://ojkwon.com/` on 2026-10-16. The seminar
archive contains all 21 events then listed, including their full abstracts,
schedules, and related links. Other profile and research text was carried over
from the previous homepage.
