const util = require('../test/helpers/browserstack.utils')

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

  /* 
  
  Reference: 
  https://github.com/webdriverio/webdriverio/blob/master/examples/wdio.conf.js

   */

  afterTest: function (test, context, { error }) {
    if (error) {
      // stack is available at error.stack
      FAILURE_REASON = error.message
    }
  },
  after: function (result) {
    let testStatus,
      reason = ''

    if (result == 1) {
      testStatus = 'failed'
      reason = FAILURE_REASON || ''
    } else if (result == 0) {
      testStatus = 'passed'
    }

    util.printBrowserstackSessionURL()
    util.markBrowserstackTestStatus(testStatus, reason)
  },
}
