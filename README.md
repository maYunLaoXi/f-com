# 开发常用到的工具集合


```
npm install f-com
```
or
```
yarn add f-com
```
## usage
```
import fCom from 'f-com

if(fCom.isMobile) { ... }

```
或
```
import { isMobile } from 'f-com'
```

## 数组
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

```java
import { isMobile, isWeiXin, isIos, isXiaoMi, isMiniProgram } from 'f-com'

// 是否为移动端
if(isMobile) { ... }

// 微信浏览器
if(isWeiXin) { ... }

// 只有isMiniProgram 是一个函数
// 是否为微信小程序
if(isMiniProgram()) { ... }
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
  
  

