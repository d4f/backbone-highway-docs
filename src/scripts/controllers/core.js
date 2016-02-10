define([
  'marionette',
  'views/layout',
  'views/header'
], function (
  Marionette,
  LayoutView,
  HeaderView
) {
  'use strict';

  return Marionette.Controller.extend({
    home: function () {
      var layout = new LayoutView({
        el: '[data-ui=main]'
      });
      layout.render();

      var headerView = new HeaderView();
      layout.header.show(headerView);
    }
  });
});
