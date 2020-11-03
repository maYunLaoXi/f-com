// import fCom, { isMobile} from './f-com-1.1.5'
import fCom, { isMobile, mosaicEmail } from './index'
import moment from 'moment'

console.log('f-com begin', fCom)
console.log(isMobile, mosaicEmail('liangyh@spinsoft.com', true, true))

window.moment = moment