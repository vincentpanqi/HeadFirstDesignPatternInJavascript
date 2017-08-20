const Duck = require('./Duck')

class MallardDuck extends Duck {

  display() {
    console.log('\nMallardDuck', 'display...')
  }
}

module.exports = MallardDuck