const FlyBehavior = require('./FlyBehavior')

class FlyNoWay extends FlyBehavior {
  constructor() {
    super()
  }

  fly() {
    console.log('FlyNoWay', 'I cannot fly...')
  }
}

module.exports = FlyNoWay
