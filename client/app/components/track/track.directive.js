angular.module('app').directive('spotifyTracks',spotifyTracks);

function spotifyTracks(){
  return {
        templateUrl: '/app/components/track/track.html',
        restrict: 'EA',
        controller: 'TrackController',
        controllerAs: 'trackvm'
      };
}
