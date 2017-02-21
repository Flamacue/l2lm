angular.module('app').directive('seatGeekEvents',seatGeekEvents);

function seatGeekEvents(){
  return {
        templateUrl: '/app/components/event/event.html',
        restrict: 'EA',
        controller: 'EventController',
        controllerAs: 'eventvm'
      };
}
