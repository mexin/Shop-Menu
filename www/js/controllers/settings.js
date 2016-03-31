angular
  .module('VintageMenu')
  .controller("settingsController", function ($scope, $stateParams, $ionicLoading, $localStorage, $ionicModal, StorageService) {
    $scope.settings = StorageService.getAll();
    $scope.customProducts = StorageService.getAllProducts();

    $ionicModal.fromTemplateUrl('templates/settings-modal.html', function (modal) {
      $scope.addDialog1 = modal;
    }, {
      id: 1,
      scope: $scope,
      animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('templates/customProduct-modal.html', function (modal) {
      $scope.addDialog2 = modal;
    }, {
      id: 2,
      scope: $scope,
      animation: 'slide-in-up'
    });

    $scope.showAddChangeDialog = function (action, index) {
      $scope.action = action;
      (index == 1) ? $scope.addDialog1.show() : $scope.addDialog2.show()
    };

    $scope.cancelDialog = function (index) {
      // Remove dialog
      // (index == 1) ? $scope.addDialog1.remove() : $scope.addDialog2.remove()

      if (index == 1) {
        $scope.addDialog1.remove();
        $ionicModal.fromTemplateUrl('templates/settings-modal.html', function (modal) {
          $scope.addDialog1 = modal;
        }, {
          id: 1,
          scope: $scope,
          animation: 'slide-in-up'
        });
      } else {
        $scope.addDialog2.remove();
        $ionicModal.fromTemplateUrl('templates/customProduct-modal.html', function (modal) {
          $scope.addDialog2 = modal;
        }, {
          id: 2,
          scope: $scope,
          animation: 'slide-in-up'
        });
      }
    };

    $scope.addItem = function (form, index) {
      var newItem = {};

      if (index == 1) {
        newItem.size = form.size.$modelValue;
        newItem.precio = form.precio.$modelValue;

        StorageService.add(newItem);
        $scope.cancelDialog(1);

      } else {
        newItem.nombre = form.nombre.$modelValue;
        newItem.descripcion = form.descripcion.$modelValue;

        StorageService.addProduct(newItem);
        $scope.cancelDialog(2);

      }
    };

    $scope.removeItem = function (item, index) {
      // Search & Destroy item from list
      (index == 1) ? StorageService.remove(item) : StorageService.removeProduct(item);
    }


  });
