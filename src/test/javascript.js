// 一些js 知识复习
console.log('javascript.js activing')

// 原型链

// function Persion() {
//   this.name = 'PersionName'
// }

// let man = new Persion()
// let prototype = Persion.prototype

// // 实例的__proto__为原型(在浏览器支持)
// prototype === man.__proto__
// // 原型的constructor指向对像
// prototype.constructor === Persion


// 继承
/**
 * 1.原型链继承
 */

function Parent() {
  this.name = 'ParentName'
  // 缺点1： 引用类型的属性被所有实例共享
  this.actions = ['say', 'dance']
}
Parent.prototype.sayName = function() {
  console.log(this.name)
}
function Child() {}

// 子类的原型改为父类的一个实例
Child.prototype = new Parent()

// 缺点2：在创建 Child 的实例时，不能向Parent传参
let child1 = new Child()
let child2 = new Child()

console.log( 'sayName(): ', child1.sayName())

child2.actions.push('sleep')

console.log('child1.actions', child1.actions)

// 防抖
/**
 * 防抖的原理就是：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，
 * 如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行，
 * 总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行，真是任性呐!
 */

// 基础版
// 显然一个闭包
function debounce(fn, wait) {
  let timeout;
  return function() {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(fn, wait)
  }
}

// 改进 this指向的问题

function debounce(fn, wait) {
  let timeout;
  return function() {
    const that = this
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(function() {
      fn.apply(that)
    }, wait)
  }
}
// 改进event对象（传参问题)
function debounce(fn, wait) {
  let timeout;
  return function() {
    const that = this
    const args = arguments

    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(function() {
      fn.apply(that, args)
    }, wait)
  }
}

// 节流
/**
 * 如果你持续触发事件，每隔一段时间，只执行一次事件。
 * 根据首次是否执行以及结束后是否执行，效果有所不同，实现的方式也有所不同。
 * 我们用 leading 代表首次是否执行，trailing 代表结束后是否再执行一次。
 */
// 关于节流的实现，有两种主流的实现方式，一种是使用时间戳，一种是设置定时器。

// 使用时间戳
function throttle(fn, wait) {
  let previous = 0
  const args = arguments

  return function()  {
    const that = this
    const now = +new Date()

    if (now - previous >= wait) {
      fn.apply(that, args)
      previous = now
    }
  }
}

/**
 * 使用定时器
 * 当触发事件的时候，我们设置一个定时器，再触发事件的时候，
 * 如果定时器存在，就不执行，直到定时器执行，
 * 然后执行函数，清空定时器，这样就可以设置下个定时器。
 */
function throttle(fn, wait) {
  let timeout
  const args = arguments

  return function() {
    const that = this
    if (!timeout) {
      timeout = setTimeout(function() {
        fn.apply(that, args)
        timeout = null
      }, wait)
    }
  }
}