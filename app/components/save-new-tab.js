import Ember from 'ember';

export default Ember.Component.extend({
  callChrome: Ember.inject.service('chrome-extention'),
  activeTab: Ember.computed(function() {
      return this.get('callChrome').getCurrentTab().then(function(v) { return v});
  }),
  actions: {
    save_current_tab() {}
  }
});
