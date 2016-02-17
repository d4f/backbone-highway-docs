define([
  'marionette',
  'behaviors/routing'
], function (Marionette, RoutingBehavior) {
  'use strict';

  return Marionette.ItemView.extend({
    template: 'home',

    behaviors: {
      Routing: {
        behaviorClass: RoutingBehavior
      }
    }
  });
});
