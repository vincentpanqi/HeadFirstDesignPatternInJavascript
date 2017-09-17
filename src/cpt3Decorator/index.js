const Milk = require('./Milk')
const Mocha = require('./Mocha')
const Soy = require('./Soy')
const Whip = require('./Whip')

const DarkRoast = require('./DarkRoast')
const Decaf = require('./Decaf')
const Espresso = require('./Espresso')
const HouseBlend = require('./HouseBlend')

function test() {
  console.log('\n-------- cpt2Observer begin --------')

  console.log('\n-------- HouseBlend begin --------')
  let houseBlend = new HouseBlend()
  houseBlend = new Milk(houseBlend)
  houseBlend = new Soy(houseBlend)
  houseBlend = new Soy(houseBlend)
  houseBlend = new Mocha(houseBlend)
  console.log('description', houseBlend.getDescription())
  console.log('cost', houseBlend.cost())

  console.log('\n-------- Decaf begin --------')
  let decaf = new Decaf()
  decaf = new Milk(decaf)
  decaf = new Milk(decaf)
  decaf = new Milk(decaf)
  decaf = new Whip(decaf)
  console.log('description', decaf.getDescription())
  console.log('cost', decaf.cost())

  console.log('\n-------- cpt2Observer end --------')
}

module.exports = {
  test
}