import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params){
    var url='http://localhost:3000/results/' + params.term;
    return $.getJSON(url);
  },
  afterModel: function(model){
    console.log(model);
  }
});
