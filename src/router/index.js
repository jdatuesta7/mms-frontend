import Vue from 'vue'
import Router from 'vue-router'
import Mms from '@/components/mms.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mms',
      component: Mms
    }
  ]
})
