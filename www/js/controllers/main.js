angular
  .module('VintageMenu')
  .controller("MainController", function ($scope, $stateParams, $http, $ionicLoading, productData) {

    $ionicLoading.show({
      templateUrl: 'templates/loading.html'
    });

    productData.success(function (data) {
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
