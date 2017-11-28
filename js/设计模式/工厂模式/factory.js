/**
 * 工厂模式：
 *  优点：
 *      1. 能解决多个相似的问题，
 *      2. 工厂类集中了所有对象的创建，便于对象创建的统一管理
 *      3. 对象的使用者仅仅是使用产品，实现了单一职责
 *      4. 便于扩展，如果新增了一种业务，只需要增加相关的业务对象类和工厂类中的生产业务对象的方法，不需要修改其他的地方
 *  缺点：
 */

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

//定义自行车构造函数
var BicycleShop = function(name) {
    this.name = name;
    this.method = function() {
        return this.name;
    }
};

BicycleShop.prototype = {
    constructor: BicycleShop,
    seilBicycle: function(model) {
        var bicycle = this.createBicycle(model);
        bicycle.A();
        bicycle.B();
        return bicycle;
    },
    createBicycle: function(model) {
        throw new Error("父类是抽象类，不能直接调用，需要子类重写该方法");
    }
}

//实现原型继承
function extend(Sub,Sup) {
    //Sub表示子类， Sup表示超类
    var F = function() {};
    //设置空函数的原型为超类的原型
    F.prototype = Sup.prototype;

    //实例化空函数，并把超类原型引用传递给子类
    Sub.prototype = new F();

    //重置子类原型的构造器为子类自身
    Sub.prototype.constructor = Sub;

    //在子类中保存超类的原型，避免子类与超类耦合
    Sub.sup = Sub.prototype;
    if(Sup.prototype.constructor === Object.prototype.constructor) {
        //检查超类原型的构造器是否为原型本身
        Sup.prototype.constructor = Sup;
    }
}

var BicycleChild = function(name) {
    this.name = name;
    //继承构造函数父类中的属性和方法
    BicycleShop.call(this,name);
}

//子类继承父类原型方法
extend(BicycleChild,BicycleShop);

//子类重写父类的方法
BicycleChild.prototype.createBicycle = function() {
    var A = function(){
        console.log("执行A业务操作");
    }
    var B = function() {
        console.log("执行B业务操作");
    }
    return {
        A: A,
        B: B
    }
}

var childClass = new BicycleChild("小黄车");
console.log(childClass)
childClass.seilBicycle()