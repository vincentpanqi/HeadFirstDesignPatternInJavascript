const mixins = require('es6-mixins')

class A {
  a() {
    console.log('a method...')
  }
}

class B {
  b() {
    console.log('b method...')
  }
}

class C {
  c() {
    console.log('c method...')
  }
}

class D {
  constructor() {
    mixins([A, B, C], this);
  }
}

const d = new D()
d.a()
d.b()
d.c()
