// 客户端信息

let inBrowser, isMobile, isWeiXin, isIos, isAndroid, isXiaoMi, isHongMi, isIE,  isMiniProgram, isIE9, isEdge, isChrome, isFF;
if(typeof window === 'undefined') {
  inBrowser = false
} else {
  const ua: string = window.navigator.userAgent;
  const lowerUa: string = ua.toLowerCase();
  
  isMobile = !!ua.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  // 微信浏览器
  isWeiXin = lowerUa.indexOf('micromessenger') !== -1;
  isIos = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  // isIOS = /iphone|ipad|ipod|ios/.test(lowerUa)
  isAndroid = lowerUa.indexOf('android') > 0
  
  // 小米手机
  isXiaoMi = lowerUa.indexOf('mi ') !== -1;
  // 红米手机
  isHongMi = lowerUa.indexOf('redmi') !== -1;
  // 小程序 web-view
  isMiniProgram = () => window['__wxjs_environment'] === 'miniprogram';
  
  isIE = lowerUa && /msie|trident/.test(lowerUa)
  isIE9 = lowerUa.indexOf('msie 9.0') > 0
  isEdge = lowerUa.indexOf('edge/') > 0
  isChrome = /chrome\/\d+/.test(lowerUa) && !isEdge
  isFF = !!lowerUa.match(/firefox\/(\d+)/)
}
export { inBrowser, isMobile, isWeiXin, isIos, isAndroid, isXiaoMi, isHongMi, isIE,  isMiniProgram, isIE9, isEdge, isChrome, isFF }