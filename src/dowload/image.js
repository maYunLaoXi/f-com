import { imgSrc2base64 } from '../utils'
// import JsZip from 'jszip'
import saveAs from 'file-saver'

/**
 * 下载图片
 * @param {*} src 图片的src 或多个src组成的数组, 当只有一个src时，其他参数可先
 * @param {*} zip 是否打包成.zip文件, 如果src是数组，则只能为zip
 * @param {*} JsZip npm社区的jszip，由于rollup打包出错，改为外置 see https://github.com/Stuk/jszip#readme
 */
export const dowloadImage = async ({ src, zip = false, zipAnothers, JsZip }) => {
  if(!src) return
  if(!typeof src === 'string' || zip){
    if(!JsZip) {
      console.error('the JsZip is missing see https://github.com/maYunLaoXi/f-com#readme')
      return
    }
    dowloadZip(src, JsZip, zipAnothers)
    return
  }
  const base64 = await imgSrc2base64(src)
  const a = document.createElement('a')
  const event = new MouseEvent('click')

  a.download = name || 'fcom'
  a.href = base64
  // 触发 a 的点击事件
  a.dispatchEvent(event)
}
/**
 * 打包下载图片
 * @param {*} src  图片的src 或多个src组成的数组
 * @param {*} JsZip npm社区的jszip，由于rollup打包出错，改为外置 see https://github.com/Stuk/jszip#readme
 * @param {*} zipAnothers 可选
 */
export async function dowloadZip(src, JsZip, zipAnothers) {
  if(!JsZip) {
    console.error('the JsZip is missing see https://github.com/maYunLaoXi/f-com#readme')
    return
  }
  const srcs = typeof src === 'string' ? [src] : src
  const zip = new JsZip()
  for(let item of srcs) {
    const name = item.match(/[^\/]+?$/)
    const content = await imgSrc2base64(item)
    zip.file(name, content.split('base64,')[1], { base64: true })
  }
  if(zipAnothers){
    zip.file(zipAnothers.name, zipAnothers.content)
  }
  const res = await zip.generateAsync({ type: 'blob'})
  saveAs.saveAs(res, 'yingyingbi.zip')
}