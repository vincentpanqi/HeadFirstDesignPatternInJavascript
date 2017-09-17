const Beverage = require('./Beverage')

class DarkRoast extends Beverage {
  cost() {
    return 0.9
  }

  getDescription() {
    return 'DarkRoast'
  }
}

module.exports = DarkRoast