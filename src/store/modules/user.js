/**
 *@Description: 登录store
 *@author: Wangsenyang
 *@Date: 2020/2/27
 */

//  仅做示例
import api from '@/api';

const stateFactory = () => ({
    user: {},
    isLogin: null,
    errorMsg: '',
});

const initState = {
    ...stateFactory(),
};

const getters = {
    getUserInfo(state) {
        return state.user;
    },
    userIsLogin(state) {
        return state.isLogin;
    },
    loginFail(state) {
        return state.errorMsg;
    },
};

const actions = {
    login({ commit }, params) {
        commit('setInfoInit');
        api.login(params).then((res) => {
            if (res.data.code === 0) {
                localStorage.setItem('loginToken', JSON.stringify(res.data.obj));
                commit('setUserInfo', res.data.obj);
            } else {
                commit('setInfoFail', res.data.msg);
            }
        }).catch(() => {
            commit('setInfoFail', '网络错误！');
        });
    },
};

const mutations = {
    setUserInfo(state, data) {
        state.user = { ...data };
        state.isLogin = true;
    },
    setInfoFail(state, data) {
        state.isLogin = false;
        state.errorMsg = data;
    },
    setInfoInit(state) {
        state.isLogin = null;
        state.errorMsg = '';
        state.user = {};
        localStorage.removeItem('loginToken');
    },
};

export default {
    state: initState,
    actions,
    getters,
    mutations,
    namespaced: true,
};
