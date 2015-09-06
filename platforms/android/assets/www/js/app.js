
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
    })

    .state('menu.stack', {
      url:'/stack', 
      views:{
        'menuContent':{
          templateUrl: 'templates/stackAbout.html'
       }
      }
    })

    .state('menu.queue', {
      url:'/queue', 
      views:{
        'menuContent':{
          templateUrl: 'templates/queueAbout.html'
       }
      }
    })

    .state('menu.tree', {
      url:'/tree', 
      views:{
        'menuContent':{
          templateUrl: 'templates/treeAbout.html'
       }
      }
    })

    .state('menu.graph', {
      url:'/graph', 
      views:{
        'menuContent':{
          templateUrl: 'templates/graphAbout.html'
       }
      }
    })

    ;

    //tabs configuration


    $urlRouterProvider.otherwise('/DataStructuresProApp/home');

}]);

DataStructuresProApp.controller('aboutCtrl', function($scope){
  console.log("In controller: aboutCtrl");
});

DataStructuresProApp.controller('helpCtrl', function($scope){
  console.log("In controller: helpCtrl");
});