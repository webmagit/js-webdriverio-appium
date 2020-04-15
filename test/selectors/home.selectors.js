const util = require('../helpers/selector_utils')

const LAUNCH = {
  USER_MENU: '~User menu',
  SEARCH: '~Search',
  LOGIN: 'login_tout_button',
  PHOTO: 'photo',
}

const getLoginButton = () => {
  return util.getResourceId(LAUNCH.LOGIN)
}

const getPhoto = () => {
  return util.getResourceId(LAUNCH.PHOTO)
}

const getUserMenu = () => {
  return LAUNCH.USER_MENU
}

const getSearchIcon = () => {
  return LAUNCH.SEARCH
}

module.exports = {
  getLoginButton,
  getPhoto,
  getUserMenu,
  getSearchIcon,
}
