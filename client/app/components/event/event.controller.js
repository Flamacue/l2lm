angular.module('app')
  .controller('EventController', ['EventService', 'ArtistService', EventController]);

function EventController(EventService, ArtistService){
  var vm = this;
  vm.artist = ArtistService.getArtist;
  vm.events = [];
  vm.getEvents = getEvents;

  function getEvents(){
    EventService.getArtistEvents(vm.artist())
      .then(
        function(response){
          vm.events = response.data.results.events;
        },
        function(response){
          vm.events = "Something went wrong";
        }
      );
  }
}
