// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import $ from 'jquery'; // eslint-disable-line
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import eCharts from 'echarts';


import App from './App';
import router from './router';
import store from './store';
import api from './api';
import dateform from './api/dateForm';
import utils from './utils';
import './assets/styles/index.scss';
import { showMessageInfo, confirmBox } from './utils/modules/message';
// 全局注册elementUI
Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$dateform = dateform;
Vue.prototype.$showMessageInfo = showMessageInfo;
Vue.prototype.$confirmBox = confirmBox;
Vue.prototype.$utils = utils;
Vue.prototype.$echarts = eCharts;


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
});
