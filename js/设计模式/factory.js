/**
 * 简单的工厂模式
 * @param {*} name 
 * @param {*} age 
 * @param {*} sex 
 */

function CreatePerson(name, age, sex) {
    var obj = new Object();
    obj.name = name || '';
    obj.age = age || 0;
    obj.sex = sex || 'M';
    obj.sayName = function() {
        return this.name;
    };
    return obj;
}


var BicycleShop = function() {};

BicycleShop.prototype = {
    constructor: BicycleShop,

    seilBicycle: function(mode) {
        var bicycle = this.createBicycle(mode);
    },
    createBicycle: function(model) {
        throw new Error("父类是抽象类，不能直接调用，需要子类重写该方法");
    }
}
