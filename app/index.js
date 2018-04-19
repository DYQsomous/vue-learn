require('./index.scss');
var Vue = require('vue/dist/vue.min.js');

var app1 = new Vue({
  el: '#app',
  data: {
    message: 'hello world!',
    todo: [{
      text: 'do1'
    },
    {
      text: 'do2'
    }
    ],
    url: 'http://baidu.com'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app2 = new Vue({
  el: "#app2",
  data: {
    a: 1,
    firstName: 'Daisy',
    lastName: 'Dai',
    newTodo: '',
    todos: [{
      text: 'learn vue'
    },
    {
      text: 'learn webpack'
    }
    ],
    flag: 2,
  },
  methods: {
    addTodo: function () {
      var text = this.newTodo.trim();
      if (text) {
        this.todos.push({
          text: text
        });
        this.newTodo = '';
      }
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    },
    setFullName: function () {
      this.fullName = 'Forrest Cheng Gu'
    }
  },
  computed: {
    b: function () {
      return Number(this.a) + 2;
    },
    fullName: {
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      set: function (newValue) {
        var names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1]
      }
    },
    classObject: function () {
      var classObj = {
        'classA': (this.flag === 1),
        'classB': (this.flag === 2)
      }
      return classObj
    },
    styleObject: function () {
      var styleObj = {
        'width': (this.flag * 50) + 'px',
        'height': (this.flag * 80) + 'px'
      }
      return styleObj
    }
  }
})
