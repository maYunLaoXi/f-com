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

/**
 * 选择排序
 * 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
 * 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
 * 重复第二步，直到所有元素均排序完毕。
 * @param arr 
 */
function selectionSort(arr: Array<number>): Array<number> {
  const { length } = arr

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < length; j++) { // j从所排完的后一个开始循环到最后一个
      if (arr[minIndex] > arr[j]) { // 找出最小那个的下标
        minIndex = j
      }
    }
    // 交换
    const temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}
log(selectionSort(arr))

/**
 * 插入排序
 * 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
 * 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）
 * @param arr
 */
function insertionSort(arr: Array<number>): Array<number> {

  return arr
}
