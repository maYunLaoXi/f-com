// 客户端信息
const ua: string = window.navigator.userAgent;
const lowerUa: string = ua.toLowerCase();

// 移动端
export const isMobile: boolean = !!ua.match(
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
);
// 微信浏览器
export const isWeiXin: boolean = lowerUa.indexOf('micromessenger') !== -1;
// ios终端
export const isIos: boolean = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
// export const isIOS = /iphone|ipad|ipod|ios/.test(lowerUa)
// android
export const isAndroid: boolean = lowerUa.indexOf('android') > 0

// 小米手机
export const isXiaoMi: boolean = lowerUa.indexOf('mi ') !== -1;
// 红米手机
export const isHongMi: boolean = lowerUa.indexOf('redmi') !== -1;
// 小程序 web-view
export const isMiniProgram = (): boolean => window['__wxjs_environment'] === 'miniprogram';

export const isIE: boolean = lowerUa && /msie|trident/.test(lowerUa)
export const isIE9: boolean = lowerUa.indexOf('msie 9.0') > 0
export const isEdge: boolean = lowerUa.indexOf('edge/') > 0
export const isChrome: boolean = /chrome\/\d+/.test(lowerUa) && !isEdge
export const isFF: boolean = !!lowerUa.match(/firefox\/(\d+)/)