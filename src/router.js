import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: {
        name: 'start'
      }
    },
    {
      path: '/index',
      component: () => import('./demos/Index.vue'),
      children: [
        {
          path: '',
          redirect:'start',
          component: () => import('./demos/Start.vue')
        },
        {
          path: 'start',
          name: 'start',
          component: () => import('./demos/Start.vue')
        },
        {
          path: 'changelog',
          name: 'changelog',
          component: () => import('./ChangeLog.vue')
        },
        {
          path: 'style',
          name: 'style',
          component: () => import('./demos/Style.vue')
        },
        {
          path: 'button',
          name: 'button',
          component: () => import('./demos/Button.vue')
        },
        {
          path: 'switch',
          name: 'switch',
          component: () => import('./demos/Switch.vue')
        },
        {
          path: 'icon',
          name: 'icon',
          component: () => import('./demos/Icon.vue')
        },
        {
          path: 'toast',
          name: 'toast',
          component: () => import('./demos/Toast.vue')
        },
        {
          path: 'dialog',
          name: 'dialog',
          component: () => import('./demos/Dialog.vue')
        },
        {
          path: 'cell',
          name: 'cell',
          component: () => import('./demos/Cell.vue')
        },
        {
          path: 'radio',
          name: 'radio',
          component: () => import('./demos/Radio.vue')
        },
        {
          path: 'checkbox',
          name: 'checkbox',
          component: () => import('./demos/Checkbox.vue')
        },
        {
          path: 'collapse',
          name: 'collapse',
          component: () => import('./demos/Collapse.vue')
        },
        {
          path: 'badge',
          name: 'badge',
          component: () => import('./demos/Badge.vue')
        },
        {
          path: 'refresh',
          name: 'refresh',
          component: () => import('./demos/PullRefresh.vue')
        },
        {
          path: 'loading',
          name: 'loading',
          component: () => import('./demos/Loading.vue')
        },
      ]
    },
    {
      path: '/mobile',
      component: () => import('./demos/mobile/mobile.vue'),
      children: [
        {
          path: '',component: () => import('./demos/mobile/DemoList.vue'),redirect:'start'
        },
        {
          path: 'start',
          name:'m-start',
          component: () => import('./demos/mobile/DemoList.vue')
        },
        {
          path: 'changelog',
          name: 'm-changelog',
          component: () => import('./demos/mobile/DemoList.vue')
        },
        {
          path: 'style',
          component: () => import('./demos/mobile/InnerStyle.vue')
        },
        {
          path: 'button',
          name: 'm-button',
          component: () => import('./demos/mobile/Button.vue')
        },
        {
          path: 'dialog',
          name: 'm-dialog',
          component: () => import('./demos/mobile/Dialog.vue')
        },
        {
          path: 'icon',
          name: 'm-icon',
          component: () => import('./demos/mobile/Icon.vue')
        },
        {
          path: 'switch',
          name: 'm-switch',
          component: () => import('./demos/mobile/Switch.vue')
        },
        {
          path: 'toast',
          name: 'm-toast',
          component: () => import('./demos/mobile/Toast.vue')
        },
        {
          path: 'cell',
          name: 'm-cell',
          component: () => import('./demos/mobile/Cell.vue')
        },
        {
          path: 'radio',
          name: 'm-radio',
          component: () => import('./demos/mobile/Radio.vue')
        },
        {
          path: 'checkbox',
          name: 'm-checkbox',
          component: () => import('./demos/mobile/Checkbox.vue')
        },
        {
          path: 'collapse',
          name: 'm-collapse',
          component: () => import('./demos/mobile/Collapse.vue')
        },
        {
          path: 'badge',
          name: 'm-badge',
          component: () => import('./demos/mobile/Badge.vue')
        },
        {
          path: 'refresh',
          name: 'm-refresh',
          component: () => import('./demos/mobile/PullRefresh.vue')
        },
        {
          path: 'loading',
          name: 'm-loading',
          component: () => import('./demos/mobile/Loading.vue')
        },
      ]
    },
    // ===== 专门用来测试的路由，勿删
    {
      path: '/test',
      name: 'test',
      component: () => import('./components/refresh/Index.vue')
    }
  ]
})
