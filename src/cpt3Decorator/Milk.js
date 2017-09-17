const CondimentDecorator = require('./CondimentDecorator')

class Milk extends CondimentDecorator {
  constructor(beverage) {
    super()
    this.beverage = beverage
  }

  cost() {
    return 0.2 + this.beverage.cost() 
  }

  getDescription() {
    return 'Milk, ' + this.beverage.getDescription()
  }
}

module.exports = Milk
