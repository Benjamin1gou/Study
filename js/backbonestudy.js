(function(){

    //Model
    var Task = Backbone.Model.extend({
      defaults:{
        title:"do someting",
        completed: false
      },
      validate: function(attrs){
        if(_.isEmpty()){
          return "title must not be empty!";
        }
      },
      toggle: function(){
        this.set('completed', !this.get('completed'));
      }
    });

    var task1 = new Task({
      title:'do it!',
      completed:true
    });

    //セッター
    //task1.set('title', 'newTitle');

    //ゲッター
    //var title = task1.get('title');

    console.log(task1.toJSON());
    task1.set({title: ''},{validate: true});
    //task1.toggle();

    console.log(task1.toJSON());

})();