let FAILURE_REASON = ''
let browserstack_username = process.env.BROWSERSTACK_USER
let browserstack_password = process.env.BROWSERSTACK_ACCESSKEY

exports.config = {
  user: browserstack_username,
  key: browserstack_password,

  updateJob: false,
  exclude: [],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 90000,
  },
  reporters: ['spec'],

  afterTest: function (test, context, { error }) {
    if (error) {
      // stack is available at error.stack
      FAILURE_REASON = error.message
    }
  },
  after: function (result) {
    let request = require('request')

    let browserstack_sessionID = driver.sessionId
    let testStatus,
      reason = ''

    if (result == 1) {
      testStatus = 'failed'
      reason = FAILURE_REASON || ''
    } else if (result == 0) {
      testStatus = 'passed'
    }

    request(
      {
        uri:
          'https://' +
          browserstack_username +
          ':' +
          browserstack_password +
          '@api-cloud.browserstack.com/app-automate/sessions/' +
          browserstack_sessionID +
          '.json',
        method: 'PUT',
        form: { status: testStatus, reason: reason },
      },
      function (error) {
        if (error) {
          console.log('Failed to mark Browserstack Status:', error)
        }
      },
    )
  },
}
