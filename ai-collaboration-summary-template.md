# AI collaboration summary

## Planning conversation

- Yes, the agent read my files first — it mentioned the `greeting.js` placeholder and the file layout from `docs/tutorials/dev-tooling-overview.md` before suggesting anything.
- Its first observation was that `app.js` imported from `greeting.js` which was just a placeholder, and that I needed to replace the whole wiring layer once I had real data.
- I pushed back when it wanted to put the filter logic inside `app.js`. I told it the rules say matching logic has to stay out of the DOM file. It adjusted and moved everything to `matching.js`.

## Build conversation

- I kept the `getAdviceByMood` function almost exactly as the agent wrote it — the filter is simple and clean.
- I redid the `renderAdvice` function because the agent used `innerHTML` with a template literal that included `item.text`. That violates the AGENTS.md rule about using `textContent` for data values. I switched it to `createElement` and `textContent`.
- I had one lint error on first run — a missing semicolon the agent left out. Prettier fixed it automatically on commit.

## AGENTS.md modifications

- I added: "Always ask me what the data shape looks like before writing any filter or render function."
- I added: "Never use innerHTML to insert data from the dataset — always use createElement and textContent."
- I added: "When I ask you to refactor something, show me a diff or explain what changed line by line."
- The agent did follow the innerHTML rule after I added it — it suggested createElement on its own in a later step without me having to remind it.

## Reflection

- I was surprised that the agent caught a separation-of-concerns issue before I even asked. I expected it to just start writing code.
- Next time I would write my personal AGENTS.md instructions before starting the build conversation, not after.
- I learned that I work better when I see small pieces one at a time — I kept asking the agent to slow down and show one function at a time.
