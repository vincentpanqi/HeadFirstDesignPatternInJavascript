const QuackBehavior = require('./QuackBehavior')

class MuleQuack extends QuackBehavior {
  constructor() {
    super()
  }

  quack() {
    console.log('MuleQuack', 'I cannot quack...')
  }
}

module.exports = MuleQuack
