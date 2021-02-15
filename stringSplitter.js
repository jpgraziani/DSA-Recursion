/*
Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

Input: 02/20/2020
Output: ["02", "20", "2020"]
*/

const stringSplitter = (str, splitter) => {
  if (str === '') {
    return [];
  }
  const newChar = str[0];
  if (newChar === splitter) {
    return stringSplitter(str.slice(1), splitter);
  }
  else {
    return [newChar + stringSplitter(str.slice(1), splitter)]
  }
};

console.log(stringSplitter('02/20/2020', '/'));

const split = (str, delimiter) => {
  let index = str.indexOf(delimiter);
  if (index === -1) {
    return [str];
  }
  return [str.slice(0, index), ...split(str.slice(index + 1), delimiter)]
}

console.log(split('02/20/2020', '/'));

const splitPar = (str, delimiter) => {
  let index = str.indexOf(delimiter);
  console.log(index)
  if (index === -1) {
    return [str];
  }
  return [str.slice(0, index), ...splitPar(str.slice(index + 1), delimiter)]
}

console.log(splitPar('All cats go to the store', ' '));

/*
1. what is the input?
"02/20/2020"

2. what is the output of the program?
["02", "20", "2020"]

3. what is the input to each recurisve call?
"02/20/2020", "/"
"20"/"2020", "/"
"2020", "/"

4. what is the output of each recursive call?
"2020"
"20", "2020"
"02", "20", "2020"

*/