angular.module('app')
  .controller('TrackController',['TrackService', 'ArtistService', TrackController]);

function TrackController(TrackService, ArtistService){
  var vm = this;
  vm.artist = ArtistService.getArtist;
  vm.topTracks = [];
  vm.getTopTracks = getTopTracks;

  function getTopTracks(){
    TrackService.getTopTracks(vm.artist())
      .then(
        function(response){
          vm.topTracks = response.data.results.tracks;
          console.log(vm.topTracks)
        },
        function(response){
          vm.topTracks = "Something went wrong";
        });;
  }
}
