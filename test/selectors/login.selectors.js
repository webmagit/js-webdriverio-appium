const util = require('../helpers/selector.utils')

const LOGIN_CHOICE = {
  FACEBOOK: 'facebook_login_button',
  EMAIL: 'login_button',
}

const LOGIN_FIELDS = {
  EMAIL_ID: 'email',
  PASSWORD: 'password',
}
const getFacebookLogin = () => {
  return util.getResourceId(LOGIN_CHOICE.FACEBOOK)
}

const getEmailLogin = () => {
  return util.getResourceId(LOGIN_CHOICE.EMAIL)
}

const getEmail = () => {
  return util.getResourceId(LOGIN_FIELDS.EMAIL_ID)
}

const getPassword = () => {
  return util.getResourceId(LOGIN_FIELDS.PASSWORD)
}

module.exports = {
  getFacebookLogin,
  getEmailLogin,
  getEmail,
  getPassword,
}
