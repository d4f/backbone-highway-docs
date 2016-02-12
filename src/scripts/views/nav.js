define([
  'marionette',
  'highway'
], function (Marionette, highway) {
  'use strict';

  return Marionette.ItemView.extend({
    template: 'nav',
    tagName: 'nav',

    events: {
      'click a': 'navigate'
    },

    navigate: function (e) {
      var $target = $(e.currentTarget);
      var route = $target.data('route');

      if (route) {
        e.preventDefault();
        highway.go(route);
      }
    }
  });
});
