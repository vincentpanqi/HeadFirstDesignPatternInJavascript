const Beverage = require('./Beverage')

class CondimentDecorator extends Beverage {
  getDescription() {
    return 'CondimentDecorator'
  }
}

module.exports = CondimentDecorator
