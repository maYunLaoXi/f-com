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