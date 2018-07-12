/**
 * Created By Ypchen at 07/07/2018.
 */

const baseHeader = { "Content-Type": "application/json", "appkey": "Y74Q8LBuZgTaKkaW", "method" : 'POST'};

// 封装wx.request请求
export default function callApi(url, options) {
  options = _preHeader(options);
  url = _preUrl(url, options)

  return new Promise((resolve, reject) => {
    wx.request(Object.assign(options, {
      url: url,
      success: (resp) => {
        // 判断 返回的状态码 
        if (resp.statusCode >= 400 || resp.statusCode < 200) {
          reject(_getError(resp));
        } else {
          resolve({
            response: resp,
          });
        }
      },
      fail: (err) => {
        console.log('ApiCall with error: ' + err);
        reject(_getError(err));
      },
    }))
  });
}

// 设置请求信息
const  _preHeader = (options) => {

  let header = options.header || {};
  let hasContentType = header['Content-Type'] ? true : false;
  if (options.method == 'POST' || options.method == "post" ) {
    options.header = Object.assign(header, baseHeader);
  } 
  return options
}

// 设置url
const _preUrl = (url, options) => {
  if (options.method == 'GET' || options.method == " ") {
    url = url + "?appkey=Y74Q8LBuZgTaKkaW"
  }
  return url
}

// 设置错误信息提醒
const  _getError = (response) =>  {
  const data = response;
  let errMsg
  switch (data.statusCode) {
    case 400:
      errMsg = '请求包含不支持的参数'
      break;
    case 401:
      errMsg = '未授权'
      break;
    case 403:
      errMsg = '被禁止访问'
      break;
    case 404:
      errMsg = '请求的资源不存在'
      break;
    case 413:
      errMsg = '上传的File体积太大'
      break;
    default:
      errMsg = '内部错误'
  }
  return {
      status : errMsg,
      code : data.data.error_code,
      message : data.data.msg
  }
}
