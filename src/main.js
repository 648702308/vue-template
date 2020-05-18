// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'

import './assets/css/reset.css'
import "./assets/flexible/flexible.js";

Vue.prototype.$title = process.env.TITLE;
Vue.prototype.host = process.env.API_ROOT;
Vue.prototype.$axios = axios;

document.title = process.env.TITLE;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  watch: {
    //监听屏幕宽度变化
    '$store.state.screenWidth': function (val) {
      if (val < 768) {
        this.$store.state.isMobile = true
      } else {
        this.$store.state.isMobile = false
      }
    }
  },
  created() {
    if (this.$store.state.screenWidth < 768) {
      this.$store.state.isMobile = true
    } else {
      this.$store.state.isMobile = false
    }
  },
  mounted() {
    const that = this;
    // 监听窗口大小变化
    window.addEventListener('resize', function () {
      that.$store.state.screenWidth = document.documentElement.clientWidth; //窗口宽度
      that.$store.state.screenHeight = document.documentElement.clientHeight; //窗口高度
    });
  }
});
