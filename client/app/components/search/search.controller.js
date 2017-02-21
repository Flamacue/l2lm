angular.module('app')
  .controller('SearchController', ['$rootScope', 'ArtistService', SearchController]);

function SearchController($rootScope, ArtistService){
  var vm = this;
  vm.updateArtist = updateArtist;

  function updateArtist(artist){
    ArtistService.updateArtist(artist);
    $rootScope.$broadcast('updated-artist');
  }
}
