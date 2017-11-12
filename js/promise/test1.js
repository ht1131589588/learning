function test(resolve,reject){
    var timeOut = Math.random() * 2;
    console.log(11111111111);
    setTimeout(function(){
        if(timeOut<1){
            console.log('success!');
            resolve('200 Ok')
        } else {
            console.log('failed!');
            reject('timeout in ' + timeOut + ' seconds.')
        }
    },timeOut*1000)
    console.log(22222);
}

var p1 = new Promise(test);
p1.then(function(res){
    console.log('success:' + res);
    return '123';
}).then(function(re){
    console.log('success2:' + re);
}).catch(function(err){
    console.log('failed:' + err);
})
console.log('········');

var p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'P1');
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 600, 'P2');
});
// 同时执行p1和p2，并在它们都完成后执行then:
Promise.all([p1, p2]).then(function (results) {
    console.log(results); // 获得一个Array: ['P1', 'P2']
});
Promise.race([p1, p2]).then(function (results) {
    console.log(results); // 获得一个Array: ['P1', 'P2']
});