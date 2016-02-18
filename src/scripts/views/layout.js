define([
  'marionette'
], function (Marionette) {
  'use strict';

  return Marionette.LayoutView.extend({
    template: 'layout',

    regions: {
      header: '[data-ui=header]',
      content: '[data-ui=content]',
      footer: '[data-ui=footer]'
    }
  });
});
