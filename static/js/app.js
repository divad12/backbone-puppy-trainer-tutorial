$(function() {

  var user = new User(window.userData);

  var userCollection = new UserCollection([window.userData, undefined, null, {}]);
  var userCollectionView = new UserCollectionView({ el: '#users', collection: userCollection });

  userCollectionView.render();

  var progressView = new ProgressView({
    el: '#progress',
    users: userCollection
  });
  progressView.render();

  // NOTE: This is exposed globally for you to muck around in the console
  window.userCollection = userCollection;

});
