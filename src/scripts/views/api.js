define([
  'marionette',
  './method',
  'behaviors/routing',
  'behaviors/highlight'
], function (Marionette, MethodView, RoutingBehavior, HighlightBehavior) {
  'use strict';

  return Marionette.LayoutView.extend({
    template: 'templates/api',

    regions: {
      content: '[data-ui=api-content]'
    },

    behaviors: {
      Routing: {
        behaviorClass: RoutingBehavior
      },
      Highlight: {
        behaviorClass: HighlightBehavior
      }
    },

    onBeforeShow: function () {
      var method = _.get(this, 'options.method');

      if (method) {
        this.showMethod(method);
      }
    },

    showMethod: function (method) {
      this.content.show(
        new MethodView({
          method: method
        })
      );
    }
  });
});
