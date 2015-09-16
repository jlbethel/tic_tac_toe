describe('Player', function() {

  it("returns the player's mark", function() {
    var testPlayer = new Player("X");
    expect(testPlayer.mark(1)).to.equal("X");
  });
});

describe('Space', function() {
  it("returns the xCoordinate", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.xCoordinate()).to.equal(1);
  });

  it("returns the yCoordinate", function() {
    var testSpace = new Space(1,2):
    expect(testSpace.yCoordinate()).to.equal(2);
  })
});
