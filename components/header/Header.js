// components/header/Header.js
import { formatTime } from '../../utils/util.js'
import { setLike, setLikeCancel } from '../../api/like.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object, 
      value: {},
      observer: function(newVal, oldVal, changedPath) {
        if (newVal.pubdate) { 
          const likeStatus = newVal.like_status? true : false
          const fav_nums = newVal.fav_nums
          this.setData({ likeStatus, fav_nums })
          this._setTime(newVal.pubdate)
        }
      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    data: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 设置时间
    _setTime(time) {
      let classictime = formatTime(time)
      this.setData({
        time: classictime
      })
    },

    // 分享
    onShareTap() {
      console.log(this.data.data)
    },

    // 喜欢和取消喜欢
    onLikeTap() {
      var that =this
      const art_id = this.data.data.id
      const type = this.data.data.type
      const likeStatus = this.data.likeStatus
      const fav_nums = this.data.fav_nums
      if (likeStatus) {
        setLikeCancel(art_id, type).then( res => {
          if (res.error_code == 0) {
            this.setData({
              likeStatus: !likeStatus,
              fav_nums: fav_nums-1
            })
          }
        })     
      } else {
        setLike(art_id, type).then(res => {
          if (res.error_code == 0) {
            this.setData({
              likeStatus: !likeStatus,
              fav_nums: fav_nums + 1              
            })
          }
        })     
      }
      
    }
  },

  // 创建
  created() {},

  // 组件进入页面
  attached() {
  }
})