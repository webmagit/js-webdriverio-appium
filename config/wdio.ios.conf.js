const { config } = require('./wdio.shared.conf')

config.specs = ['./test/specs/ios/app.test.spec.js']

config.capabilities = [
  {
    name: 'appium_test',
    build: 'Alpha',
    project: 'myBeepr-iOS',
    device: 'iPhone 11 Pro',
    os_version: '13',
    app: process.env.BROWSERSTACK_IOS_APP || 'Browserstack-Sample-IOS-ipa',
    'browserstack.debug': true,
  },
]

exports.config = config
