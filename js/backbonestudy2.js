(function(){
  //Model
  var Task = Backbone.Model.extend({
    defaults:{
      title:"do someting",
      completed: false
    }
  });

  var task = new Task();

  //View
  var TaskView = Backbone.View.extend({
    tagName: 'li'
  });

  var taskView = new TaskView({model: task});
  console.log(taskView.$el);

})();
