type urlType = { url?: Array<string> | string, env?: string, list?: Array<string> }
/**
 * ajax的重定义url, 传入的url应符合 list 的顺序
 * @param {Array | string} url 
 * @param {string} env 环境名（mock, test, gray, development等
 * @param {Array} list 所有环境
 */
export const getUrl = ({ url, env, list = [ 'mock', 'development', 'test', 'gray', 'production'] }: urlType = {}) => {
  if(!url)return '';
  let resaultUrl = ''
  if(Array.isArray(url)){
    const index = list.indexOf(env)
    const lastUrl = url[url.length - 1]
    
    if(!env || index === -1) return lastUrl
    resaultUrl = url[index]
    if(!resaultUrl)resaultUrl = lastUrl
  }else{ 
    resaultUrl = url;
  }
  return resaultUrl;
}
