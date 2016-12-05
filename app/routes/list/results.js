import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params){
    var url='https://searchberkeley.herokuapp.com/results/' + params.term;
    return $.getJSON(url);
  },
  afterModel: function(model){
    console.log(model);
  }

});
