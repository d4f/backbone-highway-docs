define([
  'marionette',
  'dust.core',
  'compiled-views'
], function (Marionette, dust) {
  'use strict';

  // Override marionette renderer to use dust.js templates
  Marionette.Renderer.render = function (template, data) {
    var html = '';

    dust.render(template, data, function (err, out) {
      if (err) {
        console.error(err);
      }
      else {
        html = out;
      }
    });

    return html;
  };
});
