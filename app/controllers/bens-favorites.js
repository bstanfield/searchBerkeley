import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    search: function(){
      var myFavorites = this.get('favorites');
      this.transitionToRoute('bens-favorites.favorites', myFavorites);
    }
  }
});
