import Ember from 'ember';

export default Ember.Service.extend({
    getCurrentTab() {
        var promise = new Promise(function(resolve,reject){
          chrome.tabs.query({
            active: true,
            currentWindow: true
        }, resolve);
        });
        return promise.then(function(value) {
            return value[0];
        });
    }
});
