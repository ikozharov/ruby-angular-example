angular.module('eventsFeed', [
  'templates',
  'angular-loading-bar',
  'ngAnimate',
  'ui.InfiniteScroll',
  'eventsFeed.wrapper',
  'eventsFeed.feed',
])
  .config([
    '$locationProvider',
    '$routeProvider',
    'cfpLoadingBarProvider',
    function($locationProvider, $routeProvider, cfpLoadingBarProvider) {
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

      cfpLoadingBarProvider.includeSpinner = false;
    }
  ])
  .run(['$rootScope', 'cfpLoadingBar', '$http', function ($rootScope, cfpLoadingBar, $http) {
    $rootScope.isSidebarShow = true;
    $rootScope.categories = angular.copy(window.__EVENTS_FEED_CATEGORIES__);
  }]);
