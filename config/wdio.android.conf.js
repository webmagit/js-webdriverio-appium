exports.config = {
  user: process.env.BROWSERSTACK_USER,
  key: process.env.BROWSERSTACK_ACCESSKEY,

  updateJob: false,
  specs: ['./test/specs/android/app.login.spec.js'],
  exclude: [],

  capabilities: [
    {
      platformName: 'Android',
      name: 'appium_test',
      build: 'Alpha',
      project: 'myBeepr-Android',
      device: 'Google Pixel 3',
      os_version: '9.0',
      app: process.env.BROWSERSTACK_APP_ID || 'Kickstarter-Android',
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
  reporters: ['spec'],
}
