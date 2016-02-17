define([
  'marionette',
  'highway'
], function (
  Marionette,
  highway
) {
  'use strict';

  return Marionette.Behavior.extend({
    ui: {
      links: '[data-route]'
    },

    events: {
      'click @ui.links': 'handleLinkClick'
    },

    handleLinkClick: function (e) {
      var $target = $(e.currentTarget);
      var route = $target.data('route');

      if (route) {
        e.preventDefault();
        highway.go(route);
      }
    }
  });
});
