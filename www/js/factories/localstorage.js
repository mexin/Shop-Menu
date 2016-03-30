angular
  .module('VintageMenu')
  .factory("StorageService", function($localStorage) {

    $localStorage = $localStorage.$default({
      settings: [],
      products: []
    });
    //TODO refactor Storage Functions, interface maybe?
    //Setting Storage Functions
    var _getAll = function () {
      return $localStorage.settings;
    };

    var _add = function (setting) {
      $localStorage.settings.push(setting);
    }

    var _remove = function (setting) {
      $localStorage.settings.splice($localStorage.settings.indexOf(setting), 1);
    }

    //Product Storage Functions
    var _getAllProducts = function () {
      return $localStorage.products;
    };

    var _addProduct = function (product) {
      $localStorage.products.push(product);
    }

    var _removeProduct = function (product) {
      $localStorage.products.splice($localStorage.products.indexOf(product), 1);
    }

    return {
      getAll: _getAll,
      add: _add,
      remove: _remove,
      getAllProducts: _getAllProducts,
      addProduct: _addProduct,
      removeProduct: _removeProduct
    };

  });
