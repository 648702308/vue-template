import {setCookie} from '@/api/methodApi'

export default {
  //这里是set方法
  setLoginInfo(state, data) {
    state.loginInfo.name = data.name;
    state.loginInfo.token = data.token;
    state.loginInfo.head_img = data.head_img;
    state.loginInfo.id = data.user_id;
    state.loginInfo.telphone = data.telphone;
    state.loginInfo.type = data.type;

    for (let i in data) {
      setCookie(i, data[i], 7, "/");
    }
  },
  setUserName(state, name) {
    state.loginInfo.name = name;
  },
  setTopNavState(state, value) {
    state.topNavState = value;
  },
  setLeftNavState(state, value) {
    state.leftNavState = value;
  },
  setMenuNav(state, value) {
    state.menuNav = value;
  },
  setLeftNavActive(state, value) {
    state.leftNavActive = value;
  },
  setTopMenuNav(state, value) {
    state.topMenuNav = value;
  },
  setShowAside(state, value) {
    state.showAside = value;
  },
  setCollapse(state, value) {
    state.collapse = value;
    localStorage.setItem('collapse', value)
  }
}
