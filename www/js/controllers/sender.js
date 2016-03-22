angular
  .module('VintageMenu')
  .controller('senderController', function ($scope, $ionicNavBarDelegate, $rootScope, $http, $ionicPopup, ngCart) {
    $scope.ngCart = ngCart;

    $scope.showAlert = function (title, message, response) {
      var alertPopup = $ionicPopup.alert({
        title: title,
        template: message + '<br><br>' + ((response === null) ? '' : response.statusText)
      });
    };

    $scope.submit = function () {

      $scope.orderData = [];

      $scope.orderData.push({
        nombre: $scope.nombreComprador,
        email: $scope.emailComprador,
        cart: ngCart.getCart().items
      });


      var parameters = JSON.stringify({
        nombre: $scope.nombreComprador,
        email: $scope.emailComprador,
        cart: ngCart.getCart().items,
        total: ngCart.totalCost()
      });
      if ($scope.orderData.length) {
        $http.post('http://10.0.1.10:3000/order', parameters)
          .then(function successCallback(response) {
            console.log(response);
            $scope.showAlert('Enviado Exitoso', 'Tu orden ah sido enviada de manera exitosa.<br><br> ¡Gracias por tu preferencia!', null);
            $scope.nombreComprador = "";
            $scope.emailComprador = "";
            ngCart.empty();
            $ionicNavBarDelegate.back();
          }, function errorCallback(response) {
            console.log(response);
            $scope.showAlert('Error!', 'Tu orden no se pudo enviar, ya que hubo algún problema, vuelve a intentarlo.', response);
          })
      } else {

      }
    };
  });
