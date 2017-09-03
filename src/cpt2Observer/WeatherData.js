const Subject = require('./Subject')
const Observer = require('./Observer')

class WeatherData extends Subject {
  constructor() {
    super()
    this.observers = []
  }

  registerObserver(o) {
    this.observers.push(o)
  }

  removeObserver(o) {
    const index = this.observers.indexOf(o)
    this.observers.splice(index, 1)
  }

  notifyObservers() {
    this.observers.forEach(o => {
      o.update(this.temperature, this.humidity, this.pressure)
    })
  }

  getTeamperature() {

  }

  getHumidity() {

  }

  getPressure() {

  }

  measurementsChanged() {
    this.notifyObservers()
  }

  setMeasurements(temperature, humidity, pressure) {
    this.temperature = temperature
    this.humidity = humidity
    this.pressure = pressure
    this.measurementsChanged()
  }
}

module.exports = WeatherData