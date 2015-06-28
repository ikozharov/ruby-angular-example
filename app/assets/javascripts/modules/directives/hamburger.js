angular.module('eventsFeed.hamnurger',[])
  .directive('hamnurger', function() {
    return {
      restrict: 'A',
      scope: true,
      replace: true,
      controller: ['$rootScope', '$scope', function ($rootScope, $scope) {
        $scope.toogleSidebar = function () {
          $rootScope.isSidebarShow = !$rootScope.isSidebarShow;
        };
      }],
      template: '<span class="glyphicon glyphicon-menu-hamburger hamburger btn btn-primary" ng-click="toogleSidebar()"></span>'
    };
  });


