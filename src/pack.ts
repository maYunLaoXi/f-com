// import fCom, { isMobile} from './f-com-1.1.5'
import fCom, { logGitInfo, isMobile, mosaicEmail, keep2Decimals, format, readableTime } from './index'
import moment from 'moment'
const { log } = window.console

window.moment = moment

log('f-com: ', fCom)
const info = {
  isMobile: isMobile,
  keep2Decimals: keep2Decimals(222.423452423),
  mosaicEmail: mosaicEmail('liangyh@spinsoft.com', true, true),
  format: format(new Date()),
  readableTime: readableTime(new Date('2020'))
}
logGitInfo(info)
