import uniq from 'lodash/uniq'

const { log } = console
const arr: Array<number> = [1,2,3,4,54,3,3,2,2,12]

log(uniq(arr), arr)