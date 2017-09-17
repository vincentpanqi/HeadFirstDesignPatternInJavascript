const CondimentDecorator = require('./CondimentDecorator')

class Soy extends CondimentDecorator {
  constructor(beverage) {
    super()
    this.beverage = beverage
  }

  cost() {
    return 0.4 + this.beverage.cost() 
  }

  getDescription() {
    return 'Soy, ' + this.beverage.getDescription()
  }
}

module.exports = Soy
