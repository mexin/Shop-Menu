angular
  .module('VintageMenu')
  .controller("MainController", function ($scope, $stateParams, $http, $ionicLoading) {

    var url = $http.get('http://vintage-ejuice.com/wcapi/');

    $ionicLoading.show({
      templateUrl: 'templates/loading.html'
    });

    url.success(function (data) {
        console.log(data.products);
        $scope.products = data.products;
        $scope.paging = data.products;

      })
      .error(function (data, status, headers, config) {
        console.log("We have been unable to access the api :-(");
      })
      .finally(function (data, status) {
          $ionicLoading.hide();
      })

  });
