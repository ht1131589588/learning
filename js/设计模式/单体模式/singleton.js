/**
 * 单体模式
 *  优点：
 *      1.可以用来划分命名空间
 *      2.使用单体模式可以使代码组织的更为一致，使代码容易阅读和维护。
 *      3.可以被实例化，且实例化一次。
 */


// 对象字面量
var obj = {
    attr1: 1,
    attr2: 2,
    method1: function() {
        return this.attr1;
    },
    method2: function() {
        return this.attr2;
    }
}

// 单体模式
var Singleton = function(name) {
    this.name = name;
    this.instance = null;
}
Singleton.prototype.getName = function() {
    return this.name;
}

// function getInstance(){
//     if(!this.instance) {
//         this.instance = new Singleton(name);
//     }
//     return this.instance;
// }

var getInstance =  (function(name) {
    var instance = null;
    return function(name) {
        if(!instance) {
            instance = new Singleton(name);
        }
        return instance;
    }
})();


var test = getInstance("haha");
console.log(test.getName());


/**
 * 练习
 */

var createWindow = (function(){
    var div;
    return function(text){
        if(!div){
            div = document.createElement("div");
            div.innerHTML = text || "这里是弹框内容";
            // div.style.display = 'none';
            document.body.appendChild(div);
            return div;
        }
        div.innerHTML = text || "这里是弹框内容";
        // div.style.display = 'none';
        document.body.appendChild(div);
        return div;
    }
})();

