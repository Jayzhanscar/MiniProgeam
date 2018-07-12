import callApi from '../utils/callApi.js';
const app = getApp();

/**
 * @ params { rt_id, type }
 * @ return like { Object }
 * @ 进行点赞
 */
export function setLike(art_id, type) {
  return callApi(
    `${app.path.api}/like`,
    {
      data: {
        art_id,
        type
      },
      method: 'POST'      
    }
  ).then((res) => {
    return res.response.data;
  });
}


/**
 * @ params { art_id, type }
 * @ return /like/cancel { Object }
 * @ 取消点赞
 */
export function setLikeCancel(art_id, type) {
  return callApi(
    `${app.path.api}/like/cancel`,
    {
      method: 'POST',
      data: {
        art_id,
        type
      }
    }
  ).then((res) => {
    return res.response.data;
  });
}

export default {
  setLike,
  setLikeCancel
}