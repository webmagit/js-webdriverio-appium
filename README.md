Showcase Appium test automation via NodeJS based [WebdriverIO](https://webdriver.io/) test framework. 

This project uses an open-source project from [Kickstarter](https://github.com/kickstarter/android-oss) to build the Android app and execute basic tests.

# Cloud Execution
The native app is installed on devices hosted on [Browserstack](https://www.browserstack.com/app-automate)

# Build Server
Tests are executed automatically on each commit via [CircleCI](https://circleci.com)

# Quick Links
An example test [Recording](https://app-automate.browserstack.com/dashboard/v2/builds/02cb648a1744056d6f44dccf58992216b8c1ce65/sessions/8851c722753f7c188b9dfc54330d79b69423e64b)

CircleCI [Pipeline](https://app.circleci.com/pipelines/github/webmagit/js-webdriverio-appium?branch=master)

# Quick start
Execute the tests on `CircleCI`

# Project Structure
[config](https://github.com/webmagit/js-webdriverio-appium/tree/master/config) contains mobile device configuration

[app.login.spec.js](https://github.com/webmagit/js-webdriverio-appium/blob/master/test/specs/android/app.login.spec.js) demonstrates Login to the Kickstarter App

[screenobjects](https://github.com/webmagit/js-webdriverio-appium/tree/master/test/screenobjects) define how user behaviour is implemented

[selectors](https://github.com/webmagit/js-webdriverio-appium/tree/master/test/selectors) provides the element locators

[helpers](https://github.com/webmagit/js-webdriverio-appium/tree/master/test/helpers) provide utilities for selectors and interactions with Browserstack

[secrets](https://circleci.com/docs/2.0/env-vars/) are stored as environment variables
# CircleCI Workflows
The below jobs are defined

```
all_integration_tests (runs on master)
feature_based_tests (runs on other branches)
```

