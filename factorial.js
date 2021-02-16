/*

Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

*/

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n -1);
}

console.log(factorial(5))

/*

1. what is the input to the 
5

2. what is the output of the programs
5 * 4 * 3 * 2 * 1 = 120

*/