// components/console/Console.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 上一个期刊
    onPreTap() {
      var myEventDetail = { type : 0 } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('preNext', myEventDetail, myEventOption)
    },

    // 下一个期刊
    onNextTap() {
      var myEventDetail = { type : 1 } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('preNext', myEventDetail, myEventOption)
    }
  }
})
