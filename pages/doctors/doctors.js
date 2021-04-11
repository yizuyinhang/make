// pages/doctors/doctors.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    which:['今日','周六','周日','周一','周二','周三','周四'],
    what:[
      {'what':'3','class':'fist'},
      {'what':'4'},
      {'what':'5'},
      {'what':'6'},
      {'what':'7'},
      {'what':'8'},
      {'what':'9'},
    ],
    doctors:[
      {'id':1,'name':'吴瑶宣','desc':"主刀医生","text":"消化系统的疾病的治疗，擅长肝胆疾病的治疗",'price':'60','time':30,'pic':"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3434365774,3342884301&fm=26&gp=0.jpg"},
      {'id':2,'name':'王子怡','desc':"中刀医生","text":"消化系统的疾病的治疗，擅长肝胆疾病的治疗",'price':'50','time':20,'pic':"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3434365774,3342884301&fm=26&gp=0.jpg"},
      {'id':3,'name':'魏梦娇','desc':"小刀医生","text":"消化系统的疾病的治疗，擅长肝胆疾病的治疗",'price':'40','time':10,'pic':"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3350280679,2752505011&fm=26&gp=0.jpg"},
    ],
    forenoon:[
      {"date":"9:00 剩余 10"},
      {"date":"9:30 剩余 0","class":"hui"},
      {"date":"10:00 剩余 10"},
      {"date":"10:30 剩余 10"},
      {"date":"11:00 剩余 10"},
      {"date":"11:30 剩余 0","class":"hui"},
    ],
    afternoon:[
      {"date":"13:30 剩余 10"},
      {"date":"14:00 剩余 10","class":"hui"},
      {"date":"14:30 剩余 10"},
      {"date":"15:00 剩余 10"},
      {"date":"15:30 剩余 10"},
      {"date":"16:00 剩余 0","class":"hui"},
      {"date":"16:30 剩余 10"},
      {"date":"17:00 剩余 10"},
      {"date":"17:30 剩余 10","class":"hui"}
    ]
  },
  onLoad: function (options) {},
  //点击我显示底部弹出框
  clickme: function () {
    this.showModal();
  },

  //显示对话框
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  }
})
