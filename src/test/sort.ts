// 算法开始的地方

const arr: Array<number> = [6, 2, 4, 5]
const { log } = console

/**
 * 冒泡排序法 
 * 比较相邻两个无素的大小， 
 * 将大的一个往后推，每推完一次，
 * 数组后面就多一个元素不用比较（应为已经知道它是最大的）。
 */

function bubbleSort(arr: Array<number>): Array<number> {
  const { length } = arr
  
  for (let i:number = 0; i < length; i++) { // i只是拿来排除已改到最后的元素
    for (let j = 0; j < length - i - 1; j++) { // 每次将最大（小）的那个无素放到最后， 然后下一次就不用比较最后一个（依次类推）
      // 从j = 0位开始，
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
log(bubbleSort(arr))