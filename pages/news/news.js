// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   topNews: [],
   shehuiNews: [],
   kejiNews: [],
   caijingNews: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var  _this=this;
  wx.request({
    url: 'https://v.juhe.cn/toutiao/index?type=top&key=216d9971af1329e1e60f7c09de3f1d54',
    success:function(res){
        // console.log(res.data.result.data);
        _this.setData({
          topNews: res.data.result.data,
        })
    }
  })
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index?type=shehui&key=216d9971af1329e1e60f7c09de3f1d54',
      success: function (res) {
        // console.log(res.data.result.data);
        _this.setData({
          shehuiNews: res.data.result.data,
        })
      }
    })
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index?type=keji&key=216d9971af1329e1e60f7c09de3f1d54',
      success: function (res) {
        // console.log(res.data.result.data);
        _this.setData({
          kejiNews: res.data.result.data,
        })
      }
    })
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index?type=caijing&key=216d9971af1329e1e60f7c09de3f1d54',
      success: function (res) {
        // console.log(res.data.result.data);
        _this.setData({
          caijingNews: res.data.result.data,
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