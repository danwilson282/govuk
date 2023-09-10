'use strict'

module.exports = {
  method: 'GET',
  path: '/',
  handler: (request, h) => h.view('home', {
    pageHeading: 'Dan Wilson for Prime Minister!!!',
    pageText: 'Click the button below to make Dan the Prime Minister',
    buttonText: 'Make Dan Prime Minister'
  })
}
