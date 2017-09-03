var Interface = require('interface')

const Subject = new Interface('registerObserver', 'removeObserver', 'notifyObservers')

module.exports = Subject