import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import checkCurrentRoute from "ember-inspector/utils/check-current-route";

export default Component.extend({
  // passed as an attribute to the component
  currentRoute: null,

  /**
   * No tag. This component should not affect
   * the DOM.
   *
   * @property tagName
   * @type {String}
   * @default ''
   */
  tagName: '',

  labelStyle: computed('model.parentCount', function() {
    return htmlSafe(`padding-left: ${+this.get('model.parentCount') * 20 + 5}px;`);
  }),

  isCurrent: computed('currentRoute', 'model.value.name', function() {
    let currentRoute = this.get('currentRoute');
    if (!currentRoute) {
      return false;
    }

    return checkCurrentRoute(currentRoute, this.get('model.value.name'));
  })
});
