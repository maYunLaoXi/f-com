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