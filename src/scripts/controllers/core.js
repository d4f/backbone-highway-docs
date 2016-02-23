define([
  'marionette',
  'highway',
  'views/layout',
  'views/header',
  'views/footer',
  'views/home',
  'views/getting-started',
  'views/api'
], function (
  Marionette,
  highway,
  LayoutView,
  HeaderView,
  FooterView,
  HomeView,
  GettingStartedView,
  ApiView
) {
  'use strict';

  var mainLayout;

  function displayLayout () {
    if (!mainLayout) {
      mainLayout = new LayoutView({
        el: '[data-ui=main]'
      });
      mainLayout.render();

      var headerView = new HeaderView();
      mainLayout.header.show(headerView);

      var footerView = new FooterView();
      mainLayout.footer.show(footerView);
    }

    return mainLayout;
  }

  var CoreController = Marionette.Controller.extend({
    home: function () {
      var layout = displayLayout();
      layout.content.show(new HomeView());
    },

    docs: function () {
      var layout = displayLayout();
      layout.content.show(new GettingStartedView());
    },

    api: function (method) {
      var layout = displayLayout();
      layout.content.show(
        new ApiView({
          method: method
        })
      );
    },

    notFound: function () {
      highway.go('home', [], {replace: true});
    }
  });

  return new CoreController();
});
