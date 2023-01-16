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
dlzip?.onclick = () => {
  const srcs = [
    "https://img.zcool.cn/community/018qm015eahq0brygvyq7f3131.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01j4nhjimnbueyfoo5g3vg3735.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01oxq3unkxvgwgnfk3esyg3335.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01x1nt5cpmqtd3hpxtwtqe3439.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01lqvjelilx8rkdqcafbvi3031.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01ictg9b5oiilezm19zclx3634.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01yr4ian2jhx4avesa6t813339.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01wa9qof0tbwlhsyrx2ewk3236.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/012d1raaxswjsd1txbfznt3431.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01ctbedzl0hg8fouekkhbs3832.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01etq3kabsg0xflqqz9jfr3239.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01aidrjysqzfruwacbyn3n3037.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/011cphjcx7em5dr5jjpxto3830.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01adwltsth7eikpumyzgrz3230.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/015f5ye37dlri5soeck4sv3730.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01nkhcoioudjpvhyiiuo4p3830.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100"
]
  console.log(srcs)
  fCom.dowloadZip({
    src: srcs,
    fileName: 'test.zip',
    JsZip: JsZip,

  })
}