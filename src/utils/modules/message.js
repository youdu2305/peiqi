/**
 *@Description: 操作提示消息
 *@author: Wangsenyang
 *@Date: 2019/8/21
 */

import { Message, MessageBox } from 'element-ui';


/**
 *
 * @param arg 不定参数，1>{String} 消息类型 2> {String}消息内容 3>{Number} 提示时间
 */
export const showMessageInfo = (...arg) => {
    const typeList = ['success', 'warning', 'info', 'error'];
    Message({
        type: arg[0] !== 'undefined' && typeList.includes(arg[0]) ? arg[0] : 'info',
        message: arg[1] !== 'undefined' ? arg[1] : '',
        duration: arg[2] !== 'undefined' && typeof (arg[2]) === 'number' ? arg[2] : 1500,
    });
};

/**
 *
 * @param operate {String} 操作提示信息
 * @return {Promise<any>}
 */
export const confirmBox = (operate) => new Promise((resolve, reject) => {
    MessageBox.confirm(`此操作将${operate}, 是否继续？`, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
    }).then(() => {
        resolve();
    }).catch(() => {
        showMessageInfo('info', '已取消此操作');
        reject();
    });
});
