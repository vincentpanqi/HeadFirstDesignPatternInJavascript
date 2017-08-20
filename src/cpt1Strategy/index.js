// ducks
const Duck = require('./Duck')
const MallardDuck = require('./MallardDuck')
const RedheadDuck = require('./RedheadDuck')
const RubberDuck = require('./RubberDuck')
const DecoyDuck = require('./DecoyDuck')

// fly bahaviors
const FlyWithWings = require('./FlyWithWings')
const FlyNoWay = require('./FlyNoWay')

// quack behaviors
const Quack = require('./Quack')
const Squeak = require('./Squeak')
const MuleQuack = require('./MuleQuack')

function test() {
  console.log('\n-------- cpt1Strategy begin --------')

  // mallardDuck
  const mallardDuck = new MallardDuck()
  mallardDuck.display()
  mallardDuck.setFlyBehavior(new FlyWithWings())
  mallardDuck.performFly()
  mallardDuck.setQuackBehavior(new Quack())
  mallardDuck.performQuack()

  // redheadDuck
  const redheadDuck = new RedheadDuck()
  redheadDuck.display()
  redheadDuck.setFlyBehavior(new FlyWithWings())
  redheadDuck.performFly()
  redheadDuck.setQuackBehavior(new Quack())
  redheadDuck.performQuack()

  // rubberDuck
  const rubberDuck = new RubberDuck()
  rubberDuck.display()
  rubberDuck.setFlyBehavior(new FlyNoWay())
  rubberDuck.performFly()
  rubberDuck.setQuackBehavior(new Squeak())
  rubberDuck.performQuack()

  // decoyDuck
  const decoyDuck = new DecoyDuck()
  decoyDuck.display()
  decoyDuck.setFlyBehavior(new FlyNoWay())
  decoyDuck.performFly()
  decoyDuck.setQuackBehavior(new MuleQuack())
  decoyDuck.performQuack()

  console.log('\n-------- cpt1Strategy end --------')
}

module.exports = {
  test
}
