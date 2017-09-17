const Beverage = require('./Beverage')

class HouseBlend extends Beverage {
  cost() {
    return 0.9
  }

  getDescription() {
    return 'HouseBlend'
  }
}

module.exports = HouseBlend