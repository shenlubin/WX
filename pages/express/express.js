Page({
  data: {
    index: 0,
    expressCompany: ['韵达','中通','顺丰','天天快递','申通','圆通'],
    expressPinYin:['yunda','zhongtong','shunfeng','tiantiankuaidi','shentong','yuantong'],
    searchResult: []
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  
  formSubmit(e) {
    var that=this;
   // console.log('form发生了submit事件，携带数据为：', e.detail.value.input);
    var expressNo=e.detail.value.input;
   
    var _this = this

   // console.log(expressNo);
   // console.log(_this.data.expressPinYin[_this.data.index]);

    wx.request({
      url: 'https://www.kuaidi100.com/query?type=' + _this.data.expressPinYin[_this.data.index] +'&postid='+expressNo,//json数据地址
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //console.log(res.data.imgListData)
        //console.log(res.data.imgListData[0].tag)
        //console.log(res.data.data);
        //console.log(res.data.leader[1]);
        //console.log(res.data.leader);
        //console.log(JSON.parse(res.data));
        //将获取到的json数据，存在名字叫list_data的这个数组中
        _this.setData({
            searchResult: res.data.data,
          //res代表success函数的事件对，data是固定的，imgListData是上面json数据中imgListData
        })

      }
    })
  

  },



  onLoad: function () {
  }
})
