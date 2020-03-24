/**
 *@Description: 路由列表
 *@author: Wangsenyang
 *@Date: 2020/2/27
 */

    // import routerFactory from './routerFactory'

const _import = require(`./_import_${process.env.NODE_ENV}`); // eslint-disable-line

// const Info = { template: '<router-view></router-view>' };

const routes = [

    { path: '/', redirect: '/daily', meta: { menuShow: false } },

    { path: '/login', name: 'login', component: _import('login'), meta: { menuShow: false } },
    { path: '/daily', name: 'Daily', component: _import('Daily_sales_report'), meta: { menuShow: false } },
    { path: '/morningpost', name: 'MorningPost', component: _import('Morning_post'), meta: { menuShow: false } },
];

export default routes;
