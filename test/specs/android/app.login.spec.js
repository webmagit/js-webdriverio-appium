const Home = require('../../screenobjects/components/home.screen')
const Login = require('../../screenobjects/components/login.screen')

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
