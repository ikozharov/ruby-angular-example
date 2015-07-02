angular.module('eventsFeed.sidebar',[])
  .directive('sidebar', function() {
    return {
      restrict: 'A',
      replace: true,
      controller: ['$scope', '$routeParams', function ($scope, $routeParams) {
        $scope.isActive = function (category) {
          return $routeParams.category === category.title;
        };

        $scope.categories.forEach(function (category) {
          var filtered = category.children.filter(function (category) {
            return category.title === $routeParams.category;
          });

          if (filtered.length) {
            category.isShow = true;
          }
        });
      }],
      templateUrl: 'sidebar/sidebar.html'
    };
  });

