const WildTurkey = require('./WildTurkey')
const TurkeyAdapter = require('./TurkeyAdapter')

function test() {
  console.log('\n-------- cpt7Adapters begin --------')
  const turkey = new WildTurkey();
  const turkeyAdapter = new TurkeyAdapter(turkey);
  turkeyAdapter.quak();
  turkeyAdapter.fly();

  console.log('\n-------- cpt7Adapters end --------')
}

module.exports = {
  test
}
