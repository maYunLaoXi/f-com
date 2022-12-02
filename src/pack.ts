// webpack 入口文件

import './index.css'
// import fCom, { isMobile} from './f-com-1.1.5'
import fCom, { 
  logGitInfo, isMobile, isChrome,  mosaicEmail, keep2Decimals, format, readableTime,
  startReport,
  removeRepeat,
  arrayRemoveRepeat
} from './index'
import './test/sort'
import './test/lodash'
import { body2Obj } from './utils'
import JsZip from 'jszip'

const { log } = window.console

log('f-com: ', fCom)
const info = {
  isMobile: isMobile,
  isChrome: isChrome,
  keep2Decimals: keep2Decimals(222.423452423),
  mosaicEmail: mosaicEmail('liangyh@spinsoft.com', true, true),
  format: format(new Date()),
  readableTime: readableTime(new Date('2020'))
}
logGitInfo(info)
startReport(function(a: string) {
  console.log('reported', a)
})
// 测试report 
// setInterval(function (){
//   console.log(err)
// }, 1000)
const arr = [
  { id: 1, i: 1 },
  { id: 2, i: 2 },
  { id: 1, i: 1 },
  { id: 2, i: 2 },
  { id: 4, i: 4 },
  { id: 3, i: 3 },
]
const arr2 = [
  { id: 1, i: 1 },
  { id: 2, i: 2 },
  { id: 1, i: 1 },
  { id: 2, i: 2 },
  { id: 4, i: 4 },
  { id: 3, i: 3 },
]
log(removeRepeat(arr2, 'id'),
  arrayRemoveRepeat(arr, 'id'))

const dlimg = document.getElementById('dowloadImage')
const dlzip = document.getElementById('dowloadZip')
const img = document.getElementById('smms1')

dlimg?.onclick = () => {
  console.log(img.src)
  fCom.dowloadImage({ src: img?.src, JsZip })
}