//JavaScript

//Player object prototype:
function Player(playerNumber) {
  this.playerNumber = playerNumber;
}

Player.prototype.mark = function(playerNumber) {
  if (playerNumber === 1) {
    return "X";
  } else {
    return "O";
  }
}
