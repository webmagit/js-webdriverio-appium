const { config } = require('./wdio.shared.conf')

config.specs = ['./test/specs/android/app.login.spec.js']

config.capabilities = [
  {
    platformName: 'Android',
    name: 'appium_test',
    build: 'Alpha',
    project: 'myBeepr-Android',
    device: 'Google Pixel 3',
    os_version: '9.0',
    app: process.env.BROWSERSTACK_ANDROID_APP || 'Kickstarter-Android',
    'browserstack.debug': true,
  },
]

exports.config = config
