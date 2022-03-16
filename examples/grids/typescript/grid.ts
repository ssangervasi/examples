/**
 * Output:
 * ---------⌝
 * ----------
 * ----?????-
 * ----------
 * ----------
 * --!!!-----
 * --!!!-----
 * ----------
 * ----------
 * ⌞---------
 */
const demo = () => {
  const n = 10;

  // Using a simple object is fine. A map doesn't add much functionality.
  const grid: Record<string, string | undefined> = {};

  // Assignment must use coordinate strings:
  grid[coord(0, 0)] = "⌞";
  grid[coord(n - 1, n - 1)] = "⌝";

  fill(grid, "!", [2, 3], [5, 5]);
  fill(grid, "?", [4, 7], [9, 8]);

  console.log(stringify(grid, n));
};

/**
 * Only strings work as object keys, and they're easy to debug.
 */
const coord = (x: number, y: number): string => `(${x}, ${y})`;

/**
 * You can use tuple arrays in typescript, but they'll have to be
 * converted to strings for any look-up.
 */
const fill = (
  grid: Record<string, string | undefined>,
  value: string,
  start: [number, number],
  stop: [number, number]
) => {
  for (let x = start[0]; x < stop[0]; x += 1) {
    for (let y = start[1]; y < stop[1]; y += 1) {
      grid[coord(x, y)] = value;
    }
  }
};

/**
 * Stringify with (0, 0) in the lower-left corner.
 */
const stringify = (
  grid: Record<string, string | undefined>,
  n: number
): string => {
  const rows = [];
  for (let y = n - 1; 0 <= y; y -= 1) {
    const row = [];
    for (let x = 0; x < n; x += 1) {
      row.push(coord(x, y) in grid ? grid[coord(x, y)] : "-");
    }

    rows.push(row);
  }

  return rows.map((row) => row.join("")).join("\n");
};

demo();
