import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import AboutMe from '@/views/AboutMe.vue';
import ContactMe from '@/views/ContactMe.vue';
import ArticleDetail from '@/views/ArticleDetail.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Layout from '@/layout/Layout.vue';

Vue.use(Router);

const routes = [{
    path: '/',
    component: Layout,
    children: [{
        path: '',
        component: Home,
        name: 'Home'
      },
      {
        path: 'about',
        component: AboutMe,
        name: 'AboutMe'
      },
      {
        path: 'contact',
        component: ContactMe,
        name: 'ContactMe'
      },
      {
        path: 'article/:id',
        component: ArticleDetail,
        name: 'ArticleDetail'
      }
    ]
  },
  {
    path: '/login',
    component: Login,
    name: 'Login'
  },
  {
    path: '/register',
    component: Register,
    name: 'Register'
  }
];

const router = new Router({
  mode: 'history',
  routes
});

export default router;
