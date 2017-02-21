angular.module('app').factory('EventService', ['$http', EventService]);

function EventService($http) {
    var service = {
        getArtistEvents: getArtistEvents
    };

    return service;

    function getArtistEvents(artistName) {
      var slug = artistName.replace(" ", "-").toLowerCase();
      return $http.get('/api/'+slug+"/events");
    }
}
