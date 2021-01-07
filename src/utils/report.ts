// 错误上报
import { format } from './time'

const maxCount: number = 10
const logs: Array<any> = []
let reportedCount: number = 0
let interval


/**
 * 上报请求处理
 * @param api 请求接口
 */
const doReportError = (api: any): any => {
  if (!api) return
  // 错误太频繁 中断上报
  if (reportedCount >= maxCount) {
    if (interval) clearInterval(interval)
    return
  }
  if (!logs.length) return

  const needReportLogs = []

  while(logs.length) {
    needReportLogs.push(logs.shift())
    reportedCount += 1

    if (reportedCount >= maxCount) {
      if (interval) clearInterval(interval)
      break
    }
  }
  api(needReportLogs)
}

/**
 * 错误上报方法
 * @param api 上报接口
 */
export const startReport = (api: any):void => {
  window.onerror = (message, source, line, column, error) => {
    logs.push({
      href: window.location.href,
      userAgent: window.navigator.userAgent,
      cookie: window.document.cookie,
      message,
      source,
      line,
      column,
      error: error ? error.message : '',
      stack: error ? error.stack : '',
      time: format(new Date(), 'true'),
    })
    console.log('add an error', logs.length)
  }
  doReportError(api)
  // 10秒一次
  interval = setInterval(function() {
    doReportError(api)
  }, 10000)
}