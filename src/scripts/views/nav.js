define([
  'marionette',
  'highway',
  'behaviors/routing'
], function (Marionette, highway, RoutingBehavior) {
  'use strict';

  return Marionette.ItemView.extend({
    template: 'nav',
    tagName: 'nav',

    behaviors: {
      Routing: {
        behaviorClass: RoutingBehavior
      }
    }
  });
});
