const SELECTORS = require('../selectors/home.selectors')

const login_button = SELECTORS.getLoginButton()
const home_photo = SELECTORS.getPhoto()
const user_menu = SELECTORS.getUserMenu()
const search_icon = SELECTORS.getSearchIcon()

const checkGuestAccess = () => {
  $(user_menu).waitForDisplayed()
  $(search_icon).waitForDisplayed()
  $(home_photo).waitForDisplayed()
}

const checkRegisteredUserAccess = (shouldBeRegistered = true) => {
  $(login_button).waitForDisplayed({ reverse: shouldBeRegistered })
}

const waitForAppLaunch = () => {
  checkGuestAccess()
  checkRegisteredUserAccess(false)
}

const decideToLogin = () => {
  $(login_button).click()
}

const waitForLoggedInView = () => {
  checkGuestAccess()
  checkRegisteredUserAccess()
}

module.exports = {
  waitForAppLaunch,
  decideToLogin,
  waitForLoggedInView,
}
