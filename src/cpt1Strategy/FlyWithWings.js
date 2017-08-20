const FlyBehavior = require('./FlyBehavior')

class FlyWithWings extends FlyBehavior {
  constructor() {
    super()
  }

  fly() {
    console.log('FlyWithWings', 'I can FlyWithWings...')
  }
}

module.exports = FlyWithWings
