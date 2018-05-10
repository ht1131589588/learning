const apiUrl = "https://cnodejs.org/api/v1";
const getTopics = function(data,callback){
    wx.request({
        url: apiUrl+'/topics', //仅为示例，并非真实的接口地址
        data:data || {},
        method:'GET',
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function(res) {
            callback(res)
        //   console.log(res.data)
        }
    });
}


module.exports = {
    getTopics: getTopics
}