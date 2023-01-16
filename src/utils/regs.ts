

// 新能源车牌
export const isNEVCarNo = (catNo: string) => {
  return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[A-HJK]$)|([A-HJK][A-HJ-NP-Z0-9][0-9]{4}$))/.test(catNo)
}

// 燃油车牌
export const isOilCarNo = (carNo: string) => {
  return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/.test(carNo)
}

