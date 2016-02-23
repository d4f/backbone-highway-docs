define([
  'marionette'
], function (Marionette) {
  'use strict';

  return Marionette.ItemView.extend({
    template: function () {
      return 'methods/' + this.options.method;
    }
  });
});
