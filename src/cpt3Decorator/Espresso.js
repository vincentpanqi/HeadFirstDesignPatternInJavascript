const Beverage = require('./Beverage')

class Espresso extends Beverage {
  cost() {
    return 0.9
  }

  getDescription() {
    return 'Espresso'
  }
}

module.exports = Espresso