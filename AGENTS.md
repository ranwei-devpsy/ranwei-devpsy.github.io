# Academic website maintenance

## Project

This is Ran Wei's English academic website, built with Astro and published as static files on GitHub Pages. The source of truth is this repository. Preserve the accepted design and academic content during routine updates.

## First task in this repository

1. Read `README.md` and `docs/MAINTENANCE.md`.
2. Check the current branch, remote, and working tree before editing. Preserve unrelated changes. Derive the active repository from the remote.
3. Locate the content in the files listed below. Edit the source directly; never edit generated HTML in `dist/` or add a duplicate content source.
4. Apply the requested change, build, and review the affected page. For publication changes, check the displayed entry, APA text, and BibTeX together. Keep validation proportional to the change.
5. When asked to publish, commit and push to `main`, wait for the workflow result, and verify the affected public page. A local save or commit without a push does not update the website. State clearly whether the change is local, pushed, or successfully published.

The website address is `https://ranwei-devpsy.github.io/`. The workflow reads the Pages origin and base path at build time.

- Use Node.js 22.22.2. Install with `npm ci`, preview with `npm run dev`, and validate changes with `npm run build`.
- Updates pushed to `main` trigger `.github/workflows/deploy.yml`. The repository owner must select GitHub Actions in Settings → Pages once.
- Synchronize with the remote repository before editing. After an authorized publication, commit and push, check the Actions result, and verify the affected public page. If access or deployment settings prevent completion, report the exact remaining action.
- Keep the existing Astro and GitHub Pages setup during routine maintenance.

## Content and sources

- The public website is English-only. Use standard academic English appropriate for developmental and educational psychology, with factual, concise prose.
- Use information supplied by the faculty member or clearly verified public sources. Never invent dates, positions, awards, project status, author roles, bibliographic details, or DOI links. Keep unresolved additions out of the published site.
- Publish only content authorized for public access. Never commit private documents, account credentials, or private correspondence.
- Public documentation and commit messages should describe the current project and its maintenance. Do not include private discussions, account setup history, or unpublished reference material.
- The Harvard doctorate is a Ph.D. in Education. Preserve shared first and senior authorship designations; do not interpret them as corresponding authorship.
- Do not add downloadable documents without an explicit request and an approved public file.
- Preserve publication and talk titles and author names as published. Avoid promotional language, unnecessary metaphors, quoted emphasis, invented terminology, and contrastive copy such as turning X into Y or not X but Y.
- Update `profile.updatedISO` to the actual content revision date. A dependency or styling change alone does not change the academic content date.

## Files

- `src/data/profile.json`: contact details, identity, faculty URL, update date. Displayed identity and affiliation also appear in the English copy; update both when changing those fields.
- `src/data/publications.json`: publication records, selected entries, topics, public resource links, structured bibliography.
- `src/data/talks.json`: invited talks; titles and venues are stored under `en`.
- `src/lib/content.ts`: accepted English copy, research themes, course labels, educational history copy, interface text. The English homepage is served directly at `/`; section pages use `/research/`, `/publications/`, `/teaching/`, and `/about/`. Do not add a language prefix or a homepage redirect.
- `src/pages/`: page templates, appointment and degree dates, academic service lists.
- `src/lib/citations.ts`: APA text and BibTeX generation.
- `public/images/ran-wei.png`: portrait. Keep natural aspect ratio and flexible maximum dimensions; update intrinsic width and height when replacing it.

When editing publications, maintain consistency between displayed `details` and exported `bibliography`. Keep IDs unique and research-theme `paperIds` valid. The supported topic keys are `language`, `interaction`, `regulation`, `cognition`, and `ai`. Check the affected citation and download when bibliography data changes.

## Design and validation

- Keep the formal, restrained academic layout, typography, spacing, and responsive behavior. Preserve search, year and topic filters, citation exports, and email links.
- The site requires no server, database, CMS, or login service. Do not add these for routine maintenance.
- Use a production build and focused review of the changed content or behavior. Do not introduce a test framework, a smoke-test suite, or unnecessary defensive code for simple content updates.
- Never commit `node_modules/`, `.astro/`, or generated `dist/` files.
- Commit titles should summarize the change. Bodies should explain its motivation, relevant implementation decisions, effects, and completed validation without inventing context.
