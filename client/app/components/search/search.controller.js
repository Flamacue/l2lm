angular.module('app')
  .controller('SearchController', ['ArtistService', SearchController]);

function SearchController(ArtistService){
  var vm = this;
  vm.updateArtist = updateArtist;

  function updateArtist(artist){
    ArtistService.updateArtist(artist);
  }
}
