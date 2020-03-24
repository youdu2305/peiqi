import createAPI from '../axios';

// swagger地址：
const login = {
    // 登录接口 示例
    login: (params) => createAPI('/processController/userLogin', 'post', params),
    selectSalesDaily: (param) => createAPI('/api/enc-tengzhou-report/v1/sales-daily/selectSalesDailyInfo', 'get', param),
    morningPost: (param) => createAPI('/api/enc-tengzhou-report/v1/sales-daily/getProductionReportInfo', 'get', param),
};
export default login;
