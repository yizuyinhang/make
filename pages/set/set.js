// pages/set/set.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [1, 2, 3, 4, 5,6,7],
    day: ["今日","周六","周日","周一","周二","周三","周四"],
    list:[
      {'title':"一般检查",'much':"100"},
      {'title':"内科检查",'much':"100"},
      {'title':"外科检查",'much':"100"},
      {'title':"一般检查",'much':"100"},
      {'title':"内科检查",'much':"100"},
      {'title':"外科检查",'much':"100"},
      {'title':"一般检查",'much':"100"},

    ],
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  reserve:function(){
    //跳转到确认预约信息页面
    wx.navigateTo({
      url: '/pages/reserve/reserve',
    })
    
  
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