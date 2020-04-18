const URLS = require('../constants/data').URLS.BROWSERSTACK
const CREDENTIALS = require('../constants/data').CREDENTIALS.BROWSERSTACK

let jsonQuery = require('json-query')
let request = require('request')
let syncRequest = require('sync-request')

const printBrowserstackSessionURL = () => {
  let browserstack_config = getBrowserstackConfiguration()
  let browserstack_projectID = getBrowserstackProjectID(
    browserstack_config.project,
  )
  let browserstack_buildID = getBrowserstackBuildId(
    browserstack_projectID,
    browserstack_config.build,
  )

  let TEST_RESULT_URL =
    getBrowserstackDashboardEndpoint() +
    '/' +
    browserstack_buildID +
    URLS.SESSIONS_PATH +
    '/' +
    driver.sessionId

  console.log(`** ** TEST VIDEO RECORDED ** **`)
  console.log(`${TEST_RESULT_URL}`)
  console.log(`** ** BROWSERSTACK LINK ABOVE ** **`)
}

const markBrowserstackTestStatus = (testStatus, reason) => {
  let REST_API_URL =
    getBrowserstackAPIEndpoint() + URLS.SESSIONS_PATH + '/' + driver.sessionId

  request(
    {
      uri:
        'https://' +
        CREDENTIALS.USER +
        ':' +
        CREDENTIALS.KEY +
        '@' +
        REST_API_URL +
        '.json',
      method: 'PUT',
      form: { status: testStatus, reason: reason },
    },
    function (error) {
      if (error) {
        console.log('Failed to mark Browserstack Status: ', error)
      }
    },
  )
}

function getBrowserstackConfiguration() {
  let driverConfig = driver.config
  let wdioConfig

  wdioConfig = jsonQuery('[_]', {
    data: driverConfig,
  }).value

  let capabilities = require('../../' + wdioConfig).config.capabilities

  let build, project

  build = jsonQuery('[build]', {
    data: capabilities,
  }).value.toString()

  project = jsonQuery('[project]', {
    data: capabilities,
  }).value.toString()

  return { project, build }
}

function getBrowserstackProjectID(project) {
  var projectID
  let APP_AUTOMATE_URL =
    'https://' + getBrowserstackAPIEndpoint() + URLS.PROJECTS_PATH + '.json'

  let res = syncRequest('GET', APP_AUTOMATE_URL, {
    headers: {
      authorization:
        'Basic ' +
        new Buffer(CREDENTIALS.USER + ':' + CREDENTIALS.KEY, 'ascii').toString(
          'base64',
        ),
    },
  })

  var response = JSON.parse(res.getBody())

  projectID = jsonQuery('[name=' + project + '][id]', {
    data: response,
  }).value

  return projectID
}

function getBrowserstackBuildId(projectID, build) {
  let API_URL =
    'https://' +
    getBrowserstackAPIEndpoint() +
    URLS.PROJECTS_PATH +
    '/' +
    projectID +
    '.json'
  var buildID

  var res = syncRequest('GET', API_URL, {
    headers: {
      authorization:
        'Basic ' +
        new Buffer(CREDENTIALS.USER + ':' + CREDENTIALS.KEY, 'ascii').toString(
          'base64',
        ),
    },
  })

  var response = JSON.parse(res.getBody('utf8')).project

  buildID = jsonQuery('builds[name=' + build + '][hashed_id]', {
    data: response,
  }).value

  return buildID
}

function getBrowserstackAPIEndpoint() {
  const endpoint = driver.isMobile
    ? URLS.APP_AUTOMATE_API
    : URLS.WEB_AUTOMATE_API

  return endpoint
}

function getBrowserstackDashboardEndpoint() {
  const endpoint = driver.isMobile
    ? URLS.APP_AUTOMATE_DASHBOARD
    : URLS.WEB_AUTOMATE_DASHBOARD

  return endpoint
}

module.exports = {
  printBrowserstackSessionURL,
  markBrowserstackTestStatus,
}
