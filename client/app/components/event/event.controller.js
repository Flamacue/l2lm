angular.module('app')
  .controller('EventController', ['EventService', 'ArtistService', EventController]);

function EventController(EventService, ArtistService){
  var vm = this;
  vm.artist = ArtistService.getArtist;
  vm.events = [];
  vm.getEvents = getEvents;
  vm.loading = false;

  function getEvents(){
    vm.loading = true;
    EventService.getArtistEvents(vm.artist())
      .then(
        function(response){
          vm.loading = false;
          vm.events = response.data.results.events;
        },
        function(response){
          vm.loading = false;
          vm.events = "Something went wrong";
        }
      );
  }
}
