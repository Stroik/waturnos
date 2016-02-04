angular.module('turnos', ['ui.router', 'angular-clipboard', 'turnos.controllers'])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/inicio");
  //
  // Now set up the states
  $stateProvider
    .state('inicio', {
      url: "/inicio",
      templateUrl: "partials/home.html",
      controller: "inicioCtrl"
    })
    .state('nuevo-turno', {
      url: "/nuevo-turno",
      templateUrl: "partials/nuevo-turno.html",
      controller: "turnosCtrl"
    })
    .state('soporte', {
      url: "/soporte",
      templateUrl: "partials/soporte.html",
      controller: "soporteCtrl"
    });
}).run(function($rootScope, $location){
	$rootScope.getClass = function(path) {
	  if ($location.path().substr(0, path.length) === path) {
	    return 'active';
	  } else {
	    return '';
	  }
	};
  $rootScope.getDateTime = function() {
      var now     = new Date(); 
      var year    = now.getFullYear();
      var month   = now.getMonth()+1; 
      var day     = now.getDate();
      var hour    = now.getHours();
      var minute  = now.getMinutes();
      var second  = now.getSeconds(); 
      if(month.toString().length == 1) {var month = '0'+month;}
      if(day.toString().length == 1) {var day = '0'+day;}   
      if(hour.toString().length == 1) {var hour = '0'+hour;}
      if(minute.toString().length == 1) {var minute = '0'+minute;}
      if(second.toString().length == 1) {var second = '0'+second;}
      var ampm = hour >= 12 ? 'PM' : 'AM';
      var dateTime = day+'/'+month+'/'+year;  
      return dateTime;
    };
});