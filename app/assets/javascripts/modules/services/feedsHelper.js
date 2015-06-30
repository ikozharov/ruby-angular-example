angular.module('feedsHelper', [])
  .factory('feedsHelperFactory', ['$http', function($http) {
    return {
      getCurrentCategory: function (categories, title) {
        var filtered = categories.filter(function (category) {
          return category.title === title;
        });

        return filtered[0];
      },
      getEventsByCategory: function (categoryId, limit, offset) {
        return $http.get('/api/events', {
          params: { category_id: categoryId, limit: limit, offset: offset }
        });
      }
    };
  }]);
