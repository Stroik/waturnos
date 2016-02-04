angular.module('starter.services', [])

.factory('Turnos', function($localStorage, $rootScope, $stateParams) {
    var Turnos = $localStorage.turnos;

    return {
        all: function() {
            return Turnos;
        },
        one: function(id) {
            var allturnos = Turnos;
            var turno = _.first(_.filter(allturnos, {
                'id': id
            }));
            return turno;
        },
        save: function(turno) {
            Turnos.push(turno);
        },
        del: function(turno) {
            Turnos.splice(Turnos.indexOf(turno), 1);
        }
    }
})
.factory('Fire', function($firebaseArray, $localStorage){
    var ref = new Firebase(firebaseURL).child('Turnos');
    var list = $firebaseArray(ref);

    return{
        push: function(turnos){
            list.$add(turnos).then(function(){
                $localStorage.turnos = [];
            })
        }
    }
})