import { getUrl } from '../src/index'

test('getUrl => test', () => {
  expect(getUrl({ url: 'aaaa', env: 'mock' })).toBe('aaaa')
  expect(getUrl({ url: ['aaaa', 'bbbb'], env: 'mock' })).toBe('aaaa')
  expect(getUrl({ url: ['aaaa', 'bbbb'] })).toBe('bbbb')
  expect(getUrl({ url: ['aaaa', 'bbbb'], env: 'development' })).toBe('bbbb')
})