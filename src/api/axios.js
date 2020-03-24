/**
 *@Description: 请求封装
 *@author: Wangsenyang
 *@Date: 2019/8/14
 */

import Vue from 'vue';
import axios from 'axios';
import router from '../router';

// import httpStatusCode from './modules/httpStatusCode';
// import { showMessageInfo } from '@/utils/modules/message'

// 根据环境分配地址
if (process.env.NODE_ENV === 'development') {
    Vue.prototype.HOST_PROXY_ADMIN = '';
} else {
    Vue.prototype.HOST_PROXY_ADMIN = '';
}

function AxiosFactory(baseURL = '/api') {
    // 创建axios实例
    const axiosInstance = axios.create({
        baseURL: process.env.NODE_ENV === 'development' ? baseURL : 'http://10.19.151.196:8020',
        headers: {
            'Content-Type': 'application/json', // x-www-form-urlencoded
        },
        timeout: 25000,
    });

    // 添加请求拦截器
    axiosInstance.interceptors.request.use((config) => {
        // 发送请求前做些什么
        let userInfo = localStorage.getItem('loginToken');
        if (userInfo) {
            userInfo = JSON.parse(userInfo);
            config.headers.common['token'] = userInfo;
        }
        // console.log('请求拦截器', config);
        return config;
    }, (error) => Promise.reject(error)); // 对请求错误做些什么

    // 添加响应拦截器
    axiosInstance.interceptors.response.use((response) => {
        // console.log('响应拦截器', response);
        // 对响应数据做些什么
        // 用户未登陆 或者 用户被禁用，重定向到登录页面
        if (response.data.code === '') {
            router.replace({
                path: '/login',
            });
        }
        // 返回结果code编码不为0时，显示错误信息
        if (response.data.code > 0) {
            return Promise.reject(response.data.message);
        }
        return response;
    }, (error) => {
        // 对响应错误做些什么
        let str = '网络错误，请稍后再试';
        console.log('axios', error.response);
        switch (error.response.status) {
            case 401:
                str = '您的登录验证已过期，请重新登录';
                router.replace({
                    path: '/login',
                });
                break;
            case 404:
                str = '请求错误，资源未找到';
                break;
            case 429:
                str = '您的请求次数过于频繁';
                router.replace({
                path: '/429',
            });
                break;
            default:
                str = '请求错误';
        }
        const result = httpStatusCode(error.response)
        if (result.length > 0) showMessageInfo('error', result[0].msg)
        return Promise.reject({ ...error, str });
    });
    return axiosInstance
}

// 创建 API 实例
const createAPI = (url, method, config = {}, baseURL) => {
    method = method.toLowerCase();
    const factoryInstance = new AxiosFactory(baseURL);
    if (method === 'post') return factoryInstance.post(url, config);
    else if (method === 'get') return factoryInstance.get(url, { params: config });
    else if (method === 'delete') return factoryInstance.delete(url, { params: config });
    else return factoryInstance[method](url, config)
};

export default createAPI;
