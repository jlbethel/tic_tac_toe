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
    expect(testSpace.yCoordinate(2)).to.equal(2);
  });
});
