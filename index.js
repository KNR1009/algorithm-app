let array = [7, 3, 10, 5, 1];

for (let outer = 0; outer < array.length - 1; outer++) {
  console.log(outer + 1 + "周目");
  for (let i = array.length - 1; i > outer; i--) {
    if (array[i] < array[i - 1]) {
      let tmp = array[i];
      array[i] = array[i - 1];
      array[i - 1] = tmp;
    }
  }
}
