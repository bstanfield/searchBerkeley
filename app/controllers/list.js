import Ember from 'ember';

export default Ember.Controller.extend({
  // actions: {
  //   search(response){
  //     var url = 'http://localhost:3000/results/' + this.get("foodItem");
  //     var controller = this;
  //     return $.ajax({
  //       url: url,
  //       type: "GET"
  //     }).then(function(data){
  //       console.log(data);
  //       return data;
  //       controller.set('response', data)
  //     })
  //   }
  // }

  actions:{
    search: function(){
      var searchTerm = this.get('foodItem');
      this.transitionToRoute('list.results', searchTerm);
    }
  }
});
