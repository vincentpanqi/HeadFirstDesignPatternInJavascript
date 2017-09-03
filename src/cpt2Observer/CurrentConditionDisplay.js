const mixins = require('es6-mixins')
const Observer = require('./Observer')
const DisplayElement = require('./DisplayElement')

class CurrentConditionDisplay {
  constructor(weatherData) {
    mixins([Observer, DisplayElement], this);
    weatherData.registerObserver(this)
  }

  update(temperature, humidity, pressure) {
    this.temperature = temperature
    this.humidity = humidity
    this.pressure = pressure
    this.display()
  }

  display() {
    console.log('CurrentConditionDisplay: ', `${this.temperature} F degrees and humidity %${this.humidity}`)
  }
}

module.exports = CurrentConditionDisplay