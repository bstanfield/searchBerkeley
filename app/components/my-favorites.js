import Ember from 'ember';

export default Ember.Component.extend({
  isFavorite: Ember.computed('data.name', function() {
    if (this.get('data.name') === "A Touch of Mexico") {
      return true;
    } else if (this.get('data.name') === "Pancho Villa Taqueria") {
      return true;
    } else if (this.get('data.name') === "Tacos Sinaloa") {
      return true;
    } else if (this.get('data.name') === "PEOPLES Cafe") {
      return true;
    } else if (this.get('data.name') === "Taqueria Sanchez") {
      return true;
    } else if (this.get('data.name') === "Guacamole 61") {
      return true;
    } else {
      console.log("Hi");
      return false;
    }
  })
});
