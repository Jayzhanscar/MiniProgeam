import callApi from '../utils/callApi.js';
const app = getApp();

/**
 * @ params {}
 * @ return newClassic { Object }
 * @ 获取最新一期
 */
export function getNewClassic() {
  return callApi(
    `${app.path.api}/classic/latest`,
    {
      method: 'GET'
    }
  ).then((res) => {
    return res.response.data;
  });
}

/**
 * @ params { id }
 * @ return nextClassic { Object }
 * @ 获取当前一期的下一期
 */
export function getNextClassic(id) {
  return callApi(
    `${app.path.api}/classic/${id}/next`,
    {
      method: 'GET'
    }
  ).then((res) => {
    return res.response.data;
  });
}


/**
 * @ params { id }
 * @ return preClassic { Object }
 * @ 获取当前一期的上一期
 */
export function getPreClassic(id) {
  return callApi(
    `${app.path.api}/classic/${id}/previous`,
    {
      method: 'GET'
    }
  ).then((res) => {
    return res.response.data;
  });
}

/**
 * @ params { id, type }
 * @ return ClassicDetail { Object }
 * @ 获取某一期详细信息
 */
export function getClassicDetail(id, type) {
  return callApi(
    `${app.path.api}/classic/${type}/${id}`,
    {
      method: 'GET'
    }
  ).then((res) => {
    return res.response.data;
  });
}

/**
 * @ params { id, type }
 * @ return favor { Object }
 * @ 获取点赞信息
 */
export function getFavorInfo(id, type) {
  return callApi(
    `${app.path.api}/classic/${type}/${id}>/favor`,
    {
      method: 'GET'
    }
  ).then((res) => {
    return res.response.data;
  });
}

/**
 * @ params { id, type }
 * @ return favor { Object }
 * @ 获取我喜欢的期刊
 */
export function getFavorList(id, type) {
  return callApi(
    `${app.path.api}/classic/favor`,
    {
      method: 'GET'
    }
  ).then((res) => {
    return res.response.data;
  });
}

export default {
  getNewClassic,
  getNextClassic,
  getPreClassic,
  getClassicDetail,
  getFavorInfo,
  getFavorList
}