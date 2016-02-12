define([
  'marionette'
], function (Marionette) {
  'use strict';

  return Marionette.ItemView.extend({
    template: 'docs',

    onRender: function () {
      _.defer(function () {
        Prism.highlightAll();
      });
    }
  });
});
