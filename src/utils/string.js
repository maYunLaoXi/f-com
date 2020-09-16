/**
 * 将url中的参数转成 key value 对像
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return body2Obj(search)
}
/**
 * 将a=1&b=2` 转换为 key value 对像
 * @param {string} url
 * @returns {Object}
 */
export function body2Obj(body) {
  if(!body) return '{}'
  return JSON.parse(
    '{"' +
      decodeURIComponent(body)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
    '"}'
  )
}
/**
 * 查找文件后缀名
 * @param {*} src 文件名
 * @param {*} def 默认值
 */
export const fileLastName = (src, def = '') => {
  if(!src) return def
  const name = src.match(/\.[^.]+?$/)
  if(!name) return def
  return name[0]
}