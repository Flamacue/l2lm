angular.module('app').factory('ArtistService', ArtistService);

function ArtistService() {
    var artist = "";

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
