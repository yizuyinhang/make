// pages/advance/advance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:{
      'doctor':"赵马",
      'doctorclass':"主治医生",
      'hospital':"北京市第一人民医院-东院区",
      'site':"北京市大兴区**路990号",
      'office':"消化内科-门诊3楼东区501",
      'consulting':"2020年12月30日 周一 上午",
      'waitingtime':"9:30",
      'cost':"60",
      'appointmenttime':"2020年12月12号",
      'ofpatient':"牛韦",
      'idnumber':"610*********0989",
    }
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

  },

  reserve(){
      wx.showModal({
        title: '提示',
        content: '确定取消此次预约吗',
        success: function (res) {
         if (res.confirm) {
          wx.showToast({
            title: '成功',
            icon: 'succes',
            duration: 1000,
            mask:true,
            success(){
              wx.navigateTo({
                url:"/pages/cancel/cancel"
              })
            }
        })
         } else if (res.cancel) {
          console.log('用户点击取消')
         }
        }
       })
  }
})