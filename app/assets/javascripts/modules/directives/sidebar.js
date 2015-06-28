angular.module('eventsFeed.sidebar',[])
  .directive('sidebar', function() {
    return {
      restrict: 'A',
      replace: true,
      controller: ['$scope', '$routeParams', function ($scope, $routeParams) {
        $scope.isActive = function (category) {
          return $routeParams.category === category.title;
        };
      }],
      templateUrl: 'sidebar/sidebar.html'
    };
  });

