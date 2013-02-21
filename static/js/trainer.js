$(function() {

  window.User = Backbone.Model.extend({
    /** @override */
    defaults: {
      name: "Santa claus",
      fraud_score: 0.987,
      status: null
    },

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

    render: function() {
      // Fill in the handlebars template fields with the model's properties,
      // render that template as an HTML string, then shove that HTML string
      // into this view's root DOM element.
      //
      // This is a classic Backbone idiom, but can be shortened by 2 chars.
      $(this.el).html(this.template(this.model.toJSON()));

      // This Backbone convention allows chained calls (eg. view.render().$el)
      return this;
    }
  });

});
