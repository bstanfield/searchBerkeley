import Ember from 'ember';

export default Ember.Component.extend({
  city: Ember.computed('data.location.city', function() {
    if (this.get('data.location.city') !== 'Berkeley') {
      return true;
    } else {
      return false;
    }
  })
});
