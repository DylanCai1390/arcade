import { describeMove, hasMoves, spawn } from '@wenjuncai1390/arcade-core';

const SIZE = 4;
const WINNING_TILE = 2048;

function toBoard(tiles) {
  const board = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
  for (const tile of tiles) board[tile.row][tile.col] = tile.value;
  return board;
}

class Game {
  tiles = $state([]);
  score = $state(0);
  best = $state(0);
  keepPlaying = $state(false);

  board = $derived(toBoard(this.tiles));
  started = $derived(this.tiles.length > 0);
  won = $derived(this.tiles.some((tile) => tile.value >= WINNING_TILE));
  over = $derived(this.started && !hasMoves(this.board));
  paused = $derived(this.over || (this.won && !this.keepPlaying));

  #nextId = 1;

  newGame() {
    this.tiles = [];
    this.score = 0;
    this.keepPlaying = false;
    this.#addTile();
    this.#addTile();
  }

  continuePlaying() {
    this.keepPlaying = true;
  }

  play(direction) {
    if (this.paused) return;

    const result = describeMove(this.board, direction);
    if (!result.changed) return;

    const byPosition = new Map(this.tiles.map((tile) => [`${tile.row},${tile.col}`, tile]));
    const tiles = [];
    for (const { from, to, merged } of result.moves) {
      if (merged) continue;
      const tile = byPosition.get(`${from.row},${from.col}`);
      tiles.push({ ...tile, row: to.row, col: to.col, value: result.board[to.row][to.col] });
    }

    this.tiles = tiles;
    this.score += result.points;
    this.best = Math.max(this.best, this.score);
    this.#addTile();
  }

  #addTile() {
    const before = this.board;
    const after = spawn(before);
    after.forEach((row, r) =>
      row.forEach((value, c) => {
        if (before[r][c] === 0 && value !== 0) {
          this.tiles.push({ id: this.#nextId++, value, row: r, col: c });
        }
      }),
    );
  }
}

export const game = new Game();
