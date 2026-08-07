# ABTalks AI Interview Agent — PRD

## Original problem statement
Build a polished ABTalks AI Cohort technical interview platform, but keep this version free and local-first: no backend integration, no payments, no external AI/API calls, and scripted questions and scoring so it runs easily in VS Code and can be deployed as a static frontend.

## Architecture decisions
- React 19 + Create React App/CRACO frontend with JavaScript and Tailwind-compatible styling.
- Browser-only state: localStorage for candidate, mode, progress, responses, feedback, and theme.
- Deterministic interview engine with 8 scripted questions, answer keyword/depth rubric, and scripted follow-up prompts.
- No backend, database, authentication, payment provider, or AI SDK dependency.
- Uploaded curriculum/candidate/technical-spec concepts are represented in local data and inspectable through Admin; browser JSON upload supports local replacement/preview.

## User personas
- Cohort candidate practicing production-oriented AI engineering interviews.
- Mentor/reviewer scanning readiness, topic signals, and feedback.
- Admin configuring local JSON sources and reviewing the local scripted configuration.

## Core requirements (static)
- Landing page first with a clear Start interview CTA.
- Candidate picker sourced from cohort profile data.
- Mock Interview, Practice Mode, and Assessment Mode.
- Interview coverage across RAG, Prompt Engineering, Vector Databases, MCP, Agentic AI, AI Deployment, and Production Systems.
- At least 8 questions, follow-up behavior, progress, local scoring, feedback, export, responsive UI, theme toggle, and admin JSON upload/settings.

## Implemented (2026-08-07)
- Built dark-first editorial AI SaaS shell with light/dark toggle and responsive mobile menu.
- Added landing, candidate picker, dashboard, interview runner, feedback report, and admin workbench flows.
- Added 8-question scripted interview with deterministic scores, follow-up prompts, cohort-aware candidate signal, local persistence, and JSON feedback export.
- Added 8 candidate profiles, curriculum topic map, local-only technical spec preview, upload validation, and explicit LOCAL SCRIPTED MODE disclosure.
- Validated with production build, lint, browser replay across all eight questions, mobile viewport, theme, admin, export, and request isolation.

## Prioritized backlog
- P0: None remaining for the requested local-first demo.
- P1: Add richer curriculum upload shape validation and replace the current local candidate list after a valid upload.
- P1: Add printable report styling and a browser print/PDF action.
- P2: Add optional speech input/output using browser-native APIs, with clear availability states.
- P2: Add mentor analytics across saved local interview sessions.

## Next tasks
1. Test the experience with the full production candidates.json and curriculum.json through Admin uploads.
2. Tune scripted rubric keywords and follow-ups with mentor feedback.
3. Add print-friendly feedback export if a PDF artifact is needed.
