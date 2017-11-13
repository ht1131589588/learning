(function(){
    //深拷贝
    function deepClone(obj){
        if(!obj || typeof obj !== 'object'){
            return;
        }
        var newObj = obj.constructor === Array ? [] : {};
        for(var key in obj){
            if(obj[key]){
                if(obj[key] && typeof obj[key] === 'object'){
                    newObj[key] = obj[key].constructor === Array ? []:{};
                    //递归
                    newObj[key] = deepClone(obj[key]);
                }else{
                    newObj[key] = obj[key];
                }
            }
        }
        return newObj;
    }

    //防抖
    function debounce(func, wait, immediate) {
        var timeout, result;
    
        var debounced = function () {
            var context = this;
            var args = arguments;
    
            if (timeout) clearTimeout(timeout);
            if (immediate) {
                // 如果已经执行过，不再执行
                var callNow = !timeout;
                timeout = setTimeout(function(){
                    timeout = null;
                }, wait)
                if (callNow) result = func.apply(context, args)
            }
            else {
                timeout = setTimeout(function(){
                    func.apply(context, args)
                }, wait);
            }
            return result;
        };
    
        debounced.cancel = function() {
            clearTimeout(timeout);
            timeout = null;
        };
    
        return debounced;
    }

    //间隔指定是时间执行一次，开始执行，结束时也执行
    function throttle(func, wait, options){
        var timeout, context, args, result;
        var previous = 0;
        if(!options) options = {};
        var later = function() {
            previous = options.leading === false ? 0 : new Date().getTime();
            timeout = null;
            func.apply(context, args);
            if(!timeout){
                context = args = null;
            }
        }

        var throttled = function() {
            var now = new Date().getTime();
            if(!previous && options === false){
                previous =  now;
            }
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if(remaining <=0 || remaining > wait){
                if(timeout){
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                func.apply(context, args);
                if(!timeout) context = args = null;
            } else if (!timeout && options.trailling !==false) {
                timeout = setTimeout(later, remaining);
            }
        }
        return throttled;
    }
    
    document.onmousemove = test;
    
    var toolFunc = {
        deepClone: deepClone
    }
    
})();