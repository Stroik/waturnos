angular.module('turnos.controllers', [])

.controller('inicioCtrl', function($scope) {
    $scope.titulo = "Inicio";
})
.controller('turnosCtrl', function($scope, $rootScope, $filter, $localStorage, clipboard, $state) {
    $scope.titulo = "Turnos";
    $scope.$storage = $localStorage;

    $scope.success = function() {
        console.log('Copied!');
    };
    $scope.fail = function(err) {
        console.error('Error!', err);
    };

    $scope.turnos = $localStorage.turnos;
    $scope.mensajes = $localStorage.mensajes;
    $scope.turno = {}

    $scope.copy = function(turno, index) {
        clipboard.copyText(turno.sexo + turno.nombre + ' ' + turno.apellido + '.' + ' Le informamos que tiene un turno disponible el día ' + $filter('date')(turno.fechayhora, 'dd-MM-yyyy HH:mm') + ' con el médico ' + turno.doctores + ' (' + turno.especialista + ')');
    };

    $scope.turno.createdAt = $rootScope.getDateTime();
    $scope.agregarTurno = function(turno) {
        if (turno.nombre && turno.apellido && turno.fechayhora && turno.especialista && turno.direccion && turno.telefono && turno.especialista && turno.doctores) {
            $scope.turnos.push(turno);
            console.log($scope.turnos);
            $scope.mensaje = 'Estimado ' + $scope.turno.sexo + $scope.turno.nombre + ' ' + $scope.turno.apellido + '.' + ' Le informamos que tiene un turno disponible el día ' + $scope.turno.fechayhora + ' con el médico ' + $scope.turno.doctores + '(' + $scope.turno.especialista + ')';
            $scope.mensajes.push($scope.mensaje);
            $scope.vaciar();
            $state.go('turnos');
        } else {
            alert('Todos los campos son obligatorios');
        }
    };

    $scope.vaciar = function() {
        $scope.turno = {};
    }
})
.controller('soporteCtrl', function($scope) {
    $scope.titulo = "Soporte";
})
