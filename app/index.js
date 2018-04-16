new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [
      {text: 'Learn Webpacke'},
      {text: 'Learn vue'},
      {text: 'Learn single page application'}
    ]
  },
  methods: {
    addTodo: function () {
      var text = this.newTodo.trim();
      console.log('text: ', text)
      if (text) {
        this.todos.push({ text: text });
        this.newTodo = '';
      }
    },
    removeTodo: function(index) {
      this.todos.splice(index, 1)
    }
  }
})