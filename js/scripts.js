//JavaScript

//Player object prototype:
function Player(playerNumber) {
  this.playerNumber = playerNumber;
}

Player.prototype.mark = function(playerNumber) {
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
