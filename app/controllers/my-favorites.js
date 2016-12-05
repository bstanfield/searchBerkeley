import Ember from 'ember';

export default Ember.Controller.extend({
  isFavorite: Ember.computed('data.name', function() {
    if (this.get('data.name') === "Greenhearts Family Farm") {
      return true;
    } else if (this.get('data.name') === "Cholita Linda") {
      return true;
    } else if (this.get('data.name') === "Tacos Sinaloa") {
      return true;
    } else if (this.get('data.name') === "Pizza Moda") {
      return true;
    } else if (this.get('data.name') === "Pizza La Vals") {
      return true;
    } else if (this.get('data.name') === "Guacamole 61") {
      return true;
    } else {
      console.log("Hi");
      return false;
    }
  })
});
