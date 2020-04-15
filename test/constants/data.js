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
}

const NAMESPACES = {
  KICKSTARTER: 'com.kickstarter.kickstarter',
}

module.exports = {
  CREDENTIALS,
  NAMESPACES,
}
