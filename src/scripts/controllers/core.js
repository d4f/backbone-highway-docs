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

  function displayLayout () {
    var layout = new LayoutView({
      el: '[data-ui=main]'
    });
    layout.render();

    var headerView = new HeaderView();
    layout.header.show(headerView);

    var footerView = new FooterView();
    layout.footer.show(footerView);

    return layout;
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

    api: function () {
      var layout = displayLayout();
      layout.content.show(new ApiView());
    },

    notFound: function () {
      highway.go('home', [], {replace: true});
    }
  });

  return new CoreController();
});
