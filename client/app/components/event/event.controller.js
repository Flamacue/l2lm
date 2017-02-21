angular.module('app')
  .controller('EventController', ['$rootScope', 'EventService', 'ArtistService', EventController]);

function EventController($rootScope, EventService, ArtistService){
  var vm = this;
  vm.artist = ArtistService.getArtist;
  vm.events = [];
  vm.getEvents = getEvents;
  vm.loading = false;

  //handler for searching events
  $rootScope.$on('updated-artist', function(event, data){
      vm.getEvents()
  });

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
