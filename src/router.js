import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/step-one',
      name: 'step-one',
      component: () => import('@/components/StepOne')
    },
    {
      path: '/step-two',
      name: 'step-two',
      component: () => import('@/components/StepTwo')
    },
    {
      path: '/step-three',
      name: 'step-three',
      component: () => import('@/components/StepThree')
    }

  ]
})
