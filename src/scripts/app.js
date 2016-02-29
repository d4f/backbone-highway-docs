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

  highway.route('getting-started', {
    path: '/getting-started',
    action: coreController.docs
  });

  highway.route('api', {
    path: '/api(/:method)',
    action: coreController.api
  });

  highway.route('404', {
    action: coreController.notFound
  });

  $(function () {
    highway.start({
      root: '/backbone-highway'
    });
  });
});
