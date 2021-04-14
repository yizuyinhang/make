// pages/refund/refund.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:[9999,1,2],
    date: '2021-04-08',
    array: ['秦泽鑫', '江程']
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
verify:function(){
  wx.showModal({
    title: '确定退款吗',
    success(res) {
      if (res.confirm) {
　　　console.log('用户点确定了')
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
 }    
})
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})