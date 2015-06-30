angular.module('eventsFeed.feed', [
  'ngRoute',
  'feedsHelper',
  'eventsFeed.hamnurger'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/categories/:category?', {
        templateUrl: "feed/feed.html",
        controller: 'feedController'
      });
  }])
  .controller('feedController', [
    '$rootScope',
    '$scope',
    '$routeParams',
    '$location',
    'feedsHelperFactory',
    function ($rootScope, $scope, $routeParams, $location, helpers) {
      if (!$routeParams.category) {
        $location.path('/categories/' + $scope.categories[0].title);
        return false;
      }

      $scope.currentCategory =
        helpers.getCurrentCategory($rootScope.categories, $routeParams.category);

      $scope.events = [];

      var limit = 5,
          offset = 0,
          onLoading = false,
          stopLoadMore = false;

      $scope.onScroll = function () {
        if (onLoading || stopLoadMore) {
          return;
        }

        onLoading = true;

        helpers.getEventsByCategory($scope.currentCategory.id, limit, offset)
          .success(function (data) {
            $scope.events = $scope.events.concat(data);
            offset += data.length;
            stopLoadMore = data.length < limit;
            onLoading = false;
          });
      };

      $scope.onScroll();

      $rootScope.$watch('currentUser', function (n) {
        console.log(n);
      }, true);
  }]);

