/**
 *@Description: 路由
 *@author: Wangsenyang
 *@Date: 2020/2/27
*/

import Vue from 'vue';
import Router from 'vue-router';
// import store from '@/store';
import routers from './routers';


// import guards from './routerGuard'


Vue.use(Router);


const router = new Router({
    routes: routers,
    linkActiveClass: 'active',
});

// 路由守卫
// guards(router, store)


export default router;
