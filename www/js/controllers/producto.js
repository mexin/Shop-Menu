angular
  .module('VintageMenu')
  .controller("productController", function ($scope, $stateParams, $filter, $ionicLoading, productData, StorageService) {
    $scope.goSettings =function (){
      $state.go('settings');
    };

    $scope.sizes = StorageService.getAll();

    $scope.nicotinas = [
      {name: '0mg', nic: '0'},
      {name: '3mg', nic: '3'},
      {name: '6mg', nic: '6'},
      {name: '12mg', nic: '12'},
      {name: '18mg', nic: '18'},
      {name: '24mg', nic: '24'}
    ];

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
