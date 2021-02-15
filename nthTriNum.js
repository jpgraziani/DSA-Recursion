/*
Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.
*/

function nthTriNum(sequence, n=1) {
  if (!sequence[n]) {
    return n
  }
  n++;
  return nthTriNum(sequence, n);
}

const sequence = [1, 3, 6, 10, 15, 21, 28, 36, 45];
console.log(nthTriNum(sequence))

/*
1. what is the input to the program?
  [1, 3, 6, 10, 15, 21, 28, 36, 45], 1
  

2. Output of the program?
  ouput = 9

3. What is the input to each recursive call?
  1 = 1

  3 = 1 + 2

  6 = 1 + 2 + 3

  10 = 1 + 2 + 3 + 4

  15 = 1 + 2 + 3 + 4 + 5

  21 = 1 + 2 + 3 + 4 + 5 + 6
  
  28 = 1 + 2 + 3 + 4 + 5 + 6 + 7

  36 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

  45 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9

4. what is the output of each recursive call?
  9, 9, 9, 9, 9, 9, 9, 9, 9
*/