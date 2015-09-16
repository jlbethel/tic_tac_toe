//JavaScript

//Player object prototype:
function Player(playerNumber) {
  this.playerNumber = playerNumber;
}

Player.prototype.mark = function() {
  if (this.playerNumber === 1) {
    return "X";
  } else {
    return "O";
  }
}

//Space object prototype:
function Space(x, y) {
  this.x = x;
  this.y = y;
}

Space.prototype.xCoordinate = function() {
  return this.x;
}

Space.prototype.yCoordinate = function() {
  return this.y;
}

Space.prototype.fullSpace = function() {
  var stringX = this.x.toString();
  var stringY = this.y.toString();
  return stringX + stringY;
}

// Space.prototype.markedBy = function(player) {
//   if (player.mark() = "X") {
//     return this.player;
//   }
// }

//Board object prototype:
function Board() {
  this.unclaimedSpaces = ["11", "12", "13", "21", "22", "23", "31", "32", "33"];
  this.playerOneSpaces = [];
  this.playerTwoSpaces = [];
}

Board.prototype.checkBoard = function() {
  return this.unclaimedSpaces;
}

Board.prototype.assignSpace = function(Space, Player) {
  var space = Space.fullSpace();
  var player = Player.mark();
  var foundSpace = this.unclaimedSpaces.indexOf(space);
  var takenSpace = this.unclaimedSpaces.splice(foundSpace, 1);
  if (player === "X") {
    this.playerOneSpaces.push(takenSpace.join(""));
  } else {
    this.playerTwoSpaces.push(takenSpace.join(""));
  };

}
