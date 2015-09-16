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
    testBoard.playerOneSpaces = ["11", "21", "31"];
    expect(checkWin()).to.equal("Player 1 wins");
  });
});
