// import fCom, { isMobile} from './f-com-1.1.5'
import fCom, { 
  logGitInfo, isMobile, isChrome,  mosaicEmail, keep2Decimals, format, readableTime,
  startReport
} from './index'
import moment from 'moment'
import './test/sort'

const { log } = window.console

window.moment = moment

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
startReport(function(a) {
  console.log('reported', a)
})
// 测试report 
// setInterval(function (){
//   console.log(err)
// }, 1000)