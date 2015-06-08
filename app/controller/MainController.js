define(['app'],function(app){
  app.controller('MainController',function($scope,$window){
    $scope.message = "Welcome!";

  angular.element($window).bind('scroll',function(){
    var width = '';
    var margin ='24px';
    if(window.scrollY > 30){
        width = '100px';
        margin = '0px';
    }
    $('.rr-header img.logo').css({'width':width});
    $('.rr-header .rr-nav-list').css({'margin-top':margin});
  });

  });
});