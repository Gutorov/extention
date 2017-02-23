import Ember from 'ember';

export default Ember.Component.extend({
  callChrome: Ember.inject.service('chrome-extention'),
  init() {
    this._super(...arguments);
    this.get('callChrome').getCurrentTab().then(v => {
      console.log(v);
      this.set('activeTab', v.title)
    });
  },
  activeTab: null,
  actions: {
    save_current_tab() {}
  }
});
