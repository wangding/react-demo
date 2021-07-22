// ES5
/*
function Person(name, age) {
  this.name = name;
  this.age  = age;
}

Person.prototype.print = function () {
  console.log(this.name, this.age);
};

let p = new Person('wangding', 45);

p.print();
*/

// ES6
class Person {
  constructor(name, age) {
    this.name = name;
    this.age  = age;
  }

  print() {
    console.log(this.name, this.age);
  }
}

let p = new Person('wangding', 45);
p.print();

/*
let fun = p.print;
let obj = {
  name: 'liming',
  age:  23
};

fun.call(obj);
*/

let fun = p.print;
fun = fun.bind(p);
fun();
