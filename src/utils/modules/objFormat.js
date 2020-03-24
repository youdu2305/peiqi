/**
 *@Description: string、json格式化公用方法
 *@author: Wangsenyang
 *@Date: 2019/8/14
 */
/**
 * 对象转为字符串
 * @param obj {object} 目标对象
 * @return {string}
 */
export const objectToString = (obj = {}) => {
    let str = '';
    if (JSON.stringify(obj) !== '{}') {
        Object.keys(obj).forEach((key) => {
            str += `${obj[key]},`;
        });
    }
    return str;
};
/**
 * 根据值对应找出对象中所对应的key
 * @param value 传入值
 * @param obj  目标对象
 * @return {string}
 */
export const keySelectFromObj = (value, obj = {}) => {
    let back = '';
    if (JSON.stringify(obj) !== '{}') {
        Object.keys(obj).forEach((key) => {
            // 比较数组是否相同需要toString()
            if (obj[key].toString() === value.toString()) back = key;
        });
    }
    return back;
};
/**
 * 根据key对应找出对象中所对应的值
 * @param id 传入值
 * @param obj  目标对象
 * @return {object}
 */
export const valueSelectFromObj = (id, obj = {}) => {
    let back = null;
    if (JSON.stringify(obj) !== '{}') {
        Object.keys(obj).forEach((key) => {
            if (key === id) back = obj[key];
        });
    }
    return back;
};
/**
 * 根据value对应找出数组中key,数组对象必须键值对名称为key,value
 * @param value 传入值
 * @param arr  目标对象
 * @return {number}
 */
export const keySelectFromArr = (value, arr = []) => {
    let back = null;
    if (arr.length !== 0) {
        arr.forEach((i) => {
            if (i.value === value) back = i.key;
        });
    }
    return back;
};

/**
 * 根据key对应找出数组中value,数组对象必须键值对名称为key,value
 * @param key 传入值
 * @param arr  目标对象
 * @return {number}
 */
export const valueSelectFromArr = (key, arr = []) => {
    let back = null;
    if (arr.length !== 0) {
        arr.forEach((i) => {
            if (i.key === key) back = i.value;
        });
    }
    return back;
};

export const timeFormat = (time, reg = 'yyyy-MM-dd hh:mm:ss') => {
    const date = new Date(time)
    const o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    };
    if (/(y+)/.test(reg)) reg = reg.replace(RegExp.$1, (date.getFullYear().toString()).substr(4 - RegExp.$1.length));
    for (let k in o) { // eslint-disable-line
        if (new RegExp(`(${k})`).test(reg)) {
            reg = reg.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (`00${o[k]}`).substr(o[k].toString().length))
        }
    }
    return reg;
}

export const transferObjectToString = (obj) => {
    if (obj !== null && typeof obj === 'object') return JSON.stringify(obj)
    return obj
}

export const showJSONInTagPre = (str) => {
    // 设置缩进为2个空格
    str = transferObjectToString(str)
    str = JSON.stringify(JSON.parse(str), null, 2);
    str = str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    // eslint-disable-next-line
    return str.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
        let cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return `<span class=${cls}>${match}</span>`;
    });
}

export const showJSONInTagTextarea = (str) => {
    str = transferObjectToString(str)
    return JSON.stringify(JSON.parse(str), null, 4)
}
