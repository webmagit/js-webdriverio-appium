const { config } = require('./wdio.shared.conf')

config.specs = ['./test/specs/web/basic.test.spec.js']

config.capabilities = [
  {
    browser: 'chrome',
    name: 'Browserstack-[WebdriverIO] Sample Test',
    project: 'myBeepr-web',
    build: 'Gamma',
  },
]

config.services = ['browserstack']

exports.config = config
