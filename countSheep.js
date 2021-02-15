//#1
function countSheep(num) {
  //base case
  if (num === 0) {
    return `All sheep jumped over the fence`;
  } 

    console.log(`${num}: Another sheep jumps over the fence`);
    return countSheep(num -1);
}

console.log(countSheep(3))

/*
1. what is the input of the program?
>3

2. what is the output of the program?
> "3: Another sheeps jumps over the fence"
  "2: Another sheeps jumps over the fence"
  "1: Another sheeps jumps over the fence"
  "All sheep jumped over the fence"

3. what is the input to each recursive call?
  > 3
  > 2
  > 1
  > 0

4. What is the output of each recursive call?
  > 3 -> "3: Another sheep jumps over the fence"
    > 2 -> "2: Another sheep jumps over the fence"
    > 1 -> "1: Another sheep jumps over the fence"
    > 0 -> "All sheep jumped over the fence"
*/