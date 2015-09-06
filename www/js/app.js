
'use strict';

var DataStructuresProApp = angular.module('DataStructuresProApp', ['ionic']);

DataStructuresProApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('menu',{
      url: '/DataStructuresProApp', 
      abstract: true, 
      templateUrl: 'templates/menu.html'
    })

    .state('menu.home', {
      url:'/home', 
      views:{
        'menuContent':{
          templateUrl: 'templates/about.html',
          controller: 'aboutCtrl'
        }
      }
    })

    .state('menu.help', {
      url:'/help', 
      views:{
        'menuContent':{
          templateUrl: 'templates/help.html',
          controller: 'helpCtrl'
        }
      }
    });

    //tabs configuration


    $urlRouterProvider.otherwise('/DataStructuresProApp/home');

}]);

DataStructuresProApp.controller('aboutCtrl', function($scope){
  console.log("In controller: aboutCtrl");
});

DataStructuresProApp.controller('helpCtrl', function($scope){
  console.log("In controller: helpCtrl");
});