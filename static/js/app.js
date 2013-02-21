$(function() {

  var user = new User({
    name: 'Al capone'
  });

  // See http://backbonejs.org/#View-constructor
  var userView = new UserView({
    model: user,
    el: '#user'
  });

  userView.render();

  // NOTE: This is exposed globally for you to muck around in the console
  window.user = user;

});
