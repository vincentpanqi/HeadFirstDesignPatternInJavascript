const mixins = require('es6-mixins')
const Observer = require('./Observer')
const DisplayElement = require('./DisplayElement')

class StatisticsDisplay {
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
    console.log('StatisticsDisplay: ', `Humidity %${this.humidity}`)
  }
}

module.exports = StatisticsDisplay