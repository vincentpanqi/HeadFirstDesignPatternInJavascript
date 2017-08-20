const QuackBehavior = require('./QuackBehavior')

class Quack extends QuackBehavior {
  constructor() {
    super()
  }

  quack() {
    console.log('Quack', 'I can quack...')
  }
}

module.exports = Quack
