import callApi from '../utils/callApi.js';
const app = getApp();

/**
 * @ params {}
 * @ return hot_list { Array }
 * @ 获取热门书籍(概要)
 */
export function getHotList() {
  return callApi(
    `${app.path.api}/book/hot_list`,
    {
      method: 'GET'
    }
  ).then((res) => {
    return res.response.data;
  });
}

/**
 * @ params { id }
 * @ return bookComment{ Object }
 * @ 获取书籍短评
 */
export function getBookComment(id) {
  return callApi(
    `${app.path.api}/book/${id}/comment`,
    {
      method: 'GET'
    }
  ).then((res) => {
    return res.response.data;
  });
}


/**
 * @ params { id }
 * @ return nextProject { Object }
 * @ 获取喜欢书籍数量
 */
export function getFavorBookCount() {
  return callApi(
    `${app.path.api}/book/favor/count`,
    {
      method: 'GET'
    }
  ).then((res) => {
    return res.response.data;
  });
}

/**
 * @ params { id }
 * @ return bookFavor { Object }
 * @ 获取书籍点赞情况
 */
export function getBookFavor(id) {
  return callApi(
    `${app.path.api}/book/${id}/favor`,
    {
      method: 'GET'
    }
  ).then((res) => {
    return res.response.data;
  });
}

/**
 * @ params { book_id, content }
 * @ return favor { Object }
 * @ 新增短评
 */
export function setShortComment(book_id, content) {
  return callApi(
    `${app.path.api}/book/add/short_comment`,
    {
      method: 'POST',
      data: {
        book_id,
        content
      }
    }
  ).then((res) => {
    return res.response.data;
  });
}

/**
 * @ params { id, type }
 * @ return hot_keyword { Object }
 * @ 获取热搜关键字
 */
export function getHotKeyword() {
  return callApi(
    `${app.path.api}/book/hot_keyword`,
    {
      method: 'GET'
    }
  ).then((res) => {
    return res.response.data;
  });
}

/**
 * @ params { start, count, summary, q }
 * @ return  bookSearch { Object }
 * @ 书籍搜索
 */
export function getBookSearch(start, count, summary, q) {
  return callApi(
    `${app.path.api}/book/search`,
    {
      method: 'POST',
      data: {
        start, count, summary, q
      }
    }
  ).then((res) => {
    return res.response.data;
  });
}

/**
 * @ params { start, count, summary, q }
 * @ return  book/detail { Object }
 * @ 获取书籍详细信息
 */
export function getBookDetail(id) {
  return callApi(
    `${app.path.api}/book/${id}/detail`,
    {
      method: 'GET',
    }
  ).then((res) => {
    return res.response.data;
  });
}


export default {
  getHotList,
  getBookComment,
  getFavorBookCount,
  getBookFavor,
  setShortComment,
  getHotKeyword,
  getBookSearch,
  getBookDetail  
}