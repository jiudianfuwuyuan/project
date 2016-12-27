
var app = angular.module('App', ['ui.router'])
app.run(['$rootScope', function ($rootScope) {
    console.log('模块启动成功')
}])
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })
        .state('image', {
            url: '/image',
            templateUrl: 'views/image.html',
            controller: 'ImageController'
        })
        .state('book', {
            url: '/book',
            templateUrl: 'views/book.html'
        })
        .state('miusc', {
            url: '/miusc',
            templateUrl: 'views/miusc.html'
        })
        .state('me', {
            url: '/me',
            templateUrl: 'views/me.html'
        })
}])
app.controller('ImageController', ['$scope', function ($scope) {
    var counts = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15"]
    $scope.counts = counts;
    $scope.select = function(count){
        $scope.popup = true;
        $scope.imgCount = count;
        
    }
}])