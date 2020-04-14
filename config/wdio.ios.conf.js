exports.config = {
  user: process.env.BROWSERSTACK_USER,
  key: process.env.BROWSERSTACK_ACCESSKEY,

  updateJob: false,
  specs: ['./test/specs/ios/*.js'],
  exclude: [],

  capabilities: [
    {
      name: 'appium_test',
      build: 'Alpha',
      project: 'myBeepr-iOS',
      device: 'iPhone 11 Pro',
      os_version: '13',
      app:
        process.env.BROWSERSTACK_APP_ID ||
        'bs://85d918b76d3b53b4fe3c623949125a76d65e3a81',
      'browserstack.debug': true,
    },
  ],

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
}
