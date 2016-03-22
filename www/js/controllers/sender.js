angular
  .module('VintageMenu')
  .controller('senderController', function ($scope, $rootScope, $http, ngCart) {
    $scope.ngCart = ngCart;

    $scope.submit = function () {

      console.log($scope.nombreComprador);
      console.log($scope.emailComprador);

      $scope.orderData = [];

      $scope.orderData.push({
        nombre: $scope.nombreComprador,
        email: $scope.emailComprador,
        cart: ngCart.getCart().items
      });

      console.log("enviando...");

      var parameters = JSON.stringify({
        nombre: $scope.nombreComprador,
        email: $scope.emailComprador,
        cart: ngCart.getCart().items,
        total: ngCart.totalCost()
      });
      if ($scope.orderData.length) {
        //$http.defaults.headers.post["Content-Type"] = "application/json";
        $http.post('http://10.0.1.10:3000/order', parameters)
          .then(function successCallback(response) {
            console.log(response);
          })
          .catch(function errorCallback(response) {
            console.log(response);
          })
      } else {

      }
    };
  });
