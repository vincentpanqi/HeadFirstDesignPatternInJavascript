const CondimentDecorator = require('./CondimentDecorator')

class Mocha extends CondimentDecorator {
  constructor(beverage) {
    super()
    this.beverage = beverage
  }

  cost() {
    return 0.3 + this.beverage.cost() 
  }

  getDescription() {
    return 'Mocha, ' + this.beverage.getDescription()
  }
}

module.exports = Mocha
