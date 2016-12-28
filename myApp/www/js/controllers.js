app.controller("ContentCtrl",function($rootScope,$scope,$http){
    $rootScope.sideleft = false;
})
app.controller("HomeController",function($rootScope,$scope,$http,$ionicPopover){
    $http.get("https://route.showapi.com/990-1?showapi_appid=28641&showapi_sign=62309056574e4171ab8580da8372733f")
    .then(function(res){
        $scope.news = res.data.showapi_res_body.typeList;
    })
    $ionicPopover.fromTemplateUrl("popover",{ 
        scope:$scope
    })
    .then(function(popover){
        $scope.popover = popover;
    })
    $scope.openPopover = function($event){
        $scope.popover.show($event);
    }
    $scope.closePopover = function(){
        $scope.popover.hide();
    }
    $scope.$on("$destory",function(){
        $scope.popover.remove();
    })
    $rootScope.sideleft = true;
})
app.controller("TabsController",function($scope,$http,$stateParams){
    var id = parseInt($stateParams.id);
    $scope.doRefresh = function() {
        $http.get("https://route.showapi.com/990-2?id="+id+"&page=1&showapi_appid=28641&showapi_sign=62309056574e4171ab8580da8372733f")
        .then(function(res){
            $scope.lines = res.data.showapi_res_body.pagebean.contentlist;       
        })
        .finally(function(err){
            $scope.$broadcast('scroll.refreshComplete');
        })
    };
    $scope.lines = [];
    $scope.loadMore = function(){
        load()
    }
    var i = 0;
    function load(){
        i++;
        $http.get("https://route.showapi.com/990-2?id="+id+"&page="+i+"&showapi_appid=28641&showapi_sign=62309056574e4171ab8580da8372733f")
        .then(function(res){
            $scope.lines = $scope.lines.concat(res.data.showapi_res_body.pagebean.contentlist);
            $scope.$broadcast("scroll.infiniteScrollComplete");
        })
        .catch(function(err){
            $ionicLoading.show({
                templateL:"数据请求失败！",
                duration:3000
            })
        })
    }
})
app.controller("DetailController",function($scope,$http,$stateParams){
    var id = $stateParams.id;
    $http.get("https://route.showapi.com/990-3?id="+id+"&showapi_appid=28641&showapi_sign=62309056574e4171ab8580da8372733f")
    .then(function(res){
        $scope.details = res.data.showapi_res_body.item;
    })
})
.filter("newArray",function(){
    return function (str){
        if(typeof(str) == 'string'){
            var strnew = str.replace(/<br\/>|<p>|&nbsp|&#[0-9]{4}|_|;|<strong>|<\/strong>/g,'').replace(/<\/p>/g,' ').replace(/[\s]{3,}/g,'\n    ').replace(/\n/,'').replace(/&ldquo|&rdquo|undefined|&hellip/g,'');
            return strnew;
        }
    }
})
