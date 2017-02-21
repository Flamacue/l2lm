angular.module('app').factory('ArtistService', ArtistService);

function ArtistService() {
    //TODO use some sort of $watch mechanism to sync updates in controllers
    var artist = ""; //change this to gret value when search is complete

    var service = {
        getArtist: getArtist,
        updateArtist: updateArtist
    };

    return service;

    function getArtist() {
      return artist;
    }

    function updateArtist(artistName) {
      artist = artistName;
    }
}
