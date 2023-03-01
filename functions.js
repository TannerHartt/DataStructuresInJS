export function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

/**
 * Function to search a string for a substring, and return the number of times it appears
 * @param {*} long String to search through for the substring
 * @param {*} short Substring to search for in the long string
 * @returns an integer representing the number of times the substring appears in the long string
 */
export function naiveStringSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break; // If the characters don't match, break out of the inner loop
      if (j === short.length - 1) count++; // If we get to the end of the short string, we found a match
    }
  }
  return count; // Return the number of matches
}