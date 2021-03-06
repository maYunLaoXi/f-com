/**
 * 保留两位小数
 * @param {Number, String} numOrStr 要转换的数字
 * @param {*} mathod Math的方法
 * @returns {Number}
 */
export const keep2Decimals = (numOrStr: number | string, mathod: string = 'floor'): number | string => {
  let m;
  if(!Math[mathod]) {
    console.warn(`keep2Decimals: ${mathod} is not a Math's mathod , f-com used floor instead`)
    m = Math.floor
  } else {
    m = Math[mathod]
  }
  let num: number | string = numOrStr

  if(typeof num === 'string') {
    num = Number(numOrStr)
  }
  if(isNaN(num)) {
    return num
  }
  return m(num * 100) / 100
}