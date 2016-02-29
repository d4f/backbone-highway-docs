define([
  'marionette',
  'behaviors/highlight'
], function (Marionette, HighlightBehavior) {
  'use strict';

  return Marionette.ItemView.extend({
    template: 'templates/getting-started',

    behaviors: {
      Highlight: {
        behaviorClass: HighlightBehavior
      }
    }
  });
});
