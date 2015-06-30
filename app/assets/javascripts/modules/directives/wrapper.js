angular.module('eventsFeed.wrapper',['eventsFeed.userSelector', 'eventsFeed.sidebar'])
  .directive('wrapper', function() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: true,
      templateUrl: 'wrapper/wrapper.html'
    };
  });



