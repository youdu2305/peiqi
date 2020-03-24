const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const resolve = dir => {
    return path.join(__dirname, dir);
};
module.exports = {
    lintOnSave: true,  //eslint检查
    runtimeCompiler: true, // 允许compiler模式
    devServer: {
        hot: true,
        clientLogLevel: 'warning',
        overlay: {
            warning: true,
            error: true,
        },
        disableHostCheck: true,
        proxy: {   // 本地跨域代理设置
            '/api': {
                target: 'http://10.19.146.56:28131/',   //http://10.19.151.196:8020
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
    transpileDependencies: [
        'vue-echarts',
        'resize-detector',
    ],
    // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    publicPath: './',
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.plugins.push(
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            warnings: false,
                            drop_debugger: true, // console
                            drop_console: true, //注释console
                            pure_funcs: ['console.log'] // 移除console
                        },
                    },
                    sourceMap: false,
                    parallel: true,
                }),
            );
        } else {
            // 为开发环境修改配置...

        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('src', resolve('src'))
            // .set('components', resolve('src/components'))   //根据实际需要设置
            // .set('api', resolve('src/api'))
            // .set('assets', resolve('src/assets'))
            // .set('lang', resolve('src/lang'))
            // .set('router', resolve('src/router'))
            // .set('store', resolve('src/store'))
            // .set('utils', resolve('src/utils'))
            // .set('views', resolve('src/views'));
        config
            .plugin('provide')
            .use(webpack.ProvidePlugin, [{
                $: 'jquery',
                jquery: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            }]);
    },
};
