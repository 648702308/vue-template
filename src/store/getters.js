//这里是get方法
export const getUserInfo = state => state.loginInfo;
export const getUserName = state => state.loginInfo.name;
export const getToken = state => state.loginInfo.token;
export const getUserType = state => state.loginInfo.type;
export const getTopNavState = state => state.topNavState;
export const getLeftNavState = state => state.leftNavState;
export const getMenuNav = state => state.menuNav;
export const getLeftNavActive = state => state.leftNavActive;
export const getTopMenuNav = state => state.topMenuNav;
export const getShowAside = state => state.showAside;
export const getCollapse = state => state.collapse;
