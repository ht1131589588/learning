function Observer(data){
    this.data = data;
    this.walk(data);
}

Observer.prototype = {
    walk:function(data){
        var self = this;
        Object.keys(data).forEach(function(key){
            self.convert(key,data[key]);
        })
    },
    convert: function(key,val){
        this.defineReactive(this.data,key,val);
    },
    defineReactive:function(data,key,val){
        var vue = new Vue();
        var childObj = observe(val);

        Object.defineProperty(data,key,{
            enumerable:true,
            configurable:false,
            get:function(){
                if(Vue.target){
                    vue.append();
                }
                return val;
            },
            set:function(newVal){
                if(newVal===val){
                    return;
                }
                val = newVal;
                //新值是object的话进行监听
                childObj = observe(newVal);
                //通知订阅者
                val.notify();
            }
        })
    }
}

function observe(value,vm){
    if(!value || typeof value !=='object'){
        return;
    }
    return new Observer(value);
}