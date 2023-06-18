// Given a non-negative integer, num, repeatedly add all its digits until it has a single digit remaining and return it.

// Ex: Given the following num...

// num = 123, return 6 (1 + 2 + 3 = 6)
// Ex: Given the following num...

// num = 8353, return 1 (8 + 3 + 5 + 3 = 19 = 1 + 9 = 10 = 1 + 0 = 1).

function digitalRoot_M1(num) {
  const digit = num
    .toString()
    .split("")
    .map(Number)
    .reduce((prev, curr) => prev + curr);
  if (digit < 10) {
    return digit;
  }

  return digitalRoot_M1(digit);
}

function digitalRoot_M2(n) {
  let total = parseInt(
    String(n)
      .split("")
      .reduce((prev, current) => parseInt(prev) + parseInt(current))
  );

  if (total >= 10) {
    total = digitalRoot_M2(total);

    return total;
  }

  return total;
}

function digitalRoot_M3(num) {
    const digit = [...num.toString()]
      .map(Number)
      .reduce((prev, curr) => prev + curr);
    if (digit < 10) {
      return digit;
    }

    return digitalRoot_M3(digit);
}



console.log(digitalRoot_M1(123))
console.log(digitalRoot_M1(129))

console.log(digitalRoot_M2(123))
console.log(digitalRoot_M2(129))

console.log(digitalRoot_M3(123))
console.log(digitalRoot_M3(129))
