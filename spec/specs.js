describe('Player', function() {

  it("returns the player's mark", function() {
    var testPlayer = new Player("X");
    expect(testPlayer.mark()).to.equal("X");
  });
});
