define([
  'marionette',
  'highway',
  'controllers/core'
], function (Marionette, highway, CoreController) {
  'use strict';

  var core = new CoreController();

  highway.route('home', {
    path: '/',
    action: core.home
  });

  $(function () {
    highway.start({
      debug: true
    });
  });
});
