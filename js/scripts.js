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

//Board object prototype:
function Board() {
  this.unclaimedSpaces = ["11", "12", "13", "21", "22", "23", "31", "32", "33"];
  this.playerOneSpaces = [];
  this.playerTwoSpaces = [];
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
  }
}

//Computer logic
function easyComputer(Board) {
  var player = new Player(0);
  // var Board = new Board;
  // debugger;
  if(player.playerNumber === 0) {
    var move = Board.unclaimedSpaces[Math.floor(Math.random() * Board.unclaimedSpaces.length)];
    console.log(move);
    var stringSpace = move.toString();
    var foundSpace = Board.unclaimedSpaces.indexOf(stringSpace);
    var takenSpace = Board.unclaimedSpaces.splice(foundSpace, 1);
    Board.playerTwoSpaces.push(takenSpace.join(""));
    turn(player);
  }
  return stringSpace;
}

//Win conditions
function checkWin(Board) {
  var playerOne = Board.playerOneSpaces;
  var playerTwo = Board.playerTwoSpaces;
  var availableSpaces = Board.unclaimedSpaces;
  if (
    //Horizontal Wins:
    ((playerOne.indexOf("11") !=-1) && (playerOne.indexOf("21") != -1) && (playerOne.indexOf("31") != -1)) ||
    ((playerOne.indexOf("12") !=-1) && (playerOne.indexOf("22") != -1) && (playerOne.indexOf("32") != -1)) ||
    ((playerOne.indexOf("13") !=-1) && (playerOne.indexOf("23") != -1) && (playerOne.indexOf("33") != -1)) ||
    //Vertical Wins:
    ((playerOne.indexOf("11") !=-1) && (playerOne.indexOf("12") != -1) && (playerOne.indexOf("13") != -1)) ||
    ((playerOne.indexOf("21") !=-1) && (playerOne.indexOf("22") != -1) && (playerOne.indexOf("23") != -1)) ||
    ((playerOne.indexOf("31") !=-1) && (playerOne.indexOf("32") != -1) && (playerOne.indexOf("33") != -1)) ||
    //Diagonal Wins:
    ((playerOne.indexOf("13") !=-1) && (playerOne.indexOf("22") != -1) && (playerOne.indexOf("31") != -1)) ||
    ((playerOne.indexOf("11") !=-1) && (playerOne.indexOf("22") != -1) && (playerOne.indexOf("33") != -1))
  ){
    return "Player 1 wins!";
  } else if (
    //Horizontal Wins:
    ((playerTwo.indexOf("11") !=-1) && (playerTwo.indexOf("21") != -1) && (playerTwo.indexOf("31") != -1)) ||
    ((playerTwo.indexOf("12") !=-1) && (playerTwo.indexOf("22") != -1) && (playerTwo.indexOf("32") != -1)) ||
    ((playerTwo.indexOf("13") !=-1) && (playerTwo.indexOf("23") != -1) && (playerTwo.indexOf("33") != -1)) ||
    //Vertical Wins:
    ((playerTwo.indexOf("11") !=-1) && (playerTwo.indexOf("12") != -1) && (playerTwo.indexOf("13") != -1)) ||
    ((playerTwo.indexOf("21") !=-1) && (playerTwo.indexOf("22") != -1) && (playerTwo.indexOf("23") != -1)) ||
    ((playerTwo.indexOf("31") !=-1) && (playerTwo.indexOf("32") != -1) && (playerTwo.indexOf("33") != -1)) ||
    //Diagonal Wins:
    ((playerTwo.indexOf("13") !=-1) && (playerTwo.indexOf("22") != -1) && (playerTwo.indexOf("31") != -1)) ||
    ((playerTwo.indexOf("11") !=-1) && (playerTwo.indexOf("22") != -1) && (playerTwo.indexOf("33") != -1))
  ) {
    return "Player 2 wins!";
  } else if (availableSpaces.length === 0) {
    return "Tie!";
  }
}

//Turn
var turn = function(Player) {
  var board = new Board;
  checkWin(board);
  Player.playerNumber = Player.playerNumber ? 0 : 1;
}

//jQuery
$(document).ready(function() {

  var player = new Player(1);
  var board = new Board;


  $("form#player").submit(function(event) {
    event.preventDefault();
    $(".game").show();
    if ($("#player-select").val() === "two-player") {
      $(".game").on("click", function() {
        $(".player1").toggle();
        $(".player2").toggle();
        turn(player);
        $(".result").show(function () {
          $(".outcome").text(checkWin(board))
        });
      });
    } else if ($("#player-select").val() === "easy-computer") {
      $(".game").on("click", function() {
        $(".player1").toggle();
        $(".player2").toggle();
        $(".result").show(function () {
          $(".outcome").text(checkWin(board))
        $("." + easyComputer(board)).append("<h2>" + "O" + "</h2>");
        });
      });
    }
  });


  //Top row:
  $(".13").one("click", function() {
    var space = new Space(1,3);
    $(".13").append("<h2>" + player.mark() + "</h2>");
    board.assignSpace(space, player);
  });

  $(".23").one("click", function() {
    var space = new Space(2,3);
    $(".23").append("<h2>" + player.mark() + "</h2>");
    board.assignSpace(space, player);
  });

  $(".33").one("click", function() {
    var space = new Space(3,3);
    $(".33").append("<h2>" + player.mark() + "</h2>");
    board.assignSpace(space, player);
  });

  //Middle row:
  $(".12").one("click", function() {
    var space = new Space(1,2);
    $(".12").append("<h2>" + player.mark() + "</h2>");
    board.assignSpace(space, player);
    });

  $(".22").one("click", function() {
    var space = new Space(2,2);
    $(".22").append("<h2>" + player.mark() + "</h2>");
    board.assignSpace(space, player);
  });

  $(".32").one("click", function() {
    var space = new Space(3,2);
    $(".32").append("<h2>" + player.mark() + "</h2>");
    board.assignSpace(space, player);
  });

  //Bottom row:
  $(".11").one("click", function() {
    var space = new Space(1,1);
    $(".11").append("<h2>" + player.mark() + "</h2>");
    board.assignSpace(space, player);
  });

  $(".21").one("click", function() {
    var space = new Space(2,1);
    $(".21").append("<h2>" + player.mark() + "</h2>");
    board.assignSpace(space, player);
  });

  $(".31").one("click", function() {
    var space = new Space(3,1);
    $(".31").append("<h2>" + player.mark() + "</h2>");
    board.assignSpace(space, player);
  });
});
