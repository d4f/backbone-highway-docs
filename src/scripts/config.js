// RequireJS configuration
require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
    lodash: '../bower_components/lodash/lodash',
    backbone: '../bower_components/backbone/backbone',
    marionette: '../bower_components/backbone.marionette/lib/backbone.marionette',
    highway: '../bower_components/backbone-highway/src/backbone.highway',
    text: '../bower_components/requirejs-plugins/lib/text',
    json: '../bower_components/requirejs-plugins/src/json',
    loglevel: '../bower_components/loglevel/dist/loglevel',
    bluebird: '../bower_components/bluebird/js/browser/bluebird'
  },

  shim: {
    bootstrap: {
      deps: ['jquery']
    }
  },

  map: {
    '*': {
      underscore: 'lodash'
    }
  },

  deps: ['jquery', 'backbone', 'marionette', 'highway', 'renderer']
});
