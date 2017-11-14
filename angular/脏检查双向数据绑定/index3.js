window.onload = function(){
  'use strict';
  var scope = {
    increase: function() {
      this.data++;
    },
    decrease: function() {
      this.data--;
    },
    data: 0,
    faciend: 3
  }

  function Scope(){
    this.$$watchList = [];
  }

  Scope.prototype.$watch = function(name,getNewValue,listener){
    var watch = {
      name: name,
      getNewValue: getNewValue,
      listener: listener
    };
    this.$$watchList.push(watch);
  }

  Scope.prototype.$digest = function(){
    var dirty = true;
    var checkTime = 0;
    while(dirty){
      dirty = this.$$digestOnce();
      checkTime++;
      if(checkTime > 10 && checkTime){ //TTL
        throw new Error("次数过多");
      }
    }
  }

  Scope.prototype.$$digestOnce = function(){
    var dirty;
    var list = this.$$watchList;
    for(var i = 0;i<list.length;i++){
      var watch = list[i];
      console.log(watch);
      var newValue = watch.getNewValue(this.name);
      var oldValue = watch.last;

      if(newValue !== oldValue){
        list[i].listener(newValue,oldValue);
        dirty = true;
      } else {
        dirty = false;
      }
      watch.last = newValue;
    }
    return dirty;
  }

  var $scope = new Scope();
  $scope.sum = 0;
  $scope.$watch('sum', function(){
    $scope.sum = scope.data * scope.faciend;
    return $scope[this.name]
  },function(newValue, oldValue){
    scope.sum = newValue;
    console.log('sum:      newValue:'+newValue + '·····' + 'oldValue:'+oldValue);
  })

  function bind() {
    var list = document.querySelectorAll('[ng-click]');
    for(var i = 0;i<list.length;i++){
      list[i].onclick = (function(index){
          return function() {
            var func = this.getAttribute('ng-click');
            scope[func](scope);
            $scope.$digest();
            apply();
          }
      })(i);
    }
  }

  //apply
  function apply() {
    var list = document.querySelectorAll('[ng-bind]');
    for(var i = 0;i<list.length;i++){
      var bindData = list[i].getAttribute('ng-bind');
      //console.log('应用属性：' + bindData + '为' + scope[bindData]);
      list[i].innerHTML = scope[bindData];
    }
  }

  bind();
  $scope.$digest();
  apply();
}