
//use an array of arrays to store the gameboard status
var board = [['.','.','.'], 
             ['.','.','.'],
             ['.','.','.']]


/*
var currentUser = 'playerX';
if playerX
var showCoordinateSelector(player) player arg = currentUser
display the section where currentUser can choose their part
this section will have coordinate selection dropdowns
when user1 hits submit, it will pass the dropdown's values and the currentUser into the addPiece function


*/
var currentPlayer = 'X';

var addPiece = function(piece, coordinates) {
  console.log(piece)
  var horiz = Number(coordinates[0]);
  var vert = Number(coordinates[1]);
  if (board[horiz][vert] === '.' ) {
    board[horiz][vert] = piece;
    document.getElementsByClassName(coordinates[0]).innerHTML = piece;
    currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
  console.log('its', currentPlayer)
  } else {
    document.getElementsByClassName('message')[0].innerHTML = 'There is already a piece there';
  }
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

