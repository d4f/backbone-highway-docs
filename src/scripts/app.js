define([
  'marionette',
  'highway',
  'controllers/core'
], function (Marionette, highway, coreController) {
  'use strict';

  highway.route('home', {
    path: '/',
    action: coreController.home
  });

  highway.route('docs', {
    path: '/docs',
    action: coreController.docs
  });

  highway.route('api', {
    path: '/api',
    action: coreController.api
  });

  $(function () {
    highway.start({
      debug: true
    });
  });
});
