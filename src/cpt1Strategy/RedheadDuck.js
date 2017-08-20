const Duck = require('./Duck')

class RedheadDuck extends Duck {

  display() {
    console.log('\nRedheadDuck', 'display...')
  }
}

module.exports = RedheadDuck