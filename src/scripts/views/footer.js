define([
  'marionette'
], function (Marionette) {
  'use strict';

  return Marionette.ItemView.extend({
    template: 'templates/footer',
    className: 'container clearfix'
  });
});
