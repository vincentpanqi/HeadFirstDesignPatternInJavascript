const CondimentDecorator = require('./CondimentDecorator')

class Whip extends CondimentDecorator {
  constructor(beverage) {
    super()
    this.beverage = beverage
  }

  cost() {
    return 0.5 + this.beverage.cost() 
  }

  getDescription() {
    return 'Whip, ' + this.beverage.getDescription()
  }
}

module.exports = Whip
