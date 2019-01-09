// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  openid: '',
  tokenid: '',
  },
  
  sendMsg(e){
    var _this=this;
    let url = 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' +_this.data.tokenid;
    wx.request({
      url: url,
      data: {
        "touser": _this.data.openid,
        "template_id": "gTw-5orbdGoaxA1VSzteYEuIGqWEgYSPgiO8_FWf25w",
        "page": "/pages/weather/weather",
        "form_id": e.detail.formId,
        "data": {
             "keyword1":{"value": "keyword1"},
             "keyword2": {"value": "keyword2"},
        }
      },
      method: "POST",
      success: function(res){
        console.log(res);
      }
      }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.login({
      success(res) {
        console.log(res.code);

        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxc28ca7bfa83703e4&secret=f9d02c95f56a8dfb5b29a5cb0ef1c683&js_code=' + res.code + '&grant_type=authorization_code',
          success: function (res) {
            console.log(res);
            _this.setData({
              openid: res.data.openid,
              //res代表success函数的事件对，data是固定的，imgListData是上面json数据中imgListData
            })
            console.log(_this.data.openid);
          }
        })

      }
    }),
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxc28ca7bfa83703e4&secret=f9d02c95f56a8dfb5b29a5cb0ef1c683',
       
       success: function (res){
         console.log(res.data);
         _this.setData({
           tokenid: res.data.access_token,
           //res代表success函数的事件对，data是固定的，imgListData是上面json数据中imgListData
         })
         console.log(_this.data.tokenid);
       }
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