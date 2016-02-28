angular
  .module('VintageMenu')
  .controller("productController", function ($scope, $stateParams, $filter, $ionicLoading, productData) {


    $ionicLoading.show({
      templateUrl: 'templates/loading.html'
    });

    productData.success(function (data) {
        $scope.product = $filter('filter')(data.products, {id: $stateParams.id})[0];
      })
      .error(function (data, status, headers, config) {
        console.log("We have been unable to access the api :-(");
      })
      .finally(function (data, status) {
        $ionicLoading.hide();
      })

  });
