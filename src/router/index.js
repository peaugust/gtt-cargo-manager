import Vue from 'vue'
import Router from 'vue-router'
import CreateUser from '@/views/CreateUser'
import CreateVehicle from '@/views/CreateVehicle'
import CreateScheduling from '@/views/CreateScheduling'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user',
      name: 'CreateUser',
      component: CreateUser
    },
    {
      path: '/vehicle',
      name: 'CreateVehicle',
      component: CreateVehicle
    },
    {
      path: '/schedule',
      name: 'CreateScheduling',
      component: CreateScheduling
    }
  ]
})
