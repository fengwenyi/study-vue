import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index/Index'
import StudyFlex from '@/views/study-flex/StudyFlex'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/study-flex',
            name: 'studyFlex',
            component: StudyFlex
        }
    ]
})
