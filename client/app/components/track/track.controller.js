angular.module('app')
  .controller('TrackController',['$rootScope','$sce', 'TrackService',
                                 'ArtistService', TrackController]);

function TrackController($rootScope, $sce, TrackService, ArtistService){
  var vm = this;
  vm.artist = ArtistService.getArtist;
  vm.loading = false;
  vm.topTracks = [];
  vm.getTopTracks = getTopTracks;

  //handler for searching events
  $rootScope.$on('updated-artist', function(event, data){
      vm.getTopTracks();
  });

  function getTopTracks(){
    vm.loading = true;
    TrackService.getTopTracks(vm.artist())
      .then(
        function(response){
          vm.loading = false;
          for (track in response.data.results.tracks){
            console.log(response.data.results.tracks[track].preview_url);
            response.data.results.tracks[track].preview_url = $sce.trustAsResourceUrl(response.data.results.tracks[track].preview_url);
            console.log(response.data.results.tracks[track].preview_url);
          }
          vm.topTracks = response.data.results.tracks;
        },
        function(response){
          vm.loading = false;
          vm.topTracks = "Something went wrong";
        });;
  }
}
