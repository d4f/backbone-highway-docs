define([
  'marionette',
  'behaviors/highlight'
], function (Marionette, HighlightBehavior) {
  'use strict';

  return Marionette.ItemView.extend({
    template: 'getting-started',

    behaviors: {
      Highlight: {
        behaviorClass: HighlightBehavior
      }
    }
  });
});
