/**
 * 对像元素的数组去重, 会更改原数组
 * @param { Array } arr 数组，
 * @param { String } key 用于查重的元素属性
 */
export declare const arrayRemoveRepeat: (arr: [], key: string) => unknown[];
export declare const removeRepeat: (arr: [], field: string) => unknown[];
/**
 * 随机获取元素中的一个
 * @param {*} list 为数组时其各个元素参与随机
 * @param  {...any} args
 */
export declare const randonFromList: (list: Array<any>, ...args: undefined[]) => any;
