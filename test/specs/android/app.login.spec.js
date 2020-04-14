describe('WebdriverIO and Appium, when interacting with a login form,', () => {
  beforeEach(() => {
    $('~User menu').waitForDisplayed()

    $('~Search').waitForDisplayed()

    $(
      'android=new UiSelector().resourceId("com.kickstarter.kickstarter:id/login_tout_button")',
    ).waitForDisplayed()

    $(
      'android=new UiSelector().resourceId("com.kickstarter.kickstarter:id/photo")',
    ).waitForDisplayed()

    $(
      'android=new UiSelector().resourceId("com.kickstarter.kickstarter:id/login_tout_button")',
    ).click()

    $(
      'android=new UiSelector().resourceId("com.kickstarter.kickstarter:id/facebook_login_button")',
    ).isDisplayed()

    $(
      'android=new UiSelector().resourceId("com.kickstarter.kickstarter:id/login_button")',
    ).isDisplayed()
  })
  it('should be able login successfully', () => {
    $(
      'android=new UiSelector().resourceId("com.kickstarter.kickstarter:id/login_button")',
    ).click()
    $(
      'android=new UiSelector().resourceId("com.kickstarter.kickstarter:id/email")',
    ).setValue('mybeepr@webmagic.in')

    $(
      'android=new UiSelector().resourceId("com.kickstarter.kickstarter:id/password")',
    ).setValue('keepitsimple')

    if (driver.isKeyboardShown()) {
      driver.hideKeyboard()
    }

    $(
      'android=new UiSelector().resourceId("com.kickstarter.kickstarter:id/login_button")',
    ).click()

    $(
      'android=new UiSelector().resourceId("com.kickstarter.kickstarter:id/email")',
    ).waitForDisplayed({
      timeout: 5000,
      reverse: true,
    })

    $(
      'android=new UiSelector().resourceId("com.kickstarter.kickstarter:id/login_tout_button")',
    ).waitForDisplayed({
      timeout: 5000,
      reverse: true,
    })

    $('~User menu').waitForDisplayed()

    $('~Search').waitForDisplayed()
    $('~Magic').waitForDisplayed()
    $('~Popular').waitForDisplayed()
  })
})
