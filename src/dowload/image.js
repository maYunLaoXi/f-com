import { imgSrc2base64 } from '../utils'
import JsZip from 'jszip'
import saveAs from 'file-saver'

async function dowloadZip(src, zipAnothers) {
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
  saveAs(res, 'yingyingbi.zip')
}
export const dowloadImage = async ({ src, zip = false, zipAnothers }) => {
  if(!src) return
  if(!typeof src === 'string' || zip){
    dowloadZip(src, zipAnothers)
    return
  }
  const base64 = await imgSrc2base64(src)
  // 生成一个 a 标签
  const a = document.createElement('a');
  // 创建一个点击事件
  const event = new MouseEvent('click');
  // 将 a 的 download 属性设置为我们想要下载的图片的名称，若 name 不存在则使用'图片'作为默认名称
  a.download = name || '图片';
  // 将生成的 URL 设置为 a.href 属性
  a.href = base64;
  // 触发 a 的点击事件
  a.dispatchEvent(event);
}