// 获取时间
const formatTime = date => {
  const year = date.substring(0, 4)
  const month = date.substring(5, 7)
  const day = date.substring(8, 10)
  return {
    year,
    month: formatMonth(month),
    day
  }
}

// 格式化月份
const formatMonth = month => {
  switch (month) {
    case '01':
      month = '一'
      break;
    case '02':
      month = '二'
      break;
    case '03':
      month = '三'
      break;
    case '04':
      month = '四'
      break;
    case '05':
      month = '五'
      break;
    case '06':
      month = '六'
      break;
    case '07':
      month = '七'
      break;
    case '08':
      month = '八'
      break;
    case '09':
      month = '九'
      break;
    case '10':
      month = '十'
      break;
    case '11':
      month = '十一'
      break;
    default:
      month = '十二'
  }
  return month
}

// 获取设备信息
const getSysInfo = () => {
  let sysInfo
  wx.getSystemInfo({
    success(res) {
      sysInfo = res
    }
  })
  return sysInfo
}


module.exports = {
  formatTime,
  formatMonth,
  getSysInfo
}