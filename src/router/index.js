import Vue from 'vue'
import Router from 'vue-router'

// Vue-router 报NavigationDuplicated的可能解决方案
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: {name: 'Users'},
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('@/views/users/Index.vue'),
  },
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});


/*
* mode: 'hash' or 'history',
* */
const router = new Router({mode: 'history', routes});


router.beforeEach(function (to, from, next) {
  /* 路由发生变化修改页面title */
  // document.title = Vue.prototype.$title;
  // record => record.meta.requireAuth
  if (to.matched.some(function (record) {
    return record.meta.requireAuth;
  })) { // 判断该路由是否需要登录权限
    if (store.getters.getToken) { // 判断当前的token是否存在
      Vue.prototype.user = store.getters.getUserInfo;
      console.log(store.getters.getUserInfo);
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
});

export default router;
