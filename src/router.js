import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue'
import TemplateUser from './pages/users/template.vue'
import IndexUser from './pages/users/index.vue'
import ShowUser from './pages/users/show.vue'

import TemplatePost from './pages/posts/template.vue'
import IndexPost from './pages/posts/index.vue'
import ShowPost from './pages/posts/show.vue'


const routes = [
    { path: '/', name : 'home' ,component: Home },
    { path: '/users' ,component: TemplateUser ,children:[
        {path: '', name : 'indexUser' ,component: IndexUser},
        {path: ':id', name : 'showUser' ,component: ShowUser}
    ]},
    { path: '/posts' ,component: TemplatePost ,children:[
        {path: '', name : 'indexPost' ,component: IndexPost},
        {path: ':id', name : 'showPost' ,component: ShowPost}
    ]},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 