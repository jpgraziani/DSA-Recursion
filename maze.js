/*

You can use the following mazes to test your program.

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by *. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

For the above maze, a possible exit path can be RRDDLLDDRRRRRR

*/

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
  ];
  
  let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
  ];

function mazeFinder(maze, y = 0, x = 0) {
    if (maze[y][x] === 'e') return true; //found exit
    if (maze[y][x] === ' ') return false; //blocked or already visited

    let sizeY = maze.length;
    let sizeX = maze[0].length;

    let newMaze = maze.map(arr => [...arr]); //deep copy
    newMaze[y][x] = '*';

    if (x + 1 < sizeX) {
        //go right?
        let right = mazeFinder(newMaze, y, x + 1);
        if (right) {
            if (typeof right === 'boolean') return 'R';
            return 'R' + right;
        }
    }
    if (y + 1 < sizeY) {
        //can we go down?
        let down = mazeFinder(newMaze, y + 1, x);
        if (down) {
            if (typeof down === 'boolean') return 'D';
            return 'D' + down;
        }
    }
    if (x > 0) {
        //can we go left
        let left = mazeFinder(newMaze, y, x - 1);
        if (left) {
            if (typeof left === 'boolean') return 'L';
            return 'L' + left;
        }
    }
    if (y > 0) {
        //can we go up
        let up = mazeFinder(newMaze, y - 1, x);
        if (up) {
            if (typeof up === 'boolean') return 'U';
            return 'U' + up;
        }
    }
    return false;
}

console.log(mazeFinder(mySmallMaze));