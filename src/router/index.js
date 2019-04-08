import Vue from 'vue'
import Router from 'vue-router'
import CreateUser from '@/views/CreateUser'
import CreateVehicle from '@/views/CreateVehicle'
import Schedule from '@/views/Schedule'

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
      path: '/',
      name: 'Schedule',
      component: Schedule
    }
  ]
})
