const Duck = require('./Duck')

class RubberDuck extends Duck {

  display() {
    console.log('\nRubberDuck', 'display...')
  }
}

module.exports = RubberDuck