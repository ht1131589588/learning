//index.js
const api = require('../../utils/api/api.js')

//获取应用实例
const app = getApp()

Page({
  data: {
    listData: []
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function () {
    this.getData();
  },
  getData(){
    var self = this;
    api.getTopics(false,function(res){
      self.data.listData = res.data.data;
    })
  }
})
