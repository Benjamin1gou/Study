// new Vue({
//     el: '#jjj',
//     data: {
//         message: 'Hello Vue.js!'
//     }
// });

// new Vue({
//   el:'#app',
//   data: {
//     todos: [
//       { text: 'aaa'},
//       { text: 'bbb'},
//       { text: 'ccc'}
//     ]
//   }
// });

// new Vue({
//   el:"#clickIvent",
//   data: {
//     message: 'abcdefg'
//   },
//   methods: {
//     //反転メソッド
//     reverseMessage: function(){
//       this.message = this.message.split('').reverse().join('');
//     }
//   }
// });

new vue({
  el: '#todo',
  data:{
    newTodo:'',
    todos:[
      { text: 'add some todos'}
    ]
  },
  methods: {
    addTodo: function(){
      var text = this.newTodo.trim();
      if(text) {
        this.todos.push({ text: text });
        this.newTodo = '';
      }
    },
    removeTodo: function(index) {
      this.todos.splice(index, 1);
    }
  }
});
