$(function() {

  window.User = Backbone.Model.extend({
    /** @override */
    defaults: {
      name: "Santa claus",
      fraud_score: 0.987,
      status: null
    },

    urlRoot: '/trainer',

    /** @override (see http://backbonejs.org/#Model-constructor ) */
    initialize: function(options) {
      console.log('User model created w/ options', options);
    },

    ban: function() {
      this.set('status', 'ban');
    },

    reset: function() {
      this.set('status', null);
    }
  });

  window.UserView = Backbone.View.extend({
    template: Handlebars.compile($('#user-template').html()),

    initialize: function() {
      this.model.on('change', this.render, this);
    },

    render: function() {
      // Fill in the handlebars template fields with the model's properties,
      // render that template as an HTML string, then shove that HTML string
      // into this view's root DOM element.
      //
      // This is a classic Backbone idiom, but can be shortened by 2 chars.
      this.$el.html(this.template(this.model.toJSON()));

      // This Backbone convention allows chained calls (eg. view.render().$el)
      return this;
    },

    events: {
      'click .ban-btn': 'onBanClick'
    },

    onBanClick: function() {
      this.model.ban();
      this.model.save();
    }
  });

  window.UserCollection = Backbone.Collection.extend({
    model: User,

    numDone: function() {
      return this.filter(function(user) { return user.get('status'); }).length;
    }
  });

  window.UserCollectionView = Backbone.View.extend({
    render: function() {
      this.collection.each(_.bind(function(user) {
        var userView = new UserView({ model: user });
        this.$el.append(userView.render().el);
      }, this));
    }
  });

  window.ProgressView = Backbone.View.extend({
    template: Handlebars.compile($('#progress-template').html()),

    initialize: function(options) {
      this.users = options.users;
      this.users.on('change:status', this.render, this);
    },

    render: function() {
      this.$el.html(this.template({
        num_done: this.users.numDone()
      }));
      return this;
    }

  });


});
