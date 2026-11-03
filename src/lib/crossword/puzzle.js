const SOLUTION = ['#STAR', 'ELITE', 'VILLA', 'IDEAL', 'LESS#'];
const SIZE = SOLUTION.length;

export const clues = {
  across: [
    { number: 1, text: 'Rating earned for clearing a level, up to three at a time' },
    { number: 5, text: 'Top tier, like the initials on a high-score table' },
    { number: 6, text: 'Luxury vacation rental' },
    { number: 7, text: 'Perfect, like a speedrunner’s route' },
    { number: 8, text: '“___ is more” (a minimalist design motto)' },
  ],
  down: [
    { number: 1, text: 'Playground chute, or one page of a presentation' },
    { number: 2, text: 'Numbered squares you merge in 2048' },
    { number: 3, text: 'Book of maps, or one image that packs every sprite in a game' },
    { number: 4, text: 'Not virtual' },
    { number: 5, text: 'Like most final bosses' },
  ],
};

const isOpen = (row, col) =>
  row >= 0 && row < SIZE && col >= 0 && col < SIZE && SOLUTION[row][col] !== '#';

function wordStart(row, col, dRow, dCol) {
  while (isOpen(row - dRow, col - dCol)) {
    row -= dRow;
    col -= dCol;
  }
  return { row, col };
}

function wordLength(start, dRow, dCol) {
  let length = 0;
  while (isOpen(start.row + length * dRow, start.col + length * dCol)) length += 1;
  return length;
}

function buildCells() {
  const numbers = new Map();
  let next = 1;
  for (let row = 0; row < SIZE; row += 1) {
    for (let col = 0; col < SIZE; col += 1) {
      const startsAcross = isOpen(row, col) && !isOpen(row, col - 1) && isOpen(row, col + 1);
      const startsDown = isOpen(row, col) && !isOpen(row - 1, col) && isOpen(row + 1, col);
      if (startsAcross || startsDown) numbers.set(`${row},${col}`, next++);
    }
  }

  const cells = [];
  for (let row = 0; row < SIZE; row += 1) {
    for (let col = 0; col < SIZE; col += 1) {
      const id = `${row}-${col}`;
      if (!isOpen(row, col)) {
        cells.push({ id, row, col, block: true });
        continue;
      }
      const acrossStart = wordStart(row, col, 0, 1);
      const downStart = wordStart(row, col, 1, 0);
      cells.push({
        id,
        row,
        col,
        block: false,
        letter: SOLUTION[row][col],
        number: numbers.get(`${row},${col}`) ?? null,
        across: numbers.get(`${acrossStart.row},${acrossStart.col}`),
        down: numbers.get(`${downStart.row},${downStart.col}`),
        acrossPosition: col - acrossStart.col + 1,
        downPosition: row - downStart.row + 1,
        acrossLength: wordLength(acrossStart, 0, 1),
        downLength: wordLength(downStart, 1, 0),
      });
    }
  }
  return cells;
}

export const cells = buildCells();

export function answer(direction, number) {
  const key = direction === 'across' ? 'across' : 'down';
  return cells
    .filter((cell) => !cell.block && cell[key] === number)
    .map((cell) => cell.letter)
    .join('');
}

export function wordLengthOf(direction, number) {
  return answer(direction, number).length;
}
