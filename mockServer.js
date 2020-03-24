// const express = require('express');   //引入express
// const Mock = require('mockjs');       //引入mock
// const app = express();        //实例化express

// var api1 = require("./mock/api1.js");
// var api2 = require("./mock/api2.js")
// 为每个具体的配置创建监听
// var dataArr = [api1, api2];
// for (let i = 0; i < dataArr.length; i++) {
//     let item = dataArr[i];
//     app.all(item.router, function (req, res) {
//         res.json(item.data);
//     });
// }
// /*为app添加中间件处理跨域请求*/
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });
// //监听3333端口
// app.listen('3333', () => {
//     console.log('监听端口 3333')
// })
