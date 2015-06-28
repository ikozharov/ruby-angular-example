angular.module('feedsHelper', [])
  .factory('feedsHelperFactory', function() {
    return {
      getCurrentCategory: function (categories, title) {
        var filtered = categories.filter(function (category) {
          return category.title === title;
        });

        return filtered[0];
      }
    };
  });
