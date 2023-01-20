import { createRouter, createWebHistory } from "vue-router";

import HomeView from './views/HomeView.vue'
import ProjectView from './views/ProjectView.vue'
import ContactsView from './views/ContactsView.vue'
import SingleProjectView from './views/SingleProjectView.vue'
import NotFoundView from './views/NotFoundView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/',
        name : 'home',
        component: HomeView
        },
        {
        path: '/projects',
        name : 'projects',
        component: ProjectView
        },
        {
        path: '/contacts',
        name : 'contacts',
        component: ContactsView
        },
        {
        path: '/projects/:slug',
        name : 'single-project',
        component: SingleProjectView
        },
        {
        path: '/:pathmMatch(.*)*',
        name : 'not-found',
        component: NotFoundView
        }
]
})

export { router }