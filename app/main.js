require.config({
 baseUrl:'.',
 waitSeconds:200,
 paths:{
   "jquery":"//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min",
   "jqueryUi":"//ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min",
   "bootstrap":"//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min",
   "angular":"//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min",
   "app":"app/app",
   "script":"resources/script/script",
   "domReady":"resources/vendor/requirejs/domready"
 },
 shim:{
  "jqueryUi":{
    "deps":['jquery']
  },
  "bootstrap":{
   "deps":["jquery","jqueryUi"]
  },
  "angular":{
   "deps":["jquery"]
  },
  "app":{
    "deps":["jquery","bootstrap","angular"]
  }
 }
});

require(['domReady','app'],function(domReady){
   domReady(function(){
    angular.element(document).ready(function() {
      angular.bootstrap(document, ['Indiwale']);
    });
   });
});