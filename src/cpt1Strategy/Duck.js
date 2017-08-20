const FlyBehavior = require('./FlyBehavior')
const QuackBehavior = require('./QuackBehavior')

class Duck {
  constructor() {
    this.flyBehavior;
    this.quackBehavior;
  }

  swim() {
    console.log('swim', 'I can swim')
  }

  display() {
    console.log('display', this)
  }

  performFly() {
    this.flyBehavior.fly()
  }

  performQuack() {
    this.quackBehavior.quack()
  }

  setFlyBehavior(flyBehavior) {
    this.flyBehavior = flyBehavior
  }

  setQuackBehavior(quackBehavior) {
    this.quackBehavior = quackBehavior
  }
}

module.exports = Duck