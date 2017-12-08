import Vue from 'vue'
import Router from 'vue-router'
import NewMeeting from '@/components/NewMeeting'
import Meeting from '@/components/Meeting'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/meeting/:id',
      component: Meeting
    },
    { path: '', component: NewMeeting },
    { path: '/', component: NewMeeting },
    { path: '*', redirect: '/' }
  ]
})
