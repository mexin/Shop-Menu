angular
  .module('VintageMenu')
  .controller("settingsController", function ($scope, $stateParams, $ionicLoading, $localStorage, $ionicModal, StorageService) {
    $scope.settings = StorageService.getAll();

    $ionicModal.fromTemplateUrl('templates/settings-modal.html', function(modal) {
      $scope.addDialog = modal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });

    $scope.showAddChangeDialog = function(action) {
      $scope.action = action;
      $scope.addDialog.show();
    };

    $scope.cancelDialog = function() {
      // Remove dialog
      $scope.addDialog.remove();
      // Reload modal template to have cleared form
      $ionicModal.fromTemplateUrl('templates/settings-modal.html', function(modal) {
        $scope.addDialog = modal;
      }, {
        scope: $scope,
        animation: 'slide-in-up'
      });
    };
    $scope.addItem = function(form) {
      var newItem = {};
      // Add values from form to object
      newItem.size = form.size.$modelValue;
      newItem.precio = form.precio.$modelValue;
      // Save new list in scope and factory
      StorageService.add(newItem);

      // Close dialog
      $scope.cancelDialog();
    };

    $scope.removeItem = function(item) {
      // Search & Destroy item from list
      StorageService.remove(item);
    }


  });
