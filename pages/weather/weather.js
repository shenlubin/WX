// pages/weather/weather.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weatherResult:[],
    aqiResult:[],
    today:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    console.log(util.formatTime(new Date()));
     wx.getLocation({
       success: function(res) {
         console.log(res.latitude);
         console.log(res.longitude);
         var weatherKey = 'HE1901081253261686';
         wx.request({
           url: 'https://free-api.heweather.net/s6/weather?key=' + weatherKey +'&location='+res.latitude+','+res.longitude,
           headers: {
             'Content-Type': 'application/json'
           },
           success: function (res) {
             console.log(res.data.HeWeather6[0]);
             _this.setData({
               weatherResult: res.data.HeWeather6[0],
               today: util.formatTime(new Date()),
               //res代表success函数的事件对，data是固定的，imgListData是上面json数据中imgListData
             })

           }
         }),
           wx.request({
           url: 'https://free-api.heweather.net/s6/air/now?key=' + weatherKey + '&location=' + res.latitude + ',' + res.longitude,
             headers: {
               'Content-Type': 'application/json'
             },
             success: function (res) {
               console.log(res.data.HeWeather6[0]);
               _this.setData({
                 aqiResult: res.data.HeWeather6[0],
                 //res代表success函数的事件对，data是固定的，imgListData是上面json数据中imgListData
               })

             }
           })

       },
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