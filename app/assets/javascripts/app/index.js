angular.module('eventsFeed', ['templates', 'eventsFeed.feed'])
  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

      $routeProvider
        .when('/', {
          redirectTo: function () {
            return "/categories";
          }
        });
    }
  ])
  .run(['$rootScope', function ($rootScope) {
    $rootScope.categories = angular.copy(window.__EVENTS_FEED_CATEGORIES__);
  }]);
