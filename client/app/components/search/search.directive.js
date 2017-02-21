angular.module('app').directive('search', search);

function search(){
  return {
        templateUrl: '/app/components/search/search.html',
        restrict: 'EA',
        controller: 'SearchController',
        controllerAs: 'searchvm'
      };
}
