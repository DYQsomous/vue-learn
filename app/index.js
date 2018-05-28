// import { SIGABRT } from 'constants';

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
      msg: 'learn vue'
    },{
      msg: 'learn webpack'
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
          msg: content
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
// app2.todos.length = 3;
// console.log('app2.todos: ', app2.todos);
// app2.todos.$set(0, {text: 'msgChanged'}) //can't work at 2.x.x
// console.log('app2.todos: ', app2.todos);
// app2.todos.$remove({text: 'learn webpack'}) //can't work at 2.x.x
// console.log('app2.todos: ', app2.todos);


var app3 = new Vue({
  el: '#app3',
  data: {
    name: 'Vue.js',
    picked: '',
    message: '',
    lazyMsg: '',
    selected: 'A',
    selectedItem: 'B',
    checked: false,
    checkedName: [],
    checkedItem: document.getElementsByClassName('check-item'),
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'There', value: 'C' },
    ],
    keyCodes: {
      0: "That key has no keycode",
      3: "break",
      8: "backspace / delete",
      9: "tab",
      12: 'clear',
      13: "enter",
      16: "shift",
      17: "ctrl",
      18: "alt",
      19: "pause/break",
      20: "caps lock",
      21: "hangul",
      25: "hanja",
      27: "escape",
      28: "conversion",
      29: "non-conversion",
      32: "spacebar",
      33: "page up",
      34: "page down",
      35: "end",
      36: "home",
      37: "left arrow",
      38: "up arrow",
      39: "right arrow",
      40: "down arrow",
      41: "select",
      42: "print",
      43: "execute",
      44: "Print Screen",
      45: "insert",
      46: "delete",
      47: "help",
      48: "0",
      49: "1",
      50: "2",
      51: "3",
      52: "4",
      53: "5",
      54: "6",
      55: "7",
      56: "8",
      57: "9",
      58: ":",
      59: "semicolon (firefox), equals",
      60: "<",
      61: "equals (firefox)",
      63: "ß",
      64: "@ (firefox)",
      65: "a",
      66: "b",
      67: "c",
      68: "d",
      69: "e",
      70: "f",
      71: "g",
      72: "h",
      73: "i",
      74: "j",
      75: "k",
      76: "l",
      77: "m",
      78: "n",
      79: "o",
      80: "p",
      81: "q",
      82: "r",
      83: "s",
      84: "t",
      85: "u",
      86: "v",
      87: "w",
      88: "x",
      89: "y",
      90: "z",
      91: "Windows Key / Left ⌘ / Chromebook Search key",
      92: "right window key",
      93: "Windows Menu / Right ⌘",
      95: "sleep",
      96: "numpad 0",
      97: "numpad 1",
      98: "numpad 2",
      99: "numpad 3",
      100: "numpad 4",
      101: "numpad 5",
      102: "numpad 6",
      103: "numpad 7",
      104: "numpad 8",
      105: "numpad 9",
      106: "multiply",
      107: "add",
      108: "numpad period (firefox)",
      109: "subtract",
      110: "decimal point",
      111: "divide",
      112: "f1",
      113: "f2",
      114: "f3",
      115: "f4",
      116: "f5",
      117: "f6",
      118: "f7",
      119: "f8",
      120: "f9",
      121: "f10",
      122: "f11",
      123: "f12",
      124: "f13",
      125: "f14",
      126: "f15",
      127: "f16",
      128: "f17",
      129: "f18",
      130: "f19",
      131: "f20",
      132: "f21",
      133: "f22",
      134: "f23",
      135: "f24",
      144: "num lock",
      145: "scroll lock",
      160: "^",
      161: '!',
      163: "#",
      164: '$',
      165: 'ù',
      166: "page backward",
      167: "page forward",
      168: "refresh",
      169: "closing paren (AZERTY)",
      170: '*',
      171: "~ + * key",
      172: "home key",
      173: "minus (firefox), mute/unmute",
      174: "decrease volume level",
      175: "increase volume level",
      176: "next",
      177: "previous",
      178: "stop",
      179: "play/pause",
      180: "e-mail",
      181: "mute/unmute (firefox)",
      182: "decrease volume level (firefox)",
      183: "increase volume level (firefox)",
      186: "semi-colon / ñ",
      187: "equal sign",
      188: "comma",
      189: "dash",
      190: "period",
      191: "forward slash / ç",
      192: "grave accent / ñ / æ / ö",
      193: "?, / or °",
      194: "numpad period (chrome)",
      219: "open bracket",
      220: "back slash",
      221: "close bracket / å",
      222: "single quote / ø / ä",
      223: "`",
      224: "left or right ⌘ key (firefox)",
      225: "altgr",
      226: "< /git >, left back slash",
      230: "GNOME Compose Key",
      231: "ç",
      233: "XF86Forward",
      234: "XF86Back",
      235: "non-conversion",
      240: "alphanumeric",
      242: "hiragana/katakana",
      243: "half-width/full-width",
      244: "kanji",
      255: "toggle touchpad"
    }
  },
  methods: {
    greet: function (event) {
      console.log('Hello ' + this.name + '!');
      console.log(event.target.tagName);
    },
    say: function (msg) {
      console.log('say', msg);
    },
    sayNativeEvent: function (sth, event) {
      event.stopPropagation();
      event.preventDefault();
      console.log('say', sth);
    },
    testPrevent: function () {
      console.log('Click div');
    },
    keyCode: function (e) {
      console.log('keyUp on: ', this.keyCodes[e.keyCode]);
    }
  },
  computed: {
    checkedAll: {
      get: function () {
        return this.checkedName.length === this.checkedItem.length;
      },
      set: function (checkedAllStatus) {
        for (let index = 0; index < this.checkedItem.length; index++) {
          this.checkedItem[index].checked = checkedAllStatus;
          if (checkedAllStatus) {
            this.checkedName.push(this.checkedItem[index].value)
          } else {
            this.checkedName = [];
          }
        }
      }
    }
  }
})

// app3.greet();
// Add custom key modifiers alias.
// Vue.directive('on').keyCodes.f1 = 112;

var MyComponent = Vue.extend({
  template: '<div> A custom component 1</div>'
})

// Vue.component('my-component', MyComponent);
var parent = Vue.extend({
  template: '<my-component></my-component>',
  components: {
    'my-component': MyComponent,
  }
})
Vue.component('parent', parent);

var TestComponent = Vue.extend({
  template: '<test-compt></test-compt>',
  replace: false,
  components: {
    'test-compt': {
      template: '<h1>Hello World 1</h1>'
    }
  }
})
Vue.component('test-component', TestComponent);

Vue.component('test-props', {
  props: ['msg', 'myMessage', 'myContent', 'num', 'number'],
  template: `<span> {{msg}} {{myMessage}} {{myContent}} {{num +1}} {{number + 1}} </span>`
})

Vue.component('test-bindtype', {
  // props: ['msg'],
  props: {
    'msg': {
      type: Boolean,
      twoWay: false,
    },
    // basic type check (`null` means accept any type)
    // String/Number/Boolean/Function/Object/Array
    propA: Number,
    // multiple possible types (1.0.21+)
    propM: [String, Number],
    // a required string
    propB: {
      type: String,
      required: true
    },
    // a number with default value
    propC: {
      type: Number,
      default: 100
    },
    // object/array defaults should be returned from a
    // factory function
    propD: {
      type: Object,
      default: function () {
        return { msg: 'hello' }
      }
    },
    // indicate this prop expects a two-way binding. will
    // raise a warning if binding type does not match.
    propE: {
      twoWay: true
    },
    // custom validator function
    propF: {
      validator: function (value) {
        return value > 10
      }
    },
    // coerce function (new in 1.0.12)
    // cast the value before setting it on the component
    propG: {
      coerce: function (val) {
        return val + '' // cast the value to string
      }
    },
    propH: {
      coerce: function (val) {
        return JSON.parse(val) // cast the value to Object
      }
    }
  },
  computed: {
    parent: function () {
      return this.$parent;
    },
    root: function () {
      return this.$root;
    }
  },
  methods: {
    showMsg: function () {
      console.log(this.parent); 
      this.msg = true;
      this.$emit('update:msg', this.msg)
    },
    hideMsg: function () {
      console.log(this.root);
      this.msg = false;
      this.$emit('update:msg', this.msg)
    },
    emitShow: function () {
      //In vue2.0 the event $dispatch and $broadcast is deprecated.
      // this.$dispatch('child-msg', this.msg)
      this.$emit('child-msg', [this.msg, !this.msg])
    }
  },
  template: `
    <div>
      <p>Show the message? {{msg}} </p>
      <div v-if="msg">
        <button @click="showMsg">Show message</button>
        <button @click="hideMsg">Hide message</button>
      </div>
      <button @click="emitShow">Emit Show</button>
    </div>`,
})

var app4 = new Vue({
  el: '#app4',
  data: {
    msgCotent: 'World!',
    msgFlag: true,
    items: [],
  },
  created() {
    this.loadData();
  },
  mounted() {
    console.log('this.$refs', this.$refs);
    console.log('this.$refs.ul', this.$refs.ul);
    // console.log('getElementById', document.querySelector('li_1'));
    console.log('this.$refs.btns', this.$refs.btns);
    console.log('this.$refs.btns.msg', this.$refs.btns.msg);
    // console.log(this.$refs.ul.getElementByTagName('li'))
    // console.log(this.$refs.li[1])
    // this.$refs.li[1].scrollIntoView();
  },
  computed: {
    children: function () {
      return this.$children;
    },
  },
  methods: {
    showChildMsg: function () {
      console.log(this.children);
      this.msgFlag = true;
    },
    hideChildMsg: function () {
      this.msgFlag= false;
    },
    handleIt: function (msg) {
      console.log('chold-msg: ', msg);
    },
    loadData() {
      let _this = this;
      setTimeout(function () {
        _this.items = [{ id: '1', name: 'bar1' }, { id: '2', name: 'bar2' }];
      }, 500);
    },
  },
  events: {
    //In vue2.0 the event $dispatch and $broadcast is deprecated.
    'child-msg': function (msg) {
      console.log('chold-msg: ', msg);
    }
  }
})