import Vue from 'vue'
import Router from 'vue-router'
import Preview from '@/components/Preview'
import Config from '@/components/Config'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Preview',
      component: Preview
    },
    {
        path: '/config',
        name: 'Config',
        component: Config
      }
  ]
})
