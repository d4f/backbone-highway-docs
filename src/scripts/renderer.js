define([
  'marionette'
], function (Marionette) {
  'use strict';

  // Override marionette renderer to use dust.js templates
  Marionette.Renderer.render = function (template, data, ctx) {
    var html = '';

    if (_.isFunction(template)) {
      template = template.call(ctx, data);
    }

    dust.render(template, data, function (err, out) {
      if (err) {
        console.error(err);
      } else {
        html = out;
      }
    });

    return html;
  };
});
