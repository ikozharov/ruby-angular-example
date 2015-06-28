angular.module('eventsFeed.wrapper',[])
  .directive('wrapper', function() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: true,
      templateUrl: 'wrapper/wrapper.html'
    };
  });



