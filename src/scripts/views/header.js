define([
  'marionette'
], function (Marionette) {
  'use strict';

  return Marionette.ItemView.extend({
    template: 'header',
    className: 'container'
  });
});
