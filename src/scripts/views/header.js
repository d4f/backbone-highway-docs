define([
  'marionette',
  'highway',
  'behaviors/routing',
  './nav'
], function (Marionette, highway, RoutingBehavior, NavView) {
  'use strict';

  return Marionette.LayoutView.extend({
    template: 'header',
    className: 'container',

    regions: {
      nav: '[data-ui=nav]'
    },

    behaviors: {
      Routing: {
        behaviorClass: RoutingBehavior
      }
    },

    onRender: function () {
      this.nav.show(new NavView());
    }
  });
});
