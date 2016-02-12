define([
  'marionette',
  './nav'
], function (Marionette, NavView) {
  'use strict';

  return Marionette.LayoutView.extend({
    template: 'header',
    className: 'container',

    regions: {
      nav: '[data-ui=nav]'
    },

    onRender: function () {
      this.nav.show(new NavView());
    }
  });
});
