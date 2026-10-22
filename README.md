# AZ-900 Practice Lab (Unofficial)

Unofficial study tool. Not affiliated with or endorsed by Microsoft. Questions are original and follow the public AZ-900 skills outline on Microsoft Learn.

## Run

Open `index.html` in a browser. No build step or server needed.

## Files

- `index.html`: page shell
- `styles.css`: design tokens, light/dark theme, layout
- `questions.js`: question bank (edit this to add content)
- `app.js`: quiz logic, feedback, streaks, confetti, progress saving

## Add a question

In `questions.js`, add to `RAW`:
`["gov", "Question text?", [["Option A", "Wrong: why"], ["Option B", "Right: why"]], 1]`
The last number is the index of the correct option. Topic keys are defined in `T`.

## Host

Upload the folder to GitHub Pages, Netlify or Cloudflare Pages.
