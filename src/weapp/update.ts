/**
 * 提示更新应用
 * @param {Boolean} showUpdate 是否提示更新
 */
type UpdateParams = {
  showUpdate: boolean,
  modalTitle?: string,
  modalContent?: string,
  log?: boolean
}

export const update = (param: UpdateParams) => {
  const {
    showUpdate = false,
    modalTitle = '有新版本',
    modalContent = '新版本已经准备好，是否重启应用？',
    log = true
  } = param
  return new Promise((resolve, reject) => {
    const updateManager = wx.getUpdateManager()
  
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      log && console.log('检查是否有新版本:', res.hasUpdate)
    })
    if (!showUpdate) {
      log && console.log(`未配置更新提示, 请传入参数 showUpdate: true`)
      resolve({ status: 0, message: '有更新但未执行，请传入参数 showUpdate: true'})
      return
    }
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: modalTitle,
        content: modalContent,
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
            resolve({ status: 1 , message: '已触发更新' })
          }
        }
      })
    })
    updateManager.onUpdateFailed(function () {
      console.error('新版本下载失败')
      reject({ status: 0, message: '新版本下载失败' })
    })
  })
}