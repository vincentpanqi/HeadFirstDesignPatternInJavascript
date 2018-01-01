const Turkey = require('./Turkey')

class WildTurkey extends Turkey {
  constructor() {
    super()
  }

  gobble() {
    console.log('WildTurkey', 'gobble')
  }

  fly() {
    console.log('WildTurkey', 'I am flying a short distance')
  }
}

module.exports = WildTurkey
