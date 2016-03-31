angular
  .module('VintageMenu')
  .controller("MainController", function ($scope, $state, $stateParams, $http, $ionicLoading, productData, StorageService) {


    $scope.goSettings = function () {
      $state.go('settings');
    };

    $scope.sizes = StorageService.getAll();
    $scope.customProducts = StorageService.getAllProducts();

    $scope.nicotinas = [
      {name: '0mg', value: '0'},
      {name: '3mg', value: '3'},
      {name: '6mg', value: '6'},
      {name: '12mg', value: '12'},
      {name: '18mg', value: '18'},
      {name: '24mg', value: '24'}
    ];

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
