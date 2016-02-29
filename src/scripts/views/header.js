define([
  'marionette',
  'highway',
  'behaviors/routing',
  './nav'
], function (Marionette, highway, RoutingBehavior, NavView) {
  'use strict';

  return Marionette.LayoutView.extend({
    template: 'templates/header',
    className: 'container clearfix',

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
