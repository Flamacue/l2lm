angular.module('app')
.config(function($routeProvider){
  $routeProvider
    .when('/about', {
      templateUrl: 'app/components/about/about.html'
    })
    .when('/contact', {
      templateUrl: 'app/components/contact/contact.html'
    })
    .when('/', {
      templateUrl: 'app/components/main/main.html'
    })
  });
