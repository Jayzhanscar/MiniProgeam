//app.js
import {
  getSysInfo,
  formatTime
} from 'utils/util.js'
App({
  // 小程序启动 & 初始化
  onLaunch: function() {
    // 设置时间
    // wx.setStorageSync('time', formatTime(new Date()))
  },

  path: {
    api: "https://bl.7yue.pro/v1", // api接口地址
    oss: "", // 对象存储
    static: "/static/", // 静态资源
    icon: "/img/icon/" // 本地图标
  },
  globalData: {
    userInfo: null,
    appKey: 'Y74Q8LBuZgTaKkaW' // appkey
  },
  SystemInfo: getSysInfo()
})