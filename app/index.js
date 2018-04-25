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
    url: 'http://baidu.com',
    numbers: [1, 34, 5, 40]
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    compareNumber: function (a, b) {
      return a - b
    }
  },
  computed: {
    doItem: function () {
      return this.todo.filter(function (item) {
        return item.text.match(/do1/)
      })
    },
  }
})

app1.todo.push({ text: 'do3' });//Add new el at end
console.log('push', app1.todo);
app1.todo.pop(); //Delete the last el
console.log('pop', app1.todo);
app1.todo.unshift({ text: 'do4' });//Add new el at start
console.log('unshift', app1.todo);
app1.todo.shift(); //Delete the first el
console.log('shift', app1.todo);
app1.todo.splice(1, 1) //Delet 1 el from index 1
console.log('splice', app1.todo);
app1.todo.push({ text: 'do5' });
app1.todo.push({ text: 'do6' });
app1.todo.sort(); //Sort array by ASCII
console.log('sort array', app1.numbers.sort()); //Sort number array by ASCII
console.log('sort number', app1.numbers.sort(app1.compareNumber));//Sort array by compareNumber fn.



var app2 = new Vue({
  el: "#app2",
  data: {
    a: 1,
    firstName: 'Daisy',
    lastName: 'Dai',
    newTodo: '',
    todos: [{
      text: 'learn vue'
    },{
      text: 'learn webpack'
    }],
    guestObj: {
      FirstName: 'John',
      LastName: 'Doe',
      Age: 30
    },
    counter: 2,
    flag: true,
  },
  methods: {
    addTodo: function () {
      var content = this.newTodo.trim();
      if (content) {
        this.todos.push({
          text: content
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
        'classA': (this.counter === 1),
        'classB': (this.counter === 2)
      }
      return classObj
    },
    styleObject: function () {
      var styleObj = {
        'width': (this.counter * 50) + 'px',
        'height': (this.counter * 80) + 'px'
      }
      return styleObj
    }
  }
})

app2.todos[0] = {}; //can't work at 1.X.X
console.log('app2.todos: ', app2.todos);
app2.todos.length = 3;
console.log('app2.todos: ', app2.todos);
// app2.todos.$set(0, {text: 'msgChanged'}) //can't work at 2.x.x
// console.log('app2.todos: ', app2.todos);
// app2.todos.$remove({text: 'learn webpack'}) //can't work at 2.x.x
// console.log('app2.todos: ', app2.todos);



