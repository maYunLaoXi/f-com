import { format, readableTime, mosaicEmail, isIE, isFF, isChrome } from'../src/index.js'
const { gitBaseInfo } = require('../src/node/git')

test('userAgent', () => {
  expect(isChrome || isFF || isIE).toBe(false)
})
test('2020-10-01 12:12:12 to 2020年10月1日', () => {
  expect(format('2020-10-01 12:12:12',1)).toBe('2020年10月1日 12:12:12')
})

test('readableTime 1秒前', () => {
  expect(readableTime('2020-09-22')).toBe('1个月前')
})
test('gitBaseInfo',  () => {
  let info = gitBaseInfo()
  expect(info.auther).toBe('liangyh')
  expect(info.branch).toBe('master')
})

test('mosaic email address', () => {
  expect(mosaicEmail('lii@outlook.com', true, true)).toBe('lii@ou***ok.com')
})