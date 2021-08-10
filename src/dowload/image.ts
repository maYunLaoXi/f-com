import { imgSrc2base64 } from '../utils'
import JsZip from 'jszip'
import saveAs from 'file-saver'

type ZipAuthor = { name: string, content: string }
export type ImgZipParams = {
  src: string,
  JsZip: JsZip,
  name?: string,
  zip?: boolean,
  zipAuthor?: ZipAuthor,
}
/**
 * 下载图片
 * @param {*} src 图片的src 或多个src组成的数组, 当只有一个src时，其他参数可先
 * @param {*} zip 是否打包成.zip文件, 如果src是数组，则只能为zip
 * @param {*} JsZip npm社区的jszip，由于rollup打包出错，改为外置 see https://github.com/Stuk/jszip#readme
 */
export const dowloadImage = async ({ src, name, zip = false, zipAuthor, JsZip }: ImgZipParams) => {
  if(!src) return
  if(!(typeof src === 'string') || zip){
    if(!JsZip) {
      console.error('the JsZip is missing see https://github.com/maYunLaoXi/f-com#readme')
      return
    }
    dowloadZip(src, JsZip, zipAuthor)
    return
  }
  const base64 = await imgSrc2base64(src)
  const a: any = document.createElement('a')
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
 * @param {*} zipAuthor 可选
 */
export async function dowloadZip(src: string, JsZip: JsZip, zipAuthor: ZipAuthor | undefined): Promise<void> {
  if(!JsZip) {
    console.error('the JsZip is missing see https://github.com/maYunLaoXi/f-com#readme')
    return
  }
  const srcs = typeof src === 'string' ? [src] : src
  const zip = new JsZip()
  for(let item of srcs) {
    const name = item.match(/[^\/]+?$/)
    const content = await imgSrc2base64(item)
    zip.file(name ? name[0] : 'image', content.split('base64,')[1], { base64: true })
  }
  if(zipAuthor){
    zip.file(zipAuthor.name, zipAuthor.content)
  }
  const res = await zip.generateAsync({ type: 'blob'})
  saveAs.saveAs(res, 'yingyingbi.zip')
}