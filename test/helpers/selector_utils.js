const assert = require('assert')
const DATA = require('../constants/data')

const getResourceId = selector => {
  const resource = driver.isAndroid
    ? resolveForAndroid(selector)
    : resolveForIOS(selector)

  return resource
}

const NAMESPACE = DATA.NAMESPACES.KICKSTARTER

const resolveForAndroid = selector => {
  let placeholder = '__placeholder__'
  let template =
    'android=new UiSelector().resourceId("' +
    NAMESPACE +
    ':id/' +
    placeholder +
    '")'
  let composedResourceId = template.replace(placeholder, selector)

  return composedResourceId
}

const resolveForIOS = selector => {
  assert.fail(selector + ' <-- Test not implemented for IOS!')
}

module.exports = {
  getResourceId,
  resolveForIOS,
}
