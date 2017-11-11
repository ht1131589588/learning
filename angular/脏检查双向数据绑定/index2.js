window.onload = function(){
  function getNewValue(scope){
    return scope[this.name];
  }

  function $scope(){
    this.$$watchList = [];
  }

  $scope.prototype.$watch = function(name,getNewValue,listener){
    var watch = {
      name: name,
      getNewValue: getNewValue,
      listener: listener
    };
    this.$$watchList.push(watch);
  }

  $scope.prototype.$digest = function(){
    var list = this.$$watchList;
    var dirty = true;
    var checkTime = 0;
    while(dirty){
      dirty = false;
      for(var i = 0;i<list.length;i++){
        var watch = list[i];
        console.log(watch);
        var newValue = watch.getNewValue(this);
        var oldValue = watch.last;
  
        if(newValue !== oldValue){
          list[i].listener(newValue,oldValue);
          watch.last = newValue;
          dirty = true;
        }
        //list[i].listener();
      }
      checkTime++;
      if(checkTime > 10 && checkTime){ //TTL
        throw new Error("次数过多");
      }
    }
  }

  var scope = new $scope();
  scope.first=11;
  scope.second=22;
  scope.$watch('first', function(){
    // console.log("hey i hav got newValue");
    return scope[this.name];
  },function(newValue,oldValue){
    scope.first=33;
    console.log('newValue:'+newValue + '·····' + 'oldValue:'+oldValue);
  })

  scope.$watch('second', function(){
    return scope[this.name];
  },function(newValue,oldValue){
    console.log('newValue:'+newValue + '·····' + 'oldValue:'+oldValue);
  })
 
  scope.$digest();
  // scope.first="333";
  // scope.second="444";
  // scope.$digest();
}