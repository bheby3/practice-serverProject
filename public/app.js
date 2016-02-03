var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/pages/home/home.html',
            controller: 'homeCtrl'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: '/pages/admin/admin.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: '/pages/login/login.html'
        })
        .state('learning', {
            url: '/learning',
            templateUrl: '/pages/learning/learning.html'
        })
        .state('selectProduct', {
            url: '/selectProduct',
            templateUrl: '/pages/selectProduct/selectProduct.html'
        })
        .state('checkout', {
            url: '/checkout',
            templateUrl: '/pages/checkout/checkout.html'
        });

    $urlRouterProvider
        .otherwise('/home');
});


