angular.module('eventsFeed.userSelector',[])
  .directive('userSelector', function() {
    return {
      restrict: 'A',
      scope: true,
      replace: true,
      controller: [
        '$rootScope',
        '$scope',
        'localStorageService',
        function ($rootScope, $scope, localStorage) {
          var index = _.findIndex($scope.users, localStorage.get('currentUser'));
          $rootScope.currentUser = $scope.users[index];

          $scope.$watch('currentUser', function (n, o) {
            localStorage.set('currentUser', n);
          });
        }
      ],
      templateUrl: 'userSelector/userSelector.html'
    };
  });


