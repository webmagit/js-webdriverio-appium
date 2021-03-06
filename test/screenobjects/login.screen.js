const SELECTORS = require('../selectors/login.selectors')
const DATA = require('../constants/data')

const facebook_login_button = SELECTORS.getFacebookLogin()
const email_login_button = SELECTORS.getEmailLogin()
const email_field = SELECTORS.getEmail()
const password_field = SELECTORS.getPassword()

const waitToShow = () => {
  $(facebook_login_button).waitForDisplayed()
  $(email_login_button).waitForDisplayed()
}

const attemptToLoginViaEmail = () => {
  $(email_login_button).click()
  $(email_field).setValue(DATA.CREDENTIALS.KICKSTARTER.VALID.EMAIL_ID)
  $(password_field).setValue(DATA.CREDENTIALS.KICKSTARTER.VALID.PASSWORD)

  if (driver.isKeyboardShown()) {
    driver.hideKeyboard()
  }

  $(email_login_button).click()

  $(email_field).waitForDisplayed({ reverse: true })
  $(email_login_button).waitForDisplayed({ reverse: true })
}

module.exports = {
  waitToShow,
  attemptToLoginViaEmail,
}
