angular.module('feedsHelper', [])
  .factory('feedsHelperFactory', ['$http', function($http) {
    return {
      getCurrentCategory: function (categories, title) {
        children = _.flatten(_.pluck(categories, 'children'));

        var filtered = children.filter(function (category) {
          return category.title === title;
        });

        return filtered[0] || {};
      },
      getEventsByCategory: function (categoryId, limit, offset, userId) {
        var params = {
          category_id: categoryId,
          limit: limit,
          offset: offset,
          user_id: userId
        };

        return $http.get('/api/events', {
          params: params
        });
      },
      getUserIdByFullName: function (users, name) {
        //name is user.firstName.toLowerCase() + user.lastName.toLowerCase() or undefined
        if (!name) {
          return;
        }

        var index = _.findIndex(users, function(user) {
          return !!user.id && user.firstName.toLowerCase() + user.lastName.toLowerCase() === name;
        });

        return users[index].id;
      },
      getFrstCategoryTitle: function (categories) {
        children = _.flatten(_.pluck(categories, 'children'));
        return children[0].title;
      }
    };
  }]);
