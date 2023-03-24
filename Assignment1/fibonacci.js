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

console.log(fibs(8));
