/**
 * 将url中的参数转成 key value 对像
 * @param {string} url
 * @param {boolean} noDecodeURIComponent 是否用decodeURIComponent转换
 * @returns {Object}
 */
export declare function param2Obj(url: string, noDecodeURIComponent: boolean): object;
/**
 * 将a=1&b=2` 转换为 key value 对像
 * @param {string} url
 * @param {boolean} noDecodeURIComponent 是否用decodeURIComponent转换
 * @returns {Object}
 */
export declare function body2Obj(body: string, noDecodeURIComponent: boolean): object;
/**
 * 查找文件后缀名
 * @param {*} src 文件名
 * @param {*} def 默认值
 */
export declare const fileLastName: (src: string, def?: string) => string;
/**
 * 为邮箱地址打上*号马赛克, 默认'@'前字符替换
 * @param {String} address 邮箱地址
 * @param {Boolean} front '@'前字符替换
 * @param {Boolean} end '@'后字符替换
 */
export declare const mosaicEmail: (address: string, front?: boolean, end?: boolean) => string;
