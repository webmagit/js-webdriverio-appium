const Home = require('../../screenobjects/home.screen')
const Login = require('../../screenobjects/login.screen')

describe('WebdriverIO and Appium, when interacting with a login form,', () => {
  beforeEach(() => {
    Home.waitForAppLaunch()
    Home.decideToLogin()
    Login.waitToShow()
  })
  it('should be able login successfully', () => {
    Login.attemptToLoginViaEmail()
    Home.waitForLoggedInView()
  })
})
