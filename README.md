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
- `links.md`: retained for old direct links; intentionally absent from navigation

Edit `_config.yml` to change the author profile, website URL, or theme settings.
Edit `_data/navigation.yml` to change the shared menus.
Small visual adjustments belong in `assets/css/main.scss`.
Photos are stored in `assets/images/`.

## Archived seminars

Seminars have moved to https://sites.google.com/view/hy-combinatorics-seminar.
The local seminar pages and navigation entries have been removed.

- `archive/seminars-google-sites.txt`: all 21 earlier announcements as plain text,
  including abstracts, schedules, and related link URLs
- `archive/seminars/`: original Markdown event files retained as a local backup

The entire `archive/` directory is excluded from Jekyll publishing.

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
from the corresponding pages on `http://ojkwon.com/` on 2026-10-16. The local seminar backup contains all 21 events then listed, including their
full abstracts, schedules, and related links. Other profile and research text was carried over
from the previous homepage.
