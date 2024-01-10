/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
  if (n == 1) {
    return 0;
  }
  let teams = n;
  let matches = 0;
  let match = null;
  while (match !== 1) {
    if (teams % 2 == 0) {
      teams = teams / 2;
      match = teams;
    } else {
      match = (teams - 1) / 2;
      teams = (teams - 1) / 2 + 1;
    }
    matches += match;
  }

  return matches;
};

numberOfMatches(3)