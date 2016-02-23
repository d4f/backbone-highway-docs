define([
  'marionette'
], function (Marionette) {
  'use strict';

  return Marionette.Behavior.extend({
    onBeforeShow: function () {
      // Hide generated element
      this.$el.hide();
      // Defer code highlighting so that the generated DOM is completely accessible globally
      _.defer(_.bind(this.highlight, this));
    },

    highlight: function () {
      // Highlight code examples
      Prism.highlightAll();
      // Show generated element
      this.$el.show();
    }
  });
});
