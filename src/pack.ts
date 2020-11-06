// import fCom, { isMobile} from './f-com-1.1.5'
import fCom, { isMobile, mosaicEmail, keep2Decimals } from './index'
import moment from 'moment'
const { log } = window.console

window.moment = moment

log('f-com: ', fCom)
log(isMobile, mosaicEmail('liangyh@spinsoft.com', true, true))
log('keep2Decimals', keep2Decimals(222.423452423))
