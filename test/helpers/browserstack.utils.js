const URLS = require('../constants/data').URLS.BROWSERSTACK
const CREDENTIALS = require('../constants/data').CREDENTIALS.BROWSERSTACK

let jsonQuery = require('json-query')
let request = require('request')
let syncRequest = require('sync-request')

const printBrowserstackSessionURL = () => {
  let browserstack_projectID = getBrowserstackProjectID()
  let browserstack_buildID = getBrowserstackBuild(browserstack_projectID)

  let TEST_RESULT_URL =
    URLS.APP_AUTOMATE_DASHBOARD +
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
    URLS.APP_AUTOMATE_API + URLS.SESSIONS_PATH + '/' + driver.sessionId

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

function getBrowserstackProjectID() {
  var projectID
  let project = 'myBeepr-Android'
  let APP_AUTOMATE_URL =
    'https://' + URLS.APP_AUTOMATE_API + URLS.PROJECTS_PATH + '.json'

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

function getBrowserstackBuild(projectID) {
  let APP_AUTOMATE_URL =
    'https://' +
    URLS.APP_AUTOMATE_API +
    URLS.PROJECTS_PATH +
    '/' +
    projectID +
    '.json'
  var buildID

  var res = syncRequest('GET', APP_AUTOMATE_URL, {
    headers: {
      authorization:
        'Basic ' +
        new Buffer(CREDENTIALS.USER + ':' + CREDENTIALS.KEY, 'ascii').toString(
          'base64',
        ),
    },
  })

  var response = JSON.parse(res.getBody('utf8')).project
  var browserstack_buildName = 'Alpha'

  buildID = jsonQuery(
    'builds[name=' + browserstack_buildName + '][hashed_id]',
    {
      data: response,
    },
  ).value

  return buildID
}

module.exports = {
  printBrowserstackSessionURL,
  markBrowserstackTestStatus,
}
