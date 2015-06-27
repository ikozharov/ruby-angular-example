angular.module('eventsFeed.sidebar',[])
  .directive('sidebar', function() {
    return {
      restrict: 'A',
      templateUrl: 'sidebar/sidebar.html'
    };
  });

