# Wenjun Cai’s Arcade

A small, growing collection of browser games, plus a little about the person who built them. This first version is a static site made with HTML and CSS only, with zero JavaScript. Its centerpiece is a playable 5×5 mini crossword.

- **Live site:** https://dylancai1390.github.io/arcade/
- **Repository:** https://github.com/DylanCai1390/arcade

CS 5610 Web Development, Fall 2026, Project 1: The Arcade.

## Pages

| Page | Path | What it holds |
| --- | --- | --- |
| Home | `/` | Intro, player card, game library, and how the site is built |
| Mini Crossword | `/game/` | The playable puzzle, clues, instructions, and a solution reveal |
| About | `/about/` | Experience, education, projects, and skills |
| Contact | `/contact/` | Email, LinkedIn, and GitHub |

## Project structure

```
arcade/
├── index.html            Home page
├── home.css              Home page styles
├── game/
│   ├── index.html        Mini crossword
│   └── game.css
├── about/
│   ├── index.html
│   └── about.css
├── contact/
│   ├── index.html
│   └── contact.css
├── styles/
│   └── main.css          Shared styles: design tokens, base, nav, footer, components
└── assets/
    ├── fonts/            Self-hosted WOFF2 files and their licenses
    └── images/           Pixel-art avatar and logo (SVG)
```

Shared CSS lives in `styles/`, and each page keeps its own stylesheet next to its HTML. Every page loads `main.css` first, then its own file.

## The crossword

The grid is a CSS Grid of 25 squares. Each open square is a `<label>` wrapping an `<input maxlength="1">`, and each input has an accessible name such as “Row 2, column 1. 5 Across, letter 1 of 5. 5 Down, letter 1 of 4.” Its clues are linked through `aria-describedby`, so screen reader users hear the clue text too.

Everything interactive is done without scripting:

| Feature | How it works |
| --- | --- |
| Typing and moving | Native text inputs. Tab and Shift+Tab move between squares. To change a letter, delete it first, or Tab into the square so its letter is selected. |
| Current clue bar | `:has()` shows the focused square’s across and down clues above the grid. The bar sticks under the header, so it stays visible above the phone keyboard. |
| Word and clue highlighting | `:has()` + `:focus-within` light up the current across word and both of the focused square’s clues. |
| Show mistakes | Each input has a one-letter `pattern` (for example `[Ss]`). With the checkbox on, `:invalid` squares get a red letter and a diagonal slash. |
| Level clear | `.puzzle:not(:has(.cell-input:invalid))` swaps the status message and lights up the board. |
| Clear grid | A native `<button type="reset">` inside the form. |
| Reveal solution | A `<details>`/`<summary>` element, so it works with mouse, keyboard, and touch. |

The puzzle is original to this site.

## Design system

All colors, type sizes, and spacing are custom properties defined once at the top of `styles/main.css`.

| Token | Value | Why |
| --- | --- | --- |
| `--color-neutral-950` (background) | `#0e1116` | Near-black slate. It reads as an arcade cabinet but is softer on the eyes than pure black. |
| `--color-neutral-900` / `800` / `700` | `#161b22` / `#21262d` / `#30363d` | Surfaces, raised surfaces, and borders. Small steps create depth without extra hues. |
| `--color-neutral-400` (muted text) | `#9da7b3` | Secondary text, at 7.8:1 contrast on the background. |
| `--color-neutral-100` (text) | `#e6edf3` | Body text, at 16:1 contrast. |
| `--color-neutral-50` (paper) | `#f5f3ea` | Crossword squares. Warm off-white, like newsprint. |
| `--color-accent` | `#ffd23f` | The single accent, a classic arcade “coin” yellow. It is 13:1 on the background, so it works as text, buttons, and the focus ring. |
| `--color-accent-soft` | `#fff3c4` | A pale tint of the accent, used only to highlight the active crossword word. |
| `--color-error` | `#b42318` | Wrong-letter feedback only. 5.9:1 on the paper squares, always paired with a slash shape. |
| Type scale | 0.75 → 2.75rem | A major third (1.25 ratio) from an 18px base. |
| Spacing scale | 0.25 → 4rem | 4px steps: `--space-1` to `--space-8`. |
| `--measure` | `65ch` | Caps line length for comfortable reading. |
| `--tap-target` | `2.75rem` (44px) | Minimum size for every link, button, and square. |

**Typefaces**

- **Pixelify Sans** is used only for the logo, page titles, labels, and buttons. It brings the arcade feel without being used for long text.
- **Atkinson Hyperlegible** is used for everything else. The Braille Institute designed it so that easily confused letters like I, l, and 1 stay distinct, which matters for a word puzzle.

**Pixel details**

The site uses square corners, offset “pixel” shadows, and buttons that lift on hover and press down when clicked. The logo, avatar, and icons are drawn on a 16×16 or 32×32 grid and rendered with `crispEdges`.

## Accessibility

- A skip link, landmarks (`header`, `nav`, `main`, `footer`), and one `h1` per page with a real heading outline. The About page uses h1 through h6.
- A deliberate `:focus-visible` style everywhere: a 3px yellow ring, or a yellow fill with a dark inner ring on crossword squares.
- The current page is marked with `aria-current="page"` and a yellow bar, so it is not shown by color alone.
- All text meets WCAG AA contrast (4.5:1 or better).
- Tap targets are at least 44×44px, including the crossword squares.
- Animations are short, never loop forever, and are disabled under `prefers-reduced-motion`.

## Responsive behavior

The layout is mobile first and tested at 320px (phone) and 864px (desktop). Below 40rem, the title stays pinned at the top and the page links move to a tab bar fixed at the bottom of the screen, with matching padding so it never covers content. From 40rem up, a single sticky bar holds the title and links.

## Validation

- All four pages pass the [W3C Nu HTML Checker](https://validator.w3.org/nu/) with no errors or warnings.
- All five stylesheets pass the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).

## Credits

- **Fonts:** [Atkinson Hyperlegible](https://www.brailleinstitute.org/freefont/) by the Braille Institute and [Pixelify Sans](https://github.com/eifetx/Pixelify-Sans) by Stefie Justprince. Both are self-hosted under the SIL Open Font License 1.1 (see `assets/fonts/`).
- **Brand icons:** The GitHub and LinkedIn marks are from [Font Awesome Free](https://fontawesome.com) 6.7.2, licensed CC BY 4.0.
- **Crossword words:** The answers were picked from common English words in [google-10000-english](https://github.com/first20hours/google-10000-english).
- **Pixel art:** The avatar, logo, social preview image, and game and navigation icons are original to this site.
- **Visual inspiration:** The 8-bit portfolio style was inspired by [Pixel-Portfolio-Webite](https://github.com/bearlike/Pixel-Portfolio-Webite) by bearlike (MIT). No code was copied.
- **Development:** Built with assistance from Claude.
