angular.module('eventsFeed.userSelector',[])
  .directive('userSelector', function() {
    return {
      restrict: 'A',
      scope: true,
      replace: true,
      controller: [
        '$rootScope',
        '$scope',
        '$location',
        'localStorageService',
        function ($rootScope, $scope, $location, localStorage) {
          var index = _.findIndex($scope.users, localStorage.get('currentUser'));
          function getFullName (user) {
            return user.firstName.toLowerCase() + user.lastName.toLowerCase();
          }
          $rootScope.currentUser = $scope.users[index];

          $scope.$watch('currentUser', function (n, o) {
            localStorage.set('currentUser', n);
            if (n.id) {
              $location.search('user', getFullName(n));
            } else {
              $location.url($location.path());
            }
          });
        }
      ],
      templateUrl: 'userSelector/userSelector.html'
    };
  });


