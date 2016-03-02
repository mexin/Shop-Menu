angular
  .module('VintageMenu')
  .factory("StorageService", function($localStorage) {

    $localStorage = $localStorage.$default({
      settings: []
    });

    var _getAll = function () {
      return $localStorage.settings;
    };

    var _add = function (setting) {
      $localStorage.settings.push(setting);
    }

    var _remove = function (setting) {
      $localStorage.settings.splice($localStorage.settings.indexOf(setting), 1);
    }

    return {
      getAll: _getAll,
      add: _add,
      remove: _remove
    };

  });
