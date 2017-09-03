const WeatherData = require('./WeatherData')
const CurrentConditionDisplay = require('./CurrentConditionDisplay')
const StatisticsDisplay = require('./StatisticsDisplay')
const ForecastDisplay = require('./ForecastDisplay')
const ThirdPartyDisplay = require('./ThirdPartyDisplay')

function test() {
  console.log('\n-------- cpt2Observer begin --------')

  const weatherData = new WeatherData()
  const currentConditionDisplay = new CurrentConditionDisplay(weatherData)
  const statisticsDisplay = new StatisticsDisplay(weatherData)
  const forecastDisplay = new ForecastDisplay(weatherData)
  const thirdPartyDisplay = new ThirdPartyDisplay(weatherData)

  console.log('\n 80, 65, 30.4')
  weatherData.setMeasurements(80, 65, 30.4)

  console.log('\n 82, 70, 29.2')
  weatherData.setMeasurements(82, 70, 29.2)

  console.log('\n 78, 90, 29.2')
  weatherData.setMeasurements(78, 90, 29.2)

  console.log('\n-------- cpt2Observer end --------')
}

module.exports = {
  test
}
