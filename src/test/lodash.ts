import _ from 'lodash'

const { log } = console
const arr: Array<number> = [1,2,3,4,54,3,3,2,2,12]

log(_.uniq(arr), arr)