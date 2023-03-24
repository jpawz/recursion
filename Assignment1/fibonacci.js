function fibs(number) {
  const array = [];

  let n1 = 0,
    n2 = 1,
    next;

  for (let i = 1; i <= number; i++) {
    array.push(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
  }

  return array;
}

function fibsRec(number) {
  if (number === 1) {
    return [0];
  } else if (number === 2) {
    return [0, 1];
  } else {
    return [
      ...fibsRec(number - 1),
      fibsRec(number - 1)[number - 2] + fibsRec(number - 1)[number - 3],
    ];
  }
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Length of Fibonacci Sequence: ", (length) => {
  console.log("Iteratively: ", fibs(length));
  console.log("Recursively: ", fibsRec(length));
  readline.close();
});
