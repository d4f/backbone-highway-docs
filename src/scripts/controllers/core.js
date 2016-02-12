define([
  'marionette',
  'views/layout',
  'views/header',
  'views/docs',
  'views/api'
], function (
  Marionette,
  LayoutView,
  HeaderView,
  DocsView,
  ApiView
) {
  'use strict';

  function displayLayout () {
    var layout = new LayoutView({
      el: '[data-ui=main]'
    });
    layout.render();

    var headerView = new HeaderView();
    layout.header.show(headerView);

    return layout;
  }

  var CoreController = Marionette.Controller.extend({
    home: function () {
      var layout = displayLayout();
      layout.content.show(new DocsView());
    },

    docs: function () {
      var layout = displayLayout();
      layout.content.show(new DocsView());
    },

    api: function () {
      var layout = displayLayout();
      layout.content.show(new ApiView());
    }
  });

  return new CoreController();
});
