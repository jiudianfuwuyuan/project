var app = angular.module('starter', ['ionic']);
app.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');
    $urlRouterProvider.otherwise('/slide');
    $stateProvider.state('slide', {
        url:"/slide",
        templateUrl:'views/slide.html'
    })
    .state("home",{
        url:"/home",
        templateUrl:'views/home.html',
        controller:"HomeController"
    })
    .state("tabs",{
        url:"/tabs/:id",
        templateUrl:'views/tabs.html',
        controller:"TabsController"
    })
    .state("detail",{
        url:"/detail/:id",
        templateUrl:'views/detail.html',
        controller:"DetailController"
    })
})
app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})
