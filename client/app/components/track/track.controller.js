angular.module('app')
  .controller('TrackController',['TrackService', 'ArtistService', TrackController]);

function TrackController(TrackService, ArtistService){
  var vm = this;
  vm.artist = ArtistService.getArtist;
  vm.loading = false;
  vm.topTracks = [];
  vm.getTopTracks = getTopTracks;

  function getTopTracks(){
    vm.loading = true;
    TrackService.getTopTracks(vm.artist())
      .then(
        function(response){
          vm.loading = false;
          vm.topTracks = response.data.results.tracks;
        },
        function(response){
          vm.loading = false;
          vm.topTracks = "Something went wrong";
        });;
  }
}
