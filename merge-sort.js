function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftSide = arr.slice(0, middle);
  const rightSide = arr.slice(middle, arr.length);

  const sortedArr = merge(mergeSort(leftSide), mergeSort(rightSide));
  return sortedArr;
}

const merge = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());

  return result;
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Provide numbers separated with commas to sort: ",
  (array) => {
    const arr = array.split(",").map((val) => parseInt(val.trim()));
    console.log("Unsorted array:");
    console.log(arr);
    console.log("Sorted array: ");
    console.log(mergeSort(arr));
    readline.close();
  }
);
