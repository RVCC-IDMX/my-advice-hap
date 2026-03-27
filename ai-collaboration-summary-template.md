# AI collaboration summary

## Planning conversation

- Yes, the agent read my files first — it mentioned the placeholder in `greeting.js` and noted the file structure before suggesting anything.
- Its first observation was that `app.js` was importing from a placeholder file and would need to be completely replaced once I had real data.
- I pushed back when it wanted to put the filter logic inside `app.js`. I told it to keep logic out of the DOM file and it moved everything to `matching.js`.

## Build conversation

- I kept `getAdviceByMood` as-is — it is a clean one-liner filter.
- I asked the agent to redo the card rendering because it used `innerHTML` with data values. I switched it to `createElement` and `textContent`.
- I had one lint error on first run — a missing semicolon. The pre-commit hook caught it and Prettier fixed it automatically.

## AGENTS.md modifications

- I added instructions to explain functions before writing them, never write more than one at a time, and always explain lint errors before fixing them.
- I chose these because I kept getting lost when the agent wrote too much at once.
- The agent did slow down after I added them — it started checking in between each function.

## Reflection

- I was surprised the agent flagged a separation-of-concerns issue before I even asked about it.
- Next time I would set up my AGENTS.md personal instructions before starting the build conversation.
- I learned I work better with smaller pieces — I need to see one thing work before moving on.
