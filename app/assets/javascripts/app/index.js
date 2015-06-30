angular.module('eventsFeed', [
  'templates',
  'angular-loading-bar',
  'ngAnimate',
  'ui.InfiniteScroll',
  'LocalStorageModule',
  'eventsFeed.wrapper',
  'eventsFeed.feed',
])
  .config([
    '$locationProvider',
    '$routeProvider',
    'cfpLoadingBarProvider',
    'localStorageServiceProvider',
    function($locationProvider, $routeProvider, LoadingBarProvider, localStorageProvider) {
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

      LoadingBarProvider.includeSpinner = false;
      localStorageProvider.setPrefix('eventsFeed');
    }
  ])
  .run(['$rootScope', 'cfpLoadingBar', '$http', function ($rootScope, cfpLoadingBar, $http) {
    $rootScope.isSidebarShow = true;
    $rootScope.categories = angular.copy(window.__EVENTS_FEED_CATEGORIES__);
    $rootScope.users = angular.copy(window.__EVENTS_FEED_USERS__);
  }]);
