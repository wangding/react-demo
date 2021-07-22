class Person {
  constructor(name, age) {
    this.name = name;
    this.age  = age;
  }

  print() {
    console.log(this.name, this.age);
  }
}

class Student extends Person {
  constructor(name, age, sno) {
    super(name, age);
    this.sno  = sno;
  }
}

class Teacher extends Person {
  constructor(name, age, title) {
    super(name, age);
    this.title = title;
  }
}

const st = new Student('zhangsan', 23, '222');
st.print();
