define([
  'marionette'
], function (Marionette) {
  'use strict';

  return Marionette.ItemView.extend({
    template: function () {
      return 'templates/methods/' + this.options.method;
    }
  });
});
