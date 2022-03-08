import { bd09togcj02, gcj02tobd09 } from './coordtransform'

/**
 * 关于坐标系
 * gcj-02： 谷歌、腾讯、高德
 * bd-09：百度
 * wgs-84：国标坐标系，GPS坐标。（浏览器的定位）
 */

export interface Point {
  longitude: number,
  latitude: number,
}
interface UnPoint { longitude: undefined, latitude: undefined }
/**
 * 百度坐标系转为腾讯坐标系
 * @param longitude 
 * @param latitude 
 * @returns 
 */
export function transB2T(longitude: number, latitude: number): Point | UnPoint {
  if (!longitude || !latitude) return { longitude: undefined, latitude: undefined }
  const [lng, lat] = bd09togcj02(longitude, latitude)
  return { longitude: lng, latitude: lat }
}

/**
 * 腾讯坐标转为百度
 * @param longitude 
 * @param latitude 
 * @returns 
 */
export function transT2B(longitude: number, latitude: number): Point | UnPoint {
  if (!longitude || !latitude) return { longitude: undefined, latitude: undefined }
  const [lng, lat] = gcj02tobd09(longitude, latitude)
  return { longitude: lng, latitude: lat }
}