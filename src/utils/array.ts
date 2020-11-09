// 数组的方法

/**
 * 对像元素的数组去重
 * @param { Array } arr 数组，
 * @param { String } key 用于查重的元素属性
 */
export const arrayRemoveRepeat = (arr, key) => {
  if(!Array.isArray(arr) && !arr.length && !key)return arr

  const keyArr = []
  const result = {}
  const reSet = {}

  for(let item of arr) {
    keyArr.push(item[key])
  }
  for(let i = 0, len = keyArr.length; i < len; i++) {
    if( result[keyArr[i]] && result[keyArr[i]] !== '0') {
      result[keyArr[i]] = i
    }else reSet[keyArr[i]] = i
  }
  for(let removeKey in reSet) {
    arr.splice(reSet[removeKey], 1)
  }
  return arr
}
/**
 * 随机获取元素中的一个
 * @param {*} list 为数组时其各个元素参与随机
 * @param  {...any} args 
 */
export const randonFromList = (list: Array<any>,...args):any => {
  let array = Array.isArray(list) ? list : [list]
  array = array.concat(args)
  const { floor, random } = Math
  const length  = array.length
  const i = floor(random() * length)
  return array[i]
}