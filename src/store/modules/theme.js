/**
 *@Description:主题
 *@author: Wangsenyang
 *@Date: 2019/8/20
 */

//  仅做示例
const theme = {
    state: {
        currentTheme: 'default-theme',
        themeList: [
            {
                label: '默认主题',
                value: 'default-theme',
            },
            {
                label: '玫瑰红',
                value: 'red-theme',
            },
            {
                label: '香草绿',
                value: 'green-theme',
            },
            {
                label: '仙女粉',
                value: 'pink-theme',
            },
        ],
    },
    getters: {
        getThemeInfo(state) {
            return state.currentTheme;
        },
        getThemeList(state) {
            return state.themeList;
        },
    },

    mutations: {
        setThemeInfo(state, themeType) {
            state.currentTheme = themeType;
            localStorage.setItem('currentTheme', themeType);
        },
    },
    actions: {},
    namespaced: true,
};

export default theme;
