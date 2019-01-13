// pages/exchange/exchange.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    exchange_data: [],
    exchange_date:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
     wx.request({
       url: 'https://op.juhe.cn/onebox/exchange/query?key=f97437897d37b8a6511ea6a605160b52',
       success:function (res){
           console.log(res.data.result);
           _this.setData({
             exchange_data: res.data.result.list,
             exchange_date: res.data.result.update
           })
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