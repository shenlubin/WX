//index.js
//获取应用实例
const app = getApp()
var nameList=[];
var json_data = '{"leader":["许晶","吴斌","王科科","眭雅娟","李小华","刘洁琼","吴明明","戴雪静","张瑶","沈俊花","廖桂秀"],"productLeader":["丁莉玲","瞿佳文","代文平","黄书满","张玮","周婷婷"]}';
var productNameList=[];
Page({
  clickMe() {
    var dataJson=JSON.parse(json_data);
    nameList=dataJson.leader;
    productNameList=dataJson.productLeader;
    //console.log(dataJson);
    //console.log(nameList);
    //console.log(nameList.length);
    //console.log(productNameList);
    //console.log(productNameList.length);
    //var max=11;
    var max = nameList.length;
    var min=0;
    //var productMax=6;
    var productMax = productNameList.length;
    //parseInt(Math.random() * (max - min + 1) , 10);
    //var random1=parseInt(Math.random()*10);
    //var random2 = parseInt(Math.random() * 10);
    var random1 = parseInt(Math.random() * (max - min ) , 10);
    var random2 = parseInt(Math.random() * (max - min ) , 10);
    while (random1 == random2) {
      //random1 = parseInt(Math.random() * 10);
      //random2 = parseInt(Math.random() * 10);
      random2=parseInt(Math.random() * (max - min ) , 10);
      
    }

    var productRandom = parseInt(Math.random() * (productMax - min), 10);
    //var nameList = ['许晶','吴斌','王科科','眭雅娟','李小华','刘洁琼','吴明明','戴雪静','张瑶','沈俊花','廖桂秀'];
    //var productNameList=['丁莉玲','瞿佳文','代文平','黄书满','张玮','周婷婷'];
    console.log(nameList[random1]);
    console.log(nameList[random2]);
    console.log(productNameList[productRandom]);
    console.log('===============');
    var dutyNameList='主管：'+nameList[random1]+'  '+nameList[random2];
    var dutyProductNameList = '产品经理：' + productNameList[productRandom];
    
    console.log(Math.floor(Math.random() * (max - min)));
    console.log(random1);
    console.log(random2);
    console.log(productRandom);
    this.setData({ msg: dutyNameList });
    this.setData({ msg1: dutyProductNameList});
  },
  data: {
    title: '幸 运 者',
    motto: 'Hello Everyone',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  /*  var _this = this
    wx.request({
      url: 'http://buffalonas.com/ShenLubinCloud/axs/u:b3ffc3cf-53ac-4615-a24d-f07fc62487b4/Public/weChat_pic/nameList.json',//json数据地址
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //console.log(res.data.imgListData)
        //console.log(res.data.imgListData[0].tag)
        //console.log(res.data);
        //console.log(res.data.leader[1]);
        //console.log(res.data.leader);
        //console.log(JSON.parse(res.data));
        //将获取到的json数据，存在名字叫list_data的这个数组中
        _this.setData({
          //list_data: res.data.imgListData,
          leaderArray: res.data.leader,
          //res代表success函数的事件对，data是固定的，imgListData是上面json数据中imgListData
        })
        nameList=res.data.leader;
        productNameList=res.data.productLeader;
        //console.log(leaderArray);
      }
    })
  */
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
