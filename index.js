/* ユークリッド互助法 */

const gcm = (a, b) => {
  while (a === b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
};
console.log(gcm(21, 84));
