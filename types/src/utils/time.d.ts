/**
 * 返回年月日的数据
 * @param {String} timeStr 接口返回的时间
 * @param {*} forMat 规则
 */
export declare const format: (timeStr: Date | string, forMat?: string | undefined) => string;
/**
 * 格式化为可读时间
 *
 * 秒前
 * 分钟前
 * 小时前
 * 天前
 * 个月前
 * 年前
 *
 * @param time
 * @returns {string}
 */
export declare const readableTime: (time: Date | string) => string;
