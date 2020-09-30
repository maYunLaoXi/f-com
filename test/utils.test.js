const { format, readableTime } = require('../dist/f-com.js')
const { gitBaseInfo } = require('../src/node/git')

test('2020-10-01 12:12:12 to 2020年10月1日', () => {
  expect(format('2020-10-01 12:12:12',1)).toBe('2020年10月1日 12:12:12')
})

test('readableTime 1秒前', () => {
  expect(readableTime('2020-09-22')).toBe('8天前')
})
test('gitBaseInfo', () => {
  expect(gitBaseInfo().auther).toBe('yunHui')
})