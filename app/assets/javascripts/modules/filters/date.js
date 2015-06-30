angular.module('filters.date', [])
    .filter('parseDate', function () {
      return function(text) {
        return moment(text).format('Do MMMM h:mm A');
      };
    });
