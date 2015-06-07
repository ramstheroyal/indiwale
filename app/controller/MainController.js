define(['app'],function(app){
  app.controller('MainController',function($scope,$window){
    $scope.message = "Welcome!";

  angular.element($window).bind('scroll',function(){
    if(window.scrollY > 30){
     $('.rr-header img.logo').css({'width':'100px'});
    }else{
     $('.rr-header img.logo').css({'width':''});
    }
    //console.log('scrolling');
  });

  });
});