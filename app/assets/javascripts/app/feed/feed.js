angular.module('eventsFeed.feed', ['ngRoute', 'eventsFeed.sidebar'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/categories/:category?', {
        templateUrl: "feed/feed.html",
        controller: 'feedController'
      });
  }])
  .controller('feedController', [
    '$scope',
    '$routeParams',
    '$location',
    function ($scope, $routeParams, $location) {
      if (!$routeParams.category) {
        $location.path('/categories/' + $scope.categories[0].title); 
      }

      $scope.categoryTitle = $routeParams.category;

      $scope.events = [{
        title: 'Project One',
        subheading: 'Subheading',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
        thumb: 'http://placeimg.com/700/300/any'
      },{
        title: 'Project Two',
        subheading: 'Subheading',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
        thumb: 'http://placeimg.com/700/300/any'
      },{
        title: 'Project Three',
        subheading: 'Subheading',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
        thumb: 'http://placeimg.com/700/300/any'
      },{
        title: 'Project Four',
        subheading: 'Subheading',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
        thumb: 'http://placeimg.com/700/300/any'
      },{
        title: 'Project Five',
        subheading: 'Subheading',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
        thumb: 'http://placeimg.com/700/300/any'
      },{
        title: 'Project Six',
        subheading: 'Subheading',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
        thumb: 'http://placeimg.com/700/300/any'
      }];
  }]);

