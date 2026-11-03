# Wenjun Cai’s Arcade

A growing collection of browser games, plus a little about the person who built them. Version 2 is a SvelteKit app with two games: the mini crossword from Project 1 and a new 2048. The 2048 rules live in a separate npm package.

- **Live site:** https://dylancai1390.github.io/arcade/
- **This repository:** https://github.com/DylanCai1390/arcade
- **Game logic package:** [@wenjuncai1390/arcade-core](https://www.npmjs.com/package/@wenjuncai1390/arcade-core) ([repository](https://github.com/DylanCai1390/arcade-core))

CS 5610 Web Development, Fall 2026, Project 2: 2048 and a Published Package.

## Pages

| Page | Path | What it holds |
| --- | --- | --- |
| Home | `/` | Intro, player card, and the game library |
| Mini Crossword | `/game/` | The Project 1 crossword, now built from Svelte components |
| 2048 | `/2048/` | The new game, with keyboard and on-screen controls |
| About | `/about/` | Experience, education, projects, and skills |
| Contact | `/contact/` | Email, LinkedIn, and GitHub |

## Project structure

```
src/
├── app.css                    Design tokens, fonts, and shared base styles
├── app.html
├── lib/
│   ├── assets/                Avatar and self-hosted fonts
│   ├── components/
│   │   ├── SiteHeader.svelte  Title and navigation
│   │   ├── SiteFooter.svelte
│   │   ├── PageHead.svelte    Title, description, and share tags per page
│   │   ├── Icon.svelte
│   │   ├── home/              PlayerCard, GameCard
│   │   ├── crossword/         Crossword, ClueList, CurrentClue, Solution
│   │   └── game2048/          Board, ScoreBoard, Controls, GameMessage
│   ├── crossword/puzzle.js    Puzzle data and clue numbering
│   ├── game2048/game.svelte.js  Shared 2048 game state
│   ├── icons.js
│   └── site.js                Navigation and social links
└── routes/                    One folder per page
static/                        Favicon and share image
```

## How the app uses the package

The 2048 rules are not in this repository. They come from `@wenjuncai1390/arcade-core`, installed from npm like any other dependency.

- `describeMove(board, direction)` gives the new board, the points earned, and where every tile went.
- `spawn(board)` adds the new 2 or 4 after each move.
- `hasMoves(board)` decides when the game is over.

The app keeps each tile as `{ id, value, row, col }`. After a move it follows each tile to its new square, so a tile keeps its `id` and the keyed `each` block moves it instead of rebuilding it.

## Svelte features used

| Requirement | Where |
| --- | --- |
| `$state`, `$derived`, `$props` | `game.svelte.js` (tiles, score, best, board, won, over), `Crossword.svelte` (active square and its clues), every component’s props |
| Keyed `each` block | 2048 tiles keyed by `tile.id` in `Board.svelte`; crossword squares, clues, and nav links |
| Components beyond routes | 14 components in `src/lib/components` |
| Callback props | `Controls` calls `onmove`, `GameMessage` calls `onrestart` and `oncontinue`; the page decides what happens |
| Scoped styles | Every component has its own `<style>` block |
| `class:` and `style:` directives | `Board.svelte` (`class:dark`, `style:--row`, `style:--col`), `Crossword.svelte` (`class:in-word`), `ClueList.svelte` (`class:active`) |
| Transitions | New and merged tiles use `scale`; the win and game-over message uses `fade` |
| Shared state in a `.svelte.js` file | `src/lib/game2048/game.svelte.js` is used by the 2048 page and by the home page’s best score |

Values that can be calculated from other state, such as the board, a win, or a game over, are `$derived`. The app does not use `$effect`.

## Accessibility and responsive design

- The whole site works with a keyboard alone, and focus is always visible.
- 2048 listens for the arrow keys. On narrow or touch screens, on-screen arrow buttons appear below the board.
- A visually hidden `aria-live` region announces the score and the end of the game. The board also has a text description of every row for screen readers.
- Every tile number meets at least 4.5:1 contrast with its tile. The lowest is 5.09:1, on the 512 tile.
- The board scales from 320px phones up to a 28rem maximum on wide screens, and every control is at least 44px.
- Animations are short, and the tile transitions are turned off when the visitor prefers reduced motion.

## Design

The site keeps the Project 1 design tokens: one coin-yellow accent, a slate neutral ramp, a 1.25 type scale, and a 4px spacing scale, all as custom properties in `src/app.css`.

The 2048 tiles use twelve shades of that same yellow hue, from `--tile-2` to `--tile-super`. They vary only in lightness: light tiles carry dark numbers, and the darkest tiles carry light numbers with a thin accent outline.

## Development

```sh
npm install
npm run dev
```

To build the site as GitHub Pages serves it:

```sh
BASE_PATH=/arcade npm run build
```

Every push to `main` builds the site and deploys it to GitHub Pages through `.github/workflows/deploy.yml`.

## Credits

- **Fonts:** [Atkinson Hyperlegible](https://www.brailleinstitute.org/freefont/) by the Braille Institute and [Pixelify Sans](https://github.com/eifetx/Pixelify-Sans) by Stefie Justprince, both self-hosted under the SIL Open Font License 1.1.
- **Brand icons:** The GitHub and LinkedIn marks are from [Font Awesome Free](https://fontawesome.com) 6.7.2, licensed CC BY 4.0.
- **Crossword words:** The answers were picked from common English words in [google-10000-english](https://github.com/first20hours/google-10000-english).
- **Pixel art:** The avatar, logo, social preview image, and game and navigation icons are original to this site.
- **Visual inspiration:** The 8-bit portfolio style was inspired by [Pixel-Portfolio-Webite](https://github.com/bearlike/Pixel-Portfolio-Webite) by bearlike (MIT). No code was copied.
- **2048:** The game is based on [2048](https://play2048.co/) by Gabriele Cirulli.
- **Development:** Built with assistance from Claude.
