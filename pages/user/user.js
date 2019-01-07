//user.js
var QQMapWX = require('../../qqmap-wx-jssdk.js');
var qqmapsdk;
Page({
  data: {
    searchResult: []
  },
  switch(e){

  },

  click_Me(){
  },
  
  formSubmit(e) {
    var title;
    var address;
    var telphone;
    var lat;
    var lng;
    var that=this;
    console.log('form发生了submit事件，携带数据为：', e.detail.value.input);
    var destination=e.detail.value.input;
    qqmapsdk.search({
      keyword: destination,
      success: function (res) {
        that.setData({ searchResult: res.data });
        console.log(that.data.searchResult);
        //console.log(globalSearchResult);

        // console.log(res);
        // console.log(res.data[0]);
        // if (that.data.searchResult.length!=0){
        //  title=res.data[0].title;
        //  //console.log(title);
        //  address=res.data[0].address;
        //  telphone=res.data[0].tel;
        //  lat=res.data[0].location.lat;
        //  lng=res.data[0].location.lng;
        // }
      },
      fail: function (res) {
         console.log(res.message);
        //  console.log('请输入目的地');
      },
      // complete: function (res) {
        // console.log(res);
      // }
    })
  

  },



  onLoad: function () {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'IUHBZ-ZQ4CJ-YVAFC-KDDFB-HUOLT-GRFDK'
    });
    

  }
})
