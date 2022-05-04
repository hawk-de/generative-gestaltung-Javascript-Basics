// @ts-check
// Create some array functions
// work with loops
// make it dynamic
// don't take the easy path by hardcoding return values

/**
 * Create a function that takes no input but returns an Array where each value is 2 larger then the one before
 * @returns {number[]} Array of numbers with steps of two
 */
function create2StepRange() {
  return undefined;
}

/**
 * Create a function that takes an array of strings and `join`s them together separated by a `, `
 * @param {string[]} arr An array of strings to join
 * @returns {string} The joined items of the array delimited by `, `
 */
function joinArrayOfStrings(arr) {
  return arr;
}

/**
 *
 * Create a function that returns every second element in the array as a new array.
 * @template T
 * @param {Array<T>} arr But only every second item
 * @returns {Array<T>} Every second item in the array
 *
 */
function getEverySecondElement(arr) {
  return arr;
}

module.exports = {
  getEverySecondElement,
  create2StepRange,
  joinArrayOfStrings,
};
