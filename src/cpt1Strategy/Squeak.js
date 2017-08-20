const QuackBehavior = require('./QuackBehavior')

class Squeak extends QuackBehavior {
  constructor() {
    super()
  }

  quack() {
    console.log('Squeak', 'I can squeak...')
  }
}

module.exports = Squeak
