/*
Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.
*/

function reverseString(string) {
  if (string.length === 0) {
    return "";
  }
  return reverseString(string.substr(1)) + string[0];
}

const string = "HOTDOG";
console.log(reverseString(string))


/*
1. what's input?
"HOTDOG"

2.what's output?
"GODTOH"

3. what is the input to each recursive call?
("HOTDOG")
("OTDOG")
("TDOG")
("DOG")
("OG")
("G")
('')

4. What is the output to each recursive call?
"" + G
"G" + "O"
"GO" + "D"
"GOD" + "T"
"GODT" + "O"
"GODTO" + "H"
"GODTOH" 
*/