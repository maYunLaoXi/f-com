import { imgSrc2base64 } from '../utils'
import saveAs from 'file-saver'

type JsZip = {
  new (): JsZip,
  file(fileName: string, content: string, config?: { base64?: boolean }):void,
  generateAsync(config: { type: 'blob' }): Promise<string | Blob>
}

export type ImgZipParams = {
  src: string | string[],
  JsZip: JsZip,
  fileName?: string,
  zip?: boolean,
  otherFiles?: DowloadZipType['otherFiles'],
  removeParams?: boolean
}
export type DowloadZipType = {
  src: string | string[],
  JsZip: JsZip,
  fileName?: string,
  otherFiles?: {
    fileName: string,
    content: string,
    config?: { base64: boolean }
  }[],
  removeParams?: boolean
}
/**
 * 下载图片
 * @param {*} src 图片的src 或多个src组成的数组, 当只有一个src时，其他参数可先
 * @param {*} zip 是否打包成.zip文件, 如果src是数组，则只能为zip
 * @param {*} JsZip npm社区的jszip，由于rollup打包出错，改为外置 see https://github.com/Stuk/jszip#readme
 * @param {*} removeParams 去除src所带的？参数
 */
export const dowloadImage = async ({ src, fileName, zip = false, otherFiles, JsZip, removeParams }: ImgZipParams) => {
  if(!src) return
  if(!(typeof src === 'string') || zip){
    if(!JsZip) {
      console.error('the JsZip is missing see https://github.com/maYunLaoXi/f-com#readme')
      return
    }
    dowloadZip({ src, JsZip, fileName: 'f-com-dowloadImage.zip', otherFiles, removeParams: !!removeParams })
    return
  }
  const imgUrl = removeParams ? src.split('?')[0] : src
  const base64 = await imgSrc2base64(imgUrl)
  const a: any = document.createElement('a')
  const event = new MouseEvent('click')

  a.download = fileName || 'f-com'
  a.href = base64
  // 触发 a 的点击事件
  a.dispatchEvent(event)
}

/**
 * 打包下载图片
 * @param {*} src  图片的src 或多个src组成的数组
 * @param {JsZip} JsZip npm社区的jszip，由于rollup打包出错，改为外置 see https://github.com/Stuk/jszip#readme
 * @param {*} fileName 可选
 * @param {Array} otherFiles 可选
 * @param {*} removeParams 去除src所带的？参数
 */
export async function dowloadZip({ src, JsZip, fileName, otherFiles, removeParams }: DowloadZipType): Promise<void> {
  if(!JsZip) {
    throw 'the JsZip is missing see https://github.com/maYunLaoXi/f-com#readme'
  }
  const srcs = typeof src === 'string' ? [src] : src
  const zip = new JsZip()
  for(let item of srcs) {
    const name = item.split('?')[0].match(/[^\/]+?$/)
    const imgUrl = removeParams ? item.split('?')[0] : item
    
    const content = await imgSrc2base64(imgUrl)
    zip.file(name ? name[0] : 'image', content.split('base64,')[1], { base64: true })
  }
  if(otherFiles){
    if(!Array.isArray(otherFiles)) {
      console.error(`otherFiles需要传入数组，${otherFiles}`)
    } else {
      otherFiles.forEach(({ fileName, content, config = {} }) => {
        zip.file(fileName, content, config)
      })
    }
  }
  const res = await zip.generateAsync({ type: 'blob' })
  saveAs.saveAs(res, fileName || 'f-com-dowloadZip.zip')
}