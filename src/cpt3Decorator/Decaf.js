const Beverage = require('./Beverage')

class Decaf extends Beverage {
  cost() {
    return 0.9
  }

  getDescription() {
    return 'Decaf'
  }
}

module.exports = Decaf