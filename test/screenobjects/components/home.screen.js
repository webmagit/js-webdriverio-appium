const SELECTORS = require('../../selectors/home.selectors')

const login_button = SELECTORS.getLoginButton()
const home_photo = SELECTORS.getPhoto()
const user_menu = SELECTORS.getUserMenu()
const search_icon = SELECTORS.getSearchIcon()

const waitForAppLaunch = () => {
  $(user_menu).waitForDisplayed()
  $(search_icon).waitForDisplayed()
  $(login_button).waitForDisplayed()
  $(home_photo).waitForDisplayed()
}

const decideToLogin = () => {
  $(login_button).click()
}

const waitForLoggedInView = () => {
  $(user_menu).waitForDisplayed()
  $(search_icon).waitForDisplayed()
  $(login_button).waitForDisplayed({ reverse: true })
  $(home_photo).waitForDisplayed()
}

module.exports = {
  waitForAppLaunch,
  decideToLogin,
  waitForLoggedInView,
}
