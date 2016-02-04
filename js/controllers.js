angular.module('turnos.controllers', [])

.controller('inicioCtrl', function($scope){
		
})
.controller('turnosCtrl', function($scope, $rootScope){
	$scope.success = function () {
        console.log('Copied!');
    };
    $scope.fail = function (err) {
        console.error('Error!', err);
    };

	$scope.turnos = [];
	$scope.mensajes = [];
	$scope.turno = {};
	var fecha = $rootScope.getDateTime();
	console.log(fecha);

	$scope.agregarTurno = function(turno){
		if(turno.nombre && turno.apellido && turno.hora && turno.fecha && turno.especialista && turno.direccion && turno.telefono && turno.especialista && turno.doctores){
			$scope.turnos.push(turno);
			console.log($scope.turnos);
			$scope.mensaje = 'Estimado '+ $scope.turno.sexo + $scope.turno.nombre + ' '+$scope.turno.apellido + '.' + ' Le informamos que tiene un turno disponible el día ' + $scope.turno.fecha + ' a las ' + $scope.turno.hora + ' con el médico ' + $scope.turno.doctores + '('+$scope.turno.especialista+')';
			$scope.mensajes.push($scope.mensaje);
			$scope.turno = {};
		}
		else{
			alert('Todos los campos son obligatorios');
		}
	};
})
.controller('soporteCtrl', function($scope){

})