// pages/QRcode/QRcode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    QR_url: '',
  },
  formSubmit(e) {
    var _this=this;
    var QR_text=e.detail.value.input;
    var http_url ='https://apis.juhe.cn/qrcode/api?key=cf3ab816cfbc7130695ea6b813e9bc38&type=2&w=100&m=2&text='+QR_text;
    console.log(QR_text);
    console.log(http_url);
    _this.setData({
      QR_url: http_url,
    }
    )



  },

  saveCode(e){
    console.log(e);
    console.log(e.currentTarget.dataset.src);
    wx.downloadFile({
      url: e.currentTarget.dataset.src, // 仅为示例，并非真实的资源
      success(res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          console.log(res.tempFilePath);
          console.log(res.statusCode);
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function (res) {
              wx.showToast({
                title: '保存成功',
                icon: 'success',
                duration: 2000
              })
            }
          })
          
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              console.log('授权成功')
            }
          })
        }
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