import {getCookieValue} from '@/api/methodApi'

export default {
  //这里放全局参数
  topMenuNav: [],
  menuNav: [],

  topNavState: '',
  leftNavState: '',
  leftNavActive: '',

  // 右侧菜单（小屏）
  showAside: false,
  isMobile: false,
  //屏幕宽度
  screenWidth: document.documentElement.clientWidth, //屏幕宽度
  screenHeight: document.documentElement.clientHeight, //屏幕高度

  loginInfo: {
    name: getCookieValue('name') || '',
    token: getCookieValue('token') || '',
    head_img: getCookieValue("head_img"),
    id: getCookieValue("id"),
    telphone: getCookieValue("telphone"),
    type: getCookieValue("type")
  },
  collapse: !!(localStorage.getItem('collapse') && localStorage.getItem('collapse') === 'true')
}
