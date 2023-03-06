/**
 * 使用百度地图api 请将https://api.map.baidu.com加入可信域名
 */
// @ts-ignore
import BMapWX from './bmap-wx.js'

interface BMapWXType {
  regeocoding({}: {
    location: string,
    success({}: RegeocodRes): void,
    fail(err: any):void
  }): void
}

interface RegeocodRes {
  originalData: {
    result: {
      addressComponent: {
        city: string
      }
    }
  }
}

let bmap: any = null

export const initBmap = (ak: string) => {
  bmap = new BMapWX({ ak })
  return bmap
}

/**
 * 获取带有城市名的位置信息
 * @returns { latitude: xxx, longitude: xxx, city: xxx }
 */
export const getLocationCity = () => {
  return new Promise((resolve, reject) => {
    if (!bmap) {
      reject(`bmap error, 未注册百度地图, got ${bmap}`)
      return
    }
    wx.getLocation({
      type: 'gcj02',
      success: async res => {
        const { latitude, longitude } = res
        try {
          let city = await getCity(latitude, longitude)
          if (city[city.length - 1] === '市') city = city.substring(0, city.length - 1)
          resolve({ latitude, longitude, city })
        } catch (err) {
          reject(err)
        }
      },
      fail: error => {
        reject(error)
      }
    })
  })
}
export function regeocoding(latitude: number, longitude: number) {
  return new Promise<RegeocodRes>((resolve, reject) => {
    bmap.regeocoding({
      location: `${latitude},${longitude}`,
      success: (res: RegeocodRes) => {
        resolve(res)
      },
      fail: (err: any) => {
        reject(err)
      }
    })
  })
}
export async function getCity(latitude: number, longitude: number) {
  const regeocod = await regeocoding(latitude, longitude)
  return regeocod.originalData.result.addressComponent.city
}