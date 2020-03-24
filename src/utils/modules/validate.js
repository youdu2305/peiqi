/**
 *@Description: 公共方法validate.js
 *@author: Wangsenyang
 *@Date: 2019/8/14
 */
    // 去掉字符串中的空格
export const trimStr = (str) => (str ? str.replace(/(^\s*)|(\s*$)/g, '') : '');
// 验证是否是邮箱
export const isEmail = (str) => {
    const reg = /^[a-z0-9](?:[-_.+]?[a-z0-9]+)*@([a-z0-9]+)\.com$/i;
    return reg.test(str.trim());
};

// 只能输入字母和数字
export const cnname = (str) => /^[A-Za-z0-9_]+$/.test(str)

export const isNotEmpty = (value) => {
    if (Array.isArray(value)) {
        const result = value.length !== 0 && (!!value[0] && value[0].replace(/(^\s*)|(\s*$)/g, '') !== '');
        return result;
    }
    return false;
};


export const getRouterListByType = (list, type) => {
    if (typeof (list) !== 'object' || list.length === 0) return false;
    return list.filter((item) => (item.name === type))[0].children;
};
// 验证手机号码
export const isTel = (value) => {
    const reg = /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/;
    return reg.test(value.trim());
};

// 验证IP地址
export const isIP = (value) => {
    const reg = /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/;
    return reg.test(value.trim());
};
// 验证端口号（端口号为Number型， 不需要trim()）
export const isPort = (value) => {
    const reg = /^([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-4]\d{4}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/;
    return reg.test(value);
};
// 验证ip:port
export const ipAndPort = (value) => {
    // eslint-disable-next-line
    const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5]):([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])$/
    return reg.test(value)
}
// 验证用户名 （4-15位由数字、字母、下划线组成）
export const isUserName = (value) => {
    const reg = /^[a-zA-Z0-9_]{4,15}$/;
    return reg.test(value.trim());
};
// 验证密码 （6-15位至少由数字、字母组成）
export const isPassWord = (value) => {
    const reg = /^(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+._=~!@#$%^&*()]{6,20}$/;
    return reg.test(value.trim());
};

// 判断是否是数字
export const isNumber = (value) => {
    value = Number(value);
    if (Number.isNaN(value)) return false;
    return true;
};

// 判断数字大于0
export const numberBigThanZero = (rule, value, callback) => {
    value = Number(value)
    if (!isNumber(value)) callback(new Error('请输入数字'));
    else if (value < 0) callback(new Error('数字不能小于0！'));
    else callback()
}

// 判断是否是整数
export const isInteger = (value) => {
    value = Number(value);
    if (!Number.isInteger(value)) return false;
    return true;
};

// el-form的表单验证方法
export const intNumber = (rule, value, callback) => {
    value = Number(value);
    if (!isNumber(value)) callback(new Error('请输入数字'));
    else if (!isInteger(value)) callback(new Error('请输入整数'));
    else if (value < 0) callback(new Error('数字不能小于0！'));
    else callback();
};

export const elIsNumber = (rule, value, callback) => {
    if (!isNumber(value)) callback(new Error('只能输入数字！'));
    else callback();
};


export const isCoordinate = (rule, value, callback) => {
    const reg = /^(-?\d+)(\.?\d*)$/;
    if (!reg.test(value)) callback(new Error('请输入合法的坐标！'));
    else callback();
};

export const isAvailableIP = (rule, value, callback) => {
    if (!isIP(value)) callback(new Error('请输入合法IP地址'));
    else callback();
};

export const isAvailablePort = (rule, value, callback) => {
    if (!isPort(value)) callback(new Error('请输入合法端口号'));
    else callback();
};

export const isAvailableName = (rule, value, callback) => {
    if (!isUserName(value)) callback(new Error('长度为4-15位由数字、字母、下划线组成'));
    else callback();
};
export const isAvailablePwd = (rule, value, callback) => {
    if (!isPassWord(value)) callback(new Error('6-15位至少由数字、字母组成'));
    else callback();
};

// element判断是否是只能是字母和数字的用户名
export const isCNName = (rule, value, callback) => {
    if (!cnname(value)) callback(new Error('只能输入字母、数字、下划线'));
    else callback();
};

export const maxLength = (len) => (rule, value, callback) => {
    if (isNumber(value)) value.toString()
    if (value.length > len) callback(new Error(`最多只能输入${len}个字符`))
    else callback()
}

// element中验证是否是ip:端口格式
export const elIpAndPort = (rule, value, callback) => {
    if (!ipAndPort(value)) callback(new Error('请输入正确的ip:port格式'))
    else callback()
}
