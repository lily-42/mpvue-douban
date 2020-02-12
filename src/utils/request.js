export default function request (options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url, // 开发者服务器接口地址",
      data: options.data || {}, // 请求的参数",
      method: options.method || 'GET',
      header: options.header,
      dataType: options.dataType || 'json', // 如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: res => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}