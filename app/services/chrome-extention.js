import Ember from 'ember';

export default Ember.Service.extend({
    getCurrentTab() {
        return new Promise(function(resolve,reject){
          chrome.tabs.query({
            active: true,
            currentWindow: true
          }, v => resolve(v));
        }).then(v => v[0]);
    }
});
