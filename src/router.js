import Vue from 'vue'
import Router from 'vue-router'
import MainBody from './views/MainBody.vue'
import Details from './views/DetailsView.vue'
import EventsByCategory from './views/EventsByCategoryView.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'MainBody',
            component: MainBody
        },
        {
            path: '/details/:id',
            name: 'Details',
            component: Details,
            props: true
        },
        {
            path: '/category/:categoryId',
            name: 'EventsByCategory',
            component: EventsByCategory,
            props: true
        }
    ]
})