angular.module('app').factory('TrackService', ['$http', '$sanitize', TrackService]);

function TrackService($http, $sanitize) {
    var service = {
        getTopTracks: getTopTracks
    };

    return service;

    function getTopTracks(artistName) {
      // %20 needs to be +
      // need to test more encodings in the URI
      return $http.get('/api/'+artistName.replace(' ','+')+"/top-tracks");
    }
}
