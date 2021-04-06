// 数组的方法

/**
 * 对像元素的数组去重, 会更改原数组
 * @param { Array } arr 数组，
 * @param { String } key 用于查重的元素属性
 */
export const arrayRemoveRepeat = (arr, key) => {
  if(!Array.isArray(arr) && !arr.length && !key)return arr

  const keyArr: Array<number> = []
  const result = {}
  const reSet = {}

  // keyArr的下标对应原数组的下标
  for(let item of arr) {
    keyArr.push(item[key])
  }
  // result存每个元素，有重复的就存在reSet
  for(let i = 0; i < keyArr.length; i++) {
    if( !result[keyArr[i]] && result[keyArr[i]] !== 0) {
      result[keyArr[i]] = i
    }else reSet[keyArr[i]] = i
  }
  for(let removeKey in reSet) {
    arr.splice(reSet[removeKey], 1)
  }
  return arr
}
export const removeRepeat = (arr, field) => {
  let s = {}
  for(let i=0; i < arr.length; i++){
      s[arr[i][field]] = arr[i]
  }
  return Object.values(s)
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