describe('Player', function() {

  it("returns the player's mark", function() {
    var testPlayer = new Player(1);
    expect(testPlayer.mark()).to.equal("X");
  });
});

describe('Space', function() {
  it("returns the xCoordinate", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.xCoordinate()).to.equal(1);
  });

  it("returns the yCoordinate", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.yCoordinate()).to.equal(2);
  });

  it("returns the fullSpace", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.fullSpace()).to.equal("12");
  });
});

describe('Board', function() {
  it("returns a full board before any plays", function() {
    var testBoard = new Board();
    expect(testBoard.unclaimedSpaces).to.eql(["11", "12", "13", "21", "22", "23", "31", "32", "33"]);
    expect(testBoard.playerOneSpaces).to.eql([]);
    expect(testBoard.playerTwoSpaces).to.eql([]);
  });

  it("returns an updated board", function() {
    var testBoard = new Board();
    var testSpace = new Space(1,2);
    var testPlayer = new Player(1);
    testBoard.assignSpace(testSpace, testPlayer);
    expect(testBoard.unclaimedSpaces).to.eql(["11", "13", "21", "22", "23", "31", "32", "33"]);
    expect(testBoard.playerOneSpaces).to.eql(["12"]);
    expect(testBoard.playerTwoSpaces).to.eql([]);
  });
});

describe('Game', function() {
  it("returns a horizontal win", function() {
    var testBoard = new Board();
    var testSpace = new Space(1,2);
    var testSpace2 = new Space(2,2);
    var testSpace3 = new Space(3,2);
    var testPlayer = new Player(1);
    testBoard.assignSpace(testSpace, testPlayer);
    testBoard.assignSpace(testSpace2, testPlayer);
    testBoard.assignSpace(testSpace3, testPlayer);
    expect(checkWin(testBoard)).to.equal("Player 1 wins!");
  });

  it("returns a vertical win", function() {
    var testBoard = new Board();
    var testSpace = new Space(1,1);
    var testSpace2 = new Space(1,2);
    var testSpace3 = new Space(1,3);
    var testPlayer = new Player(1);
    testBoard.assignSpace(testSpace, testPlayer);
    testBoard.assignSpace(testSpace2, testPlayer);
    testBoard.assignSpace(testSpace3, testPlayer);
    expect(checkWin(testBoard)).to.equal("Player 1 wins!");
  });

  it("returns a diagonal win", function() {
    var testBoard = new Board();
    var testSpace = new Space(1,3);
    var testSpace2 = new Space(2,2);
    var testSpace3 = new Space(3,1);
    var testPlayer = new Player(2);
    testBoard.assignSpace(testSpace, testPlayer);
    testBoard.assignSpace(testSpace2, testPlayer);
    testBoard.assignSpace(testSpace3, testPlayer);
    expect(checkWin(testBoard)).to.equal("Player 2 wins!");
  });

  it("returns a tie", function() {
    var testBoard = new Board();
    var testSpace = new Space(1,3);
    var testSpace2 = new Space(2,2);
    var testSpace3 = new Space(3,1);
    var testSpace4 = new Space(1,2);
    var testSpace5 = new Space(3,2);
    var testSpace6 = new Space(1,1);
    var testSpace7 = new Space(2,1);
    var testSpace8 = new Space(3,3);
    var testSpace9 = new Space(2,3);
    var testPlayer = new Player(1);
    var testPlayer2 = new Player(2);
    testBoard.assignSpace(testSpace, testPlayer);
    testBoard.assignSpace(testSpace2, testPlayer2);
    testBoard.assignSpace(testSpace3, testPlayer);
    testBoard.assignSpace(testSpace4, testPlayer2);
    testBoard.assignSpace(testSpace5, testPlayer);
    testBoard.assignSpace(testSpace6, testPlayer);
    testBoard.assignSpace(testSpace7, testPlayer2);
    testBoard.assignSpace(testSpace8, testPlayer2);
    testBoard.assignSpace(testSpace9, testPlayer);
    expect(checkWin(testBoard)).to.equal("Tie!")
  });
});

describe("EasyComputer", function() {
  it("takes a random space", function() {
    var testPlayer = new Player(0);
    var testBoard = new Board();
    easyComputer(testBoard);
    expect(testBoard.unclaimedSpaces.length).to.eql(8);
    expect(testBoard.playerTwoSpaces.length).to.eql(1);
  })
})
