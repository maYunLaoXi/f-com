/**
 * 将url中的参数转成 key value 对像
 * @param {string} url
 * @param {boolean} noDecodeURIComponent 是否用decodeURIComponent转换
 * @returns {Object}
 */
export function param2Obj(url: string, noDecodeURIComponent: boolean): object {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return body2Obj(search, noDecodeURIComponent)
}
/**
 * 将a=1&b=2` 转换为 key value 对像
 * @param {string} url
 * @param {boolean} noDecodeURIComponent 是否用decodeURIComponent转换
 * @returns {Object}
 */
export function body2Obj(body: string, noDecodeURIComponent: boolean): object {
  if(!body) return {}
  let str = noDecodeURIComponent ? body : decodeURIComponent(body)
  return JSON.parse(
    '{"' +
      str.replace(/"/g, '\\"')
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
export const fileLastName = (src: string, def: string = ''): string => {
  if(!src) return def
  const name = src.match(/\.[^.]+?$/)
  if(!name) return def
  return name[0]
}
/**
 * 为邮箱地址打上*号马赛克, 默认'@'前字符替换
 * @param {String} address 邮箱地址
 * @param {Boolean} front '@'前字符替换
 * @param {Boolean} end '@'后字符替换
 */
export const mosaicEmail = (address: string, front: boolean = true, end: boolean = false) => {
  if(!address || !address.includes('@')) return ''
  const frontReg = /\w*(?=@)/,
    endReg = /@(.+?)\./;
    // /(?<=@)\w*/ // safari不适用
    // /@([\s\S]*?)\./ // 可用
    
  let emailFront = address.match(frontReg)[0],
  emailEnd = address.match(endReg)[1];
  if(front) {
    let replaceStr = emailFront.slice(2, -1)
    emailFront = emailFront.replace(replaceStr, createLangthString(replaceStr))
  }
  if(end) {
    let replaceStr = emailEnd.slice(2, -2)
    emailEnd = emailEnd.replace(replaceStr, createLangthString(replaceStr))
  }

  return address.replace(frontReg, emailFront).replace(endReg, `@${emailEnd}.`)
}

function createLangthString(langth) {
  let times = langth
  if(typeof langth === 'string') times = langth.length;
  let string = ''
  for(let i = 0; i < times; i++)  {
    string += '*'
  }
  return string
}