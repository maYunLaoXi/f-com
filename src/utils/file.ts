import { fileLastName } from './string'
/**
 * 将图片转为base64格式
 * @param {string} src 图片src
 */
export const imgSrc2base64: (val: string) => Promise<string> =  src => {
  let lastName = fileLastName(src, 'png')
  if(!lastName.match('png'))lastName = 'jpeg'
  const image = new Image();
  // 解决跨域 canvas 污染问题
  image.setAttribute('crossOrigin','anonymous');
  return new Promise(resolve => {
    image.onload = function(){
      const canvas: HTMLCanvasElement = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext('2d');
      (context as CanvasRenderingContext2D).drawImage(image,0,0,image.width,image.height);
      const base64 = canvas.toDataURL('image/' + lastName, 1);
      resolve(base64)
    }
    image.src = src
  })
}