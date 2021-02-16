/*
Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.
*/

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7))


/*

1. what is the input to the function`
7

2. what is the output of the function 
1, 1, 2, 3, 5, 8, 13

3. what is the input to each recursive call?
(7, 0, 0, 1)
(7, 1, 1, 2)
(7, 1, 2, 3)
(7, 2, 3, 5)
(7, 3, 5, 8)
(7, 5, 8, 13)

4. what is the output of each recursive call?
  `, 13 + ''`
  `, 8 + , 13`
  `, 5 + , 8, 13`
  `, 3 + , 5, 8, 13`
  `, 2 + , 3, 5, 8, 13`
  `, 1 + , 2, 3, 5, 8, 13`
  `, 1 + , 1, 2, 3, 5, 8, 13`
*/