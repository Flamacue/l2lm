angular.module('app').factory('EventService', ['$http', EventService]);

function EventService($http) {
    var service = {
        getArtistEvents: getArtistEvents
    };

    return service;

    function getArtistEvents(artistName) {
      var slug = artistName.split(" ").join("-").toLowerCase();
      return $http.get('/api/'+slug+"/events");
    }
}
