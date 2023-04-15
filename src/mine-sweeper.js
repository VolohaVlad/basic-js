const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = new Array(matrix.length);
  for (let row = 0; row < matrix.length; row++) {
    result[row] = new Array(matrix[row].length);
    for (let column = 0; column < matrix[row].length; column++) {
      let mines = 0;

      for (let i = row - 1; i <= row + 1; i++) {
        for (let j = column - 1; j <= column + 1; j++) {
          if (i === row && j === column) continue;
          if (matrix[i]?.[j]) mines += 1;
        }
      }
      result[row][column] = mines;
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
