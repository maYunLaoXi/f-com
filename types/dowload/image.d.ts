import JsZip from 'jszip';
declare type ZipAuthor = {
    name: string;
    content: string;
};
export declare type ImgZipParams = {
    src: string;
    JsZip: JsZip;
    name?: string;
    zip?: boolean;
    zipAuthor?: ZipAuthor;
};
/**
 * 下载图片
 * @param {*} src 图片的src 或多个src组成的数组, 当只有一个src时，其他参数可先
 * @param {*} zip 是否打包成.zip文件, 如果src是数组，则只能为zip
 * @param {*} JsZip npm社区的jszip，由于rollup打包出错，改为外置 see https://github.com/Stuk/jszip#readme
 */
export declare const dowloadImage: ({ src, name, zip, zipAuthor, JsZip }: ImgZipParams) => Promise<void>;
/**
 * 打包下载图片
 * @param {*} src  图片的src 或多个src组成的数组
 * @param {*} JsZip npm社区的jszip，由于rollup打包出错，改为外置 see https://github.com/Stuk/jszip#readme
 * @param {*} zipAuthor 可选
 */
export declare function dowloadZip(src: string, JsZip: JsZip, zipAuthor: ZipAuthor | undefined): Promise<void>;
export {};
