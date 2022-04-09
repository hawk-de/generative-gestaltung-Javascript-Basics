//@ts-check
// Write some functions that do conditional checking. Some return a boolean, some return a value.

// Write a function that returns the greater value of two numbers.
/**
 * @param {number} a
 * @param {number} b
 * @returns {number} The greater value of a or b
 */
function greaterValue(a, b) {
  if (a < b) {
    return a;
  } else {
    return a;
  }
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {boolean} If a is greater then b returns true, else false
 */
function isGreaterThan(a, b) {}

// Write a function that returns the lesser value of two numbers.
/**
 * @param {number} a
 * @param {number} b
 * @returns {number} The lesser value of a or b
 * @example
 * lesserValue(1, 2) // 1
 * lesserValue(2, 1) // 1
 * lesserValue(1, 1) // 1
 * lesserValue(2, 2) // 2
 * lesserValue(2, 3) // 2
 * lesserValue(3, 2) // 2
 */
function lesserValue(a, b) {}

module.exports = { greaterValue, isGreaterThan, lesserValue };
