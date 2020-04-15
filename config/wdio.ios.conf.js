exports.config = {
  user: process.env.BROWSERSTACK_USER,
  key: process.env.BROWSERSTACK_ACCESSKEY,

  updateJob: false,
  specs: ['./test/specs/ios/app.test.spec.js'],
  exclude: [],

  capabilities: [
    {
      name: 'appium_test',
      build: 'Alpha',
      project: 'myBeepr-iOS',
      device: 'iPhone 11 Pro',
      os_version: '13',
      app: process.env.BROWSERSTACK_IOS_APP || 'Browserstack-Sample-IOS-ipa',
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
