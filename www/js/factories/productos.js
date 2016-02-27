angular
  .module('VintageMenu')
  .factory("productData", function($http) {
    return $http.get('http://vintage-ejuice.com/wcapi/');
  });
