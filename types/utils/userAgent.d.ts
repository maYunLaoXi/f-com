declare global {
    interface Window {
        __wxjs_environment: string;
    }
}
declare let inBrowser: boolean, isMobile: boolean, isWeiXin: boolean, isIos: boolean, isAndroid: boolean, isXiaoMi: boolean, isHongMi: boolean, isIE: boolean, isMiniProgram: boolean, isIE9: boolean, isEdge: boolean, isChrome: boolean, isFF: boolean;
export { inBrowser, isMobile, isWeiXin, isIos, isAndroid, isXiaoMi, isHongMi, isIE, isMiniProgram, isIE9, isEdge, isChrome, isFF };
