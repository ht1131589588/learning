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
    function debounce(){
        
    }
    
    var toolFunc = {
        deepClone: deepClone
    }
    
}());