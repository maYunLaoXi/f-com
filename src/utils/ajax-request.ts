const env = [ 'production', 'development', 'mock', 'test', 'gray']

/** 
 * ajax的重定义url
 * @param {String Object} url url数组或字符串
 *
*/
export const getUrl = ({url, envStatus, value, index}) => {
  if(!url)return '';
  let resaultUrl = ''
  if(Array.isArray(url) && envStatus && value){
    if(envStatus === value){
      resaultUrl = index
      ? url[index]
      ? url[index] 
      : url[0]
      : url[0]
    }else {
      resaultUrl = url[0];
    }
  }else{ 
    resaultUrl = url;
  }
  return resaultUrl;
}

export const formatKeyValue = (obj, key, value) => {

}