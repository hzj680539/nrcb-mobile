import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import dema from './routes/dema.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        ...dema
      ]
    }
  ]
})
