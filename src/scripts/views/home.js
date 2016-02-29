define([
  'marionette',
  'behaviors/routing'
], function (Marionette, RoutingBehavior) {
  'use strict';

  return Marionette.ItemView.extend({
    template: 'templates/home',

    behaviors: {
      Routing: {
        behaviorClass: RoutingBehavior
      }
    }
  });
});
