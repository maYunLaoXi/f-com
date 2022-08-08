/**
 * 保留两位小数
 * @param {Number, String} numOrStr 要转换的数字
 * @param {*} mathod Math的方法
 * @returns {Number}
 */
export const keep2Decimals = (numOrStr: number | string, mathod: 'floor' | 'round' = 'floor'): number | string => {
  let m;
  if(!Math[mathod]) {
    console.warn(`keep2Decimals: ${mathod} is not a Math's mathod , f-com used floor instead`)
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

/**
 * 生成随机整数
 * @param minus 是否负数
 * @returns 
 */
export function randomInt(minus: boolean = false): number {
  const num = Number(Math.random().toString().split('0.')[1])
  if(minus) return -num
  else return num
}

/**
 * 安全相减
 * @param {Number} num1 
 * @param {Number} num2 
 * @returns 
 */
 export function subtract(num1: number, num2: number) {
  const num1Digits = (num1.toString().split('.')[1] || '').length;
  const num2Digits = (num2.toString().split('.')[1] || '').length;
  const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
  return (num1 * baseNum - num2 * baseNum) / baseNum;
}

/**
 * 安全相加
 */
export function numberAdd(num1: number, num2: number) {
  const num1Digits = (num1.toString().split('.')[1] || '').length;
  const num2Digits = (num2.toString().split('.')[1] || '').length;
  const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));

  return (mul(num1, baseNum) + mul(num2 ,baseNum)) / baseNum
}
/**
 * 乘法运算
 * 
 * @param {Number} num1
 * @param {Number} num2
 */

/* 提示：因为原生js会出现类似：
  1.3*3=3.9000000000000004
  5.3*9=47.699999999999996
  的情况。所以共同乘以10的n次方，n为a、b两个数小数部分的最大长度值，这样就能一起化为整数运算
*/
export function mul(num1: number, num2: number) {
  if (!num1 || !num2) {
    if(num1 === 0 || num2 === 0) return 0
    console.error('Error: 乘法运算需要传入2个数字')
    return 0
  }
  const num1Digits = (num1.toString().split('.')[1] || '').length
  const num2Digits = (num2.toString().split('.')[1] || '').length

  return (Number(num1.toString().replace('.', '')) * Number(num2.toString().replace('.', ''))) / (10 ** (num1Digits + num2Digits))
}

/**
 * 除法运算
 * 
 * @param {Number} num1
 * @param {Number} num2
 */
/* 提示：因为原生js会出现类似：
  0.3/0.1=2.9999999999999996
  0.6/3=0.19999999999999998
  的情况。所以共同乘以10的n次方，n为a、b两个数小数部分的最大长度值，这样就能一起化为整数运算
*/
export function div(num1: number, num2: number) {
  if (!num1 || !num2) {
    console.error('Error: 减法运算需要传入2个数字')
    return 0
  }
  const num1Digits = (num1.toString().split('.')[1] || '').length
  const num2Digits = (num2.toString().split('.')[1] || '').length

  const fenzi = Number(num1.toString().replace('.', '')) * (10 ** (num1Digits + num2Digits))
  const fenmu = Number(num2.toString().replace('.', '')) * (10 ** (num1Digits + num2Digits))
  return fenzi / fenmu / (10 ** (num1Digits - num2Digits))
}
