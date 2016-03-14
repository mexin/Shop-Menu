angular
  .module('VintageMenu')
  .controller('senderController', function ($scope, $rootScope, $http, ngCart) {

    $scope.submit = function () {

      $scope.orderData = [];

      $scope.orderData.push({
        nombre: $scope.nombreComprador,
        email: $scope.emailComprador,
        cart: ngCart.getCart().items
      });

      console.log("enviando...");
      console.log($scope.orderData);

      if ($scope.orderData.length) {
        $http({
          method: 'POST',
          url: '/lib/contact-form.php',
          data: $scope.orderData,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
          console.log(data);
          if (data.success) {

          } else {

          }
        });
      } else {

      }
    };
  });
