const CREDENTIALS = {
  KICKSTARTER: {
    VALID: {
      EMAIL_ID: process.env.EMAIL_ID,
      PASSWORD: process.env.PASSWORD,
    },
    INVALID: {
      EMAIL_ID: process.env.EMAIL_ID_INVALID,
      PASSWORD: process.env.PASSWORD_INVALID,
    },
  },
  BROWSERSTACK: {
    USER: process.env.BROWSERSTACK_USER,
    KEY: process.env.BROWSERSTACK_ACCESSKEY,
  },
}

const NAMESPACES = {
  KICKSTARTER: 'com.kickstarter.kickstarter',
}

const URLS = {
  BROWSERSTACK: {
    APP_AUTOMATE_API: 'api-cloud.browserstack.com/app-automate',
    APP_AUTOMATE_DASHBOARD:
      'https://app-automate.browserstack.com/dashboard/v2/builds',
    PROJECTS_PATH: '/projects',
    SESSIONS_PATH: '/sessions',
  },
}

module.exports = {
  CREDENTIALS,
  NAMESPACES,
  URLS,
}
