const Turkey = require('./Turkey')

class TurkeyAdapter {
  constructor(turkey) {
    this.turkey = turkey;
  }

  quak() {
    console.log('TurkeyAdapter', 'quak')
    this.turkey.gobble();
  }

  fly() {
    console.log('TurkeyAdapter', 'fly')
    for(let i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  }
}

module.exports = TurkeyAdapter
