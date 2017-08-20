const Duck = require('./Duck')

class DecoyDuck extends Duck {

  display() {
    console.log('\nDecoyDuck', 'display...')
  }
}

module.exports = DecoyDuck