define(['app'],function(){
  var app = angular.module('Indiwale',[]);
  console.log('app.js is called');
  app.controller('MainController',function($scope){
    $scope.message = "Welcome!";
  });
  return app;
});