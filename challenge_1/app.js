//use an array of arrays to store the gameboard status
var board = [['.','.','.'], 
             ['.','.','.'],
             ['.','.','.']];


/*
var currentUser = 'playerX';
if playerX
var showCoordinateSelector(player) player arg = currentUser
display the section where currentUser can choose their part
this section will have coordinate selection dropdowns
when user1 hits submit, it will pass the dropdown's values and the currentUser into the addPiece function
*/

var currentPlayer = 'X';
var gameOver = false;

var addPiece = function(piece, coordinates) {
  var horiz = Number(coordinates[0]);
  var vert = Number(coordinates[1]);
    if (board[horiz][vert] === '.' ) {
      board[horiz][vert] = piece;
      document.getElementsByClassName(coordinates)[0].innerHTML = piece;
      if (checkHorizontalWin(board[horiz]) === true || checkDiagonalWin() === true || checkVerticalWin(vert) === true) {
       document.getElementsByClassName('message')[0].innerHTML = 'Winner';
      }
      currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
    } else {
      document.getElementsByClassName('message')[0].innerHTML = 'There is already a piece there!';
    }
};

// var checkWinner = function() {

// };
 

const reducer = function (accumulator, currentValue) {
  console.log('acc', accumulator)
  console.log('cv', currentValue)
  console.log(accumulator === currentValue)
  return accumulator = currentValue; 
};

const filterItems = function(row, anchor) {
  return row.filter(function(element) {
    if (element === anchor) {
      return true;
    }
  });
}
var checkHorizontalWin = function(row) {
  var win = false;
  var winner;
  // if (row.reduce(reducer, row[0]) === row[0] && row[0] !== '.') {
  //   win = true;
  // }
  if (filterItems(row, row[0]).length === 3) {
    win = true;
  }
  console.log(win);
  return win;
};

var checkVerticalWin = function(colCoord) {
  var win = false;
  var column = [board[0][colCoord], board[1][colCoord], board[2][colCoord]];
  console.log(column);
  // if (column.reduce(reducer, column[0]) === column[0] && column[0] !== '.') {
  //   win = true;
  // }
  if (filterItems(column, board[0][colCoord]).length === 3) {
    win = true;
  }
  console.log(win);
  return win;

};

var checkDiagonalWin = function() {
  var win = false;
  var winner;
  var leftDiagonal = [board[0][0], board[1][1], board [2][2]];
  var rightDiagonal = [board[0][2], board[1][1], board[2][0]];
  if ((leftDiagonal.reduce(reducer, board[0][0]) === board[0][0]) && board[0][0] !== '.') {
    win = true;
    winner = board[1][1];
  } else if ((rightDiagonal.reduce(reducer, board[1][1]) === board[1][1]) && board[1][1] !== '.') {
    win = true;
    winner = board[1][1];
  }
  return win;
};
/*function addPiece
i: a game piece (x or o), horizontal coordinate (0-2), and vertical coordinate (0-2)
o: none, but modifies the gameBooard array as a side effect
c: none
e: none

check the coordinate (aka the array at [horiz, vert])
  if the value is . (aka nothing is there)
    change the value to piece's value
    switch to the next user's turn (currentUser = the other player)
  else (the space is occuped)
    display a message telling the user that the space is occupied and to choose new coordinates
*/

/*function messageChanger()
if gameOver && win
  change msgText to Player [] Won!
else if gameOver && draw
  change msgText to draw
else if function addpiece 
  change msgText to invalid move*/

