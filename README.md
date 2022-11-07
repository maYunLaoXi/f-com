# 开发常用到的工具集合

支持typescript

## usage
```
npm install f-com
```
or
```
yarn add f-com
```
```
import fCom from 'f-com

if(fCom.isMobile) { ... }

```
或
```
import { isMobile } from 'f-com'
```

### 微信小程序版
微信小程序版本去掉一些小程序中不支持的浏览器接口，并且添加一些wx相当接口。

```
npm install f-com --production
```

typescript支持：
```
// tsconfig.json 添加类型引用
{
  "compilerOptions": {
    ...
    "paths": {
      "f-com": ["node_modules/f-com/miniprogram_dist/types.d.ts"]
    }
  }
}
```

## 数组（以下为文档）
### 去重
```
import { arrayRemoveRepeat, ... } from 'f-com'
```
```
arrayRemoveRepeat([{id: 1}], 'id') // 跟椐id值去重
```

## 浏览器相关

* isMobile
* isWeiXin
* isIos
* isMinProgram

```javascript
import { isMobile, isWeiXin, isIos, isAndroid, isXiaoMi, isMiniProgram isIE, isIE9, isEdge, isChrome, isFF } from 'f-com'

// 只有isMiniProgram 是一个函数
// 是否为微信小程序
if(isMiniProgram()) { ... }

// 是否为移动端
if(isMobile) { ... }

// 微信浏览器
if(isWeiXin) { ... }
// firefox
if(isFF) { ... }
```

## String

* param2Obj： 将url中的参数转成 key value 对像(依据?)

  ```javascript
  fCom.param2Obj('http://localhost:3000/productions/index.html?a=1&b=2&c=3') // { a: 1, b: 2, c: 3 }
  ```
* body2Obj： 将类a=1&b=2 转换为 key value 对像（无需?)
  ```javascript
  fCom.body2Obj('a=1&b=2&c=3') // { a: 1, b: 2, c: 3 }
	```
* fileLastName(src, [defaultName]):  查找文件后缀名(带.) 
  ```
  fCom.fileLastName('iiiimage.jpg') // .jpg
  ```
* mosaicEmail(emailAddress[, mosaicFront, mosaicEnd]): 为邮箱地址打上*号马赛克, 默认'@'前字符替换
  ```
  mosaicEmail('fcomtil@outlook.com') // fc****l@outlook.com
  mosaicEmail('fcomtil@outlook.com', true, true) // fc****l@ou****k.com
  mosaicEmail('fcomtil@outlook.com', false, true) // fcomtill@ou****k.com
  mosaicEmail('fcomtil@outlook.com', false, false) // fcomtil@outlook.com
  ```
## Time时间

* readableTime(time): 格式化为可读时间(xx秒前， XX分钟、小时、天、个月、年前)

  ```javascript
  fCom.readableTime('1601185700124') // 5分钟前
  ```


## 文件内容等

* imgSrc2base64(src) ： url图片资源转换为base64编码

  ```javascript
  fCom.imgSrc2base64('http://img.jpg').then(res => { ... })
  // or
  let base64 = await fCom.imgSrc2base64('http://img.jpg')
  ```

* dowloadImage({ src, zip = false, JsZip })： 下载图片资源

  ```javascript
  // 当使用打包下载时必须传入jszip
  // npm社区的jszip @3.5.0，由于rollup打包出错，改为外置 see https://github.com/Stuk/jszip#readme
  import JsZip from 'jszip'
  // 	直接下载
  fCom.dowloadImage({ src: 'http://img.jpg' })
  
  // 打包下载
  fCom.dowloadImage({ src: 'http://img.jpg', zip: true, JsZip })
  
  // 多个src， 打包下载
  fCom.dowloadImage({ src: ['http://a.jpg', 'http://b.jpg'], zip: true, JsZip })
  ```

## Number
  * keep2Decimals(num, [mathod]): 保留两位小数默认用Math.floor方法，可转入mathod（Math的方法名）

## Object
  * logGitInfo(infoObj[, color1 = '#1475b2', color2 = '#42c02e']): 带样式打印对象key value于浏览器端
  

## GPS坐标系间的转换
  * transB2T(longitude, latitude) 百度转腾讯（高德、谷歌）
  ```javascript
  transB2T(113.819326, 22.630472)
  // { longitude: 113.xxx, latitude: 22.xxxx }
  ```
  * transT2B(longitude, latitude) 腾讯转百度

  * wgs84tobd09 wgs84坐标转bd09坐标(bd09为百度坐标系)
  
  * wgs84togcj02 wgs84转gcj02（gcj02为高德、腾讯、谷歌坐标系）