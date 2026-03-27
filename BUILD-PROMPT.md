# Build prompt

I am building a mood-based advice app called "My Advice." Here is everything you need to generate the site.

## What the app does

The user picks a mood from a dropdown (stressed, unmotivated, overwhelmed, confident) and clicks a button. The app filters a local dataset and displays matching advice cards — no page reload, no external API.

## My data

My dataset comes from my "What Should I" project. Each item has:

```js
{ id: Number, mood: String, text: String, category: String }
```

Example items:

- `{ id: 1, mood: 'stressed', text: 'Take three slow breaths before deciding anything.', category: 'calm' }`
- `{ id: 3, mood: 'unmotivated', text: 'Start with two minutes. Just two.', category: 'action' }`
- `{ id: 5, mood: 'overwhelmed', text: 'Pick one task and close every other tab.', category: 'focus' }`
- `{ id: 7, mood: 'confident', text: 'Use this energy — tackle the thing you have been avoiding.', category: 'action' }`

Full dataset goes in `src/js/data.js`. Include at least 8 items covering all four moods.

## File structure required

```text
index.html           ← replace the placeholder
src/js/data.js       ← dataset only, no DOM
src/js/matching.js   ← filter logic only, no DOM
src/js/app.js        ← DOM wiring only, imports from matching.js
src/css/style.css    ← all styles
```

## Rules — read AGENTS.md before writing anything

- ES modules only (`import`/`export`)
- `querySelector` only — no `getElementById`
- `textContent` for all data values — no `innerHTML` with data variables
- No `eval()`, no `fetch()`, no `async`
- Logic in `matching.js` must not touch the DOM
- CSS custom properties for all colors using `hsl()` in a `:root` block
- Mobile-first layout with `min-width` media queries
- Semantic HTML: `<main>`, `<section>`, `<label>` linked to every input

## Visual style

Clean and calm. Muted greens and warm neutrals. Cards should stack vertically on mobile and wrap to a 2-column grid on wider screens. Each card shows the advice text and a small category tag.

## What to generate

Replace the placeholder files. Do not append to them. Generate all five files listed above.
