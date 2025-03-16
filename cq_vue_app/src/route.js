import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue';
import signin from './components/signin.vue';
import signup from './components/signup.vue';
import detail from './components/detail.vue';

// cấu hinh 2 router
const routes = [

    // cấu hình router cho trang chủ - home
    {
        name: 'Home',
        component: Home,
        path: '/',
    },

    // cấu hình router cho trang đăng ký - signin
    {
        name: 'signin',
        component: signin,
        path: '/signin',
    },
   
    // cấu hình router cho trang đăng ký - signup
    {
        name: 'signup',
        component: signup,
        path: '/signup',
    },

    {
        name: 'detail',
        component: detail,
        path: '/detail',
    }

   
];

// tạo router   
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;


