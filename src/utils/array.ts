// 数组的方法
/**
 * 对像元素的数组去重, 会更改原数组
 * @param { Array } arr 数组，
 * @param { String } key 用于查重的元素属性
 */
export const arrayRemoveRepeat = (arr:[], key: string) => {
  return removeRepeat(arr, key)
}
export const removeRepeat = (arr:[], field: string) => {
  let s = {}
  for(let i = 0; i < arr.length; i++){
      s[arr[i][field]] = arr[i]
  }
  return Object.values(s)
}
/**
 * 随机获取元素中的一个
 * @param {*} list 为数组时其各个元素参与随机
 * @param  {...any} args 
 */
export const randonFromList = (list: Array<any>,...args: undefined[]):any => {
  let array = Array.isArray(list) ? list : [list]
  array = array.concat(args)
  const { floor, random } = Math
  const length  = array.length
  const i = floor(random() * length)
  return array[i]
}