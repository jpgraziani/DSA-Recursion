/*
Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

powerCalculator(10,2) should return 100
powerCalculator(10,-2) should return exponent should be >= 0
*/

function powerCalculator(numBase, numExpo) {
  if (numExpo === 0) {
    return 1
  }
  return numBase * powerCalculator(numBase, --numExpo)
}

const numBase = 10;
const numExpo = 2;

console.log(powerCalculator(numBase, numExpo));

/*
  1. what is the input to the program?
  base = 10, exponent = 2

  2. Output?
  100

  3. Input to each recursive call?
  (10, 2)
  (10, 1)
  (10, 0)

  4. Output of each recursive call?
  (10,0) = 1
  (10,1) = 10 * 1 = 10
  (10,2) = 10 * 10 = 100
*/