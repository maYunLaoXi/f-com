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

export const getLocationCity = (ak: string) => {
  return new Promise((resolve, reject) => {
    if (!ak) {
      reject(`ak error, got ${ak}`)
      return
    }
    const bmap = new BMapWX({ ak })
    wx.getLocation({
      type: 'gcj02',
      success: async res => {
        const { latitude, longitude } = res
        try {
          let city = await getCity(latitude, longitude, bmap)
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
function regeocoding(latitude: number, longitude: number, bmap: BMapWXType) {
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
async function getCity(latitude: number, longitude: number, bmap: BMapWXType) {
  const regeocod = await regeocoding(latitude, longitude, bmap)
  return regeocod.originalData.result.addressComponent.city
}