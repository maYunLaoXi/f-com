import { randonFromList } from './array'

/**
 * 打印gitBaseInfo生成的信息于浏览器端
 * @param {*} infoObj key value对象
 */
export const logGitInfo = (infoObj, color1 = '#1475b2', color2 = '#42c02e') => {
  if(!infoObj)return
  const { log } = window.console
  for(let [key,value] of Object.entries(infoObj)){
    const color = randonFromList([color1, color2])
    log(...["%c ".concat(key, " %c ").concat(value, " "), "padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: ".concat("#606060", ";"), "padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: ".concat(color, ";")])
  }
}