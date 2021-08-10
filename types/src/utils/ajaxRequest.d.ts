declare type urlType = {
    url?: Array<string> | string;
    env?: string;
    list?: Array<string>;
};
/**
 * ajax的重定义url, 传入的url应符合 list 的顺序
 * @param {Array | string} url
 * @param {string} env 环境名（mock, test, gray, development等
 * @param {Array} list 所有环境
 */
export declare const getUrl: ({ url, env, list }?: urlType) => string;
export {};
