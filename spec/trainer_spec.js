describe("User model", function() {
  var user;

  beforeEach(function() {
    user = new User({
      name: 'Al capone'
    });
  });

  it("should initially have a falsy status", function() {
    expect(user.get('status')).toBeFalsy();
  });

  it("should have a status when ban called", function() {
    user.ban();
    expect(user.get('status')).toBeTruthy();
  });

  it("should have no status when reset called", function() {
    user.ban();
    user.reset();
    expect(user.get('status')).toBeFalsy();
  });

});
