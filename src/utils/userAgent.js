// 客户端信息
const ua = window.navigator.userAgent;
const lowerUa = ua.toLowerCase();

// 移动端
export const isMobile = !!ua.match(
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
);
// 微信浏览器
export const isWeiXin = lowerUa.indexOf('micromessenger') !== -1;
// ios终端
export const isIos = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
export const isIOS = /iphone|ipad|ipod|ios/.test(lowerUa)
// android
export const isAndroid = lowerUa.indexOf('android') > 0

// 小米手机
export const isXiaoMi = lowerUa.indexOf('mi ') !== -1;
// 红米手机
export const isHongMi = lowerUa.indexOf('redmi') !== -1;
// 小程序 web-view
export const isMiniProgram = () => window.__wxjs_environment === 'miniprogram';

export const isIE = lowerUa && /msie|trident/.test(lowerUa)
export const isIE9 = lowerUa.indexOf('msie 9.0') > 0
export const isEdge = lowerUa.indexOf('edge/') > 0
export const isChrome = /chrome\/\d+/.test(lowerUa) && !isEdge
export const isFF = lowerUa.match(/firefox\/(\d+)/)