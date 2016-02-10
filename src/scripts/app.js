define([
  'marionette',
  'highway',
  'renderer'
], function (Marionette, highway) {
  'use strict';

  var MainView = Marionette.ItemView.extend({
    template: 'main'
  });

  $(function () {
    highway.route('home', {
      path: '/',
      action: function () {
        var view = new MainView({
          el: '.main-container'
        });

        view.render();
      }
    });

    highway.start({
      debug: true
    });
  });
});
